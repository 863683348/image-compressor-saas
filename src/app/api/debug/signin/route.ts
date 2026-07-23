// 直接调用 NextAuth handlers.GET 模拟浏览器访问 /api/auth/signin/google
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const { handlers } = await import("@/lib/auth");
    const fakeReq = new Request("https://image-compressor-saas.vercel.app/api/auth/signin/google", {
      method: "GET",
      headers: {
        host: "image-compressor-saas.vercel.app",
        "x-forwarded-proto": "https",
        "x-forwarded-host": "image-compressor-saas.vercel.app",
      },
    });
    const res = await handlers.GET(fakeReq as any);
    const status = res?.status;
    const location = res?.headers?.get?.("location");
    const setCookie = res?.headers?.get?.("set-cookie");
    let body = "";
    try { body = (await res?.text?.())?.slice(0, 200) || ""; } catch {}
    return Response.json({
      ok: true,
      status,
      location,
      hasSetCookie: !!setCookie,
      bodyPreview: body,
    });
  } catch (e: any) {
    return Response.json({
      ok: false,
      errorName: e?.name,
      errorMessage: e?.message,
      errorCause: e?.cause?.message || e?.cause,
      stack: (e?.stack || "").split("\n").slice(0, 12).join("\n"),
    }, { status: 200 });
  }
}