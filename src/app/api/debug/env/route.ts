// 临时调试端点：返回关键 env var 是否存在（不返回真实值，避免泄漏）
// 部署后访问 /api/debug/env 看哪些变量 Vercel 没读到
export const dynamic = "force-dynamic";

const KEYS = [
  "DATABASE_URL",
  "GOOGLE_CLIENT_ID",
  "GOOGLE_CLIENT_SECRET",
  "AUTH_SECRET",
  "AUTH_URL",
  "PAYPAL_CLIENT_ID",
  "PAYPAL_CLIENT_SECRET",
  "PAYPAL_WEBHOOK_ID",
  "PAYPAL_SANDBOX",
  "NODE_ENV",
  "VERCEL_ENV",
];

export async function GET() {
  const status: Record<string, { present: boolean; length?: number }> = {};
  for (const k of KEYS) {
    const v = process.env[k];
    status[k] = { present: !!v, length: v?.length ?? 0 };
  }
  return Response.json({
    ok: true,
    ts: new Date().toISOString(),
    env: status,
    hint:
      "Missing: AUTH_SECRET/AUTH_URL/GOOGLE_* are required for Google login. PAYPAL_SANDBOX should be 'false' on production.",
  });
}