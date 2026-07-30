"use client";

import { type Lang } from "@/lib/i18n";
import { t } from "@/lib/translate";

export function ImageDropzone({
  lang,
  onFiles,
}: {
  lang: Lang;
  onFiles: (files: FileList | File[]) => void;
}) {
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files.length) onFiles(e.dataTransfer.files);
  };

  return (
    <div
      onDragOver={e => e.preventDefault()}
      onDrop={handleDrop}
      onClick={() => {
        const inp = document.createElement("input");
        inp.type = "file";
        inp.multiple = true;
        inp.accept = "image/*";
        inp.onchange = () => {
          if (inp.files) onFiles(inp.files);
        };
        inp.click();
      }}
      style={{
        border: "2px dashed var(--border)",
        borderRadius: "var(--radius)",
        background: "var(--panel)",
        padding: "46px 20px",
        textAlign: "center",
        cursor: "pointer",
        transition: ".2s",
        boxShadow: "0 1px 3px rgba(0,0,0,.08), 0 8px 24px rgba(0,0,0,.05)",
      }}
    >
      <div style={{ fontSize: 17, fontWeight: 600, marginBottom: 6 }}>{t(lang, "dropBig")}</div>
      <div style={{ color: "var(--muted)", fontSize: 13 }}>{t(lang, "dropSub")}</div>
      <div style={{ marginTop: 12, fontSize: 12, color: "var(--muted)" }}>{t(lang, "dropFmt")}</div>
    </div>
  );
}
