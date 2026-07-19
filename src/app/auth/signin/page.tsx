"use client";

import { signIn } from "next-auth/react";

export default function SignInPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "60vh", padding: 20 }}>
      <div style={{ maxWidth: 400, width: "100%", textAlign: "center" }}>
        <h1 style={{ fontSize: 24, marginBottom: 8 }}>Image Compressor</h1>
        <p style={{ color: "#6b7280", marginBottom: 32 }}>Sign in to track your usage and unlock premium features.</p>
        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            padding: "12px 28px", borderRadius: 999, border: "1px solid #e5e7eb",
            background: "#fff", color: "#1f2430", fontSize: 15, fontWeight: 600,
            cursor: "pointer", transition: ".15s",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.6 20H24v8.5h11.3a10 10 0 0 1-4.4 6.5l6.9 5.3c4-3.7 6.3-9.2 6.3-15.7 0-1.5-.1-2.9-.4-4.2z"/><path fill="#FF3D00" d="M10.3 28.5A10 10 0 0 1 9.5 24c0-1.6.3-3.1.8-4.5L3.5 14a17.8 17.8 0 0 0 0 20l6.8-5.5z"/><path fill="#4CAF50" d="M24 44c4.9 0 9-1.6 12-4.3l-6.9-5.3a9.6 9.6 0 0 1-5.1 1.5c-3.9 0-7.3-2.6-8.5-6.2l-6.8 5.3A17.8 17.8 0 0 0 24 44z"/><path fill="#1976D2" d="M24 14.3c2.6 0 5 1 6.8 2.6l5.2-5.2A17.8 17.8 0 0 0 7.5 19l6.8 5.3c1.2-3.6 4.6-6.1 8.5-6z"/></svg>
            Sign in with Google
          </button>
        </div>
    </div>
  );
}
