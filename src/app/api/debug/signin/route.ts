// 测试所有 NextAuth 路径的真实状态
export const dynamic = "force-dynamic";

export async function GET() {
  const paths = [
    "/api/auth/providers",
    "/api/auth/csrf",
    "/api/auth/session",
    "/api/auth/signin",
    "/api/auth/signin/google",
    "/api/auth/error",
  ];
  const base = "https://image-compressor-saas.vercel.app";
  const results: any = {};
  for (const p of paths) {
    try {
      const res = await fetch(base + p, { redirect: "manual" });
      const status = res.status;
      const location = res.headers.get("location");
      let body = "";
      try { body = (await res.text()).slice(0, 150); } catch {}
      results[p] = { status, location: location?.slice(0, 120), body: body?.replace(/\n/g, " ").slice(0, 100) };
    } catch (e: any) {
      results[p] = { error: e.message };
    }
  }
  return Response.json({ ok: true, results });
}