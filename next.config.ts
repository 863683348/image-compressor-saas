import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://*.paypal.com https://*.vercel-scripts.com https://api.github.com https://pagead2.googlesyndication.com 'report-sample'",
      "style-src 'self' 'unsafe-inline' 'report-sample'",
      "img-src 'self' data: blob: https://*.paypal.com https://pagead2.googlesyndication.com https://tpc.googlesyndication.com",
      "font-src 'self' data:",
      "connect-src 'self' https://*.paypal.com https://api-m.paypal.com https://api-m.sandbox.paypal.com https://*.google-analytics.com https://analytics.google.com https://pagead2.googlesyndication.com",
      "frame-src https://*.paypal.com https://*.google.com",
      "frame-ancestors 'self'",
      "form-action 'self'",
      "base-uri 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  allowedDevOrigins: ["10.181.0.218", "127.0.0.1", "localhost"],
  devIndicators: false,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      // FOT 修复：公开页加边缘缓存（Next.js 默认 max-age=0 每次回源验证）。
      // 排除 /api（支付/用量接口）、/account（用户账户）、/auth（登录）；覆盖 sitemap.xml/
      // robots.txt 与全部公开页（首页、/pricing、/blog/*、/privacy、/terms、/contact、/faq）。
      {
        source: "/:path((?!api|account|auth).*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, s-maxage=86400, stale-while-revalidate=604800",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
