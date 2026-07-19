"use client";

import { useState } from "react";
import { useLang } from "@/components/lang-context";
import { dict } from "@/lib/i18n";
import { useSession, signIn } from "next-auth/react";

const s = (lang: string, key: string): string => {
  const d = dict[lang as "zh" | "en"] as Record<string, any>;
  return d?.[key] ?? key;
};

const CLIENT_ID = "AXc2LmR5iyZuvQTpGZ5C9sxa1ZOHx7ITusYIRe78kBCjuosb-6lUZ-RwM490VShPc0gv8Plita7mzRZ-";

export default function PricingPage() {
  const { lang } = useLang();
  const { data: session } = useSession();
  const isZh = lang === "zh";
  const [planMode, setPlanMode] = useState<"monthly" | "yearly">("monthly");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const proPlanId = planMode === "monthly" ? "pro_monthly" : "pro_yearly";
  const proPrice = planMode === "monthly" ? (isZh ? "¥18" : "$4.99") : (isZh ? "¥168" : "$49.99");
  const proPer = planMode === "monthly" ? (isZh ? "/月" : "/month") : (isZh ? "/年" : "/year");

  const handleProClick = async () => {
    if (!session) {
      signIn("google");
      return;
    }
    setLoading(true);
    try {
      // Create PayPal order via our API
      const res = await fetch("/api/payments/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planId: proPlanId }),
      });
      const data = await res.json();
      if (!res.ok) {
        alert(data.error || "Failed to create order");
        setLoading(false);
        return;
      }

      // Open PayPal checkout
      const approvalUrl = data.links?.find((l: any) => l.rel === "payer-action")?.href;
      if (!approvalUrl) {
        alert("No approval URL found");
        setLoading(false);
        return;
      }

      // Open PayPal popup
      const width = 500, height = 700;
      const left = (screen.width - width) / 2, top = (screen.height - height) / 2;
      const popup = window.open(
        approvalUrl,
        "paypal",
        `width=${width},height=${height},left=${left},top=${top},scrollbars=yes`
      );

      // Poll for the order to complete
      const checkInterval = setInterval(async () => {
        if (popup?.closed) {
          clearInterval(checkInterval);
          // User returned — capture the order
          try {
            const captRes = await fetch("/api/payments/capture-order", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ orderId: data.orderId }),
            });
            const captData = await captRes.json();
            if (captRes.ok && captData.success) {
              setSuccess(true);
            } else {
              alert(captData.error || "Payment capture failed");
            }
          } catch (e: any) {
            alert("Payment verification failed: " + e.message);
          }
          setLoading(false);
        }
      }, 1000);
    } catch (e: any) {
      alert("Error: " + e.message);
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div style={{ maxWidth: 560, margin: "0 auto", padding: "60px 18px", textAlign: "center" }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>🎉</div>
        <h1 style={{ fontSize: 24, margin: "0 0 8px", color: "var(--text, #1f2430)" }}>
          {isZh ? "升级成功！" : "Upgrade successful!"}
        </h1>
        <p style={{ color: "var(--muted, #6b7280)", fontSize: 15, margin: 0 }}>
          {isZh ? "你现在使用的是 Image Compressor Pro。" : "You are now on Image Compressor Pro."}
        </p>
        <a href="/" style={{ display: "inline-block", marginTop: 24, padding: "12px 32px", borderRadius: 999, background: "var(--primary, #4f46e5)", color: "#fff", fontWeight: 700, textDecoration: "none" }}>
          {isZh ? "开始压缩" : "Start compressing"}
        </a>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: "40px 18px 20px" }}>
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <h1 style={{ fontSize: 28, margin: "0 0 8px", color: "var(--text, #1f2430)" }}>{s(lang, "pricingTitle")}</h1>
        <p style={{ color: "var(--muted, #6b7280)", fontSize: 15, margin: 0 }}>{s(lang, "pricingSub")}</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, maxWidth: 640, margin: "0 auto" }}>
        {/* Free */}
        <div style={{
          background: "var(--panel, #fff)", borderRadius: 16,
          border: "1px solid var(--border, #e5e7eb)",
          padding: 28, display: "flex", flexDirection: "column",
        }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: "#6b7280", marginBottom: 4 }}>{s(lang, "pricingFree")}</div>
          <div style={{ fontSize: 13, color: "var(--muted, #6b7280)", marginBottom: 16 }}>{s(lang, "pricingFreeDesc")}</div>
          <div style={{ fontSize: 32, fontWeight: 800, color: "var(--text, #1f2430)", marginBottom: 16 }}>{s(lang, "pricingFreePrice")}</div>
          <div style={{ borderTop: "1px solid var(--border, #e5e7eb)", paddingTop: 16, marginBottom: 20, flex: 1 }}>
            {["pricingFreeC1", "pricingFreeC2", "pricingFreeC3", "pricingFreeC4"].map((f, i) => (
              <div key={i} style={{ fontSize: 13, padding: "4px 0", color: "var(--text, #1f2430)" }}>{s(lang, f)}</div>
            ))}
          </div>
          <a href="/" style={{
            display: "block", textAlign: "center", padding: "12px 0", borderRadius: 999,
            background: "var(--panel, #fff)", color: "var(--text, #1f2430)",
            fontWeight: 700, fontSize: 14, textDecoration: "none", border: "1px solid var(--border, #e5e7eb)",
          }}>
            {s(lang, "pricingCta")}
          </a>
        </div>

        {/* Pro */}
        <div style={{
          background: "var(--panel, #fff)", borderRadius: 16,
          border: "2px solid var(--primary, #4f46e5)", padding: 28, display: "flex", flexDirection: "column",
          position: "relative", boxShadow: "0 4px 24px rgba(79,70,229,.15)",
        }}>
          <div style={{
            position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)",
            background: "var(--primary, #4f46e5)", color: "#fff",
            padding: "4px 16px", borderRadius: 999, fontSize: 11, fontWeight: 700,
          }}>
            {isZh ? "推荐" : "Popular"}
          </div>
          <div style={{ fontSize: 14, fontWeight: 600, color: "#4f46e5", marginBottom: 4 }}>{s(lang, "pricingPro")}</div>
          <div style={{ fontSize: 13, color: "var(--muted, #6b7280)", marginBottom: 16 }}>{s(lang, "pricingProDesc")}</div>
          <div style={{ fontSize: 32, fontWeight: 800, color: "var(--text, #1f2430)", marginBottom: 4 }}>
            {proPrice}<span style={{ fontSize: 14, fontWeight: 400, color: "var(--muted, #6b7280)" }}>{proPer}</span>
          </div>
          <div style={{ fontSize: 12, color: "var(--ok, #16a34a)", marginBottom: 16 }}>
            {planMode === "yearly" ? (isZh ? "省 22%" : "Save 18%") : (isZh ? "年付 ¥168（省 22%）" : "$49.99/year (save 18%)")}
          </div>
          <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
            <button onClick={() => setPlanMode("monthly")} style={{
              flex: 1, padding: "8px 0", borderRadius: 8, cursor: "pointer", fontWeight: 600, fontSize: 13, transition: ".15s",
              background: planMode === "monthly" ? "var(--primary, #4f46e5)" : "var(--panel, #fff)",
              color: planMode === "monthly" ? "#fff" : "var(--text, #1f2430)",
              border: planMode === "monthly" ? "none" : "1px solid var(--border, #e5e7eb)",
            }}>
              {isZh ? "月付" : "Monthly"}
            </button>
            <button onClick={() => setPlanMode("yearly")} style={{
              flex: 1, padding: "8px 0", borderRadius: 8, cursor: "pointer", fontWeight: 600, fontSize: 13, transition: ".15s",
              background: planMode === "yearly" ? "var(--primary, #4f46e5)" : "var(--panel, #fff)",
              color: planMode === "yearly" ? "#fff" : "var(--text, #1f2430)",
              border: planMode === "yearly" ? "none" : "1px solid var(--border, #e5e7eb)",
            }}>
              {isZh ? "年付" : "Yearly"}
            </button>
          </div>
          <div style={{ borderTop: "1px solid var(--border, #e5e7eb)", paddingTop: 16, marginBottom: 20, flex: 1 }}>
            {["pricingProC1", "pricingProC2", "pricingProC3", "pricingProC4"].map((f, i) => (
              <div key={i} style={{ fontSize: 13, padding: "4px 0", color: "var(--text, #1f2430)" }}>{s(lang, f)}</div>
            ))}
          </div>
          <button onClick={handleProClick} disabled={loading} style={{
            padding: "12px 0", borderRadius: 999, cursor: loading ? "wait" : "pointer", border: "none",
            background: "var(--primary, #4f46e5)", color: "#fff",
            fontWeight: 700, fontSize: 14, transition: ".15s", opacity: loading ? .7 : 1,
          }}>
            {loading ? (isZh ? "处理中…" : "Processing…") : session ? (isZh ? "订阅 Pro" : "Subscribe Pro") : s(lang, "pricingLogin")}
          </button>
        </div>
      </div>

      <p style={{ textAlign: "center", color: "var(--muted, #6b7280)", fontSize: 12, marginTop: 20 }}>
        {s(lang, "pricingNote")}
      </p>

      {/* Pricing page footer links */}
      <div style={{
        marginTop: 48, paddingTop: 24, borderTop: "1px solid var(--border, #e5e7eb)",
        display: "flex", flexWrap: "wrap", gap: "12px 20px",
        justifyContent: "center", fontSize: 13,
      }}>
        <a href="/privacy" style={{ color: "var(--muted, #6b7280)", textDecoration: "none" }}>{s(lang, "footerPrivacy")}</a>
        <a href="/terms" style={{ color: "var(--muted, #6b7280)", textDecoration: "none" }}>{s(lang, "footerTerms")}</a>
        <a href="/faq" style={{ color: "var(--muted, #6b7280)", textDecoration: "none" }}>{s(lang, "footerFaq")}</a>
        <a href="/blog" style={{ color: "var(--muted, #6b7280)", textDecoration: "none" }}>{s(lang, "footerBlog")}</a>
        <a href="/contact" style={{ color: "var(--muted, #6b7280)", textDecoration: "none" }}>{s(lang, "footerContact")}</a>
        <span style={{ color: "var(--muted, #6b7280)" }}>
          📧 <a href="mailto:ahmedlzany423@gmail.com" style={{ color: "var(--muted, #6b7280)", textDecoration: "none" }}>ahmedlzany423@gmail.com</a>
        </span>
      </div>
    </div>
  );
}
