"use client";

import { type Lang } from "@/lib/i18n";
import { t } from "@/lib/translate";

// 注意：原文案里的 emoji 装饰前缀已移除（P0-1 禁止 emoji 作图标/装饰）。
const FEATURES = {
  zh: [
    "100% 隐私安全 — 所有处理在浏览器本地完成，不上传服务器",
    "精准压缩 — 设定目标大小（如 200KB），自动调整质量达到精确值",
    "多格式支持 — JPG / PNG / WebP / AVIF 压缩与相互转换",
    "批量处理 — 一次上传多个文件，一键压缩并导出 ZIP 压缩包",
    "双语界面 — 中文和英文界面，自动适配",
    "无水印 — 输出文件完全纯净，无任何品牌标记",
  ],
  en: [
    "100% Private — All processing happens locally in your browser",
    "Target Size — Set exact size (200KB/100KB/50KB), auto-adjusts quality",
    "Multi-format — JPG / PNG / WebP / AVIF compression & conversion",
    "Batch & ZIP — Upload multiple files, compress all, export as ZIP",
    "Bilingual — Chinese and English UI, auto-detected",
    "No Watermark — Output is completely clean, no branding",
  ],
} as const;

const USE_CASES = {
  zh: [
    "邮件附件 — 将照片压缩到 200KB 以内，确保邮件顺利送达",
    "网站优化 — 压缩图片减少页面加载时间，提升 Core Web Vitals 评分",
    "求职系统 — 证件照和简历图片压缩到系统要求的 200KB/100KB",
    "电商平台 — 批量压缩产品图片，统一上传到淘宝/Shopify 等平台",
  ],
  en: [
    "Email Attachments — Compress photos under 200KB for reliable delivery",
    "Web Optimization — Reduce image sizes to improve Core Web Vitals scores",
    "Job Applications — Fit headshots and documents into 200KB/100KB limits",
    "E-commerce — Batch compress product images for Shopify, Amazon, etc.",
  ],
} as const;

export function SeoContent({ lang }: { lang: Lang }) {
  const features = FEATURES[lang];
  const useCases = USE_CASES[lang];

  return (
    <>
      <div
        style={{
          marginTop: 36,
          padding: "24px 22px",
          background: "var(--panel)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius)",
          lineHeight: 1.7,
        }}
      >
        <h1 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 12px", color: "var(--text)" }}>
          {lang === "zh"
            ? "免费在线图片压缩工具 — 100% 本地处理，隐私优先"
            : "Free Online Image Compressor — 100% Local, Privacy First"}
        </h1>
        <p style={{ fontSize: 14, color: "var(--text)", margin: "0 0 16px" }}>
          {lang === "zh"
            ? "Image Compressor 是一款完全在浏览器中运行的免费图片压缩工具。无需上传任何文件到服务器，无需注册，无水印。支持 JPG、PNG、WebP 和 AVIF 格式的压缩与互转，可按目标文件大小（200KB/100KB/50KB）自动调整压缩质量，并支持批量处理与 ZIP 导出。"
            : "Image Compressor is a free image compression tool that runs entirely in your browser. No files uploaded to any server, no sign-up required, no watermarks. Supports JPG, PNG, WebP, and AVIF compression and conversion, with automatic target-size compression (200KB/100KB/50KB), batch processing, and ZIP export."}
        </p>

        <h2 style={{ fontSize: 15, fontWeight: 700, margin: "20px 0 8px", color: "var(--text)" }}>
          {lang === "zh" ? "核心功能" : "Key Features"}
        </h2>
        <ul style={{ fontSize: 13, color: "var(--text)", paddingLeft: 18, margin: 0 }}>
          {features.map((item, i) => (
            <li key={i} style={{ marginBottom: 6 }}>
              {item}
            </li>
          ))}
        </ul>

        <h2 style={{ fontSize: 15, fontWeight: 700, margin: "20px 0 8px", color: "var(--text)" }}>
          {lang === "zh" ? "适用场景" : "Use Cases"}
        </h2>
        <ul style={{ fontSize: 13, color: "var(--text)", paddingLeft: 18, margin: 0 }}>
          {useCases.map((item, i) => (
            <li key={i} style={{ marginBottom: 6 }}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div
        style={{
          marginTop: 32,
          padding: "20px 22px",
          background: "var(--panel)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius)",
        }}
      >
        <div style={{ fontWeight: 700, color: "var(--text)", fontSize: 14, marginBottom: 12 }}>
          {t(lang, "brand")}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 18px" }}>
          <a href="/pricing" style={{ color: "var(--muted)", textDecoration: "none", fontSize: 13, fontWeight: 500 }}>
            {t(lang, "pricing")}
          </a>
          <a href="/blog" style={{ color: "var(--muted)", textDecoration: "none", fontSize: 13, fontWeight: 500 }}>
            {t(lang, "footerBlog")}
          </a>
          <a href="/faq" style={{ color: "var(--muted)", textDecoration: "none", fontSize: 13, fontWeight: 500 }}>
            {t(lang, "footerFaq")}
          </a>
          <a href="/privacy" style={{ color: "var(--muted)", textDecoration: "none", fontSize: 13, fontWeight: 500 }}>
            {t(lang, "footerPrivacy")}
          </a>
          <a href="/terms" style={{ color: "var(--muted)", textDecoration: "none", fontSize: 13, fontWeight: 500 }}>
            {t(lang, "footerTerms")}
          </a>
          <a href="/contact" style={{ color: "var(--muted)", textDecoration: "none", fontSize: 13, fontWeight: 500 }}>
            {t(lang, "footerContact")}
          </a>
        </div>
      </div>
    </>
  );
}
