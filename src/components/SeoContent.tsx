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

        <h2 style={{ fontSize: 15, fontWeight: 700, margin: "20px 0 8px", color: "var(--text)" }}>
          {lang === "zh" ? "三步完成压缩" : "How It Works in 3 Steps"}
        </h2>
        <ol style={{ fontSize: 13, color: "var(--text)", paddingLeft: 18, margin: 0 }}>
          <li style={{ marginBottom: 6 }}>
            {lang === "zh"
              ? "选择或拖入图片（JPG/PNG/WebP/AVIF），可一次添加多个文件。"
              : "Select or drag in images (JPG/PNG/WebP/AVIF); you can add multiple files at once."}
          </li>
          <li style={{ marginBottom: 6 }}>
            {lang === "zh"
              ? "设定目标：按比例压缩、固定质量，或精确目标大小（如 200KB / 100KB / 50KB）。"
              : "Set the goal: compress by ratio, fix the quality, or hit an exact target size (e.g. 200KB / 100KB / 50KB)."}
          </li>
          <li style={{ marginBottom: 6 }}>
            {lang === "zh"
              ? "一键压缩并下载——处理 100% 在你的浏览器本地完成，文件从未离开你的设备。"
              : "Compress and download — processing runs 100% locally in your browser; your files never leave your device."}
          </li>
        </ol>

        <h2 style={{ fontSize: 15, fontWeight: 700, margin: "20px 0 8px", color: "var(--text)" }}>
          {lang === "zh" ? "为什么需要压缩图片" : "Why Compress Images"}
        </h2>
        <p style={{ fontSize: 13, color: "var(--text)", margin: "0 0 10px" }}>
          {lang === "zh"
            ? "图片是网页体积的最大来源：一张未经处理的手机照片动辄 3-5MB，而 Google 的 Core Web Vitals 直接把图片大小计入 LCP（首屏加载）指标。把图片压缩到合理大小，能显著提升页面速度、降低带宽成本、改善移动端体验，这是对用户和搜索引擎都友好的投入。"
            : "Images are the largest source of web page weight: an unprocessed phone photo is often 3-5MB, and Google's Core Web Vitals counts image size directly into LCP (largest contentful paint). Compressing images to a sensible size measurably improves page speed, cuts bandwidth costs, and improves the mobile experience — an investment that pays off for both users and search engines."}
        </p>
        <p style={{ fontSize: 13, color: "var(--text)", margin: 0 }}>
          {lang === "zh"
            ? "在另一个常见场景里，压缩是刚需：邮件服务器、政府表格、招聘系统普遍限制附件和照片在 100-200KB。把证件照或合同扫描件压到限制以内，才能顺利上传和发送——而高质量的本地压缩能让文件变小而不牺牲可见画质。"
            : "In another common scenario, compression is a hard requirement: mail servers, government forms, and application portals routinely cap attachments and photos at 100-200KB. Fitting a headshot or a scanned contract under the limit is only possible with good compression — and high-quality local compression shrinks files without sacrificing visible quality."}
        </p>

        <h2 style={{ fontSize: 15, fontWeight: 700, margin: "20px 0 8px", color: "var(--text)" }}>
          {lang === "zh" ? "JPG / PNG / WebP / AVIF 怎么选" : "Which Format: JPG / PNG / WebP / AVIF"}
        </h2>
        <p style={{ fontSize: 13, color: "var(--text)", margin: "0 0 10px" }}>
          {lang === "zh"
            ? "没有绝对最好的格式，只有最合适的场景：JPG 适合照片和色彩丰富的图像，压缩率好但会损失细节；PNG 无损、支持透明，适合截图、图标和插画，但体积偏大；WebP 在同等画质下通常比 JPG 再小 25-35%，并支持透明；AVIF 压缩率最高，但兼容性仍在普及中。"
            : "There is no single best format, only the right one for the job: JPG suits photos and rich gradients (great compression, lossy); PNG is lossless and supports transparency — ideal for screenshots, icons, and illustrations, but heavier; WebP is typically 25-35% smaller than JPG at the same quality and supports transparency; AVIF offers the best compression today, though support is still spreading."}
        </p>
        <p style={{ fontSize: 13, color: "var(--text)", margin: 0 }}>
          {lang === "zh"
            ? "本工具不仅能压缩，还能在这些格式之间转换：把 HEIC 手机原图转成 JPG、把 PNG 截图转成 WebP，一步完成。"
            : "This tool does more than compress — it converts between these formats too: turn HEIC phone originals into JPG, or PNG screenshots into WebP, in one step."}
        </p>

        <h2 style={{ fontSize: 15, fontWeight: 700, margin: "20px 0 8px", color: "var(--text)" }}>
          {lang === "zh" ? "常见问题（FAQ）" : "FAQ"}
        </h2>
        <div style={{ fontSize: 13, color: "var(--text)" }}>
          <p style={{ margin: "0 0 8px" }}>
            <strong>{lang === "zh" ? "压缩会损画质吗？" : "Does compression hurt quality?"}</strong>
            <br />
            {lang === "zh"
              ? "可以做到几乎无损。现代压缩算法（mozjpeg/WebP/AVIF）会在目标大小内自动平衡质量与体积；照片类内容在 80% 以上质量时，肉眼几乎察觉不到差异。"
              : "Not necessarily. Modern codecs (mozjpeg/WebP/AVIF) balance quality and size automatically; for photos, quality above 80% is visually indistinguishable."}
          </p>
          <p style={{ margin: "0 0 8px" }}>
            <strong>{lang === "zh" ? "我的文件会被上传到服务器吗？" : "Are my files uploaded to a server?"}</strong>
            <br />
            {lang === "zh"
              ? "不会。所有处理都在你的浏览器本地完成，文件不上传、不落盘、不留存，断网也能继续使用。"
              : "No. Everything runs locally in your browser — files are never uploaded, stored, or retained; the tool even keeps working offline."}
          </p>
          <p style={{ margin: "0 0 8px" }}>
            <strong>{lang === "zh" ? "能压缩视频或 PDF 吗？" : "Can it compress video or PDF?"}</strong>
            <br />
            {lang === "zh"
              ? "目前专注于图片（JPG/PNG/WebP/AVIF）。PDF 合并与视频压缩需要不同的处理管线，不在本工具范围内。"
              : "Currently focused on images (JPG/PNG/WebP/AVIF). PDF merging and video compression need different pipelines and are out of scope."}
          </p>
          <p style={{ margin: 0 }}>
            <strong>{lang === "zh" ? "免费吗？有次数限制吗？" : "Is it free? Any limits?"}</strong>
            <br />
            {lang === "zh"
              ? "免费使用，无次数限制，无水印。Pro 提供更大批量与优先支持，但本地处理与隐私承诺对所有用户一致。"
              : "Free to use with no limits and no watermark. Pro adds larger batches and priority support, but local processing and the privacy promise apply to everyone."}
          </p>
        </div>
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
