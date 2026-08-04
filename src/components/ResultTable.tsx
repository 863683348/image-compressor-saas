"use client";

import { type Lang } from "@/lib/i18n";
import { type FileItem, fmtSize } from "@/lib/compress";
import { t } from "@/lib/translate";
import { CloseIcon } from "@/components/icons";

const badgeStyle = (status: FileItem["status"]) => {
  switch (status) {
    case "pending":
      return { background: "var(--badge-pending-bg)", color: "var(--badge-pending-text)" };
    case "processing":
      return { background: "var(--badge-processing-bg)", color: "var(--badge-processing-text)" };
    case "done":
      return { background: "var(--badge-done-bg)", color: "var(--badge-done-text)" };
    case "error":
      return { background: "var(--badge-error-bg)", color: "var(--badge-error-text)" };
  }
};

export function ResultTable({
  items,
  lang,
  onDownload,
  onPreview,
  onRemove,
}: {
  items: FileItem[];
  lang: Lang;
  onDownload: (item: FileItem) => void;
  onPreview: (item: FileItem) => void;
  onRemove: (id: string) => void;
}) {
  return (
    <div style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
        <thead>
          <tr style={{ borderBottom: "1px solid var(--border)" }}>
            {[
              t(lang, "colFile"),
              t(lang, "colOrig"),
              t(lang, "colComp"),
              t(lang, "colRate"),
              t(lang, "colStatus"),
              t(lang, "colAction"),
            ].map((h, i) => (
              <th
                key={i}
                style={{
                  padding: "10px 12px",
                  textAlign: "left",
                  fontWeight: 600,
                  color: "var(--muted)",
                  fontSize: 12,
                  whiteSpace: "nowrap",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id} style={{ borderBottom: "1px solid var(--border)" }}>
              <td
                style={{
                  padding: "10px 12px",
                  maxWidth: 160,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {item.name}
              </td>
              <td style={{ padding: "10px 12px", whiteSpace: "nowrap", color: "var(--muted)" }}>
                {fmtSize(item.origSize)}
              </td>
              <td style={{ padding: "10px 12px", whiteSpace: "nowrap" }}>
                {item.result ? fmtSize(item.result.size) : "-"}
              </td>
              <td style={{ padding: "10px 12px", whiteSpace: "nowrap" }}>
                {item.result && item.origSize > 0 ? (
                  <span style={{ color: "var(--ok)" }}>
                    -{((1 - item.result.size / item.origSize) * 100).toFixed(1)}%
                  </span>
                ) : (
                  "-"
                )}
              </td>
              <td style={{ padding: "10px 12px" }}>
                <span
                  style={{
                    display: "inline-block",
                    padding: "2px 8px",
                    borderRadius: 6,
                    fontSize: 11,
                    fontWeight: 600,
                    ...badgeStyle(item.status),
                  }}
                >
                  {item.status === "pending"
                    ? t(lang, "statusPending")
                    : item.status === "processing"
                    ? t(lang, "statusProcessing")
                    : item.status === "done"
                    ? t(lang, "statusDone")
                    : t(lang, "statusError")}
                </span>
              </td>
              <td style={{ padding: "10px 12px" }}>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {item.status === "done" && item.result && (
                    <>
                      <button
                        onClick={() => onDownload(item)}
                        style={{
                          padding: "4px 10px",
                          borderRadius: 6,
                          border: "1px solid var(--border)",
                          background: "var(--panel)",
                          color: "var(--text)",
                          fontSize: 11,
                          cursor: "pointer",
                        }}
                      >
                        {t(lang, "actDownload")}
                      </button>
                      <button
                        onClick={() => onPreview(item)}
                        style={{
                          padding: "4px 10px",
                          borderRadius: 6,
                          border: "1px solid var(--border)",
                          background: "var(--panel)",
                          color: "var(--text)",
                          fontSize: 11,
                          cursor: "pointer",
                        }}
                      >
                        {t(lang, "preview")}
                      </button>
                    </>
                  )}
                  <button
                    onClick={() => onRemove(item.id)}
                    aria-label={lang === "zh" ? "移除文件" : "Remove file"}
                    style={{
                      padding: "4px 8px",
                      borderRadius: 6,
                      border: "1px solid var(--border)",
                      background: "var(--panel)",
                      color: "var(--warn)",
                      fontSize: 11,
                      cursor: "pointer",
                      display: "inline-flex",
                    }}
                  >
                    <CloseIcon size={14} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
