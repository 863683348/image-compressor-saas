// Test if Vercel can reach Google's OIDC discovery endpoint
export const dynamic = "force-dynamic";

export async function GET() {
  const out: any = { ok: true, tests: {} };

  // Test 1: direct fetch to Google's OIDC discovery
  try {
    const start = Date.now();
    const r = await fetch("https://accounts.google.com/.well-known/openid-configuration", {
      signal: AbortSignal.timeout(8000),
    });
    const cost = Date.now() - start;
    out.tests.googleDiscovery = {
      status: r.status,
      costMs: cost,
      ok: r.ok,
    };
    if (r.ok) {
      const j = await r.json();
      out.tests.googleDiscovery.authEndpoint = j.authorization_endpoint;
    }
  } catch (e: any) {
    out.tests.googleDiscovery = { error: e.message, name: e.name };
  }

  // Test 2: Google's OAuth auth endpoint directly
  try {
    const r = await fetch("https://accounts.google.com/o/oauth2/v2/auth?client_id=test", {
      method: "HEAD",
      signal: AbortSignal.timeout(5000),
      redirect: "manual",
    });
    out.tests.googleAuth = { status: r.status };
  } catch (e: any) {
    out.tests.googleAuth = { error: e.message };
  }

  // Test 3: NextAuth internal — call getAuthorizationUrl directly
  try {
    const Google = (await import("next-auth/providers/google")).default;
    const provider = Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    });
    // Look up @auth/core internal
    const { Auth: AuthInternal } = await import("@auth/core");
    // Just check we can import
    out.tests.internalImport = "OK";
  } catch (e: any) {
    out.tests.internalImport = { error: e.message };
  }

  return Response.json(out);
}