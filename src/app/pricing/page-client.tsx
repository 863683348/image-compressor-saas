"use client";

import { useState, useEffect, useRef } from "react";
import { useLang } from "@/components/lang-context";
import { dict } from "@/lib/i18n";
import { useSession, signIn } from "next-auth/react";

declare global {
  interface Window {
    paypal?: any;
  }
}

const s = (lang: string, key: string): string => {
  const d = dict[lang as "zh" | "en"] as Record<string, any>;
  return d?.[key] ?? key;
};

export default function PricingPage() {
  const { lang } = useLang();
  const { data: session, status } = useSession();
  const isZh = lang === "zh";
  const [planMode, setPlanMode] = useState<"monthly" | "yearly">("yearly");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [clientId, setClientId] = useState<string | null>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const proPlanId = planMode === "monthly" ? "pro_monthly" : "pro_yearly";
  const proPrice = planMode === "monthly" ? "$4.99" : "$49.99";
  const proPer = planMode === "monthly" ? (isZh ? "/月" : "/month") : (isZh ? "/年" : "/year");

  // 1. Fetch public PayPal client id once
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/payments/config");
        const data = await res.json();
        if (!cancelled && data.clientId) setClientId(data.clientId);
      } catch {
        if (!cancelled) setError(isZh ? "PayPal 配置加载失败" : "Failed to load PayPal config");
      }
    })();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 2. Load PayPal JS SDK + render Smart Buttons when signed in
  useEffect(() => {
    if (!clientId || status !== "authenticated" || success) return;

    let mounted = true;

    const renderButtons = () => {
      if (!mounted || !window.paypal?.Buttons || !buttonRef.current) return;
      buttonRef.current.innerHTML = "";

      window.paypal.Buttons({
        style: { layout: "vertical", shape: "rect", label: "paypal" },
        createOrder: async () => {
          const res = await fetch("/api/payments/create-order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ planId: proPlanId }),
          });
          const data = await res.json();
          if (!res.ok) throw new Error(data.error || "Failed to create order");
          return data.orderId;
        },
        onApprove: async (data: any) => {
          setLoading(true);
          try {
            const captRes = await fetch("/api/payments/capture-order", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ orderId: data.orderID }),
            });
            const captData = await captRes.json();
            if (captRes.ok && captData.success) {
              setSuccess(true);
            } else {
              setError(captData.error || "Payment capture failed");
            }
          } catch (e: any) {
            setError("Payment verification failed: " + (e.message || "unknown error"));
          } finally {
            setLoading(false);
          }
        },
        onCancel: () => setError(null),
      }).render(buttonRef.current);
    };

    if (window.paypal) {
      renderButtons();
    } else {
      const script = document.createElement("script");
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=USD&intent=capture`;
      script.async = true;
      script.onload = renderButtons;
      script.onerror = () => setError(isZh ? "PayPal SDK 加载失败" : "Failed to load PayPal SDK");
      document.body.appendChild(script);
    }

    return () => {
      mounted = false;
      if (buttonRef.current) buttonRef.current.innerHTML = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clientId, status, proPlanId, success, isZh]);

  if (success) {
    return (
      <div style={{ maxWidth: 560, margin: "0 auto", padding: "60px 18px", textAlign: "center" }}>
        <svg
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--ok)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="m8 12 3 3 5-6" />
        </svg>
        <h1 style={{ fontSize: 24, margin: "16px 0 8px", color: "var(--text)" }}>
          {isZh ? "升级成功！" : "Upgrade successful!"}
        </h1>
        <p style={{ color: "var(--muted)", fontSize: 15, margin: 0 }}>
          {isZh ? "你现在使用的是 Image Compressor Pro。" : "You are now on Image Compressor Pro."}
        </p>
        <a
          href="/"
          style={{
            display: "inline-block",
            marginTop: 24,
            padding: "12px 32px",
            borderRadius: 999,
            background: "var(--primary)",
            color: "#fff",
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          {isZh ? "开始压缩" : "Start compressing"}
        </a>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: "40px 18px 20px" }}>
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <h1 style={{ fontSize: 28, margin: "0 0 8px", color: "var(--text)" }}>{s(lang, "pricingTitle")}</h1>
        <p style={{ color: "var(--muted)", fontSize: 15, margin: 0 }}>{s(lang, "pricingSub")}</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, maxWidth: 640, margin: "0 auto" }}>
        {/* Free */}
        <div style={{ background: "var(--panel)", borderRadius: 16, border: "1px solid var(--border)", padding: 28, display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: "var(--muted)", marginBottom: 4 }}>{s(lang, "pricingFree")}</div>
          <div style={{ fontSize: 13, color: "var(--muted)", marginBottom: 16 }}>{s(lang, "pricingFreeDesc")}</div>
          <div style={{ fontSize: 32, fontWeight: 800, color: "var(--text)", marginBottom: 16 }}>{s(lang, "pricingFreePrice")}</div>
          <div style={{ borderTop: "1px solid var(--border)", paddingTop: 16, marginBottom: 20, flex: 1 }}>
            {["pricingFreeC1", "pricingFreeC2", "pricingFreeC3", "pricingFreeC4"].map((f, i) => (
              <div key={i} style={{ fontSize: 13, padding: "4px 0", color: "var(--text)" }}>{s(lang, f)}</div>
            ))}
          </div>
          <a href="/" style={{ display: "block", textAlign: "center", padding: "12px 0", borderRadius: 999, background: "var(--panel)", color: "var(--text)", fontWeight: 700, fontSize: 14, textDecoration: "none", border: "1px solid var(--border)" }}>
            {s(lang, "pricingCta")}
          </a>
        </div>

        {/* Pro */}
        <div style={{ background: "var(--panel)", borderRadius: 16, border: "2px solid var(--primary)", padding: 28, display: "flex", flexDirection: "column", position: "relative", boxShadow: "0 4px 24px rgba(79,70,229,.15)" }}>
          <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: "var(--primary)", color: "#fff", padding: "4px 16px", borderRadius: 999, fontSize: 11, fontWeight: 700 }}>
            {isZh ? "推荐" : "Popular"}
          </div>
          <div style={{ fontSize: 14, fontWeight: 600, color: "var(--primary)", marginBottom: 4 }}>{s(lang, "pricingPro")}</div>
          <div style={{ fontSize: 13, color: "var(--muted)", marginBottom: 16 }}>{s(lang, "pricingProDesc")}</div>
          <div style={{ fontSize: 32, fontWeight: 800, color: "var(--text)", marginBottom: 4 }}>
            {proPrice}
            <span style={{ fontSize: 14, fontWeight: 400, color: "var(--muted)" }}>{proPer}</span>
          </div>
          <div style={{ fontSize: 12, color: "var(--ok)", marginBottom: 16 }}>{s(lang, "pricingYearly")}</div>
          <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
            <button
              onClick={() => setPlanMode("monthly")}
              style={{
                flex: 1,
                padding: "8px 0",
                borderRadius: 8,
                cursor: "pointer",
                fontWeight: 600,
                fontSize: 13,
                transition: ".15s",
                background: planMode === "monthly" ? "var(--primary)" : "var(--panel)",
                color: planMode === "monthly" ? "#fff" : "var(--text)",
                border: planMode === "monthly" ? "none" : "1px solid var(--border)",
              }}
            >
              {isZh ? "月付" : "Monthly"}
            </button>
            <button
              onClick={() => setPlanMode("yearly")}
              style={{
                flex: 1,
                padding: "8px 0",
                borderRadius: 8,
                cursor: "pointer",
                fontWeight: 600,
                fontSize: 13,
                transition: ".15s",
                background: planMode === "yearly" ? "var(--primary)" : "var(--panel)",
                color: planMode === "yearly" ? "#fff" : "var(--text)",
                border: planMode === "yearly" ? "none" : "1px solid var(--border)",
              }}
            >
              {isZh ? "年付" : "Yearly"}
            </button>
          </div>
          <div style={{ borderTop: "1px solid var(--border)", paddingTop: 16, marginBottom: 20, flex: 1 }}>
            {["pricingProC1", "pricingProC2", "pricingProC3", "pricingProC4"].map((f, i) => (
              <div key={i} style={{ fontSize: 13, padding: "4px 0", color: "var(--text)" }}>{s(lang, f)}</div>
            ))}
          </div>

          {status !== "authenticated" ? (
            <button
              onClick={() => signIn("google")}
              style={{ padding: "12px 0", borderRadius: 999, cursor: "pointer", border: "none", background: "var(--primary)", color: "#fff", fontWeight: 700, fontSize: 14, transition: ".15s" }}
            >
              {s(lang, "pricingLogin")}
            </button>
          ) : (
            <>
              <div ref={buttonRef} style={{ minHeight: 45 }} />
              {loading && (
                <p style={{ textAlign: "center", color: "var(--muted)", fontSize: 13, margin: "8px 0 0" }}>
                  {isZh ? "确认支付中…" : "Verifying payment…"}
                </p>
              )}
            </>
          )}
          {error && (
            <p style={{ textAlign: "center", color: "var(--warn)", fontSize: 13, margin: "8px 0 0" }}>{error}</p>
          )}
        </div>
      </div>

      <p style={{ textAlign: "center", color: "var(--muted)", fontSize: 12, marginTop: 20 }}>{s(lang, "pricingNote")}</p>
    </div>
  );
}
