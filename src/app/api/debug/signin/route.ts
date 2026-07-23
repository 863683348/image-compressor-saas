// 临时调试：尝试调用 signIn("google")，捕获真实错误并返回
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    // Dynamic import so we capture auth init errors
    const { signIn } = await import("@/lib/auth");
    // signIn returns a redirect Response — we just want to trigger init
    await signIn("google", { redirect: false });
    return Response.json({ ok: true, msg: "signIn initiated without throwing" });
  } catch (e: any) {
    return Response.json({
      ok: false,
      errorName: e?.name,
      errorMessage: e?.message,
      errorCause: e?.cause?.message || e?.cause,
      errorCode: e?.code,
      stack: (e?.stack || "").split("\n").slice(0, 10).join("\n"),
    }, { status: 200 });
  }
}