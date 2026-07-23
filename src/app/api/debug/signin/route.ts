// 测试 POST /api/auth/signin/google（next-auth/react 的 signIn 走的就是这个）
export const dynamic = "force-dynamic";

export async function GET() {
  const out: any = { ok: true, tests: {} };
  try {
    // Get csrf token first
    const csrfRes = await fetch("https://image-compressor-saas.vercel.app/api/auth/csrf");
    const csrfData = await csrfRes.json();
    const csrfToken = csrfData.csrfToken;
    out.tests.csrf = csrfToken?.slice(0, 10) + "...";

    // Now POST to signin/google with csrfToken
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
      },
      body: params.toString(),
      redirect: "manual",
    });
    out.tests.signinStatus = signinRes.status;
    out.tests.signinLocation = signinRes.headers.get("location")?.slice(0, 200);
    let body = "";
    try { body = (await signinRes.text()).slice(0, 200); } catch {}
    out.tests.signinBody = body;
    return Response.json(out);
  } catch (e: any) {
    return Response.json({
      ok: false,
      errorMessage: e.message,
    }, { status: 200 });
  }
}