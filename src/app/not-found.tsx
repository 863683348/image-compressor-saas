import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{
      maxWidth: 500, margin: "80px auto", padding: "0 18px",
      textAlign: "center",
    }}>
      <h1 style={{ fontSize: 72, fontWeight: 800, color: "var(--primary, #4f46e5)", margin: "0 0 8px" }}>
        404
      </h1>
      <p style={{ fontSize: 18, color: "var(--text, #1f2430)", margin: "0 0 24px" }}>
        Page not found
      </p>
      <p style={{ fontSize: 14, color: "var(--muted, #6b7280)", marginBottom: 32, lineHeight: 1.6 }}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
        <Link
          href="/"
          style={{
            display: "inline-block", padding: "12px 28px",
            background: "var(--primary, #4f46e5)", color: "#fff",
            borderRadius: 10, fontWeight: 600, fontSize: 15,
            textDecoration: "none",
          }}
        >
          Go to Image Compressor
        </Link>
        <Link
          href="/blog"
          style={{
            display: "inline-block", padding: "12px 28px",
            border: "1px solid var(--border, #e5e7eb)",
            color: "var(--text, #1f2430)", borderRadius: 10,
            fontWeight: 600, fontSize: 15, textDecoration: "none",
          }}
        >
          Browse Blog
        </Link>
      </div>
    </div>
  );
}
