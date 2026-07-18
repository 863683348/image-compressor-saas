"use client";

// Pure client-side image compression using Canvas API

export interface CompressOptions {
  quality: number;
  format: string; // "keep" | "image/jpeg" | "image/png" | "image/webp"
  targetKb: number | null;
}

export interface CompressResult {
  blob: Blob;
  url: string;
  size: number;
  width: number;
  height: number;
  format: string;
  quality: number;
  targetUnreachable?: boolean;
}

export interface FileItem {
  id: string;
  file: File;
  name: string;
  origSize: number;
  origUrl: string;
  status: "pending" | "processing" | "done" | "error";
  result?: CompressResult;
  error?: string;
  width: number;
  height: number;
  format: string;
}

const SUPPORTED = ["image/jpeg", "image/png", "image/webp"];

export function isSupported(mime: string): boolean {
  return SUPPORTED.includes(mime) || mime === "image/avif";
}

export function createFileItem(file: File): Promise<FileItem> {
  return new Promise((resolve) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      resolve({
        id: crypto.randomUUID(),
        file,
        name: file.name,
        origSize: file.size,
        origUrl: url,
        status: "pending",
        width: img.width,
        height: img.height,
        format: file.type,
      });
    };
    img.src = url;
  });
}

export function compressItem(item: FileItem, opts: CompressOptions): Promise<CompressResult> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = async () => {
      try {
        const { quality, format, targetKb } = opts;
        const outFormat = format === "keep" ? item.file.type : format;
        const finalFormat = outFormat === "image/avif" ? "image/webp" : outFormat;
        const isAVIF = outFormat === "image/avif";
        let bestBlob: Blob | null = null;
        let bestSize = Infinity;
        let bestQuality = quality;
        let targetUnreachable = false;

        if (targetKb && targetKb > 0) {
          // Binary search across qualities
          let lo = 0.1, hi = 1.0, best = lo;
          for (let i = 0; i < 8; i++) {
            const mid = (lo + hi) / 2;
            const blob = await canvasToBlob(img, finalFormat, mid, item.width, item.height);
            if (blob.size <= targetKb * 1024) {
              best = mid;
              if (blob.size < bestSize) { bestBlob = blob; bestSize = blob.size; bestQuality = mid; }
              lo = mid + 0.01;
            } else {
              hi = mid - 0.01;
            }
          }
          if (!bestBlob || bestBlob.size > targetKb * 1024) {
            targetUnreachable = true;
            const blob = await canvasToBlob(img, finalFormat, best, item.width, item.height);
            if (!bestBlob || blob.size < bestSize) { bestBlob = blob; bestSize = blob.size; bestQuality = best; }
          }
        } else {
          const blob = await canvasToBlob(img, finalFormat, quality, item.width, item.height);
          bestBlob = blob;
          bestSize = blob.size;
          bestQuality = quality;
        }

        if (!bestBlob) throw new Error("Compression failed");

        resolve({
          blob: bestBlob,
          url: URL.createObjectURL(bestBlob),
          size: bestBlob.size,
          width: item.width,
          height: item.height,
          format: finalFormat,
          quality: bestQuality,
          targetUnreachable: isAVIF || targetUnreachable,
        });
      } catch (e) {
        reject(e);
      }
    };
    img.onerror = () => reject(new Error("Failed to load image"));
    img.src = item.origUrl;
  });
}

function canvasToBlob(img: HTMLImageElement, format: string, quality: number, w: number, h: number): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const c = document.createElement("canvas");
    c.width = w;
    c.height = h;
    const ctx = c.getContext("2d")!;
    ctx.drawImage(img, 0, 0);
    c.toBlob(
      (blob) => (blob ? resolve(blob) : reject(new Error("toBlob failed"))),
      format,
      quality
    );
  });
}

export function downloadBlob(blob: Blob, filename: string) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
}

export async function zipFiles(items: FileItem[]): Promise<Blob> {
  // Simple ZIP without external deps — uses only native APIs
  const localName = (name: string) => name.replace(/[^a-zA-Z0-9._-]/g, "_");
  const encoder = new TextEncoder();

  // Build central directory
  const entries: { name: string; data: Uint8Array; header: Uint8Array; localOffset: number }[] = [];
  let offset = 0;

  for (const item of items) {
    if (!item.result) continue;
    const ab = await item.result.blob.arrayBuffer();
    const data = new Uint8Array(ab);
    const nameBytes = encoder.encode(localName(item.name));

    // Local file header
    const header = new Uint8Array(30 + nameBytes.length);
    const dv = new DataView(header.buffer);
    dv.setUint32(0, 0x04034b50, true); // signature
    dv.setUint16(4, 20, true); // version needed
    dv.setUint16(6, 0, true); // flags
    dv.setUint16(8, 0, true); // compression (stored)
    dv.setUint16(10, 0, true); // mod time
    dv.setUint16(12, 0, true); // mod date
    dv.setUint32(16, 0, true); // crc32 (placeholder)
    dv.setUint32(20, data.length, true); // compressed size
    dv.setUint32(24, data.length, true); // uncompressed size
    dv.setUint16(28, nameBytes.length, true); // filename length
    dv.setUint16(30, 0, true); // extra field length
    header.set(nameBytes, 30);

    entries.push({ name: localName(item.name), data, header, localOffset: offset });
    offset += header.length + data.length;
  }

  // Central directory
  const central: Uint8Array[] = [];
  let centralOffset = offset;
  for (const e of entries) {
    const nameBytes = encoder.encode(e.name);
    const cd = new Uint8Array(46 + nameBytes.length);
    const dv = new DataView(cd.buffer);
    dv.setUint32(0, 0x02014b50, true);
    dv.setUint16(4, 20, true);
    dv.setUint16(6, 20, true);
    dv.setUint16(8, 0, true);
    dv.setUint16(10, 0, true);
    dv.setUint16(12, 0, true);
    dv.setUint16(14, 0, true);
    dv.setUint32(16, 0, true); // crc32
    dv.setUint32(20, e.data.length, true);
    dv.setUint32(24, e.data.length, true);
    dv.setUint16(28, nameBytes.length, true);
    dv.setUint16(30, 0, true);
    dv.setUint16(32, 0, true); // comment length
    dv.setUint16(34, 0, true); // disk
    dv.setUint16(36, 0, true); // internal attrs
    dv.setUint32(38, 0, true); // external attrs
    dv.setUint32(42, e.localOffset, true); // local header offset
    cd.set(nameBytes, 46);
    central.push(cd);
  }

  // End of central directory
  const cdLength = central.reduce((s, c) => s + c.length, 0);
  const eocd = new Uint8Array(22);
  const dv = new DataView(eocd.buffer);
  dv.setUint32(0, 0x06054b50, true);
  dv.setUint16(4, 0, true);
  dv.setUint16(6, 0, true);
  dv.setUint16(8, entries.length, true);
  dv.setUint16(10, entries.length, true);
  dv.setUint32(12, cdLength, true);
  dv.setUint32(16, centralOffset, true);
  dv.setUint16(20, 0, true);

  // Assemble
  const parts: Uint8Array[] = [];
  for (const e of entries) { parts.push(e.header, e.data); }
  parts.push(...central, eocd);
  const total = parts.reduce((s, p) => s + p.length, 0);
  const result = new Uint8Array(total);
  let pos = 0;
  for (const p of parts) { result.set(p, pos); pos += p.length; }
  return new Blob([result], { type: "application/zip" });
}

export function fmtSize(b: number): string {
  if (b < 1024) return b + " B";
  if (b < 1024 * 1024) return (b / 1024).toFixed(1) + " KB";
  return (b / 1024 / 1024).toFixed(2) + " MB";
}

export function extOf(mime: string): string {
  return ({ "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp", "image/avif": "avif" } as Record<string, string>)[mime] || "img";
}
