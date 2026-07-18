"use client";

import { useLang } from "@/components/lang-context";
import { dict } from "@/lib/i18n";
import { useSession, signIn } from "next-auth/react";

const s = (lang: string, key: string): string => {
  const d = dict[lang as "zh" | "en"] as Record<string, any>;
  return d?.[key] ?? key;
};

export default function PricingPage() {
  const { lang } = useLang();
  const { data: session } = useSession();
  const isZh = lang === "zh";

  const plans = [
    {
      id: "free",
      name: "pricingFree",
      desc: "pricingFreeDesc",
      price: "pricingFreePrice",
      per: "pricingFreePer",
      features: ["pricingFreeC1", "pricingFreeC2", "pricingFreeC3", "pricingFreeC4"],
      cta: "pricingCta",
      highlight: false,
      color: "#6b7280",
    },
    {
      id: "pro",
      name: "pricingPro",
      desc: "pricingProDesc",
      price: "pricingProPrice",
      per: "pricingProPer",
      features: ["pricingProC1", "pricingProC2", "pricingProC3", "pricingProC4"],
      cta: "pricingLogin",
      highlight: true,
      color: "#4f46e5",
      yearly: "pricingYearly",
    },
  ];

  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: "40px 18px 20px" }}>
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <h1 style={{ fontSize: 28, margin: "0 0 8px", color: "var(--text, #1f2430)" }}>{s(lang, "pricingTitle")}</h1>
        <p style={{ color: "var(--muted, #6b7280)", fontSize: 15, margin: 0 }}>{s(lang, "pricingSub")}</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, maxWidth: 640, margin: "0 auto" }}>
        {plans.map((plan) => (
          <div key={plan.id} style={{
            background: "var(--panel, #fff)", borderRadius: 16,
            border: plan.highlight ? "2px solid var(--primary, #4f46e5)" : "1px solid var(--border, #e5e7eb)",
            padding: 28, display: "flex", flexDirection: "column",
            position: "relative", boxShadow: plan.highlight ? "0 4px 24px rgba(79,70,229,.15)" : "none",
          }}>
            {plan.highlight && (
              <div style={{
                position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)",
                background: "var(--primary, #4f46e5)", color: "#fff",
                padding: "4px 16px", borderRadius: 999, fontSize: 11, fontWeight: 700,
              }}>
                {isZh ? "推荐" : "Popular"}
              </div>
            )}
            <div style={{ fontSize: 14, fontWeight: 600, color: plan.color, marginBottom: 4 }}>
              {s(lang, plan.name)}
            </div>
            <div style={{ fontSize: 13, color: "var(--muted, #6b7280)", marginBottom: 16 }}>
              {s(lang, plan.desc)}
            </div>
            <div style={{ fontSize: 32, fontWeight: 800, color: "var(--text, #1f2430)", marginBottom: 4 }}>
              {s(lang, plan.price)}<span style={{ fontSize: 14, fontWeight: 400, color: "var(--muted, #6b7280)" }}>{s(lang, plan.per)}</span>
            </div>
            {plan.yearly && (
              <div style={{ fontSize: 12, color: "var(--ok, #16a34a)", marginBottom: 16 }}>
                {s(lang, plan.yearly)}
              </div>
            )}
            <div style={{ borderTop: "1px solid var(--border, #e5e7eb)", paddingTop: 16, marginBottom: 20, flex: 1 }}>
              {plan.features.map((f, i) => (
                <div key={i} style={{ fontSize: 13, padding: "4px 0", color: "var(--text, #1f2430)" }}>
                  {s(lang, f)}
                </div>
              ))}
            </div>
            <button onClick={() => {
              if (plan.id === "pro") {
                if (session) {
                  // TODO: open PayPal
                  alert(isZh ? "支付功能即将上线" : "Payment coming soon");
                } else {
                  signIn("google");
                }
              }
            }} style={{
              padding: "12px 0", borderRadius: 999, cursor: "pointer",
              background: plan.highlight ? "var(--primary, #4f46e5)" : "var(--panel, #fff)",
              color: plan.highlight ? "#fff" : "var(--text, #1f2430)",
              fontWeight: 700, fontSize: 14, transition: ".15s",
              border: plan.highlight ? "none" : "1px solid var(--border, #e5e7eb)",
            }}>
              {s(lang, plan.cta)}
            </button>
          </div>
        ))}
      </div>

      <p style={{ textAlign: "center", color: "var(--muted, #6b7280)", fontSize: 12, marginTop: 20 }}>
        {s(lang, "pricingNote")}
      </p>
    </div>
  );
}
