// 真正构造 OAuth URL，捕获任何 throw
export const dynamic = "force-dynamic";

export async function GET() {
  const out: any = { ok: true, steps: {} };
  try {
    // Step 1: import provider
    const Google = (await import("next-auth/providers/google")).default;
    const { DrizzleAdapter } = await import("@auth/drizzle-adapter");
    const { neon } = await import("@neondatabase/serverless");
    const { drizzle } = await import("drizzle-orm/neon-http");
    out.steps.import = "OK";

    // Step 2: env check
    const env = {
      GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID?.slice(0, 8) + "...",
      GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET?.slice(0, 6) + "...",
      AUTH_SECRET: process.env.AUTH_SECRET?.length,
      AUTH_URL: process.env.AUTH_URL,
    };
    out.steps.env = env;

    // Step 3: try to instantiate provider
    let provider;
    try {
      provider = Google({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      });
      out.steps.provider = "OK id=" + provider.id;
    } catch (e: any) {
      out.steps.provider = { error: e.message, stack: e.stack?.split("\n").slice(0, 5) };
    }

    // Step 4: try drizzle init
    let db;
    try {
      const sql = neon(process.env.DATABASE_URL!);
      db = drizzle(sql);
      out.steps.db = "OK";
    } catch (e: any) {
      out.steps.db = { error: e.message };
    }

    // Step 5: try DrizzleAdapter
    try {
      const adapter = DrizzleAdapter(db as any);
      out.steps.adapter = "OK";
    } catch (e: any) {
      out.steps.adapter = { error: e.message, stack: e.stack?.split("\n").slice(0, 5) };
    }

    return Response.json(out);
  } catch (e: any) {
    return Response.json({
      ok: false,
      outerError: e.message,
      steps: out.steps,
    }, { status: 200 });
  }
}