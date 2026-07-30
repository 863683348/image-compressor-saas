"use client";

import { useState } from "react";
import { type Lang } from "@/lib/i18n";
import { type FileItem, fmtSize } from "@/lib/compress";
import { t } from "@/lib/translate";
import { CloseIcon } from "@/components/icons";
import { SliderCompare } from "@/components/SliderCompare";

export function PreviewModal({
  item,
  lang,
  onClose,
}: {
  item: FileItem;
  lang: Lang;
  onClose: () => void;
}) {
  const [cmpMode, setCmpMode] = useState<"side" | "slider">("side");

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.55)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        padding: 20,
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "var(--panel)",
          borderRadius: "var(--radius)",
          maxWidth: 900,
          width: "100%",
          maxHeight: "90vh",
          overflow: "auto",
          boxShadow: "0 8px 40px rgba(0,0,0,.2)",
        }}
        onClick={e => e.stopPropagation()}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "14px 18px",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <span style={{ fontWeight: 600, fontSize: 14 }}>{item.name}</span>
          <button
            onClick={onClose}
            aria-label={lang === "zh" ? "关闭预览" : "Close preview"}
            style={{
              border: "none",
              background: "none",
              color: "var(--muted)",
              cursor: "pointer",
              padding: "4px 8px",
              display: "inline-flex",
            }}
          >
            <CloseIcon size={20} />
          </button>
        </div>

        <div style={{ display: "flex", gap: 8, padding: "12px 18px 0" }}>
          {(["side", "slider"] as const).map(m => (
            <button
              key={m}
              onClick={() => setCmpMode(m)}
              style={{
                padding: "6px 14px",
                borderRadius: 8,
                border: cmpMode === m ? "2px solid var(--primary)" : "1px solid var(--border)",
                background: cmpMode === m ? "var(--primary-soft)" : "var(--panel)",
                color: "var(--text)",
                fontSize: 12,
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              {m === "side" ? (lang === "zh" ? "并排" : "Side by side") : (lang === "zh" ? "滑块" : "Slider")}
            </button>
          ))}
        </div>

        <div style={{ padding: 18 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 12,
              color: "var(--muted)",
              marginBottom: 8,
            }}
          >
            <span>
              {t(lang, "cmpOrig")}: {fmtSize(item.origSize)}
            </span>
            <span>
              {t(lang, "cmpComp")}: {fmtSize(item.result!.size)} (-
              {((1 - item.result!.size / item.origSize) * 100).toFixed(1)}%)
            </span>
          </div>
          {cmpMode === "side" ? (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              <div>
                <img
                  src={item.origUrl}
                  alt={lang === "zh" ? "压缩前的原图" : "Original image before compression"}
                  style={{ width: "100%", borderRadius: 8, display: "block" }}
                />
              </div>
              <div>
                <img
                  src={item.result!.url}
                  alt={lang === "zh" ? "压缩后的效果对比图" : "Compressed image after compression"}
                  style={{ width: "100%", borderRadius: 8, display: "block" }}
                />
              </div>
            </div>
          ) : (
            <SliderCompare orig={item.origUrl} comp={item.result!.url} />
          )}
        </div>
      </div>
    </div>
  );
}
