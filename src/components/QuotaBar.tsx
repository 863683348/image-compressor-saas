"use client";

import { useState, useEffect } from "react";
import { type Lang } from "@/lib/i18n";

export function QuotaBar({ lang }: { lang: Lang }) {
  const [quota, setQuota] = useState<any>(null);

  useEffect(() => {
    fetch("/api/usage")
      .then(r => r.json())
      .then(setQuota)
      .catch(() => {});
  }, []);

  if (!quota) return null;

  const pct = (quota.used / quota.limit) * 100;
  return (
    <div
      style={{
        marginBottom: 14,
        padding: "10px 14px",
        background: "var(--panel)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius)",
        display: "flex",
        alignItems: "center",
        gap: 12,
        fontSize: 13,
      }}
    >
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 600, marginBottom: 4 }}>
          {lang === "zh"
            ? `今日已压缩 ${quota.used} 次，剩余 ${quota.remaining} 次`
            : `${quota.used} compressions used today, ${quota.remaining} remaining`}
        </div>
        <div style={{ height: 6, background: "var(--border)", borderRadius: 3, overflow: "hidden" }}>
          <div
            style={{
              width: `${Math.min(pct, 100)}%`,
              height: "100%",
              background: pct >= 80 ? "var(--warn)" : "var(--primary)",
              borderRadius: 3,
              transition: "width .3s",
            }}
          />
        </div>
      </div>
      <span style={{ fontSize: 11, color: "var(--muted)", whiteSpace: "nowrap" }}>
        {lang === "zh" ? "每日 10 次" : "10/day"}
      </span>
    </div>
  );
}
