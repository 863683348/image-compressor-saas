"use client";

import { useState, useCallback, useRef } from "react";
import { useSession } from "next-auth/react";
import { useLang } from "@/components/lang-context";
import { type Lang } from "@/lib/i18n";
import {
  createFileItem,
  compressItem,
  downloadBlob,
  zipFiles,
  fmtSize,
  extOf,
  isSupported,
  type FileItem,
  type CompressOptions,
} from "@/lib/compress";
import { t } from "@/lib/translate";
import { ImageDropzone } from "@/components/ImageDropzone";
import { CompressionSettings } from "@/components/CompressionSettings";
import { QuotaBar } from "@/components/QuotaBar";
import { ResultTable } from "@/components/ResultTable";
import { PreviewModal } from "@/components/PreviewModal";
import { SeoContent } from "@/components/SeoContent";
import HeaderClient from "@/components/HeaderClient";
import FooterClient from "@/components/FooterClient";

export default function HomePage() {
  const { status } = useSession();
  const { lang: rawLang } = useLang();
  const lang = rawLang as Lang;
  const [items, setItems] = useState<FileItem[]>([]);
  const [quality, setQuality] = useState(75);
  const [format, setFormat] = useState("keep");
  const [targetOn, setTargetOn] = useState(false);
  const [targetKb, setTargetKb] = useState("");
  const [toast, setToast] = useState("");
  const [previewItem, setPreviewItem] = useState<FileItem | null>(null);
  const toastTimer = useRef<any>(null);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(""), 2200);
  }, []);

  // File upload
  const addFiles = useCallback(
    async (files: FileList | File[]) => {
      const valid = Array.from(files).filter(f => isSupported(f.type));
      if (valid.length === 0) {
        showToast(t(lang, "dropFmt"));
        return;
      }
      const newItems = await Promise.all(valid.map(f => createFileItem(f)));
      setItems(prev => [...prev, ...newItems]);
    },
    [lang, showToast]
  );

  // Compression
  const compressAll = useCallback(async () => {
    const pending = items.filter(i => i.status === "pending");
    if (pending.length === 0) return;

    // Check quota if logged in
    if (status === "authenticated") {
      const res = await fetch("/api/usage");
      const quota = await res.json();
      if (quota.remaining <= 0) {
        showToast("每日免费次数已用完");
        return;
      }
    }

    setItems(prev =>
      prev.map(i => (i.status === "pending" ? { ...i, status: "processing" as const } : i))
    );

    const opts: CompressOptions = {
      quality: quality / 100,
      format:
        format === "keep"
          ? "keep"
          : format === "jpg"
          ? "image/jpeg"
          : format === "png"
          ? "image/png"
          : "image/webp",
      targetKb: targetOn && targetKb ? Number(targetKb) : null,
    };

    for (const item of pending) {
      try {
        const result = await compressItem(item, opts);
        setItems(prev =>
          prev.map(i => (i.id === item.id ? { ...i, status: "done", result } : i))
        );
        if (result.targetUnreachable) showToast(t(lang, "toastTargetUnreachable"));
      } catch (e: any) {
        setItems(prev =>
          prev.map(i => (i.id === item.id ? { ...i, status: "error", error: e.message } : i))
        );
      }
    }

    // Record usage if logged in
    if (status === "authenticated") {
      try {
        await fetch("/api/usage", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ action: "compress" }),
        });
      } catch {}
    }
  }, [items, quality, format, targetOn, targetKb, status, lang, showToast]);

  // Download
  const downloadSingle = (item: FileItem) => {
    if (!item.result) return;
    const ext = extOf(item.result.format === "image/webp" ? "image/webp" : item.result.format);
    downloadBlob(item.result.blob, item.name.replace(/\.[^.]+$/, "") + "." + ext);
  };

  const downloadZipAll = async () => {
    const done = items.filter(i => i.status === "done" && i.result);
    if (done.length === 0) return;
    const zip = await zipFiles(done);
    downloadBlob(zip, "compressed-images.zip");
  };

  const removeItem = (id: string) => setItems(prev => prev.filter(i => i.id !== id));

  const doneCount = items.filter(i => i.status === "done" && i.result).length;
  const pendingCount = items.filter(i => i.status === "pending").length;
  const totalOrig = items.reduce((s, i) => s + i.origSize, 0);
  const totalComp = items
    .filter(i => i.status === "done" && i.result)
    .reduce((s, i) => s + (i.result?.size || 0), 0);

  return (
    <>
      <HeaderClient />
      <div style={{ background: "var(--bg)", color: "var(--text)", minHeight: "100vh" }}>
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "0 18px 64px" }}>
        {/* Quota bar (when logged in) */}
        {status === "authenticated" && <QuotaBar lang={lang} />}

        {/* Dropzone */}
        <ImageDropzone lang={lang} onFiles={addFiles} />

        {/* Settings */}
        <CompressionSettings
          lang={lang}
          quality={quality}
          setQuality={setQuality}
          format={format}
          setFormat={setFormat}
          targetOn={targetOn}
          setTargetOn={setTargetOn}
          targetKb={targetKb}
          setTargetKb={setTargetKb}
        />

        {/* Summary + Actions */}
        {items.length > 0 && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px 22px",
              alignItems: "center",
              marginBottom: 14,
              fontSize: 13,
            }}
          >
            <div style={{ display: "flex", gap: 16 }}>
              <span>
                {items.length} {lang === "zh" ? "个文件" : "files"}
              </span>
              <span>
                {fmtSize(totalOrig)} → {fmtSize(totalComp)}
              </span>
              {totalOrig > 0 && (
                <span style={{ color: "var(--ok)" }}>
                  -{((1 - totalComp / totalOrig) * 100).toFixed(1)}%
                </span>
              )}
            </div>
            <div style={{ flex: 1 }} />
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <button
                onClick={compressAll}
                disabled={pendingCount === 0}
                style={{
                  padding: "8px 18px",
                  borderRadius: 999,
                  border: "none",
                  background: "var(--primary)",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 13,
                  cursor: pendingCount === 0 ? "default" : "pointer",
                  opacity: pendingCount === 0 ? 0.5 : 1,
                  transition: ".15s",
                }}
              >
                {lang === "zh" ? `压缩 ${pendingCount} 个` : `Compress ${pendingCount}`}
              </button>
              <button
                onClick={downloadZipAll}
                disabled={doneCount === 0}
                style={{
                  padding: "8px 18px",
                  borderRadius: 999,
                  border: "1px solid var(--border)",
                  background: "var(--panel)",
                  color: "var(--text)",
                  fontWeight: 600,
                  fontSize: 13,
                  cursor: doneCount === 0 ? "default" : "pointer",
                  opacity: doneCount === 0 ? 0.5 : 1,
                  transition: ".15s",
                }}
              >
                {t(lang, "downloadZip")}
              </button>
              <button
                onClick={() => setItems([])}
                style={{
                  padding: "8px 18px",
                  borderRadius: 999,
                  border: "1px solid var(--border)",
                  background: "var(--panel)",
                  color: "var(--muted)",
                  fontWeight: 600,
                  fontSize: 13,
                  cursor: "pointer",
                }}
              >
                {lang === "zh" ? "清空" : "Clear"}
              </button>
            </div>
          </div>
        )}

        {/* File list */}
        {items.length > 0 && (
          <ResultTable
            items={items}
            lang={lang}
            onDownload={downloadSingle}
            onPreview={setPreviewItem}
            onRemove={removeItem}
          />
        )}

        {/* Guide link — emoji removed (P0-1) */}
        <div style={{ textAlign: "center", margin: "32px 0 16px" }}>
          <a
            href="/guide.html"
            style={{
              color: "var(--primary)",
              fontWeight: 600,
              fontSize: 14,
              textDecoration: "none",
            }}
          >
            {lang === "zh"
              ? "阅读完整指南：如何将图片压缩到指定大小（200KB / 100KB / 50KB）"
              : "Read the guide: How to compress images to any target size"}
          </a>
        </div>

        {/* ── SEO body content: H1 + features + use cases ── */}
        <SeoContent lang={lang} />
      </div>

      {/* Preview Modal */}
      {previewItem && previewItem.result && (
        <PreviewModal item={previewItem} lang={lang} onClose={() => setPreviewItem(null)} />
      )}

      {/* Toast */}
      <div
        style={{
          position: "fixed",
          bottom: 24,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2000,
          background: "var(--toast-bg)",
          color: "var(--toast-text)",
          padding: "10px 16px",
          borderRadius: 10,
          fontSize: 13,
          opacity: toast ? 1 : 0,
          transition: "opacity .2s",
          pointerEvents: "none",
        }}
      >
        {toast}
      </div>
    </div>
      <FooterClient />
    </>
  );
}
