// 直接调用 Google provider 的 signin 函数，捕获真实错误
export const dynamic = "force-dynamic";

export async function GET() {
  const out: any = { ok: true };
  try {
    const Google = (await import("next-auth/providers/google")).default;
    const provider = Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    });
    out.providerType = typeof provider;
    out.providerId = provider.id;
    out.providerName = provider.name;
    out.providerType2 = provider.type;
    out.providerKeys = Object.keys(provider);
    
    // Try to call signin endpoint of provider
    try {
      // simulate next-auth request shape
      const url = new URL("https://image-compressor-saas.vercel.app/api/auth/signin/google");
      const fakeContext = { 
        url, 
        request: new Request(url), 
        provider: provider,
      };
      // Try invoking the signin action — different next-auth versions use different shapes
      // Just check if authorization.url gets generated
      if (provider.authorization) {
        out.authorization = provider.authorization;
      }
      // The actual OAuth URL construction
      if (typeof (provider as any).authorizationUrl === 'function') {
        try {
          const oauthUrl = await (provider as any).authorizationUrl({ 
            state: "teststate123", 
            code_verifier: "testverifier", 
            redirect_uri: "https://image-compressor-saas.vercel.app/api/auth/callback/google"
          });
          out.oauthUrlOk = true;
          out.oauthUrlPreview = oauthUrl?.toString?.()?.slice(0, 200);
        } catch (e: any) {
          out.oauthUrlError = e.message;
        }
      }
    } catch (e: any) {
      out.explorationError = e.message;
    }
    
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