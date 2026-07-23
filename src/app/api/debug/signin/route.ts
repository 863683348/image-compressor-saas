// 通过 fetch 调用真实端点（Next.js 正确构造 Request），捕获 status 和 location
export const dynamic = "force-dynamic";

export async function GET() {
  const url = "https://image-compressor-saas.vercel.app/api/auth/signin/google";
  try {
    const res = await fetch(url, {
      method: "GET",
      redirect: "manual", // 不自动跟随 redirect，捕获 Location header
      headers: {
        // 模拟浏览器
        accept: "text/html,application/xhtml+xml",
      },
    });
    const status = res.status;
    const location = res.headers.get("location");
    const setCookie = res.headers.get("set-cookie");
    let body = "";
    try { body = (await res.text()).slice(0, 300); } catch {}
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
    }, { status: 200 });
  }
}