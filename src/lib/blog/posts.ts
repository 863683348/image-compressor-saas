// 博客文章数据层 —— 中英双语（SEO 资产）
// 每篇：slug / 中英标题 / 中英描述 / 关键词 / 正文块（h2|ul|faq|cta）/ 日期 / 分类

export type PostBlock =
  | string
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "faq"; items: { q: string; a: string }[] }
  | { type: "cta"; text: string; href: string };

export interface BlogPost {
  slug: string;
  date: string;
  title: { zh: string; en: string };
  description: { zh: string; en: string };
  keywords: string[];
  content: { zh: PostBlock[]; en: PostBlock[] };
}

export const POSTS: BlogPost[] = [
  {
    slug: "compress-jpg-under-100kb",
    date: "2026-08-04",
    title: {
      zh: "如何把 JPG 压缩到 100KB 以下（在线免费，无需注册）",
      en: "How to Compress JPG to Under 100KB Online (Free, No Sign-Up)",
    },
    description: {
      zh: "邮件附件、求职简历、政府表格都卡 100KB？30 秒用浏览器本地压缩搞定——不上传、不注册、不损画质。",
      en: "Email attachments, job applications, and forms all cap at 100KB? Compress JPG to under 100KB in 30 seconds — browser-local, no upload, no sign-up.",
    },
    keywords: [
      "compress jpg under 100kb",
      "how to compress jpg under 100kb online",
      "compress jpg to less than 100kb without losing quality",
      "reduce jpeg file size to 100kb",
      "jpg compressor under 100kb free",
    ],
    content: {
      zh: [
        "100KB 是邮件附件、政府表格、求职简历、各类在线上传系统的常见硬性限制。Gmail 虽然允许 25MB，但大多数企业邮件服务器把附件限制在 10MB；多个 500KB 的图片很快就会塞爆收件箱。把图片压到 100KB 以下，是让文件顺利通过所有系统的保险做法。",
        { type: "h2", text: "为什么要压缩到 100KB 以下？（4 个常见场景）" },
        {
          type: "ul",
          items: [
            "邮件附件：Gmail 25MB 上限，但企业服务器常限 10MB，多张 500KB 图片很快塞爆",
            "政府/签证表格：许多门户强制照片上传 100KB / 200KB 限制",
            "求职简历：Workday、Greenhouse 等招聘系统会自动压缩，预压缩反而更清晰",
            "网页速度：Google Core Web Vitals 中，图片大小直接影响 LCP",
          ],
        },
        { type: "h2", text: "3 种压缩方法（按易用度排序）" },
        { type: "h2", text: "方法 1（推荐）：在线工具 — image-compressor-saas.shop" },
        "100% 浏览器本地压缩（不上传服务器），拖拽、设目标大小、出结果，免费、无需注册，隐私优先——文件永不离开你的设备。",
        { type: "h2", text: "方法 2：Photoshop / GIMP" },
        "Save for Web 对话框 + 质量滑块 60-80 + 必要时调整尺寸。一次性压缩用这个太麻烦。",
        { type: "h2", text: "方法 3：命令行 — cjpeg / jpegoptim" },
        "适合批量处理：jpegoptim --size=100k *.jpg。但学习曲线陡峭。",
        { type: "h2", text: "分步教程：用我们的免费工具压缩 JPG 到 100KB 以下" },
        {
          type: "ul",
          items: [
            "打开 https://image-compressor-saas.shop",
            "拖拽你的 JPG（或点击浏览）",
            "选择目标大小模式 → 输入 100（KB）",
            "点击压缩 → 看实时进度",
            "预览结果（原图 vs 压缩后对比）",
            "下载压缩后的文件",
          ],
        },
        { type: "h2", text: "常见问题 FAQ" },
        {
          type: "faq",
          items: [
            { q: "压缩到 100KB 会不会损失画质？", a: "现代压缩算法（mozjpeg/WebP）在 100KB 目标下通常能保留 90%+ 的视觉质量，对照片类内容几乎不可察觉。" },
            { q: "100KB 适合什么用途？", a: "邮件附件、求职简历、政府表格、社交平台头像、网页图片——几乎所有大小受限的场景。" },
            { q: "你们的工具安全吗？", a: "100% 浏览器本地处理，文件不上传服务器，不存任何数据——隐私优先设计。" },
          ],
        },
        { type: "h2", text: "立即体验" },
        "上传你的第一张 JPG，30 秒拿到 100KB 版本。",
        { type: "cta", text: "免费压缩 JPG →", href: "/" },
      ],
      en: [
        "100KB is the de-facto limit for email attachments, government forms, job applications, and countless online upload portals. Gmail allows 25MB, but most corporate mail servers cap attachments at 10MB — and a few 500KB images will clog an inbox fast. Getting an image under 100KB is the safe way to make it pass every system.",
        { type: "h2", text: "Why Compress JPG to Under 100KB? (4 Common Scenarios)" },
        {
          type: "ul",
          items: [
            "Email attachments: Gmail's 25MB limit is theoretical; corporate servers often cap at 10MB, and multiple 500KB images fill inboxes quickly",
            "Government & visa forms: many portals enforce 100KB / 200KB photo upload limits",
            "Job applications: resume portals (Workday, Greenhouse) recompress anyway; pre-compressing gives a sharper result",
            "Web page speed: Google's Core Web Vitals — image size directly impacts LCP",
          ],
        },
        { type: "h2", text: "3 Methods to Compress JPG Under 100KB (Ranked by Ease)" },
        { type: "h2", text: "Method 1 (recommended): Online tool — image-compressor-saas.shop" },
        "100% local browser compression (no server upload). Drag-drop, set target size, get result. Free, no sign-up. Privacy-first: your file never leaves your device.",
        { type: "h2", text: "Method 2: Photoshop / GIMP" },
        "Use the Save for Web dialog, quality slider 60-80, resize dimensions if needed. Overkill for a one-off compression.",
        { type: "h2", text: "Method 3: Command line — cjpeg / jpegoptim" },
        "Great for batch processing: jpegoptim --size=100k *.jpg. But the learning curve is steep.",
        { type: "h2", text: "Step-by-Step: Compress JPG Under 100KB With Our Free Tool" },
        {
          type: "ul",
          items: [
            "Open https://image-compressor-saas.shop",
            "Drag-drop your JPG (or click to browse)",
            "Select Target size mode → enter 100 (KB)",
            "Click Compress — watch live progress",
            "Preview the result (original vs compressed side-by-side)",
            "Download the compressed file",
          ],
        },
        { type: "h2", text: "FAQ" },
        {
          type: "faq",
          items: [
            { q: "Will compressing to 100KB lose quality?", a: "Modern codecs (mozjpeg/WebP) typically preserve 90%+ visual quality at a 100KB target — imperceptible for most photo content." },
            { q: "What is 100KB good for?", a: "Email attachments, job applications, government forms, social avatars, web images — every size-limited scenario." },
            { q: "Is your tool safe?", a: "100% browser-local processing. Files are never uploaded to a server and no data is stored — privacy by design." },
          ],
        },
        { type: "h2", text: "Try It Now" },
        "Upload your first JPG and get a 100KB version in 30 seconds.",
        { type: "cta", text: "Compress Your JPG Free →", href: "/en" },
      ],
    },
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getPostSlugs(): string[] {
  return POSTS.map((p) => p.slug);
}
