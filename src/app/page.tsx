import Link from "next/link";

export default function Home() {
  return (
    <main style={{
      maxWidth: 600, margin: "80px auto", padding: "0 20px",
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    }}>
      <h1 style={{ fontSize: 28, marginBottom: 8 }}>Image Compressor API</h1>
      <p style={{ color: "#6b7280", marginBottom: 32, lineHeight: 1.6 }}>
        SaaS backend for the privacy-first image compressor.
        Manages user authentication, usage quotas, and payments.
      </p>

      <div style={{
        background: "#f6f7f9", borderRadius: 12, padding: 24,
        border: "1px solid #e5e7eb", marginBottom: 24
      }}>
        <h2 style={{ fontSize: 16, margin: "0 0 12px" }}>API Endpoints</h2>
        <div style={{ fontSize: 14, lineHeight: 2 }}>
          <code style={{ background: "#eef2ff", padding: "2px 6px", borderRadius: 4 }}>
            GET /api/auth/session
          </code> — Check login status<br />
          <code style={{ background: "#eef2ff", padding: "2px 6px", borderRadius: 4 }}>
            GET /api/auth/signin
          </code> — Google login<br />
          <code style={{ background: "#eef2ff", padding: "2px 6px", borderRadius: 4 }}>
            GET /api/usage
          </code> — Query remaining quota<br />
          <code style={{ background: "#eef2ff", padding: "2px 6px", borderRadius: 4 }}>
            POST /api/usage
          </code> — Record a compression
        </div>
      </div>

      <p style={{ fontSize: 13, color: "#9ca3af" }}>
        Built with Next.js 15 + Neon Postgres + NextAuth.js
      </p>
    </main>
  );
}
