// 调用 @auth/core 内部 Auth，捕获 logger 输出（真实错误）
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const out: any = { ok: true, logs: [] };
  try {
    const { Auth } = await import("@auth/core");
    const Google = (await import("next-auth/providers/google")).default;
    const { DrizzleAdapter } = await import("@auth/drizzle-adapter");
    const { neon } = await import("@neondatabase/serverless");
    const { drizzle } = await import("drizzle-orm/neon-http");
    const sql = neon(process.env.DATABASE_URL!);
    const db = drizzle(sql);

    const logs: string[] = [];
    const logger = {
      debug: (...args: any[]) => logs.push("DEBUG: " + args.map(a => JSON.stringify(a)).join(" ")),
      info: (...args: any[]) => logs.push("INFO: " + args.map(a => JSON.stringify(a)).join(" ")),
      warn: (...args: any[]) => logs.push("WARN: " + args.map(a => (a?.message || JSON.stringify(a))).join(" ")),
      error: (...args: any[]) => logs.push("ERROR: " + args.map(a => (a?.message || a?.stack || JSON.stringify(a))).join(" | ")),
    };

    // Construct a fake request URL to /api/auth/signin/google
    const url = new URL("https://image-compressor-saas.vercel.app/api/auth/signin/google");
    const fakeReq = new Request(url, { headers: { host: "image-compressor-saas.vercel.app" } });

    const res = await Auth(fakeReq as any, {
      adapter: DrizzleAdapter(db as any),
      secret: process.env.AUTH_SECRET,
      trustHost: true,
      basePath: "/api/auth",
      providers: [Google({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      })],
      logger,
    } as any);

    out.status = (res as any)?.status;
    out.headers = Object.fromEntries((res as any)?.headers?.entries?.() || []);
    let body = "";
    try { body = ((res as any)?.body ? String((res as any).body).slice(0, 200) : ""); } catch {}
    out.body = body;
    out.logs = logs;
    return Response.json(out);
  } catch (e: any) {
    return Response.json({
      ok: false,
      errorName: e?.name,
      errorMessage: e?.message,
      errorCause: e?.cause?.message || JSON.stringify(e?.cause),
      stack: (e?.stack || "").split("\n").slice(0, 12).join("\n"),
    }, { status: 200 });
  }
}