"use client";

import { useState, useRef } from "react";
import { useLang } from "@/components/lang-context";

export function SliderCompare({ orig, comp }: { orig: string; comp: string }) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const { lang } = useLang();

  const handleMouse = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPos(Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100)));
  };

  return (
    <div
      ref={containerRef}
      style={{ position: "relative", userSelect: "none", cursor: "ew-resize" }}
      onMouseMove={handleMouse}
      onMouseDown={handleMouse}
    >
      <img
        src={comp}
        alt={lang === "zh" ? "压缩后的图片效果" : "Compressed image preview"}
        style={{ width: "100%", borderRadius: 8, display: "block" }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: `${pos}%`,
          overflow: "hidden",
          borderRadius: "8px 0 0 8px",
        }}
      >
        <img
          src={orig}
          alt={lang === "zh" ? "压缩前的原图（滑块对比）" : "Original image (slider comparison)"}
          style={{ width: `${100 / pos * 100}%`, maxWidth: "none", display: "block", height: "auto" }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: `${pos}%`,
          width: 3,
          background: "var(--panel)",
          transform: "translateX(-50%)",
          boxShadow: "0 0 6px rgba(0,0,0,.3)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: 30,
            height: 30,
            borderRadius: "50%",
            background: "var(--panel)",
            boxShadow: "0 2px 8px rgba(0,0,0,.2)",
            display: "grid",
            placeItems: "center",
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--text)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M8 7 4 12l4 5M16 7l4 5-4 5" />
          </svg>
        </div>
      </div>
    </div>
  );
}
