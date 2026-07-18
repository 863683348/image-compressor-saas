"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { useSession } from "next-auth/react";
import { useLang } from "@/components/lang-context";
import { useTheme } from "@/components/theme-context";
import { dict, type Lang } from "@/lib/i18n";
import {
  createFileItem, compressItem, downloadBlob, zipFiles,
  fmtSize, extOf, isSupported, type FileItem, type CompressOptions,
} from "@/lib/compress";

const t = (lang: Lang, key: string): string => {
  const d = dict[lang] as Record<string, any>;
  return d?.[key] ?? key;
};

const FREE_DAILY_LIMIT = 10;

export default function HomePage() {
  const { data: session, status } = useSession();
  const { lang, setLang } = useLang();
  const { theme, toggleTheme } = useTheme();
  const [items, setItems] = useState<FileItem[]>([]);
  const [quality, setQuality] = useState(75);
  const [format, setFormat] = useState("keep");
  const [targetOn, setTargetOn] = useState(false);
  const [targetKb, setTargetKb] = useState("");
  const [toast, setToast] = useState("");
  const [previewItem, setPreviewItem] = useState<FileItem | null>(null);
  const [cmpMode, setCmpMode] = useState<"side" | "slider">("side");
  const [selectAll, setSelectAll] = useState(true);
  const toastTimer = useRef<any>(null);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(""), 2200);
  }, []);

  // File upload
  const addFiles = useCallback(async (files: FileList | File[]) => {
    const valid = Array.from(files).filter(f => isSupported(f.type));
    if (valid.length === 0) { showToast(t(lang, "dropFmt")); return; }
    const newItems = await Promise.all(valid.map(f => createFileItem(f)));
    setItems(prev => [...prev, ...newItems]);
  }, [lang, showToast]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files.length) addFiles(e.dataTransfer.files);
  }, [addFiles]);

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

    setItems(prev => prev.map(i => i.status === "pending" ? { ...i, status: "processing" as const } : i));

    const opts: CompressOptions = {
      quality: quality / 100,
      format: format === "keep" ? "keep" : format === "jpg" ? "image/jpeg" : format === "png" ? "image/png" : "image/webp",
      targetKb: targetOn && targetKb ? Number(targetKb) : null,
    };

    for (const item of pending) {
      try {
        const result = await compressItem(item, opts);
        setItems(prev => prev.map(i => i.id === item.id ? { ...i, status: "done", result } : i));
        if (result.targetUnreachable) showToast(t(lang, "toastTargetUnreachable"));
      } catch (e: any) {
        setItems(prev => prev.map(i => i.id === item.id ? { ...i, status: "error", error: e.message } : i));
      }
    }

    // Record usage if logged in
    if (status === "authenticated") {
      try {
        await fetch("/api/usage", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action: "compress" }) });
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

  // CSS
  const s = (key: string) => t(lang, key);

  const doneCount = items.filter(i => i.status === "done" && i.result).length;
  const pendingCount = items.filter(i => i.status === "pending").length;
  const totalOrig = items.reduce((s, i) => s + i.origSize, 0);
  const totalComp = items.filter(i => i.status === "done" && i.result).reduce((s, i) => s + (i.result?.size || 0), 0);

  return (
    <div style={{ background: "var(--bg)", color: "var(--text)", minHeight: "100vh" }}>
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "24px 18px 64px" }}>
        {/* Header */}
        <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 22, flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, fontWeight: 700, fontSize: 18, minWidth: 0 }}>
            <div style={{ width: 34, height: 34, borderRadius: 9, background: "linear-gradient(135deg, #4f46e5, #06b6d4)", display: "grid", placeItems: "center", color: "#fff", fontWeight: 800, fontSize: 16, flexShrink: 0 }}>🖼</div>
            <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{s("brand")}</span>
            <span style={{ fontSize: 12, fontWeight: 600, color: "var(--ok)", background: `color-mix(in srgb, var(--ok) 14%, transparent)`, border: `1px solid color-mix(in srgb, var(--ok) 35%, transparent)`, padding: "3px 9px", borderRadius: 999, whiteSpace: "nowrap" }}>{s("badge")}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
            {/* Theme toggle only — auth is in HeaderClient */}
            <button onClick={toggleTheme} style={{ border: "1px solid var(--border)", background: "var(--panel)", color: "var(--text)", minWidth: 38, height: 38, borderRadius: 10, cursor: "pointer", fontSize: 15, padding: "0 10px", fontWeight: 600, display: "grid", placeItems: "center", transition: ".15s" }} title={s("themeTitle")}>
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </div>
        </header>

        {/* Quota bar (when logged in) */}
        {status === "authenticated" && (
          <QuotaBar lang={lang} />
        )}

        {/* Dropzone */}
        <div
          onDragOver={e => e.preventDefault()}
          onDrop={handleDrop}
          onClick={() => {
            const inp = document.createElement("input");
            inp.type = "file";
            inp.multiple = true;
            inp.accept = "image/*";
            inp.onchange = () => { if (inp.files) addFiles(inp.files); };
            inp.click();
          }}
          style={{ border: "2px dashed var(--border)", borderRadius: "var(--radius)", background: "var(--panel)", padding: "46px 20px", textAlign: "center", cursor: "pointer", transition: ".2s", boxShadow: "0 1px 3px rgba(0,0,0,.08), 0 8px 24px rgba(0,0,0,.05)" }}
        >
          <div style={{ fontSize: 17, fontWeight: 600, marginBottom: 6 }}>{s("dropBig")}</div>
          <div style={{ color: "var(--muted)", fontSize: 13 }}>{s("dropSub")}</div>
          <div style={{ marginTop: 12, fontSize: 12, color: "var(--muted)" }}>{s("dropFmt")}</div>
        </div>

        {/* Settings */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "18px 26px", alignItems: "flex-end", margin: "18px 0", padding: "16px 18px", background: "var(--panel)", border: "1px solid var(--border)", borderRadius: "var(--radius)", boxShadow: "0 1px 3px rgba(0,0,0,.08), 0 8px 24px rgba(0,0,0,.05)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <label style={{ fontSize: 12, color: "var(--muted)", fontWeight: 600 }}>{s("quality")}: {quality}%</label>
            <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 240 }}>
              <input type="range" min={1} max={100} value={quality} onChange={e => setQuality(Number(e.target.value))} style={{ width: 200, accentColor: "var(--primary)" }} />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <label style={{ fontSize: 12, color: "var(--muted)", fontWeight: 600 }}>{s("format")}</label>
            <select value={format} onChange={e => setFormat(e.target.value)} style={{ padding: "8px 12px", borderRadius: 10, border: "1px solid var(--border)", background: "var(--panel)", color: "var(--text)", fontSize: 14 }}>
              <option value="keep">{s("formatKeep")}</option>
              <option value="jpg">JPG</option>
              <option value="png">PNG</option>
              <option value="webp">WebP</option>
            </select>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <label style={{ fontSize: 12, color: "var(--muted)", fontWeight: 600 }}>
              <label style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "var(--text)", cursor: "pointer" }}>
                <input type="checkbox" checked={targetOn} onChange={e => setTargetOn(e.target.checked)} />
                {s("targetLabel")}
              </label>
            </label>
            {targetOn && (
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <input type="number" min={1} value={targetKb} onChange={e => setTargetKb(e.target.value)} placeholder="200" style={{ width: 90, padding: "8px 10px", borderRadius: 10, border: "1px solid var(--border)", background: "var(--panel)", color: "var(--text)", fontSize: 14 }} />
                <span style={{ fontSize: 12, color: "var(--muted)" }}>{s("targetHint")}</span>
              </div>
            )}
          </div>
        </div>

        {/* Summary + Actions */}
        {items.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 22px", alignItems: "center", marginBottom: 14, fontSize: 13 }}>
            <div style={{ display: "flex", gap: 16 }}>
              <span>{items.length} {lang === "zh" ? "个文件" : "files"}</span>
              <span>{fmtSize(totalOrig)} → {fmtSize(totalComp)}</span>
              {totalOrig > 0 && <span style={{ color: "var(--ok)" }}>-{((1 - totalComp / totalOrig) * 100).toFixed(1)}%</span>}
            </div>
            <div style={{ flex: 1 }} />
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <button onClick={compressAll} disabled={pendingCount === 0} style={{ padding: "8px 18px", borderRadius: 999, border: "none", background: "var(--primary)", color: "#fff", fontWeight: 700, fontSize: 13, cursor: pendingCount === 0 ? "default" : "pointer", opacity: pendingCount === 0 ? .5 : 1, transition: ".15s" }}>
                {lang === "zh" ? `压缩 ${pendingCount} 个` : `Compress ${pendingCount}`}
              </button>
              <button onClick={downloadZipAll} disabled={doneCount === 0} style={{ padding: "8px 18px", borderRadius: 999, border: "1px solid var(--border)", background: "var(--panel)", color: "var(--text)", fontWeight: 600, fontSize: 13, cursor: doneCount === 0 ? "default" : "pointer", opacity: doneCount === 0 ? .5 : 1, transition: ".15s" }}>
                {s("downloadZip")}
              </button>
              <button onClick={() => setItems([])} style={{ padding: "8px 18px", borderRadius: 999, border: "1px solid var(--border)", background: "var(--panel)", color: "var(--muted)", fontWeight: 600, fontSize: 13, cursor: "pointer" }}>
                {lang === "zh" ? "清空" : "Clear"}
              </button>
            </div>
          </div>
        )}

        {/* File list */}
        {items.length > 0 && (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border)" }}>
                  {[
                    s("colFile"), s("colOrig"), s("colComp"), s("colRate"),
                    s("colStatus"), s("colAction"),
                  ].map((h, i) => (
                    <th key={i} style={{ padding: "10px 12px", textAlign: "left", fontWeight: 600, color: "var(--muted)", fontSize: 12, whiteSpace: "nowrap" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {items.map(item => (
                  <tr key={item.id} style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ padding: "10px 12px", maxWidth: 160, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.name}</td>
                    <td style={{ padding: "10px 12px", whiteSpace: "nowrap", color: "var(--muted)" }}>{fmtSize(item.origSize)}</td>
                    <td style={{ padding: "10px 12px", whiteSpace: "nowrap" }}>
                      {item.result ? fmtSize(item.result.size) : "-"}
                    </td>
                    <td style={{ padding: "10px 12px", whiteSpace: "nowrap" }}>
                      {item.result && item.origSize > 0 ? (
                        <span style={{ color: "var(--ok)" }}>-{((1 - item.result.size / item.origSize) * 100).toFixed(1)}%</span>
                      ) : "-"}
                    </td>
                    <td style={{ padding: "10px 12px" }}>
                      <span style={{
                        display: "inline-block", padding: "2px 8px", borderRadius: 6, fontSize: 11, fontWeight: 600,
                        background: item.status === "pending" ? "#f1f5f9" : item.status === "processing" ? "#fef9c3" : item.status === "done" ? "#dcfce7" : "#fee2e2",
                        color: item.status === "pending" ? "#475569" : item.status === "processing" ? "#a16207" : item.status === "done" ? "#166534" : "#991b1b",
                      }}>
                        {item.status === "pending" ? s("statusPending") : item.status === "processing" ? s("statusProcessing") : item.status === "done" ? s("statusDone") : s("statusError")}
                      </span>
                    </td>
                    <td style={{ padding: "10px 12px" }}>
                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                        {item.status === "done" && item.result && (
                          <>
                            <button onClick={() => downloadSingle(item)} style={{ padding: "4px 10px", borderRadius: 6, border: "1px solid var(--border)", background: "var(--panel)", color: "var(--text)", fontSize: 11, cursor: "pointer" }}>
                              {s("actDownload")}
                            </button>
                            <button onClick={() => setPreviewItem(item)} style={{ padding: "4px 10px", borderRadius: 6, border: "1px solid var(--border)", background: "var(--panel)", color: "var(--text)", fontSize: 11, cursor: "pointer" }}>
                              {s("preview")}
                            </button>
                          </>
                        )}
                        <button onClick={() => removeItem(item.id)} style={{ padding: "4px 10px", borderRadius: 6, border: "1px solid var(--border)", background: "var(--panel)", color: "var(--warn)", fontSize: 11, cursor: "pointer" }}>
                          ✕
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Guide link */}
        <div style={{ textAlign: "center", margin: "32px 0 16px" }}>
          <a href="/guide.html" style={{ color: "var(--primary)", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>
            📖 {lang === "zh" ? "阅读完整指南：如何将图片压缩到指定大小（200KB / 100KB / 50KB）" : "Read the guide: How to compress images to any target size"}
          </a>
        </div>

        {/* Resources section (also lives in global Footer) */}
        <div style={{
          marginTop: 32, padding: "20px 22px",
          background: "var(--panel)", border: "1px solid var(--border)",
          borderRadius: "var(--radius)",
        }}>
          <div style={{ fontWeight: 700, color: "var(--text)", fontSize: 14, marginBottom: 12 }}>
            {s("brand")}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 18px" }}>
            <a href="/pricing" style={{ color: "var(--muted)", textDecoration: "none", fontSize: 13, fontWeight: 500 }}>{s("pricing")}</a>
            <a href="/blog" style={{ color: "var(--muted)", textDecoration: "none", fontSize: 13, fontWeight: 500 }}>{s("footerBlog")}</a>
            <a href="/faq" style={{ color: "var(--muted)", textDecoration: "none", fontSize: 13, fontWeight: 500 }}>{s("footerFaq")}</a>
            <a href="/privacy" style={{ color: "var(--muted)", textDecoration: "none", fontSize: 13, fontWeight: 500 }}>{s("footerPrivacy")}</a>
            <a href="/terms" style={{ color: "var(--muted)", textDecoration: "none", fontSize: 13, fontWeight: 500 }}>{s("footerTerms")}</a>
            <a href="/contact" style={{ color: "var(--muted)", textDecoration: "none", fontSize: 13, fontWeight: 500 }}>{s("footerContact")}</a>
          </div>
        </div>
      </div>

      {/* Preview Modal */}
      {previewItem && previewItem.result && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.55)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000, padding: 20 }} onClick={() => setPreviewItem(null)}>
          <div style={{ background: "var(--panel)", borderRadius: "var(--radius)", maxWidth: 900, width: "100%", maxHeight: "90vh", overflow: "auto", boxShadow: "0 8px 40px rgba(0,0,0,.2)" }} onClick={e => e.stopPropagation()}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 18px", borderBottom: "1px solid var(--border)" }}>
              <span style={{ fontWeight: 600, fontSize: 14 }}>{previewItem.name}</span>
              <button onClick={() => setPreviewItem(null)} style={{ border: "none", background: "none", color: "var(--muted)", fontSize: 20, cursor: "pointer", padding: "4px 8px" }}>✕</button>
            </div>
            <div style={{ display: "flex", gap: 8, padding: "12px 18px 0" }}>
              {(["side", "slider"] as const).map(m => (
                <button key={m} onClick={() => setCmpMode(m)} style={{ padding: "6px 14px", borderRadius: 8, border: cmpMode === m ? "2px solid var(--primary)" : "1px solid var(--border)", background: cmpMode === m ? "var(--primary-soft)" : "var(--panel)", color: "var(--text)", fontSize: 12, cursor: "pointer", fontWeight: 600 }}>
                  {m === "side" ? (lang === "zh" ? "并排" : "Side by side") : (lang === "zh" ? "滑块" : "Slider")}
                </button>
              ))}
            </div>
            <div style={{ padding: 18 }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "var(--muted)", marginBottom: 8 }}>
                <span>{s("cmpOrig")}: {fmtSize(previewItem.origSize)}</span>
                <span>{s("cmpComp")}: {fmtSize(previewItem.result.size)} (-{((1 - previewItem.result.size / previewItem.origSize) * 100).toFixed(1)}%)</span>
              </div>
              {cmpMode === "side" ? (
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <div><img src={previewItem.origUrl} alt="original" style={{ width: "100%", borderRadius: 8, display: "block" }} /></div>
                  <div><img src={previewItem.result.url} alt="compressed" style={{ width: "100%", borderRadius: 8, display: "block" }} /></div>
                </div>
              ) : (
                <SliderCompare orig={previewItem.origUrl} comp={previewItem.result.url} />
              )}
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      <div style={{
        position: "fixed", bottom: 24, left: "50%", transform: "translateX(-50%)", zIndex: 2000,
        background: "#111827", color: "#fff", padding: "10px 16px", borderRadius: 10,
        fontSize: 13, opacity: toast ? 1 : 0, transition: "opacity .2s", pointerEvents: "none",
      }}>
        {toast}
      </div>
    </div>
  );
}

/* Quota bar */
function QuotaBar({ lang }: { lang: Lang }) {
  const [quota, setQuota] = useState<any>(null);
  useEffect(() => {
    fetch("/api/usage").then(r => r.json()).then(setQuota).catch(() => {});
  }, []);

  if (!quota) return null;
  const pct = (quota.used / quota.limit) * 100;
  return (
    <div style={{ marginBottom: 14, padding: "10px 14px", background: "var(--panel)", border: "1px solid var(--border)", borderRadius: "var(--radius)", display: "flex", alignItems: "center", gap: 12, fontSize: 13 }}>
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 600, marginBottom: 4 }}>
          {lang === "zh" ? `今日已压缩 ${quota.used} 次，剩余 ${quota.remaining} 次` : `${quota.used} compressions used today, ${quota.remaining} remaining`}
        </div>
        <div style={{ height: 6, background: "var(--border)", borderRadius: 3, overflow: "hidden" }}>
          <div style={{ width: `${Math.min(pct, 100)}%`, height: "100%", background: pct >= 80 ? "var(--warn)" : "var(--primary)", borderRadius: 3, transition: "width .3s" }} />
        </div>
      </div>
      <span style={{ fontSize: 11, color: "var(--muted)", whiteSpace: "nowrap" }}>{lang === "zh" ? "每日 10 次" : "10/day"}</span>
    </div>
  );
}

/* Slider compare */
function SliderCompare({ orig, comp }: { orig: string; comp: string }) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouse = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPos(Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100)));
  };

  return (
    <div ref={containerRef} style={{ position: "relative", userSelect: "none", cursor: "ew-resize" }} onMouseMove={handleMouse} onMouseDown={handleMouse}>
      <img src={comp} alt="compressed" style={{ width: "100%", borderRadius: 8, display: "block" }} />
      <div style={{ position: "absolute", top: 0, left: 0, width: `${pos}%`, overflow: "hidden", borderRadius: "8px 0 0 8px" }}>
        <img src={orig} alt="original" style={{ width: `${100 / pos * 100}%`, maxWidth: "none", display: "block", height: "auto" }} />
      </div>
      <div style={{ position: "absolute", top: 0, bottom: 0, left: `${pos}%`, width: 3, background: "#fff", transform: "translateX(-50%)", boxShadow: "0 0 6px rgba(0,0,0,.3)" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 30, height: 30, borderRadius: "50%", background: "#fff", boxShadow: "0 2px 8px rgba(0,0,0,.2)", display: "grid", placeItems: "center", fontSize: 14 }}>⟷</div>
      </div>
    </div>
  );
}
