// Test POST with cookies attached
export const dynamic = "force-dynamic";

export async function GET() {
  const out: any = { ok: true, tests: {} };
  try {
    // Step 1: get csrf and capture cookie
    const csrfRes = await fetch("https://image-compressor-saas.vercel.app/api/auth/csrf", {
      redirect: "manual",
    });
    const csrfData = await csrfRes.json();
    const csrfToken = csrfData.csrfToken;
    const csrfCookie = csrfRes.headers.get("set-cookie");
    out.tests.csrf = { token: csrfToken?.slice(0, 10), cookie: csrfCookie?.slice(0, 60) };

    // Step 2: extract csrf cookie value
    const csrfCookieMatch = csrfCookie?.match(/authjs\.csrf-token=([^;]+)/);
    const csrfCookieValue = csrfCookieMatch ? `authjs.csrf-token=${csrfCookieMatch[1]}` : "";

    // Step 3: POST with cookie
    const params = new URLSearchParams({
      csrfToken,
      callbackUrl: "https://image-compressor-saas.vercel.app/",
      json: "true",
    });
    const signinRes = await fetch("https://image-compressor-saas.vercel.app/api/auth/signin/google", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "X-Auth-Return-Redirect": "1",
        "Cookie": csrfCookieValue,
      },
      body: params.toString(),
      redirect: "manual",
    });
    out.tests.signinStatus = signinRes.status;
    out.tests.signinLocation = signinRes.headers.get("location")?.slice(0, 250);
    let body = "";
    try { body = (await signinRes.text()).slice(0, 250); } catch {}
    out.tests.signinBody = body;
    return Response.json(out);
  } catch (e: any) {
    return Response.json({ ok: false, errorMessage: e.message }, { status: 200 });
  }
}