"use client";

import { useState, useEffect } from "react";
import { useLang } from "@/components/lang-context";
import { useSession } from "next-auth/react";

type Order = {
  id: string;
  plan: string;
  amount: number;
  currency: string;
  status: string;
  provider: string;
  providerOrderId: string | null;
  createdAt: string | null;
  completedAt: string | null;
};

type AccountData = {
  user: { name: string | null; email: string | null; image: string | null };
  plan: "free" | "pro";
  planExpiresAt: string | null;
  orders: Order[];
};

function fmtDate(iso: string | null | undefined, lang: string): string {
  if (!iso) return "—";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "—";
  return lang === "zh"
    ? `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`
    : d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

function fmtAmount(amount: number, currency: string): string {
  // amount stored in cents (USD)
  const usd = (amount / 100).toFixed(2);
  return currency.toUpperCase() === "USD" ? `$${usd}` : `${usd} ${currency.toUpperCase()}`;
}

export default function AccountPage() {
  const { lang } = useLang();
  const isZh = lang === "zh";
  const { data: session, status } = useSession();
  const [data, setData] = useState<AccountData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (status === "loading") return;
    if (status !== "authenticated") {
      setLoading(false);
      return;
    }
    (async () => {
      try {
        const res = await fetch("/api/account");
        if (res.status === 401) {
          setError(isZh ? "请先登录" : "Please sign in first");
          setLoading(false);
          return;
        }
        const json = await res.json();
        if (!res.ok) {
          setError(json.error || "Failed to load account");
        } else {
          setData(json);
        }
      } catch (e: any) {
        setError(e.message || "Network error");
      } finally {
        setLoading(false);
      }
    })();
  }, [status, isZh]);

  if (status === "loading" || loading) {
    return (
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "60px 18px", textAlign: "center", color: "var(--muted)" }}>
        {isZh ? "加载中…" : "Loading…"}
      </div>
    );
  }

  if (status !== "authenticated" || !session) {
    return (
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "60px 18px", textAlign: "center" }}>
        <h1 style={{ color: "var(--text)", fontSize: 22, margin: "0 0 12px" }}>
          {isZh ? "请先登录" : "Please sign in first"}
        </h1>
        <p style={{ color: "var(--muted)", fontSize: 14, margin: "0 0 24px" }}>
          {isZh ? "登录后查看你的会员信息与订单历史。" : "Sign in to view your plan and order history."}
        </p>
        <a
          href={`/${lang}/pricing`}
          style={{
            display: "inline-block",
            padding: "12px 32px",
            borderRadius: 999,
            background: "var(--primary)",
            color: "#fff",
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          {isZh ? "前往登录" : "Go to sign in"}
        </a>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "60px 18px", textAlign: "center", color: "var(--warn)" }}>
        {error}
      </div>
    );
  }

  if (!data) return null;

  const isPro = data.plan === "pro";
  const displayName = data.user.name || data.user.email || "?";

  return (
    <div style={{ maxWidth: 760, margin: "0 auto", padding: "40px 18px 60px" }}>
      <h1 style={{ fontSize: 28, margin: "0 0 24px", color: "var(--text)" }}>
        {isZh ? "个人中心" : "Account"}
      </h1>

      {/* 用户卡片 */}
      <section
        style={{
          background: "var(--panel)",
          border: "1px solid var(--border)",
          borderRadius: 16,
          padding: 24,
          marginBottom: 16,
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <AccountAvatar image={data.user.image} name={displayName} />
        <div style={{ minWidth: 0, flex: 1 }}>
          <div style={{ fontSize: 16, fontWeight: 700, color: "var(--text)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {displayName}
          </div>
          {data.user.email && (
            <div style={{ fontSize: 13, color: "var(--muted)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {data.user.email}
            </div>
          )}
        </div>
      </section>

      {/* 会员卡 */}
      <section
        style={{
          background: "var(--panel)",
          border: "1px solid var(--border)",
          borderRadius: 16,
          padding: 24,
          marginBottom: 24,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16, flexWrap: "wrap", gap: 12 }}>
          <div>
            <div style={{ fontSize: 12, color: "var(--muted)", fontWeight: 600, marginBottom: 4 }}>
              {isZh ? "当前会员" : "Current plan"}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span
                style={{
                  fontSize: 22,
                  fontWeight: 800,
                  color: isPro ? "var(--primary)" : "var(--text)",
                }}
              >
                {isPro ? "Pro" : isZh ? "免费" : "Free"}
              </span>
              {isPro && (
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    padding: "2px 10px",
                    borderRadius: 999,
                    background: "var(--primary)",
                    color: "#fff",
                  }}
                >
                  {isZh ? "已订阅" : "Active"}
                </span>
              )}
            </div>
          </div>
          <a
            href={`/${lang}/pricing`}
            style={{
              padding: "10px 24px",
              borderRadius: 999,
              background: isPro ? "var(--panel)" : "var(--primary)",
              color: isPro ? "var(--text)" : "#fff",
              fontWeight: 700,
              fontSize: 13,
              textDecoration: "none",
              border: isPro ? "1px solid var(--border)" : "none",
            }}
          >
            {isPro ? (isZh ? "管理订阅" : "Manage plan") : (isZh ? "升级 Pro" : "Upgrade Pro")}
          </a>
        </div>

        <div style={{ borderTop: "1px solid var(--border)", paddingTop: 16, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 12 }}>
          <Stat
            label={isZh ? "到期时间" : "Renews / expires"}
            value={isPro ? fmtDate(data.planExpiresAt, lang) : "—"}
          />
          <Stat
            label={isZh ? "免费额度" : "Daily limit"}
            value={isPro ? (isZh ? "无限" : "Unlimited") : "10 / day"}
          />
          <Stat
            label={isZh ? "订单数" : "Orders"}
            value={String(data.orders.length)}
          />
        </div>
      </section>

      {/* 订单历史 */}
      <section>
        <h2 style={{ fontSize: 18, margin: "0 0 12px", color: "var(--text)" }}>
          {isZh ? "订单历史" : "Order history"}
        </h2>
        {data.orders.length === 0 ? (
          <div
            style={{
              background: "var(--panel)",
              border: "1px solid var(--border)",
              borderRadius: 16,
              padding: 32,
              textAlign: "center",
              color: "var(--muted)",
              fontSize: 14,
            }}
          >
            {isZh ? "暂无订单" : "No orders yet"}
          </div>
        ) : (
          <div style={{ background: "var(--panel)", border: "1px solid var(--border)", borderRadius: 16, overflow: "hidden" }}>
            {data.orders.map((o, idx) => (
              <div
                key={o.id}
                style={{
                  padding: "16px 20px",
                  borderTop: idx === 0 ? "none" : "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  flexWrap: "wrap",
                }}
              >
                <div style={{ flex: 1, minWidth: 180 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text)", textTransform: "capitalize" }}>
                    {o.plan === "pro" ? "Pro" : o.plan} · {isZh ? "订阅" : "Plan"}
                  </div>
                  <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 2 }}>
                    {fmtDate(o.completedAt || o.createdAt, lang)} · {o.provider}
                  </div>
                </div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text)" }}>
                  {fmtAmount(o.amount, o.currency)}
                </div>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    padding: "2px 10px",
                    borderRadius: 999,
                    background: orderStatusBg(o.status),
                    color: orderStatusFg(o.status),
                    textTransform: "uppercase",
                  }}
                >
                  {o.status}
                </span>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div style={{ fontSize: 11, color: "var(--muted)", fontWeight: 600, marginBottom: 4 }}>{label}</div>
      <div style={{ fontSize: 14, color: "var(--text)", fontWeight: 700 }}>{value}</div>
    </div>
  );
}

function orderStatusBg(status: string): string {
  if (status === "completed") return "var(--badge-ok-bg, #dcfce7)";
  if (status === "pending") return "var(--badge-pending-bg, #fef9c3)";
  return "var(--badge-error-bg, #fee2e2)";
}
function orderStatusFg(status: string): string {
  if (status === "completed") return "var(--badge-ok-text, #166534)";
  if (status === "pending") return "var(--badge-pending-text, #a16207)";
  return "var(--badge-error-text, #991b1b)";
}

function AccountAvatar({ image, name }: { image: string | null; name: string }) {
  const [broken, setBroken] = useState(false);
  if (!image || broken) {
    return (
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: "var(--primary)",
          color: "#fff",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 22,
          fontWeight: 700,
          flexShrink: 0,
        }}
      >
        {(name || "?")[0]?.toUpperCase()}
      </div>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={image}
      alt=""
      width={56}
      height={56}
      referrerPolicy="no-referrer"
      onError={() => setBroken(true)}
      style={{ width: 56, height: 56, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
    />
  );
}
