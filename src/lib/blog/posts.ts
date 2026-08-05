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
  {
    slug: "compress-png-without-losing-quality",
    date: "2026-08-05",
    title: {
      zh: "如何无损压缩 PNG（不掉画质，在线免费）",
      en: "How to Compress PNG Without Losing Quality (Free, Online)",
    },
    description: {
      zh: "PNG 无损压缩的 3 个正确姿势：降色深、去元数据、重新编码。30 秒在浏览器本地搞定——不上传、不注册、画质不变。",
      en: "The 3 right ways to compress PNG losslessly: reduce color depth, strip metadata, re-encode. Do it in 30 seconds in your browser — no upload, no sign-up, no quality loss.",
    },
    keywords: [
      "compress png without losing quality",
      "lossless png compression online",
      "reduce png file size without losing quality",
      "png optimizer",
      "compress png free no quality loss",
    ],
    content: {
      zh: [
        "「压缩 PNG 会损画质吗？」这是最常被问错的问题。PNG 本身就是无损格式，真正毁掉画质的，是那些把 PNG 当 JPG 硬压的工具。而压缩 PNG 的正确做法，是优化它的「无用重量」：多余的元数据、过深的色深、低效的编码。这篇教你 3 个不掉画质的压缩姿势。",
        { type: "h2", text: "为什么要压 PNG？（4 个高频场景）" },
        {
          type: "ul",
          items: [
            "网页性能：Google 把图片大小计入 LCP，一张 2MB 的截图就能拖垮移动端首屏",
            "电商与设计交付：平台上传限制 1-2MB，高清 PNG 原图常常直接超限",
            "开发打包：PNG 资源进 npm 包或容器镜像，体积直接决定构建和加载速度",
            "邮件与文档：PNG 截图作为附件，大文件容易被邮件服务器拒收",
          ],
        },
        { type: "h2", text: "先理解：PNG 无损压缩 = 减掉「看不见的重量」" },
        "PNG 用无损算法（DEFLATE）存储像素，压缩永远不会让画质变差。文件大小主要由三部分决定，优化方向也随之而来：",
        {
          type: "ul",
          items: [
            "色深：24 位真彩色 vs 8 位调色板（256 色）。截图、图标、插画用 8 位，体积能少 50-70%，肉眼几乎无差别",
            "元数据：EXIF、ICC、时间戳、软件信息。这些对显示毫无贡献，删掉即可瘦身",
            "编码效率：同一张图，不同编码器（pngquant、zopfli）产出的体积差异可达 30% 以上",
          ],
        },
        { type: "h2", text: "方法 1（推荐）：在线工具 — image-compressor-saas.shop" },
        "100% 浏览器本地处理：拖入 PNG，自动做色深分析、元数据清理和重编码，输出更小的无损 PNG。不上传服务器、不注册、不存任何数据，文件永不离开你的设备。",
        { type: "h2", text: "方法 2：pngquant / optipng（命令行）" },
        "pngquant --quality=65-80 能自动降到 8 位并重新量化；optipng -o7 用最强压缩级别重编码。适合批量处理，但需要命令行基础。",
        { type: "h2", text: "方法 3：设计工具导出设置" },
        "Photoshop 导出时选「PNG-8」并去掉元数据；Figma 导出 PNG 时用「8-bit」并关闭不用的导出项。适合设计师顺手优化。",
        { type: "h2", text: "分步教程：30 秒无损压缩 PNG" },
        {
          type: "ul",
          items: [
            "打开 https://image-compressor-saas.shop",
            "拖入你的 PNG（或点击浏览）",
            "选择「无损」或目标大小模式",
            "点击压缩，实时预览与原图对比",
            "画质一致、体积变小——下载结果",
          ],
        },
        { type: "h2", text: "常见问题 FAQ" },
        {
          type: "faq",
          items: [
            { q: "PNG 压缩真的完全不损画质吗？", a: "是。PNG 是无损格式，我们只移除元数据、优化色深和编码，不重采样像素，所以视觉质量完全不变。" },
            { q: "哪些 PNG 压缩收益最大？", a: "截图、图表、插画（色块多、元数据多）通常能压掉 50-80%；照片类 PNG 建议转 JPG/WebP 更划算。" },
            { q: "压缩后能再转回原大小吗？", a: "可以重新生成更大的文件，但元数据一旦移除就永久丢失。重要文件建议先保留一份原始副本。" },
            { q: "工具会上传我的 PNG 吗？", a: "不会。所有处理都在你的浏览器本地完成，文件不上传服务器、不落盘存储。" },
          ],
        },
        { type: "h2", text: "立即体验" },
        "拖入你的第一张 PNG，30 秒拿到更小且画质不变的文件。",
        { type: "cta", text: "免费无损压缩 PNG →", href: "/" },
      ],
      en: [
        "\"Does compressing a PNG lose quality?\" — this is the question people get wrong. PNG is a lossless format by design; what actually destroys quality are tools that squeeze PNG like a JPG, lossily. The right way to compress a PNG is to remove its invisible weight: redundant metadata, unnecessary color depth, and inefficient encoding. Here are the 3 moves that shrink a PNG without touching its pixels.",
        { type: "h2", text: "Why compress PNG at all? (4 high-frequency scenarios)" },
        {
          type: "ul",
          items: [
            "Web performance: Google counts image size into LCP — a single 2MB screenshot can tank mobile first paint",
            "E-commerce & design delivery: platforms cap uploads at 1-2MB, and hi-res PNG originals often blow past the limit",
            "Development & packaging: PNG assets in npm bundles or container images directly affect build and load time",
            "Email & documents: PNG screenshots attached to emails get rejected by mail servers when too large",
          ],
        },
        { type: "h2", text: "Understand first: lossless PNG compression removes invisible weight" },
        "PNG stores pixels with a lossless algorithm (DEFLATE) — compressing it never degrades quality. File size comes from three parts, and each points to an optimization:",
        {
          type: "ul",
          items: [
            "Color depth: 24-bit true color vs 8-bit palette (256 colors). Screenshots, icons, and illustrations do fine at 8-bit — often 50-70% smaller with no visible difference",
            "Metadata: EXIF, ICC, timestamps, software tags. They contribute nothing to display — strip them to slim down",
            "Encoding efficiency: different encoders (pngquant, zopfli) can differ by 30%+ in output size for the same image",
          ],
        },
        { type: "h2", text: "Method 1 (recommended): Online tool — image-compressor-saas.shop" },
        "100% browser-local processing: drop in a PNG, and it analyzes color depth, cleans metadata, and re-encodes — outputting a smaller lossless PNG. No server upload, no sign-up, no stored data. Your file never leaves your device.",
        { type: "h2", text: "Method 2: pngquant / optipng (command line)" },
        "pngquant --quality=65-80 automatically drops to 8-bit and re-quantizes; optipng -o7 re-encodes at maximum compression. Great for batch jobs, but requires CLI comfort.",
        { type: "h2", text: "Method 3: Export settings in design tools" },
        "In Photoshop, export as PNG-8 with metadata stripped; in Figma, export at 8-bit and disable unused export options. Handy for designers optimizing as they go.",
        { type: "h2", text: "Step-by-step: compress a PNG losslessly in 30 seconds" },
        {
          type: "ul",
          items: [
            "Open https://image-compressor-saas.shop",
            "Drop in your PNG (or click to browse)",
            "Pick Lossless mode or a target size",
            "Click Compress — preview the result side-by-side with the original",
            "Same quality, smaller file — download it",
          ],
        },
        { type: "h2", text: "FAQ" },
        {
          type: "faq",
          items: [
            { q: "Is PNG compression really 100% quality-preserving?", a: "Yes. PNG is lossless; we only strip metadata and optimize color depth and encoding — pixels are never resampled, so visual quality stays identical." },
            { q: "Which PNGs benefit the most?", a: "Screenshots, charts, and illustrations (lots of flat color and metadata) often shrink 50-80%. For photographic PNGs, converting to JPG/WebP is usually more efficient." },
            { q: "Can I restore the original size afterwards?", a: "You can re-generate a larger file, but stripped metadata is gone permanently. Keep an original copy of important files." },
            { q: "Does the tool upload my PNG?", a: "No. Everything runs in your browser; files are never uploaded or stored on a server." },
          ],
        },
        { type: "h2", text: "Try It Now" },
        "Drop in your first PNG and get a smaller, quality-identical file in 30 seconds.",
        { type: "cta", text: "Compress Your PNG Free →", href: "/en" },
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
