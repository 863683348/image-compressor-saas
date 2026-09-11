import type { Metadata } from "next";
import { buildLanguageAlternates } from "./config";

const SITE_URL = "https://image-compressor-saas.shop";

type Loc = "en" | "zh";

/**
 * 静态页的本地化 title / description。
 *
 * 修正背景（2026-09-11）：[lang] 路由下的静态页只是
 * `return <RootPage />`，把无前缀版本当普通组件渲染 ——
 * 组件上的 `export const metadata` 不会生效。于是 /en/pricing、
 * /zh/pricing、/en/faq 等全部落到 layout 的默认标题，10 个可索引静态页
 * 共用同一个 title（线上实测确认）。这里补上逐页本地化文案。
 *
 * title 控制在 42 字符以内：根 layout 的 template 会追加
 * " · Image Compressor"（18 字符）。
 */
export const PAGE_META: Record<
  string,
  Record<Loc, { title: string; description: string }>
> = {
  "/pricing": {
    en: {
      title: "Pricing: Free vs Pro Plans",
      description:
        "Free: 10 compressions a day, no signup. Pro: $4.99/month or $49.99/year for unlimited compressions, ZIP export and AVIF. Cancel anytime.",
    },
    zh: {
      title: "价格：免费版与 Pro 版对比",
      description:
        "免费版每天 10 次压缩、无需注册。Pro 版 $4.99/月 或 $49.99/年：不限次数、支持 ZIP 批量导出与 AVIF 转码，随时可取消。",
    },
  },
  "/faq": {
    en: {
      title: "FAQ: Privacy, Quality & Formats",
      description:
        "Answers on privacy (files never leave your browser), compression quality, batch mode, WebP and AVIF support, and how the free daily limit works.",
    },
    zh: {
      title: "常见问题：隐私、画质与格式",
      description:
        "关于隐私（图片不离开浏览器）、压缩画质、批量处理、WebP 与 AVIF 支持，以及免费版每日额度的全部解答。",
    },
  },
  "/privacy": {
    en: {
      title: "Privacy Policy",
      description:
        "Image Compressor runs 100% in your browser. Your images are never uploaded to a server. Read the full privacy policy and data handling notes.",
    },
    zh: {
      title: "隐私政策",
      description:
        "图片压缩 100% 在你的浏览器内完成，图片永远不会上传到服务器。完整隐私政策与数据处理说明。",
    },
  },
  "/terms": {
    en: {
      title: "Terms of Service",
      description:
        "Terms of service for the Image Compressor web app — plan limits, acceptable use, billing and refunds for the Pro plan.",
    },
    zh: {
      title: "服务条款",
      description:
        "图片压缩在线工具的服务条款，含套餐额度、使用规范、Pro 版计费与退款说明。",
    },
  },
  "/contact": {
    en: {
      title: "Contact & Support",
      description:
        "Reach the Image Compressor team: bug reports, Pro billing questions, and feature requests. We usually reply within two business days.",
    },
    zh: {
      title: "联系我们与支持",
      description:
        "联系图片压缩团队：问题反馈、Pro 版账单咨询与功能建议。通常在两个工作日内回复。",
    },
  },
  "/blog": {
    en: {
      title: "Blog: Compression Guides & Tests",
      description:
        "Practical image compression guides — WebP vs JPEG, target file sizes for email and Shopify, and lossless vs lossy explained with real tests.",
    },
    zh: {
      title: "博客：图片压缩教程与实测",
      description:
        "实用的图片压缩教程：WebP 与 JPEG 怎么选、邮件与 Shopify 的目标体积、无损与有损压缩的实测对比。",
    },
  },
};

/**
 * 生成 [lang] 路由页面的 metadata。
 *
 * 修正背景（2026-09-11）：
 * 1) canonical 原实现对 zh 返回**不带前缀**的 path（如 /zh/pricing 的
 *    canonical 变成 "/pricing"），而 middleware 会把无前缀 URL 301 到
 *    /en/pricing。等于每个中文页都声明「我是英文版的重复内容」，
 *    中文静态页因此拿不到索引。现在两种语言都输出带前缀自指 canonical。
 * 2) 顺带补上 title / description，否则同一 layout 下的静态页标题全部相同。
 * 3) 根路径的英文首页沿用裸域名 `/`，避免 / 与 /en 双自指 canonical 打架。
 *
 * @param lang - 来自 params 的语言码（"zh" | "en"）
 * @param path - 不含语言前缀的路径（如 "/pricing"）
 */
export function generatePageMetadata(lang: string, path: string): Metadata {
  const l: Loc = lang === "zh" ? "zh" : "en";
  const isRoot = path === "/" || path === "";
  const meta = PAGE_META[path]?.[l];
  const canonical = isRoot ? (l === "en" ? "/" : "/zh") : `/${l}${path}`;
  return {
    ...(meta ? { title: meta.title, description: meta.description } : {}),
    alternates: {
      canonical,
      languages: buildLanguageAlternates(l, path, SITE_URL),
    },
  };
}
