"use client";

import { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useLang } from "@/i18n/i18n-provider";
import { useTheme } from "@/components/theme-context";
import { SunIcon, MoonIcon, MenuIcon, CloseIcon } from "@/components/icons";

type NavItem = { key: string; zh: string; en: string; getPath: (lang: string) => string };

// 网站主导航——之前缺失，导致博客/FAQ/联系我们等页面在顶部没有任何入口。
const NAV: NavItem[] = [
  { key: "home", zh: "首页", en: "Home", getPath: (l) => `/${l}` },
  { key: "blog", zh: "博客", en: "Blog", getPath: (l) => `/${l}/blog` },
  { key: "pricing", zh: "定价", en: "Pricing", getPath: (l) => `/${l}/pricing` },
  { key: "faq", zh: "FAQ", en: "FAQ", getPath: (l) => `/${l}/faq` },
  { key: "contact", zh: "联系我们", en: "Contact", getPath: (l) => `/${l}/contact` },
];

export default function HeaderClient() {
  const { lang, setLang } = useLang();
  const { theme, toggleTheme } = useTheme();
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const [mobile, setMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // 路由变化时收起移动端菜单
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (item: NavItem) => {
    const p = item.getPath(lang);
    if (item.key === "home") return pathname === p || pathname === `${p}/`;
    return pathname === p || pathname.startsWith(`${p}/`);
  };

  const iconBtn = (extra?: React.CSSProperties): React.CSSProperties => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 44,
    height: 44,
    borderRadius: 10,
    border: "1px solid var(--border)",
    background: "var(--panel)",
    color: "var(--text)",
    cursor: "pointer",
    padding: 0,
    ...extra,
  });

  const linkStyle = (active: boolean): React.CSSProperties => ({
    fontSize: 14,
    fontWeight: active ? 700 : 500,
    color: active ? "var(--primary)" : "var(--text)",
    textDecoration: "none",
    whiteSpace: "nowrap",
    padding: "10px 2px",
    position: "relative",
  });

  const label = (item: NavItem) => (lang === "zh" ? item.zh : item.en);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "var(--bg)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: 1040,
          margin: "0 auto",
          padding: "10px 18px",
          gap: 12,
        }}
      >
        {/* Logo —— 带语言前缀，避免依赖中间件重定向造成的闪跳 */}
        <a
          href={`/${lang}`}
          style={{
            fontWeight: 800,
            fontSize: 18,
            color: "var(--text)",
            textDecoration: "none",
            letterSpacing: "-0.01em",
            whiteSpace: "nowrap",
          }}
        >
          Image Compressor
        </a>

        {/* 桌面端主导航菜单 */}
        {!mobile && (
          <nav style={{ display: "flex", alignItems: "center", gap: 24 }}>
            {NAV.map((item) => {
              const active = isActive(item);
              return (
                <a key={item.key} href={item.getPath(lang)} style={linkStyle(active)}>
                  {label(item)}
                  {active && (
                    <span
                      style={{
                        position: "absolute",
                        left: 2,
                        right: 2,
                        bottom: 2,
                        height: 2,
                        borderRadius: 2,
                        background: "var(--primary)",
                      }}
                    />
                  )}
                </a>
              );
            })}
          </nav>
        )}

        {/* 右侧操作区 */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {status === "authenticated" ? (
            <button
              onClick={() => signOut()}
              style={{
                ...iconBtn(),
                width: "auto",
                padding: "0 14px",
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              {session.user?.name || (lang === "zh" ? "退出" : "Sign out")}
            </button>
          ) : (
            <button
              onClick={() => signIn("google")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                height: 44,
                padding: "0 16px",
                borderRadius: 10,
                border: "1px solid var(--primary)",
                background: "var(--primary)",
                color: "#fff",
                fontWeight: 700,
                fontSize: 13,
                cursor: "pointer",
                boxShadow: "0 1px 3px rgba(79,70,229,.3)",
              }}
            >
              {/* Google 品牌标识（第三方品牌 logo，非功能图标，保留彩色 SVG） */}
              <svg width="14" height="14" viewBox="0 0 48 48" aria-hidden="true">
                <path fill="#FFC107" d="M43.6 20H24v8.5h11.3a10 10 0 0 1-4.4 6.5l6.9 5.3c4-3.7 6.3-9.2 6.3-15.7 0-1.5-.1-2.9-.4-4.2z" />
                <path fill="#FF3D00" d="M10.3 28.5A10 10 0 0 1 9.5 24c0-1.6.3-3.1.8-4.5L3.5 14a17.8 17.8 0 0 0 0 20l6.8-5.5z" />
                <path fill="#4CAF50" d="M24 44c4.9 0 9-1.6 12-4.3l-6.9-5.3a9.6 9.6 0 0 1-5.1 1.5c-3.9 0-7.3-2.6-8.5-6.2l-6.8 5.3A17.8 17.8 0 0 0 24 44z" />
                <path fill="#1976D2" d="M24 14.3c2.6 0 5 1 6.8 2.6l5.2-5.2A17.8 17.8 0 0 0 7.5 19l6.8 5.3c1.2-3.6 4.6-6.1 8.5-6z" />
              </svg>
              {lang === "zh" ? "登录" : "Sign in"}
            </button>
          )}

          {/* 语言切换 */}
          <button
            onClick={() => setLang(lang === "zh" ? "en" : "zh")}
            style={iconBtn()}
            title={lang === "zh" ? "切换到英文" : "Switch to Chinese"}
            aria-label={lang === "zh" ? "切换到英文" : "Switch to Chinese"}
          >
            <span style={{ fontSize: 13, fontWeight: 700 }}>{lang === "zh" ? "中" : "EN"}</span>
          </button>

          {/* 主题切换 —— 使用锁定 SVG 图标，不再用 emoji（P0-1） */}
          <button
            onClick={toggleTheme}
            style={iconBtn()}
            title={lang === "zh" ? "切换暗色/亮色" : "Toggle dark/light"}
            aria-label={lang === "zh" ? "切换暗色/亮色" : "Toggle dark/light"}
          >
            {theme === "dark" ? <SunIcon size={20} /> : <MoonIcon size={20} />}
          </button>

          {/* 移动端汉堡按钮 */}
          {mobile && (
            <button
              onClick={() => setMenuOpen((v) => !v)}
              style={iconBtn()}
              aria-label="Menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
            </button>
          )}
        </div>
      </div>

      {/* 移动端下拉导航 */}
      {mobile && menuOpen && (
        <div
          style={{
            borderTop: "1px solid var(--border)",
            background: "var(--bg)",
            padding: "4px 18px 14px",
            maxWidth: 1040,
            margin: "0 auto",
          }}
        >
          {NAV.map((item) => {
            const active = isActive(item);
            return (
              <a
                key={item.key}
                href={item.getPath(lang)}
                style={{
                  display: "block",
                  padding: "14px 4px",
                  fontSize: 15,
                  fontWeight: active ? 700 : 500,
                  color: active ? "var(--primary)" : "var(--text)",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                {label(item)}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
