"use client";

import { type Lang } from "@/lib/i18n";
import { t } from "@/lib/translate";

export function CompressionSettings({
  lang,
  quality,
  setQuality,
  format,
  setFormat,
  targetOn,
  setTargetOn,
  targetKb,
  setTargetKb,
}: {
  lang: Lang;
  quality: number;
  setQuality: (n: number) => void;
  format: string;
  setFormat: (s: string) => void;
  targetOn: boolean;
  setTargetOn: (b: boolean) => void;
  targetKb: string;
  setTargetKb: (s: string) => void;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "18px 26px",
        alignItems: "flex-end",
        margin: "18px 0",
        padding: "16px 18px",
        background: "var(--panel)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius)",
        boxShadow: "0 1px 3px rgba(0,0,0,.08), 0 8px 24px rgba(0,0,0,.05)",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <label style={{ fontSize: 12, color: "var(--muted)", fontWeight: 600 }}>
          {t(lang, "quality")}: {quality}%
        </label>
        <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 240 }}>
          <input
            type="range"
            min={1}
            max={100}
            value={quality}
            onChange={e => setQuality(Number(e.target.value))}
            style={{ width: 200, accentColor: "var(--primary)" }}
          />
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <label style={{ fontSize: 12, color: "var(--muted)", fontWeight: 600 }}>{t(lang, "format")}</label>
        <select
          value={format}
          onChange={e => setFormat(e.target.value)}
          style={{
            padding: "8px 12px",
            borderRadius: 10,
            border: "1px solid var(--border)",
            background: "var(--panel)",
            color: "var(--text)",
            fontSize: 14,
          }}
        >
          <option value="keep">{t(lang, "formatKeep")}</option>
          <option value="jpg">JPG</option>
          <option value="png">PNG</option>
          <option value="webp">WebP</option>
        </select>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <label style={{ fontSize: 12, color: "var(--muted)", fontWeight: 600 }}>
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontSize: 13,
              color: "var(--text)",
              cursor: "pointer",
            }}
          >
            <input type="checkbox" checked={targetOn} onChange={e => setTargetOn(e.target.checked)} />
            {t(lang, "targetLabel")}
          </label>
        </label>
        {targetOn && (
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <input
              type="number"
              min={1}
              value={targetKb}
              onChange={e => setTargetKb(e.target.value)}
              placeholder="200"
              style={{
                width: 90,
                padding: "8px 10px",
                borderRadius: 10,
                border: "1px solid var(--border)",
                background: "var(--panel)",
                color: "var(--text)",
                fontSize: 14,
              }}
            />
            <span style={{ fontSize: 12, color: "var(--muted)" }}>{t(lang, "targetHint")}</span>
          </div>
        )}
      </div>
    </div>
  );
}
