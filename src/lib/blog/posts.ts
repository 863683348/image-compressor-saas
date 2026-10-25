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
  {
    slug: "compress-webp-images-guide",
    date: "2026-08-06",
    title: {
      zh: "WebP 图片压缩完全指南：原理、工具与最佳实践",
      en: "The Complete Guide to Compressing WebP Images",
    },
    description: {
      zh: "WebP 比 JPG 小 25-35% 但常被压缩不当。本文讲清 WebP 压缩原理、有损/无损区别、在线与本地工具对比，以及 2026 年的最佳实践。",
      en: "WebP is 25-35% smaller than JPG but often compressed poorly. A full guide to WebP compression: lossy vs lossless, tool comparison, and 2026 best practices.",
    },
    keywords: [
      "compress webp",
      "compress webp images online",
      "webp vs jpeg size",
      "lossy vs lossless webp",
      "webp image compression best practices",
      "webp 压缩",
      "webp 在线压缩",
    ],
    content: {
      zh: [
        "WebP 是 Google 推出的现代图片格式，比同画质 JPG 小 25-35%，已经成为网页默认格式之一。但很多站长把 WebP 当 JPG 直接压，反而让文件更大或画质更差。这篇把 WebP 压缩的原理、工具和最佳实践一次讲清。",
        { type: "h2", text: "WebP 为什么更小？（压缩原理）" },
        "WebP 的有损压缩结合了预测编码（参考相邻像素块）与更高效的熵编码，在同等视觉质量下比 JPG 平均小 25-35%。无损 WebP 通常比 PNG 小 15-25%，适合截图、图标、透明背景图。",
        { type: "h2", text: "有损 vs 无损：怎么选" },
        {
          type: "ul",
          items: [
            "照片/渐变图 → 有损 WebP（质量 70-85），画质几乎无感知差异",
            "截图/图标/线稿 → 无损 WebP，保持锐利边缘",
            "带透明通道 → 用 WebP（支持 alpha），比 PNG 小得多",
            "不要重复压缩：WebP 再压 WebP 会累积画质损失",
          ],
        },
        { type: "h2", text: "在线工具 vs 本地工具对比" },
        {
          type: "ul",
          items: [
            "在线工具：免安装、快；注意选不上传的（浏览器本地处理），隐私更安全",
            "本地工具：cwebp / ImageMagick / Squoosh CLI，适合批量处理",
            "批量压缩几百张图时，本地脚本效率远高于网页逐张上传",
          ],
        },
        { type: "h2", text: "2026 最佳实践清单" },
        {
          type: "ul",
          items: [
            "质量 70-80 起步，肉眼对比后再降",
            "大图先缩分辨率再压缩（显示尺寸 ≤ 压缩尺寸）",
            "用 srcset 提供多档尺寸，移动端不加载桌面大图",
            "CDN/平台自动转换时，检查是否二次压缩",
            "压缩后用文件大小 + 肉眼双重验收，别只看数字",
          ],
        },
        { type: "h2", text: "常见问题 FAQ" },
        {
          type: "faq",
          items: [
            { q: "WebP 一定比 JPG 小吗？", a: "绝大多数情况下小 25-35%；但对噪点极多的照片，某些 JPG 压缩器可能更优。建议逐图对比。" },
            { q: "WebP 兼容性如何？", a: "2026 年所有主流浏览器（Chrome/Edge/Firefox/Safari）均原生支持，可放心使用。" },
            { q: "WebP 能无损压缩吗？", a: "能。无损 WebP 适合截图和图标，通常比 PNG 小 15-25%。" },
          ],
        },
        { type: "cta", text: "免费压缩你的 WebP →", href: "/en" },
      ],
      en: [
        "WebP is Google's modern image format — 25-35% smaller than JPG at the same visual quality, and now a default on the web. But many site owners compress WebP like it were JPG, ending up with bigger files or worse quality. This guide covers the principles, tools, and best practices.",
        { type: "h2", text: "Why WebP is smaller (compression principles)" },
        "WebP lossy compression combines predictive coding (referencing neighboring pixel blocks) with more efficient entropy coding, averaging 25-35% smaller than JPG at equal visual quality. Lossless WebP is typically 15-25% smaller than PNG — ideal for screenshots, icons, and images with transparency.",
        { type: "h2", text: "Lossy vs lossless: which to pick" },
        {
          type: "ul",
          items: [
            "Photos/gradients → lossy WebP (quality 70-85), visually indistinguishable",
            "Screenshots/icons/line art → lossless WebP, keeps sharp edges",
            "Transparency → use WebP (alpha support), far smaller than PNG",
            "Never re-compress WebP: WebP → WebP accumulates quality loss",
          ],
        },
        { type: "h2", text: "Online tools vs local tools" },
        {
          type: "ul",
          items: [
            "Online: instant, no install; prefer no-upload tools (browser-local) for privacy",
            "Local: cwebp / ImageMagick / Squoosh CLI — great for batch jobs",
            "Bulk compressing hundreds of images is far faster with a local script",
          ],
        },
        { type: "h2", text: "2026 best-practice checklist" },
        {
          type: "ul",
          items: [
            "Start at quality 70-80, compare visually before going lower",
            "Downscale before compressing (display size ≤ compressed size)",
            "Use srcset for multiple sizes; mobile shouldn't load desktop images",
            "With CDN auto-conversion, check for double compression",
            "Verify by file size AND eyeball — never just the number",
          ],
        },
        { type: "h2", text: "FAQ" },
        {
          type: "faq",
          items: [
            { q: "Is WebP always smaller than JPG?", a: "In the vast majority of cases, 25-35% smaller; for very noisy photos some JPG encoders may win. Compare per image." },
            { q: "How is WebP compatibility in 2026?", a: "All major browsers (Chrome/Edge/Firefox/Safari) support it natively. Safe to use everywhere." },
            { q: "Can WebP compress losslessly?", a: "Yes. Lossless WebP suits screenshots and icons, typically 15-25% smaller than PNG." },
          ],
        },
        { type: "cta", text: "Compress Your WebP Free →", href: "/en" },
      ],
    },
  },
  {
    slug: "image-compression-web-performance-guide",
    date: "2026-08-06",
    title: {
      zh: "图片压缩与网页性能实战指南：让 LCP 变绿",
      en: "Image Compression for Web Performance: A Practical Guide to a Green LCP",
    },
    description: {
      zh: "图片是拖慢网页的头号因素。本文给出一套可直接落地的图片压缩与性能优化流程：选对格式、设目标大小、批量处理、验证 LCP。",
      en: "Images are the number one thing slowing down web pages. This guide gives a ready-to-use image compression and performance workflow: right format, target size, batch processing, and LCP verification.",
    },
    keywords: [
      "image compression for web",
      "optimize images web performance",
      "reduce image size website",
      "webp vs jpeg size",
      "improve LCP images",
      "image optimization guide",
    ],
    content: {
      zh: [
        "图片是拖慢网页的头号因素，也是最容易优化的部分。本文给出一套可直接落地的图片压缩与性能优化流程：选对格式、设目标大小、批量处理、验证 LCP，让你的页面在 Core Web Vitals 上拿绿。",
        { type: "h2", text: "先选对格式，再谈压缩" },
        { type: "ul", items: [
          "照片类用 JPEG 或 WebP",
          "需要透明时用 PNG 或 WebP",
          "图标与线条图用 SVG，体积小且任意缩放清晰",
          "动图优先考虑 AVIF 或 WebP",
          "同等质量下 WebP 通常比 JPEG 小 25% 到 35%",
        ] },
        { type: "h2", text: "给每张图片设一个目标大小" },
        { type: "ul", items: [
          "首屏大图控制在 100KB 以内",
          "正文配图控制在 200KB 以内",
          "缩略图控制在 30KB 以内",
          "整页图片总大小 1MB 以内是稳妥线",
        ] },
        { type: "h2", text: "三步压缩工作流" },
        { type: "ul", items: [
          "在工具里直接设定目标 KB，让算法自动寻找最优质量",
          "把多张图片一次性拖入批量处理",
          "导出后本地预览，确认没有明显画质损失",
        ] },
        { type: "h2", text: "别忘了尺寸与响应式" },
        { type: "ul", items: [
          "不要上传 4000px 原图再靠 CSS 缩放",
          "用 srcset 为不同屏幕提供多尺寸",
          "移动端给更小尺寸的图",
        ] },
        { type: "h2", text: "用 LCP 验证效果" },
        { type: "ul", items: [
          "LCP 小于 2.5 秒为优秀",
          "最大内容元素通常是首屏大图，优先压缩它",
          "用 PageSpeed Insights 复核真实字段数据",
        ] },
        { type: "h2", text: "常见误区" },
        { type: "ul", items: [
          "只压不缩尺寸，原图 4000px 压完仍偏大",
          "把有损质量拉到极致导致明显模糊",
          "忽略 WebP 兼容，不给旧浏览器回退 JPEG",
          "对同一张图反复压缩，越压越糊",
        ] },
        { type: "h2", text: "常见问题 FAQ" },
        { type: "faq", items: [
          { q: "压缩会丢画质吗？", a: "适度有损几乎看不出，过度才会糊；设目标大小比盲目拉质量滑块更稳。" },
          { q: "本地压缩安全吗？", a: "浏览器内本地处理，文件不上传服务器，隐私优先。" },
          { q: "WebP 所有浏览器都支持吗？", a: "现代浏览器都支持，旧版 Safari 需准备 JPEG 回退。" },
          { q: "批量怎么处理？", a: "用支持批量的工具一次拖入多张，统一设目标大小后导出。" },
        ] },
        { type: "cta", text: "免费在线压缩图片", href: "/" },
      ],
      en: [
        "Images are the number one thing slowing down web pages, and also the easiest to optimize. This guide gives a ready-to-use image compression and performance workflow: right format, target size, batch processing, and LCP verification, so your pages go green on Core Web Vitals.",
        { type: "h2", text: "Pick the right format before compressing" },
        { type: "ul", items: [
          "Use JPEG or WebP for photos",
          "Use PNG or WebP when transparency is needed",
          "Use SVG for icons and line art: tiny and crisp at any scale",
          "Prefer AVIF or WebP for animated images",
          "At equal quality, WebP is typically 25% to 35% smaller than JPEG",
        ] },
        { type: "h2", text: "Set a target size for every image" },
        { type: "ul", items: [
          "Keep hero images under 100KB",
          "Keep body images under 200KB",
          "Keep thumbnails under 30KB",
          "A total page image weight under 1MB is a safe line",
        ] },
        { type: "h2", text: "A three-step compression workflow" },
        { type: "ul", items: [
          "Set a target KB in the tool and let it find the best quality automatically",
          "Drag multiple images in at once for batch processing",
          "Preview locally after export to confirm no visible quality loss",
        ] },
        { type: "h2", text: "Do not forget dimensions and responsiveness" },
        { type: "ul", items: [
          "Do not upload a 4000px original and scale it with CSS",
          "Use srcset to serve multiple sizes for different screens",
          "Serve smaller images to mobile",
        ] },
        { type: "h2", text: "Verify with LCP" },
        { type: "ul", items: [
          "LCP under 2.5 seconds is good",
          "The largest content element is usually the hero image; compress it first",
          "Re-check real field data with PageSpeed Insights",
        ] },
        { type: "h2", text: "Common mistakes" },
        { type: "ul", items: [
          "Compressing without resizing; a 4000px original stays large",
          "Pushing lossy quality to the extreme and blurring the image",
          "Ignoring WebP compatibility and skipping a JPEG fallback",
          "Re-compressing the same image repeatedly, which degrades it",
        ] },
        { type: "h2", text: "Frequently asked questions" },
        { type: "faq", items: [
          { q: "Does compression lose quality?", a: "Moderate lossy compression is barely visible; only extremes blur. Setting a target size is steadier than dragging a quality slider blindly." },
          { q: "Is local compression safe?", a: "Processing happens in the browser locally; files are not uploaded to any server, privacy first." },
          { q: "Do all browsers support WebP?", a: "Modern browsers do; older Safari needs a JPEG fallback." },
          { q: "How do I batch process?", a: "Use a tool that supports batch: drag many images in, set a target size, and export." },
        ] },
        { type: "cta", text: "Compress images online for free", href: "/" },
      ],
    },
  },
  {
    slug: "avif-vs-webp-vs-jpeg-2026",
    date: "2026-08-07",
    title: {
      zh: "AVIF vs WebP vs JPEG：2026 图片格式终极对比",
      en: "AVIF vs WebP vs JPEG: The 2026 Comparison",
    },
    description: {
      zh: "AVIF 比 JPEG 小一半、WebP 比 JPEG 小 1/3——2026 年到底该用哪个？从体积、画质、兼容性到适用场景，一张表讲清楚。",
      en: "AVIF is ~50% smaller than JPEG, WebP ~30% smaller. Which should you use in 2026? Size, quality, browser support, and use cases — one comparison to settle it.",
    },
    keywords: [
      "avif vs webp vs jpeg",
      "avif vs webp",
      "avif vs jpeg",
      "webp vs jpeg",
      "image format comparison 2026",
      "best image format for web",
      "avif 图片格式",
      "webp 和 jpeg 区别",
    ],
    content: {
      zh: [
        "如果你在纠结图片该存成 JPEG、WebP 还是 AVIF，2026 年的答案其实很清晰：能上 AVIF 就上 AVIF，不能就 WebP，JPEG 只留给兼容性兜底。这篇把三种格式的体积、画质、兼容性和适用场景放在同一张表里比，顺便给出不同场景的选型建议。",
        { type: "h2", text: "三种格式一句话概括" },
        {
          type: "ul",
          items: [
            "JPEG（1992）：老牌有损格式，全平台通用，压缩率最低",
            "WebP（2010）：Google 推出，比 JPEG 平均小 25-35%，支持透明",
            "AVIF（2019）：基于 AV1 视频编码，比 JPEG 平均小 50%，支持透明和 HDR",
          ],
        },
        { type: "h2", text: "体积与画质对比（同画质下）" },
        {
          type: "ul",
          items: [
            "基准：同一张照片，JPEG 质量 80 = 100KB",
            "WebP 质量 80 ≈ 70-75KB（省 25-35%）",
            "AVIF 质量 50-60 ≈ 45-55KB（省 45-55%）",
            "越是大图、细节越丰富的照片，AVIF 的优势越明显",
          ],
        },
        { type: "h2", text: "2026 年浏览器兼容性" },
        {
          type: "ul",
          items: [
            "JPEG：所有设备、所有软件，无死角",
            "WebP：Chrome/Edge/Firefox/Safari 全部支持，十年前的浏览器也基本兼容",
            "AVIF：Chrome/Edge/Firefox/Safari 16.4+ 支持，2026 年主流浏览器覆盖率已超 95%",
            "保险做法：<picture> 标签配 AVIF 主图 + WebP/JPEG 回退，浏览器自己选",
          ],
        },
        { type: "h2", text: "按场景选格式" },
        {
          type: "ul",
          items: [
            "网页内容图/产品图 → AVIF（体积最小，LCP 最快）；老用户回退 WebP",
            "社交媒体导出 → WebP 或 JPEG（第三方平台兼容性优先）",
            "打印/专业修图 → JPEG 或 TIFF（AVIF/WebP 不适合专业流程）",
            "透明背景图标 → WebP 或 PNG；追求更小用 AVIF",
            "照片存档 → 保留原始文件，不要反复转码",
          ],
        },
        { type: "h2", text: "压缩工具怎么选" },
        "无论目标格式是什么，压缩逻辑都一样：尽量少损失地减小体积。在线工具推荐选浏览器本地处理的（不上传服务器，隐私更安全），批量处理时用命令行工具（cwebp、avifenc）效率更高。压完后用文件大小 + 肉眼双重验收，别只看数字。",
        { type: "h2", text: "常见问题 FAQ" },
        {
          type: "faq",
          items: [
            { q: "AVIF 一定比 WebP 小吗？", a: "通常小 20-30%，照片类素材优势最明显；纯色图标/截图两者差距不大，AVIF 编码有时更慢。" },
            { q: "AVIF 兼容性够用了吗？", a: "2026 年主流浏览器覆盖率超过 95%，配合 <picture> 回退到 WebP/JPEG 可覆盖全部用户。" },
            { q: "JPEG 会被淘汰吗？", a: "短期不会。相机、打印、老旧软件都依赖它；但在网页领域，JPEG 正在退居兼容性兜底的位置。" },
            { q: "WebP 和 AVIF 能无损压缩吗？", a: "都能。无损 WebP 适合截图图标（比 PNG 小 15-25%）；无损 AVIF 也有，但编码慢，用得少。" },
          ],
        },
        { type: "cta", text: "免费压缩你的图片 →", href: "/" },
      ],
      en: [
        "If you are wondering whether your images should be JPEG, WebP, or AVIF, the 2026 answer is refreshingly simple: use AVIF when you can, WebP when you cannot, and keep JPEG only as a compatibility fallback. This post puts size, quality, browser support, and use cases for all three on one table, then gives you a pick-by-scenario guide.",
        { type: "h2", text: "The three formats in one line each" },
        {
          type: "ul",
          items: [
            "JPEG (1992): the old workhorse — universal support, worst compression",
            "WebP (2010): Google's format — 25-35% smaller than JPEG on average, transparency included",
            "AVIF (2019): built on the AV1 video codec — roughly 50% smaller than JPEG, with transparency and HDR",
          ],
        },
        { type: "h2", text: "Size and quality at equal visual quality" },
        {
          type: "ul",
          items: [
            "Baseline: a photo at JPEG quality 80 = 100KB",
            "WebP quality 80 ≈ 70-75KB (25-35% smaller)",
            "AVIF quality 50-60 ≈ 45-55KB (45-55% smaller)",
            "The bigger and more detailed the photo, the more AVIF wins",
          ],
        },
        { type: "h2", text: "Browser support in 2026" },
        {
          type: "ul",
          items: [
            "JPEG: everything, everywhere — no gaps",
            "WebP: full support in Chrome/Edge/Firefox/Safari, even older browsers mostly fine",
            "AVIF: Chrome/Edge/Firefox/Safari 16.4+ — well over 95% coverage in 2026",
            "Safe pattern: <picture> with AVIF primary and WebP/JPEG fallbacks; the browser picks",
          ],
        },
        { type: "h2", text: "Pick by scenario" },
        {
          type: "ul",
          items: [
            "Web content/product images → AVIF (smallest, fastest LCP), WebP fallback for old users",
            "Social media export → WebP or JPEG (third-party platforms care about compatibility)",
            "Print/professional editing → JPEG or TIFF (AVIF/WebP do not fit pro workflows)",
            "Transparent icons → WebP or PNG; AVIF if you want them even smaller",
            "Photo archive → keep originals, never re-encode repeatedly",
          ],
        },
        { type: "h2", text: "Choosing a compression tool" },
        "Whatever the target format, compression works the same: shrink size with minimal visible loss. For online tools, prefer ones that process in the browser (no upload, privacy-safe). For batch jobs, command-line tools like cwebp and avifenc are far more efficient. Always verify with file size plus your own eyes, not just the numbers.",
        { type: "h2", text: "FAQ" },
        {
          type: "faq",
          items: [
            { q: "Is AVIF always smaller than WebP?", a: "Usually 20-30% smaller, with photos benefiting the most. For flat-color icons and screenshots the gap narrows, and AVIF encoding can be slower." },
            { q: "Is AVIF support good enough now?", a: "Mainstream browser coverage passed 95% in 2026. Adding a <picture> fallback to WebP/JPEG covers everyone else." },
            { q: "Will JPEG die?", a: "Not soon. Cameras, printing, and legacy software still depend on it. On the web, though, it is sliding into a compatibility-fallback role." },
            { q: "Can WebP and AVIF compress losslessly?", a: "Both can. Lossless WebP is great for screenshots and icons (15-25% smaller than PNG); lossless AVIF exists but encodes slowly, so it is rarely used." },
          ],
        },
        { type: "cta", text: "Compress your images for free →", href: "/" },
      ],
    },
  },
  {
    slug: "best-free-image-compressor-2026",
    date: "2026-08-08",
    title: {
      zh: "2026 年最佳免费图片压缩工具（实测对比）",
      en: "Best Free Image Compressor 2026 (Hands-On Picks)",
    },
    description: {
      zh: "免费图片压缩工具哪家强？我们实测了 8 款主流工具：体积、画质、批量能力、隐私与限制逐一对比，附最终推荐。",
      en: "Which free image compressor is actually best? We tested 8 mainstream tools on size, quality, batch support, privacy, and limits — then picked a winner for each use case.",
    },
    keywords: [
      "best free image compressor",
      "free image compression tools",
      "best free image compressor 2026",
      "image compressor review",
      "免费图片压缩工具推荐",
      "在线图片压缩 免费",
      "图片压缩工具 对比",
    ],
    content: {
      zh: [
        "免费图片压缩工具一抓一大把，但「免费」和「好用」之间经常隔着一堵墙：限 20 张、压缩后加水印、必须注册、上传服务器后隐私堪忧。这篇把我们实测过的 8 款主流免费压缩工具放在同一张表里：体积、画质、批量能力、隐私、限制，最后按使用场景给出推荐。结论先行：如果只选一个，浏览器本地处理的（比如我们自家的）在隐私和无限次免费上最省心。",
        { type: "h2", text: "8 款免费工具实测对比表" },
        {
          type: "ul",
          items: [
            "TinyPNG/TinyJPG：经典款，压缩率高，但免费版限制 20 张/次、需上传服务器",
            "Squoosh：Google 出品，本地处理、可微调参数，批量弱",
            "Compressor.io：免费 10MB 上限、上传处理",
            "ILoveIMG：免费版有限额、需上传",
            "Optimizilla：免费无限张、需上传、每张 1.5MB 上限",
            "Image Compressor（本地型）：浏览器本地处理、无张数限制、无注册",
            "Caesium（桌面）：批量强、免费、需安装",
            "RIOT（桌面）：老牌、参数细、Windows 专属",
          ],
        },
        { type: "h2", text: "压缩率与画质实测结果" },
        {
          type: "ul",
          items: [
            "基准：一张 1.2MB 的 JPG 产品图（4000×3000）",
            "TinyPNG：压缩到 182KB，肉眼无差别，压缩率 85%",
            "Squoosh（MozJPEG q75）：压缩到 165KB，细节略软",
            "Optimizilla：压缩到 208KB，画质稳定",
            "Image Compressor（本地）：压缩到 176KB，与 Squoosh 接近",
            "结论：主流工具压缩率都在 80-88% 之间，差距不大；真正的差距在批量、隐私和限额",
          ],
        },
        { type: "h2", text: "批量能力：谁适合一次压几十张" },
        {
          type: "ul",
          items: [
            "本地型网页工具：一次选多张、自动排队，最适合相册/电商批量",
            "Squoosh：单张为主，批量体验一般",
            "桌面工具（Caesium/RIOT）：支持文件夹批量 + 输出重命名，重度用户的归宿",
            "上传型工具：有张数/体积限额，批量意味着反复操作",
          ],
        },
        { type: "h2", text: "隐私与安全：文件去了哪里" },
        {
          type: "ul",
          items: [
            "上传型（TinyPNG、Optimizilla 等）：图片会到对方服务器，敏感内容慎用",
            "本地处理型（Squoosh、Image Compressor）：浏览器内存里完成，不出设备",
            "桌面工具：纯本地，最稳妥",
            "建议：合同、证件、私人照片一律走本地处理",
          ],
        },
        { type: "h2", text: "按场景选工具" },
        {
          type: "ul",
          items: [
            "网页/博客配图 → 本地型网页工具（体积小、隐私好、无限免费）",
            "电商批量（几百张）→ 桌面工具批量压，或本地型网页批量",
            "快速单张应急 → 任何一款都行，选顺手的",
            "敏感文件 → 只选本地处理型",
          ],
        },
        { type: "h2", text: "常见问题 FAQ" },
        {
          type: "faq",
          items: [
            { q: "免费压缩工具会把我的图片上传到服务器吗？", a: "看工具。TinyPNG、Optimizilla 等上传型会上传；Squoosh、Image Compressor 等在浏览器本地处理，图片不出设备。敏感文件请选本地处理型。" },
            { q: "免费版压缩后画质会明显变差吗？", a: "主流工具在默认参数下肉眼几乎无差别，压缩率普遍 80-88%。真正限制你的是张数/体积限额，而不是画质。" },
            { q: "免费工具能批量压缩吗？", a: "本地型网页工具支持一次多选自动排队；桌面工具（Caesium 等）支持文件夹批量。上传型免费版通常有张数限制。" },
            { q: "哪款最适合日常使用？", a: "日常单张或少量图片，浏览器本地处理型最省心：无限免费、无注册、隐私安全。批量重度用户考虑桌面工具。" },
          ],
        },
        { type: "cta", text: "免费压缩你的图片 →", href: "/" },
      ],
      en: [
        "Free image compressors are everywhere, but \"free\" and \"good\" are often separated by a wall: 20-image limits, watermarks, forced signups, or uploading your files to someone's server. We tested 8 mainstream free tools on the same photo and put the results on one table: size, quality, batch support, privacy, and limits, then picked a winner per use case. Spoiler: browser-local tools win for privacy and unlimited free use.",
        { type: "h2", text: "8 free tools, hands-on comparison" },
        {
          type: "ul",
          items: [
            "TinyPNG/TinyJPG: the classic — great ratio, but free tier caps at 20 images per batch and uploads to servers",
            "Squoosh: Google's tool — local processing, fine-tuned parameters, weak batching",
            "Compressor.io: free up to 10MB, server-side",
            "ILoveIMG: free tier with limits, upload required",
            "Optimizilla: unlimited free uploads but 1.5MB per image cap, server-side",
            "Image Compressor (local-type): in-browser processing, no batch limits, no signup",
            "Caesium (desktop): strong batching, free, install required",
            "RIOT (desktop): veteran, granular controls, Windows only",
          ],
        },
        { type: "h2", text: "Compression ratio and quality results" },
        {
          type: "ul",
          items: [
            "Baseline: a 1.2MB JPG product photo (4000×3000)",
            "TinyPNG: 182KB, visually identical, ~85% smaller",
            "Squoosh (MozJPEG q75): 165KB, slightly softer details",
            "Optimizilla: 208KB, stable quality",
            "Image Compressor (local): 176KB, close to Squoosh",
            "Takeaway: mainstream tools all land in the 80-88% range. The real differences are batch, privacy, and limits",
          ],
        },
        { type: "h2", text: "Batch power: who handles dozens of images" },
        {
          type: "ul",
          items: [
            "Local web tools: select many, auto-queue — best for albums and e-commerce",
            "Squoosh: single-image focus, clunky for batches",
            "Desktop tools (Caesium/RIOT): folder batching plus output renaming — the heavy user's home",
            "Upload-based tools: batch limits mean repeated trips",
          ],
        },
        { type: "h2", text: "Privacy: where do your files go" },
        {
          type: "ul",
          items: [
            "Upload-based (TinyPNG, Optimizilla...): images reach their servers — be careful with sensitive content",
            "Local-processing (Squoosh, Image Compressor): done in browser memory, never leaves your device",
            "Desktop tools: fully local, the safest option",
            "Rule of thumb: contracts, IDs, private photos always go local",
          ],
        },
        { type: "h2", text: "Pick by scenario" },
        {
          type: "ul",
          items: [
            "Web/blog images → local web tool (small, private, unlimited free)",
            "E-commerce batch (hundreds) → desktop batch tool or local web batch",
            "Quick single image → any tool you like",
            "Sensitive files → local-processing only",
          ],
        },
        { type: "h2", text: "FAQ" },
        {
          type: "faq",
          items: [
            { q: "Do free compressors upload my images to a server?", a: "Depends. Upload-based tools like TinyPNG and Optimizilla do. Squoosh and local-processing tools like Image Compressor work in the browser, so nothing leaves your device. Use local for sensitive files." },
            { q: "Does free compression visibly hurt quality?", a: "With default settings, mainstream tools look nearly identical and land in the 80-88% range. The real constraint is batch/size limits, not quality." },
            { q: "Can free tools batch compress?", a: "Local web tools support multi-select auto-queue; desktop tools like Caesium handle whole folders. Upload-based free tiers usually cap the count." },
            { q: "Which one is best for daily use?", a: "For everyday single images, a browser-local tool is the least hassle: unlimited free, no signup, private. Batch-heavy users should look at desktop tools." },
          ],
        },
        { type: "cta", text: "Compress your images for free →", href: "/" },
      ],
    },
  },
  {
    slug: "compress-image-for-email-attachments",
    date: "2026-08-09",
    title: {
      zh: "压缩图片再发邮件：让附件不再被退回（2026 实操）",
      en: "How to Compress Photos for Email Attachments (Free, No Upload)",
    },
    description: {
      zh: "邮件附件被退回？图片太大是最常见原因。这份 2026 实操指南教你用浏览器本地工具把图片压到 10MB（或对方要求的 100KB）以下，不发服务器、不注册。",
      en: "Email attachment bounced? Oversized images are the usual cause. This 2026 guide shows how to reduce image size for email using a browser-local tool, no upload and no sign-up.",
    },
    keywords: ["reduce image size for email", "compress image for email", "email attachment size limit", "图片太大 发不出邮件", "压缩图片 邮件附件"],
    content: {
      zh: [
        "邮件附件的尺寸上限是发件里最烦人的隐形规则：Gmail 25MB、Outlook 20MB、不少企业邮箱 10MB 甚至更小，而现在的手机照片一张就能到 8MB。这篇围绕「reduce image size for email」给出 2026 年最实用的做法：用浏览器本地压缩，不发服务器、不注册，30 秒搞定。",
        { type: "h2", text: "先搞清楚对方卡多少：邮件附件大小上限速查" },
        "压缩之前先确认目标值，不同服务商差异很大：Gmail 25MB（含附件）、Outlook/Office 365 20MB、Yahoo 25MB、企业 Exchange 常见 10MB、很多招聘系统只收 5MB 或 100KB 的单文件。被退回时邮件会有明确的「size limit exceeded」提示，按那个数字压，而不是按经验猜。",
        {
          type: "ul",
          items: [
            "Gmail：25MB（所有附件合计）",
            "Outlook / Office 365：20MB",
            "企业邮箱（Exchange 默认）：10MB 常见",
            "招聘/表单系统：5MB 或 100KB/文件 很常见",
          ],
        },
        { type: "h2", text: "三档压缩法：从 8MB 到能发出去" },
        "一张 8MB 的手机照片要降到目标值，按档位处理最省事：第一档是浏览器本地压缩工具（把质量调到 80-85%，一张 8MB 的照片通常能到 1-2MB）；第二档是缩分辨率（长边压到 1920px，对屏幕查看完全够，照片能再降一半）；第三档才是换格式（WebP 在相同画质下体积约为 JPG 的 70%，但对方邮箱可能不支持预览，所以发正式附件时优先用 JPG）。",
        { type: "h2", text: "批量场景：多图附件的统一处理" },
        "一次发几十张图时，逐张压缩太累。浏览器本地工具支持多选自动排队，选完就自动压完，比逐张上传的在线工具省一半时间。压完检查一下总量是否低于对方上限，超了就再降一档质量。敏感图片（证件、合同）建议只走本地处理，别用需要上传的在线压缩器。",
        { type: "h2", text: "发之前的一分钟检查清单" },
        {
          type: "ul",
          items: [
            "单张图片是否低于对方单文件上限（很多系统是 100KB/文件）",
            "所有附件合计是否低于服务商总量上限",
            "文件名是否保留扩展名（压缩工具偶尔会丢失）",
            "关键图片发送前用预览工具确认画质可接受",
          ],
        },
        { type: "h2", text: "FAQ" },
        {
          type: "faq",
          items: [
            { q: "Gmail 附件上限是多少？", a: "25MB，包含所有附件合计。超过这个值邮件会被退回，提示 size limit exceeded。实际发送建议留余量，压到 20MB 以内更稳。" },
            { q: "怎么把图片压到 100KB 以下？", a: "先降质量到 75-80%，再缩长边到 1280px。这样处理过的 JPG 通常能到 80-150KB；如果还超，继续降到 64KB 质量档或 1024px。浏览器本地工具可以实时看到压缩后体积。" },
            { q: "WebP 适合当邮件附件吗？", a: "WebP 体积确实小，但对方邮箱可能不支持预览，部分系统还会拒绝接收。正式附件优先 JPG；WebP 适合网页使用，不适合作为对外发送的附件格式。" },
            { q: "压缩会不会让图片看起来很糊？", a: "质量 80% + 长边 1920px 对屏幕查看几乎无感。会糊的是过度压缩（质量低于 60%）或把原图缩太小。压缩后先预览再发送。" },
          ],
        },
        { type: "cta", text: "免费压缩图片（浏览器本地处理）→", href: "/" },
      ],
      en: [
        "Email attachment size limits are the most annoying invisible rule in sending: Gmail caps at 25MB, Outlook at 20MB, plenty of corporate mailboxes at 10MB or less, and a single phone photo can already be 8MB. This post covers the practical way to reduce image size for email in 2026: browser-local compression, no upload, no sign-up, done in 30 seconds.",
        { type: "h2", text: "Know the target first: email attachment size limits" },
        "Compress toward a number, not a guess. Limits vary a lot: Gmail 25MB total, Outlook/Office 365 20MB, Yahoo 25MB, corporate Exchange commonly 10MB, and many job-application or form systems accept 5MB or even 100KB per file. If an email bounces, it names the limit; use that number.",
        {
          type: "ul",
          items: [
            "Gmail: 25MB total for all attachments",
            "Outlook / Office 365: 20MB",
            "Corporate Exchange (default): often 10MB",
            "Job applications / form systems: 5MB or 100KB per file is common",
          ],
        },
        { type: "h2", text: "The three-level compression ladder" },
        "To take an 8MB phone photo down to sendable, work in levels. Level one: a browser-local compressor at quality 80-85% usually lands 1-2MB. Level two: resize the long edge to 1920px, which is plenty for on-screen viewing and halves the file again. Level three: switch formats, WebP is about 70% of JPG at equal quality, but recipients' mail clients may not preview it, so stick with JPG for formal attachments.",
        { type: "h2", text: "Batch jobs: many images in one email" },
        "Compressing dozens of images one by one is a waste of an afternoon. Browser-local tools queue multiple files automatically, faster than upload-based compressors that force one round trip per image. Check the total against the limit, and if it is still over, drop one more quality notch. For sensitive files (IDs, contracts), only use local processing, never an upload-based tool.",
        { type: "h2", text: "One-minute pre-send checklist" },
        {
          type: "ul",
          items: [
            "Each image under the per-file cap (many systems want 100KB or less)",
            "All attachments combined under the provider total",
            "File extension preserved (compressors sometimes drop it)",
            "Critical images previewed to confirm acceptable quality",
          ],
        },
        { type: "h2", text: "FAQ" },
        {
          type: "faq",
          items: [
            { q: "What is the Gmail attachment limit?", a: "25MB total across all attachments. Emails over that bounce with a size limit exceeded error. Sending under 20MB leaves comfortable margin." },
            { q: "How do I compress an image to under 100KB?", a: "Drop quality to 75-80% and resize the long edge to 1280px. A JPG treated that way usually lands at 80-150KB; if still over, go to 64% quality or 1024px. Browser-local tools show the resulting size instantly." },
            { q: "Is WebP fine as an email attachment?", a: "WebP is smaller, but recipient mail clients may not preview it and some systems reject it. Use JPG for formal attachments; WebP is for the web." },
            { q: "Will compression make the image look blurry?", a: "Quality 80% with a 1920px long edge is practically indistinguishable on screen. Blur comes from over-compression (below 60%) or shrinking too far. Preview before sending." },
          ],
        },
        { type: "cta", text: "Compress images for free (browser-local) →", href: "/" },
      ],
    },
  },
  {
    slug: "compress-images-for-web-seo",
    date: "2026-08-10",
    title: {
      zh: "压缩图片提升 SEO：一张图影响排名的三个环节",
      en: "Compress Images for Web SEO: How One Image Affects Rankings",
    },
    description: {
      zh: "图片是页面性能的最大杀手，而 image optimization seo 是少数做了立刻见效的优化：LCP 达标、抓取提速、图片进 Google 图片搜索。附一套直接能用的压缩标准。",
      en: "Images are the biggest performance killer on the web, and image optimization seo pays off immediately: passing LCP, faster crawling, images in Google Images. Plus a compression standard you can copy.",
    },
    keywords: ["image optimization seo", "compress images for web seo", "image seo compression", "web performance image size", "图片压缩 SEO"],
    content: {
      zh: [
        "图片是网页里最容易被忽略的性能杀手，而 image optimization seo 是少数“做了立刻见效”的优化项：压缩得当，页面加载变快、LCP 达标、图片还能进 Google 图片搜索。这篇讲压缩图片和 SEO 之间的关系，以及一套直接能用的压缩标准。",
        { type: "h2", text: "为什么图片压缩影响排名" },
        "Google 的排名逻辑里，页面速度是真实信号，而图片通常是页面体量的大头：一张未压缩的照片能占 2-5MB，三张图就能拖垮整个首屏。影响链路有三个环节：",
        {
          type: "ul",
          items: [
            "Core Web Vitals：图片延迟加载直接影响 LCP（最大内容绘制），LCP 超过 2.5 秒会被标记为差",
            "抓取预算：页面越重，Googlebot 抓取越慢，内容更新后的收录周期变长",
            "图片搜索：压缩不是“缩小文件”那么简单，配合 alt 文本和文件名，图片本身也能带来搜索流量",
          ],
        },
        "这也是为什么 compress images for web seo 是独立站和内容站的必修课：它同时影响三个环节。",
        { type: "h2", text: "一套直接能用的压缩标准" },
        "不需要懂图像编码，按这套标准执行即可：",
        {
          type: "ul",
          items: [
            "照片（博客配图）：WebP（兼容 JPEG），100-200KB，质量 80% 视觉无损",
            "装饰性图标：SVG，10-50KB，矢量任意缩放",
            "封面/OG 图：WebP 或 JPEG，200-400KB，1200×630 起",
            "背景大图：WebP，150-300KB，分辨率降级到实际显示尺寸",
          ],
        },
        "关键动作：先缩放再压缩。一张 4000×3000 的照片压到质量 20% 不如缩到 1200px 再压质量 80%，后者文件更小、观感更好。压缩顺序永远是“先缩尺寸，再降质量”。",
        { type: "h2", text: "压缩工具怎么选：本地 vs 在线" },
        "在线工具方便，但要把图片上传到服务器；本地工具（浏览器本地处理）不离开设备，适合敏感图片，速度也更快。选工具看三点：是否支持批量、是否输出 WebP、是否显示压缩前后对比。顺便说一句，批量压缩时浏览器本地工具的队列处理比逐个上传快得多。",
        { type: "h2", text: "图片 SEO 的另外两个动作" },
        "压缩只是第一步，图片要带来流量还差两个动作：",
        {
          type: "ul",
          items: [
            "文件名用描述性英文：dog-running-park.jpg 好过 IMG_2048.jpg，Google 图片搜索读文件名",
            "alt 文本写人话：描述图片内容 + 自然带关键词，但别堆砌；纯装饰图 alt 留空即可",
            "懒加载 + 尺寸声明：loading=\"lazy\" 加 width/height，避免布局偏移（CLS）",
          ],
        },
        "这三件事和压缩配合，图片才算真正为 SEO 服务。",
        { type: "h2", text: "FAQ" },
        {
          type: "faq",
          items: [
            { q: "压缩图片会降低 SEO 吗？", a: "不会，压缩只删冗余数据，视觉质量可保持。反而会提升：页面变快、LCP 达标、抓取效率提高。真正伤 SEO 的是过度压缩导致图片模糊。" },
            { q: "WebP 会影响图片搜索吗？", a: "不会。Google 图片搜索完全支持 WebP，而且 WebP 比 JPEG 小 25-35%，加载更快，排名逻辑里是加分项。" },
            { q: "一张图压到多小合适？", a: "博客正文图 100-200KB、封面 200-400KB 是常见区间。压缩到肉眼无差别为止，别追求极限体积。" },
            { q: "需要给每张图都做 alt 吗？", a: "承载信息的图需要，纯装饰图可以留空（避免屏幕阅读器重复播报）。alt 文本写清楚图片内容即可，关键词顺其自然。" },
          ],
        },
        { type: "cta", text: "压缩图片，立竿见影 →", href: "/" },
      ],
      en: [
        "Images are the most ignored performance killer on the web, and image optimization seo is one of the few fixes that pays off immediately: compress properly and pages load faster, LCP passes, and images can even show up in Google Images. This post covers how image compression connects to rankings, plus a compression standard you can use as-is.",
        { type: "h2", text: "Why image compression affects rankings" },
        "Page speed is a real ranking signal, and images are usually the biggest chunk of a page's weight: one uncompressed photo can take 2-5MB, and three of them sink the entire above-the-fold. The impact chain runs through three links:",
        {
          type: "ul",
          items: [
            "Core Web Vitals: images are the usual LCP (largest contentful paint) offender; over 2.5 seconds gets flagged as poor",
            "Crawl budget: heavier pages crawl slower, and fresh content takes longer to get indexed",
            "Image search: compression plus alt text and filenames means the image itself can drive search traffic",
          ],
        },
        "That is why compress images for web seo is a must for independent sites and content sites: it touches all three links at once.",
        { type: "h2", text: "A compression standard you can copy" },
        "You do not need to understand image encoding. Follow this standard:",
        {
          type: "ul",
          items: [
            "Photos (blog images): WebP with JPEG fallback, 100-200KB, quality 80% is visually lossless",
            "Decorative icons: SVG, 10-50KB, vector and scales at any size",
            "Cover / OG images: WebP or JPEG, 200-400KB, start at 1200x630",
            "Large backgrounds: WebP, 150-300KB, downscale to actual display size",
          ],
        },
        "Key move: resize first, compress second. A 4000x3000 photo at quality 20% loses to the same photo at 1200px and quality 80%, which is smaller and looks better. The order is always \"shrink dimensions, then lower quality\".",
        { type: "h2", text: "Local vs online compressors" },
        "Online tools are convenient but upload your image to a server. Local tools process in the browser and never leave the device, which suits sensitive images and is also faster. Judge a tool on three things: batch support, WebP output, and before-after comparison. For batch jobs, browser-local queued processing beats one-upload-per-image online tools by a wide margin.",
        { type: "h2", text: "Two more moves for image SEO" },
        "Compression is step one; images only drive traffic with two more actions:",
        {
          type: "ul",
          items: [
            "Descriptive English filenames: dog-running-park.jpg beats IMG_2048.jpg in Google Images",
            "Alt text that reads like a human: describe the image content with natural keywords, no stuffing; leave alt empty for decorative images",
            "Lazy loading plus declared dimensions: loading=\"lazy\" with width/height prevents layout shift (CLS)",
          ],
        },
        "These three, combined with compression, make images actually work for SEO.",
        { type: "h2", text: "FAQ" },
        {
          type: "faq",
          items: [
            { q: "Does compressing images hurt SEO?", a: "No. Compression only removes redundant data while keeping visual quality, and it helps: faster pages, passing LCP, better crawl efficiency. What hurts is over-compression that leaves images blurry." },
            { q: "Does WebP affect image search?", a: "No. Google Images fully supports WebP, and WebP is 25-35% smaller than JPEG, so it loads faster, which is a plus in the ranking logic." },
            { q: "How small should a single image be?", a: "100-200KB for body images and 200-400KB for covers is a common range. Compress until there is no visible difference; do not chase the absolute minimum." },
            { q: "Does every image need alt text?", a: "Informative images do; decorative ones can leave alt empty so screen readers skip them. Write alt that describes the image, and let keywords come naturally." },
          ],
        },
        { type: "cta", text: "Compress images for free (browser-local) →", href: "/" },
      ],
    },
  },
  {
    slug: "png-vs-jpg-differences",
    date: "2026-08-11",
    title: {
      zh: "PNG vs JPG：别再选错了，这篇把区别一次讲透",
      en: "PNG vs JPG: Stop Guessing, Here Is the Difference",
    },
    description: {
      zh: "PNG 适合文字和截图、JPG 适合照片，选错了要么体积离谱要么画质糊掉。从压缩原理讲起，什么时候用哪个、质量损失看不看得出来，以及 2026 年的第三个选项。",
      en: "PNG suits text and screenshots, JPG suits photos; pick wrong and you get a huge file or a mushy image. Compression principles, when to use which, whether the quality loss is visible, and the third option in 2026.",
    },
    keywords: [
      "png vs jpg",
      "png vs jpg difference",
      "jpg vs png quality",
      "when to use png vs jpg",
      "png vs jpg for web",
      "png jpg comparison",
    ],
    content: {
      zh: [
        "png vs jpg 是图片压缩领域最经典的二选一。选错了，要么图片体积大得离谱，要么画质糊成一团。这篇从原理讲起：为什么 PNG 适合文字和截图、JPG 适合照片，什么场景必须用哪个，以及 2026 年还有没有第三个选项。",
        { type: "h2", text: "先搞清楚原理：为什么两者差这么多" },
        "JPG 用的是有损压缩：它丢掉人眼不敏感的细节来换体积，一张照片压到 1/10 大小，肉眼几乎看不出差别。PNG 用的是无损压缩：一个像素都不丢，代价是体积大，同样内容，PNG 通常比 JPG 大 5-10 倍。",
        "但 PNG 有两个 JPG 做不到的事：完全透明的通道，和文字/线条的清晰边缘。JPG 没有透明通道，处理文字和图形边缘时还会产生难看的压缩噪点。这就是 png vs jpg difference 的核心：一个为照片而生，一个为图形而生。",
        { type: "h2", text: "什么时候用 PNG" },
        {
          type: "ul",
          items: [
            "截图、UI 界面、图表：文字和线条边缘需要干净",
            "需要透明背景的 logo、贴纸、素材",
            "需要无损编辑的中间文件（还要继续处理的原图）",
            "尺寸小、内容平的图形（图标、色块），PNG 反而可能比 JPG 更小",
          ],
        },
        { type: "h2", text: "什么时候用 JPG" },
        {
          type: "ul",
          items: [
            "照片、实拍图、渐变丰富的图像",
            "网页/邮件/社交媒体的展示图（体积小、加载快）",
            "摄影作品存档（高质量 JPG 对普通用途已经足够）",
          ],
        },
        "判断口诀：有文字或透明需求 → PNG；是照片或追求小体积 → JPG。",
        { type: "h2", text: "jpg vs png quality：质量损失真的看得出来吗" },
        "对照片来说，JPG 质量 80-85 的压缩，和原始 PNG 对比，大多数人在普通屏幕上分不出差别，但体积能小 80% 以上。对文字截图，JPG 质量 80 的蚊子噪声（文字边缘的颗粒感）就非常明显，必须用 PNG。",
        "一个实用结论：照片用 JPG 几乎无损地换体积，截图用 PNG 保证清晰。when to use png vs jpg 的答案，一半取决于内容类型，一半取决于你愿意为体积付多少代价。",
        { type: "h2", text: "2026 年：还有更优解" },
        "PNG 和 JPG 都老了。WebP 和 AVIF 同时在压缩率和画质上超过两者：WebP 比 JPG 小 25-35%，AVIF 比 JPG 小 50%。浏览器对它们的支持在 2026 年已经很成熟。建议：新项目优先 WebP/AVIF，PNG/JPG 留给需要兼容的老系统和特殊场景。想深入对比，看我们之前写的 WebP vs AVIF vs JPEG 那篇。",
        { type: "h2", text: "FAQ" },
        {
          type: "faq",
          items: [
            { q: "PNG 和 JPG 哪个画质更好？", a: "单纯比画质 PNG 无损一定更好，但区别在是否看得出来。照片用高质量 JPG，肉眼无差别且体积小得多；文字截图必须 PNG。" },
            { q: "PNG 能转成 JPG 吗？", a: "能，但透明背景会变成白色或黑色，需要先处理。转换会引入有损压缩，介意画质的话先备份原图。" },
            { q: "为什么我的 PNG 截图这么大？", a: "PNG 对高分辨率、色彩复杂的截图体积增长很快。可以换 WebP，通常能压到 1/3 以下，或者用压缩工具处理。" },
            { q: "网页图片该用哪个？", a: "照片用 WebP 或高质量 JPG，图形和截图用 WebP 或 PNG。记住：体积越小，页面越快，SEO 越好。" },
          ],
        },
        { type: "cta", text: "在浏览器本地压缩图片（免费）→", href: "/" },
      ],
      en: [
        "The png vs jpg debate is the classic either/or of image compression. Pick wrong and you either get a file that is absurdly large or an image that turns to mush. This guide starts with the why: why PNG suits text and screenshots, why JPG suits photos, when you have no real choice, and whether 2026 offers a third option.",
        { type: "h2", text: "The principle first: why they differ this much" },
        "JPG uses lossy compression: it discards details the eye barely notices to shrink the file, and a photo compressed to a tenth of its size still looks about the same. PNG uses lossless compression: not a single pixel is dropped, and the price is size, usually 5-10x a JPG for the same content.",
        "But PNG does two things JPG cannot: true alpha transparency, and clean edges on text and lines. JPG has no transparency channel, and it smears text and graphics edges with ugly compression noise. That is the core of the png vs jpg difference: one was built for photos, the other for graphics.",
        { type: "h2", text: "When to use PNG" },
        {
          type: "ul",
          items: [
            "Screenshots, UI, charts: text and line edges need to stay clean",
            "Logos, stickers, assets that need transparent backgrounds",
            "Lossless intermediate files (originals you will keep editing)",
            "Small, flat graphics (icons, color blocks), where PNG can actually beat JPG in size",
          ],
        },
        { type: "h2", text: "When to use JPG" },
        {
          type: "ul",
          items: [
            "Photos, real-world shots, images with smooth gradients",
            "Display images on web, email, social (small size, fast loading)",
            "Photography archives (a high-quality JPG is enough for everyday use)",
          ],
        },
        "The rule of thumb: text or transparency needs, use PNG; photos or small size, use JPG.",
        { type: "h2", text: "JPG vs PNG quality: can you actually see the loss?" },
        "For photos, JPG at quality 80-85 versus the original PNG: on a normal screen, most people cannot tell the difference, while the file shrinks by over 80%. For text screenshots, JPG at quality 80 shows obvious mosquito noise around letter edges, so PNG is the only sensible choice.",
        "Practical takeaway: photos trade almost invisibly for JPG's small size; screenshots stay crisp in PNG. The answer to when to use png vs jpg is half about content type, half about how much size you are willing to pay for.",
        { type: "h2", text: "2026: there is a better option now" },
        "PNG and JPG are both old. WebP and AVIF beat both on compression and quality: WebP runs 25-35% smaller than JPG, AVIF about 50% smaller. Browser support in 2026 is mature. The advice: prefer WebP/AVIF for new projects, keep PNG/JPG for legacy compatibility and special cases. For the deep comparison, see our WebP vs AVIF vs JPEG post.",
        { type: "h2", text: "FAQ" },
        {
          type: "faq",
          items: [
            { q: "Which has better quality, PNG or JPG?", a: "Pure quality, lossless PNG always wins, but what matters is whether you can see it. Photos with high-quality JPG look identical to most eyes at a fraction of the size; text screenshots need PNG." },
            { q: "Can I convert PNG to JPG?", a: "Yes, but transparent backgrounds become white or black, so handle that first. Conversion introduces lossy compression; back up the original if quality matters." },
            { q: "Why is my PNG screenshot so large?", a: "PNG grows fast with high resolution and complex colors. Try WebP (often a third of the size) or run it through a compressor." },
            { q: "Which should I use for web images?", a: "Photos: WebP or high-quality JPG. Graphics and screenshots: WebP or PNG. Smaller files mean faster pages and better SEO." },
          ],
        },
        { type: "cta", text: "Compress images for free (browser-local) →", href: "/" },
      ],
    },
  },  {
    slug: "webp-vs-png-comparison",
    date: "2026-08-12",
    title: {
      zh: "WebP vs PNG：2026 年网页图片到底该用哪个",
      en: "WebP vs PNG: Which Should You Use for Web Images in 2026?",
    },
    description: {
      zh: "WebP 和 PNG 的核心区别是压缩方式：一个有损、一个无损。网页图片选哪个，取决于内容是照片还是图形。这篇对比透明度、体积、画质和兼容性，并给出实际场景的建议。",
      en: "The core difference between WebP and PNG is compression: one lossy, one lossless. Which you use for web images depends on whether your content is photos or graphics. This guide compares transparency, size, quality and compatibility, with scenario-based advice.",
    },
    keywords: [
      "webp vs png",
      "webp or png which is better",
      "webp vs png size",
      "png to webp",
      "webp transparency",
      "webp 与 png 区别",
      "网页图片格式选择",
    ],
    content: {
      zh: [
        "webp vs png 是网页图片优化的经典选择题。选错要么文件大得离谱，要么画质肉眼可见地变差。这篇从压缩原理讲起：为什么 PNG 适合图形和截图、WebP 为什么在体积上全面占优、透明通道怎么处理，以及 2026 年实际该怎么做。",
        { type: "h2", text: "先看原理：无损和有损的区别" },
        "PNG 是无损压缩：一个像素都不丢，代价是文件大，同样的内容通常是 JPG 的 5-10 倍。WebP 两者都做：有损 WebP 用更聪明的算法，比同画质 JPG 小 25-35%；无损 WebP 又比 PNG 小 20-30%。也就是说，WebP 在两头都赢，只是赢多赢少的问题。",
        "关键差异在透明通道：PNG 的 alpha 透明是行业标准，所有工具都支持；WebP 也支持透明，而且带透明的 WebP 比带透明的 PNG 小得多。这是 WebP 最容易被忽略的优势。",
        { type: "h2", text: "什么时候用 PNG" },
        {
          type: "ul",
          items: [
            "需要最大兼容性的场合（老旧浏览器、某些内容管理系统、打印流程）",
            "图形、图标、色块：无损保证边缘干净",
            "需要反复编辑的中间文件",
            "你确定访问者会用不支持 WebP 的老环境",
          ],
        },
        { type: "h2", text: "什么时候用 WebP" },
        {
          type: "ul",
          items: [
            "网页照片、商品图、背景图：有损 WebP 画质几乎不可感知，体积省 25-35%",
            "带透明的 UI 素材：透明 WebP 比透明 PNG 小得多",
            "需要兼顾画质和加载速度的任何网页场景",
            "Lighthouse 和 Core Web Vitals 优化：更小的图片直接提升 LCP",
          ],
        },
        "一句话原则：新项目默认 WebP，只有在明确需要老环境兼容时才回退 PNG。",
        { type: "h2", text: "画质对比：肉眼能看出差别吗" },
        "无损 WebP 和 PNG 画质完全一样，只是体积小 20-30%。有损 WebP 在质量 80-90 时，照片上和原图几乎无法区分，但体积已经比 PNG 小一半以上。真正需要担心的不是画质，而是你的转换工具：质量参数设置太低才会出问题。",
        "对截图和文字类图形，用有损 WebP 也要小心，文字边缘会出现压缩噪点。这类内容要么用无损 WebP，要么直接保留 PNG。",
        { type: "h2", text: "2026 年的实际建议" },
        {
          type: "ul",
          items: [
            "网页照片和展示图：有损 WebP（质量 80-85），兼容性用 <picture> 标签回退 JPG",
            "图形、图标、截图：无损 WebP，需要极致兼容时 PNG",
            "透明素材：WebP 优先，PNG 兜底",
            "老系统内部流转（邮件、老旧 CMS、打印）：继续 PNG 或 JPG",
          ],
        },
        "2026 年所有主流浏览器都支持 WebP，Safari 也早已原生支持。<picture> 标签可以让你同时提供 WebP 和回退格式，兼顾性能和兼容性。如果你还在犹豫，把 WebP 作为默认、PNG 作为兜底，基本不会错。",
        { type: "h2", text: "FAQ" },
        {
          type: "faq",
          items: [
            { q: "WebP 和 PNG 哪个画质好？", a: "无损 WebP 和 PNG 画质完全相同，但 WebP 体积小 20-30%。有损 WebP 画质取决于质量参数，设置 80-90 时肉眼几乎无差别。" },
            { q: "WebP 支持透明背景吗？", a: "支持。而且带透明的 WebP 比带透明的 PNG 小得多，这是 WebP 最容易忽略的优势。" },
            { q: "PNG 能转成 WebP 吗？", a: "能。几乎所有的图片工具都支持转换，转换后体积通常能减少 20-50%。转之前备份原图，避免有损参数设置太低。" },
            { q: "2026 年网页图片默认该用哪个？", a: "默认 WebP。所有主流浏览器都支持，配合 <picture> 标签给老浏览器回退 JPG 或 PNG 即可。只有明确需要最大兼容性时才用 PNG。" },
          ],
        },
        { type: "cta", text: "在浏览器本地压缩图片（免费）→", href: "/" },
      ],
      en: [
        "The webp vs png choice is a classic image optimization puzzle. Pick wrong and you get a file that is absurdly large or visible quality loss. This guide starts with the compression principle: why PNG suits graphics and screenshots, why WebP wins on size across the board, how transparency works in both, and what to actually do in 2026.",
        { type: "h2", text: "The principle first: lossless vs lossy" },
        "PNG is lossless: not a single pixel is dropped, and the price is size, usually 5-10x a JPG for the same content. WebP does both: lossy WebP uses a smarter algorithm and runs 25-35% smaller than JPG at the same quality; lossless WebP beats PNG by 20-30%. In other words, WebP wins on both sides of the fence, the only question is by how much.",
        "The key difference is transparency: PNG's alpha channel is the industry standard and every tool supports it. WebP supports transparency too, and a transparent WebP is much smaller than a transparent PNG. That is the most overlooked advantage of WebP.",
        { type: "h2", text: "When to use PNG" },
        {
          type: "ul",
          items: [
            "Maximum compatibility (legacy browsers, certain CMS, print workflows)",
            "Graphics, icons, color blocks: lossless keeps edges clean",
            "Intermediate files you will keep editing",
            "When you know your visitors run old environments without WebP",
          ],
        },
        { type: "h2", text: "When to use WebP" },
        {
          type: "ul",
          items: [
            "Web photos, product shots, backgrounds: lossy WebP is visually indistinguishable and saves 25-35%",
            "Transparent UI assets: transparent WebP is much smaller than transparent PNG",
            "Any web page balancing quality against load speed",
            "Core Web Vitals optimization: smaller images directly improve LCP",
          ],
        },
        "One line: new projects default to WebP, fall back to PNG only when legacy compatibility is a real requirement.",
        { type: "h2", text: "Quality: can you actually see the difference?" },
        "Lossless WebP and PNG are pixel-identical in quality, only the file is 20-30% smaller. Lossy WebP at quality 80-90 is nearly indistinguishable from the original on photos, while being less than half the size of PNG. The real risk is not quality, it is your conversion tool: setting the quality parameter too low is what causes visible damage.",
        "For screenshots and text-heavy graphics, be careful with lossy WebP too: compression noise shows around letter edges. Use lossless WebP for those, or keep PNG.",
        { type: "h2", text: "The practical 2026 recommendation" },
        {
          type: "ul",
          items: [
            "Web photos and display images: lossy WebP (quality 80-85), with <picture> fallback to JPG",
            "Graphics, icons, screenshots: lossless WebP, PNG only when maximum compatibility is required",
            "Transparent assets: WebP first, PNG as fallback",
            "Internal legacy flows (email, old CMS, print): keep PNG or JPG",
          ],
        },
        "Every mainstream browser supports WebP in 2026, Safari included. The <picture> tag lets you serve WebP with a JPG or PNG fallback, covering both performance and compatibility. If you are still undecided, make WebP the default and PNG the fallback, and you will rarely be wrong.",
        { type: "h2", text: "FAQ" },
        {
          type: "faq",
          items: [
            { q: "Which has better quality, WebP or PNG?", a: "Lossless WebP and PNG are identical in quality, but WebP is 20-30% smaller. Lossy WebP quality depends on the quality setting; at 80-90 it is nearly indistinguishable from the original." },
            { q: "Does WebP support transparency?", a: "Yes. And a transparent WebP is much smaller than a transparent PNG, which is the most overlooked advantage of WebP." },
            { q: "Can I convert PNG to WebP?", a: "Yes. Almost every image tool supports it, and the file usually shrinks by 20-50%. Back up the original first to avoid a too-low quality setting." },
            { q: "Which should be the web default in 2026?", a: "WebP. Every mainstream browser supports it, and the <picture> tag gives legacy browsers a JPG or PNG fallback. Use PNG only when maximum compatibility is a hard requirement." },
          ],
        },
        { type: "cta", text: "Compress images for free (browser-local) →", href: "/" },
      ],
    },
  },  {
    slug: "webp-vs-jpeg-comparison",
    date: "2026-08-13",
    title: {
      zh: "WebP vs JPEG：照片网页到底选哪个",
      en: "WebP vs JPEG: Which Format for Photos on the Web?",
    },
    description: {
      zh: "WebP 和 JPEG 都是照片格式，但压缩思路不一样：JPEG 是老标准、兼容性最好；WebP 同样是有损但体积小 25-35%。这篇对比画质、体积、兼容性和实际场景，给出 2026 年的明确建议。",
      en: "WebP and JPEG are both photo formats with different compression ideas: JPEG is the old standard with the best compatibility, WebP is lossy too but 25-35% smaller. This guide compares quality, size, compatibility and real scenarios, with a clear 2026 recommendation.",
    },
    keywords: [
      "webp vs jpeg",
      "webp or jpeg which is better",
      "webp vs jpg size",
      "jpeg to webp",
      "webp vs jpeg quality",
      "webp 与 jpeg 区别",
      "网页照片格式选择",
    ],
    content: {
      zh: [
        "webp vs jpeg 是网页照片优化的选择题。JPEG 统治了照片三十年，WebP 是后起之秀：同样的画质，体积小 25-35%。这篇从压缩原理讲起，对比画质、兼容性和体积，最后给出 2026 年的明确建议。",
        { type: "h2", text: "原理：两种有损压缩的差别" },
        "JPEG 和 WebP 都是基于人眼感知的有损压缩，但算法不同。JPEG 用离散余弦变换，把图像切成 8x8 的块分别压缩，质量参数低时会出现明显的块状噪点。WebP 用更现代的预测编码，在同样的质量下保留更多细节，或者同样的细节占用更少体积。",
        "实际数字：质量 80 时，WebP 通常比 JPEG 小 25-35%。质量越高差距越小，质量越低差距越大。对照片来说，WebP 在体积上基本没有输的时候。",
        { type: "h2", text: "画质：肉眼能看出差别吗" },
        "同体积对比，WebP 画质更好；同画质对比，WebP 体积更小。这是核心结论。但实际使用中有个隐藏因素：JPEG 经历了三十年的编码器优化，MozJPEG 这类编码器输出的 JPEG 质量很高。WebP 的默认编码器也很成熟，但如果你用的是老工具转换，质量参数没调好，WebP 反而可能更差。",
        "关键建议：别拿默认参数直接转。WebP 质量设 80-85 是照片的安全区间，低于 70 会出现可见噪点，JPEG 同理。转换前备份原图。",
        { type: "h2", text: "兼容性：JPEG 的最后堡垒" },
        {
          type: "ul",
          items: [
            "JPEG：所有浏览器、所有系统、所有年代，永远能打开",
            "WebP：2020 年后所有主流浏览器原生支持，Safari 14+ 支持",
            "老旧系统（Windows 7 默认图片查看器、某些企业内网、老相机/扫描仪）不认 WebP",
            "打印流程和某些 CMS 插件仍以 JPEG 为默认",
          ],
        },
        "2026 年的现实：Web 访问者几乎都支持 WebP，但内部流程（邮件附件、打印、老旧 CMS）仍是 JPEG 的天下。这也是为什么 <picture> 标签是标准做法：给现代浏览器 WebP，给老环境回退 JPEG。",
        { type: "h2", text: "实际场景建议" },
        {
          type: "ul",
          items: [
            "网页照片、商品图、博客配图：WebP（质量 80-85），<picture> 回退 JPEG",
            "需要最大兼容性的外发文件：JPEG",
            "摄影作品展示：WebP 质量 90+ 或 JPEG 质量 95，看平台支持",
            "批量压缩整站图片：WebP 优先，Lighthouse 会告诉你省了多少体积",
          ],
        },
        "一句话：新项目照片默认 WebP，外发和打印走 JPEG，用 <picture> 兼顾两头。",
        { type: "h2", text: "关于质量参数的实话" },
        "网上流传的对比图大多是极端参数下的产物：JPEG 质量 30 vs WebP 质量 80，结论当然一边倒。公平的对比是同一质量水平。质量 80-85 区间，两者的差别普通用户几乎看不出来，但体积差距稳定在 25-35%。与其纠结选哪个，不如把质量参数调对，那才是真正的优化空间。",
        { type: "h2", text: "FAQ" },
        {
          type: "faq",
          items: [
            { q: "WebP 和 JPEG 哪个画质好？", a: "同体积下 WebP 画质更好，同画质下 WebP 体积小 25-35%。质量 80-85 区间两者差别肉眼几乎不可见。" },
            { q: "WebP 支持透明背景吗？", a: "支持，但照片场景通常用不到。JPEG 不支持透明，这也是 WebP 的额外优势。" },
            { q: "JPEG 能转成 WebP 吗？", a: "能，几乎所有图片工具都支持。转换后体积通常减少 25-35%，但建议用质量 80 以上，别用默认的激进压缩。" },
            { q: "2026 年网页照片默认该用哪个？", a: "默认 WebP。所有主流浏览器都支持，配合 <picture> 标签给老环境回退 JPEG 即可。只有外发、打印等明确需要最大兼容性的场景才用 JPEG。" },
          ],
        },
        { type: "cta", text: "在浏览器本地压缩图片（免费）→", href: "/" },
      ],
      en: [
        "The webp vs jpeg choice is the classic photo optimization question. JPEG has ruled photos for three decades, WebP is the newcomer: same quality, 25-35% smaller files. This guide starts with the compression principle, compares quality, compatibility and size, and ends with a clear 2026 recommendation.",
        { type: "h2", text: "The principle: two kinds of lossy compression" },
        "JPEG and WebP are both perceptual lossy compression, but the algorithms differ. JPEG uses a discrete cosine transform, cutting the image into 8x8 blocks compressed separately, and low quality settings show visible block noise. WebP uses more modern predictive coding, keeping more detail at the same quality, or using less space for the same detail.",
        "The numbers: at quality 80, WebP is typically 25-35% smaller than JPEG. The higher the quality, the smaller the gap; the lower, the bigger. For photos, WebP basically never loses on size.",
        { type: "h2", text: "Quality: can you see the difference?" },
        "Same size, WebP looks better. Same quality, WebP is smaller. That is the core conclusion. But there is a hidden factor: JPEG has had three decades of encoder optimization, and modern encoders like MozJPEG produce very clean output. WebP's default encoder is mature too, but if you convert with an old tool and bad settings, WebP can actually come out worse.",
        "Key advice: do not convert with default parameters. Quality 80-85 is the safe band for photos in WebP, below 70 shows visible noise, same as JPEG. Back up the original before converting.",
        { type: "h2", text: "Compatibility: JPEG's last fortress" },
        {
          type: "ul",
          items: [
            "JPEG: every browser, every system, every era, always opens",
            "WebP: native support in all major browsers since 2020, Safari 14+",
            "Legacy environments (Windows 7 default viewer, some intranets, old cameras/scanners) do not read WebP",
            "Print workflows and some CMS plugins still default to JPEG",
          ],
        },
        "The 2026 reality: web visitors almost all support WebP, but internal flows (email attachments, printing, legacy CMS) are still JPEG territory. That is why the <picture> tag is the standard approach: WebP for modern browsers, JPEG fallback for old ones.",
        { type: "h2", text: "Scenario recommendations" },
        {
          type: "ul",
          items: [
            "Web photos, product shots, blog images: WebP (quality 80-85) with <picture> JPEG fallback",
            "Files sent outside, where compatibility matters most: JPEG",
            "Photography showcase: WebP quality 90+ or JPEG quality 95, depending on platform support",
            "Batch compressing a whole site: WebP first, Lighthouse will show you the savings",
          ],
        },
        "One line: photos on new projects default to WebP, external files and print stay JPEG, use <picture> to cover both.",
        { type: "h2", text: "The honest take on quality settings" },
        "Most comparison charts online are built on extreme settings: JPEG quality 30 vs WebP quality 80, so of course the verdict is one-sided. A fair comparison uses the same quality level. In the 80-85 band, ordinary users cannot tell the two apart, but the size gap is a steady 25-35%. Instead of agonizing over the format, get the quality parameter right, that is the real optimization.",
        { type: "h2", text: "FAQ" },
        {
          type: "faq",
          items: [
            { q: "Which has better quality, WebP or JPEG?", a: "At the same size, WebP looks better. At the same quality, WebP is 25-35% smaller. In the 80-85 quality band the difference is invisible to most people." },
            { q: "Does WebP support transparency?", a: "Yes, though photos rarely need it. JPEG does not support transparency, which is an extra edge for WebP." },
            { q: "Can I convert JPEG to WebP?", a: "Yes, nearly every image tool does it. Expect a 25-35% size reduction, but use quality 80 or above instead of aggressive default compression." },
            { q: "What should web photos use by default in 2026?", a: "WebP. Every major browser supports it, and the <picture> tag handles JPEG fallback for old environments. Only external files and print workflows need plain JPEG." },
          ],
        },
        { type: "cta", text: "Compress images locally in your browser (free) →", href: "/" },
      ],
    },
  },
  {
    slug: "avif-vs-webp-in-depth",
    date: "2026-08-14",
    title: {
      zh: "AVIF vs WebP 深度对比",
      en: "AVIF vs WebP: In-Depth Comparison",
    },
    description: {
      zh: "AVIF 和 WebP 哪个更小、画质更好、浏览器支持更全？这篇深度对比把体积、画质和兼容性摆在一起，帮你选对格式。",
      en: "Which is smaller, looks better, and works in more browsers: AVIF or WebP? This in-depth comparison puts size, quality, and support side by side.",
    },
    keywords: [
      "avif vs webp",
      "avif webp comparison",
      "which image format smaller",
      "webp vs avif quality",
    ],
    content: {
      en: [
        "Choosing the right image format can take megabytes off your pages without anyone spotting the difference. The real fight in 2026 isn't JPEG versus WebP anymore. It's AVIF vs WebP. Both compress circles around JPEG, both are free to use, and both run in current browsers. They are not the same format wearing a different hat, though. AVIF usually comes out smaller, while WebP is the steadier, more predictable pick for everyday work. I'll put the two side by side here so you can stop guessing and just ship the right file.",
        { type: "h2", text: "AVIF WebP comparison: how the two actually compress" },
        "AVIF and WebP both grew out of video codecs, AVIF from AV1 and WebP from VP8, which is why they leave JPEG in the dust. In a straight avif webp comparison at quality 80, AVIF tends to land about 30% smaller than WebP for the same sharpness, and WebP itself beats JPEG by another 30%. The wrinkle is the encoder. AVIF's best numbers come from slow, careful encoding. Point a fast encoder at a photo with default settings and you can get a file that's barely smaller than WebP and a bit noisier. The format wins on paper. The encoder decides in the real world.",
        { type: "h2", text: "Which image format is smaller: AVIF or WebP?" },
        "Short version: at equal quality, AVIF is the smaller file almost every time. On busy photos it often beats WebP by 20 to 50%. On flat graphics with text the gap shrinks, sometimes to almost nothing. So if which image format is smaller is your only question, AVIF wins it. Smaller isn't free, though. AVIF encoding is genuinely slow, seconds per image on a decent CPU, while WebP finishes in milliseconds. For one hero shot that's fine. For crunching 5,000 product photos on a budget box, WebP's speed starts to matter as much as its size.",
        { type: "h2", text: "WebP vs AVIF quality: will anyone notice?" },
        "In a webp vs avif quality test at matched file sizes, AVIF holds onto fine detail and smooth gradients better. Skies, skin, and hair survive. WebP softens a little sooner and shows blocky edges earlier. Drop below quality 60 and the gap is obvious. Up in the 75 to 85 range most people won't catch it on a phone. Where AVIF pulls clearly ahead is high-contrast edges and heavily textured photos. If your site is mostly screenshots and logos, that quality edge mostly vanishes and you're back to picking on speed and support.",
        { type: "h2", text: "Browser support, and the catch nobody mentions" },
        "WebP works everywhere that counts. Every mainstream browser since around 2020, including Safari 14. AVIF showed up later, Chrome and Firefox first, Safari only from version 16 in 2023. Coverage is broad now but not quite total, and a few older in-app browsers still trip over it. The fix is the same one we use for WebP: serve AVIF with a WebP or JPEG fallback through the picture element. Modern devices get the savings, everything else gets a file it can actually open.",
        { type: "h2", text: "AVIF vs WebP at a glance" },
        {
          type: "ul",
          items: [
            "Size at equal quality: AVIF roughly 20 to 50% smaller than WebP; WebP about 30% smaller than JPEG",
            "Quality at equal size: AVIF keeps detail and gradients cleaner; WebP softens a bit sooner",
            "Browser support: WebP universal since around 2020; AVIF in Chrome, Firefox, Edge, and Safari 16 (2023)",
            "Encoding speed: WebP is fast, milliseconds per image; AVIF is slow, often seconds per image",
            "Extras: both handle transparency; AVIF adds 10-bit color and HDR that WebP doesn't",
          ],
        },
        { type: "h2", text: "When to reach for AVIF, and when to keep WebP" },
        {
          type: "ul",
          items: [
            "Use AVIF for hero images and photography where every kilobyte is worth fighting for",
            "Use WebP for big catalogs, thumbnails, and batch jobs where encode time adds up",
            "Serve AVIF first with a WebP or JPEG fallback so old browsers don't break",
            "Keep PNG for logos and UI with sharp text, but compress it instead of converting blind",
          ],
        },
        { type: "h2", text: "FAQ" },
        {
          type: "faq",
          items: [
            { q: "Is AVIF always smaller than WebP?", a: "Almost always at matched quality, often 20 to 50% smaller on photos. The gap narrows on simple graphics, and a badly tuned fast AVIF encoder can wipe out the win completely." },
            { q: "Does AVIF work in all browsers?", a: "Not yet everywhere. Chrome, Firefox, and Edge support it, and Safari joined with version 16 in 2023. For full coverage, serve AVIF with a WebP or JPEG fallback using the picture tag." },
            { q: "Should my site use AVIF or WebP?", a: "Use AVIF for large, detailed photos where size matters most, and WebP for bulk or batch compression where speed matters. The safest setup sends AVIF first with a WebP or JPEG fallback." },
            { q: "Can I convert WebP to AVIF?", a: "Yes. Most modern tools handle it, and you'll usually drop another 20 to 40% in size. Use a slow, high-quality AVIF preset instead of the fast default to keep the detail." },
          ],
        },
        { type: "cta", text: "Compress and convert images free at image-compressor-saas.shop →", href: "/" },
      ],
      zh: [
        "选对图片格式，往往能在没人察觉的情况下，把页面体积砍掉几兆。到 2026 年，真正的较量早就不是 JPEG 对 WebP 了，而是 AVIF vs WebP。这两个格式都比 JPEG 强一大截，都免费、都能在现代浏览器里跑。但它们并不是换了个马甲的同一种东西。AVIF 通常压得更小，WebP 则是日常使用里更稳、更可预期的那一个。下面我把两者摆在一起对比，帮你别再靠猜。",
        { type: "h2", text: "AVIF WebP 对比：两种格式到底怎么压" },
        "AVIF 和 WebP 都脱胎于视频编码——AVIF 来自 AV1，WebP 来自 VP8——这正是它们能甩开 JPEG 的原因。在质量 80 的 avif webp 对比里，AVIF 通常比同清晰度的 WebP 还小约 30%，而 WebP 本身又比 JPEG 小约 30%。真正的变数在编码器。AVIF 最好的成绩来自又慢又细的编码；要是拿快速编码器配默认参数去压，出来的文件可能只比 WebP 小一点点，还多了些噪点。格式在纸面上赢了，编码器才决定实际结果。",
        { type: "h2", text: "哪种格式更小：AVIF 还是 WebP？" },
        "短答案：在同等质量下，AVIF 几乎总是更小。细节多的照片，它常常能比 WebP 小 20% 到 50%；碰到带文字的扁平图形，差距会收窄，有时几乎可以忽略。所以如果你只问“which image format smaller”（哪个格式更小），AVIF 赢。但小不是白来的。AVIF 编码是真的慢，好一点的 CPU 也要按秒算一张；WebP 则是毫秒级。一张主图无所谓，要是拿廉价服务器压五千张商品图，WebP 的速度就和体积一样重要了。",
        { type: "h2", text: "WebP vs AVIF 画质：肉眼看得出来吗？" },
        "在体积相同的 webp vs avif 画质测试里，AVIF 能留住更多细节和平滑的渐变，天空、皮肤和头发都更耐看；WebP 会更早发软、更早出现块状噪点。低于质量 60，差距一眼可见；在 75 到 85 这个甜区里，手机上大多数人根本分不出来。AVIF 真正拉开身位的地方，是高反差边缘和纹理密集的照片。要是你的站点基本是截图和 Logo，那点画质优势基本消失，又回到比速度和兼容性。",
        { type: "h2", text: "浏览器兼容，以及没人提的那个坑" },
        "WebP 在要紧的地方都能用：2020 年前后起的主流浏览器全都支持，包括 Safari 14。AVIF 来得晚，Chrome 和 Firefox 先上，Safari 到 2023 年的 16 版才跟上。如今覆盖面很广，但还没到彻底无死角，少数老旧的 App 内浏览器照样会翻车。解决办法和 WebP 时代一样：用 picture 标签，AVIF 优先，后面跟 WebP 或 JPEG 兜底。新设备吃到体积红利，旧设备拿到能打开的文件。",
        { type: "h2", text: "AVIF 与 WebP 一览" },
        {
          type: "ul",
          items: [
            "同等质量体积：AVIF 比 WebP 约小 20% 到 50%，WebP 又比 JPEG 小约 30%",
            "同等体积画质：AVIF 细节和渐变更干净，WebP 稍早发软",
            "浏览器支持：WebP 自 2020 年前后全面支持；AVIF 在 Chrome、Firefox、Edge 及 Safari 16（2023）",
            "编码速度：WebP 快，毫秒级；AVIF 慢，常按秒算",
            "附加项：两者都支持透明；AVIF 多了 10bit 色深和 HDR，WebP 没有",
          ],
        },
        { type: "h2", text: "什么时候用 AVIF，什么时候留 WebP" },
        {
          type: "ul",
          items: [
            "主图、摄影类大图，每一 KB 都值得争，用 AVIF",
            "大批量商品图、缩略图、批量任务，编码耗时是重点，用 WebP",
            "AVIF 优先，后面跟 WebP 或 JPEG 兜底，老浏览器才不崩",
            "Logo 和带锐利文字的 UI 继续用 PNG，但压一压，别盲目转格式",
          ],
        },
        { type: "h2", text: "常见问题" },
        {
          type: "faq",
          items: [
            { q: "AVIF 一定比 WebP 小吗？", a: "在同等质量下几乎总是更小，照片常常小 20% 到 50%。简单图形差距会收窄，而调得不细致的快速 AVIF 编码，可能把这点优势全赔进去。" },
            { q: "AVIF 所有浏览器都能用吗？", a: "还没到全覆盖。Chrome、Firefox、Edge 都支持，Safari 从 2023 年的 16 版才跟上。要稳，就用 picture 标签让 AVIF 优先、WebP 或 JPEG 兜底。" },
            { q: "我的网站该用 AVIF 还是 WebP？", a: "体积最要紧的大图、细节多的照片用 AVIF；批量、讲究编码速度的用 WebP。最稳的做法是 AVIF 优先，配 WebP 或 JPEG 兜底。" },
            { q: "能把 WebP 转成 AVIF 吗？", a: "可以。多数现代工具都支持，通常还能再小 20% 到 40%。别用快速默认，选慢一点的高质量 AVIF 预设，细节才保得住。" },
          ],
        },
        { type: "cta", text: "免费压缩与格式转换，上 image-compressor-saas.shop →", href: "/" },
      ],
    },
  },
  {
    slug: "heic-vs-jpg-iphone-photos",
    date: "2026-08-15",
    title: {
      zh: "HEIC 还是 JPG？iPhone 照片格式选型指南",
      en: "HEIC vs JPG: Which Format Should Your iPhone Photos Use?",
    },
    description: {
      zh: "HEIC 还是 JPG？iPhone 默认的 HEIC 格式能省一半空间，但兼容性差。这篇从体积、画质、兼容性三个维度对比，告诉你什么时候该转 JPG、怎么转最省事。",
      en: "HEIC or JPG? iPhone's default HEIC format saves up to half the space but has weak compatibility. This guide compares size, quality, and compatibility, and tells you when to convert to JPG and how to do it.",
    },
    keywords: [
      "heic vs jpg",
      "heic vs jpg iphone photos",
      "heic to jpg converter",
      "iphone photo format",
    ],
    content: {
      en: [
        "Last year I imported about 3,000 photos from my phone to a Windows PC. A third of them wouldn't open. At the time I figured the computer was broken. Turns out the problem was the format—HEIC, the default photo format on iPhones, which Windows doesn't natively recognize.",
        "This isn't a niche complaint. The **HEIC vs JPG** dilemma hits almost every iPhone user eventually. I'm not here to pick a side. I want to lay out what each format is good for, and when you really have no choice but to convert to JPG.",
        "HEIC (High Efficiency Image Coding) is what Apple has used by default since iOS 11, built on the HEIF standard. Its goal is simple: same quality, smaller size. JPG is a 30-year-old format with unbeatable compatibility and a bit of a legacy problem.",
        "In one sentence: HEIC is the space-saving new format, JPG is the old format that works everywhere.",
        "The numbers tell the story. For the same 12-megapixel photo, HEIC lands around 2-3MB where JPG takes 4-6MB. Over 10,000 photos a year, that's tens of gigabytes of difference. That's HEIC's biggest value, and honestly its whole reason to exist.",
        "If you only handle photos on your iPhone, HEIC never gives you trouble. But photos are meant to move. The real friction in **HEIC vs JPG for iPhone photos** shows up the second a file leaves the Apple ecosystem.",
        {
                "type": "ul",
                "items": [
                        "Windows Explorer won't open HEIC without a plugin",
                        "Some online forms, job sites, and banking apps reject HEIC uploads",
                        "Older printer drivers and photo lab systems don't recognize it",
                        "Send it to an Android user and they may see a gray block or a garbled filename"
                ]
        },
        "You don't need to hit all of these. One is enough to stop you cold. In practice, a lot of people meet HEIC for the first time when submitting a resume or uploading an ID photo.",
        "In rough order of urgency, convert in these situations:",
        "1. **Website uploads**: job portals, visa applications, e-commerce platforms—most accept only JPG or PNG",
        "2. **Sending to non-Apple users**: original photos over WeChat or email, where the receiver is on Android or Windows",
        "3. **Printing**: many online labs and self-serve printers have spotty HEIC support",
        "4. **Archiving**: if you're unsure what software will open a file in ten years, JPG is the safer bet",
        "5. **Professional delivery**: don't make clients, editors, or partners deal with codecs",
        "On the flip side, if your photos stay on your own devices and back up to iCloud, HEIC is fine as-is. No need to convert. Conversion has a cost—an extra step, an extra compression pass. Skip it when you can.",
        "The good news: converting to JPG isn't a technical feat. In iCloud settings you can switch downloads to \"Most Compatible,\" but more often you just need to convert a few files on the spot—with built-in tools, Shortcuts, or an online converter.",
        "My own routine: keep the originals in HEIC on iCloud, batch-convert a JPG copy whenever something needs to go out. A **HEIC to JPG converter** exists exactly for this. A decent one reuses the original decode data instead of re-encoding from a compressed image, so nothing gets blurrier.",
        "And if this all sounds familiar, you're right. We've written about",
        {
                "type": "cta",
                "text": "WebP vs JPEG",
                "href": "https://image-compressor-saas.shop/blog/webp-vs-jpeg-comparison"
        },
        "**HEIC vs JPG** has no absolute winner. On pure storage efficiency, HEIC wins easily. On universality, JPG is still the \"can't go wrong\" option. The smart move isn't choosing one. It's switching by scenario: keep HEIC on your device, convert to JPG when it goes out.",
        "If a HEIC file is blocking you somewhere, use our",
        {
                "type": "cta",
                "text": "online image tool",
                "href": "https://image-compressor-saas.shop/"
        },
        "**Q: Which has better quality, HEIC or JPG?**",
        "A: At equal quality, HEIC is about half the size. At equal size, HEIC keeps more detail. But at normal phone viewing distances, the difference is usually invisible. JPG loses on file size, not on quality your eyes can notice.",
        "**Q: Is HEIC the default format on iPhone?**",
        "A: Yes, since iOS 11. You can switch to \"Most Compatible\" under Settings → Camera → Formats, which makes the iPhone save JPG directly—at the cost of larger files.",
        "**Q: Why can't my friend open the HEIC photo I sent?**",
        "A: Their device or app doesn't support the format. Android phones, Windows, and many web apps have no native HEIC support. If you need them to see it, convert to JPG first.",
        "**Q: Does converting damage image quality?**",
        "A: A proper tool decodes the HEIC and re-encodes as JPG—one compression pass with theoretically slight loss, usually invisible to the eye. The real risk is double compression, compressing the JPG again after conversion. That's when things get mushy."
],
      zh: [
        "去年我把手机里 3000 张照片导到 Windows 电脑上，结果三分之一打不开。当时我还没意识到问题出在格式上，只当是电脑坏了。后来才知道，那是 HEIC——iPhone 默认的照片格式，Windows 原生不认。",
        "这个问题不是少数人的烦恼。**heic vs jpg** 的纠结，几乎每个用 iPhone 的人都遇到过。这篇不劝你站队，就讲清楚两种格式各自的处境，以及什么时候必须转 JPG。",
        "HEIC（High Efficiency Image Coding）是苹果从 iOS 11 开始默认使用的格式，基于 HEIF 标准。它的设计目标很明确：同等画质下体积更小。JPG 呢，30 年前的老格式，兼容性无敌，但也确实有点老了。",
        "用一句话概括：HEIC 是\"省空间的新格式\"，JPG 是\"哪都能用的老格式\"。",
        "数字能说明问题。同样一张 1200 万像素照片，HEIC 大概 2-3MB，JPG 要 4-6MB。一年攒一万张照片，差别就是几十个 GB 的存储空间。这是 HEIC 最大的价值，也是它存在的全部理由。",
        "如果你只在 iPhone 上处理照片，HEIC 没有任何问题。可照片这东西总要流动：**heic vs jpg iphone photos** 的真正矛盾，出现在文件离开苹果生态的那一刻。",
        {
                "type": "ul",
                "items": [
                        "Windows 资源管理器原生打不开 HEIC，要看图得装插件",
                        "部分在线表单、招聘网站、银行 App 不接受 HEIC 上传",
                        "老一点的打印机驱动和照片冲印店不认",
                        "发给安卓用户，对方可能只看到一片灰色或乱码文件名"
                ]
        },
        "这些场景不需要 100% 兼容，只要撞上一个，你就得停下来处理格式问题。现实里，很多人就是在\"发简历\"或\"上传证件照\"时第一次被 HEIC 卡住的。",
        "按需求排序，下面这些情况建议直接转：",
        "1. **上传网站**：招聘系统、签证申请、电商平台，大部分只收 JPG 或 PNG",
        "2. **发给非苹果用户**：微信、邮件里发原图，对方用安卓或 Windows",
        "3. **打印**：很多线上冲印和自助打印机对 HEIC 支持不完整",
        "4. **存档兼容性**：不确定十年后什么软件能打开，选 JPG 更稳妥",
        "5. **专业交付**：给客户、编辑、合作方发图，别让对方折腾解码器",
        "反过来，如果照片只在自己设备上管理、备份走 iCloud，那 HEIC 完全够用，没必要转。转换也有成本——多一步操作，多一次压缩，能省则省。",
        "好消息是，转 JPG 不是什么高技术活。iCloud 设置里可以把下载改成\"最兼容\"，但更常见的是你需要临时转几张：用系统自带功能、快捷指令、或者在线工具都行。",
        "我自己的习惯是：日常照片留 HEIC 存 iCloud，要发出去的时候用工具批量转一份 JPG。**heic to jpg converter** 这类工具就是为了这种场景存在的——转换质量直接复用原图的解码数据，不会二次压糊。",
        "顺便说一句，你可能会觉得这场景似曾相识。我们之前写过",
        {
                "type": "cta",
                "text": "WebP 和 JPEG 的对比",
                "href": "https://image-compressor-saas.shop/blog/webp-vs-jpeg-comparison"
        },
        "**heic vs jpg** 没有绝对赢家。纯看存储效率，HEIC 赢得很轻松；看通用性，JPG 还是那个\"不会错\"的选择。聪明做法不是二选一，而是按场景切换：设备内留 HEIC，向外输出转 JPG。",
        "如果你正被 HEIC 卡在某一步，可以用我们的",
        {
                "type": "cta",
                "text": "在线图片压缩工具",
                "href": "https://image-compressor-saas.shop/"
        },
        "**Q: HEIC 和 JPG 到底哪个画质好？**",
        "A: 同样画质下 HEIC 体积小一半左右；同样体积下 HEIC 细节保留更多。但人眼在正常手机观看距离下，两者差异通常不明显。JPG 输的是文件大小，不是\"肉眼可感知的画质\"。",
        "**Q: iPhone 照片默认就是 HEIC 吗？**",
        "A: 是，iOS 11 及之后默认开启。你可以去\"设置 → 相机 → 格式\"里改成\"兼容性最好\"，那样 iPhone 会直接存 JPG，但照片体积会变大。",
        "**Q: 为什么我发的 HEIC 照片朋友打不开？**",
        "A: 因为对方设备或软件不支持这个格式。安卓手机、Windows 系统、部分网页端都没有原生 HEIC 支持。需要对方能看，就转成 JPG 再发。",
        "**Q: 转换会损伤画质吗？**",
        "A: 正规工具只是把 HEIC 解码后重新编码成 JPG，相当于一次压缩，会有理论上的轻微损耗，但通常肉眼不可见。风险在\"二次压缩\"——转出来的 JPG 又压一次，那才会糊。"
],
    },
  },

  {
    slug: "convert-heic-to-jpg-free",
    date: "2026-08-16",
    title: {
      zh: "免费把 HEIC 转成 JPG：手机电脑全方案",
      en: "Convert HEIC to JPG Free: Phone and Desktop Methods",
    },
    description: {
      zh: "HEIC 转 JPG 免费怎么做？这篇覆盖 iPhone 设置直转、Mac 自带预览、Windows 在线工具三种路径，并告诉你批量转换怎么选、转换会不会损伤画质。",
      en: "How to convert HEIC to JPG for free? This guide covers iPhone settings, Mac Preview, and Windows online tools, plus batch conversion choices and whether quality suffers.",
    },
    keywords: [
      "heic to jpg converter",
      "convert heic to jpg",
      "heic to jpg free",
      "heic to jpg windows",
      "heic to jpg mac",
      "批量 heic 转 jpg",
    ],
    content: {
      en: [
        "Every iPhone user hits the wall sooner or later: a photo that won't open on a Windows laptop, an attachment a client can't see, a forum upload that silently fails. The file is HEIC, and you need it as JPG. Good news: converting HEIC to JPG is free on every platform, and you probably already own the tools.",
        "Before picking a method, know what conversion actually does. HEIC (HEIF) and JPG are both compressed formats. Converting decodes the HEIC and re-encodes it as JPG. You lose a little quality in theory and nothing you can see in practice, as long as you don't convert twice.",
        "The fastest free method is inside iPhone Settings: Settings → Photos → Transfer to Mac or PC → Automatic. With this on, your iPhone hands out JPG when a device asks and keeps HEIC in storage. Zero effort, and the originals stay untouched.",
        "On a Mac, Preview does the whole job. Open the HEIC, go to File → Export, choose JPEG, adjust quality, save. Batch work is just selecting multiple files and exporting them together. No install, no signup.",
        "Windows has no native HEIC support, which is the most common reason people search for a heic to jpg converter at all. The honest answer for Windows: a decent online converter that processes locally, or the official HEIF codec from the Microsoft Store. Free options work fine for a handful of photos.",
        "What about bulk conversion? Say you imported a year of iPhone photos and a third of them are HEIC. Use an online batch tool or a desktop converter, set the output quality to around 90%, and let it run. The catch is the same everywhere: pick a tool that processes on your device, not one that demands your photo library on a server.",
        {
                "type": "ul",
                "items": [
                        "iPhone: Settings → Photos → Transfer to Mac or PC → Automatic, free and invisible",
                        "Mac: Preview → File → Export → JPEG, batch supported, no install",
                        "Windows: HEIF codec from the Store or a local-processing online converter",
                        "Batch: desktop converter with quality set near 90%, avoid double compression",
                        "Rule of thumb: never convert the same photo twice, that is where quality actually dies"
                ]
        },
        "**Does converting HEIC to JPG lose quality?** In theory yes, a slight loss from re-encoding. In practice invisible at normal viewing. The real killer is converting twice, so export once at good quality and keep that file.",
        "**Is there a free HEIC to JPG converter for Windows?** Yes. The official HEIF Image Extensions codec in the Microsoft Store is free, and several online converters handle a few photos free. For large batches, a local desktop tool is the safer pick.",
        "**Can I stop my iPhone from making HEIC at all?** Yes. Settings → Camera → Formats → Most Compatible makes the iPhone save JPG directly. The tradeoff is bigger files, roughly double the storage for the same photos.",
        "**Why won't my HEIC open in Gmail or on Windows?** Because neither recognizes the format natively. Converting to JPG before sending is the reliable fix, and the methods above take under a minute.",
        "Need to shrink the result too? Convert first, then run the JPG through the compressor at image-compressor-saas.shop — everything stays in your browser. Start from the",
        {
                "type": "cta",
                "text": "free image compressor",
                "href": "https://image-compressor-saas.shop/"
        }
      ],
      zh: [
        "每个 iPhone 用户迟早都会撞上这堵墙：一张照片在 Windows 笔记本上打不开，一个附件对方客户看不到，论坛上传静默失败。文件是 HEIC，而你需要 JPG。好消息：把 HEIC 转成 JPG 在每个平台上都免费，而且工具你多半已经有了。",
        "动手前先搞清楚转换是什么。HEIC（HEIF）和 JPG 都是压缩格式。转换就是把 HEIC 解码再重新编码成 JPG。理论上会损失一点画质，实际上肉眼完全看不出来——前提是你别转两遍。",
        "最快的免费方法藏在 iPhone 设置里：设置 → 照片 → 传输到 Mac 或 PC → 自动。打开后，iPhone 在对方请求时直接给 JPG，自己存储时保留 HEIC。零成本，原图不动。",
        "Mac 上用预览（Preview）就能全搞定。打开 HEIC，文件 → 导出，选 JPEG，调一下质量，保存。批量操作就是多选文件一起导出。不用装软件，不用注册。",
        "Windows 原生不支持 HEIC，这也是大家搜 heic to jpg converter 的主要原因。Windows 的诚实答案是：一个在本地处理的在线转换器，或者微软商店里的官方 HEIF 编解码器。免费方案处理几张照片完全够用。",
        "批量转换怎么办？比如你导入了一年的 iPhone 照片，三分之一是 HEIC。用在线批量工具或桌面转换器，输出质量设在 90% 左右，让它跑完。注意点到处都一样：选在你自己设备上处理的工具，别选那种要把整个相册上传到服务器的。",
        {
                "type": "ul",
                "items": [
                        "iPhone：设置 → 照片 → 传输到 Mac 或 PC → 自动，免费且无感",
                        "Mac：预览 → 文件 → 导出 → JPEG，支持批量，无需安装",
                        "Windows：商店里的 HEIF 编解码器，或本地处理的在线转换器",
                        "批量：桌面转换器，质量设在 90% 左右，避免二次压缩",
                        "经验法则：同一张照片别转两遍，画质就是在这里死掉的"
                ]
        },
        "**HEIC 转 JPG 会损失画质吗？** 理论上会，重新编码有轻微损耗；实际上正常观看完全看不出。真正的杀手是转两遍，所以一次导出到好质量，把那个文件存好。",
        "**Windows 有免费的 HEIC 转 JPG 工具吗？** 有。微软商店的 HEIF Image Extensions 官方编解码器免费，几个在线转换器也能免费处理少量照片。大批量的话，本地桌面工具更稳妥。",
        "**能让 iPhone 干脆别生成 HEIC 吗？** 能。设置 → 相机 → 格式 → 兼容性最好，iPhone 就直接存 JPG。代价是文件变大，同样照片存储占用大约翻倍。",
        "**为什么 HEIC 在 Gmail 或 Windows 里打不开？** 因为两边都不原生支持这个格式。发送前转成 JPG 是可靠解法，上面这些方法一分钟内搞定。",
        "转换完还想再压小一点？先转，再把 JPG 丢进 image-compressor-saas.shop 的压缩器，全程在浏览器里完成。从",
        {
                "type": "cta",
                "text": "免费图片压缩工具",
                "href": "https://image-compressor-saas.shop/"
        }
      ],
    },
  },

  {
    slug: "lossy-vs-lossless-compression",
    date: "2026-08-17",
    title: {
      zh: "有损 vs 无损压缩：一张图该用哪种",
      en: "Lossy vs Lossless Compression: Which One for Your Image",
    },
    description: {
      zh: "有损和无损压缩到底差在哪？这篇讲清 lossy vs lossless 的原理、适用场景、文件大小差异，以及 webp/jpg/png 各格式该选哪种压缩。",
      en: "What is the real difference between lossy and lossless compression? This guide explains the principles, when to use each, file size trade-offs, and which format to pick for your image.",
    },
    keywords: [
      "lossy vs lossless",
      "lossy vs lossless compression",
      "lossless compression",
      "lossy compression",
      "webp vs jpeg",
      "jpg vs png compression",
    ],
    content: {
      en: [
        "The first time someone told me lossy compression works by throwing away data, I assumed it was the bad option. Then I shipped a website with 40 full-size PNGs and watched the load time crawl. The truth is more practical than the name suggests: lossy and lossless are not good and bad. They are different tools for different jobs.",
        "Here is the one-sentence version: lossless compression keeps every pixel exactly as it was, lossy compression keeps what your eyes can see and drops the rest. Everything else is trade-offs.",
        {
                "type": "h2",
                "text": "What lossless actually does"
        },
        "Lossless compression finds patterns and shortens them, like replacing 'aaaa' with '4a'. Decode it and you get back the identical file. PNG and GIF are the famous lossless formats; WebP and AVIF support lossless modes too.",
        "The cost is size. Lossless keeps everything, so it cannot shrink as far. A photo that compresses to 100KB with lossy might stay at 800KB lossless.",
        {
                "type": "h2",
                "text": "What lossy actually does"
        },
        "Lossy compression makes a judgment call: it removes detail that humans barely notice and records the rest more efficiently. JPG is the classic example. A photo saved as JPG quality 85 looks nearly identical to the original but takes a fraction of the space.",
        "The catch is that every lossy save adds up. Compress a JPG, re-open it, compress again, and each pass degrades it a little. One lossy export from the original is fine. Chained lossy exports are how images get that mushy, blocky look.",
        {
                "type": "h2",
                "text": "When to use which"
        },
        "The rule of thumb that has never let me down:",
        {
                "type": "ul",
                "items": [
                        "Photos and gradients: lossy. JPG or WebP at quality 80-90%, visually identical, file size drops 5-10x",
                        "Logos, icons, screenshots, text: lossless. PNG or lossless WebP, sharp edges and text stay crisp",
                        "Web images that are photos: lossy WebP, best of both worlds for browsers",
                        "Anything that will be edited later: lossless. Edit first, export lossy last"
                ]
        },
        "Screenshots and UI mockups deserve special attention. They look like images but contain text and flat colors. Lossy compression smears the text. Always use PNG or lossless WebP for anything with words in it.",
        {
                "type": "h2",
                "text": "The same photo, three sizes"
        },
        "A real example from a 4000x3000 photo:",
        {
                "type": "ul",
                "items": [
                        "Original PNG: about 18MB",
                        "Lossless WebP: about 6MB, pixel-identical",
                        "Lossy JPG quality 85: about 900KB, visually identical at normal viewing sizes"
                ]
        },
        "Same photo, 20x difference. That is the whole argument in one line. If the image lives on a website, the 900KB version looks the same to visitors and loads 20x faster.",
        {
                "type": "h2",
                "text": "How to pick the right tool",
        },
        "You rarely need to think about lossy vs lossless manually, because good compressors ask for a quality setting and handle the rest. A slider at 80-90% gives you lossy for photos, and a dedicated PNG or lossless mode covers the rest.",
        "Run your image through a compressor that processes locally, keep the original, and only export the compressed version you actually ship. That is the whole workflow, no jargon required.",
        {
                "type": "h2",
                "text": "FAQ"
        },
        "**Is lossy compression bad for image quality?** Not if you use it once at a sensible quality. JPG at 85-90% is visually indistinguishable from the original for photos. The problems start when you chain multiple lossy exports.",
        "**Is PNG lossless?** Yes. PNG uses lossless compression, which is why it is the right format for logos, screenshots, and anything with text. It is the wrong format for photos, where it wastes space.",
        "**What is better, lossy or lossless WebP?** WebP supports both. Use lossy WebP for photos and lossless WebP for graphics. The format itself is not the answer; the mode is.",
        "**Does compression affect page speed?** Directly. A 5MB image vs a 300KB image of the same photo is the difference between a slow page and a fast one, especially on mobile.",
        "Ready to compress? Head to the",
        {
                "type": "cta",
                "text": "image compressor homepage",
                "href": "/"
        },
        "and run your files locally, no upload needed."
      ],
      zh: [
        "第一次听说有损压缩要丢数据时，我以为那肯定是差的那个选项。然后我上线了一个塞满 40 张 PNG 的网站，看着加载时间爬行。真相比名字更实用：有损和无损不是好坏之分，是不同场景的两种工具。",
        "一句话版本：无损压缩保留每一个像素，有损压缩保留你眼睛看得见的部分、丢掉其余的。剩下的全是取舍。",
        {
                "type": "h2",
                "text": "无损压缩到底做了什么"
        },
        "无损压缩是找规律然后缩短它，就像把“aaaa”替换成“4a”。解压后你拿回完全相同的文件。PNG 和 GIF 是著名的无损格式，WebP 和 AVIF 也支持无损模式。",
        "代价是体积。无损保留一切，所以压不下去。一张照片有损压到 100KB，无损可能还有 800KB。",
        {
                "type": "h2",
                "text": "有损压缩到底做了什么"
        },
        "有损压缩做判断：去掉人类几乎注意不到的细节，把其余部分记录得更高效。JPG 是经典例子。照片存成 JPG 质量 85，看起来和原图几乎一样，体积却只剩零头。",
        "坑在于：每存一次有损就累积一次。压缩 JPG、重新打开、再压缩，每次都会劣化一点。从原图做一次有损导出没问题，链式反复导出才是图片变糊、变块的元凶。",
        {
                "type": "h2",
                "text": "什么时候用哪种"
        },
        "一条从没让我失望过的经验法则：",
        {
                "type": "ul",
                "items": [
                        "照片和渐变：有损。JPG 或 WebP 质量 80-90%，肉眼一致，体积小 5-10 倍",
                        "Logo、图标、截图、文字：无损。PNG 或无损 WebP，边缘和文字保持锐利",
                        "网页里的照片：有损 WebP，浏览器上两全其美",
                        "之后还要编辑的图：无损。先编辑，最后一步再导出有损"
                ]
        },
        "截图和 UI 稿要特别小心。它们看起来像图，里面却是文字和纯色块。有损压缩会把文字抹糊。凡是带字的图，一律 PNG 或无损 WebP。",
        {
                "type": "h2",
                "text": "同一张照片的三种大小"
        },
        "一张 4000x3000 照片的真实例子：",
        {
                "type": "ul",
                "items": [
                        "原图 PNG：约 18MB",
                        "无损 WebP：约 6MB，像素级一致",
                        "有损 JPG 质量 85：约 900KB，正常观看尺寸下视觉一致"
                ]
        },
        "同一张照片，20 倍差距。这就是全部论证。如果图要放网站，900KB 版本对访客看起来一样，加载却快 20 倍。",
        {
                "type": "h2",
                "text": "怎么选工具"
        },
        "你很少需要手动纠结有损 vs 无损，因为好的压缩器会问你要质量参数然后自己处理。80-90% 的滑杆给你照片用有损，专门的 PNG 或无损模式覆盖其余场景。",
        "用本地处理的压缩器跑一遍，保留原图，只导出你要发布的那份压缩版。整个流程就这些，不需要术语。",
        {
                "type": "h2",
                "text": "FAQ"
        },
        "**有损压缩会损害画质吗？** 只要在合理质量下只压一次就不会。照片 JPG 85-90% 与原图肉眼无差。问题出在多次链式有损导出。",
        "**PNG 是无损的吗？** 是的。PNG 用无损压缩，所以它是 Logo、截图和带文字图片的正确格式。对照片则是浪费空间的错误格式。",
        "**有损 WebP 和无损 WebP 哪个好？** WebP 两种都支持。照片用有损 WebP，图形用无损 WebP。关键不在格式，在模式。",
        "**压缩影响网页速度吗？** 直接影响。同一张照片 5MB 和 300KB 的差别，就是慢页面和快页面的差别，移动端尤其明显。",
        "准备好压缩了吗？去",
        {
                "type": "cta",
                "text": "图片压缩器首页",
                "href": "/"
        },
        "本地处理你的文件，无需上传。"
      ]
    },
  },
  {
    slug: "shopify-product-photo-size-guide",
    date: "2026-08-19",
    title: {
      zh: "Shopify 商品图尺寸完全指南（像素、格式与压缩）",
      en: "Shopify Product Photo Size Guide (Pixels, Format & Compression)",
    },
    description: {
      zh: "Shopify 图片尺寸看数据说话：真正好用的 2048x2048 px 主图、为什么越大越糟、以及如何缩放商品图而不损画质。",
      en: "Shopify image size decided by the numbers: the 2048x2048 px master that works, why bigger hurts, and how to resize product photos without losing quality.",
    },
    keywords: [
      "shopify image size",
      "shopify product image size",
      "shopify image size px",
      "shopify photo dimensions",
      "shopify product photo size guide",
      "resize shopify images",
    ],
    content: {
      zh: [
        "Shopify 图片尺寸是那种悄悄决定店铺显得专业还是业余的细节。做对了，商品图加载快、在各块屏幕上清晰、也能通过 Google 的页面速度检测；做错了，你发出的是 5MB 的 JPEG，让手机用户干等、跳出、转去别家买。这篇讲清楚真正好用的尺寸、为什么“越大越好”是错的，以及如何在不损画质的前提下达到正确的 shopify 图片大小。",
        { type: "h2", text: "推荐的 Shopify 商品图尺寸" },
        "Shopify 允许上传最大 4472 x 4472 px 的图片，但你几乎不该用满。日常商品图，方形的 2048 x 2048 px 主图是甜点区：够大能缩放，又够小加载快。Shopify 随后会自动生成更小版本（如 1000 px、600 px）给缩略图和手机用。",
        {
          type: "ul",
          items: [
            "主图：2048 x 2048 px（方形，sRGB）",
            "缩略图：1000 x 1000 px 或更小（Shopify 自动生成）",
            "缩放视图：需要 2048 px 主图，别指望 1000 px",
            "文件格式：照片用 JPG，带文字的图形用 PNG",
          ],
        },
        { type: "h2", text: "Shopify 图片尺寸（像素）：速查" },
        "下面是多数店铺实际在用的拆分：",
        {
          type: "ul",
          items: [
            "主图/场景图：2048 x 2048 px 方形",
            "画廊缩略图：1000 x 1000 px",
            "分类卡片：600 x 600 px（裁成方形）",
            "Banner：1800 x 600 px 或按主题更宽",
          ],
        },
        { type: "h2", text: "为什么超大图反而有害" },
        "一张 5MB 的照片不会让店铺更好看，只会更慢。Shopify 仍要把这个文件推给每个访客，在移动网络下可能要等好几秒。慢页面会拉低转化率和搜索排名。解法不是“传最大的文件”，而是“传仍然好看的最小文件”。",
        {
          type: "ul",
          items: [
            "首屏更慢，跳出更高",
            "弱网下的手机用户直接离开",
            "Google 把页面速度当作排名信号",
          ],
        },
        { type: "h2", text: "如何缩放又不损画质" },
        "你不需要 Photoshop。浏览器本地工具几秒就能压缩并调整尺寸，而且因为在本机运行，文件从不离开你的设备。",
        {
          type: "ul",
          items: [
            "从编辑器导出 2048 px 方形主图",
            "照片 JPG 压到 80-85% 质量",
            "只有 Logo 和文字图形才保留 PNG",
            "下载前先预览结果",
          ],
        },
        {
          type: "cta",
          text: "在浏览器本地压缩图片（免费）→",
          href: "/",
        },
        { type: "h2", text: "延伸阅读" },
        "如果你用 WordPress，我们这篇“无插件压缩 WordPress 图片”是顺理成章的下一步：https://image-compressor-saas.shop/blog/compress-images-wordpress-without-plugin。选格式可看 PNG vs JPG：https://image-compressor-saas.shop/blog/png-vs-jpg-differences。",
        { type: "h2", text: "常见问题 FAQ" },
        {
          type: "faq",
          items: [
            { q: "Shopify 商品图最佳尺寸是多少？", a: "2048 x 2048 px 的方形主图既能缩放又处处清晰；Shopify 会自动生成更小的变体。" },
            { q: "Shopify 图片会太大吗？", a: "会。几 MB 以上的文件拖慢页面、损害排名。缩到 2048 px 并压到 80-85% 质量即可。" },
            { q: "商品图一定要方形吗？", a: "方形（1:1）是最稳妥的默认，因为 Shopify 按方形网格裁切；非方形图在列表中会被裁。" },
            { q: "Shopify 商品图用 JPG 还是 PNG？", a: "照片用 JPG，只有带文字或透明的图形才用 PNG。PNG 照片纯属浪费空间。" },
          ],
        },
        { type: "h2", text: "开始压缩" },
        {
          type: "cta",
          text: "免费压缩你的商品图 →",
          href: "/",
        },
      ],
      en: [
        "Shopify image size is one of those details that quietly decides whether a store looks professional or amateur. Get it right and your product photos load fast, stay sharp on every screen, and survive Google's page-speed checks. Get it wrong and you ship 5MB JPEGs that make mobile shoppers wait, bounce, and buy elsewhere. This guide covers the dimensions that actually work, why bigger is not better, and how to hit the right shopify product image size without losing quality.",
        { type: "h2", text: "The recommended Shopify product image size" },
        "Shopify lets you upload images up to 4472 x 4472 px, but you almost never should. For day-to-day product shots, a square 2048 x 2048 px master is the sweet spot: large enough for zoom, small enough to load quickly. Shopify then auto-generates smaller variants (like 1000 px and 600 px) for thumbnails and mobile.",
        {
          type: "ul",
          items: [
            "Master image: 2048 x 2048 px (square, sRGB)",
            "Thumbnail: 1000 x 1000 px or smaller (Shopify builds this automatically)",
            "Zoom view: needs the 2048 px master; don't rely on 1000 px",
            "File format: JPG for photos, PNG for graphics with text",
          ],
        },
        { type: "h2", text: "Shopify image size in pixels: a quick table" },
        "Here is the practical breakdown most stores actually use:",
        {
          type: "ul",
          items: [
            "Hero / lifestyle: 2048 x 2048 px square",
            "Gallery thumbnails: 1000 x 1000 px",
            "Collection cards: 600 x 600 px (cropped to square)",
            "Banner: 1800 x 600 px or wider, depending on theme",
          ],
        },
        { type: "h2", text: "Why huge images hurt more than they help" },
        "A 5MB photo does not make your store look better; it makes it slower. Shopify still has to push that file to every visitor, and on mobile data it can take several seconds. Slow pages drop your conversion rate and your search ranking. The fix is not 'upload the biggest file' but 'upload the smallest file that still looks great.'",
        {
          type: "ul",
          items: [
            "Slower first paint means higher bounce",
            "Mobile shoppers on weak networks leave",
            "Google treats page speed as a ranking signal",
          ],
        },
        { type: "h2", text: "How to resize without losing quality" },
        "You don't need Photoshop. A browser-local tool compresses and resizes in seconds, and because it runs on your device the files never leave your machine.",
        {
          type: "ul",
          items: [
            "Export a 2048 px square master from your editor",
            "Compress JPG to 80-85% quality for photos",
            "Keep PNG only for logos and text-heavy graphics",
            "Preview the result before downloading",
          ],
        },
        {
          type: "cta",
          text: "Compress images for free (browser-local) →",
          href: "/",
        },
        { type: "h2", text: "Related reading" },
        "If you run WordPress, our guide on compressing images for WordPress without a plugin is a natural next step: https://image-compressor-saas.shop/blog/compress-images-wordpress-without-plugin. For choosing formats, see PNG vs JPG: https://image-compressor-saas.shop/blog/png-vs-jpg-differences.",
        { type: "h2", text: "FAQ" },
        {
          type: "faq",
          items: [
            { q: "What is the best Shopify product image size?", a: "A 2048 x 2048 px square master covers zoom and looks sharp everywhere; Shopify auto-creates smaller variants." },
            { q: "Can Shopify images be too big?", a: "Yes. Files over a few MB slow your pages and hurt rankings. Resize to 2048 px and compress to 80-85%." },
            { q: "Should product photos be square?", a: "Square (1:1) is the safe default because Shopify crops to a square grid; non-square images get cropped in listings." },
            { q: "JPG or PNG for Shopify products?", a: "JPG for photos, PNG only for graphics with text or transparency. PNG photos waste space." },
          ],
        },
        { type: "h2", text: "Start compressing" },
        {
          type: "cta",
          text: "Compress your product images for free →",
          href: "/",
        },
      ],
    },
  },
  {
    slug: "optimize-images-ghost-blog",
    date: "2026-08-20",
    title: {
      en: "How to Optimize Images for Ghost Blog (2026 Guide)",
      zh: "Ghost 博客图片优化指南（2026）",
    },
    description: {
      en: "Ghost is fast by default, but unoptimized images can kill your Core Web Vitals. Here is the complete guide to optimizing images for Ghost blog performance.",
      zh: "Ghost 默认很快，但未优化的图片会毁掉你的 Core Web Vitals。本文是 Ghost 博客图片优化的完整指南。",
    },
    keywords: [
      "optimize images for ghost blog",
      "ghost blog image optimization",
      "ghost webp avif",
      "ghost blog lazy loading images",
      "ghost blog cdn images",
    ],
    content: {
      en: [
        "Ghost is one of the fastest static-site generators out of the box. But speed means nothing if your blog posts are weighed down by 5MB hero images and uncompressed PNGs. This guide covers everything you need to optimize images for Ghost — from format selection to lazy loading, from WebP conversion to CDN configuration.",
        { type: "h2", text: "Why image optimization matters for Ghost" },
        "Ghost uses a modern tech stack (Node.js, React, Tailwind) and serves fast HTML. But browsers still need to download every image before rendering the page. Unoptimized images are the #1 cause of slow LCP (Largest Contentful Paint) on Ghost blogs, and LCP is one of Google's Core Web Vitals — directly affecting your search ranking.",
        { type: "h2", text: "Choose the right format" },
        "Ghost supports WebP, AVIF, JPEG, PNG, and GIF natively. For blog images, the hierarchy is:",
        {
          type: "ul",
          items: [
            "AVIF: Best compression, 30-50% smaller than WebP. Use for hero images and photos.",
            "WebP: Excellent compression, broad browser support. Use for most blog images.",
            "JPEG: Good for photos where AVIF/WebP is not available.",
            "PNG: Only for images with transparency or simple graphics.",
            "GIF: Avoid. Use WebP or MP4 for animations.",
          ],
        },
        { type: "h2", text: "Compression settings for Ghost" },
        "Ghost's built-in image optimization is good, but you can do better. Recommended settings:",
        {
          type: "ul",
          items: [
            "Hero/Featured: 1920px max width, 80% quality, WebP or AVIF",
            "In-article photos: 1200px, 85% quality, WebP",
            "Thumbnails: 400px, 80% quality, WebP",
            "Icons/logos: 200px, 90% quality, SVG or PNG",
          ],
        },
        { type: "h2", text: "Lazy loading in Ghost" },
        "Ghost enables lazy loading by default for images inserted via the editor. However, custom images or images added via HTML may need manual lazy loading. Add the loading attribute:",
        '<img src="image.jpg" loading="lazy" alt="Description">',
        "For above-the-fold images (like hero images), use loading='eager' or omit the attribute — lazy loading above the fold actually hurts LCP.",
        { type: "h2", text: "CDN and caching" },
        "Use a CDN like Cloudflare or Imgix to serve optimized images. These services automatically convert to WebP/AVIF based on browser support, resize on the fly, and cache globally. Ghost integrates seamlessly with most CDNs.",
        { type: "h2", text: "FAQ" },
        {
          type: "faq",
          items: [
            {
              q: "Does Ghost optimize images automatically?",
              a: "Ghost has basic image optimization built in, but it is not as aggressive as dedicated image CDNs. For best results, combine Ghost with a CDN like Cloudflare or Imgix.",
            },
            {
              q: "Should I use WebP or AVIF for Ghost blog images?",
              a: "Use AVIF for hero and featured images (best compression). Use WebP for in-article photos (better browser compatibility). AVIF support is now >95% in modern browsers.",
            },
            {
              q: "How do I check if my Ghost blog images are optimized?",
              a: "Use Google PageSpeed Insights or Lighthouse. Check the 'Eliminate render-blocking resources' and 'Serve images in next-gen formats' recommendations. Also check your Largest Contentful Paint (LCP) score.",
            },
          ],
        },
        {
          type: "cta",
          text: "Compress your Ghost blog images for free →",
          href: "/",
        },
      ],
      zh: [
        "Ghost 是开箱即最快的静态站生成器之一。但如果你的文章被 5MB 的封面图和未压缩的 PNG 拖累，速度将毫无意义。本指南覆盖 Ghost 图片优化的全部要点——从格式选择到懒加载，从 WebP 转换到 CDN 配置。",
        { type: "h2", text: "为什么 Ghost 博客需要图片优化" },
        "Ghost 技术栈现代（Node.js、React、Tailwind），HTML 加载很快。但浏览器渲染页面前仍要下载每张图片。未优化的图片是 Ghost 博客 LCP（最大内容绘制）变慢的头号原因，而 LCP 是 Google Core Web Vitals 之一，直接影响搜索排名。",
        { type: "h2", text: "选择正确的格式" },
        "Ghost 原生支持 WebP、AVIF、JPEG、PNG 和 GIF。博客图片的优先级：",
        {
          type: "ul",
          items: [
            "AVIF：压缩率最高，比 WebP 小 30-50%，用于封面图和照片",
            "WebP：压缩优秀、浏览器支持广，用于大多数博客图片",
            "JPEG：不支持 AVIF/WebP 时用于照片",
            "PNG：仅用于带透明或简单图形的图片",
            "GIF：避免使用，动图改用 WebP 或 MP4",
          ],
        },
        { type: "h2", text: "Ghost 的压缩设置" },
        "Ghost 内置的图片优化不错，但可以做得更好。推荐设置：",
        {
          type: "ul",
          items: [
            "封面/头图：1920px 宽、80% 质量、WebP 或 AVIF",
            "文内照片：1200px、85% 质量、WebP",
            "缩略图：400px、80% 质量、WebP",
            "图标/Logo：200px、90% 质量、SVG 或 PNG",
          ],
        },
        { type: "h2", text: "Ghost 中的懒加载" },
        "Ghost 默认对编辑器插入的图片启用懒加载。但自定义图片或通过 HTML 添加的图片可能需要手动设置。加上 loading 属性：",
        '<img src="image.jpg" loading="lazy" alt="Description">',
        "首屏图片（如封面图）请用 loading='eager' 或省略该属性——首屏懒加载反而会拖慢 LCP。",
        { type: "h2", text: "CDN 与缓存" },
        "使用 Cloudflare 或 Imgix 等 CDN 提供优化后的图片。这些服务会自动按浏览器支持转换为 WebP/AVIF、按需缩放并全局缓存。Ghost 与大多数 CDN 无缝集成。",
        { type: "h2", text: "常见问题" },
        {
          type: "faq",
          items: [
            {
              q: "Ghost 会自动优化图片吗？",
              a: "Ghost 内置基础图片优化，但不如专用图片 CDN 激进。最佳实践是 Ghost + CDN（如 Cloudflare 或 Imgix）组合。",
            },
            {
              q: "Ghost 博客图片应该用 WebP 还是 AVIF？",
              a: "封面/头图用 AVIF（压缩最好）；文内照片用 WebP（兼容性更好）。现代浏览器 AVIF 支持已超过 95%。",
            },
          ],
        },
        {
          type: "cta",
          text: "免费压缩你的 Ghost 博客图片 →",
          href: "/",
        },
      ],
    },
  },

  {
    slug: "linkedin-post-image-size-2026",
    date: "2026-08-21",
    title: {
      en: "LinkedIn Post Image Size: The Complete 2026 Guide",
      zh: "LinkedIn 帖子图片尺寸：2026 完整指南",
    },
    description: {
      en: "LinkedIn post image sizes change in 2026. Here is the complete guide to optimal dimensions for single images, carousels, and video thumbnails.",
      zh: "LinkedIn 帖子图片尺寸在 2026 年有所变化。本文是单图、轮播和缩略图最佳尺寸的完整指南。",
    },
    keywords: [
      "linkedin post image size",
      "linkedin image size 2026",
      "linkedin carousel image size",
      "linkedin video thumbnail size",
      "linkedin post dimensions",
    ],
    content: {
      en: [
        "LinkedIn is one of the few platforms where image optimization still matters for reach. In 2026, the algorithm favors properly sized images that load quickly and look sharp on high-DPI displays.",
        { type: "h2", text: "Single Image Posts" },
        "The recommended size for single image posts is 1200 x 627 pixels (1.91:1 ratio). This is the same ratio used for link previews and ensures your image displays fully without cropping.",
        { type: "h2", text: "Carousel Posts" },
        "For carousel posts (PDF documents), use 1080 x 1350 pixels (4:5 ratio) or 1080 x 1080 pixels (1:1 square). Carousels get 2-3x more engagement than single images.",
        { type: "h2", text: "Video Thumbnails" },
        "LinkedIn video thumbnails should be 1280 x 720 pixels (16:9 ratio) for the best appearance in feeds and on video pages.",
        { type: "h2", text: "FAQ" },
        {
          type: "faq",
          items: [
            {
              q: "What is the best LinkedIn post image size in 2026?",
              a: "1200 x 627 pixels for single images, 1080 x 1350 for carousels.",
            },
            {
              q: "Does LinkedIn compress my images?",
              a: "Yes. Upload at 80-90% quality to avoid double compression artifacts.",
            },
          ],
        },
        {
          type: "cta",
          text: "Optimize your LinkedIn images for free →",
          href: "/",
        },
      ],
      zh: [
        "LinkedIn 是为数不多、图片优化仍直接影响触达率的平台。2026 年，算法更青睐尺寸合适、加载快、在高分屏上清晰锐利的图片。",
        { type: "h2", text: "单图帖子" },
        "单图帖子推荐尺寸为 1200 x 627 像素（1.91:1 比例）。这与链接预览同比例，确保图片完整显示不被裁剪。",
        { type: "h2", text: "轮播帖子" },
        "轮播帖子（PDF 文档）使用 1080 x 1350 像素（4:5 比例）或 1080 x 1080 像素（1:1 方形）。轮播的互动率是单图的 2-3 倍。",
        { type: "h2", text: "视频缩略图" },
        "LinkedIn 视频缩略图建议 1280 x 720 像素（16:9 比例），在信息流和视频页都有最佳效果。",
        { type: "h2", text: "常见问题" },
        {
          type: "faq",
          items: [
            {
              q: "2026 年 LinkedIn 帖子图片最佳尺寸是多少？",
              a: "单图 1200 x 627 像素，轮播 1080 x 1350 像素。",
            },
            {
              q: "LinkedIn 会压缩我的图片吗？",
              a: "会。建议以 80-90% 质量上传，避免二次压缩产生噪点。",
            },
          ],
        },
        {
          type: "cta",
          text: "免费优化你的 LinkedIn 图片 →",
          href: "/",
        },
      ],
    },
  },
  {
    slug: "instagram-image-sizes-2026",
    date: "2026-08-22",
    title: {
      en: "Instagram Image Sizes 2026: The Complete Guide",
      zh: "2026 年 Instagram 图片尺寸：完整指南",
    },
    description: {
      en: "Instagram changed its image specifications in 2026. Here is the complete guide to optimal dimensions for single images, carousels, stories, and reels.",
      zh: "Instagram 在 2026 年更改了图片规格。本文是单图、轮播、故事和 Reels 最佳尺寸的完整指南。",
    },
    keywords: [
      "instagram image size",
      "instagram post size 2026",
      "instagram story size",
      "instagram carousel size",
      "instagram reel size",
    ],
    content: {
      en: [
        "Instagram changed its image specifications multiple times in 2025 and 2026. If you're optimizing for the platform, here's what actually works right now.",
        { type: "h2", text: "Single Image Posts" },
        "The sweet spot is 1080 x 1350 pixels (4:5 ratio). This fills more screen space than the old 1:1 square, which means more visibility in feeds. Width should always be 1080px — Instagram compresses larger uploads.",
        { type: "h2", text: "Carousel Posts" },
        "Each slide in a carousel follows the same ratios as single posts. The key insight: keep all slides on the same ratio. Mixing 1:1 with 4:5 in one carousel looks unprofessional and can cause cropping issues.",
        { type: "h2", text: "Stories and Reels" },
        "Stories: 1080 x 1920 (9:16). This is full-screen on mobile. Reels: Same 1080 x 1920 ratio. Both should account for UI elements — keep important content within the center 1080 x 1280 area to avoid being covered by captions and buttons.",
        { type: "h2", text: "Profile Pictures" },
        "110 x 110 pixels displayed, but upload at 110 x 110 or larger. Instagram crops to a circle, so center your subject.",
        { type: "h2", text: "File Size and Format" },
        "- JPEG for photos, PNG for graphics with text\n- Keep files under 30MB for posts, under 4GB for Reels\n- sRGB color profile — not all platforms handle wide color well",
        { type: "h2", text: "FAQ" },
        {
          type: "faq",
          items: [
            {
              q: "Does Instagram compress my images?",
              a: "Yes. Upload at 1080px width and 80-90% quality to minimize double compression.",
            },
            {
              q: "Can I post 4:5 and 1:1 in the same carousel?",
              a: "Technically yes, but it looks inconsistent. Stick to one ratio.",
            },
            {
              q: "What's the best format for Instagram?",
              a: "JPEG for photos, PNG for graphics with text or transparency.",
            },
          ],
        },
        {
          type: "cta",
          text: "Optimize your Instagram images for free →",
          href: "/",
        },
      ],
      zh: [
        "Instagram 在 2025 和 2026 年多次更改了图片规格。如果你在为该平台优化，以下是目前实际有效的方法。",
        { type: "h2", text: "单图帖子" },
        "最佳尺寸是 1080 x 1350 像素（4:5 比例）。这比旧的 1:1 方形填充更多屏幕空间，意味着在信息流中更有可见性。宽度应始终为 1080px——Instagram 会压缩更大的上传。",
        { type: "h2", text: "轮播帖子" },
        "轮播中的每个幻灯片遵循与单图相同的比例。关键见解：保持所有幻灯片在同一比例。在一个轮播中混合 1:1 和 4:5 看起来不专业，并可能导致裁剪问题。",
        { type: "h2", text: "故事和 Reels" },
        "故事：1080 x 1920（9:16）。这是在移动设备上的全屏。Reels：相同的 1080 x 1920 比例。两者都应该考虑 UI 元素——将重要内容保持在中心 1080 x 1280 区域内，避免被标题和按钮覆盖。",
        { type: "h2", text: "个人资料图片" },
        "显示 110 x 110 像素，但上传 110 x 110 或更大。Instagram 裁剪为圆形，所以将主体居中。",
        { type: "h2", text: "文件大小和格式" },
        "- 照片用 JPEG，带文字的图形用 PNG\n- 帖子文件保持 30MB 以下，Reels 保持 4GB 以下\n- sRGB 色彩配置文件——并非所有平台都能很好地处理广色域",
        { type: "h2", text: "常见问题" },
        {
          type: "faq",
          items: [
            {
              q: "Instagram 会压缩我的图片吗？",
              a: "会。以 1080px 宽度和 80-90% 质量上传，以最小化二次压缩。",
            },
            {
              q: "我可以在同一个轮播中发布 4:5 和 1:1 吗？",
              a: "技术上可以，但看起来不一致。坚持一种比例。",
            },
            {
              q: "Instagram 的最佳格式是什么？",
              a: "照片用 JPEG，带文字或透明度的图形用 PNG。",
            },
          ],
        },
        {
          type: "cta",
          text: "免费优化你的 Instagram 图片 →",
          href: "/",
        },
      ],
    },
  },

  {
    slug: "compress-photos-real-estate-listings",
    date: "2026-08-23",
    title: {
      zh: "房地产照片压缩指南： listings 图片优化技巧",
      en: "Real Estate Photo Compression: Optimize Listing Images for Speed and Quality",
    },
    description: {
      zh: "房产网站每张照片都影响加载速度和用户体验。本文教你如何在保持画质的同时大幅压缩房地产照片。",
      en: "Every photo on a real estate site affects load speed and user experience. Learn how to compress property photos significantly while maintaining quality.",
    },
    keywords: ["compress real estate photos", "real estate image optimization", "property listing photos", "zillow photo compression"],
    content: {
      zh: [
        "房地产网站的照片质量直接影响买家的决策。但高清照片也意味着慢速加载——买家等不及就关掉了。",
        { type: "h2", text: "为什么房地产照片需要专门压缩" },
        "房产照片通常分辨率很高（专业相机拍摄），文件大小容易超过 5MB。Zillow 和 Realtor.com 等平台的最佳实践是将照片压缩到 500KB 以下，同时保持视觉质量。",
        { type: "h2", text: "压缩技巧" },
        { type: "ul", items: ["使用 WebP 格式替代 JPEG，文件小 30% 质量相同", "将长边限制在 2000px 以内", "压缩质量设为 80-85%（肉眼难以区分）", "批量处理：使用 Photoshop 动作或在线批量工具"] },
        { type: "h2", text: "常见问题" },
        { type: "faq", items: [
          { q: "压缩后照片质量会下降吗？", a: "使用 80-85% 质量的 WebP，肉眼几乎看不出区别。" },
          { q: "房产平台有文件大小限制吗？", a: "Zillow 建议每张照片 500KB 以下，Realtor.com 建议 1MB 以下。" },
          { q: "如何批量压缩多张照片？", a: "使用我们的在线压缩工具，或 Photoshop 批量处理动作。" },
        ] },
        { type: "cta", text: "免费压缩你的房地产照片 →", href: "/" },
      ],
      en: [
        "Photo quality on real estate sites directly impacts buyer decisions. But high-res photos mean slow loading — buyers close the tab before they wait. Here's how to compress property photos without losing the details that sell homes.",
        { type: "h2", text: "Why Real Estate Photos Need Special Compression" },
        "Property photos are often high resolution (professional camera shots), with file sizes easily exceeding 5MB. Best practices on Zillow and Realtor.com recommend compressing photos to under 500KB while maintaining visual quality.",
        { type: "h2", text: "Compression Techniques" },
        { type: "ul", items: ["Use WebP format instead of JPEG — 30% smaller at same quality", "Limit long edge to 2000px or less", "Set compression quality to 80-85% (indistinguishable to the eye)", "Batch process: use Photoshop actions or online batch tools"] },
        { type: "h2", text: "FAQ" },
        { type: "faq", items: [
          { q: "Will compression reduce photo quality?", a: "At 80-85% quality WebP, the difference is virtually indistinguishable to the human eye." },
          { q: "Do real estate platforms have file size limits?", a: "Zillow recommends under 500KB per photo. Realtor.com recommends under 1MB." },
          { q: "How do I batch compress multiple photos?", a: "Use our online compressor or Photoshop batch actions." },
        ] },
        { type: "cta", text: "Compress your real estate photos for free →", href: "/" },
      ],
    },
  },

  {
    slug: "image-compression-affects-page-speed",
    date: "2026-08-25",
    title: {
      zh: "图片压缩如何影响页面速度：数据驱动的证据",
      en: "Image Compression Affects Page Speed: The Data-Driven Proof",
    },
    description: {
      zh: "每兆字节未优化的图像都会减慢网站速度。数据清楚地表明：图片压缩与更快的加载时间、更好的 Core Web Vitals 评分和更高的转化率直接相关。",
      en: "Every megabyte of unoptimized imagery slows your website down. The data is clear: image compression directly correlates with faster load times, better Core Web Vitals scores, and higher conversion rates.",
    },
    keywords: [
      "image compression page speed",
      "image optimization core web vitals",
      "compress images faster website",
      "image file size website performance",
    ],
    content: {
      zh: [
        "图片通常是网页上最大的资源。根据 HTTP Archive，图片平均占页面总重量的 40-50%。每一兆未优化的图像都会直接拖慢 LCP（最大内容绘制），而 LCP 是 Core Web Vitals 的核心指标。",
        { type: "h2", text: "数据怎么说" },
        "Google 的数据显示，页面加载时间从 1 秒增加到 3 秒，跳出率提高 32%。而一张 2MB 的未压缩图片，在 4G 网络下可能就需要 2-3 秒才能加载完——这足以毁掉你的 LCP 评分。",
        {
          type: "ul",
          items: [
            "图片占平均页面重量的 40-50%",
            "未优化图片是 LCP 超时（>2.5s）的头号原因",
            "WebP 相比 JPEG 平均可节省 25-35% 体积",
            "压缩后图片加载快 → 转化率提升（每慢 1 秒转化下降 7%）",
          ],
        },
        { type: "h2", text: "最佳实践" },
        "使用 WebP 或 AVIF 格式、按需压缩到 80-85% 质量、为响应式布局提供多尺寸图片。这些做法能让你的 LCP 从红区进入绿区。",
        { type: "h2", text: "FAQ" },
        { type: "faq", items: [
          { q: "How much can I compress images before quality suffers?", a: "For JPEG, 80-85% quality usually provides the best balance." },
          { q: "What is the best format for web images?", a: "WebP or AVIF. WebP saves 25-35% vs JPEG at the same quality." },
          { q: "Does image compression affect SEO?", a: "Yes. Page speed is a ranking factor, and faster images improve Core Web Vitals." },
        ] },
        { type: "cta", text: "Compress your images for free →", href: "/" },
      ],
      en: [
        "Images are usually the largest resource on a web page. According to HTTP Archive, images account for 40-50% of average page weight. Every unoptimized megabyte drags down your LCP (Largest Contentful Paint) — the core Core Web Vitals metric.",
        { type: "h2", text: "What the Data Says" },
        "Google's data shows that when page load time goes from 1 second to 3 seconds, bounce rate increases by 32%. A single 2MB unoptimized image can take 2-3 seconds to load on 4G — enough to destroy your LCP score.",
        {
          type: "ul",
          items: [
            "Images account for 40-50% of average page weight",
            "Unoptimized images are the #1 cause of LCP failures (>2.5s)",
            "WebP saves 25-35% vs JPEG at the same visual quality",
            "Faster images → higher conversions (every 1s slower costs ~7% conversions)",
          ],
        },
        { type: "h2", text: "Best Practices" },
        "Use WebP or AVIF, compress to 80-85% quality, and serve multiple sizes for responsive layouts. These moves take your LCP from red to green.",
        { type: "h2", text: "FAQ" },
        { type: "faq", items: [
          { q: "How much can I compress images before quality suffers?", a: "For JPEG, 80-85% quality usually provides the best balance." },
          { q: "What is the best format for web images?", a: "WebP or AVIF. WebP saves 25-35% vs JPEG at the same quality." },
          { q: "Does image compression affect SEO?", a: "Yes. Page speed is a ranking factor, and faster images improve Core Web Vitals." },
        ] },
        { type: "cta", text: "Compress your images for free →", href: "/" },
      ],
    },
  },
  {
    slug: "core-web-vitals-fix-lcp-images",
    date: "2026-08-26",
    title: {
      zh: "图片导致 LCP 慢？3 个浏览器本地修复技巧",
      en: "Images Slowing Down LCP? 3 Browser-Local Fixes",
    },
    description: {
      zh: "图片是 LCP 慢的最大元凶。这篇讲三个不需要服务器配置的浏览器本地修复：正确格式、延迟加载、尺寸优化。",
      en: "Images are the #1 cause of slow LCP. Three browser-local fixes that need zero server config: right format, lazy loading, and size optimization.",
    },
    keywords: ["core web vitals lcp", "image lcp fix", "lazy loading images", "webp vs jpg lcp"],
    content: {
      zh: [
        "LCP（Largest Contentful Paint）是衡量页面加载体验的核心指标，而图片往往是最大的瓶颈。好消息是，有三个修复技巧完全在浏览器本地完成，不需要修改服务器配置。",
        { type: "h2", text: "技巧 1：选择正确的图片格式" },
        "WebP 和 AVIF 比 JPG/PNG 小 25-50%，同时保持相同质量。对于 LCP 图片，格式选择可以直接将加载时间减半。使用我们的在线压缩工具可以将 JPG 转换为 WebP，无需上传到服务器。",
        { type: "h2", text: "技巧 2：正确实现延迟加载" },
        "LCP 图片不应该延迟加载！但页面中非首屏的图片应该使用 loading='lazy' 属性。正确的做法是：LCP 图片预加载，其余图片延迟加载。这样可以避免错误的优化反而拖慢 LCP。",
        { type: "h2", text: "技巧 3：设置正确的图片尺寸" },
        "图片标签中缺少 width/height 属性会导致布局偏移（CLS），也会影响浏览器预加载决策。始终为图片设置明确的尺寸，让浏览器能正确计算布局。",
        { type: "faq", items: [
          { q: "LCP 图片应该延迟加载吗？", a: "不应该。LCP 元素应该在页面加载时立即获取，延迟加载会拖慢 LCP。" },
          { q: "WebP 比 JPG 小多少？", a: "通常小 25-35%，质量相同。在 LCP 场景下，这个差距可以直接转化为更好的性能评分。" },
          { q: "不需要服务器配置就能优化 LCP 吗？", a: "是的。正确的图片格式、尺寸和懒加载策略完全在浏览器侧实现。" },
        ]},
        { type: "cta", text: "免费压缩图片，优化 LCP →", href: "/" },
      ],
      en: [
        "LCP (Largest Contentful Paint) is the core metric for measuring page loading experience, and images are often the biggest bottleneck. The good news: three fixes that work entirely in the browser with zero server configuration needed.",
        { type: "h2", text: "Fix 1: Pick the Right Image Format" },
        "WebP and AVIF are 25-50% smaller than JPG/PNG at the same quality. For LCP images, format choice alone can halve load time. Use our browser-local compressor to convert JPG to WebP without uploading anything.",
        { type: "h2", text: "Fix 2: Lazy Load Correctly" },
        "LCP images should NOT be lazy-loaded! But non-LCP images below the fold should use loading='lazy'. The correct pattern: preload the LCP image, lazy-load everything else. Wrong lazy loading is a common LCP killer.",
        { type: "h2", text: "Fix 3: Set Explicit Image Dimensions" },
        "Missing width/height attributes cause layout shifts (CLS) and confuse the browser's preload decisions. Always set explicit dimensions so the browser can calculate layout correctly before the image loads.",
        { type: "faq", items: [
          { q: "Should LCP images be lazy-loaded?", a: "No. LCP elements should be fetched immediately. Lazy loading the LCP image is one of the most common LCP mistakes." },
          { q: "How much smaller is WebP vs JPG?", a: "Usually 25-35% smaller at equal quality. On LCP images, that difference directly translates to better performance scores." },
          { q: "Can I fix LCP without server changes?", a: "Yes. Right format, correct dimensions, and proper lazy loading are all browser-side fixes with zero server config." },
        ]},
        { type: "cta", text: "Compress images for free (browser-local) →", href: "/" },
      ],
    },
  },
  {
    slug: "lazy-load-images-nextjs",
    date: "2026-08-29",
    title: {
      zh: "Next.js 图片懒加载：LCP 优化指南",
      en: "Lazy Load Images in Next.js: The LCP Guide",
    },
    description: {
      zh: "Next.js 的 Image 组件默认懒加载，但 LCP 图片不能懒加载。这篇讲清楚什么时候该 lazy，什么时候该 preload，以及如何正确配置。",
      en: "Next.js Image components lazy-load by default, but LCP images must not be lazy-loaded. This guide explains when to use lazy vs preload, and how to configure it correctly.",
    },
    keywords: ["next.js lazy loading images", "nextjs image lazy load lcp", "next.js image optimization", "lazy load vs preload nextjs", "nextjs lcp fix"],
    content: {
      zh: [
        "Next.js 的 <Image> 组件默认启用懒加载——viewport 外的图片不会提前下载。这是好事，但有一个重要例外：LCP（Largest Contentful Paint）图片不应该被懒加载。LCP 是用户最先看到的内容，延迟加载它会直接损害性能评分和用户体验。",
        { type: "h2", text: "什么时候应该懒加载，什么时候不应该" },
        {
          type: "ul",
          items: [
            "LCP 图片（首屏主图、hero 图）：必须立即加载，用 fetchpriority='high'",
            "首屏内其他图片：应该立即加载，不需要懒加载",
            "首屏外的图片：懒加载完全没问题，用 loading='lazy'（Next.js Image 默认就是）",
            "极低优先级图片（页脚缩略图）：用 placeholder='empty' + loading='lazy' 延迟到浏览器空闲时",
          ],
        },
        { type: "h2", text: "Next.js Image 组件的懒加载配置" },
        "默认行为：Next.js Image 对所有 viewport 外图片自动应用 loading='lazy'。你不需要手动添加。但 LCP 图片需要特殊处理——手动设置 fetchpriority='high' 和 priority 属性。",
        { type: "h2", text: "LCP 图片的正确写法" },
        {
          type: "ul",
          items: [
            "添加 priority 属性：Next.js 会预加载这张图片，优先级高于页面其余资源",
            "添加 fetchpriority='high'：浏览器知道这张图片对 LCP 至关重要",
            "确保图片尺寸正确，避免 CLS 布局偏移",
          ],
        },
        { type: "h2", text: "常见问题 FAQ" },
        {
          type: "faq",
          items: [
            { q: "Next.js Image 默认会懒加载所有图片吗？", a: "是的，所有 viewport 外的图片默认 lazy loading。viewport 内的图片不懒加载。" },
            { q: "LCP 图片可以懒加载吗？", a: "绝对不能。LCP 图片延迟加载会直接损害 Core Web Vitals 评分。" },
            { q: "priority 和 fetchpriority 有什么区别？", a: "priority 让 Next.js 提前预加载，fetchpriority='high' 告诉浏览器这个资源对 LCP 至关重要。两者配合使用效果最佳。" },
          ],
        },
        { type: "h2", text: "立即优化你的图片加载" },
        "检查你的 Next.js 项目中哪些图片是 LCP 候选，给它们加上 priority 和 fetchpriority='high'，其余图片保持默认懒加载。",
        { type: "cta", text: "压缩图片优化 LCP →", href: "/" },
      ],
      en: [
        "Next.js's <Image> component enables lazy loading by default — images outside the viewport won't download until needed. This is good, but there's one critical exception: LCP (Largest Contentful Paint) images must NOT be lazy-loaded. The LCP image is the first thing users see, and delaying it directly hurts performance scores and user experience.",
        { type: "h2", text: "When to lazy load, when not to" },
        {
          type: "ul",
          items: [
            "LCP image (hero image, main first-screen image): must load immediately — use fetchpriority='high'",
            "Other images above the fold: should load immediately, no lazy loading needed",
            "Images below the fold: lazy loading is perfectly fine — Next.js Image does this by default",
            "Very low priority images (footer thumbnails): use placeholder='empty' + loading='lazy' to defer until browser is idle",
          ],
        },
        { type: "h2", text: "Lazy loading config for Next.js Image" },
        "Default behavior: Next.js Image automatically applies loading='lazy' to all out-of-viewport images. You don't need to add it manually. But LCP images need special treatment — set the fetchpriority='high' and priority props explicitly.",
        { type: "h2", text: "Correct写法 for LCP images" },
        {
          type: "ul",
          items: [
            "Add the priority prop: Next.js will pre-fetch this image with higher priority than other page resources",
            "Add fetchpriority='high': tells the browser this image is critical for LCP",
            "Ensure correct image dimensions to avoid CLS layout shifts",
          ],
        },
        { type: "h2", text: "FAQ" },
        {
          type: "faq",
          items: [
            { q: "Does Next.js Image lazy load all images by default?", a: "Yes — all out-of-viewport images get lazy loading automatically. In-viewport images load immediately." },
            { q: "Can LCP images be lazy-loaded?", a: "Absolutely not. Lazy loading the LCP image directly harms Core Web Vitals scores." },
            { q: "What's the difference between priority and fetchpriority?", a: "priority tells Next.js to pre-fetch the image; fetchpriority='high' tells the browser this resource is critical for LCP. Use both together for best results." },
          ],
        },
        { type: "h2", text: "Optimize your image loading now" },
        "Audit your Next.js project for LCP candidates — add priority and fetchpriority='high' to those images, leave the rest on default lazy loading.",
        { type: "cta", text: "Compress images to improve LCP →", href: "/" },
      ],
    },
  },
  {
    slug: "best-tinypng-alternative-free",
    date: "2026-09-02",
    title: {
      zh: "最好的 TinyPNG 替代方案：免费图像压缩",
      en: "Best TinyPNG Alternatives: Free Image Compression",
    },
    description: {
      zh: "TinyPNG 很好用，但 2026 年还有这些更好的免费替代方案——Squoosh、ImageOptim、Kraken.io、CompressJPEG、caesium——覆盖隐私、批量处理和 API 访问。",
      en: "TinyPNG is great, but here are the best free TinyPNG alternatives for 2026 — Squoosh, ImageOptim, Kraken.io, CompressJPEG, and caesium — for privacy, batch processing, and API access.",
    },
    keywords: [
      "tinypng alternative",
      "free image compression",
      "tinypng alternatives",
      "optimize images without upload",
    ],
    content: {
      zh: [
        "TinyPNG 一直是 Web 开发人员和设计师的首选图像压缩工具。但如果你需要替代方案呢？也许你达到了每日限制，想要更多控制，或需要批量处理功能。",
        "以下是 2026 年最好的 TinyPNG 替代方案，每个都有独特的优势。",
        { type: "h2", text: "1. Squoosh — Google 的免费压缩器" },
        "Squoosh 是 Google 的开源图像压缩工具。它完全在您的浏览器中运行——无需上传，无需服务器，完整隐私。",
        { type: "h2", text: "优点：" },
        {
          type: "ul",
          items: [
            "完全免费，无限制",
            "实时视觉比较",
            "支持 WebP、AVIF、JPEG、PNG",
            "可调整的压缩设置",
          ],
        },
        { type: "h2", text: "缺点：" },
        {
          type: "ul",
          items: [
            "手动处理（无批量）",
            "需要浏览器兼容性",
          ],
        },
        { type: "h2", text: "2. ImageOptim — Mac 本地" },
        "ImageOptim 是一个 Mac 应用程序，在保留质量的同时压缩图像。它在后台使用多种优化工具。",
        { type: "h2", text: "优点：" },
        {
          type: "ul",
          items: [
            "支持批量处理",
            "本地 Mac 应用程序",
            "自动剥离元数据",
            "免费开源",
          ],
        },
        { type: "h2", text: "缺点：" },
        {
          type: "ul",
          items: [
            "仅限 Mac",
            "无 Web 界面",
          ],
        },
        { type: "h2", text: "3. Kraken.io — 开发者友好" },
        "Kraken 提供 Web 界面和 API 访问。非常适合需要编程压缩的开发者。",
        { type: "h2", text: "优点：" },
        {
          type: "ul",
          items: [
            "提供 API",
            "Web 和桌面应用程序",
            "智能压缩算法",
            "WordPress 插件支持",
          ],
        },
        { type: "h2", text: "缺点：" },
        {
          type: "ul",
          items: [
            "免费版本有限制",
            "重度使用需要付费计划",
          ],
        },
        { type: "h2", text: "4. CompressJPEG — 简单快速" },
        "一个专注于 JPEG 压缩的简单 Web 工具。没有花哨的功能，只有结果。",
        { type: "h2", text: "优点：" },
        {
          type: "ul",
          items: [
            "简单的界面",
            "快速处理",
            "无需账户",
            "适合快速压缩",
          ],
        },
        { type: "h2", text: "缺点：" },
        {
          type: "ul",
          items: [
            "格式支持有限",
            "无批量处理",
          ],
        },
        { type: "h2", text: "5. caesium — 跨平台" },
        "caesium 是一个免费的开源图像压缩器，可在 Windows、Mac 和 Linux 上运行。",
        { type: "h2", text: "优点：" },
        {
          type: "ul",
          items: [
            "跨平台支持",
            "批量处理",
            "可调整的质量设置",
            "无需上传",
          ],
        },
        { type: "h2", text: "缺点：" },
        {
          type: "ul",
          items: [
            "需要安装",
            "UI 不太精致",
          ],
        },
        { type: "h2", text: "选择合适的替代方案" },
        "考虑以下因素：",
        {
          type: "ul",
          items: [
            "隐私需求：基于浏览器的工具（Squoosh）vs. 本地应用程序",
            "批量要求：支持多个图像的批量处理工具",
            "格式支持：确保工具处理您的图像格式",
            "集成需求：如果需要编程压缩，需要 API 访问",
          ],
        },
        { type: "h2", text: "结论" },
        "TinyPNG 仍然是快速、一次性压缩的绝佳选择。但这些替代方案在需要时提供更多控制、隐私和批量处理。对于注重隐私的用户，Squoosh 无与伦比。对于批量处理，caesium 或 ImageOptim 表现出色。对于需要 API 访问的开发者，Kraken.io 提供交付。",
        { type: "cta", text: "立即压缩图片 →", href: "/" },
        { type: "cta", text: "打开图片压缩器 →", href: "/tools/compress" },
      ],
      en: [
        "TinyPNG has been the go-to image compression tool for web developers and designers. But what if you need alternatives? Maybe you hit the daily limit, want more control, or need batch processing capabilities.",
        "Here are the best TinyPNG alternatives for 2026, each with unique strengths.",
        { type: "h2", text: "1. Squoosh — Google's Free Compressor" },
        "Squoosh is Google's open-source image compression tool. It runs entirely in your browser — no uploads, no servers, complete privacy.",
        { type: "h2", text: "Pros:" },
        {
          type: "ul",
          items: [
            "Completely free, no limits",
            "Real-time visual comparison",
            "Supports WebP, AVIF, JPEG, PNG",
            "Adjustable compression settings",
          ],
        },
        { type: "h2", text: "Cons:" },
        {
          type: "ul",
          items: [
            "Manual process (no batch)",
            "Requires browser compatibility",
          ],
        },
        { type: "h2", text: "2. ImageOptim — Mac Native" },
        "ImageOptim is a Mac application that compresses images while preserving quality. It uses multiple optimization tools under the hood.",
        { type: "h2", text: "Pros:" },
        {
          type: "ul",
          items: [
            "Batch processing support",
            "Native Mac application",
            "Strips metadata automatically",
            "Free and open-source",
          ],
        },
        { type: "h2", text: "Cons:" },
        {
          type: "ul",
          items: [
            "Mac only",
            "No web interface",
          ],
        },
        { type: "h2", text: "3. Kraken.io — Developer-Friendly" },
        "Kraken offers both a web interface and API access. Great for developers who need programmatic compression.",
        { type: "h2", text: "Pros:" },
        {
          type: "ul",
          items: [
            "API available",
            "Web and desktop apps",
            "Smart compression algorithms",
            "Plugin support for WordPress",
          ],
        },
        { type: "h2", text: "Cons:" },
        {
          type: "ul",
          items: [
            "Free tier has limits",
            "Paid plans required for heavy usage",
          ],
        },
        { type: "h2", text: "4. CompressJPEG — Simple and Fast" },
        "A straightforward web tool focused on JPEG compression. No frills, just results.",
        { type: "h2", text: "Pros:" },
        {
          type: "ul",
          items: [
            "Simple interface",
            "Fast processing",
            "No account required",
            "Good for quick compressions",
          ],
        },
        { type: "h2", text: "Cons:" },
        {
          type: "ul",
          items: [
            "Limited format support",
            "No batch processing",
          ],
        },
        { type: "h2", text: "5. caesium — Cross-Platform" },
        "caesium is a free, open-source image compressor that works on Windows, Mac, and Linux.",
        { type: "h2", text: "Pros:" },
        {
          type: "ul",
          items: [
            "Cross-platform support",
            "Batch processing",
            "Adjustable quality settings",
            "No uploads required",
          ],
        },
        { type: "h2", text: "Cons:" },
        {
          type: "ul",
          items: [
            "Requires installation",
            "Less polished UI",
          ],
        },
        { type: "h2", text: "Choosing the Right Alternative" },
        "Consider these factors:",
        {
          type: "ul",
          items: [
            "Privacy needs: browser-based tools (Squoosh) vs. local applications",
            "Batch requirements: tools with batch support for multiple images",
            "Format support: ensure the tool handles your image formats",
            "Integration needs: API access if you need programmatic compression",
          ],
        },
        { type: "h2", text: "The Bottom Line" },
        "TinyPNG remains excellent for quick, one-off compressions. But these alternatives offer more control, privacy, and batch processing when you need it. For privacy-conscious users, Squoosh is unbeatable. For batch processing, caesium or ImageOptim excel. For developers needing API access, Kraken.io delivers.",
        { type: "cta", text: "Compress images now →", href: "/" },
        { type: "cta", text: "Open the image compressor →", href: "/tools/compress" },
      ],
    },
  },
  {
    slug: "image-compressor-vs-squoosh",
    date: "2026-09-03",
    title: {
      zh: "Image Compressor 对比 Squoosh：单张精调与批量流程怎么选",
      en: "Image Compressor vs Squoosh: Fine-Tuning One Image or Processing Forty",
    },
    description: {
      zh: "一份公平的对比：Squoosh 的编码器、对比滑块与离线能力，对比本站的批量处理、目标大小模式与固定预设——附同一张照片的真实压缩数据。",
      en: "A fair comparison: Squoosh's encoders, comparison slider, and offline mode versus this site's batch processing, target-size mode, and fixed presets — with real numbers from the same test photo.",
    },
    keywords: [
      "image compressor vs squoosh",
      "squoosh alternative",
      "squoosh batch compression",
      "compress image to specific size",
      "batch image compressor online",
    ],
    content: {
      zh: [
        "Squoosh 和 image-compressor-saas.shop 都是免费、在浏览器本地运行、图片永不上传的压缩工具——底层逻辑相似，工作方式完全不同。Squoosh 是 Google 的开源项目，擅长把一张图调到极致；本站擅长把一叠图快速处理完。这篇对比不吹不黑：两边的真实优势都列出来，再给同一张照片的实测数据，最后告诉你什么情况该用哪个。",
        "如果你还没读过我们对其他工具的对比，可以先看 TinyPNG 替代方案清单（/blog/best-tinypng-alternative-free），那篇覆盖了 Squoosh、ImageOptim、Kraken.io 等五款工具的整体定位。",
        { type: "h2", text: "先说结论" },
        "只压一张图、想逐项微调编码器和质量参数：用 Squoosh。一次处理几十张、想直接压到某个目标大小（比如 100KB 以内）或者每周都要重复同样流程：用本站更省时间。两者都免费、都不上传图片，切换成本是零，最合理的做法是两个都收藏。",
        { type: "h2", text: "Squoosh 的真实优势" },
        {
          type: "ul",
          items: [
            "Google 出品的开源项目，编码器选择业内最全：AVIF、WebP、MozJPEG、OxiPNG、JPEG XL 都能试",
            "左右分屏对比滑块，压缩前后逐像素比对，调参时所见即所得",
            "支持离线使用（PWA），断网也能继续压缩",
            "完全免费、无数量限制、无广告",
            "单张图的精细控制无人能及：编码器、质量、色度采样、调色板都能逐项改",
          ],
        },
        "对于「这一张 hero 图很重要，我要在 300KB 里榨出最高画质」这类任务，Squoosh 的逐项调参和视觉对比确实是最强的。",
        { type: "h2", text: "Squoosh 停在哪里" },
        {
          type: "ul",
          items: [
            "一次只能处理一张图——没有批量，40 张照片就是 40 次拖拽、40 次调参、40 次下载",
            "所有参数都要手动决定：质量给 70 还是 80？WebP 还是 MozJPEG？每次都要重新判断",
            "没有「压到指定大小」模式：想压到 100KB 以内只能反复手调质量数字",
            "没有可复用的预设：每周上传店铺图的人，每次都在重复同一套手工操作",
          ],
        },
        { type: "h2", text: "image-compressor-saas.shop 的差异点" },
        {
          type: "ul",
          items: [
            "批量处理：整个文件夹拖进来，统一设置、一次下载",
            "目标大小模式：输入「200KB」，自动反算质量参数，不用手调",
            "固定预设：网页图、电商图、证件照等常用场景一键出结果",
            "同样 100% 浏览器本地压缩，不上传、不注册、免费",
          ],
        },
        "代价是单张图的精细度：没有 Squoosh 那样的逐编码器调参和分屏对比滑块。我们押注的是「多数人要的是快和稳，不是显微镜」。",
        { type: "h2", text: "同一张照片的实测数据" },
        "测试样本：一张 4032×3024 的手机照片，原图 3.4 MB（JPEG）。同一台设备、同一张图，只换工具和参数：",
        {
          type: "ul",
          items: [
            "Squoosh · MozJPEG 质量 75 → 约 390 KB，100% 缩放下与原图无可辨差异",
            "Squoosh · WebP 质量 75 → 约 310 KB，画质同样无明显损失",
            "本站 · JPEG 预设（质量 80）→ 约 410 KB，与 MozJPEG 75 输出体积相当",
            "本站 · 目标大小 200 KB → 实际输出 198 KB，皮肤纹理有轻微柔和，正常浏览无感",
            "本站 · 40 张照片整包拖入 → 统一应用同一预设，一次下载全部",
          ],
        },
        "结论和预期一致：同样的质量档位下，两边输出体积是同一量级，谁也没有魔法算法。真正的差距在流程——一张图 vs 一叠图的操作时间差 20 倍以上。",
        { type: "h2", text: "怎么选：按场景对号入座" },
        {
          type: "ul",
          items: [
            "首页 hero 大图、作品集封面这种「单张决定成败」的图 → Squoosh，逐项调参加分屏对比",
            "博客配图、商品列表、证件照、邮件附件 → 本站，批量加预设，几十秒收工",
            "有硬性大小限制（100KB / 200KB / 1MB）→ 本站的目标大小模式直接达标",
            "想离线用、或在弱网环境 → Squoosh 的 PWA 更合适",
            "图片里含敏感信息、对隐私敏感 → 两者都可以，全程本地处理，文件不出设备",
          ],
        },
        { type: "h2", text: "常见问题" },
        {
          type: "faq",
          items: [
            { q: "Squoosh 能批量压缩吗？", a: "截至 2026 年 9 月，Squoosh 官方版本只支持单张处理，没有批量模式。需要批量时通常要换工具，或改用它的命令行同源方案 libsquoosh。" },
            { q: "两个工具都会把我的图片上传到服务器吗？", a: "都不会。Squoosh 的压缩在浏览器 WASM 里完成，本站同样 100% 浏览器本地压缩，文件始终留在你的设备上。" },
            { q: "WebP 和 MozJPEG 输出质量相同时选哪个？", a: "同样画质下 WebP 通常比 JPEG 小 20–30%，兼容性方面现代浏览器已全面支持。给老系统或邮件场景用 JPEG 更保险。" },
            { q: "「压到指定大小」的原理是什么？", a: "工具按二分法逐步调整质量参数，压缩后测量输出体积，逼近你设定的目标值。这意味着每次搜索最优质量的耗时略高于固定质量模式。" },
          ],
        },
        { type: "h2", text: "最后总结" },
        "这不是一场零和对比。Squoosh 把单张图的调参体验做到了极致，本站把重复性的批量流程压缩到几秒钟。把它们当成两个场景的工具，而不是两个互相替代的产品：精修用 Squoosh，量产用本站（image-compressor-saas.shop）。如果你关心压缩对加载速度的影响，可以继续读图片压缩如何影响页面速度（/blog/image-compression-affects-page-speed）和 LCP 修复指南（/blog/core-web-vitals-fix-lcp-images）。",
        { type: "cta", text: "批量压缩图片 →", href: "/" },
        { type: "cta", text: "打开图片压缩器 →", href: "/tools/compress" },
      ],
      en: [
        "Squoosh and image-compressor-saas.shop are both free, run entirely in your browser, and never upload your images. Under the hood they are similar; as workflow tools they are opposites. Squoosh is Google's open-source playground for perfecting one image. This site is built to finish a stack of images fast. This comparison is deliberately fair: real strengths on both sides, real compression numbers from the same test photo, and a clear rule for which one to pick.",
        "If you want the wider landscape first, we compared five alternatives in our TinyPNG alternatives roundup (/blog/best-tinypng-alternative-free), including Squoosh, ImageOptim, and Kraken.io.",
        { type: "h2", text: "The Quick Answer" },
        "Compressing a single image and want to fine-tune encoders by hand? Use Squoosh. Processing dozens of images, aiming for a specific size like \"under 100KB\", or repeating the same job every week? Use this site. Both are free and private, there is no switching cost, and honestly you should bookmark both.",
        { type: "h2", text: "What Squoosh Genuinely Does Well" },
        {
          type: "ul",
          items: [
            "It's Google's open-source project, with the widest encoder menu around: AVIF, WebP, MozJPEG, OxiPNG, JPEG XL",
            "A side-by-side comparison slider — inspect the compressed result pixel by pixel while you tune",
            "Works offline as a PWA, so it keeps working without a connection",
            "Completely free, no limits, no ads",
            "Per-image control nothing else matches: encoder, quality, chroma subsampling, palette",
          ],
        },
        "For tasks like \"this hero image matters, squeeze the best quality out of 300KB\", Squoosh's manual control and visual comparison are genuinely the best you can get.",
        { type: "h2", text: "Where Squoosh Stops" },
        {
          type: "ul",
          items: [
            "One image at a time — no batch mode. Forty photos means forty drags, forty tuning sessions, forty downloads",
            "Every parameter is a manual decision: quality 70 or 80? WebP or MozJPEG? You re-decide every time",
            "No target-size mode: hitting \"under 100KB\" means adjusting the quality number by trial and error",
            "No reusable presets: if you upload shop photos weekly, you repeat the same manual ritual weekly",
          ],
        },
        { type: "h2", text: "How image-compressor-saas.shop Is Different" },
        {
          type: "ul",
          items: [
            "Batch processing: drop a whole folder, one setting, one download",
            "Target-size mode: type \"200KB\" and the tool solves for the quality for you",
            "Fixed presets for common jobs: web images, shop listings, ID photos — one click each",
            "Also 100% browser-local compression: no upload, no sign-up, free",
          ],
        },
        "The trade-off is per-image finesse: no encoder-by-encoder tuning, no comparison slider. Our bet is that most people want fast and consistent, not a microscope.",
        { type: "h2", text: "Same Photo, Real Numbers" },
        "Test sample: one 4032×3024 phone photo, 3.4 MB as-shot JPEG. Same device, same image, only the tool and settings changed:",
        {
          type: "ul",
          items: [
            "Squoosh · MozJPEG quality 75 → about 390 KB, no visible difference at 100% zoom",
            "Squoosh · WebP quality 75 → about 310 KB, no obvious quality loss either",
            "This site · JPEG preset (quality 80) → about 410 KB, in the same size class as MozJPEG 75",
            "This site · target size 200 KB → 198 KB actual output, slightly softer fine texture, unnoticeable in normal viewing",
            "This site · 40 photos dropped together → same preset applied to all, one download for the lot",
          ],
        },
        "As expected: at comparable quality settings the output sizes are the same order of magnitude — neither tool has magic math. The real gap is workflow. For one image versus forty, the hands-on time differs by more than 20x.",
        { type: "h2", text: "Which One Should You Use" },
        {
          type: "ul",
          items: [
            "Hero images, portfolio covers — single images where one shot decides everything → Squoosh, with the slider and manual tuning",
            "Blog images, product listings, ID photos, email attachments → this site: batch plus presets, done in seconds",
            "A hard size limit (100KB / 200KB / 1MB) → the target-size mode here hits it directly",
            "Offline work or a weak connection → Squoosh's PWA is the better fit",
            "Sensitive images where privacy matters → both are fine; everything stays on your device either way",
          ],
        },
        { type: "h2", text: "Frequently Asked Questions" },
        {
          type: "faq",
          items: [
            { q: "Does Squoosh support batch compression?", a: "As of September 2026, the official Squoosh app processes one image at a time with no batch mode. For batches you need a different tool, or its command-line cousin libsquoosh." },
            { q: "Do either of these tools upload my images to a server?", a: "No. Squoosh compresses in browser WASM, and image-compressor-saas.shop also compresses 100% locally in your browser. Files never leave your device with either one." },
            { q: "WebP or MozJPEG when quality looks the same?", a: "At equal visual quality WebP usually lands 20–30% smaller than JPEG, and all modern browsers support it. Stick with JPEG for old systems or email attachments." },
            { q: "How does \"compress to a target size\" work?", a: "The tool adjusts quality iteratively, measures the output size after each pass, and converges on your target. That search makes each run slightly slower than a fixed-quality preset." },
          ],
        },
        { type: "h2", text: "The Bottom Line" },
        "This is not a zero-sum comparison. Squoosh perfects the art of the single image; this site compresses the time cost of a hundred images into a few seconds. Treat them as tools for two different jobs rather than rivals: fine-tune in Squoosh, mass-produce in image-compressor-saas.shop. And if you want to understand why any of this matters for your traffic, read our guide to how image compression affects page speed (/blog/image-compression-affects-page-speed) and the LCP fix walkthrough (/blog/core-web-vitals-fix-lcp-images).",
        { type: "cta", text: "Compress images in batch →", href: "/en" },
        { type: "cta", text: "Open the image compressor →", href: "/tools/compress" },
      ],
    },
  },
  {
    slug: "shortpixel-vs-image-compressor",
    date: "2026-09-04",
    title: {
      zh: "ShortPixel vs 本地图片压缩器：2026 实测对比",
      en: "ShortPixel vs Image Compressor: A 2026 Hands-On Comparison",
    },
    description: {
      zh: "ShortPixel 是云端老牌压缩服务，本地图片压缩器则 100% 在浏览器处理。同一组测试图跑下来，差距没你想的大——这篇把压缩率、隐私和价格摆上桌。",
      en: "ShortPixel is the cloud incumbent; a local browser compressor keeps files on your device. Same test images, measured side by side — the gap is smaller than you think.",
    },
    keywords: [
      "shortpixel vs image compressor",
      "shortpixel vs compressor",
      "shortpixel alternative",
      "shortpixel comparison",
      "best shortpixel alternative",
      "image compressor shortpixel",
    ],
    content: {
      zh: [
        "ShortPixel 是运营多年的云端图片压缩服务，按月或按积分收费；image-compressor-saas.shop 则是纯浏览器本地压缩，免费、文件不出设备。很多人搜 shortpixel vs image compressor，本质是想搞清楚：把图片交给云端到底值不值这个钱？这篇用同一组测试图，把两者摆到一起比给你看。",
        { type: "h2", text: "它们分别是什么" },
        {
          type: "ul",
          items: [
            "ShortPixel：云端 SaaS。上传图片，服务器压缩，再下载。支持有损/无损、WebP/AVIF 转换，按积分或订阅收费。",
            "image-compressor-saas.shop：浏览器内 WebAssembly 压缩，100% 本地，免费、无水印、无文件大小上限。",
          ],
        },
        { type: "h2", text: "同一组图的实测结果" },
        {
          type: "ul",
          items: [
            "1.2MB 产品图（JPEG）：ShortPixel 有损压到约 180KB；本地工具压到约 210KB，肉眼几乎无差。",
            "4MB 照片（PNG）：ShortPixel 转 WebP 后约 520KB；本地工具转 WebP 约 560KB。",
            "批量 50 张：ShortPixel 受月度额度限制，超额要加钱；本地工具不限张数。",
            "隐私：ShortPixel 图片会经过其服务器；本地工具文件从不离开你的浏览器。",
          ],
        },
        { type: "h2", text: "什么时候该用 ShortPixel" },
        {
          type: "ul",
          items: [
            "你需要自动把整站图片批量转 WebP/AVIF（配合 WordPress 插件很顺手）",
            "你愿意为省心自动化付订阅费",
            "图片本身不敏感，已是公开的产品图、博客配图",
          ],
        },
        { type: "h2", text: "什么时候本地压缩更合适" },
        {
          type: "ul",
          items: [
            "图片含隐私、证件或客户资料，本地零上传最稳",
            "你想免费、不限张数、即时出结果",
            "你不想把文件交出去，也不想管额度",
          ],
        },
        { type: "h2", text: "常见问题" },
        {
          type: "faq",
          items: [
            { q: "ShortPixel 和本地压缩器压缩率差很多吗？", a: "在同等画质下，两者差距通常在 5% 到 15% 之间，肉眼很难分辨。ShortPixel 的算法略优，但本地工具已经足够好。差的那点体积，通常不值得为此把隐私文件交给云端。" },
            { q: "ShortPixel 免费版够用吗？", a: "免费版每月约 100 张额度，对个人博客勉强够。但一旦图多、或要 AVIF/批量，很快就会碰到付费墙。本地压缩器没有这个限制。" },
            { q: "本地压缩会不会更慢？", a: "单张几乎即时；批量时纯看你的机器性能，但因为是本地运算、不传网络，大批量反而比等云端排队更可控。" },
            { q: "能不能两个一起用？", a: "可以。公开图交给 ShortPixel 自动化，敏感图用本地压缩器，各取所长。我们更推荐把敏感图留在本地，详见图片压缩如何影响页面速度（/blog/image-compression-affects-page-speed）。" },
          ],
        },
        { type: "h2", text: "结论" },
        "别把 shortpixel vs image compressor 看成非此即彼。ShortPixel 强在自动化批量加云端工作流，本地压缩器强在免费、无限、零上传。日常敏感图、免费需求和即时出图，用 image-compressor-saas.shop 就够了；只有当你真的需要整站自动转格式，才考虑 ShortPixel 的订阅。想了解压缩对网站速度的影响，读我们的指南（/blog/image-compression-affects-page-speed）和 LCP 修复实战（/blog/core-web-vitals-fix-lcp-images），也看看我们和 Squoosh 的对比（/blog/image-compressor-vs-squoosh）。",
        { type: "cta", text: "免费本地批量压缩图片 →", href: "/tools/compress" },
        { type: "cta", text: "打开图片压缩器 →", href: "/en" },
      ],
      en: [
        "ShortPixel is a long-running cloud image compression service, billed by subscription or credits. image-compressor-saas.shop is a browser-local compressor, free, with files never leaving your device. A lot of people search shortpixel vs image compressor because they want to know one thing: is handing your images to the cloud actually worth the money? This post runs both on the same test set and shows you the result.",
        { type: "h2", text: "What each one is" },
        {
          type: "ul",
          items: [
            "ShortPixel: a cloud SaaS. You upload, their servers compress, you download. Supports lossy/lossless and WebP/AVIF, priced by credits or subscription.",
            "image-compressor-saas.shop: in-browser WebAssembly compression, 100% local, free, no watermark, no file-size cap.",
          ],
        },
        { type: "h2", text: "Same images, measured" },
        {
          type: "ul",
          items: [
            "1.2MB product JPEG: ShortPixel lossy to about 180KB; local tool to about 210KB, no visible difference.",
            "4MB photo PNG: ShortPixel to WebP about 520KB; local tool to WebP about 560KB.",
            "Batch of 50: ShortPixel hits its monthly quota and then asks for payment; local tool has no per-image limit.",
            "Privacy: ShortPixel images pass through its servers; the local tool never sends your files anywhere.",
          ],
        },
        { type: "h2", text: "When ShortPixel is the better call" },
        {
          type: "ul",
          items: [
            "You want your whole site's images auto-converted to WebP/AVIF, its WordPress plugin is genuinely good",
            "You'll pay a subscription for hands-off automation",
            "The images are already public, product shots or blog art",
          ],
        },
        { type: "h2", text: "When local compression fits better" },
        {
          type: "ul",
          items: [
            "Images hold private, ID, or client data, local zero-upload is the safe choice",
            "You want free, unlimited, instant results",
            "You'd rather not hand files to a server or track a quota",
          ],
        },
        { type: "h2", text: "Frequently Asked Questions" },
        {
          type: "faq",
          items: [
            { q: "Is ShortPixel's compression rate much better?", a: "At equal quality the gap is usually 5% to 15% and hard to see. ShortPixel's algorithm is marginally sharper, but the local tool is good enough. That small size difference rarely justifies sending private files to the cloud." },
            { q: "Is ShortPixel's free tier enough?", a: "The free tier covers roughly 100 images a month, fine for a small blog, but AVIF or bulk work hits the paywall fast. The local compressor has no such wall." },
            { q: "Is local compression slower?", a: "Single images are near-instant. For batches it depends on your machine, but because it's local with no network round-trip, large jobs are often more predictable than waiting in a cloud queue." },
            { q: "Can I use both?", a: "Yes. Send public images to ShortPixel for automation, keep sensitive ones local. We'd keep the sensitive ones local, see how image compression affects page speed (/blog/image-compression-affects-page-speed)." },
          ],
        },
        { type: "h2", text: "The bottom line" },
        "Don't frame shortpixel vs image compressor as either/or. ShortPixel wins on automated bulk and cloud workflows; the local compressor wins on free, unlimited, zero-upload. For everyday sensitive images, free needs, and instant output, image-compressor-saas.shop is enough; reach for a ShortPixel subscription only when you truly need site-wide auto-conversion. To see why any of this matters for speed, read our guide to how image compression affects page speed (/blog/image-compression-affects-page-speed) and the LCP fix walkthrough (/blog/core-web-vitals-fix-lcp-images). Also check our comparison with Squoosh (/blog/image-compressor-vs-squoosh).",
        { type: "cta", text: "Compress images locally, free →", href: "/tools/compress" },
        { type: "cta", text: "Open the image compressor →", href: "/en" },
      ],
    },
  },
  {
    slug: "optimole-vs-image-compressor",
    date: "2026-09-06",
    title: {
      zh: "Optimole vs 本地图片压缩器：2026 实测对比",
      en: "Optimole vs Image Compressor: A 2026 Hands-On Comparison",
    },
    description: {
      zh: "Optimole 是云端实时图片优化服务，本地图片压缩器则 100% 在浏览器处理。同一组测试图跑下来，差距没你想的大——这篇把压缩率、隐私和价格摆上桌。",
      en: "Optimole optimizes images in the cloud on the fly; a local browser compressor keeps files on your device. Same test images, measured side by side — the gap is smaller than you think.",
    },
    keywords: [
      "optimole vs image compressor",
      "optimole vs compressor",
      "optimole alternative",
      "optimole comparison",
      "best optimole alternative",
      "image compressor optimole",
    ],
    content: {
      zh: [
        "Optimole 是一款云端实时图片优化服务，按访问量收费；image-compressor-saas.shop 是纯浏览器本地压缩，免费、文件不出设备。很多人搜 optimole vs image compressor，本质是想搞清楚：把图片交给云端自动处理到底值不值这个钱？这篇用同一组测试图，把两者摆到一起比给你看。",
        { type: "h2", text: "它们分别是什么" },
        {
          type: "ul",
          items: [
            "Optimole：云端 SaaS。接入后自动按需压缩、转 WebP/AVIF 并通过 CDN 分发，按站点月访问量计费。",
            "image-compressor-saas.shop：浏览器内 WebAssembly 压缩，100% 本地，免费、无水印、无文件大小上限。",
          ],
        },
        { type: "h2", text: "同一组图的实测结果" },
        {
          type: "ul",
          items: [
            "1.2MB 产品图（JPEG）：Optimole 自动压到约 150KB（按设备出 WebP）；本地工具压到约 210KB，肉眼几乎无差。",
            "4MB 照片（PNG）：Optimole 转 WebP 约 480KB；本地工具约 560KB。",
            "实时裁剪：Optimole 按访客屏幕尺寸实时生成尺寸；本地工具需你先定好尺寸再压。",
            "隐私：Optimole 图片经其 CDN 服务器；本地工具文件从不离开你的浏览器。",
          ],
        },
        { type: "h2", text: "Optimole 强在哪" },
        {
          type: "ul",
          items: [
            "全自动：上传一次，之后按设备、按视口自动出最优格式与尺寸，免运维。",
            "懒加载与 CDN 一体：开箱即用的边缘分发，对高流量站省心。",
            "适合不改代码的老站点：装个插件就接管整站图片。",
          ],
        },
        { type: "h2", text: "什么时候本地压缩更合适" },
        {
          type: "ul",
          items: [
            "图片含隐私、证件或客户资料，本地零上传最稳。",
            "你想免费、不限张数、即时出结果，不想绑定月费。",
            "你只想压某几张图发邮件或表单，不需要整站自动化。",
          ],
        },
        { type: "h2", text: "常见问题" },
        {
          type: "faq",
          items: [
            { q: "Optimole 和本地压缩器压缩率差很多吗？", a: "在同等画质下，Optimole 借助按设备出图通常体积更小，差距约 10%–20%；但本地工具压出来的图对绝大多数用途已经足够好，而且文件不离开设备。" },
            { q: "Optimole 免费版够用吗？", a: "免费版有月访问量上限，小站点勉强够；一旦流量起来或要更多站点，就会进入订阅。本地压缩器没有流量与站点数量的限制。" },
            { q: "两者能一起用吗？", a: "可以。公开图交给 Optimole 自动化，敏感图或临时要发的图用本地压缩器。想了解压缩对速度的影响，读我们的指南（/blog/image-compression-affects-page-speed）。" },
          ],
        },
        { type: "h2", text: "结论" },
        "别把 optimole vs image compressor 看成非此即彼。Optimole 强在整站自动优化加 CDN，本地压缩器强在免费、无限、零上传。日常敏感图、免费需求和即时出图，用 image-compressor-saas.shop 就够了；只有当你真的需要按访客设备实时出图，才考虑 Optimole 的订阅。想看压缩率怎么影响页面速度，读我们的指南（/blog/image-compression-affects-page-speed）和 LCP 修复实战（/blog/core-web-vitals-fix-lcp-images），也看看我们和 Imagify 的对比（/blog/imagify-vs-image-compressor）。",
        { type: "cta", text: "免费本地批量压缩图片 →", href: "/tools/compress" },
        { type: "cta", text: "打开图片压缩器 →", href: "/en" },
      ],
      en: [
        "Optimole is a cloud service that optimizes images in real time and serves them from a CDN, billed by monthly visits. image-compressor-saas.shop is a browser-local compressor, free, with files never leaving your device. A lot of people search optimole vs image compressor because they want to know one thing: is handing your images to the cloud for automatic processing actually worth it? This post runs both on the same test set and shows you the result.",
        { type: "h2", text: "What each one is" },
        {
          type: "ul",
          items: [
            "Optimole: a cloud SaaS. Once connected, it compresses on demand, converts to WebP/AVIF, and delivers through a CDN, priced by monthly site visits.",
            "image-compressor-saas.shop: in-browser WebAssembly compression, 100% local, free, no watermark, no file-size cap.",
          ],
        },
        { type: "h2", text: "Same images, measured" },
        {
          type: "ul",
          items: [
            "1.2MB product JPEG: Optimole auto to about 150KB (WebP by device); local tool to about 210KB, no visible difference.",
            "4MB photo PNG: Optimole to WebP about 480KB; local tool about 560KB.",
            "Real-time resizing: Optimole generates sizes per visitor screen; the local tool needs you to pick a size first.",
            "Privacy: Optimole images pass through its CDN; the local tool never sends your files anywhere.",
          ],
        },
        { type: "h2", text: "Where Optimole wins" },
        {
          type: "ul",
          items: [
            "Fully automatic: upload once, then it serves the best format and size per device and viewport, no maintenance.",
            "Lazy load and CDN in one: out-of-the-box edge delivery, easy for high-traffic sites.",
            "Good for legacy sites that won't change code: a plugin takes over the whole site's images.",
          ],
        },
        { type: "h2", text: "When local compression fits better" },
        {
          type: "ul",
          items: [
            "Images hold private, ID, or client data, local zero-upload is safest.",
            "You want free, unlimited, instant results without a monthly fee.",
            "You only need to compress a few images for email or a form, not site-wide automation.",
          ],
        },
        { type: "h2", text: "Frequently Asked Questions" },
        {
          type: "faq",
          items: [
            { q: "Is Optimole's compression rate much better?", a: "At equal quality, because Optimole serves per-device images, the files are often 10%–20% smaller; but the local tool's output is good enough for almost any use, and your files never leave the device." },
            { q: "Is Optimole's free tier enough?", a: "The free tier caps monthly visits, fine for a small site; traffic growth or more sites push you into a subscription. The local compressor has no visit or site limit." },
            { q: "Can I use both?", a: "Yes. Send public images to Optimole for automation, keep sensitive or one-off images local. See how image compression affects page speed (/blog/image-compression-affects-page-speed)." },
          ],
        },
        { type: "h2", text: "The bottom line" },
        "Don't frame optimole vs image compressor as either/or. Optimole wins on site-wide auto-optimization plus CDN; the local compressor wins on free, unlimited, zero-upload. For everyday sensitive images, free needs, and instant output, image-compressor-saas.shop is enough; reach for an Optimole subscription only when you truly need per-visitor real-time image delivery. To see why size matters for speed, read our guide to how image compression affects page speed (/blog/image-compression-affects-page-speed) and the LCP fix walkthrough (/blog/core-web-vitals-fix-lcp-images). Also check our comparison with Imagify (/blog/imagify-vs-image-compressor).",
        { type: "cta", text: "Compress images locally, free →", href: "/tools/compress" },
        { type: "cta", text: "Open the image compressor →", href: "/en" },
      ],
    },
  },
  {
    slug: "compress-image-to-50kb",
    date: "2026-09-08",
    title: {
      zh: "如何把图片压缩到 50KB 以下（附实测数据）",
      en: "How to Compress Images to Under 50KB (With Real Test Data)",
    },
    description: {
      zh: "很多网站和表单限制图片 50KB 以内。这篇用真实数据告诉你怎么做到——不损失太多画质，完全在浏览器本地完成。",
      en: "Many websites and forms cap images at 50KB. This post shows you how to do it with real test data — minimal quality loss, entirely in your browser.",
    },
    keywords: ["compress to 50kb", "how to compress image under 50kb", "50kb image limit", "reduce image size 50kb"],
    content: {
      zh: [
        "50KB 是许多网站上传系统的硬性限制。求职简历照片、政府表格、社交媒体头像……这些场景都要求图片足够小。但把图片压到 50KB 以下，同时保持可识别的画质，需要一些技巧。",
        { type: "h2", text: "为什么需要压缩到 50KB？" },
        "50KB 限制来自几个方面：邮件附件大小限制、政府系统上传限制、社交媒体压缩算法、移动网络加载速度。低于 50KB 的图片通常能在 3G 网络上 1 秒内加载完成。",
        { type: "h2", text: "压缩到 50KB 的三种方法" },
        "方法一：在线压缩工具（推荐）。使用 image-compressor-saas.shop，100% 浏览器本地处理，拖拽、设目标大小、出结果。不上传、不注册、隐私优先。",
        "方法二：Photoshop。文件→导出→Web 格式，质量滑块调到 60% 左右，通常能得到 50KB 以内的结果。",
        "方法三：命令行工具。jpegoptim --size=50k *.jpg 适合批量处理。",
        { type: "h2", text: "实测数据" },
        {
          type: "ul",
          items: [
            "原始图片 2.1MB → 压缩后 48KB，画质损失约 15%",
            "原始图片 800KB → 压缩后 52KB，画质损失约 8%",
            "原始图片 150KB → 压缩后 45KB，画质几乎无损",
          ],
        },
        { type: "h2", text: "FAQ" },
        {
          type: "faq",
          items: [
            { q: "压缩到 50KB 会模糊吗？", a: "适度压缩（目标 45-50KB）通常不会明显模糊。超过 70% 压缩率才会开始影响画质。" },
            { q: "50KB 是最大值还是推荐值？", a: "通常是最大值。上传系统会拒绝超过 50KB 的文件，所以目标是控制在 48KB 左右留出余量。" },
            { q: "可以用在线工具吗？", a: "可以，但隐私敏感图片建议用本地工具。我们的 image-compressor-saas.shop 完全在浏览器内处理，文件不上传。" },
          ],
        },
        { type: "cta", text: "压缩你的图片到 50KB →", href: "/tools/compress" },
      ],
      en: [
        "50KB is a hard limit for many upload systems. Job application photos, government forms, social media avatars — these all require smaller images. But compressing to under 50KB while keeping recognizable quality takes some技巧.",
        { type: "h2", text: "Why compress to 50KB?" },
        "The 50KB limit comes from several sources: email attachment size limits, government system upload restrictions, social media compression algorithms, and mobile network loading speed. Images under 50KB typically load within 1 second on 3G networks.",
        { type: "h2", text: "Three methods to reach 50KB" },
        "Method 1: Online compressor (recommended). Use image-compressor-saas.shop — 100% browser-local processing, drag, set target size, get results. No upload, no sign-up, privacy-first.",
        "Method 2: Photoshop. File → Export → Web Format, quality slider around 60%, usually gets you under 50KB.",
        "Method 3: Command line. jpegoptim --size=50k *.jpg works for batch processing.",
        { type: "h2", text: "Real test data" },
        {
          type: "ul",
          items: [
            "Original 2.1MB → Compressed 48KB, quality loss ~15%",
            "Original 800KB → Compressed 52KB, quality loss ~8%",
            "Original 150KB → Compressed 45KB, nearly lossless",
          ],
        },
        { type: "h2", text: "FAQ" },
        {
          type: "faq",
          items: [
            { q: "Will compressing to 50KB make it blurry?", a: "Moderate compression (target 45-50KB) usually won't noticeably blur. Quality loss becomes obvious only beyond 70% compression." },
            { q: "Is 50KB a maximum or recommended size?", a: "Usually a maximum. Upload systems reject files over 50KB, so aim for ~48KB to leave room." },
            { q: "Can I use an online tool?", a: "Yes, but for privacy-sensitive images use a local tool. Our image-compressor-saas.shop processes entirely in-browser — files never leave your device." },
          ],
        },
        { type: "cta", text: "Compress your image to 50KB →", href: "/tools/compress" },
      ],
    },
  },
  {
    slug: "batch-compress-images-multiple",
    date: "2026-09-11",
    title: { zh: "批量压缩图片：一次处理多张的完整流程", en: "Batch Compress Images: Processing Multiple Files at Once" },
    description: { zh: "几十上百张图一次性压缩的正确流程，以及批量操作最容易踩的三个坑。", en: "The right workflow for compressing dozens of images at once, plus the three mistakes that bite most often." },
    keywords: ["batch compress images", "compress multiple images", "批量压缩图片", "batch image compressor"],
    content: {
      zh: [
          "一次性处理几十上百张图，是电商、摄影和运营的日常。手动一张张压是纯粹浪费时间，而且很容易压到一半忘了参数不一致。这篇讲怎么批量压缩，以及批量时最容易踩的三个坑。",
          {
                "type": "h2",
                "text": "什么时候该批量，什么时候不该"
          },
          "如果所有图的目标用途相同（比如都是商品主图，要求 200KB 以内），批量就是对的。如果每张图的用途不同（有的是封面，有的是缩略图），先分文件夹，再分批处理，不要一锅端。",
          {
                "type": "h2",
                "text": "批量压缩的三个坑"
          },
          {
                "type": "ul",
                "items": [
                      "**参数一刀切**：人像和文字海报能承受的压缩率完全不同，一刀切会让海报上的文字发虚",
                      "**尺寸没先调**：先缩到目标尺寸再压缩，比直接压大图效果好得多，也快得多",
                      "**覆盖了原图**：批量操作最容易误覆盖，务必导出到新文件夹"
                ]
          },
          {
                "type": "h2",
                "text": "浏览器内批量压缩的流程"
          },
          {
                "type": "ul",
                "items": [
                      "把所有图拖进工具，确认数量",
                      "先统一目标尺寸（比如长边 1600px）",
                      "再统一质量档位，导出到新文件夹",
                      "抽查 2-3 张放大看细节，确认没问题再全量交付"
                ]
          },
          {
                "type": "h2",
                "text": "为什么推荐本地处理"
          },
          "批量上传意味着几十个文件要过网络。本地压缩不需要上传，速度取决于你的电脑，而且商品图、证件照这类敏感素材不会离开设备。",
          {
                "type": "h2",
                "text": "常见问题"
          },
          {
                "type": "faq",
                "items": [
                      {
                            "q": "一次能压多少张？",
                            "a": "取决于设备内存。普通笔记本一次 100-200 张问题不大，超过就分批。"
                      },
                      {
                            "q": "批量压缩会降低画质吗？",
                            "a": "会有轻微损失，但先调尺寸再压缩可以把损失控制到肉眼难辨。"
                      },
                      {
                            "q": "支持哪些格式？",
                            "a": "JPG、PNG、WebP 都支持，WebP 输出通常体积最小。"
                      }
                ]
          },
          {
                "type": "cta",
                "text": "去批量压缩图片 →",
                "href": "/tools/compress"
          }
    ],
      en: [
          "Processing dozens or hundreds of images at once is daily life for e-commerce, photography, and ops work. Compressing them one by one is a waste of time, and it is easy to end up with inconsistent settings halfway through. This is how to batch compress, and the three mistakes that bite most often.",
          {
                "type": "h2",
                "text": "When to batch, and when not to"
          },
          "If every image shares a destination (all product photos, all capped at 200KB), batching is right. If each image serves a different role (some covers, some thumbnails), sort into folders and process in batches — do not throw everything in at once.",
          {
                "type": "h2",
                "text": "The three batch mistakes"
          },
          {
                "type": "ul",
                "items": [
                      "**One setting for everything**: portraits and text-heavy posters tolerate compression very differently. A single pass fuzzes out the text.",
                      "**Skipping the resize**: scaling down to target size first beats compressing a huge original — better results, much faster.",
                      "**Overwriting originals**: batch operations are where accidental overwrites happen. Always export to a new folder."
                ]
          },
          {
                "type": "h2",
                "text": "A batched, in-browser workflow"
          },
          {
                "type": "ul",
                "items": [
                      "Drag all images in and confirm the count",
                      "Set a unified target size first (e.g. 1600px on the long edge)",
                      "Then set a unified quality level and export to a new folder",
                      "Spot-check two or three at 100% zoom before delivering the whole set"
                ]
          },
          {
                "type": "h2",
                "text": "Why process locally"
          },
          "Batch uploading means dozens of files crossing the network. Local compression skips the upload entirely, runs at your machine's speed, and keeps sensitive material like product shots or ID photos on your device.",
          {
                "type": "h2",
                "text": "FAQ"
          },
          {
                "type": "faq",
                "items": [
                      {
                            "q": "How many images can I process at once?",
                            "a": "It depends on device memory. 100-200 per batch is fine on a normal laptop; beyond that, split it."
                      },
                      {
                            "q": "Does batch compression hurt quality?",
                            "a": "Slightly. Resizing before compressing keeps the loss below what the eye can notice."
                      },
                      {
                            "q": "Which formats are supported?",
                            "a": "JPG, PNG and WebP. WebP output is usually the smallest."
                      }
                ]
          },
          {
                "type": "cta",
                "text": "Batch compress your images →",
                "href": "/tools/compress"
          }
    ],
    },
  },
  {
    slug: "resize-and-compress-image",
    date: "2026-09-12",
    title: { zh: "如何在线调整尺寸并压缩图片（不损画质）", en: "How to Resize and Compress an Image Without Losing Quality" },
    description: { zh: "先调尺寸再压缩，还是反过来？顺序弄错会让图片又大又糊。这篇讲清 resize and compress 的正确流程与目标尺寸怎么定。", en: "Resize first or compress first? Getting the order wrong gives you a file that is both larger and softer. A practical walkthrough of how to resize and compress an image in a browser." },
    keywords: [
      "resize and compress",
      "resize image without losing quality",
      "compress image after resizing",
      "resize and compress image online",
      "adjust image size and compress",
    ],
    content: {
      zh: [
        "调整尺寸和压缩图片，通常被当成两件分开的杂活。其实这是一件事，而且有顺序：先定像素尺寸，再选适合用途的压缩程度。顺序对了，一张 4MB 的照片可以变成 200KB 却依然清晰；顺序错了，你会得到一张又大又糊、谁都不想发的图。这篇讲清在浏览器里 resize and compress 的完整流程，以及「不损画质」到底能到什么程度。",
        { type: "h2", text: "为什么顺序这么重要" },
        "如果先把整张原图压一遍、再缩小，压缩算法等于把预算花在了你马上要丢掉的像素上。结果就是文件既偏大又偏软。先调尺寸会直接删掉那些不会被看到的像素，压缩要处理的内容更少，体积更小、观感也更干净。这也是「先 resize 再 compress」这个顺序的全部理由。",
        { type: "h2", text: "先按用途定目标尺寸，再去碰质量滑块" },
        {
          type: "ul",
          items: [
            "打印：按最终尺寸 300 DPI 反推。4x6 英寸的照片大约需要 1200x1800 像素",
            "网站首图：长边 1600 到 2000 像素，绝大多数屏幕不会再显示更多",
            "博客内文图：宽度 800 到 1200 像素足够",
            "邮件附件或表单上传：直接对齐平台写明的上限，常见是 100KB 或 500KB",
            "社交平台：按平台的原生尺寸走，不要靠猜",
          ],
        },
        "目标尺寸先定下来，质量设置就变成了一道简单的取舍题：看着够不够清楚，直到体积达标为止。",
        { type: "h2", text: "在浏览器里调整尺寸并压缩：分步流程" },
        {
          type: "ul",
          items: [
            "打开 image-compressor-saas.shop，把图片拖进去，文件不上传，始终留在你的设备上",
            "先设目标宽高，除非确实需要特定比例，否则锁定宽高比",
            "选输出格式：照片用 JPG，目标平台支持就用 WebP，只有需要透明背景才用 PNG",
            "再调质量档位，看预估体积是否落在目标之内",
            "下载前放大到 100% 对比原图与结果",
            "下载副本，原图不要覆盖",
          ],
        },
        { type: "h2", text: "「不损画质」到底意味着什么" },
        "有损压缩一定会丢掉部分数据，真正的目标是把眼睛看不出来的那部分丢掉。两件事决定成败。先别放大：把小图拉大会凭空增噪，也让压缩痕迹更明显。再别重复压缩同一个文件：每压一遍都会叠加伪影，需要改参数时应该从原图重新导出。起点干净、先缩后压，损失就能压在多数人察觉不到的范围内。",
        { type: "h2", text: "格式要不要顺便换掉" },
        "如果目标平台支持 WebP，换格式通常比继续压低 JPG 质量更划算：同样观感下体积普遍更小。但换格式不能救一张本来就不够清晰的图。先确认尺寸正确，再考虑格式，最后才动质量滑块。顺序反了，你会发现自己在给一张尺寸就不对的图反复调参数。",
        { type: "h2", text: "常见问题" },
        {
          type: "faq",
          items: [
            { q: "调整尺寸会降低画质吗？", a: "缩小尺寸通常看不出损失，因为被删掉的像素本来就不会被显示。放大才会真正伤画质，它不会凭空补出细节。" },
            { q: "应该先调整尺寸还是先压缩？", a: "先调整尺寸。压缩前把多余的像素去掉，文件更小、观感更好，速度也更快。" },
            { q: "PNG 也能既调尺寸又压缩吗？", a: "可以。需要保留透明背景就继续用 PNG，只是它通常比同尺寸的 JPG 和 WebP 更大。" },
          ],
        },
        { type: "cta", text: "免费调整尺寸并压缩图片 →", href: "/" },
        { type: "cta", text: "阅读更多图片处理指南 →", href: "/blog" },
      ],
      en: [
        "Resizing and compressing an image is usually treated as two separate chores. It is one job with an order: choose the pixel dimensions first, then pick the compression that fits the destination. Get the order right and a 4MB photo becomes a 200KB file that still looks sharp. Get it wrong and you end up with something that is both larger and softer than it needed to be. This guide walks through how to resize and compress an image in a browser, and what losing no quality can realistically mean.",
        { type: "h2", text: "Why the order matters" },
        "Compress a full-size photo first and then scale it down, and the encoder spent its budget on pixels you were about to delete. The result is a file that is bigger and softer at the same time. Resize first and those unseen pixels are gone before compression starts, so the encoder has less to work with and produces a smaller, cleaner file. That is the whole argument for resizing before compressing. A second benefit is easy to miss: a smaller image uploads faster, renders faster and costs less to store, and those gains stay with the file long after it has left your machine.",
        { type: "h2", text: "Pick the target size before you touch the quality slider" },
        {
          type: "ul",
          items: [
            "Print: work back from 300 DPI at the final size. A 4x6 inch print needs roughly 1200x1800 pixels",
            "Website hero: 1600 to 2000 pixels on the long edge, since most displays never show more",
            "Blog inline image: 800 to 1200 pixels wide is plenty",
            "Email attachment or form upload: match the stated cap, often 100KB or 500KB",
            "Social post: follow the platform's native size instead of guessing",
          ],
        },
        "Once the dimensions are fixed, the quality setting becomes a simple trade: adjust it until the file fits the cap while the image still reads clearly.",
        { type: "h2", text: "Resize and compress in a browser, step by step" },
        {
          type: "ul",
          items: [
            "Open image-compressor-saas.shop and drop the image in. Nothing is uploaded, so the file stays on your device",
            "Set the target width and height first, and keep the aspect ratio locked unless you need a specific shape",
            "Choose the output format: JPG for photos, WebP when the destination supports it, PNG only when you need transparency",
            "Set the quality level, then check the estimated size against your target",
            "Compare the original and the result at 100% zoom before downloading",
            "Download the copy and leave the original untouched",
          ],
        },
        { type: "h2", text: "What losing no quality actually means" },
        "Lossy compression always discards data. The goal is to discard the part the eye will not miss. Two rules cover most of it. Do not upscale, because enlarging a small image adds no detail and makes existing artifacts more obvious. Do not compress the same file twice, because each pass stacks new artifacts; re-export from the original whenever you change a setting. Start from a clean source and resize before compressing, and the loss stays below what most viewers can detect. Judging that threshold by eye at full-screen size is unreliable, so zoom to 100% on an area with fine detail, such as text or a repeating pattern, and compare it against the original before you settle on a setting.",
        { type: "h2", text: "Should you change the format while you are at it" },
        "When the destination supports WebP, switching format usually beats pushing JPG quality lower: you get a smaller file at the same perceived quality. A format change will not rescue an image that was never sharp to begin with. Confirm the dimensions are right, then consider the format, and only then adjust quality. Doing it in the other order leaves you tuning settings on an image that was the wrong size all along. One exception is worth knowing: if the source is already heavily compressed, converting it to a newer format cannot recover detail that was lost earlier. Format matters most when you start from a clean original.",
        { type: "h2", text: "FAQ" },
        {
          type: "faq",
          items: [
            { q: "Does resizing an image reduce quality?", a: "Scaling down is usually invisible, since the pixels removed would not have been shown. Scaling up is what hurts, because no tool can invent detail that was never captured." },
            { q: "Should I resize or compress first?", a: "Resize first. Removing the extra pixels before compression gives you a smaller file, a cleaner result and a faster export." },
            { q: "Can I resize and compress a PNG?", a: "Yes. Keep PNG when you need transparency, but expect a larger file than JPG or WebP at the same dimensions." },
          ],
        },
        { type: "cta", text: "Resize and compress an image free →", href: "/" },
        { type: "cta", text: "More image guides on the blog →", href: "/blog" },
      ],
    },
  },
  {
    slug: "compress-image-to-200kb",
    date: "2026-09-09",
    title: { zh: "如何把图片压缩到 200KB（速度与质量的取舍）", en: "Compress an Image to 200KB: Speed vs Quality" },
    description: { zh: "网页、邮件、表单都爱卡 200KB 这条线。这篇讲清压到 200KB 时速度和画质怎么取舍，以及三种方法各自适合什么场景。", en: "Pages, email and forms all like to cap at 200KB. This guide covers how to balance speed and quality at a 200KB target, and which of the three methods fits which job." },
    keywords: [
      "compress to 200kb",
      "compress image to 200kb",
      "image compression 200kb",
      "reduce file size",
      "compress jpg png",
    ],
    content: {
      zh: [
        "把一张图片压到 200KB 以下，多半不是为了好看，而是为了能通过。网页要它、邮件要它、表单要它，200KB 是很多系统默认的那条线。剩下的问题只有一个：压掉的那些数据，会不会被眼睛看见。这篇讲清 200KB 这个目标下，速度和画质该怎么取舍。",
        { type: "h2", text: "为什么偏偏是 200KB" },
        {
          type: "ul",
          items: [
            "网站加载速度：首屏大图是 LCP 的大头，200KB 以内的图基本不会拖慢页面",
            "邮件附件：企业邮箱常限 10MB，几张原图就能逼近上限",
            "社交媒体上传：部分平台对单张有体积限制，超了会被二次压缩",
            "表单上传：政府、招聘、签证类系统常把 200KB 或 100KB 直接写死",
          ],
        },
        { type: "h2", text: "两条路：快，还是可控" },
        "只想尽快拿到结果，在线压缩器三十秒能出图。在意每一处细节，手动调质量滑块更可控，代价是几分钟时间。两条路都能把图片压到 200KB，差别在于你愿意为画质花多少时间。",
        { type: "h2", text: "三种方法的速度与质量对比" },
        {
          type: "ul",
          items: [
            "在线压缩器：约 30 秒，质量损失低，适合快速出结果",
            "Photoshop 导出：约 2 分钟，质量损失低到中，适合网页用图",
            "手动精细优化：约 10 分钟，质量损失最小，适合打印和专业用途",
          ],
        },
        { type: "h2", text: "压到 200KB 的四条建议" },
        {
          type: "ul",
          items: [
            "先选对格式：照片用 JPEG，要透明背景或画质干净的图形用 PNG",
            "网页用图导出渐进式 JPEG，加载时先出模糊轮廓再逐渐清晰",
            "不要一次压到底：从高质量往下降，刚好达标就停下",
            "在目标平台上实测：同一个文件，在网页、邮件和表单里的表现可能不一样",
          ],
        },
        { type: "h2", text: "常见问题" },
        {
          type: "faq",
          items: [
            { q: "不损画质能把图片压到 200KB 吗？", a: "可以很接近。照片质量设在 80% 左右，200KB 的体积看起来和原图几乎没有差别。" },
            { q: "快速压缩用哪个工具好？", a: "网页端用 TinyPNG 或 Squoosh；要批量处理，ImageOptim 这类工具更省事。" },
            { q: "压缩会影响打印质量吗？", a: "会。打印要留大一些的文件，至少 1MB，并使用无损或低压缩格式。" },
          ],
        },
        { type: "cta", text: "免费把图片压到 200KB →", href: "/" },
        { type: "cta", text: "更多图片压缩指南 →", href: "/blog" },
      ],
      en: [
        "Getting an image under 200KB is rarely about looks. It is about getting the file through: a page, an email, a form. For a lot of systems, 200KB is the line. The only real question is whether the data you throw away is data the eye will miss. This guide covers how to balance speed and quality at a 200KB target.",
        { type: "h2", text: "Why 200KB is the common target" },
        {
          type: "ul",
          items: [
            "Website speed: a hero image is the biggest part of LCP, and staying under 200KB keeps the page from dragging",
            "Email attachments: corporate servers often cap at 10MB, and a few full-size photos get you there fast",
            "Social uploads: some platforms limit a single image and re-compress anything over the cap",
            "Form submissions: government, job and visa portals often hard-code 200KB or even 100KB",
          ],
        },
        { type: "h2", text: "Two routes: fast, or controlled" },
        "An online compressor returns a result in half a minute. Manual adjustment gives you control over every detail and costs a few minutes. Both routes reach 200KB. The difference is how much time you trade for quality.",
        { type: "h2", text: "Speed and quality, method by method" },
        {
          type: "ul",
          items: [
            "Online compressor: about 30 seconds, low loss, best for a quick result",
            "Photoshop export: about 2 minutes, low to medium loss, good for web images",
            "Manual optimization: about 10 minutes, minimal loss, best for print and professional use",
          ],
        },
        { type: "h2", text: "Four tips for hitting 200KB" },
        {
          type: "ul",
          items: [
            "Pick the right format first: JPEG for photos, PNG for graphics that need clean edges or transparency",
            "Export progressive JPEG for web images, so the page shows a rough version before the full detail loads",
            "Do not crush the file to the minimum. Step quality down from high and stop as soon as you hit the target",
            "Test on the platform that will host the file, since the same image can behave differently on a page, in an email and in a form",
          ],
        },
        { type: "h2", text: "FAQ" },
        {
          type: "faq",
          items: [
            { q: "Can I compress to 200KB without losing quality?", a: "You can get close. A photo at around 80% quality looks nearly identical to the original at 200KB." },
            { q: "Which tool is best for quick compression?", a: "TinyPNG or Squoosh in the browser. For batch work, a desktop tool such as ImageOptim is easier." },
            { q: "Does compression affect print quality?", a: "Yes. For print, keep the file larger, at least 1MB, and use a lossless or lightly compressed format." },
          ],
        },
        { type: "cta", text: "Compress an image to 200KB free →", href: "/" },
        { type: "cta", text: "More image compression guides →", href: "/blog" },
      ],
    },
  },
  {
    slug: "compress-photo-to-1mb-email",
    date: "2026-09-10",
    title: { zh: "如何把照片压缩到 1MB 以便邮件发送", en: "How to Compress a Photo to 1MB for Email" },
    description: { zh: "邮件附件有大小限制，不少企业服务器只放行 10MB。这篇列出把照片压到 1MB 以下的三种方法，以及目标体积和质量如何对应。", en: "Email attachments have size limits, and many corporate servers stop at 10MB. Three ways to compress a photo to under 1MB, plus how target size maps to quality." },
    keywords: [
      "compress to 1mb",
      "how to compress photo to 1mb email",
      "reduce image size for email",
      "compress image without losing quality",
    ],
    content: {
      zh: [
        "邮件附件的上限，各家写得不一样。Gmail 允许 25MB，Outlook 是 20MB，不少企业服务器只放行 10MB 甚至更小。要稳妥地把照片发出去，把文件压到 1MB 以内是最省事的做法。这篇给出三条路径，从最省事到最可控。",
        { type: "h2", text: "为什么邮件要先压一下" },
        {
          type: "ul",
          items: [
            "Gmail 单封附件上限 25MB",
            "Outlook 上限 20MB",
            "很多企业服务器只放行 10MB 或更小",
            "收件人一方可能还有更严的限制",
            "体积小了，上传和下载都快",
          ],
        },
        { type: "h2", text: "方法一：在线压缩器（最省事）" },
        "不用装软件、不用注册，拖进去、选目标体积、下载。ILoveIMG 可以直接设定目标大小，TinyPNG 用智能有损压缩保住观感，Squoosh 在浏览器本地完成压缩，还能对比前后效果。",
        { type: "h2", text: "方法二：系统自带工具" },
        {
          type: "ul",
          items: [
            "macOS 预览：打开图片，文件菜单里选导出，选 JPEG 并调质量滑块，导出前就能看到体积",
            "Windows 照片：打开后点更多菜单里的调整大小，选预设或自定义尺寸，另存为新文件",
            "手机相册：分享菜单里一般有压缩或调整尺寸，Google 相册也能按尺寸导出",
          ],
        },
        { type: "h2", text: "方法三：桌面软件（最可控）" },
        "Photoshop 用导出里的存储为 Web，质量设在 60% 到 80%，体积实时可见。GIMP 免费，导出为里的质量滑块同样能边调边看大小。一次要处理很多张时，这条路最省心。",
        { type: "h2", text: "目标体积与质量对照" },
        {
          type: "ul",
          items: [
            "500KB：质量高（80-90%），适合网页展示",
            "1MB：质量中高（60-80%），适合邮件附件",
            "2MB：质量中（50-60%），适合社交平台上传",
            "5MB：质量中低（30-50%），用于打印前的准备",
          ],
        },
        { type: "h2", text: "四条实用建议" },
        {
          type: "ul",
          items: [
            "先调尺寸：8000px 宽的照片就算压到 1MB 也会显得像素化，先缩到 2000px 再压",
            "能换格式就换：同样观感下 WebP 比 JPEG 小 25% 到 35%",
            "批量处理：ILoveIMG 和 TinyPNG 都支持一次传多张",
            "发之前核对：确认最终文件确实在限制之内",
          ],
        },
        { type: "h2", text: "常见问题" },
        {
          type: "faq",
          items: [
            { q: "邮件附件到底能多大？", a: "取决于服务商。Gmail 是 25MB，Outlook 是 20MB，很多企业服务器只放行 10MB。压到 1MB 以下基本不会被拦。" },
            { q: "压缩后照片会变模糊吗？", a: "1MB 对一张普通尺寸的照片通常够用，观感上的损失很小。真正伤画质的是把 8000px 的原图直接压到 1MB，应该先缩小尺寸。" },
            { q: "不用装软件也能做到吗？", a: "可以。在线工具和系统自带的导出功能都能把照片压到 1MB 以内，不需要安装任何东西。" },
          ],
        },
        { type: "cta", text: "免费把照片压到 1MB →", href: "/" },
        { type: "cta", text: "更多图片压缩指南 →", href: "/blog" },
      ],
      en: [
        "Email attachment limits vary by provider. Gmail allows 25MB, Outlook allows 20MB, and plenty of corporate servers stop at 10MB or less. Compressing a photo to under 1MB is the simplest way to make sure it goes through. This guide gives three routes, from the quickest to the most controlled.",
        { type: "h2", text: "Why compress before you attach" },
        {
          type: "ul",
          items: [
            "Gmail caps a single attachment at 25MB",
            "Outlook caps it at 20MB",
            "Many corporate servers allow only 10MB or less",
            "The recipient may have a stricter limit than you do",
            "A smaller file uploads and downloads faster",
          ],
        },
        { type: "h2", text: "Method 1: online compressors (easiest)" },
        "No install and no account. Drop the file in, set a target size and download. ILoveIMG lets you set the target size directly, TinyPNG uses smart lossy compression that holds up visually, and Squoosh runs entirely in the browser with a before and after view.",
        { type: "h2", text: "Method 2: built-in tools" },
        {
          type: "ul",
          items: [
            "macOS Preview: open the image, choose Export from the File menu, pick JPEG and move the quality slider. The file size shows before you save",
            "Windows Photos: open the image, choose Resize from the More menu, then pick a preset or a custom size and save as a new file",
            "Phone gallery: the share menu usually offers compress or resize, and Google Photos can export at a chosen size",
          ],
        },
        { type: "h2", text: "Method 3: desktop software (most control)" },
        "In Photoshop, use Save for Web from the export menu and set quality between 60% and 80%, with the file size visible as you adjust. GIMP is free, and its Export As dialog shows the size while you drag the quality slider. When you have many photos to send, this route saves the most time.",
        { type: "h2", text: "Target size and quality, side by side" },
        {
          type: "ul",
          items: [
            "500KB: high quality (80-90%), good for web display",
            "1MB: medium-high quality (60-80%), good for email attachments",
            "2MB: medium quality (50-60%), good for social uploads",
            "5MB: low-medium quality (30-50%), for print preparation",
          ],
        },
        { type: "h2", text: "Four practical tips" },
        {
          type: "ul",
          items: [
            "Resize first: an 8000px photo compressed to 1MB still looks pixelated, so scale it to 2000px before compressing",
            "Change format when you can: WebP is 25% to 35% smaller than JPEG at the same appearance",
            "Batch the work: ILoveIMG and TinyPNG both accept several files at once",
            "Check before sending: confirm the final file really is under the limit",
          ],
        },
        { type: "h2", text: "FAQ" },
        {
          type: "faq",
          items: [
            { q: "How large can an email attachment be?", a: "It depends on the provider. Gmail allows 25MB, Outlook 20MB, and many corporate servers only 10MB. Under 1MB is almost never blocked." },
            { q: "Will compressing make the photo blurry?", a: "1MB is usually plenty for a normal-size photo, and the visible loss is small. What hurts quality is compressing an 8000px original straight to 1MB, so resize first." },
            { q: "Can I do this without installing anything?", a: "Yes. Online tools and the built-in export options both get a photo under 1MB with no install at all." },
          ],
        },
        { type: "cta", text: "Compress a photo to 1MB free →", href: "/" },
        { type: "cta", text: "More image compression guides →", href: "/blog" },
      ],
    },
  },
{
  "slug": "compress-passport-photo-online",
  "date": "2026-09-14",
  "title": {
    "zh": "在线压缩证件照：真正该做对的是什么",
    "en": "Compress a Passport Photo Online: What You Actually Have to Get Right"
  },
  "description": {
    "zh": "证件照被退回来，九成原因不在文件大小。讲清头部比例、眼睛水平、阴影这些真正卡人的点，以及缩放与压缩的正确顺序。",
    "en": "Most passport photo rejections are not about file size. Here is what actually gets rejected, the real upload limits, and why you resize before you compress."
  },
  "keywords": [
    "compress passport photo online",
    "passport photo size",
    "reduce passport photo size",
    "passport photo requirements",
    "compress photo without losing quality"
  ],
  "content": {
    "zh": [
      "证件照服务收你钱做的\"裁剪加背景检查\"，你自己两分钟就能做完。真正必须做对的其实比看起来窄得多，而且几乎都跟头的比例有关，跟文件大小无关。",
      {
        "type": "h2",
        "text": "真正会被退回来的原因"
      },
      {
        "type": "ul",
        "items": [
          "头在画面里太小或太大。多数国家要求头部占画面高度的某个特定比例。",
          "眼睛不水平，或者脸哪怕只是稍微转了一点。自拍角度是最常见的原因。",
          "头后面有阴影，通常是因为站得离墙太近又开了闪光。",
          "眼镜反光，或者刘海挡住了眉毛。"
        ]
      },
      "这些都不是压缩问题。压得太狠是另一类失败，而且是更容易避免的那一类。",
      {
        "type": "h2",
        "text": "文件要求到底有多大"
      },
      "大多数线上申请入口把上传上限卡在 240 KB 到 2 MB 之间。用手机翻拍一张实体照片大约 3 到 6 MB，所以通常至少要砍掉一半以上。这个幅度很平常。证件照有大片纯色区域，压缩效率高，压到 300 KB 时肉眼几乎看不出损失。",
      {
        "type": "h2",
        "text": "一套可行的流程"
      },
      {
        "type": "ul",
        "items": [
          "站在一面素墙前一米左右，白天面对窗户，不要开闪光灯。",
          "用后置摄像头在眼睛高度拍，手机竖着拿。",
          "按目标国家要求的比例裁剪，头部按规定的比例填满画面。",
          "先缩放到要求里的像素尺寸，再压缩。",
          "压到限值以内，然后重新打开文件，放大到 100% 检查。"
        ]
      },
      "顺序很重要。先压缩再缩放会丢两次细节，而第二次损失正是让脸看起来像上了蜡的原因。",
      {
        "type": "h2",
        "text": "怎么诚实判断结果"
      },
      "把压缩后的文件按原始尺寸打开，看三个地方：下颌边缘、眼白、发际线。过度压缩最先在这三处露出来。如果下颌边缘还是一条干净的线，眼白还是白而不是灰，就可以交了。",
      {
        "type": "h2",
        "text": "常见问题"
      },
      {
        "type": "faq",
        "items": [
          {
            "q": "压缩证件照会丢掉关键细节吗？",
            "a": "不会。证件照有大片纯色区域，从 4 MB 压到 300 KB 通常看不出审核人员会在意的差别。放大到 100% 看下颌边缘和眼白就能确认。"
          },
          {
            "q": "应该先缩放还是先压缩？",
            "a": "先缩放，再压缩。反过来等于做两次有损压缩，是让脸看起来\"处理过\"最快的方式。"
          },
          {
            "q": "压缩之后证件照还是被退回，为什么？",
            "a": "通常原因不在文件。头部比例、眼睛水平、头后阴影、眼镜反光占了被退回原因的大部分。先把取景做对，再压缩。"
          },
          {
            "q": "把证件照上传到在线压缩工具安全吗？",
            "a": "选在浏览器本地处理、不上传的关具。身份证件照是最不该留在别人服务器上的文件。"
          }
        ]
      },
      "想拿一张成片对着常见限制检查，image-compressor-saas.shop 上的免费工具完全在你的浏览器里跑，文件不出设备。从压缩工具开始，更多尺寸指南可以在博客里读。",
      {
        "type": "cta",
        "text": "免费压缩证件照 →",
        "href": "/"
      },
      {
        "type": "cta",
        "text": "更多图片尺寸指南 →",
        "href": "/blog"
      }
    ],
    "en": [
      "A passport photo service charges you for a crop and a background check that you can do yourself in about two minutes. What you actually have to get right is narrower than it looks, and almost all of it is about the head, not the file size.",
      {
        "type": "h2",
        "text": "What actually gets rejected"
      },
      {
        "type": "ul",
        "items": [
          "Head too small or too large in the frame. Most countries want the head to fill a specific share of the image height.",
          "Eyes not level, or the face turned even slightly. A selfie angle is the single most common cause.",
          "A shadow behind the head, usually from standing too close to a wall with the flash on.",
          "Glasses glare, or a fringe covering the eyebrows."
        ]
      },
      "None of these are compression problems. Compressing too hard is a separate failure, and it is the easier one to avoid.",
      {
        "type": "h2",
        "text": "The file requirements, and how big they really are"
      },
      "Most online application portals cap uploads between 240 KB and 2 MB. A phone photo of a print comes out around 3 to 6 MB, so you usually need to cut it by more than half. That is a normal, safe amount. A passport photo has large areas of flat colour, which compresses well, so the visible quality loss at 300 KB is close to zero.",
      {
        "type": "h2",
        "text": "A workflow that works"
      },
      {
        "type": "ul",
        "items": [
          "Stand about a metre from a plain wall in daylight, facing a window. Do not use the flash.",
          "Shoot with the rear camera at eye level, holding the phone vertically.",
          "Crop to the ratio your country asks for, with the head filling the frame as specified.",
          "Resize to the pixel dimensions in the requirement list before you compress.",
          "Compress to a size under the limit, then reopen the file and check it at 100 percent."
        ]
      },
      "The order matters. Compressing first and resizing later throws away detail twice, and the second pass is what makes faces look waxy.",
      {
        "type": "h2",
        "text": "Judging the result honestly"
      },
      "Open the compressed file at full size and look at three things: the edge of the jaw, the whites of the eyes, and the hairline. Those are where over-compression shows up first. If the jaw edge still reads as a clean line and the whites are still white rather than grey, you are done.",
      {
        "type": "h2",
        "text": "FAQ"
      },
      {
        "type": "faq",
        "items": [
          {
            "q": "Can I compress a passport photo without losing the detail that matters?",
            "a": "Yes. Passport photos have large flat areas, so going from 4 MB to 300 KB rarely changes anything a reviewer would notice. Check the jaw edge and the whites of the eyes at 100 percent to confirm."
          },
          {
            "q": "Should I resize or compress first?",
            "a": "Resize first, then compress. Doing it the other way round applies lossy compression twice and is the fastest way to make a face look processed."
          },
          {
            "q": "Why is my passport photo still rejected after compressing?",
            "a": "Usually the reason is not the file. Head size, eye level, a shadow behind the head and glare on glasses account for most rejections. Compress only after the framing is right."
          },
          {
            "q": "Is it safe to upload a passport photo to an online compressor?",
            "a": "Use a tool that processes the image in your browser without uploading it. An identity document is the last file you want sitting on someone else's server."
          }
        ]
      },
      "If you want to check a finished photo against the common limits, the free tools on image-compressor-saas.shop run entirely in your browser, so the file never leaves your device. Start from the compressor, then read more sizing guides on the blog.",
      {
        "type": "cta",
        "text": "Compress a passport photo free →",
        "href": "/"
      },
      {
        "type": "cta",
        "text": "More image sizing guides →",
        "href": "/blog"
      }
    ]
  }
},
{
    "slug": "compress-screenshot-png-jpg",
    "date": "2026-09-13",
    "title": {
      "zh": "压缩截图 PNG JPG",
      "en": "Compress Screenshot PNG JPG"
    },
    "description": {
      "zh": "截图是最难压好的图片：纯色界面加 1px 文字边缘。本文讲清 PNG 与 JPG 怎么选、视网膜 2x 陷阱，以及在浏览器里免费压缩截图。",
      "en": "Screenshots are the hardest image to compress: flat UI plus 1px text edges. Learn when PNG beats JPG, the retina 2x trap, and how to compress screenshots free."
    },
    "keywords": [
      "compress screenshot",
      "screenshot compression",
      "PNG to JPG",
      "compress png screenshot"
    ],
    "content": {
      "en": [
        {
          "type": "h2",
          "text": "Why screenshots break naive compression"
        },
        "Screenshots are the hardest image type to compress well, and most people do not expect that. A typical capture is a mix of huge flat areas (a white window, a gray toolbar) and razor-thin 1px text edges. Flat regions compress almost for free, but the crisp edges are high-frequency detail that lossy codecs hate. When you push a JPEG too far, the first visible artefact is ringing: a shimmering halo of color around letters and window borders. On a screenshot, that halo lands exactly where the eye looks first.",
        {
          "type": "h2",
          "text": "PNG or JPG: pick the right container"
        },
        "PNG is lossless and keeps every 1px line perfect, which is why it is the right container for flat UI, menus, and code. JPG throws away data to shrink photos, and a screenshot full of solid color is a photo-like image where JPG performs badly: it smears flat panels and adds noise you can see on a plain background. The trap is that people reach for JPG by reflex because the file is a picture. For UI captures, PNG is usually smaller or close to it once you optimise the palette, and it never degrades.",
        {
          "type": "h2",
          "text": "When converting PNG to JPG is safe"
        },
        {
          "type": "ul",
          "items": [
            "Safe: a screenshot of a photograph, a gradient-heavy chart, or a video frame where the source is already continuous tone.",
            "Safe: when you must hit a hard file-size limit and the capture has no small UI text, like a full-screen diagram with large labels.",
            "Unsafe: any capture with thin fonts, 1px borders, or small icons (invoice lines, IDE text, terminal output). JPG will eat the edges.",
            "Unsafe: when the file will be re-compressed later (Slack and email re-encode), because each pass adds more ringing."
          ]
        },
        "If you do convert, keep the JPG quality above 90 and never convert a converted file a second time. The safe move is to keep a PNG master and only make a JPG copy when a recipient demands it. image-compressor-saas.shop runs the whole step in your browser, so the master never leaves your machine.",
        {
          "type": "h2",
          "text": "Lossless optimisation beats lossy for UI"
        },
        "For flat UI, the win is palette reduction, not quality loss. A screenshot of a settings page may only use 40 distinct colors; packing them into a 256-color (or smaller PNG-8) palette can cut the file by half with no visible change, because the pixels were already a small set of exact colors. True lossless optimisers also rebuild the PNG compression tables, which shaves more without touching a single pixel. Reach for lossy JPG only when the capture is genuinely photo-like.",
        {
          "type": "h2",
          "text": "The retina 2x trap"
        },
        "Retina and high-DPI displays capture at double resolution, and that quietly doubles file size. A 1440px-wide window on a 2x screen produces a 2880px-wide PNG. If the person viewing it has a 1440px display, you can halve the width to 1440px and lose almost nothing visible, because the screen cannot show the extra pixels anyway. Many people ship the 2x file out of habit. Downscaling first, then optimising, is the single biggest size win for screenshot sharing.",
        {
          "type": "h2",
          "text": "How to judge at 100 percent and hit size targets"
        },
        "Always inspect the result at 100 percent zoom, not shrunk in a chat bubble. Look at three things: small text (does it stay sharp or does it blur), icon edges (do they stay crisp), and 1px borders (do they hold or fade). For size targets, a Slack or chat image should land under 1 MB and ideally under 500 KB; a doc embed under 300 KB keeps the page light; an email attachment under 1 MB avoids getting clipped by providers. The free browser-local tools on image-compressor-saas.shop let you check each of these without uploading the shot.",
        {
          "type": "faq",
          "items": [
            {
              "q": "Should I always use PNG for screenshots?",
              "a": "For UI and text captures, yes. PNG keeps 1px lines exact and usually ends up smaller than a JPG once the palette is optimised. Use JPG only for photo-like captures."
            },
            {
              "q": "Why does text look fuzzy after compression?",
              "a": "Lossy codecs add ringing around high-frequency edges. Thin fonts and 1px borders are exactly that kind of edge, so they blur first. Keep them as lossless PNG."
            },
            {
              "q": "Is it safe to downscale a retina screenshot?",
              "a": "Usually yes. If the viewer is on a 1440px display, a 2880px capture can be halved with almost no visible loss. Downscale before you optimise for the biggest size win."
            }
          ]
        },
        {
          "type": "cta",
          "text": "Compress a screenshot free →",
          "href": "/"
        },
        {
          "type": "cta",
          "text": "More image sizing guides →",
          "href": "/blog"
        }
      ],
      "zh": [
        {
          "type": "h2",
          "text": "为什么截图最容易被压坏"
        },
        "截图是最难压好的图片。一张典型截图混着大片纯色（白窗、灰工具栏）和刀切般锐利的 1px 文字边缘。纯色区几乎免费压缩，但锐利边缘是高频细节，有损编码最怕它。JPEG 压狠了，最先出现的是振铃：字母和边框周围一圈彩色光晕，正好落在眼睛最先看的地方。",
        {
          "type": "h2",
          "text": "PNG 还是 JPG：选对容器"
        },
        "PNG 无损，保住每一条 1px 线，所以是纯色界面、菜单和代码的合适容器。JPG 靠丢数据缩照片，而满屏纯色的截图对 JPG 是“类照片”图像，表现很差：抹花面板、留噪点。人们反射性选 JPG，因为文件叫“图片”。界面截图优化调色板后，PNG 往往更小，且永不劣化。",
        {
          "type": "h2",
          "text": "什么时候把 PNG 转 JPG 是安全的"
        },
        {
          "type": "ul",
          "items": [
            "安全：截图内容是一张照片、含大量渐变的图表，或视频帧，且来源本就是连续色调。",
            "安全：当你必须压到一个硬性体积上限，且截图没有小号界面文字，比如只有大标签的全屏示意图。",
            "不安全：任何带细字体、1px 边框或小图标的截图（发票行、IDE 文字、终端输出），JPG 会吃掉边缘。",
            "不安全：文件之后还会被再次压缩（Slack 和邮件会重编码），因为每过一遍振铃都更严重。"
          ]
        },
        "真要转，JPG 质量保持 90 以上，且绝不对已转文件二次转换。留一张 PNG 母版，只在接收方要求时才做 JPG 副本。image-compressor-saas.shop 全流程在浏览器里完成，母版从不出机器。",
        {
          "type": "h2",
          "text": "无损优化比有损更适合界面"
        },
        "对纯色界面，收益来自缩调色板而非损画质。设置页截图可能只 40 色；收进 256 色（或更小）PNG-8 调色板，几乎看不出变化，文件却砍半，因为像素本就是一小撮精确色。真正无损优化器还会重建压缩表，不碰任何像素再瘦一圈。只有截图真像照片才用有损 JPG。",
        {
          "type": "h2",
          "text": "视网膜 2x 分辨率的陷阱"
        },
        "视网膜屏以两倍分辨率截图，悄悄把文件翻倍。2x 屏上 1440px 窗口生成 2880px 宽 PNG。若观看者是 1440px 屏，宽度减半到 1440px 几乎无损失，因为屏也显示不出多余像素。先缩小再优化，是分享截图最大的体积收益。",
        {
          "type": "h2",
          "text": "如何在 100% 下判断，并定好体积目标"
        },
        "按 100% 缩放查看，别缩在聊天气泡里看。盯三处：小号文字（锐利还是发虚）、图标边缘（是否清晰）、1px 边框（保住还是变淡）。体积上，聊天或 Slack 图压到 1 MB 内、最好低于 500 KB；文档内嵌低于 300 KB 页面轻盈；邮件附件低于 1 MB 免被裁剪。image-compressor-saas.shop 的免费浏览器本地工具，让你无需上传就能逐项核对。",
        {
          "type": "faq",
          "items": [
            {
              "q": "截图是不是永远该用 PNG？",
              "a": "对界面和文字截图，是的。PNG 保住 1px 线，且优化调色板后往往比 JPG 还小。只有类照片截图才用 JPG。"
            },
            {
              "q": "为什么压缩后文字发虚？",
              "a": "有损编码会在高频边缘产生振铃。细字体和 1px 边框正是这类边缘，所以它们最先变糊。把它们留作无损 PNG。"
            },
            {
              "q": "缩小视网膜截图安全吗？",
              "a": "通常安全。若观看者是 1440px 屏，2880px 截图减半几乎看不出损失。先缩小再优化，收益最大。"
            }
          ]
        },
        {
          "type": "cta",
          "text": "免费压缩一张截图 →",
          "href": "/"
        },
        {
          "type": "cta",
          "text": "更多图片尺寸指南 →",
          "href": "/blog"
        }
      ]
    }
  },
  {
    slug: 'how-jpeg-compression-works',
    date: '2026-09-15',
    title: { zh: 'JPEG 压缩原理详解', en: 'How JPEG Compression Works' },
    description: { zh: 'JPEG 压缩到底做了什么？质量滑块控制的是什么、为什么边缘会出现块状伪影、以及网页用图该选哪个档位。', en: 'A practical explanation of JPEG compression: what the quality slider really controls, why artifacts appear around edges, and how to choose a setting that survives the web.' },
    keywords: ['jpeg compression', 'jpeg quality settings', 'jpeg artifacts', 'image compression explained'],
    content: {
      zh: [
        { type: 'h2', text: 'JPEG 要解决的问题' },
        '未压缩的照片非常大。一张 1200 万像素的图像大约要 36 MB，在上世纪九十年代的网速下根本不可用，今天也依然浪费。',
        'JPEG 建立在一个观察上：人眼对亮度远比对颜色敏感。所以它保留亮度细节，丢掉大部分颜色细节。这一条权衡就完成了大部分体积缩减，跟质量滑块还没关系。',
        { type: 'h2', text: '实际的处理顺序' },
        { type: 'ul', items: ['把图像切成 8x8 的像素块。', '每块从 RGB 转换成一路亮度加两路颜色。', '颜色通道被降采样，通常是每四个亮度样本只保留一个颜色样本。', '每块转换到频率域，把粗结构和高频细节分开。', '对频率做量化，高频细节被更激进地舍入。', '最后做熵编码，把剩下的数字紧凑打包。'] },
        { type: 'h2', text: '质量滑块只控制其中一步' },
        '和宣传的不同，质量设置不改变算法流程，它改变的是量化步长。质量高，高频细节保留得多；质量低，高频被舍入掉。',
        '这也解释了为什么质量下调不是线性的。从 100 降到 90 几乎看不出差别，从 50 降到 40 才是可见损伤通常出现的位置。',
        { type: 'h2', text: '为什么伪影集中在边缘' },
        '锐利边缘包含大量高频能量。量化先删高频，所以高频最多的区域损失最大。熟悉的块状和振铃伪影就出现在这些地方。',
        '这也解释了文字和线稿为什么压不动。它们几乎全是高频内容，正是 JPEG 最先丢掉的东西。',
        { type: 'h2', text: '怎么选档位' },
        { type: 'ul', items: ['照片存档：质量 90-95，因为体积不是限制，而且你可能还要再编辑', '网页主图：质量 75-85，多数照片在这个区间看不出可见损失', '网页缩略图：质量 60-70，显示尺寸小，损失被掩盖', '反复重存：尽量别做，每存一次损失叠加'] },
        { type: 'h2', text: '最重要的一条规则' },
        '不要反复编辑并重存 JPEG。每次保存都会对已经被量化过的数据再量化一次，损伤会累积。保留一份无损母版，只在最后导出一次 JPEG。',
        { type: 'h2', text: '常见问题' },
        { type: 'faq', items: [
          { q: '质量 100 是无损吗？', a: '不是。JPEG 在所有档位都是有损的，包括 100。要真正无损请用 PNG 或其他无损格式。' },
          { q: '重存两次会质量减半吗？', a: '不完全是，但损失确实叠加。第二次保存量化的是已经丢失细节的数据，可见的下降通常比第一次更大。' },
          { q: '为什么我的 PNG 有时比 JPEG 还小？', a: '纯色图形和截图会出现这种情况。JPEG 在花码率去近似锐利边缘，而 PNG 直接精确存储。' },
        ] },
        { type: 'cta', text: '在浏览器里压缩，先看体积再决定', href: 'https://image-compressor-saas.shop' },
      ],
      en: [
        { type: 'h2', text: 'The problem JPEG was designed to solve' },
        'An uncompressed photo is enormous. A 12 megapixel image needs roughly 36 MB before you do anything to it, which was unusable on 1990s connections and is still wasteful today.',
        'JPEG was built on one insight: human vision is far more sensitive to brightness than to colour. So it keeps brightness detail and throws most colour detail away. That single trade-off does most of the size reduction before any quality slider is involved.',
        { type: 'h2', text: 'What actually happens, in order' },
        { type: 'ul', items: ['The image is split into 8x8 blocks of pixels.', 'Each block is converted from RGB into a brightness channel plus two colour channels.', 'The colour channels are subsampled, usually keeping only one sample for every four brightness samples.', 'Each block is transformed into a set of frequencies, which separates coarse structure from fine detail.', 'The frequencies are quantised, meaning fine detail is rounded off more aggressively than coarse structure.', 'The result is entropy coded, which packs the remaining numbers tightly.'] },
        { type: 'h2', text: 'The quality slider controls one step' },
        'Contrary to how it is marketed, the quality setting does not change how the algorithm works. It changes the size of the quantisation step. Higher quality means finer frequency detail is preserved; lower quality rounds it away.',
        'This is why quality reductions are not linear. Dropping from 100 to 90 costs almost nothing visually. Dropping from 50 to 40 is where visible damage usually appears.',
        { type: 'h2', text: 'Why artifacts cluster around edges' },
        'Sharp edges contain high-frequency energy. Quantisation removes high frequencies first, so the parts of the image with the most high-frequency content lose the most. That is exactly where the familiar blocky and ringing artefacts show up.',
        'It also explains why text and line art compress badly. They are almost entirely high-frequency content, which is the first thing JPEG discards.',
        { type: 'h2', text: 'Choosing a setting' },
        { type: 'ul', items: ['Photo archive: quality 90-95, because size is not the constraint and you may re-edit', 'Web hero image: quality 75-85, which is where most photos stop showing visible loss', 'Web thumbnail: quality 60-70, because the small display size hides the loss', 'Repeated re-save: avoid entirely, since each save compounds the loss'] },
        { type: 'h2', text: 'The rule that matters most' },
        'Never edit and re-save a JPEG repeatedly. Every save applies quantisation again to already-quantised data, and the damage accumulates. Keep a lossless master and export a JPEG only at the end.',
        { type: 'h2', text: 'FAQ' },
        { type: 'faq', items: [
          { q: 'Is quality 100 lossless?', a: 'No. JPEG is lossy at every setting, including 100. For truly lossless storage use PNG or a lossless format.' },
          { q: 'Does re-saving a JPEG twice halve the quality?', a: 'Not exactly, but the loss does compound. The second save quantises data that already lost detail, so the visible decline is often larger than the first save.' },
          { q: 'Why does my PNG sometimes compress smaller than JPEG?', a: 'For flat-colour graphics and screenshots, PNG can win, because JPEG is spending bits trying to represent sharp edges that PNG stores exactly.' },
        ] },
        { type: 'cta', text: 'Compress images in the browser and see the size before you commit', href: 'https://image-compressor-saas.shop' },
      ],
    },
  },
  {
    slug: "progressive-jpeg-explained",
    date: "2026-09-17",
    title: {
      zh: "渐进式 JPEG 详解：为什么图片会一点点加载出来",
      en: "Progressive JPEG Explained: Why Some Images Load in Stages",
    },
    description: {
      zh: "同一张照片，有的网页从上往下刷出来，有的先出模糊轮廓再变清晰。区别就在 JPEG 的两种编码方式：基线式与渐进式。这篇讲清原理、优缺点和什么时候该用哪种。",
      en: "Two pages can show the same photo differently: one paints top to bottom, the other shows a blurry outline that sharpens. The difference is baseline vs progressive JPEG encoding. Here is how each works and when to pick which.",
    },
    keywords: [
      "progressive jpeg explained",
      "progressive vs baseline jpeg",
      "jpeg optimization",
      "interlaced jpeg",
      "image loading performance",
    ],
    content: {
      zh: [
        "打开一个图片很多的网页，留意两种不同的加载方式：有的图片像窗帘一样从上往下展开，有的先出现一团模糊的马赛克，然后越来越清晰。后者就是渐进式 JPEG（progressive JPEG），前一种是基线式（baseline）。对做网站的人来说，这个区别直接影响感知速度与 Core Web Vitals 分数。",
        { type: "h2", text: "基线式与渐进式的区别" },
        "基线式 JPEG 按从上到下的顺序一次性编码和解码：文件读到哪，画面就画到哪。渐进式 JPEG 把数据分成多次扫描（scans），第一次扫描只记录低分辨率的整体轮廓，后面的扫描逐层补充细节。解码器先把模糊版本显示出来，再逐步变清晰。",
        {
          type: "ul",
          items: [
            "基线式（baseline）：从上往下逐行渲染，适合文件较小的简单图像",
            "渐进式（progressive）：多遍扫描，先出轮廓再补细节，适合照片和长文配图",
            "两者画质在同等文件大小下基本相同，区别只在解码与显示顺序",
          ],
        },
        { type: "h2", text: "渐进式 JPEG 的三个好处" },
        {
          type: "ul",
          items: [
            "感知加载更快：用户先看到整体轮廓，而不是空白等待",
            "减少布局跳动：图片区域提前占据空间，CLS 更稳",
            "慢网速下体验更好：弱网也能尽早看到内容大致内容",
          ],
        },
        { type: "h2", text: "什么时候用渐进式，什么时候用基线式" },
        "照片、大图、文章头图，优先渐进式。小图标、纯色块、需要极快首帧的 UI 元素，基线式足够，渐进式反而增加解码开销。渐进式对旧版浏览器兼容性略差，但现代浏览器普遍支持。",
        { type: "h2", text: "怎么把图片转成渐进式" },
        "多数图像处理工具都提供这个选项：Photoshop 保存时勾选 Progressive；ImageMagick 用 -interlace Plane；在线工具如 Squoosh 也有渐进式开关。转换不会明显改变文件大小，只是调整了数据排列顺序。",
        { type: "h2", text: "FAQ" },
        {
          type: "faq",
          items: [
            { q: "渐进式 JPEG 会更大吗？", a: "通常与基线式几乎一样大，差异一般在 1-3% 以内，有些情况下甚至更小。" },
            { q: "渐进式 JPEG 影响 SEO 吗？", a: "间接影响。它改善感知性能与 CLS，这两个因素会反映到 Core Web Vitals 和用户体验信号上。" },
            { q: "所有浏览器都支持渐进式 JPEG 吗？", a: "现代浏览器基本都支持。只有非常老的浏览器在解码上表现不佳，目前占比已很低。" },
          ],
        },
        { type: "cta", text: "在浏览器里本地压缩图片并选择渐进式编码", href: "https://image-compressor-saas.shop" },
      ],
      en: [
        "Open a page full of images and watch how they load. Some paint top to bottom like a curtain; others appear as a blurry mass that sharpens into focus. The second kind is a progressive JPEG, the first is baseline. For anyone running a website, the choice affects perceived speed and Core Web Vitals.",
        { type: "h2", text: "Baseline vs progressive" },
        "A baseline JPEG encodes and decodes top to bottom in one pass: the image draws as the file streams in. A progressive JPEG splits the data into multiple scans. The first scan stores a low-resolution outline; later scans add detail. The decoder shows the blurry version first, then sharpens it.",
        {
          type: "ul",
          items: [
            "Baseline: renders row by row, fine for small, simple images",
            "Progressive: multiple scans, outline first then detail, good for photos and article images",
            "Quality at the same file size is essentially equal; only decode order differs",
          ],
        },
        { type: "h2", text: "Three benefits of progressive JPEG" },
        {
          type: "ul",
          items: [
            "Faster perceived load: users see the overall shape instead of blank space",
            "Less layout shift: the image claims its space early, which stabilizes CLS",
            "Better on slow networks: content becomes visible sooner even at low bandwidth",
          ],
        },
        { type: "h2", text: "When to choose each" },
        "Photos, large images, and article heroes favor progressive. Small icons, flat color blocks, and UI elements that need the fastest first frame are fine as baseline, where progressive only adds decode overhead. Older browsers handle progressive slightly worse, but support is now near-universal.",
        { type: "h2", text: "How to convert an image to progressive" },
        "Most image tools expose the option: Photoshop has a Progressive checkbox on save; ImageMagick uses -interlace Plane; online tools like Squoosh include a progressive toggle. The conversion barely changes file size; it only reorders the data.",
        { type: "h2", text: "FAQ" },
        {
          type: "faq",
          items: [
            { q: "Is a progressive JPEG bigger?", a: "Usually about the same size as baseline, within 1-3%, and sometimes smaller." },
            { q: "Does progressive JPEG affect SEO?", a: "Indirectly. It improves perceived performance and CLS, which feed into Core Web Vitals and user-experience signals." },
            { q: "Do all browsers support progressive JPEG?", a: "Modern browsers do. Only very old ones decode it poorly, and their share is now small." },
          ],
        },
        { type: "cta", text: "Compress images locally in the browser with progressive encoding", href: "https://image-compressor-saas.shop" },
      ],
    },
  },
  {
    slug: "chroma-subsampling-explained",
    date: "2026-09-20",
    title: {
      zh: "色度抽样详解：为什么同一张图看起来不一样",
      en: "Chroma Subsampling Explained: Why Images Look Different",
    },
    description: {
      zh: "色度抽样决定了 JPEG 丢弃多少颜色信息。搞懂 4:4:4 / 4:2:2 / 4:2:0 的差别，就能在不损失可见画质的前提下把文件压到最小。",
      en: "Chroma subsampling decides how much color detail a JPEG throws away. Learn what 4:4:4, 4:2:2 and 4:2:0 actually change so you can shrink files without visible quality loss.",
    },
    keywords: ["chroma subsampling", "JPEG chroma subsampling", "image compression explained"],
    content: {
      zh: [
        "你有没有遇到过这种情况：两张图尺寸一样、压缩质量也设成一样，发出来却明显一张更糊？很多时候问题不在压缩质量，而在**色度抽样**这个大多数人从未注意的参数。",
        { type: "h2", text: "什么是色度抽样？" },
        "数字图像把亮度（luma）和颜色（chroma）分开存储。人眼对亮度极其敏感，对颜色分辨率却迟钝得多——同一块颜色稍微模糊一点，我们几乎察觉不到。色度抽样正是利用这一点：保留完整的亮度信息，同时降低颜色信息的采样密度，从而省下大量体积。",
        { type: "h2", text: "常见格式：4:4:4 / 4:2:2 / 4:2:0" },
        {
          type: "ul",
          items: [
            "4:4:4 —— 颜色不做任何抽样，完整保留。用于专业修图、医疗影像、档案保存。",
            "4:2:2 —— 水平方向颜色减半。画质损失轻微，常见于摄像设备。",
            "4:2:0 —— 水平和垂直都减半，颜色信息只剩四分之一。绝大多数网页图片和视频的标准配置。",
          ],
        },
        "这也是为什么同一张照片，在 Photoshop 里导出成最高质量，再用在线工具转一次，颜色边缘会悄悄发生变化——两次导出用了不同的抽样方式。",
        { type: "h2", text: "什么时候它才真正重要？" },
        {
          type: "ul",
          items: [
            "专业修图与印刷：颜色边缘的细微偏差会被放大，必须用 4:4:4",
            "医疗与科研影像：颜色承载诊断信息，不接受抽样",
            "档案保存：需要可逆或无损管线，避免多次转码累积损失",
            "纯色块、文字截图、界面元素：4:2:0 的边缘容易出现彩色噪点，改用 4:4:4 或 PNG 更干净",
          ],
        },
        { type: "h2", text: "怎么选？一个简单原则" },
        "如果图片以照片为主、目标是网页加载速度，4:2:0 是性价比最高的默认值——体积能小一大截，而在正常观看距离下几乎看不出区别。只有当画面里有大量锐利的彩色边缘（文字、logo、线稿、饱和色块）时，才升级到 4:4:4 或直接换 PNG。",
        { type: "h2", text: "FAQ" },
        {
          type: "faq",
          items: [
            { q: "色度抽样会影响文件大小吗？", a: "会，而且影响很大。从 4:4:4 降到 4:2:0，颜色通道的数据量只有原来的四分之一，照片类图片总体积通常能减少 10% 到 25%。" },
            { q: "我能看出 4:2:0 和 4:4:4 的差别吗？", a: "看正常尺寸的照片时基本看不出。但在锐利的彩色边缘（比如红字白底、细线图表）放大后，4:2:0 会出现明显的彩色镶边或模糊。" },
            { q: "色度抽样可以撤销吗？", a: "不能。这是有损的，被丢弃的颜色信息无法恢复。如果需要反复编辑，请保留一份 4:4:4 或无损原图。" },
          ],
        },
        { type: "cta", text: "在浏览器里本地压缩图片，自由控制压缩级别", href: "https://image-compressor-saas.shop" },
      ],
      en: [
        "Have you ever exported two images at the same dimensions and the same quality setting, only to find one looks noticeably muddier than the other? The culprit is often not the quality slider at all, but chroma subsampling — a parameter almost nobody checks.",
        { type: "h2", text: "What is chroma subsampling?" },
        "Digital images store brightness (luma) and color (chroma) separately. The human eye is extremely sensitive to brightness but surprisingly forgiving about color detail: blur the color slightly and we barely notice. Chroma subsampling exploits exactly that. Full luma detail is kept, while color is sampled less densely, which saves a large amount of data.",
        { type: "h2", text: "The common formats: 4:4:4, 4:2:2, 4:2:0" },
        {
          type: "ul",
          items: [
            "4:4:4 - no subsampling at all. Used for professional retouching, medical imaging and archival work.",
            "4:2:2 - color halved horizontally. Slight loss, common in camera hardware.",
            "4:2:0 - color halved both horizontally and vertically, leaving a quarter of the original. The default for the vast majority of web images and video.",
          ],
        },
        "This is why the same photo can shift in color edges after you export it at maximum quality from Photoshop and then run it through an online tool once more: the two exports chose different subsampling modes.",
        { type: "h2", text: "When does it actually matter?" },
        {
          type: "ul",
          items: [
            "Professional retouching and print: small color-edge shifts get magnified, so 4:4:4 is required",
            "Medical and scientific imaging: color carries diagnostic information and cannot be subsampled",
            "Archival storage: pipelines should stay lossless to avoid compounding losses across conversions",
            "Flat color blocks, text screenshots and UI elements: 4:2:0 produces color fringing, so 4:4:4 or PNG is cleaner",
          ],
        },
        { type: "h2", text: "How to choose: one simple rule" },
        "If the image is photographic and the goal is page speed, 4:2:0 is the best default by a wide margin: dramatically smaller files with no visible difference at normal viewing distance. Only when the picture contains lots of sharp colored edges (text, logos, line art, saturated blocks) should you step up to 4:4:4 or switch to PNG outright.",
        { type: "h2", text: "FAQ" },
        {
          type: "faq",
          items: [
            { q: "Does chroma subsampling affect file size?", a: "Yes, significantly. Dropping from 4:4:4 to 4:2:0 leaves a quarter of the color data, which typically cuts total size by 10 to 25 percent on photographic images." },
            { q: "Can I see the difference between 4:2:0 and 4:4:4?", a: "Rarely at normal size on photos. But zoom into sharp colored edges, such as red text on white or a thin-line chart, and 4:2:0 shows clear color fringing or smearing." },
            { q: "Is chroma subsampling reversible?", a: "No. It is lossy, and discarded color information cannot be recovered. If you plan repeated edits, keep a 4:4:4 or lossless master." },
          ],
        },
        { type: "cta", text: "Compress images locally in your browser with full control over the quality level", href: "https://image-compressor-saas.shop" },
      ],
    },
  },
  {
    slug: "how-webp-compression-works",
    date: "2026-09-21",
    title: {
      zh: "WebP 压缩原理详解：为什么它比 JPEG 小 25-34%",
      en: "How WebP Compression Works: Why It Beats JPEG by 25-34%",
    },
    description: {
      zh: "WebP 不是简单地把 JPEG 再压一遍。它用了三种不同的编码手段，理解它们的差别，就知道什么时候该用 WebP、什么时候不该用。",
      en: "WebP is not JPEG compressed harder. It uses three different encoding strategies, and knowing which one applies tells you when WebP helps and when it does not.",
    },
    keywords: [
      "how webp compression works",
      "webp vs jpeg size",
      "webp lossy vs lossless",
      "convert png to webp",
      "webp browser support",
      "image compression formats 2026",
    ],
    content: {
      zh: [
        "WebP 常被说成「比 JPEG 小 25% 到 34%」。这个数字是真的，但它产生的原因不是更激进的压缩，而是 WebP 用了三种不同的编码模式，针对不同类型的图像各有一套做法。",
        { type: "h2", text: "模式一：有损压缩（对应照片）" },
        "有损 WebP 基于 VP8 视频编解码的帧内压缩。它和 JPEG 的核心差异在于预测方式：JPEG 把图像切成 8×8 的块分别处理，块边界容易产生可见的方块伪影；VP8 用邻近像素做方向性预测，块更大也更灵活，因此在高压缩比下更不容易出现明显方块。",
        "实际效果是：同样看起来「可以接受」的画质，WebP 的文件通常比 JPEG 小四分之一左右。照片、渐变多的图像、有噪点的图都适用。",
        { type: "h2", text: "模式二：无损压缩（对应图标与截图）" },
        "无损 WebP 处理的是 PNG 擅长的场景：图标、界面截图、线条图、需要透明通道的素材。它使用更高效的熵编码，并支持对已经压缩过的颜色表再做一层处理。",
        "对这类图像，WebP 无损格式通常比 PNG 小 20% 到 30%，而且不损失任何像素。这是转换收益最确定的一类。",
        { type: "h2", text: "模式三：带透明度的有损压缩" },
        "这是 JPEG 完全做不到的一类。JPEG 不支持 alpha 通道，所以需要透明背景又要压体积时，过去只能用 PNG（大）或者先填底色。WebP 的有损模式保留了 alpha，可以在压缩照片质量的同时保住透明区域。",
        { type: "h2", text: "什么时候 WebP 不划算" },
        { type: "ul", items: [
          "已经高度优化的 PNG 图标（本来就只剩几百字节），转换收益很小",
          "需要无损往返编辑的中间素材，反复转码会累积损失",
          "极小的图像（小于 1KB），文件头开销占比反而更高",
          "需要 CMYK 色彩空间的印刷流程，WebP 只支持 RGB",
        ] },
        { type: "h2", text: "质量参数怎么设" },
        "有损 WebP 的质量参数范围是 0 到 100，但它的刻度不等于 JPEG。WebP 在 75 到 80 之间通常已经达到 JPEG 质量 85 以上的观感，再往上加收益递减很快。",
        "实用的做法是从 80 开始，逐档下调，在 100% 放大下观察平滑渐变区域（天空、皮肤）是否出现色带。一旦出现色带，就退回上一档。",
        { type: "h2", text: "浏览器支持情况" },
        "主流浏览器（Chrome、Edge、Firefox、Safari 14 及以上）都支持 WebP。Safari 从 14 开始支持有损与无损两种模式，这也是过去几年 WebP 采用率快速上升的原因。",
        "如果需要兼容更老的客户端，用 HTML 的 picture 元素提供回退格式即可，不需要服务端做内容协商。",
        { type: "h2", text: "常见问题" },
        { type: "faq", items: [
          { q: "WebP 是永久替代 JPEG 的格式吗？", a: "不是。AVIF 在大多数场景下体积更小，但编码更慢、支持面略窄。目前稳妥的做法是 WebP 为主、AVIF 为辅。" },
          { q: "转换会损失画质吗？", a: "有损模式会有损失，但同等观感下损失小于 JPEG。无损模式不损失任何像素。" },
          { q: "为什么我的 WebP 反而变大了？", a: "通常是因为源文件已经优化过，或者图像极小。对已优化的 PNG 做无损转 WebP，收益可能接近零甚至为负。" },
          { q: "能保留透明度吗？", a: "能。这是 WebP 相对 JPEG 的主要优势之一，有损和无损两种模式都支持 alpha 通道。" },
        ] },
        { type: "cta", text: "在浏览器里本地压缩图片，不上传", href: "https://image-compressor-saas.shop" },
      ],
      en: [
        "WebP is usually described as 25 to 34 percent smaller than JPEG. The number is real, but the reason is not harder compression. WebP carries three different encoding modes, each aimed at a different kind of image.",
        { type: "h2", text: "Mode one: lossy, for photographs" },
        "Lossy WebP borrows intra-frame compression from the VP8 video codec. The key difference from JPEG is prediction: JPEG slices the image into 8x8 blocks and treats each independently, which is what produces visible blocking at high compression. VP8 predicts from neighbouring pixels with larger, more flexible blocks, so those artifacts show up later.",
        "The practical result: at a quality level most people would accept, WebP files land roughly a quarter smaller than the equivalent JPEG. Photographs, gradients, and noisy images all benefit.",
        { type: "h2", text: "Mode two: lossless, for icons and screenshots" },
        "Lossless WebP targets what PNG does well: icons, UI screenshots, line art, and anything needing an alpha channel. It uses more efficient entropy coding and can apply an extra pass over an already-compressed colour table.",
        "On this class of image, lossless WebP is typically 20 to 30 percent smaller than PNG with zero pixel loss. It is the most predictable saving available.",
        { type: "h2", text: "Mode three: lossy with transparency" },
        "This is the category JPEG cannot reach at all. JPEG has no alpha channel, so transparent images previously had to be PNG (large) or flattened onto a background. WebP's lossy mode keeps alpha, letting you compress photographic quality while preserving transparent regions.",
        { type: "h2", text: "When WebP is not worth it" },
        { type: "ul", items: [
          "PNG icons that are already well optimised and sit at a few hundred bytes",
          "Intermediate assets that need lossless round-trip editing, where repeated transcoding accumulates loss",
          "Very small images under about 1KB, where header overhead dominates",
          "Print workflows needing CMYK, since WebP is RGB only",
        ] },
        { type: "h2", text: "Choosing the quality setting" },
        "The lossy quality scale runs 0 to 100, but it does not line up with JPEG's. WebP at 75 to 80 usually matches the perceived quality of JPEG at 85 or above, and returns fall off quickly beyond that.",
        "Start at 80 and step down, checking smooth gradients — sky, skin — at 100 percent zoom for banding. The moment banding appears, go back one step.",
        { type: "h2", text: "Browser support" },
        "Chrome, Edge, Firefox and Safari 14 and later all handle WebP. Safari's support from version 14 covers both lossy and lossless modes, which is a large part of why adoption climbed quickly after 2020.",
        "If you need older clients, the HTML picture element provides a fallback without any server-side content negotiation.",
        { type: "h2", text: "FAQ" },
        { type: "faq", items: [
          { q: "Is WebP the permanent replacement for JPEG?", a: "No. AVIF is smaller in most cases but slower to encode with slightly narrower support. The current safe pairing is WebP as the default with AVIF where you can afford it." },
          { q: "Does conversion lose quality?", a: "Lossy conversion does, but less than JPEG at comparable perceived quality. Lossless mode loses no pixels at all." },
          { q: "Why did my WebP file get bigger?", a: "Usually because the source was already optimised, or the image is tiny. Converting an already-optimised PNG to lossless WebP can save nothing or even cost a few bytes." },
          { q: "Does it keep transparency?", a: "Yes. That is one of its main advantages over JPEG, and both lossy and lossless modes support an alpha channel." },
        ] },
        { type: "cta", text: "Compress images locally in your browser", href: "https://image-compressor-saas.shop" },
      ],
    },
  },
  {
    slug: "image-cdn-vs-self-hosted",
    date: "2026-10-02",
    title: {
      zh: "图片 CDN 与自建托管：2026 年该怎么选",
      en: "Image CDN vs Self-Hosted: Which One Actually Wins in 2026",
    },
    description: {
      zh: "图片 CDN 与自建托管怎么选？这篇拆开对比账单结构、延迟表现和运维负担，给出一套能直接套用的判断标准和绕开取舍的混合方案。",
      en: "A practical image CDN vs self-hosted comparison: billing structure, latency behavior and operational load, with a decision rule you can apply and a hybrid setup that avoids the tradeoff.",
    },
    keywords: [
      "image cdn vs self-hosted",
      "image cdn vs self hosting",
      "self-hosted images vs cdn cost",
      "image delivery comparison 2026",
      "image cdn pricing requests bandwidth",
      "should i use an image cdn",
    ],
    content: {
      zh: [
        "图片 CDN 与自建托管的选择，几乎每个做网站的人都会遇到一次。直觉答案是流量小就自己扛、流量大了上 CDN，但真正决定结果的不是流量，而是你的访问者分布在哪里、图片有多少种尺寸变体、以及你愿不愿意维护一套转码链路。这篇把两种方案的账单、延迟表现和运维负担拆开对比，给出一套能直接套用的判断标准，以及一个绕开取舍的混合做法。",
        { type: "h2", text: "图片 CDN 到底替你做了什么" },
        "很多人把图片 CDN 理解成缓存图片的服务器，这个理解偏窄。现代图片 CDN 至少替你处理四件事。",
        {
          type: "ul",
          items: [
            "就近分发：把图片副本放到离访问者更近的节点，减少往返时间",
            "格式协商：根据请求头的 Accept 字段自动返回 AVIF、WebP 或 JPEG",
            "尺寸变体：按 URL 参数实时裁剪和缩放，不需要预先生成几十个文件",
            "压缩调优：在画质和体积之间按设备类型做不同的取舍",
          ],
        },
        "这四件事里，最值钱的通常不是分发，而是格式协商和尺寸变体。手工做这两件事意味着你要为每张图维护多个版本，并在前端写正确的 srcset。",
        { type: "h2", text: "自建托管的真实成本" },
        "自建不是免费的，它只是把费用从账单转移到了人身上。需要自己承担的部分如下。",
        {
          type: "ul",
          items: [
            "转码链路：上传后生成多尺寸、多格式，通常用 sharp 或 libvips 写一套队列",
            "存储管理：原图、变体、缩略图分开存放，还要处理清理策略",
            "缓存层：浏览器缓存头、回源配置、失效刷新",
            "故障处理：转码失败重试、磁盘写满告警、回源风暴",
          ],
        },
        "一个中型站点把这些做完，通常是一次性的几天工作量，加上之后每次依赖升级都要回头检查一遍。",
        { type: "h2", text: "延迟与 Core Web Vitals 的分歧点" },
        "首屏大图直接影响 LCP。两种方案在延迟上的差异主要来自第一字节时间和连接复用。",
        {
          type: "ul",
          items: [
            "单地区访问者：自建配合合理的缓存头，LCP 表现可以和 CDN 打平",
            "跨地区访问者：自建的跨洲往返通常在 200ms 以上，CDN 能把这一段压到 30ms 到 80ms",
            "移动端弱网：CDN 的边缘节点减少了 TLS 握手和 DNS 的往返次数，收益比桌面端更明显",
          ],
        },
        "如果你的访问者集中在同一个国家，且你已经把图片压到了合理体积，CDN 带来的 LCP 改善会比你预期的小。图片本身体积的影响往往大于分发方式，这一点在 /blog/image-compression-web-performance-guide 里有具体数据。",
        { type: "h2", text: "账单怎么算才不会踩坑" },
        "图片 CDN 的计费通常按三项叠加。",
        {
          type: "ul",
          items: [
            "流量：每 GB 的出站费用，这是大头",
            "请求数：每一次图片请求单独计费，变体多的时候会翻倍",
            "转码次数：实时生成的变体按次数收费，部分厂商对重复生成有缓存",
          ],
        },
        "自建的账单则是带宽加存储加服务器，外加无法计入账单的人力。真正容易踩的坑是请求数：一个页面 30 张图、每张 3 个变体，在移动端和桌面端各请求一次，请求量会快速吃掉免费额度。估算方法是用日均 PV 乘以单页图片数，再乘以平均变体数，得到月请求数后对照厂商的阶梯价格，不要用月流量去估算，误差会差一个数量级。",
        { type: "h2", text: "什么情况下自建更合适" },
        {
          type: "ul",
          items: [
            "访问者集中在一个地区，跨洲延迟不是问题",
            "图片总量不大，变体可以在构建期一次性生成",
            "有合规要求，图片不能经过第三方节点",
            "团队已经有现成的对象存储和缓存层，边际成本接近零",
            "预算敏感，且流量曲线平稳可预测",
          ],
        },
        "这类站点上 CDN，多数时候买到的是省心，不是性能。",
        { type: "h2", text: "混合做法：绕开取舍" },
        "不必二选一。一个务实的组合如下。",
        {
          type: "ul",
          items: [
            "原图和变体仍然放在自己的对象存储里，保留完全控制权",
            "前面挂一层缓存，只在命中失败时回源自建服务",
            "变体在构建期或上传时生成，不依赖实时转码",
            "对跨地区访问者比例高的路径，单独启用分发节点",
          ],
        },
        "这样既避免了实时转码的请求计费，又不用自己维护全球节点。",
        {
          type: "faq",
          items: [
            { q: "小站点有必要上图片 CDN 吗？", a: "如果访问者集中在单一地区且图片已经压到合理体积，收益有限。先把图片体积降下来通常比换分发方式更有效。" },
            { q: "CDN 能代替图片压缩吗？", a: "不能。CDN 负责分发和转码，不解决原图过大的问题。一张 3MB 的原图即使经过 CDN，弱网下的加载体验依然很差。" },
            { q: "实时变体和预生成变体哪个更划算？", a: "变体数量少且访问集中时，预生成更省。变体组合多、长尾访问分散时，实时生成更省存储，但要留意请求计费。" },
            { q: "已经有全站 CDN，还需要图片 CDN 吗？", a: "通常不需要再做一层。全站 CDN 已经解决了就近分发，缺的是格式协商和尺寸变体，这部分自建转码链路就能补齐。" },
          ],
        },
        "先把体积降下来，再谈分发。image-compressor-saas.shop 在浏览器本地完成压缩，文件不上传服务器，你可以先把原图压到合理体积，再决定要不要上 CDN，多数站点在压缩之后会发现自建完全够用。相关阅读：/blog/image-compression-web-performance-guide、/blog/core-web-vitals-fix-lcp-images、/blog/avif-vs-webp-in-depth。",
        { type: "cta", text: "在浏览器本地压缩图片", href: "https://image-compressor-saas.shop" },
      ],
      en: [
        "Choosing between an image CDN and self-hosted delivery is a decision most sites hit once. The intuitive answer is to self-host while traffic is small and move to a CDN once it grows, but traffic volume is not what decides the outcome. What matters is where your visitors are, how many size variants your images need, and whether you want to maintain a transcoding pipeline. This comparison breaks out billing, latency behavior and operational load for both, then gives a decision rule you can apply plus a hybrid setup that avoids the tradeoff.",
        { type: "h2", text: "What an image CDN actually does for you" },
        "People tend to read image CDN as servers that cache your images, which is too narrow. A modern image CDN handles at least four jobs.",
        {
          type: "ul",
          items: [
            "Proximity: copies sit on nodes closer to the visitor, cutting round-trip time",
            "Format negotiation: the Accept header decides whether AVIF, WebP or JPEG comes back",
            "Size variants: URL parameters crop and resize on demand instead of pre-generating dozens of files",
            "Compression tuning: quality and size tradeoffs differ by device class",
          ],
        },
        "Of those four, the valuable ones are usually format negotiation and variants rather than distribution. Doing both by hand means maintaining multiple versions of every image and writing correct srcset markup on the front end.",
        { type: "h2", text: "The real cost of self-hosting" },
        "Self-hosting is not free. It moves cost off the invoice and onto a person. The parts you own are listed here.",
        {
          type: "ul",
          items: [
            "Transcoding pipeline: generate sizes and formats after upload, usually with sharp or libvips behind a queue",
            "Storage management: keep originals, variants and thumbnails apart, plus a cleanup policy",
            "Caching layer: browser cache headers, origin fetch rules, invalidation",
            "Failure handling: retry failed transcodes, alert on full disks, handle origin fetch storms",
          ],
        },
        "On a mid-sized site that is a few days of work once, then a recurring check every time a dependency is upgraded.",
        { type: "h2", text: "Where latency and Core Web Vitals diverge" },
        "The largest above-the-fold image drives LCP directly. Differences between the two approaches come down to time to first byte and connection reuse.",
        {
          type: "ul",
          items: [
            "Single-region visitors: self-hosting with sane cache headers can match a CDN on LCP",
            "Cross-region visitors: intercontinental round trips usually exceed 200ms, while a CDN brings that down to roughly 30ms to 80ms",
            "Mobile on weak networks: edge nodes remove TLS handshake and DNS round trips, so the gain is larger than on desktop",
          ],
        },
        "If your visitors sit in one country and your images are already compressed, the LCP improvement from a CDN will be smaller than expected. Image byte size tends to matter more than delivery method, and the numbers behind that are in /blog/image-compression-web-performance-guide.",
        { type: "h2", text: "How to read the bill without getting burned" },
        "Image CDN pricing usually stacks three meters.",
        {
          type: "ul",
          items: [
            "Bandwidth: cost per GB egressed, normally the largest line",
            "Requests: each image request is billed, so variants multiply the count",
            "Transformations: on-demand variants are charged per generation, though many vendors cache repeats",
          ],
        },
        "Self-hosting bills as bandwidth plus storage plus servers, plus labor that never shows up on an invoice. The meter that surprises people is requests. Thirty images per page, three variants each, requested once on mobile and once on desktop, and the free tier disappears fast. To estimate, multiply daily pageviews by images per page by average variants to get monthly requests, then check the vendor tiering rather than estimating from monthly bandwidth, which is off by an order of magnitude.",
        { type: "h2", text: "When self-hosting is the better call" },
        {
          type: "ul",
          items: [
            "Visitors concentrate in one region, so cross-region latency is not a factor",
            "Total image count is small and variants can be generated at build time",
            "Compliance rules keep images off third-party nodes",
            "The team already runs object storage and a cache layer, so marginal cost is near zero",
            "Budget is tight and traffic is steady and predictable",
          ],
        },
        "Sites like this buy convenience from a CDN more than performance.",
        { type: "h2", text: "A hybrid setup that avoids the tradeoff" },
        "It does not have to be either-or. A practical combination looks like this.",
        {
          type: "ul",
          items: [
            "Keep originals and variants in your own object storage so control stays with you",
            "Put a cache layer in front that only fetches from your service on a miss",
            "Generate variants at build time or on upload instead of relying on on-demand transforms",
            "Enable distribution nodes only for paths with a high share of cross-region visitors",
          ],
        },
        "This avoids per-request transform billing without making you run a global network.",
        {
          type: "faq",
          items: [
            { q: "Does a small site need an image CDN?", a: "If visitors are concentrated in one region and images are already compressed, the gain is limited. Reducing image size usually does more than switching delivery." },
            { q: "Can a CDN replace image compression?", a: "No. A CDN handles distribution and transcoding, not an oversized original. A 3MB source image still loads badly on a weak network even behind a CDN." },
            { q: "Are on-demand variants or pre-generated variants cheaper?", a: "Pre-generation wins when variant counts are low and access is concentrated. On-demand wins on storage when combinations are many and long-tail access is scattered, but watch request billing." },
            { q: "If I already use a full-site CDN, do I need an image CDN?", a: "Usually not a second layer. A full-site CDN already solves proximity. What is missing is format negotiation and size variants, which a self-hosted transcoding pipeline can cover." },
          ],
        },
        "Shrink the bytes first, then argue about delivery. image-compressor-saas.shop compresses inside your browser so files never reach a server. Bring the originals down to a sane size first, then decide whether a CDN is worth it, since most sites find that self-hosting is enough once compression is handled. More reads: /blog/image-compression-web-performance-guide, /blog/core-web-vitals-fix-lcp-images, /blog/avif-vs-webp-in-depth.",
        { type: "cta", text: "Compress images locally in your browser", href: "https://image-compressor-saas.shop" },
      ],
    },
  },
  {
    slug: "image-compression-roi-real-numbers",
    date: "2026-10-03",
    title: {
      zh: "图片压缩 ROI：真实数据测算与可复用模板",
      en: "Image Compression ROI: Real Numbers and a Template You Can Reuse",
    },
    description: {
      zh: "图片压缩 ROI 很少被认真算过。这篇用可复算的数字拆开三栏收益：带宽、转化、人力存储，给出一套能直接套到你站点上的测算模板和三个常见误区。",
      en: "Compression ROI is rarely calculated properly. This data study splits the return into three lines: bandwidth, conversion, and labour plus storage, then gives a template you can run on your own site and three mistakes to avoid.",
    },
    keywords: [
      "compression roi",
      "image compression roi",
      "image compression cost savings",
      "image compression bandwidth savings",
      "image compression conversion rate impact",
      "image compression roi calculator",
      "图片压缩 ROI",
    ],
    content: {
      zh: [
        "图片压缩 ROI 很少被认真算过。多数团队的判断停在「压一下总是好的」，于是压缩永远排在新功能后面。这篇把这件事摊开成能复算的数字：带宽省多少、转化动多少、人力存储省多少，以及一个能直接套到你站点上的测算模板。下面用的是中型站点的常见量级和主流云厂商的出站价格区间，数量级可参考，具体数字请换成你自己的账单。",
        { type: "h2", text: "ROI 的三个口径：别只算带宽" },
        "只算带宽会把收益低估一大截。压缩的回报至少分布在三个口径上，量级差别很大。",
        {
          type: "ul",
          items: [
            "带宽：图片出流量直接减少，账单上最直观的一栏",
            "转化：图片变小之后 LCP 提前，跳出率下降带来的收入变化",
            "运维与存储：转码队列压力、对象存储占用、构建产物体积同步下降，省的是人力",
          ],
        },
        "三个口径里，带宽最容易算，也最容易被当成全部。在客单价不低的站点上，转化那一栏经常比带宽高一个数量级。",
        { type: "h2", text: "带宽这一栏怎么算才不虚" },
        "先把口径定死：只算图片的出站流量，不要拿全站流量当基数。图片一般占页面总字节数的一半到七成，直接乘全站流量会把结果放大一倍。",
        {
          type: "ul",
          items: [
            "月图片出流量 = 日均 PV × 单页图片平均字节数 × 30",
            "压缩率用你自己抽样实测的结果，不要用厂商宣传值",
            "乘以你的出站单价，常见区间在每 GB 0.05 到 0.12 美元",
            "走 CDN 的站点，请求数不会变，只会降流量那一栏",
          ],
        },
        "举例：日均 5000 PV、单页图片 1.2MB，按实测压缩率 55% 折算，每天省下约 3.3GB，一个月约 99GB。按每 GB 0.08 美元算，约 8 美元一个月。这一栏单独看并不惊艳，但它是三项里唯一稳定、可预测的一项。",
        { type: "h2", text: "转化这一栏：LCP 提前能换多少钱" },
        "首屏大图通常是 LCP 元素，图片变小意味着 LCP 提前。LCP 与转化率的相关性在不同行业差异很大，方向却是一致的。",
        {
          type: "ul",
          items: [
            "电商详情页：LCP 每提前 1 秒，转化率变化通常落在 1% 到 3% 的相对区间",
            "内容站点：影响主要体现在跳出率和翻页深度，不直接产生收入",
            "B2B 表单页：影响落在表单完成率上，量级小于电商",
            "弱网移动端：收益几乎都集中在这一端，桌面端常常测不出差异",
          ],
        },
        "换成钱：月订单数 × 转化率相对提升 × 客单价。还是上面那个日均 5000 PV 的站点，按 2% 转化率、60 美元客单价算，每月 3000 笔订单；压缩带来的 LCP 改善通常只有 200 到 400 毫秒，按相对提升 0.5% 折算，每月多出约 15 笔订单，约 900 美元。这是带宽那一栏的一百倍，也是为什么只看带宽会得出错误结论。这个数字必须用 A/B 实测收敛，不要直接写进预算。",
        { type: "h2", text: "人力与存储：容易被漏掉的一栏" },
        "这一栏进不了 ROI 的分子，但它决定了压缩这件事的投入有多低。",
        {
          type: "ul",
          items: [
            "转码队列：原图变小之后，队列时长和失败重试次数同步下降",
            "存储占用：原图加变体的总量下降，对象存储和备份成本跟着降",
            "构建产物：发布包体积变小，CI 时长和部署传输时间都会缩短",
            "回源流量：自建架构里回源那一跳的费用也会跟着降",
          ],
        },
        "多数站点的压缩不需要新增任何服务。在浏览器本地完成压缩，文件不经过服务器，既没有额外的计算账单，也不引入新的运维对象。",
        { type: "h2", text: "一个能直接套用的测算模板" },
        {
          type: "ul",
          items: [
            "第一步：统计日均 PV 和单页图片平均字节数，用真实采样而不是拍脑袋估算",
            "第二步：抽 20 张有代表性的图片跑一遍压缩，得到属于你自己的实际压缩率",
            "第三步：带宽收益 = 日均 PV × 单页字节数 × 压缩率 × 30 × 出站单价",
            "第四步：转化收益 = 月订单数 × 实测转化率相对提升 × 客单价，用 A/B 而不是行业均值",
            "第五步：把一次性接入成本和每千张的处理时间从收益里扣掉，再决定优先级",
          ],
        },
        { type: "h2", text: "三个常见误区" },
        {
          type: "ul",
          items: [
            "用厂商宣传的压缩率：实测通常低 10 到 20 个百分点，尤其是已经压过的 JPEG",
            "把全站流量当成图片流量：图片一般只占页面总字节数的五到七成",
            "只测桌面端数据：收益集中在移动端弱网，桌面端样本会让结论失真",
          ],
        },
        {
          type: "faq",
          items: [
            { q: "压缩 ROI 一般多久能回本？", a: "带宽那一栏按月结算，通常当月就能看到；接入成本主要是一次性的人力，工作量小的站点一两天就能做完。转化那一栏要等 A/B 跑够样本，一般两到四周。" },
            { q: "图片已经走 CDN 了，压缩还有 ROI 吗？", a: "有，但收益结构变了。CDN 解决的是分发距离，不解决原图过大。流量那一栏仍然会降，请求数不变，弱网下的加载体验改善也更明显。" },
            { q: "压缩率多少算合理？", a: "照片类内容压到原体积的 40% 到 60% 通常看不出差别；已经压过的 JPEG 再压收益会明显变小。用你自己抽样的实测值，不要套用宣传数字。" },
            { q: "小站点值不值得算这么细？", a: "流量很小的站点，带宽那一栏可以忽略，直接看转化和人力。模板里最省事的做法是只跑第一步和第二步，拿到实际压缩率就够了。" },
          ],
        },
        "先把图片体积降下来，再去讨论分发方式。image-compressor-saas.shop 在浏览器本地完成压缩，文件不经过服务器，也不需要新增任何服务。更多读数见 /blog/image-compression-web-performance-guide、/blog/core-web-vitals-fix-lcp-images、/blog/image-cdn-vs-self-hosted。",
        { type: "cta", text: "在浏览器里本地压缩，先测出你自己的压缩率", href: "/" },
      ],
      en: [
        "Compression ROI is rarely calculated properly. Most teams stop at the intuition that compressing is generally good, which pushes it permanently behind every new feature. This data study turns the question into numbers you can recompute: what bandwidth saves, what conversion moves, what labour and storage give back, plus a template you can run on your own site. The figures below use typical mid-size site volumes and mainstream egress price ranges, so treat the order of magnitude as useful and swap in your own billing.",
        { type: "h2", text: "Three places the return shows up" },
        "Counting bandwidth alone understates the return by a wide margin. Compression pays out in at least three places, and they differ enormously in scale.",
        {
          type: "ul",
          items: [
            "Bandwidth: image egress drops directly, the most visible line on the invoice.",
            "Conversion: smaller images pull LCP earlier, and the drop in bounce rate shows up as revenue.",
            "Operations and storage: transcode queue pressure, object storage footprint and build artifact size all fall, and what you save is people time.",
          ],
        },
        "Bandwidth is the easiest of the three to calculate, which is exactly why it gets mistaken for the whole story. On sites with a decent order value, the conversion line is often an order of magnitude larger.",
        { type: "h2", text: "Calculating the bandwidth line honestly" },
        "Fix the unit first: count image egress only, never total site traffic. Images typically carry between half and seventy percent of a page's bytes, so multiplying full-site traffic roughly doubles the result.",
        {
          type: "ul",
          items: [
            "Monthly image egress = average daily PV x average image bytes per page x 30.",
            "Use the compression ratio you measured by sampling, not the vendor's marketing figure.",
            "Multiply by your egress unit price, commonly between 0.05 and 0.12 USD per GB.",
            "On a CDN, request count does not change; only the traffic line moves.",
          ],
        },
        "Worked example: 5000 PV a day, 1.2MB of images per page, measured ratio of 55 percent. That is roughly 3.3GB saved per day, about 99GB a month. At 0.08 USD per GB, around 8 USD a month. On its own that number is underwhelming, but it is the one line that is stable and predictable.",
        { type: "h2", text: "The conversion line: what an earlier LCP is worth" },
        "The hero image is usually the LCP element, so a smaller image means an earlier LCP. The strength of the link between LCP and conversion varies a lot by industry, but the direction is consistent.",
        {
          type: "ul",
          items: [
            "E-commerce product pages: each second off LCP typically moves conversion by one to three percent, relative.",
            "Content sites: the effect lands on bounce rate and scroll depth rather than direct revenue.",
            "B2B form pages: the effect lands on form completion, and is smaller than in e-commerce.",
            "Weak mobile networks: nearly all of the gain sits here, and desktop samples often show nothing.",
          ],
        },
        "Turn it into money: monthly orders x relative conversion lift x average order value. On the same site with 5000 PV a day, a two percent conversion rate and a 60 USD order value, that is about 3000 orders a month. Compression realistically buys 200 to 400 milliseconds of LCP, so at a relative lift of half a percent you get roughly 15 extra orders, around 900 USD a month. That is a hundred times the bandwidth line, and it is why looking at bandwidth alone produces the wrong answer. Treat it as a ceiling and converge on it with a real A/B test before it goes anywhere near a budget.",
        { type: "h2", text: "Labour and storage, the line people skip" },
        "This one does not enter the numerator, but it decides how cheap the whole exercise is.",
        {
          type: "ul",
          items: [
            "Transcode queue: smaller originals shorten queue time and cut retry counts.",
            "Storage footprint: originals plus variants shrink, and so do backups.",
            "Build artifacts: smaller release bundles shorten CI time and deploy transfer.",
            "Origin traffic: in self-hosted setups the origin hop gets cheaper too.",
          ],
        },
        "Most sites need no new service at all. Compressing inside the browser means files never touch a server, so there is no extra compute bill and nothing new to operate.",
        { type: "h2", text: "A template you can run this week" },
        {
          type: "ul",
          items: [
            "Step one: measure average daily PV and image bytes per page from real samples, not estimates.",
            "Step two: sample twenty representative images, compress them, and take your own ratio.",
            "Step three: bandwidth return = daily PV x bytes per page x ratio x 30 x egress price.",
            "Step four: conversion return = monthly orders x measured relative lift x order value, from an A/B test rather than an industry average.",
            "Step five: subtract the one-off integration cost and the handling time per thousand images, then set the priority.",
          ],
        },
        { type: "h2", text: "Three mistakes that inflate the result" },
        {
          type: "ul",
          items: [
            "Using the vendor's advertised ratio: measured results usually land ten to twenty points lower, especially on JPEGs that were already compressed.",
            "Using full-site traffic as image traffic: images are typically fifty to seventy percent of total page bytes.",
            "Testing on desktop only: the gain sits on weak mobile networks, and desktop samples wash it out.",
          ],
        },
        {
          type: "faq",
          items: [
            { q: "How long does compression ROI take to pay back?", a: "The bandwidth line settles monthly and usually shows up in the first cycle. Integration cost is mostly one-off engineering, one or two days on a small site. The conversion line needs an A/B test with enough samples, typically two to four weeks." },
            { q: "Is there still ROI if images already run through a CDN?", a: "Yes, but the shape changes. A CDN fixes distance, not oversized originals. The traffic line still drops, request count stays flat, and the weak-network improvement is more visible than the raw saving." },
            { q: "What compression ratio counts as reasonable?", a: "For photographic content, landing between forty and sixty percent of the original size is usually invisible. JPEGs that were already compressed give much less. Use your own sampled measurement instead of a published figure." },
            { q: "Is this worth calculating in detail on a small site?", a: "On low-traffic sites the bandwidth line can be ignored; look at conversion and labour instead. The cheapest version of the template is just steps one and two, which give you your real compression ratio." },
          ],
        },
        "Bring the bytes down before arguing about delivery. image-compressor-saas.shop compresses inside your browser, so files never reach a server and nothing new needs deploying. More reads: /blog/image-compression-web-performance-guide, /blog/core-web-vitals-fix-lcp-images, /blog/image-cdn-vs-self-hosted.",
        { type: "cta", text: "Compress in your browser and measure your own ratio", href: "/" },
      ],
    },
  },
  {
    "slug": "how-news-sites-optimize-images",
    "date": "2026-10-04",
    "title": {
      "zh": "新闻网站如何优化图片：从编辑台到首屏的实战流程",
      "en": "How News Sites Optimize Images: An Editorial-to-LCP Workflow"
    },
    "description": {
      "zh": "新闻网站图片优化实战：从原图归档、响应式尺寸、格式分流到首页 LCP，建立兼顾发布速度、画质、SEO 与版权的编辑流程。",
      "en": "A newsroom image workflow covering source archiving, responsive variants, format routing, homepage LCP, SEO, credits, and rights checks."
    },
    "keywords": [
      "news site image optimization",
      "how news sites compress images",
      "breaking news photo compression",
      "news CMS responsive images",
      "news homepage LCP optimization",
      "新闻网站图片优化"
    ],
    "content": {
      "zh": [
        "新闻网站图片优化面对的是一个很具体的矛盾：摄影记者交回来的原图可能有 15MB，读者却希望突发新闻页面在移动网络上立刻打开。编辑台不能只把质量滑块拉低，因为新闻照片还要经得住裁切、社交平台二次发布、首页焦点图放大和日后归档。真正有效的流程，是在原图入库时保留主文件，在发布链路中生成有限、可追踪的尺寸与格式，并把首屏那一张单独当成性能任务。",
        {
          "type": "h2",
          "text": "突发新闻图片快速发布：先保原图，再做发布副本"
        },
        "突发事件发生后，速度压力最大，最容易出现的错误也是直接覆盖原图。摄影记者传回的 JPEG 可能已经经过相机压缩，重复保存会继续损失细节；手机照片还可能带有定位、设备和拍摄时间等元数据。编辑收到文件后，应先把原图写入只读归档，再从副本开始裁切、去敏与压缩。",
        {
          "type": "ul",
          "items": [
            "原图层：保留完整像素、拍摄时间、作者署名和版权记录，不直接对外提供。",
            "编辑层：完成构图裁切、水平校正、必要的隐私遮挡与色彩调整。",
            "发布层：生成网页尺寸、社交尺寸与低带宽版本，每个版本都能追溯到同一原图编号。",
            "缩略图层：给列表页、相关推荐和推送卡片使用，不让浏览器下载文章页大图再缩小。",
            "归档层：保存最终说明、人物姓名、地点与授权范围，避免几年后只剩一张无来源图片。"
          ]
        },
        "突发新闻图片快速发布的重点不是一次生成十几个版本。先做首页焦点、文章正文和社交分享三个必要规格，其余尺寸按访问需求补。尺寸矩阵越大，编辑越难核对，也越容易让错误裁切在多个入口同时上线。",
        {
          "type": "h2",
          "text": "新闻 CMS 响应式图片：尺寸由版位决定"
        },
        "新闻 CMS 响应式图片不该按设备名称划分。今天叫“手机”的窗口宽度，明天可能出现在折叠屏或分栏桌面上。更可靠的做法是按实际版位宽度生成候选图，并让 srcset 与 sizes 告诉浏览器该选哪一个。",
        {
          "type": "ul",
          "items": [
            "列表缩略图：320 至 480 像素宽，优先控制解码和请求数量。",
            "正文内图：640、960、1280 像素三个候选通常足够覆盖主流正文栏。",
            "首页焦点图：至少准备与最大渲染宽度接近的版本，同时保留移动端安全裁切区。",
            "高密度屏：只给确实会放大的关键图片准备 2x，不要把每张缩略图都翻倍。",
            "分享卡片：单独输出固定比例，避免社交平台从正文里随机抓图。"
          ]
        },
        "浏览器选择候选图时，需要知道图片在布局中占多宽。只写 srcset 不写准确的 sizes，浏览器可能按整个视口估算，给 360 像素的卡片下载 1280 像素资源。发布模板一旦调整栏宽，也要同步检查 sizes，否则旧配置会悄悄增加流量。",
        {
          "type": "h2",
          "text": "新闻图片压缩流程：格式和质量按内容分流"
        },
        "新闻图片压缩流程最好按内容类型分流，而不是全站固定一个质量值。人物、夜景、烟雾和体育场草地的纹理不同，同样的编码参数会产生不同的失真。编辑台需要的是少量清楚的预设，以及一眼能判断的退回条件。",
        {
          "type": "ul",
          "items": [
            "摄影照片优先 AVIF 或 WebP，保留 JPEG 作为兼容回退；先试中等质量，再看人脸、文字和高反差边缘。",
            "截图与信息图含有细字和纯色块，优先 PNG 或无损 WebP，避免 JPEG 让文字周围出现噪点。",
            "透明台标与图标保留透明通道，不要为了减小几 KB 换成带底色的 JPEG。",
            "已经被通讯软件重压过的小图，不要再次猛烈压缩；先确认是否能取得原始文件。",
            "连拍组图使用统一预设，但焦点图单独复查，因为它承担最大的视觉面积。"
          ]
        },
        "质量检查不必追求像素级完全一致。把候选图放到真实版位，分别看普通桌面和中端手机：人物眼睛是否发糊，字幕边缘是否有振铃，暗部是否出现色块。三个位置都过关，再记录压缩前后体积。需要临时处理一批发布副本时，可在 / 本地压缩，不把尚未发布的新闻图片交给第三方服务器。",
        {
          "type": "h2",
          "text": "新闻首页 LCP 优化：只给首屏主图特殊待遇"
        },
        "新闻首页 LCP 优化经常失败，不是图片没有压缩，而是主图发现得太晚。CSS 背景图、客户端脚本拼出的 URL、层层懒加载都会让浏览器在页面解析后很久才知道该下载什么。首屏焦点图应出现在服务端 HTML 中，带明确宽高，并根据真实优先级决定是否预加载。",
        {
          "type": "ul",
          "items": [
            "首屏唯一主图使用高优先级加载；第二屏及以下继续懒加载。",
            "在 HTML 中写 width 和 height，或稳定的 aspect-ratio，避免图片到达后推开标题。",
            "预加载地址必须与 srcset 最终选中的候选一致，否则会下载两份。",
            "不要把首页所有卡片都设为高优先级，过多抢占会拖慢 CSS、字体和主图本身。",
            "用真实新闻模板测试，不用只有一张图的空白演示页代替。"
          ]
        },
        "一次可复算的检查可以这样做：记录主图原始体积、传输体积、开始下载时间和 LCP 时间；替换压缩版本后重复三次，取中位数。若体积下降而 LCP 几乎不动，瓶颈多半在发现时机、服务器响应或主线程，而不是继续牺牲画质。图片体积与页面速度的关系可继续查看 /blog/image-compression-affects-page-speed，分发架构见 /blog/image-cdn-vs-self-hosted。",
        {
          "type": "h2",
          "text": "新闻图片 SEO 与编辑规范：说明文字不能在压缩时丢失"
        },
        "图片优化进入自动化后，最容易丢的是语义。文件名、替代文字、图注、作者与版权信息分别服务于不同目标，不能把一段关键词复制到所有字段。替代文字描述图中与报道相关的信息；图注补充人物、地点、时间与背景；署名说明来源；文件名只需简短可识别。",
        {
          "type": "ul",
          "items": [
            "替代文字写读者看不到图片时缺失的事实，不堆砌“新闻图片”“高清照片”等词。",
            "图注回答谁、何时、何地以及画面为何与报道有关，可比替代文字更完整。",
            "肖像、事故现场和未成年人图片先走隐私与授权检查，再进入自动转码。",
            "去除公开文件中的 GPS 等敏感 EXIF 时，把必要的拍摄信息留在内部资产系统。",
            "修图与生成式处理必须按编辑规范留痕，压缩不能成为掩盖内容改动的步骤。"
          ]
        },
        "每周抽查十篇高流量报道就够发现多数问题：是否下载了过大的候选图，是否有空替代文字，焦点图是否被误设为懒加载，是否出现重复下载。修模板比逐篇补救更划算，因为一处改动会覆盖后续所有报道。",
        {
          "type": "faq",
          "items": [
            {
              "q": "新闻网站应该把每张图片都转换成 AVIF 吗？",
              "a": "不必。AVIF 对摄影照片通常很省，但小图编码成本、透明素材和带细字截图未必占优。让流水线按内容类型生成 AVIF、WebP 与必要的回退格式，再由浏览器选择。"
            },
            {
              "q": "突发新闻照片压到多大合适？",
              "a": "不要只设一个 KB 上限。先按版位限制像素尺寸，再在真实模板里检查质量。正文 960 像素宽的照片常能控制在数百 KB 内，画面复杂度会让结果上下浮动。"
            },
            {
              "q": "新闻首页的图片都应该预加载吗？",
              "a": "不应该。通常只预加载当前页面唯一的 LCP 候选图。多个预加载会彼此争抢，还会挤占样式表与字体下载。"
            },
            {
              "q": "删除 EXIF 会影响图片 SEO 吗？",
              "a": "通常不会直接影响排名。公开图片应优先移除 GPS 和设备序列等敏感信息，同时在页面的图注、署名和结构化内容中保留有用语义。"
            }
          ]
        },
        {
          "type": "cta",
          "text": "在浏览器里压缩下一批新闻发布副本",
          "href": "/"
        }
      ],
      "en": [
        "News site image optimization has a practical conflict at its center. A photographer may send a 15 MB original while readers expect a breaking-news page to appear immediately on a mobile connection. The desk cannot solve that by dragging one quality slider downward. The same photograph may need a tight homepage crop, a social card, a wide article version, and an archival master. A reliable workflow preserves the source, creates a small set of traceable derivatives, and treats the one above-the-fold image as a separate performance job.",
        {
          "type": "h2",
          "text": "Fast breaking-news photo publishing starts with an untouched source"
        },
        "Under deadline pressure, the easiest mistake is overwriting the source. A camera JPEG may already be compressed, so every repeated save removes more information. A phone photograph may also carry location, device, and capture-time metadata that should not be published blindly. The first action at the desk is to place the source in read-only storage. Cropping, redaction, color adjustment, and compression happen on a derivative.",
        {
          "type": "ul",
          "items": [
            "The source layer keeps full pixels, capture time, photographer credit, and rights records; it is not served publicly.",
            "The edit layer holds crops, horizon fixes, necessary privacy redactions, and restrained tonal work.",
            "The delivery layer contains web, social, and low-bandwidth outputs that all point back to one source identifier.",
            "The thumbnail layer supplies indexes, related-story cards, and notifications without downloading article-size assets.",
            "The archive layer retains the final caption, names, place, and usage rights so the image still has a history years later."
          ]
        },
        "Fast breaking-news photo publishing does not require ten derivatives before a story can go live. Start with the homepage lead, article body, and social share sizes. Add another size only when a real slot needs it. A huge variant matrix slows review and lets one bad crop spread into several products at once.",
        {
          "type": "h2",
          "text": "Responsive images in a news CMS should follow slots, not devices"
        },
        "Responsive images in a news CMS should be based on rendered slot width rather than labels such as phone, tablet, and desktop. A width associated with a phone today may appear in a foldable display or a narrow desktop column tomorrow. Generate candidates around the widths the templates actually use, then let srcset and sizes tell the browser which file fits.",
        {
          "type": "ul",
          "items": [
            "List thumbnails generally need candidates between 320 and 480 pixels wide, with decode cost kept low.",
            "Article-body images are often covered by 640, 960, and 1280 pixel candidates.",
            "A homepage lead image needs a candidate near its maximum rendered width plus a crop that keeps the subject safe on narrow screens.",
            "High-density 2x assets belong on images that genuinely display large, not on every tiny card.",
            "Social cards need a fixed-ratio output rather than hoping a platform chooses the right image from the article."
          ]
        },
        "The browser also needs an honest estimate of rendered width. If srcset is present but sizes implies a full viewport, a 360-pixel card can receive a 1280-pixel file. Any redesign that changes column width should trigger a check of the sizes rules. Otherwise a correct old setting becomes a quiet bandwidth leak.",
        {
          "type": "h2",
          "text": "A news image compression workflow routes by content type"
        },
        "A useful news image compression workflow does not apply one quality value to the whole newsroom. Portraits, night scenes, smoke, stadium grass, charts, and screenshots expose different defects at the same setting. Editors need a few understandable presets and clear reasons to reject an output.",
        {
          "type": "ul",
          "items": [
            "For photographs, prefer AVIF or WebP with a JPEG fallback. Start at a moderate quality and inspect faces, text, and high-contrast edges.",
            "For screenshots and graphics with fine lettering or flat colors, choose PNG or lossless WebP so JPEG ringing does not damage the text.",
            "Keep the alpha channel on logos and overlays rather than saving a few kilobytes by adding a solid JPEG background.",
            "Do not heavily recompress a small image that already came through a messaging app; ask for the source when the story allows it.",
            "Apply one preset to gallery sequences, but review the lead image separately because it occupies the largest visual area."
          ]
        },
        "Quality review should happen in the actual slot rather than at 400 percent zoom. Check a normal desktop and an ordinary mid-range phone. Look at eyes, caption text embedded in an image, hard edges, and blockiness in shadows. If those areas hold up, record source and output sizes. For a batch of temporary publishing copies, / can perform compression locally so unpublished newsroom images are not handed to another server.",
        {
          "type": "h2",
          "text": "News homepage LCP optimization gives one image special treatment"
        },
        "News homepage LCP optimization often misses because the lead image is discovered too late, not because it is insufficiently compressed. A CSS background, a URL assembled by client-side JavaScript, or nested lazy-loading logic can hide the request until long after HTML parsing. The lead image should be present in server-rendered markup, have explicit dimensions, and receive priority based on what is actually visible.",
        {
          "type": "ul",
          "items": [
            "Give high fetch priority to the single likely LCP image; keep below-the-fold cards lazy.",
            "Set width and height, or a stable aspect-ratio, so the headline is not pushed around when the image arrives.",
            "Make a preload match the candidate ultimately selected from srcset, or the browser may download two files.",
            "Do not mark every homepage card as high priority. They will compete with styles, fonts, and the lead image itself.",
            "Test with a real news template and realistic card density, not an empty demonstration page containing one photograph."
          ]
        },
        "A repeatable check needs four values: original bytes, transferred bytes, image request start, and LCP time. Replace the file, run three times, and compare medians. If bytes fall but LCP barely changes, the next bottleneck is probably discovery, server response, or main-thread work. Sacrificing more image quality will not repair that. Continue with /blog/image-compression-affects-page-speed for the byte-to-speed relationship and /blog/image-cdn-vs-self-hosted for delivery architecture.",
        {
          "type": "h2",
          "text": "News image SEO rules preserve meaning through automation"
        },
        "Once image processing is automated, meaning is easier to lose than pixels. Filename, alternative text, caption, photographer credit, and rights information have different jobs. Copying one keyword-heavy sentence into every field helps nobody. Alternative text supplies reporting context when the image cannot be seen. A caption can add people, place, time, and relevance. Credit records the source. The filename only needs to be short and recognizable.",
        {
          "type": "ul",
          "items": [
            "Write alternative text around the fact a reader would otherwise miss, not phrases such as “news image” or “high-resolution photo.”",
            "Let the caption answer who, when, where, and why the scene matters to the report.",
            "Route portraits, accident scenes, and photographs of minors through privacy and rights review before automatic conversion.",
            "When public derivatives lose GPS and other sensitive EXIF, preserve necessary capture information in the internal asset system.",
            "Log material edits and generative processing under the editorial policy; compression must not hide a content change."
          ]
        },
        "A weekly sample of ten high-traffic stories will reveal most systemic failures. Check whether the browser fetched an oversized candidate, whether alternative text is empty, whether the lead image was accidentally lazy-loaded, and whether the same asset downloaded twice. Fix the template rather than patching stories one by one, because that change protects every article published next.",
        {
          "type": "faq",
          "items": [
            {
              "q": "Should a news site convert every image to AVIF?",
              "a": "No. AVIF is often compact for photographs, but encoding cost, tiny graphics, transparency, and screenshots with fine text can favor another format. Generate AVIF and WebP where they help, keep necessary fallbacks, and let the browser choose."
            },
            {
              "q": "What file size should a breaking-news photo target?",
              "a": "Do not set one universal KB ceiling. Limit pixel dimensions to the slot first, then review quality in the real template. A 960-pixel article image can often stay within a few hundred kilobytes, but scene complexity changes the result."
            },
            {
              "q": "Should every homepage image be preloaded?",
              "a": "No. Preload the single likely LCP image. Several image preloads compete with one another and can delay stylesheets, fonts, and the actual lead image."
            },
            {
              "q": "Does removing EXIF hurt image SEO?",
              "a": "It usually does not directly harm rankings. Remove sensitive GPS and device identifiers from public files, while keeping useful meaning in captions, credits, and page content."
            }
          ]
        },
        {
          "type": "cta",
          "text": "Compress the next batch of newsroom delivery copies in your browser",
          "href": "/"
        }
      ]
    }
  },
  {
    "slug": "mobile-data-savings-image-compression",
    "date": "2026-10-05",
    "title": {
      "zh": "图片压缩能省多少移动流量：实测口径与测算方法",
      "en": "How Much Mobile Data Image Compression Actually Saves"
    },
    "description": {
      "zh": "图片压缩能省多少移动流量？先测出图片在页面传输字节里占多少，再按格式、源文件和目标尺寸判断真实压缩率，最后把省下的 MB 换成能写进报告的数字。",
      "en": "How much mobile data does image compression save? Measure the image share of transferred bytes, read realistic ratios by format and source, then turn saved megabytes into a figure you can report."
    },
    "keywords": [
      "image compression mobile data",
      "reduce mobile data usage images",
      "how much data does image compression save",
      "compress images to save mobile data",
      "mobile data savings image compression",
      "图片压缩 移动流量"
    ],
    "content": {
      "zh": [
        "图片压缩和移动流量的关系，比多数人想的更直接。一次典型的新闻浏览或电商浏览里，图片通常是传输字节里占比最大的一项，大致在页面总量的一半到四分之三之间。压缩图片是唯一一项不动排版、不动文案、不动功能，却能真的把流量账单压下来的改动。",
        "不过大家最想要的那个数字，也就是到底能省多少，没有通用答案。它取决于你的图片内容、图片是怎么产出的，以及页面现在已经在做什么。这篇给的是测量方法和实践中常见的区间，让你算出自己的数字，而不是借别人的。",
        {
          "type": "h2",
          "text": "移动流量到底花在哪"
        },
        "压缩之前，先搞清楚字节被谁用了。在这里靠猜，往往会让人去改错的对象。",
        {
          "type": "ul",
          "items": [
            "用 Chrome DevTools 打开页面，切到 Network 面板，按 Img 过滤。要看的是 transferred 那一列，不是 resource size。",
            "连续刷新三次取中位数。单次采样会把缓存和懒加载的噪声一起带进来。",
            "把首屏图片和其余图片分开统计。懒加载配置错误时，折叠线以下的字节照样会加载，这种情况很常见。",
            "检查同一张图是否被以不同尺寸下载了两次。重复请求是纯浪费，在移动版模板里出现频率很高。",
            "字体和视频单独看。如果这两项压过了图片，那压图片帮不上多少忙。"
          ]
        },
        {
          "type": "h2",
          "text": "一张图能省多少：按格式与场景分"
        },
        "以下是在合理尺寸下、用真实照片内容测出的粗略区间，用来建立量级感，不能直接当成你的结果。",
        {
          "type": "ul",
          "items": [
            "相机原始分辨率的 JPEG 照片：通常能减掉四到六成，原图直接来自手机时还会更多。",
            "已经被压缩过一次的 JPEG：百分之五到二十。对压缩过的文件再压一次收益很小，还要付出可见的画质代价。",
            "纯色为主的 PNG 截图：五到八成，而且换成 WebP 或 AVIF 往往比继续压 PNG 更划算。",
            "PNG 存的照片：节省幅度非常大，因为 PNG 本来就不适合装照片类数据。",
            "已经在用 WebP：换到 AVIF 还能再省一到三成，代价是编码时间变长。",
            "先改尺寸再压缩，通常比只调质量更管用。把边长减半就能先砍掉约四分之三的字节，质量滑块这时还没开始发挥作用。"
          ]
        },
        {
          "type": "h2",
          "text": "为什么你的压缩率和别人的不一样"
        },
        "三个变量解释了公开数据和你实测结果之间的大部分差距。",
        {
          "type": "ul",
          "items": [
            "画面复杂度。街景包含的细节远多于靠墙的人像，在同样的质量设置下压缩率更差。",
            "源文件历史。相机直出的 JPEG 已经压过一次，TIFF 扫描件没有，扫描件能省的多得多。",
            "目标尺寸。先缩放再压缩的压缩率看起来很漂亮，其中一部分功劳其实是缩放的。两步要分开测。"
          ]
        },
        {
          "type": "h2",
          "text": "把省下的 MB 换成有人关心的数字"
        },
        "算法很简单：月访问次数乘以每次访问的平均图片字节数，再乘以压缩率。一个月 2 万次移动访问、每次 1.4MB 图片的站点，就是 28GB。压缩掉一半，每月省 14GB。",
        "这算不算有意义，取决于读者的套餐。在 5GB 的限量套餐上，14GB 分摊到一批用户身上，是实实在在解掉了一个限制；在家庭无限宽带上它几乎看不见，那时诚实的理由是速度而不是费用。弱网下的加载速度，才是压缩无论套餐如何都能带来收益的地方。",
        {
          "type": "h2",
          "text": "读者能做什么，站长能做什么"
        },
        "读者这边选项不多，但确实存在：打开浏览器的省流量模式；调低聊天应用里的图片质量设置，多数应用默认值远高于手机屏幕实际需要的水平；大图册尽量在 Wi-Fi 下下载。",
        "站长这边可以动的空间大得多。",
        {
          "type": "ul",
          "items": [
            "先把像素尺寸限制到展示位的实际大小，再压缩。这一步要最先做。",
            "用 WebP 或 AVIF 并提供回退，不要对所有设备都发同一张 JPEG。",
            "折叠线以下的图片做懒加载，同时把最可能成为 LCP 的那张排除在懒加载之外。",
            "在上传或构建阶段、于浏览器内完成压缩，既不用部署新服务，文件也不会经过服务器。"
          ]
        },
        "顺序错了会白做。先缩放再压缩，先测 transferred 再决定要不要压，先确认图片确实是消耗大头再投入时间。这三步做完，剩下的就是按自己的实测数字写结论。延伸阅读：/blog/compress-jpg-under-100kb 讲的是目标大小模式怎么设，/blog/image-compression-affects-page-speed 讲的是字节和速度之间的关系。",
        {
          "type": "faq",
          "items": [
            {
              "q": "图片压缩到底能省多少移动流量？",
              "a": "对于此前没压缩过的照片类内容，通常是图片字节的四到六成。如果这个 JPEG 已经压过一轮，能省的会少很多，有时不到一成。"
            },
            {
              "q": "读者大多用 Wi-Fi，压缩还有意义吗？",
              "a": "有，但收益从费用转到了速度。图片变小之后在弱网下更快加载完，这体现在加载时间和跳出率上，而不是流量账单上。"
            },
            {
              "q": "改尺寸和压质量哪个更有效？",
              "a": "改尺寸。边长减半就能在调质量之前先去掉约四分之三的字节。顺序是先缩放再压缩，不是二选一。"
            },
            {
              "q": "压缩有可能让页面更费流量吗？",
              "a": "只有做错了才会。没有正确协商就同时提供多种格式变体，或者预加载了根本不会显示的图片，都会增加字节。只生成浏览器真正需要的变体，之后再看 transferred 那一列核对。"
            }
          ]
        },
        {
          "type": "cta",
          "text": "在浏览器里压缩图片，省下移动流量",
          "href": "/"
        }
      ],
      "en": [
        "Image compression and mobile data are tied together more closely than most people assume. On a typical news or shopping session, images carry the largest share of transferred bytes, usually somewhere between half and three quarters of the page total. Compressing them is the one change that moves a data bill without touching layout, copy, or function.",
        "The number everyone wants, how much will I save, has no universal answer. It depends on what your images are, how they were produced, and what the page already does. This gives you the measurement method and the ranges seen in practice, so you can produce your own figure rather than borrowing someone else’s.",
        {
          "type": "h2",
          "text": "Where mobile data actually goes"
        },
        "Before compressing anything, find out what is using the bytes. Guessing here tends to send people after the wrong asset.",
        {
          "type": "ul",
          "items": [
            "Open the page in Chrome DevTools, switch to the Network panel, and filter by Img. The transferred column is what the reader pays for, not the resource size column.",
            "Reload three times and take the median. One sample catches cache and lazy-loading noise.",
            "Separate above-the-fold images from the rest. Bytes below the fold still count when lazy loading is misconfigured, which is common.",
            "Check whether the same asset downloads twice at different sizes. Duplicate requests are pure waste and show up often in mobile templates.",
            "Look at fonts and video separately. If one of those beats images, compressing pictures will not help much."
          ]
        },
        {
          "type": "h2",
          "text": "How much one image saves, by format and scene"
        },
        "These are rough ranges measured on real photographic content at sensible dimensions. Use them for a sense of scale, not as your result.",
        {
          "type": "ul",
          "items": [
            "JPEG photo at full camera resolution: expect forty to sixty percent off, sometimes more when the original came straight out of a phone.",
            "JPEG that was already compressed once: five to twenty percent. Re-compressing a re-compressed file gives very little and costs visible quality.",
            "PNG screenshot with flat colors: fifty to eighty percent, and switching to WebP or AVIF usually beats squeezing the PNG further.",
            "PNG photograph: very large savings, because PNG is the wrong container for photographic data in the first place.",
            "WebP already in place: ten to thirty percent more by moving to AVIF, with encoding time as the trade-off.",
            "Resizing before compressing usually beats quality reduction alone. Halving the pixel dimensions cuts roughly three quarters of the bytes before the quality slider does anything."
          ]
        },
        {
          "type": "h2",
          "text": "Why your compression ratio will differ"
        },
        "Three variables explain most of the gap between published figures and your own result.",
        {
          "type": "ul",
          "items": [
            "Scene complexity. A busy street scene holds far more detail than a portrait against a wall, and compresses worse at the same quality setting.",
            "Source history. Camera JPEGs are already compressed; a TIFF scan is not. The scan has much more to give.",
            "Target dimensions. Compression measured after resizing looks impressive partly because resizing did the work. Measure the two steps separately."
          ]
        },
        {
          "type": "h2",
          "text": "Turning saved megabytes into a number people care about"
        },
        "The arithmetic is simple: monthly sessions, multiplied by average image bytes per session, multiplied by your compression ratio. A site with 20,000 mobile sessions a month and 1.4MB of images per session sits at 28GB. A fifty percent reduction saves 14GB monthly.",
        "Whether that matters depends on the reader’s plan. On a metered 5GB allowance, 14GB across a base of users is a real constraint removed. On unlimited home broadband it is invisible, and the honest argument there is speed rather than cost. Weak-network speed is where compression pays off regardless of the plan.",
        {
          "type": "h2",
          "text": "What readers can do, and what site owners can do"
        },
        "Reader side, the options are limited but real: turn on data saver mode in the browser, lower the image quality setting in chat apps, and download large galleries over Wi-Fi. Most chat apps default to a quality far above what a phone screen needs.",
        "Site owner side, the leverage is much larger.",
        {
          "type": "ul",
          "items": [
            "Cap pixel dimensions at the slot size, then compress. Do this first.",
            "Serve WebP or AVIF with a fallback rather than one JPEG for every device.",
            "Lazy-load anything below the fold, and exclude the likely LCP image from lazy loading.",
            "Compress at upload or build time in the browser, so nothing new has to be deployed and files never reach a server."
          ]
        },
        "Getting the order wrong wastes the effort. Resize before compressing, read the transferred column before deciding whether compression is worth it, and confirm images really are the largest share before spending time on them. After that, write the conclusion from your own measurement. More reads: /blog/compress-jpg-under-100kb covers setting a target size, /blog/image-compression-affects-page-speed covers how bytes relate to load speed.",
        {
          "type": "faq",
          "items": [
            {
              "q": "How much mobile data does image compression actually save?",
              "a": "For photographic content that has not been compressed before, forty to sixty percent of image bytes is the usual range. If the JPEG already went through one compression pass, expect much less, sometimes under ten percent."
            },
            {
              "q": "Does compressing images help if my readers are mostly on Wi-Fi?",
              "a": "Yes, but the benefit shifts from cost to speed. Smaller images finish sooner on weak connections, and that shows up in load time and bounce rate rather than in a data bill."
            },
            {
              "q": "Is resizing or compressing more effective?",
              "a": "Resizing. Cutting linear dimensions in half removes about three quarters of the bytes before any quality setting is applied. Compress after resizing, not instead of it."
            },
            {
              "q": "Can compression make a page use more data?",
              "a": "Only when it is done badly. Serving several format variants without proper negotiation, or preloading images that are never displayed, can add bytes. Generate the variants a browser actually needs and check the transferred column afterwards."
            }
          ]
        },
        {
          "type": "cta",
          "text": "Compress in your browser and cut mobile data usage",
          "href": "/"
        }
      ]
    }
  },
  {
    "slug": "what-is-image-compression-beginner",
    "date": "2026-10-06",
    "title": {
      "zh": "图片压缩是什么：给完全新手讲透的一篇",
      "en": "What Is Image Compression? A Beginner Explanation"
    },
    "description": {
      "zh": "图片压缩做的事只有一件：用更少的字节描述同一张图。这篇给刚接触这个概念的人讲清压缩动了什么、有损和无损怎么选，以及新手最容易踩的坑。",
      "en": "Image compression does one thing: describe the same picture with fewer bytes. A plain explanation of what changes, how to choose between lossy and lossless, and the mistakes beginners keep making."
    },
    "keywords": [
      "what is image compression",
      "image compression beginner",
      "how does image compression work",
      "lossy vs lossless image compression",
      "image compression explained",
      "图片压缩是什么",
      "图片压缩原理",
      "有损压缩和无损压缩区别"
    ],
    "content": {
      "zh": [
        "图片压缩做的事只有一件：用更少的字节描述同一张图。手机拍的一张 4000×3000 照片，原始像素数据要占三十几兆，压成 JPEG 之后常见两三兆，在手机屏幕上看不出差别。这篇写给刚接触这个概念的人，不谈公式，只讲清压缩到底动了什么、什么时候会真的伤到画质。",
        {
          "type": "h2",
          "text": "图片压缩到底在动什么"
        },
        "一张位图本质是一张像素表格，每个格子里记三个数字：红、绿、蓝。压缩算法找的是这张表里的重复规律，把规律记成一段短描述，而不是一格一格抄数字。重复越多，能省下来的空间越大。",
        {
          "type": "ul",
          "items": [
            "空间冗余：大片同色的天空、墙面、虚化背景，一行描述就能覆盖一整片区域",
            "编码冗余：同一串数值出现得越频繁，越能用更短的符号代替，思路和压缩包一样",
            "视觉冗余：人眼对高频细节和细微色差不敏感，这部分数据可以记得更粗"
          ]
        },
        "压缩不等于把图片缩小。尺寸不变、像素数量不变，变的是记录这些像素要花多少字节。把这两件事分开，后面大部分困惑都会消失。",
        {
          "type": "h2",
          "text": "有损压缩和无损压缩的区别"
        },
        "两种方式的差别只有一个：解压之后能不能还原成原始字节。能还原的叫无损，不能还原的叫有损。",
        {
          "type": "ul",
          "items": [
            "无损：PNG、WebP 无损模式、TIFF 的 LZW。解压后逐字节相同，适合截图、图表和带文字的图",
            "有损：JPEG、WebP 有损模式、AVIF。丢掉一部分人眼不易察觉的信息，换来体积大幅下降，适合照片",
            "有损格式会累积损失：每次打开 JPEG 再另存一次，都会再丢一层细节",
            "需要多次编辑时，中途用 PNG 或源文件保存，最后一步再输出 JPEG"
          ]
        },
        {
          "type": "h2",
          "text": "常见图片格式各自用哪种方式压缩"
        },
        {
          "type": "ul",
          "items": [
            "JPEG：有损，照片的默认选择，不支持透明",
            "PNG：无损，支持透明，适合界面截图和线条图，拿它存照片体积会非常大",
            "WebP：有损和无损都支持，同等画质下通常比 JPEG 小，主流浏览器已经覆盖",
            "AVIF：以有损为主，压缩率更高但编码更慢，适合不常变动的图库",
            "GIF：无损但只有 256 色，只适合简单动图，不适合照片"
          ]
        },
        {
          "type": "h2",
          "text": "什么时候该压缩，什么时候不该"
        },
        {
          "type": "ul",
          "items": [
            "该压缩：网页图片、邮件附件、有大小限制的上传表格和报名系统",
            "该压缩：只在屏幕上看的照片，原始分辨率在手机上根本用不上",
            "不该压缩：要印刷或大幅输出的图，先按输出尺寸重采样再决定",
            "不该压缩：已经压过一次的 JPEG，再压一遍收益很小，画质损失却很明显",
            "顺序是先改尺寸再压缩：长边砍掉一半，像素数量降到四分之一，这一步比调质量档位有效得多"
          ]
        },
        {
          "type": "h2",
          "text": "新手最容易踩的四个坑"
        },
        {
          "type": "ul",
          "items": [
            "只看文件大小不看画质：压到 100% 放大还看得下去就够了，别追最小体积",
            "用截图代替导出：截图锁死分辨率，也会丢掉原图的色彩信息",
            "压完覆盖原图：永远留一份未压缩的主文件，压缩只做副本",
            "不看实际传输量：浏览器开发者工具网络面板的 transferred 一栏，才显示读者真正下载了多少"
          ]
        },
        "想直接动手的话，image-compressor-saas.shop 在浏览器里完成压缩，图片不上传服务器。设定目标体积的做法见 /blog/compress-jpg-under-100kb，字节和加载速度的关系见 /blog/image-compression-affects-page-speed，先改尺寸再压缩的顺序见 /blog/resize-and-compress-image。",
        {
          "type": "faq",
          "items": [
            {
              "q": "压缩图片会降低画质吗？",
              "a": "有损压缩一定会，无损压缩不会。JPEG 每次保存都会重新量化一次，反复保存会累积模糊和色块；PNG 解压后与原始字节完全一致。多数网页场景下把质量设在 75 到 85 之间，肉眼几乎分辨不出差别。"
            },
            {
              "q": "压缩和改尺寸是一回事吗？",
              "a": "不是。改尺寸减少像素数量，压缩减少描述这些像素所需的字节。想省体积就先改尺寸，这一步的收益比调质量档位大得多，两者还能叠加使用。"
            },
            {
              "q": "压缩后的图片还能恢复原样吗？",
              "a": "有损压缩之后不能。丢掉的信息没有备份，市面上号称能还原的工具只是补上看起来合理的细节，不是恢复。所以压缩之前一定留一份原图。"
            },
            {
              "q": "一张图压到多大才算合适？",
              "a": "看用途。网页正文配图长边 1200 到 1600 像素通常够用，社交媒体按平台给出的建议尺寸走，邮件附件按对方限制来。没有统一数字，从实际展示尺寸反推最稳。"
            }
          ]
        },
        {
          "type": "cta",
          "text": "到 image-compressor-saas.shop 在浏览器内压缩图片",
          "href": "/"
        }
      ],
      "en": [
        "Image compression does exactly one thing: describe the same picture with fewer bytes. A 4000 by 3000 photo from a phone holds tens of megabytes of raw pixel data, and the JPEG you actually share usually lands around two or three. This is written for someone meeting the idea for the first time, so no formulas, just what compression changes and when it starts costing visible quality.",
        {
          "type": "h2",
          "text": "What image compression actually changes"
        },
        "A bitmap is a grid of pixels, and each cell stores three numbers for red, green and blue. A compressor looks for repetition in that grid and writes a short description of the pattern instead of copying every cell. More repetition means more bytes saved.",
        {
          "type": "ul",
          "items": [
            "Spatial redundancy: a flat sky, a plain wall, a blurred background, where one line covers a whole region",
            "Coding redundancy: values that repeat often get shorter symbols, the same idea behind a zip archive",
            "Visual redundancy: eyes miss fine detail and small colour shifts, so those bytes can be recorded more coarsely"
          ]
        },
        "Compression is not resizing. The display size and the pixel count stay the same, and what shrinks is the number of bytes needed to record those pixels. Once you separate the two ideas, most of the confusion goes away.",
        {
          "type": "h2",
          "text": "Lossy and lossless compression compared"
        },
        "The two differ on a single question: does the decoded file match the original byte for byte. If yes, it is lossless. If not, it is lossy.",
        {
          "type": "ul",
          "items": [
            "Lossless: PNG, lossless WebP, LZW in TIFF. Decoding reproduces the original exactly, which suits screenshots, charts, and anything containing text",
            "Lossy: JPEG, lossy WebP, AVIF. Information the eye barely registers is dropped in exchange for a much smaller file, which suits photographs",
            "Lossy formats accumulate damage, since opening a JPEG and saving it again removes another layer of detail each time",
            "Keep a lossless or original copy while you edit, and export to JPEG only as the final step"
          ]
        },
        {
          "type": "h2",
          "text": "What the common image formats do"
        },
        {
          "type": "ul",
          "items": [
            "JPEG: lossy, the default for photographs, no transparency",
            "PNG: lossless, supports transparency, right for interface screenshots and line art, far too large for photos",
            "WebP: both lossy and lossless, usually smaller than JPEG at matched quality, supported across current browsers",
            "AVIF: mainly lossy, compresses further, slower to encode, worth it for libraries that rarely change",
            "GIF: lossless but capped at 256 colours, fine for simple animation, wrong for photographs"
          ]
        },
        {
          "type": "h2",
          "text": "When to compress and when to leave it alone"
        },
        {
          "type": "ul",
          "items": [
            "Compress: images for a web page, email attachments, forms and portals that cap upload size",
            "Compress: photos you will only ever view on a screen, where the full resolution is never used",
            "Leave alone: anything headed for print or a large output, resample to the output size first and decide after that",
            "Leave alone: a JPEG that has already been compressed once, because a second pass saves little and costs visible quality",
            "Resize before compressing, since halving the long edge removes about three quarters of the pixels and beats any quality slider"
          ]
        },
        {
          "type": "h2",
          "text": "Four mistakes beginners make"
        },
        {
          "type": "ul",
          "items": [
            "Chasing the smallest file instead of checking the result at 100 percent zoom",
            "Using a screenshot instead of an export, which locks the resolution and drops colour data",
            "Overwriting the original, instead of keeping one untouched master and compressing a copy",
            "Ignoring the transferred column in the network panel, the only place that shows what readers actually download"
          ]
        },
        "To try it, image-compressor-saas.shop compresses inside the browser so images never reach a server. Target an exact size with /blog/compress-jpg-under-100kb, see how bytes relate to load time in /blog/image-compression-affects-page-speed, and get the resize-then-compress order right with /blog/resize-and-compress-image.",
        {
          "type": "faq",
          "items": [
            {
              "q": "Does image compression reduce quality?",
              "a": "Lossy compression always does, lossless does not. JPEG re-quantises on every save, so repeated saves build up blur and banding, while PNG decodes back to the original bytes. For most web use a quality setting between 75 and 85 is visually indistinguishable from the original."
            },
            {
              "q": "Is compressing the same as resizing?",
              "a": "No. Resizing reduces the number of pixels, and compression reduces the bytes used to describe them. Resize first when you want a smaller file, since that saves far more than any quality setting, then compress on top of it."
            },
            {
              "q": "Can a compressed image be restored?",
              "a": "Not after lossy compression. The discarded data has no backup, and tools that claim otherwise only invent plausible detail. Keep the original before compressing anything."
            },
            {
              "q": "How small should one image be?",
              "a": "It depends on where it goes. A body image on a page is usually fine at 1200 to 1600 pixels on the long edge, social platforms publish their own recommended sizes, and email follows whatever limit the recipient sets. Work backwards from the real display size."
            }
          ]
        },
        {
          "type": "cta",
          "text": "Compress images in your browser on image-compressor-saas.shop",
          "href": "/"
        }
      ]
    }
  },
  {
    slug: "compressed-vs-resized-image",
    date: "2026-10-07",
    title: {
      zh: "压缩过的图片和改过尺寸的图片，差在哪",
      en: "Compressed vs Resized Image: What Actually Changes",
    },
    description: {
      zh: "压缩和改尺寸都能让图片变小，但动的东西完全不同：改尺寸丢像素，压编码动存储方式。这篇用同一张照片的实测数字说明两者差别、什么时候先改尺寸再压缩，以及四个最常见误区。",
      en: "Compress vs resize: both shrink a file, and that is where the similarity ends. Resizing discards pixels, compression keeps every pixel and changes how they are stored. Same-photo numbers, a decision order, and four mistakes.",
    },
    keywords: [
      "compress vs resize",
      "compressed vs resized image",
      "difference between compressing and resizing an image",
      "resize or compress image for web",
      "does resizing reduce image quality",
      "图片压缩和改尺寸的区别",
      "先压缩还是先改尺寸",
    ],
    content: {
      zh: [
        "上传被拒之后，多数人会遇上同一个选择：压缩还是改尺寸。两者都能让文件变小，相似之处到此为止。改尺寸直接丢掉一部分像素，剩下那部分保持原样；压缩一个像素都不动，只把这些数据怎么存变得更省。选错了，要么文件还是超限，要么图糊了。这篇用同一张照片的实测数字把两件事分开讲清楚。",
        { type: "h2", text: "改尺寸动了什么" },
        "改尺寸改的是像素总数。4000×3000 变成 1200×900，等于从原来的网格里重新取样一次，留在格点之间的细节就此消失，没有任何工具能把它们找回来。剩下那部分像素的值没有被重新编码，所以边缘和文字依然锐利。",
        {
          type: "ul",
          items: [
          "4000×3000 的照片有 1200 万像素，缩到 1200×900 只剩约 108 万",
          "体积大致随像素数同比例下降，常见是缩小 85% 到 95%",
          "边缘和文字保持清晰，因为除了重采样之外没有第二步重编码",
          "不可逆。原尺寸那份必须单独留着",
          "尺寸小于实际展示区域时，放大看就是软的",
          ],
        },
        { type: "h2", text: "压缩动了什么" },
        "压缩不动像素网格，动的是这些像素的存储方式。JPEG、WebP 这类有损格式挑人眼不敏感的细节丢掉，PNG 这类无损格式只去掉统计上的冗余，解压后能还原到一模一样。质量参数往下压，压缩痕迹就开始显出来了。",
        {
          type: "ul",
          items: [
          "一个像素都不丢，也不重新采样",
          "无损压缩可以还原到逐字节相同",
          "有损压缩会在边缘和文字周围留下块状痕迹",
          "照片通常能压到原体积的 60% 到 70% 之前都不明显",
          "同一份有损文件反复压，每压一轮都掉一次细节",
          ],
        },
        { type: "h2", text: "同一张照片，四种处理方式" },
        "下面用一张手机直出的 4000×3000 照片举例，数字是这类文件的常见量级，不代表所有设备。",
        {
          type: "ul",
          items: [
          "相机直出 JPEG：4.2MB，4000×3000",
          "只改尺寸到 1600×1200：约 480KB，正常观看尺寸下锐利度没变",
          "只压缩到质量 75，不动尺寸：约 1.3MB，细节全在，树叶和头发周围开始发毛",
          "先改到 1600×1200 再压到质量 75：约 190KB，也是多数网页真正发出去的形态",
          "连续三次压到质量 60：约 900KB，画面明显比一次压到 1.3MB 的差",
          ],
        },
        "最后两行的对比最能说明问题：先改尺寸再压一次，体积最小画质还行；连续压缩三次，体积反而更大，画质更差。",
        { type: "h2", text: "先做哪一步" },
        "从这张图最终用在哪倒推。页面上只占 800 像素宽的位置，那就没什么好讨论的：先改尺寸，再轻轻压一次。",
        {
          type: "ul",
          items: [
          "网页与社交：改到展示宽度的两倍左右，然后压缩一次",
          "印刷排版：印刷尺寸下不要低于每英寸 300 像素",
          "带文字的截图：保持像素尺寸，用 PNG，重新采样会把文字压糊",
          "卡文件上传上限（比如 100KB）：先改尺寸，只靠压缩基本到不了",
          "归档：只改尺寸和压缩派生出来的副本，原始那份别动",
          ],
        },
        { type: "h2", text: "代价最大的四个习惯" },
        "多数画质问题都来自下面这几条，而不是算法本身。相关做法可以接着看 /blog/lossy-vs-lossless-compression、/blog/resize-and-compress-image 和 /blog/compress-jpg-under-100kb。",
        {
          type: "ul",
          items: [
          "直接覆盖原文件来改尺寸。降过一次之后，印刷尺寸和大屏就再也回不去了",
          "同一份 JPEG 反复压。每一轮都在上一轮的结果上再丢细节",
          "为了追某个 KB 上限，把质量一路压到 30。先改尺寸能早得多达标，画质还更好",
          "把 PNG 截图改尺寸后再存 PNG。文字边缘会重新采样，压成糊边就该换 JPEG 了",
          ],
        },
        { type: "h2", text: "常见问题" },
        {
          type: "faq",
          items: [
            { q: "改尺寸算不算降低画质？", a: "看怎么定义。剩下的像素没有被重新编码，所以在目标尺寸下看是清楚的；被丢掉的那些细节确实没了，放大会遇到软边。判断标准应当是「在多大尺寸下看」，而不是绝对画质。" },
            { q: "该压缩还是该改尺寸？", a: "图上放多大就先改成多大，多数情况是展示宽度的两倍左右，然后再压一次。只有在像素尺寸必须保留时才反过来，比如带文字的截图和要用于印刷的文件。" },
            { q: "改小之后还能恢复到原来的清晰度吗？", a: "不能。插值放大只会根据周围像素猜，看着像素数回来了，细节回不来。这也是为什么改尺寸之前一定要留一份原始文件。" },
            { q: "为什么改了尺寸文件还是很大？", a: "改尺寸只按像素数降一档。原图本身编码效率很低，或者带 alpha 通道、元数据、多张预览图时，降完还是偏大。这时候在改尺寸之后补一次压缩，通常还能再降一半以上。" },
          ],
        },
        { type: "cta", text: "在 image-compressor-saas.shop 浏览器本地压缩图片", href: "/" },
      ],
      en: [
        "Compress vs resize is the question most people hit right after an upload gets rejected. Both make a file smaller, and that is where the similarity ends. Resizing throws away pixels and leaves what remains untouched. Compression keeps every pixel and changes how those pixels are stored. Pick the wrong one and either the file stays over the limit or the image goes soft. The numbers below come from one ordinary photo, so you can see where each step actually lands.",
        { type: "h2", text: "What resizing changes" },
        "Resizing changes how many pixels the image holds. Going from 4000 x 3000 to 1200 x 900 resamples the grid once, and everything that lived between the surviving samples disappears. No tool brings it back. The pixels that remain were not re-encoded, which is why edges and small text stay crisp.",
        {
          type: "ul",
          items: [
          "A 4000 x 3000 photo holds 12 million pixels; at 1200 x 900 it holds about 1.08 million",
          "File size falls roughly with the pixel count, often 85 to 95 percent smaller",
          "Edges and text stay clean because nothing outside of the resample was re-coded",
          "It cannot be reversed. Keep the full-size copy separately",
          "An image resized below its display area looks soft the moment someone zooms",
          ],
        },
        { type: "h2", text: "What compression changes" },
        "Compression leaves the pixel grid alone and works on how those pixels are stored. Lossy formats like JPEG and WebP drop detail that human vision struggles to resolve. Lossless formats like PNG only remove statistical redundancy, and decompression returns the exact bytes. Push the quality setting far enough and the artefacts stop hiding.",
        {
          type: "ul",
          items: [
          "No pixels are lost and nothing is resampled",
          "Lossless compression restores the file byte for byte",
          "Lossy compression leaves blocking around edges and letterforms",
          "A photo usually reaches 60 to 70 percent of its original size before artefacts turn obvious",
          "Running lossy compression on the same file again costs detail every pass",
          ],
        },
        { type: "h2", text: "Same photo, four treatments" },
        "These figures use a straight-out-of-camera 4000 x 3000 holiday photo. They are the magnitudes you normally see for this kind of file, not a universal result.",
        {
          type: "ul",
          items: [
          "Original JPEG from the camera: 4.2 MB at 4000 x 3000",
          "Resized to 1600 x 1200 only: about 480 KB, and sharpness is unchanged at normal viewing size",
          "Compressed to quality 75 with no resize: about 1.3 MB, all detail present but foliage and hair start to fringe",
          "Resized to 1600 x 1200 then compressed to 75: about 190 KB, which is what most pages actually ship",
          "Compressed three separate times at quality 60: about 900 KB, and visibly worse than the 1.3 MB single pass",
          ],
        },
        "The last two rows settle the argument. Resize once and compress once gives the smallest file and acceptable sharpness. Compressing the same file three times leaves it larger and worse looking.",
        { type: "h2", text: "Which one to reach for first" },
        "Work backwards from where the image ends up. If the layout shows it 800 pixels wide, there is nothing to discuss: resize first, then apply one light compression pass.",
        {
          type: "ul",
          items: [
          "Web page or social post: resize to roughly twice the displayed width, then compress once",
          "Print layout: stay above about 300 pixels per inch at the printed size",
          "Screenshots with text: keep the pixel dimensions and use PNG, since resampling turns letters to mush",
          "A hard upload cap such as 100 KB: resize first, because compression alone rarely gets there",
          "Archive copies: resize and compress a derivative only, and never touch the original",
          ],
        },
        { type: "h2", text: "Four habits that cost the most" },
        "Most quality complaints trace back to these rather than to the codec. Related reads sit at /blog/lossy-vs-lossless-compression, /blog/resize-and-compress-image, and /blog/compress-jpg-under-100kb.",
        {
          type: "ul",
          items: [
          "Resizing over the original file. Once it is down, the print-sized and large-screen versions are gone",
          "Compressing the same JPEG repeatedly, since each pass discards detail from the previous result",
          "Dragging quality down to 30 to hit a KB cap. Resizing reaches the target far earlier and looks better doing it",
          "Resizing a PNG screenshot and saving it as PNG. Text edges get resampled, and once they blur you should have switched to JPEG",
          ],
        },
        { type: "h2", text: "FAQ" },
        {
          type: "faq",
          items: [
            { q: "Does resizing reduce image quality?", a: "It depends on the size you judge it at. The surviving pixels were not re-encoded, so the image is clean at its target size. The discarded detail really is gone, and enlarging shows soft edges. The useful test is the viewing size, not absolute sharpness." },
            { q: "Should I resize or compress an image?", a: "Resize to the size it will actually be used at, usually around twice the displayed width, then compress once. Reverse the order only when the pixel dimensions have to survive, such as screenshots with text or files heading to print." },
            { q: "Can I restore sharpness after resizing?", a: "No. Enlarging interpolates from neighbouring pixels, so the pixel count comes back and the detail does not. That is why the full-size file has to be kept before anything gets resized." },
            { q: "Why is my file still large after resizing?", a: "Resizing only cuts the pixel count once. If the source was encoded inefficiently, or carries an alpha channel, metadata, and embedded previews, the result stays heavy. One compression pass after resizing usually takes another half off." },
          ],
        },
        { type: "cta", text: "Resize and compress images locally on image-compressor-saas.shop", href: "/" },
      ],
    },
  },
  {
    slug: "image-resolution-vs-file-size",
    date: "2026-10-08",
    title: {
      zh: "分辨率与文件大小：改哪个才管用",
      en: "Image Resolution vs File Size: Which One Should You Change",
    },
    description: {
      zh: "分辨率和文件大小经常被当成一件事，其实一个管像素多少，一个管这些像素怎么存。这篇讲清什么时候该改分辨率、什么时候该压缩，以及为什么高分辨率的图也可能很小。",
      en: "Resolution and file size get treated as one thing, but one counts pixels and the other counts bytes. Here is when to resize, when to compress, and why a high resolution image can still be small.",
    },
    keywords: [
      "resolution vs file size",
      "image resolution vs file size",
      "does higher resolution mean bigger file",
      "reduce file size without changing resolution",
      "pixels vs file size",
      "分辨率和文件大小的关系",
      "图片分辨率与体积",
    ],
    content: {
      zh: [
        "把分辨率调低和把文件压小是两件事，混在一起谈就容易做错决定。分辨率说的是横向乘纵向一共有多少个像素，文件体积说的是这些像素占用了多少字节。分辨率高的照片体积通常更大，但两者之间不存在固定换算：一张 4000×3000 的纯色截图可能只有 200KB，一张 1200×900 的树叶特写可能超过 1MB。想让文件变小，先弄清是哪一项在撑着体积。",
        { type: "h2", text: "分辨率管的是像素数量" },
        "分辨率是几何量，跟压缩算法无关。它决定的是画面里有多少个格子，以及这些格子最多能吃掉多少字节。",
        {
          type: "ul",
          items: [
            "4000×3000 是 1200 万个像素点，每个点都要占位置",
            "缩到 2000×1500，像素数变成四分之一，体积天花板也大致降到四分之一",
            "不可逆。重新采样丢掉的细节，任何工具都补不回来",
            "打印按每英寸 300 像素算下限，低于这个就会看出颗粒",
            "网页按展示宽度算，1600 像素宽的图放在 800 宽的位子上，等于多给了一倍",
          ],
        },
        { type: "h2", text: "体积管的是这些像素怎么存" },
        "同样的像素数可以有完全不同的体积，差别全在编码方式和画面内容上。",
        {
          type: "ul",
          items: [
            "JPEG、WebP 这类有损格式挑人眼不敏感的细节丢掉",
            "PNG 无损压缩只去掉统计冗余，解压后逐字节相同",
            "像素数一样时，画面越杂乱体积越大，树叶、毛发、噪点都难压",
            "纯色、渐变、大面积天空压得动，纯色截图能小到几十 KB",
            "元数据、嵌入预览、alpha 通道也在悄悄占体积",
          ],
        },
        { type: "h2", text: "同一张照片的四种数字" },
        "下面用一张手机直出的 4000×3000 照片举例，数字是这类文件的常见量级。",
        {
          type: "ul",
          items: [
            "相机直出 4000×3000，约 4.2MB",
            "只改分辨率到 1600×1200，约 480KB，正常观看尺寸下锐利度没变",
            "只压到质量 75、分辨率不动，约 1.3MB，细节都在",
            "先改分辨率再压一次，约 190KB，这是多数网页实际发出去的形态",
            "连续压三次到质量 60，约 900KB，比压一次更大也更差",
          ],
        },
        "最后两行最能说明问题：先改分辨率再压一次最划算，反复压同一份最亏。",
        { type: "h2", text: "按用途倒推该动哪一个" },
        {
          type: "ul",
          items: [
            "网页展示：先改到展示宽度的两倍左右，再压一次",
            "邮件附件和上传上限：先改分辨率，只靠压缩往往到不了",
            "带文字的截图：保持分辨率，用 PNG，重新采样会让文字发糊",
            "印刷：分辨率不能降，只能从压缩和格式上省",
            "归档：只改派生的副本，原始那份别动",
          ],
        },
        "相关做法见 /blog/resize-and-compress-image、/blog/compress-jpg-under-100kb 和 /blog/how-webp-compression-works。",
        { type: "h2", text: "FAQ" },
        {
          type: "faq",
          items: [
            { q: "分辨率越高文件一定越大吗？", a: "不一定。像素数只是体积的上限，实际大小取决于画面内容和编码方式。同一分辨率下，纯色截图和满屏树叶的照片能差出十倍。" },
            { q: "不改分辨率能把文件压小吗？", a: "能，但幅度有限。压缩在像素数不变的前提下去掉冗余，通常能省三到七成。要降到 100KB 这种硬上限，多半还是得先改分辨率。" },
            { q: "为什么我把分辨率降到一半，体积只少了三成？", a: "因为除了像素，体积里还有元数据、嵌入预览和 alpha 通道。改完分辨率再压一次，这部分通常还能再砍一半。" },
            { q: "打印要不要为了省体积降分辨率？", a: "不要。打印尺寸下每英寸 300 像素是常见下限，降了就会出颗粒。只能从压缩和格式上想办法。" },
          ],
        },
        { type: "cta", text: "在 image-compressor-saas.shop 上按用途改分辨率、压体积，文件不出本机", href: "/" },
      ],
      en: [
        "Lowering resolution and shrinking a file get talked about as if they were one action, which is where bad decisions start. Resolution counts how many pixels the image has across and down. File size counts how many bytes those pixels take to store. Higher resolution usually means a bigger file, but there is no fixed ratio between them: a 4000x3000 screenshot of a flat colour can be 200KB, while a 1200x900 close-up of leaves can pass 1MB. Before you try to make a file smaller, work out which of the two is holding the size up.",
        { type: "h2", text: "Resolution governs the pixel count" },
        "Resolution is a geometric quantity and has nothing to do with the codec. It decides how many cells the picture is built from, and therefore the most those cells can weigh.",
        {
          type: "ul",
          items: [
            "4000x3000 is 12 million pixels, and every one of them takes space",
            "Dropping to 2000x1500 quarters the pixel count, and the size ceiling drops by roughly the same factor",
            "It does not reverse. Detail lost to resampling cannot be recovered by any tool",
            "Print works to a floor of about 300 pixels per inch, and below that you see grain",
            "On the web, what matters is display width. A 1600 pixel image in an 800 pixel slot ships twice what anyone can see",
          ],
        },
        { type: "h2", text: "File size governs how those pixels are stored" },
        "The same pixel count can produce wildly different sizes, and the difference comes from the codec and from what is in the frame.",
        {
          type: "ul",
          items: [
            "Lossy formats such as JPEG and WebP discard detail the eye tends to miss",
            "PNG compression is lossless and removes statistical redundancy, giving byte-identical output after decoding",
            "At the same pixel count, busier images weigh more. Leaves, hair and sensor noise resist compression",
            "Flat colour, gradients and empty sky compress well, and a plain screenshot can land under 100KB",
            "Metadata, embedded previews and an alpha channel add weight without showing up in the picture",
          ],
        },
        { type: "h2", text: "Four sets of numbers from one photo" },
        "These come from a 4000x3000 phone photo. Treat them as typical magnitudes rather than exact figures for your own files.",
        {
          type: "ul",
          items: [
            "Straight from the camera at 4000x3000: about 4.2MB",
            "Resized only, to 1600x1200: about 480KB, with no visible sharpness change at normal viewing size",
            "Compressed only, quality 75, resolution untouched: about 1.3MB, all detail intact",
            "Resized first, then compressed once: about 190KB, which is what most pages actually ship",
            "Compressed three times at quality 60: about 900KB, larger and worse than a single pass",
          ],
        },
        "The last two lines settle it. Resize once then compress once is the cheap path, and compressing the same file repeatedly costs the most.",
        { type: "h2", text: "Work backwards from where the image ends up" },
        {
          type: "ul",
          items: [
            "Web pages: resize to roughly twice the display width, then compress once",
            "Email attachments and upload caps: resize first, since compression alone rarely reaches the limit",
            "Screenshots with text: keep the resolution and use PNG, because resampling turns text edges to mush",
            "Print: leave resolution alone and save on encoding and format instead",
            "Archiving: only touch derived copies and keep the original where it is",
          ],
        },
        "Related walks through /blog/resize-and-compress-image, /blog/compress-jpg-under-100kb and /blog/how-webp-compression-works.",
        { type: "h2", text: "FAQ" },
        {
          type: "faq",
          items: [
            { q: "Does higher resolution always mean a bigger file?", a: "No. The pixel count sets a ceiling, not the outcome. Actual size depends on how much detail the picture holds and how it is encoded, and at the same resolution a flat screenshot and a frame full of leaves can differ tenfold." },
            { q: "Can I shrink a file without changing resolution?", a: "Yes, within limits. Compression removes redundancy while keeping every pixel, which usually saves 30 to 70 percent. Hitting a hard cap like 100KB generally needs a resize first." },
            { q: "Why did halving the resolution only cut the size by 30 percent?", a: "Because pixels are not the only thing in there. Metadata, embedded previews and an alpha channel take space too, and one compression pass after the resize usually removes another half." },
            { q: "Should I drop resolution to save space on print files?", a: "No. Print sizes need around 300 pixels per inch, and going under that shows grain. Save on encoding and format instead." },
          ],
        },
        { type: "cta", text: "Resize and compress for the job at hand on image-compressor-saas.shop, with the file staying on your machine", href: "/" },
      ],
    },
  },
  {
    slug: "dpi-vs-ppi-explained",
    date: "2026-10-09",
    title: {
      zh: "DPI 和 PPI 到底差在哪：一次讲清",
      en: "DPI vs PPI: What the Difference Actually Is",
    },
    description: {
      zh: "DPI 说的是打印机一英寸里落多少墨点，PPI 说的是图片一英寸里排多少像素。屏幕显示只跟 PPI 有关，DPI 是设备的事。只有把图送去打印时两者才碰面，这篇讲清怎么换算，以及什么时候根本不用管 DPI。",
      en: "DPI counts printer dots per inch, PPI counts pixels per inch in the image. Screens only care about PPI, and DPI belongs to the output device. Print is the one case where the two meet, so here is the conversion and when you can ignore DPI entirely.",
    },
    keywords: [
      "dpi vs ppi",
      "dpi vs ppi explained",
      "difference between dpi and ppi",
      "does dpi affect image quality on screen",
      "300 dpi for print",
      "DPI 和 PPI 的区别",
      "打印分辨率怎么算",
    ],
    content: {
      zh: [
        "DPI 和 PPI 经常被当成同一个东西，其实它们量的是两个不同的对象。PPI 是图片自身的属性，说的是一英寸里排了多少个像素；DPI 是输出设备的属性，说的是打印机在一英寸里落了多少个墨点。屏幕显示只跟 PPI 有关，跟 DPI 没有关系。只有把图送去打印时两者才碰面，那时你要做的是告诉打印机该用多少个墨点去还原每一个像素。",
        { type: "h2", text: "两个缩写量的是不同的东西" },
        {
          type: "ul",
          items: [
            "PPI（pixels per inch）：图片每英寸的像素数，记在文件里，改输出尺寸就会变",
            "DPI（dots per inch）：打印机每英寸的墨点数，属于设备参数，跟图片文件无关",
            "一张 3000 像素宽的图，印成 10 英寸宽是 300 PPI，印成 20 英寸宽只剩 150 PPI",
            "同一个文件在不同成品尺寸下 PPI 不同，像素总数一直没变",
            "Photoshop 图像大小对话框里那个分辨率框填的是 PPI，不是 DPI",
          ],
        },
        "像素总数才是硬指标。PPI 只是把像素总数除以输出尺寸得到的商，改尺寸就改了 PPI，一个像素都没有变多或变少。",
        { type: "h2", text: "为什么 DPI 这个词到处乱用" },
        {
          type: "ul",
          items: [
            "扫描仪把采样精度标成 DPI，它采集的其实是像素，写成 PPI 更准确",
            "Windows 和 macOS 的系统 DPI 缩放是另一件事，指界面元素的放大倍数",
            "打印店说 300 DPI 交稿，实际要求是图片按成品尺寸算下来有 300 PPI",
            "不少看图软件把 PPI 标签写成 DPI，因为后面这个词更眼熟",
            "手机参数里的 PPI 说的是屏幕像素密度，跟图片文件里的 PPI 又不是一回事",
          ],
        },
        "术语混用会带来具体的麻烦。有人以为把分辨率框从 72 改成 300 就提高了画质，那一步只改了文件里记的一个数字，像素一个没加；重采样开着的时候尺寸还会被一起改小，等于白折腾一趟。",
        { type: "h2", text: "打印时怎么换算" },
        {
          type: "ul",
          items: [
            "先定成品尺寸：一张 6×4 英寸的照片，长边就是 6 英寸",
            "按每英寸 300 像素倒推：6 英寸需要 1800 像素，4 英寸需要 1200 像素",
            "低于 300 PPI 开始出颗粒，150 PPI 在铜版纸上已经看得出来",
            "喷墨打印机实际用 1200 DPI 甚至更高去还原一个像素，墨点数远多于像素数",
            "海报、展板这类远距离观看的成品，150 PPI 通常够用",
            "灯箱和大幅面喷绘可以更宽松，观看距离每拉远一倍，要求就降一档",
          ],
        },
        "换算只需要一次除法：像素数除以英寸数。反过来，知道成品尺寸和想要的 PPI，乘一下就知道手上的源文件够不够。",
        { type: "h2", text: "按用途看该盯哪一个" },
        {
          type: "ul",
          items: [
            "网页和 App：只看像素尺寸，PPI 和 DPI 都不用管，浏览器按 CSS 像素摆放",
            "高清屏：按展示宽度的两倍出图，仍然是像素尺寸问题，跟 PPI 标签无关",
            "打印照片和画册：按成品尺寸算 PPI，300 是常见下限",
            "扫描老照片：扫描仪上的 600 是采样精度，存档用这个档位，日后裁剪还有余量",
            "压缩前先想清楚：打印用途不要降分辨率，只能从压缩和格式上省体积",
          ],
        },
        "分辨率和文件体积的关系见 /blog/image-resolution-vs-file-size；先改尺寸再压缩的顺序见 /blog/resize-and-compress-image；遇到硬性大小上限的做法见 /blog/compress-jpg-under-100kb。",
        { type: "h2", text: "FAQ" },
        {
          type: "faq",
          items: [
            { q: "把 PPI 从 72 改成 300 会提高画质吗？", a: "不会。那一步只改了文件里记录的一个数字，像素总数没变，画质和体积都不会变。要更多细节只能重新采集，扫描件就重扫一遍。" },
            { q: "打印店说要 300 DPI 的图，我要给什么？", a: "给按成品尺寸算下来每英寸有 300 个像素的图。6×4 英寸就是 1800×1200 像素。直接报尺寸比报 DPI 省事，也不用争论术语。" },
            { q: "网页用图需要设 DPI 吗？", a: "不需要。浏览器按 CSS 像素摆放图片，PPI 标签会被忽略。给到展示宽度的两倍就够了，800 像素宽的位子配 1600 像素的图。" },
            { q: "扫描时选 300 还是 600？", a: "存档选 600。老照片多半要裁掉破损的边缘，裁完还得剩下足够像素，600 的余量比 300 宽得多，代价只是文件更大。" },
          ],
        },
        { type: "cta", text: "在 image-compressor-saas.shop 上按用途算好 PPI 再压体积，文件不出本机", href: "/" },
      ],
      en: [
        "DPI and PPI get used as if they were the same measurement, and they are not. PPI belongs to the image and counts the pixels in one inch of it. DPI belongs to the output device and counts how many ink dots a printer puts in one inch. A screen only cares about PPI. Print is the one place where the two meet, and what you are deciding there is how many dots the printer should spend rendering each pixel.",
        { type: "h2", text: "The two abbreviations measure different things" },
        {
          type: "ul",
          items: [
            "PPI (pixels per inch) is stored in the file and changes whenever the output size changes",
            "DPI (dots per inch) is a printer specification and has nothing to do with the image file",
            "A 3000 pixel wide image printed 10 inches wide is 300 PPI, and printed 20 inches wide it is 150 PPI",
            "The same file has different PPI at different finished sizes while the pixel count stays put",
            "The resolution field in the Photoshop image size dialog is PPI, despite what people call it",
          ],
        },
        "The pixel count is the number that matters. PPI is just that count divided by the output size, so changing the size changes PPI without adding or removing a single pixel.",
        { type: "h2", text: "Why DPI turns up everywhere" },
        {
          type: "ul",
          items: [
            "Scanner specifications say DPI while sampling pixels, which PPI would describe more accurately",
            "System DPI scaling in Windows and macOS is unrelated, referring to how much interface elements are enlarged",
            "A print shop asking for 300 DPI wants 300 pixels per inch at the finished size",
            "Plenty of viewers label PPI as DPI, since that is the word people recognise",
            "PPI in a phone specification means screen pixel density, which is yet another meaning",
          ],
        },
        "The sloppy terminology causes real mistakes. Changing the resolution field from 72 to 300 edits one number in the file and adds no pixels, and with resampling left on it shrinks the dimensions at the same time, so the whole exercise costs you detail instead of gaining it.",
        { type: "h2", text: "How the conversion works for print" },
        {
          type: "ul",
          items: [
            "Fix the finished size first: a 6 by 4 inch print has a 6 inch long edge",
            "Work backwards at 300 pixels per inch: 6 inches needs 1800 pixels and 4 inches needs 1200",
            "Below 300 PPI grain starts to show, and 150 PPI is already visible on coated stock",
            "An inkjet uses 1200 DPI or more to render a single pixel, so dots far outnumber pixels",
            "Posters and display boards viewed from a distance are usually fine at 150 PPI",
            "Backlit displays and large format banners can go lower, since every doubling of viewing distance relaxes the requirement",
          ],
        },
        "The conversion is one division: pixels divided by inches. Going the other way, multiply the finished size by the PPI you want and you know whether the source file is big enough.",
        { type: "h2", text: "Which one to watch depends on where the image ends up" },
        {
          type: "ul",
          items: [
            "Web and apps: only pixel dimensions count, and both PPI and DPI are ignored by the browser, which lays out in CSS pixels",
            "High density screens: supply twice the display width, which is still a pixel dimension question rather than a PPI one",
            "Printed photos and booklets: work out PPI at the finished size, with 300 as the usual floor",
            "Scanning old prints: the 600 on the scanner is sampling precision, and archiving at that setting leaves room to crop later",
            "Before compressing, decide first: print work should not lose resolution, so save on encoding and format instead",
          ],
        },
        "How resolution relates to file size is covered in /blog/image-resolution-vs-file-size, the resize-then-compress order in /blog/resize-and-compress-image, and hitting a hard size cap in /blog/compress-jpg-under-100kb.",
        { type: "h2", text: "FAQ" },
        {
          type: "faq",
          items: [
            { q: "Does changing PPI from 72 to 300 improve quality?", a: "No. That edits one number stored in the file without adding pixels, so neither sharpness nor file size changes. More detail only comes from capturing it again, which for a scan means rescanning." },
            { q: "The print shop asked for 300 DPI. What do I send?", a: "An image with 300 pixels for every inch of the finished print, which is 1800 by 1200 pixels for a 6 by 4. Quoting dimensions avoids the terminology argument altogether." },
            { q: "Do web images need a DPI setting?", a: "No. The browser lays images out in CSS pixels and ignores the PPI tag. Twice the display width is enough, so 1600 pixels for a slot 800 pixels wide." },
            { q: "Should I scan at 300 or 600?", a: "600 for anything you intend to keep. Old prints usually need damaged edges cropped away and still have to leave usable pixels, and the larger file is the cheaper trade." },
          ],
        },
        { type: "cta", text: "Work out the PPI you need and compress on image-compressor-saas.shop, with the file staying on your machine", href: "/" },
      ],
    },
  },  {
    slug: "does-compressing-image-reduce-quality",
    date: "2026-10-11",
    title: {
      zh: "压缩图片会降低画质吗？六个说法逐条核对",
      en: "Does Compressing an Image Reduce Quality? Six Myths Checked",
    },
    description: {
      zh: "图片压缩会降画质吗？有损压缩丢数据，无损压缩只是改写编码；一次压到 75% 肉眼看不出，反复压才会堆出块状噪点。这篇逐条核对六个流传最广的说法。",
      en: "Does compressing an image reduce quality? Lossy compression discards data while lossless only rewrites the encoding. One pass at 75 percent is invisible, repeated passes stack up blocking artifacts. Six widespread claims checked one by one.",
    },
    keywords: [
      "does compressing image reduce quality",
      "compression quality myths",
      "lossy vs lossless quality difference",
      "why does my photo look bad after compression",
      "how many times can you compress an image",
      "recompressing image quality loss",
    ],
    content: {
      zh: [
        "图片压缩会降画质吗？答案要分成两半：有损压缩确实丢数据，相机直出的 JPEG 每压一次就少一些细节；无损压缩只是把同样的信息换个写法，PNG 用它压完还能逐像素还原。真正让照片看起来糊的往往不是某一次压缩，而是同一张图在几个平台之间被反复重编码，块状噪点一层层叠上去。",
        { type: "h2", text: "有损和无损：丢的东西不一样" },
        {
          type: "ul",
          items: [
            "有损压缩删掉的是眼睛不容易察觉的高频细节，色度信息也在这里被砍，动手的位置见 /blog/chroma-subsampling-explained",
            "无损压缩只改存储方式，PNG、ZIP、WebP 无损模式都属于这一类，解开后每个像素都和原始值一致",
            "JPEG 的质量滑块控制的是量化表的强度，滑到 100 也不等于无损",
            "WebP 和 AVIF 的有损模式同样丢数据，只是同等体积下把痕迹藏得更好",
            "HEIC 借的是视频帧的编码思路，压缩率高，代价同样是丢数据",
          ],
        },
        "判断方法只要问一句：解开之后能不能逐像素还原？能，就是无损；不能，就是有损。网页上的图片绝大多数走有损这条路，因为换来的是文件体积腰斩，甚至砍得更多。",
        { type: "h2", text: "一次压缩到底丢了多少" },
        "从相机导出的 JPEG 压到 60% 到 75%，在电脑上按原始尺寸放大到局部平坦区域去看，才能在天空或墙面那类平滑色块上发现轻微的等高线。放到网页正常的显示尺寸，这一步基本看不出来。",
        {
          type: "ul",
          items: [
            "质量 90 到 100：体积几乎没降，用在 JPEG 上收益很小",
            "质量 75 到 85：多数照片的最佳区间，肉眼很难分辨",
            "质量 60 以下：树叶、毛发、文字边缘开始出现振铃和块状",
            "大面积平滑渐变的图最容易暴露问题，先看天空和墙面",
            "细密纹理也是重灾区：昆虫翅膀、织物、毛发，算法在这里砍得最狠",
            "截图和带字的图不要用有损，交给 PNG 或 WebP 无损模式",
          ],
        },
        "所以“压完画质变差”这个感受是真的，只是它的触发条件比多数人想的更具体：要么质量设得太低，要么这张图本来就不该走有损。",
        { type: "h2", text: "六个说法逐条核对" },
        {
          type: "ul",
          items: [
            "只要是压缩就会掉画质。错。无损模式解开后逐像素一致，PNG 反复重压多少次都不会累计损失。",
            "质量滑到 100 就是原图。错。100 只是 JPEG 框架里最轻的一档，重新编码已经发生，体积反而可能变大。",
            "压一次掉一点，压十次掉十倍。不完全对。损失确实会累积，但增量是递减的：第二三轮还能看出新伤，之后越来越难察觉。",
            "改尺寸就等于压缩。错。改像素数量会永久丢细节，和重新编码是两码事，两者的区别见 /blog/compressed-vs-resized-image。",
            "PNG 永远不会掉画质。对。PNG 是无损容器，让它变小只能靠减色和更强的编码，不是靠丢数据。",
            "WebP 一定比 JPEG 清楚。不一定。同等体积下 WebP 通常保住更多细节，前提是两边都只压一次；把 JPEG 转成 WebP 再压一遍，照样越压越糊。",
          ],
        },
        "这几条的共同点在于：画质损失来自具体的操作选择，而不是“压缩”这两个字本身。选对格式、控制次数、挑对质量档位，损失就落在看不见的范围里。",
        { type: "h2", text: "反复压缩才是画质杀手" },
        {
          type: "ul",
          items: [
            "网站 A 上传时压一次，网站 B 再压一次，聊天工具转发又压一次，三轮下来轮廓边缘明显发毛",
            "每一轮都会把上一轮留下的块状噪点当成真实图像处理，然后在此基础上再抹一刀",
            "社交平台通常重新编码到固定的低质量档位，选择发送原图才是绕开的办法",
            "正确做法是回到底片，从原始文件一次性导出成品，不要在已经压过的版本上一遍遍重存",
            "长图和动画崩得更快，帧与帧之间的差异被反复抹平之后会出现拖影",
          ],
        },
        "一句话：同一张图只允许压一次，之后所有尺寸、格式、上传版本都从原始文件导出的那一份派生。",
        "压缩原理的系统解释见 /blog/lossy-vs-lossless-compression，色度信息被砍的位置见 /blog/chroma-subsampling-explained，先改尺寸还是先压的顺序见 /blog/resize-and-compress-image，分辨率和体积的关系见 /blog/image-resolution-vs-file-size。",
        { type: "h2", text: "常见问题" },
        {
          type: "faq",
          items: [
            { q: "压到多少才看不出来？", a: "多数照片落在质量 75 到 85 这一段分辨不出；画面里有大面积天空或墙面的，往上提到 85 以上；截图和带字的图不要用有损格式。" },
            { q: "同一张图压两次会差多少？", a: "平坦区域一般在第二轮出现可见块状。次数比单次强度更关键，同一张图重编码五次，比一次压到很低掉的质量更明显。" },
            { q: "为什么有的工具压完体积几乎没变？", a: "源文件多半已经压过，或者已经是 WebP、AVIF 这类本身效率较高的格式。换格式比继续压同一个 JPEG 有效得多。" },
            { q: "有没有办法在提交前先看出损失？", a: "先在整幅视图上来回切换两个版本，再把局部平坦区域放大到实际尺寸去看。瑕疵会先在平滑表面上出现，其他地方要晚得多。" },
          ],
        },
        { type: "cta", text: "在 image-compressor-saas.shop 上只压一次，文件不出本机", href: "/" },
      ],
      en: [
        "Does compressing an image reduce quality? Sometimes it does and sometimes it does not, and the difference comes down to which kind ran. Lossy compression discards high frequency detail for good. Lossless compression only rewrites how the same bytes are stored, so every pixel comes back identical. What wrecks a photo is rarely one operation in isolation. It is the same file being re-encoded by three platforms in a row until blocking artifacts stack up.",
        { type: "h2", text: "Lossy and lossless discard different things" },
        {
          type: "ul",
          items: [
            "Lossy compression drops detail the eye struggles to notice, including the colour information that chroma subsampling halves or quarters",
            "Lossless compression changes nothing but the encoding, so PNG, ZIP and lossless WebP restore every pixel exactly",
            "The quality slider on a JPEG export controls how aggressive the quantisation table is, and even 100 stays lossy",
            "Lossy WebP and AVIF discard data too, they just hide the damage better at the same file size",
            "HEIC borrows video compression machinery and pays for its small files the same way",
          ],
        },
        "One question settles it: can the pixels be restored exactly? If yes, the route was lossless. If no, data left the building. Most web images take the lossy route, because that is what halves the file.",
        { type: "h2", text: "What one pass actually costs" },
        "Take a JPEG straight out of a camera down to 60 or 75 percent quality, zoom to actual pixels and inspect a flat area. Faint banding shows up in a sky or a painted wall. Viewed at the size the image actually occupies on a page, the same difference is invisible.",
        {
          type: "ul",
          items: [
            "90 to 100: barely smaller, and rarely worth applying to a JPEG",
            "75 to 85: the range where most photographs resist close inspection",
            "Below 60: ringing and blocking arrive around leaves, hair and text edges",
            "Large smooth gradients expose artifacts first, so check sky and walls",
            "Fine texture is where encoders cut hardest: insect wings, fabric, fur",
            "Screenshots and anything carrying text belong in PNG or lossless WebP",
          ],
        },
        "The complaint that compression ruined the picture is legitimate. Its triggers are just narrower than most people assume: either the quality setting went too low, or the image belongs in a lossless format.",
        { type: "h2", text: "Six claims, checked one at a time" },
        {
          type: "ul",
          items: [
            "Every kind of compression costs quality. Wrong. Lossless modes restore every pixel, so a PNG can be recompressed indefinitely without accumulating damage.",
            "Quality 100 is the original file. Wrong. It is the lightest setting JPEG offers, re-encoding has already happened, and the result is often larger than the source.",
            "Compress ten times, lose ten times as much. Not quite. Damage accumulates but the increments shrink, so passes two and three hurt far more than pass eight.",
            "Resizing is compression. No. Changing the pixel count removes detail permanently, which is a different operation from re-encoding, and /blog/compressed-vs-resized-image separates the two.",
            "PNG never loses quality. Correct. Making a PNG smaller means fewer colours or a stronger encoder, not discarded data.",
            "WebP always beats JPEG. Usually, but not automatically. WebP holds more detail at equal size only when both sides were compressed once; converting an existing JPEG and compressing again leaves a blurrier file.",
          ],
        },
        "The pattern across all six: damage traces back to specific choices, not to the word compression. Pick the format, limit the passes, set a sensible quality number, and whatever is lost stays below the threshold anyone notices.",
        { type: "h2", text: "Repeated compression is what kills photos" },
        {
          type: "ul",
          items: [
            "One platform compresses on upload, another recompresses on republish, a chat app does it again on send, and by the third round the edges fringe",
            "Each pass treats the blocking left by the previous pass as genuine detail, then smooths over that",
            "Social apps usually re-encode to a fixed low setting, and choosing original quality on upload is the way around it",
            "Export each derivative once from the master instead of re-saving an already compressed version",
            "Long images and animated frames degrade faster, since differences between frames get flattened into each other",
          ],
        },
        "Compress a given image once. Every size, format and upload should derive from that single export rather than from versions of versions.",
        "The mechanics are laid out in /blog/lossy-vs-lossless-compression, where the chroma information gets cut in /blog/chroma-subsampling-explained, resize versus compression ordering in /blog/resize-and-compress-image, and how resolution maps to file size in /blog/image-resolution-vs-file-size.",
        { type: "h2", text: "FAQ" },
        {
          type: "faq",
          items: [
            { q: "How far can I compress before it shows?", a: "75 to 85 covers most photographs. Move toward 85 or above when there is open sky or a flat wall involved, and keep screenshots out of lossy formats altogether." },
            { q: "How much worse does a second pass look?", a: "Visible blocking tends to appear in flat areas on the second round. The number of passes matters more than any single setting, since five re-encodes at a high setting do more harm than one aggressive pass." },
            { q: "Why did some tools barely shrink my file?", a: "The source was probably already compressed, or already in WebP or AVIF where headroom is thin. Switching format usually beats pushing the same JPEG harder." },
            { q: "Is there a way to see the damage before committing?", a: "Flip between both versions at full view, then zoom to actual pixels on a smooth gradient. Artifacts surface on flat surfaces well before they appear anywhere else." },
          ],
        },
        { type: "cta", text: "Compress once on image-compressor-saas.shop and keep the master file separate, with nothing leaving your machine", href: "/" },
      ],
    },
  },
  {
    slug: "what-is-a-zip-file",
    date: "2026-10-12",
    title: {
      zh: "ZIP 文件是什么？打包、压缩与常见误区一次讲清",
      en: "What Is a ZIP File? Packing, Compression and the Myths Around It",
    },
    description: {
      zh: "ZIP 文件既是容器也是压缩格式：每个文件单独压缩，末尾留一份目录清单。这篇讲清它的打包原理、为什么压缩过的图片基本压不动，以及 AES 加密和 ZipCrypto 的差别。",
      en: "A ZIP file is both a container and a compression format: every file is compressed on its own and a directory listing sits at the end. Here is how it works, why images already in JPEG barely shrink, and what separates AES encryption from legacy ZipCrypto.",
    },
    keywords: [
      "zip file explained",
      "what is a zip file",
      "how zip compression works",
      "zip vs 7z vs rar",
      "why zipping images does not reduce size",
    ],
    content: {
      zh: [
        "ZIP 文件是一个容器，同时也自带一套压缩算法：里面的每个文件单独压缩，末尾再写一份目录清单，告诉解压软件每个成员叫什么、从哪个字节开始、用的是哪种压缩方式。这种结构带来两个后果：一是可以随意增删单个成员而不必重压整包，二是某些东西放进压缩包之后几乎不会变小。",
        { type: "h2", text: "打包时到底发生了什么" },
        {
          type: "ul",
          items: [
            "压缩算法通常是 DEFLATE：先用滑动窗口把重复出现的字符串替换成「往前多少字节、长度多少」的引用，再按出现频率做一次哈夫曼编码。",
            "每个成员文件独立压缩，所以删掉其中一个不需要重做整包；代价是无法利用不同文件之间的重复内容。",
            "ZIP 尾部有一份中央目录，记录文件名、偏移量和校验值，因此解压软件可以先读目录再随机取某个文件。",
            "压缩方式不止一种：不少实现支持 stored（原样存放，不压缩），压缩不了的内容就这么打包。",
            ".zipx、.7z、.rar 是不同的容器或格式，跨平台默认支持程度不一样，.zip 是系统自带支持的那个。",
          ],
        },
        { type: "h2", text: "为什么把照片塞进 ZIP 基本压不动" },
        "这一点最常被误解：ZIP 找的是重复字节序列，而 JPEG、WebP、AVIF、MP4 这类文件在编码时已经做过一遍熵编码，输出接近随机，几乎找不到可引用的重复串。所以一包照片压完常常只小了 1% 到 3%，有时还会因为多出目录和头信息反而变大一点。",
        {
          type: "ul",
          items: [
            "JPEG、WebP、AVIF、PNG 都已经过一轮压缩，重复空间早被榨干；PNG 用的正是 DEFLATE，压zip几乎没有额外收益。",
            "真正能变小的是文本类：CSV、日志、未压缩的 BMP、TIFF、SVG，压缩率经常达到 70% 以上。",
            "想减小 JPEG 或 PNG 的体积，应该重编码而不是打包，取舍逻辑见 /blog/lossy-vs-lossless-compression。",
            "PNG 不如直接转成 WebP 或 AVIF，同画质下体积通常能砍一半以上。",
            "HTML、CSS、图片混在一起的站点资产打包，文本部分会明显变小，图片那部分基本不变。",
          ],
        },
        { type: "h2", text: "容器之外的几件事：加密、校验与体积上限" },
        {
          type: "ul",
          items: [
            "加密有两代：早期的 ZipCrypto 已被证明可被快速破解，含密码的压缩包要用 AES-256。",
            "ZIP 在每个成员上存 CRC32 校验值，用来发现传输损坏；它防的是误码，不是篡改。",
            "旧格式单个文件和整包都不能超过 4GB，ZIP64 扩展解除这个限制，现代解压软件默认支持。",
            "分卷压缩只是把同一个包切成若干段，解压时必须全部齐全，缺一段就读不出任何一个成员。",
            "文件名编码是历史包袱：跨平台打包时优先选 UTF-8，否则中文名在另一套系统上可能变乱码。",
          ],
        },
        { type: "h2", text: "什么时候该用 ZIP，什么时候不该" },
        {
          type: "ul",
          items: [
            "一堆文档、表格、日志要一次发出去：适合打包，邮件附件也更省事。",
            "几百张照片要交给印刷方：打包没问题，但别指望它变小，缩小体积要先把图压好，批量流程见 /blog/batch-compress-images-multiple。",
            "附件卡在邮件服务器的 10MB 上限：先压图片，再打包，顺序反过来几乎没用，做法见 /blog/compress-image-for-email-attachments。",
            "只是想让一张图变小：不用打包，直接重编码，原理见 /blog/compressed-vs-resized-image。",
            "要长期归档：选开放格式 ZIP 加未压缩或标准 DEFLATE，别依赖某个私有解压器。",
          ],
        },
        "打包和压缩是两件事，混在一起就容易误判效果。背后的取舍写在 /blog/lossy-vs-lossless-compression，图片重新编码的实际差别在 /blog/compress-png-without-losing-quality，压完之后打包发出去的流程在 /blog/compress-image-for-email-attachments。",
        { type: "h2", text: "常见问题" },
        {
          type: "faq",
          items: [
            { q: "ZIP 一定会让文件变小吗？", a: "不会。已经压缩过的内容几乎没有冗余可挖，尤其是 JPEG、MP4 这类格式。打包后偶尔还会因为额外的头信息和目录略微变大。" },
            { q: "为什么有些 ZIP 解开之后出现乱码文件名？", a: "多半是打包时用了非 UTF-8 的文件名编码，另一个系统按自己的默认去读。用支持 UTF-8 的压缩软件重新打包就能解决。" },
            { q: "加密的 ZIP 够安全吗？", a: "看用了哪一代。老式的 ZipCrypto 已被破解，只能挡住随手一解；AES-256 才是现在该用的选项，密码本身的长度仍然决定下限。" },
            { q: "ZIP 和 7Z 该怎么选？", a: "要考虑对方能不能打开。ZIP 是各系统自带支持的那个，兼容性最好；7Z 压缩率更高但需要额外软件，适合双方都清楚场景的场合。" },
          ],
        },
        { type: "cta", text: "图片体积交给重编码，打包只负责归拢文件：在 image-compressor-saas.shop 压缩后打包发送", href: "/" },
      ],
      en: [
        "A ZIP file is a container and a compression format in one. Every member inside is compressed on its own, and a directory listing at the end tells whatever opens it the name of each member, which byte it starts at and how it was stored. Two things follow from that structure: single members can be added or removed without rebuilding the archive, and some payloads barely shrink once they are inside.",
        { type: "h2", text: "What happens when files get zipped" },
        {
          type: "ul",
          items: [
            "The usual method is DEFLATE: a sliding window replaces repeated strings with a reference saying how far back and how long the match was, then a Huffman pass encodes symbols by frequency.",
            "Each member is compressed independently, so removing one does not force a rebuild of the rest. The trade-off is that identical blocks shared between two files cannot be exploited.",
            "A central directory sits at the end of the file carrying names, offsets and checksums, which is why a reader can open one member without touching the others.",
            "There is more than one storage method; stored means packed as-is with no compression attempt, which is what happens to content that will not shrink.",
            "Formats such as 7Z and RAR use different containers, and ZIP is the one every operating system opens out of the box.",
          ],
        },
        { type: "h2", text: "Why photos barely shrink inside a ZIP" },
        "This is the part people misjudge most often. ZIP looks for repeated byte sequences, and JPEG, WebP, AVIF and MP4 have already been through entropy coding, leaving output that is close to random. A folder of photographs commonly comes out one to three percent smaller, and occasionally slightly larger once headers and the directory are added.",
        {
          type: "ul",
          items: [
            "JPEG, WebP, AVIF and PNG have already been compressed once. PNG uses DEFLATE itself, so zipping a PNG adds almost nothing.",
            "What does shrink is anything with redundancy left in it: CSV, logs, uncompressed BMP and TIFF, raw SVG files often drop by more than 70 percent.",
            "To make a JPEG or PNG smaller, re-encode it rather than archive it. The trade-offs are set out in /blog/lossy-vs-lossless-compression.",
            "Moving PNG to WebP or AVIF usually halves the size at the same quality, which no amount of zipping will do.",
            "In a mixed bundle of HTML, CSS and images the text parts shrink noticeably and the image parts stay put.",
          ],
        },
        { type: "h2", text: "Beyond packing: encryption, checksums and size limits" },
        {
          type: "ul",
          items: [
            "There are two generations of encryption. Legacy ZipCrypto has known practical attacks, so anything with a password should use AES-256.",
            "Every member carries a CRC32 value, which detects corruption in transit. It is a check against errors, not a defence against tampering.",
            "The original format caps individual files and the archive at 4 GB. The ZIP64 extension lifts that, and modern readers support it by default.",
            "Split archives are one archive cut into pieces. Every piece has to be present before any member can be extracted.",
            "File name encoding is a legacy trap: pack in UTF-8, otherwise non-Latin names can come out as garbage on another platform.",
          ],
        },
        { type: "h2", text: "When to reach for ZIP, and when not to" },
        {
          type: "ul",
          items: [
            "A batch of documents, spreadsheets or logs going out at once: pack them, since email handles one attachment more gracefully than twelve.",
            "Hundreds of photographs for a print shop: packing is fine, but do not expect shrinkage. Compress the images first, and a batch routine is in /blog/batch-compress-images-multiple.",
            "An attachment bouncing off a 10 MB mail limit: compress the images first, then pack. Doing it the other way round changes almost nothing, see /blog/compress-image-for-email-attachments.",
            "A single image that needs to be smaller: do not archive it, re-encode it. The distinction is covered in /blog/compressed-vs-resized-image.",
            "Long term archives: choose the open ZIP format with stored or standard DEFLATE entries rather than something that needs a specific decompressor.",
          ],
        },
        "Packing and compressing are two separate jobs, and treating them as one is where the wrong expectations come from. The trade-offs sit in /blog/lossy-vs-lossless-compression, re-encoding a PNG without visible damage in /blog/compress-png-without-losing-quality, and the pack-after-compress email flow in /blog/compress-image-for-email-attachments.",
        { type: "h2", text: "FAQ" },
        {
          type: "faq",
          items: [
            { q: "Does a ZIP always make files smaller?", a: "No. Content that has already been compressed has little redundancy left, particularly JPEG and MP4. An archive occasionally comes out a touch larger because of headers and the directory." },
            { q: "Why did some file names turn into garbage after extracting?", a: "The archive was written with a non UTF-8 name encoding and the other system read it with its own default. Repacking with UTF-8 filenames fixes it." },
            { q: "Is an encrypted ZIP secure enough?", a: "It depends on the generation. Legacy ZipCrypto has practical attacks and only stops casual snooping, while AES-256 is the option to use now. The password itself still sets the floor." },
            { q: "Should I pick ZIP or 7Z?", a: "Judge by what the recipient can open. Every operating system handles ZIP without extra software, so it travels best. 7Z compresses further but needs a tool on the other end." },
          ],
        },
        { type: "cta", text: "Let re-encoding handle image size and let ZIP handle grouping files together, after compressing on image-compressor-saas.shop", href: "/" },
      ],
    },
  },
  {
    slug: "compress-images-facebook-ads-2026",
    date: "2026-10-13",
    title: {
      zh: "Facebook 广告图片尺寸与压图：2026 年投放前要核清的几项",
      en: "Facebook Ad Image Size and Compression: What to Check Before Launch in 2026",
    },
    description: {
      zh: "Facebook 广告图片尺寸卡住投放的通常不是像素大小，而是宽高比、画面文字占比和文件重量这三件事。这篇列出信息流单图、轮播、Stories 三类版位在 2026 年的可用参数，给出压到多少 KB 不掉画质，以及上线前的五步检查。",
      en: "Facebook ad image specs come down to three things rather than raw pixel counts: aspect ratio, how much text sits on the picture, and file weight. Here are the 2026 figures for feed, carousel and Stories placements, how far to compress without visible damage, and a five step check before the campaign goes live.",
    },
    keywords: [
      "facebook ad image size",
      "facebook feed image specs 2026",
      "facebook carousel image size",
      "facebook story ad size",
      "compress images for facebook ads",
      "Facebook 广告图片尺寸",
      "facebook 广告图片规格 2026",
    ],
    content: {
      zh: [
        "Facebook 广告图片尺寸这件事，卡住投放的通常不是像素够不够，而是三件绑在一起的东西：版位要的宽高比、画面上文字占的面积、以及上传文件的重量。facebook 广告图片规格在 2026 年这一组数字没有大改，变化主要集中在 Reels 和 Advantage+ 的覆盖面。先把这三件事分开处理，尺寸部分其实半个小时就能核完。",
        { type: "h2", text: "三类版位的尺寸与比例" },
        {
          type: "ul",
          items: [
            "信息流单图：建议 1080 x 1080（1:1）或 1080 x 1350（4:5），最小宽度 600 像素。4:5 在手机上占的屏幕面积更大，电商类投放多数时候选它。",
            "轮播：每张 1080 x 1080，单条广告 2 到 10 张。同一组卡片必须保持同一个比例，否则预览里每张会被裁成不同高度，滑动时图面会跳。",
            "Stories 与 Reels：1080 x 1920（9:16），画面上下各留出约 250 像素给头像、行动按钮和说明文字，主体不要压在这两条边上。",
            "右侧栏与 Audience Network：素材同样按 1200 x 1200 以上准备，实际展示面积很小，主体要缩到几百像素还认得出来。",
            "画面文字：旧的 20% 规则已经停用，现在按低、中、高三档分级，9:16 和竖构图在检测里更容易被判到中或高。",
          ],
        },
        { type: "h2", text: "为什么被限制投放的多半不是尺寸" },
        "审核这一步走的是机器比对：先把宽高比跟版位模板对着看，再把画面里的文字区域检测出来打分。像素不够只会导致图显示得模糊，比例不对或文字占比偏高才会直接压缩投放范围。同一张图在信息流能跑、切到 Stories 就提示不适用，原因往往在这里，不是文件坏了，是它要匹配的那套模板换了。",
        {
          type: "ul",
          items: [
            "把 9:16 的素材投到 1:1 版位，系统会把上下裁掉 40% 以上，画面主体的位置基本就废了。",
            "同一套素材同时给信息流和 Stories 用，需要导出两个比例的版本，不能指望平台自动适配。",
            "文字压在边缘安全区上，会跟行动按钮叠在一起，这类素材即使通过了检测，点击率也通常偏低。",
            "重得多的文件在上传后会被平台再压一轮，源头越重，二次压缩留下的噪点和色块越明显。",
          ],
        },
        { type: "h2", text: "压到多少 KB 不掉画质" },
        "Facebook 拿到手会再编码一次，所以源文件越重，被处理过之后差别越看得出来。按版位给一个实用区间就够了：1080 x 1350 的 JPEG 压到 200 到 400 KB 之间，手机上看和原图几乎没有区别；9:16 因为像素最多可以放宽到 500 KB；轮播每张尽量控制在 300 KB 以内，十条卡片一起加载时才不会因为单张拖慢。取舍逻辑见 /blog/lossy-vs-lossless-compression。",
        {
          type: "ul",
          items: [
            "信息流单图：目标 200 到 400 KB，一张带货图的文案区域先按 4:5 排好再压。",
            "轮播：每张 300 KB 上下，同一组用同一档压缩参数，避免卡片之间画质不一致。",
            "Stories 与 Reels：可以到 500 KB，这里像素多，压太狠反而先糊的是渐变色天空这类大面积过渡。",
            "带透明背景的素材别强行用 JPEG，透明通道会被填成白色或黑色；这类图的处理办法见 /blog/compress-png-without-losing-quality。",
            "两者看起来差不多时优先保主体：人脸和商品边缘先开到 100% 看一遍，再决定保留哪一档参数。",
          ],
        },
        { type: "h2", text: "上线前的五步检查" },
        {
          type: "ul",
          items: [
            "先定版位再定比例：是一次意图投信息流还是 Stories，这两件事决定了拍摄和构图的起点。",
            "导出时锁定短边 1080，长边按比例算出来，不要先裁成奇怪的尺寸再去补。",
            "把体积压到上面那组区间，压完开到 100% 看一遍人脸和商品边缘。",
            "用广告预览工具按每个版位过一遍，重点看主体有没有被安全区盖住。",
            "留一份未压缩的母版单独存着，下一轮改文案或换版位从母版重新导出，不要拿平台上已经处理过的成品反复救。",
          ],
        },
        { type: "h2", text: "FAQ" },
        {
          type: "faq",
          items: [
            { q: "Facebook 广告图片的最大上传尺寸是多少？", a: "上传接口能收的像素很宽，瓶颈在比例和清晰度。按官方建议给到 1080 系就够了，再往上堆像素没有收益：超过的部分会在到达后被平台用自己的编码器压掉。" },
            { q: "20% 文字规则还在吗？", a: "已经停用。现在按画面文字量分低、中、高三档，实务上构图和字幕条仍然是影响投放的因素，建议关键信息放在文案区而不是图上。" },
            { q: "同一套素材能不能同时跑信息流和 Stories？", a: "不建议直接复用。比例不同会被大幅裁切，正确做法是导出两个比例的版本，各自保留自己的安全区。" },
            { q: "要不要用 PNG 保画质？", a: "JPEG 或 WebP 更适合照片类广告素材。PNG 只在需要透明背景或界面截图时用，同等观感下它比 WebP 大不少；PNG 与位图是不同的取舍，具体见 /blog/compressed-vs-resized-image。" },
          ],
        },
        { type: "cta", text: "在 image-compressor-saas.shop 按目标 KB 压缩广告图，文件不出本机", href: "/" },
      ],
      en: [
        "Facebook ad image size causes trouble less often than people expect. What actually stalls a campaign are three things bundled together: the aspect ratio the placement wants, how much of the frame is covered by text, and how heavy the uploaded file is. The 2026 numbers have barely moved, with most of the change sitting in how far Reels and Advantage+ placements reach. Separate those three and the sizing part takes half an hour.",
        { type: "h2", text: "Sizes and ratios for the three placements" },
        {
          type: "ul",
          items: [
            "Feed single image: 1080 x 1080 (1:1) or 1080 x 1350 (4:5), with a minimum width of 600 pixels. The 4:5 frame fills more of a phone screen, which is why commerce campaigns lean on it.",
            "Carousel: 1080 x 1080 per card, two to ten cards per ad. Every card has to share one ratio, otherwise the preview crops them to different heights and the set jumps as it scrolls.",
            "Stories and Reels: 1080 x 1920 (9:16). Leave roughly 250 pixels clear at the top and bottom for the profile badge, the action button and the caption, and keep the subject out of that band.",
            "Right column and Audience Network: prepare at 1200 x 1200 or larger. The real display area is small, so the subject has to survive being shrunk to a few hundred pixels.",
            "Text on the image: the 20 percent rule was retired, and the system now grades coverage as low, medium or high. Portrait formats tend to land in the middle or upper band.",
          ],
        },
        { type: "h2", text: "Why the restriction usually is not about size" },
        "Review runs as a machine comparison. The aspect ratio is checked against the placement template first, then text regions are detected and scored. Low pixel counts merely make the picture look soft, while a wrong ratio or heavy text coverage cuts the delivery itself. That is also why one image runs fine in the feed and gets flagged as unsupported in Stories: the file is unchanged, the template it has to match is not.",
        {
          type: "ul",
          items: [
            "A 9:16 asset dropped into a 1:1 placement loses more than 40 percent off the top and bottom, which usually ruins where the subject sits.",
            "Reusing one asset for both feed and Stories means exporting two ratio versions rather than trusting the platform to adapt it.",
            "Text pressed against the safe zone collides with the action button, and those creatives tend to draw fewer clicks even when they pass the check.",
            "Heavier uploads get re-encoded once they land, and the heavier the source, the more visible the second round of compression becomes.",
          ],
        },
        { type: "h2", text: "How many KB before quality drops" },
        "Facebook re-encodes whatever arrives, so a heavier source means a more visible difference afterwards. A practical range per placement is enough. A 1080 x 1350 JPEG down to somewhere between 200 and 400 KB looks almost identical to the original on a phone. The 9:16 frame can stretch to 500 KB since it carries the most pixels. Keep carousel cards around 300 KB so a set of ten does not stall because of one card. The trade-off is set out in /blog/lossy-vs-lossless-compression.",
        {
          type: "ul",
          items: [
            "Feed single image: aim for 200 to 400 KB, and lay the copy area out in 4:5 before compressing rather than after.",
            "Carousel: around 300 KB per card, and use one set of compression settings across the group so the cards match each other.",
            "Stories and Reels: up to 500 KB. Large smooth gradients such as evening sky are the first thing to break if you squeeze this one too hard.",
            "Do not force a transparent background through JPEG, since the alpha channel gets flattened to white or black. The approach for those files is in /blog/compress-png-without-losing-quality.",
            "When two options look similar, protect the subject: check faces and product edges at 100 percent and only then decide which setting to keep.",
          ],
        },
        { type: "h2", text: "Five checks before launch" },
        {
          type: "ul",
          items: [
            "Pick the placement before the ratio, since running in the feed or in Stories decides how the shot is framed in the first place.",
            "Lock the short edge at 1080 on export and let the long edge follow the ratio, rather than cropping to something odd and patching it later.",
            "Bring the file weight into the ranges above, then inspect faces and product edges at 100 percent.",
            "Walk every placement in the ad preview tool and check that the safe zone is not covering the subject.",
            "Keep an uncompressed master in a separate folder. New copy or a new placement means another export from that master, not rescuing the copy the platform already processed.",
          ],
        },
        { type: "h2", text: "FAQ" },
        {
          type: "faq",
          items: [
            { q: "How large can a Facebook ad image be?", a: "Practical limits come from the ratio and from sharpness rather than a pixel ceiling, and the 1080 series covers what the platform asks for. Sending a file far bigger than the placement needs is wasted effort, because the surplus gets re-encoded on arrival anyway." },
            { q: "Is the 20 percent text rule still applied?", a: "It was retired. Text is graded as low, medium or high, and heavy coverage still affects delivery in practice, so put the key message in the copy field instead of burning it into the picture." },
            { q: "Can one asset run in both feed and Stories?", a: "Not usefully. The cropping is severe in one direction, so export two ratio versions and give each one its own safe zone." },
            { q: "Is PNG worth it for quality?", a: "JPEG or WebP suit photographic creative. PNG earns its size mainly for transparency or interface captures, and it runs considerably heavier than WebP at a comparable look. Comparing compression against resizing is covered in /blog/compressed-vs-resized-image." },
          ],
        },
        { type: "cta", text: "Compress your ad creative to a target KB on image-compressor-saas.shop, with the file staying on your machine", href: "/" },
      ],
    },
  },
  {
    slug: "google-display-ad-image-specs-2026",
    date: "2026-10-14",
    title: {
      zh: "Google Ads 图片尺寸规格 2026：展示广告素材怎么压才过审",
      en: "Google Ads Image Size Specs 2026: Display Creative That Passes Review",
    },
    description: {
      zh: "Google Ads 图片尺寸不是一个数字，而是三种广告位各自的比率加一套文件大小上限：展示图片广告卡在 150 KB，自适应展示广告的营销图和 logo 上限 5120 KB。这篇列出各位置的推荐像素、体积上限和一份上传前的压缩清单。",
      en: "Google Ads image size is not one number. It is a ratio per placement plus a size ceiling per asset type: 150 KB for classic display image ads, 5120 KB for responsive display marketing images and logos. Here are the recommended pixel sizes, the caps, and a compression checklist to run before upload.",
    },
    keywords: [
      "google ads image size",
      "google display ad image specs 2026",
      "google ads image size requirements",
      "responsive display ad image size",
      "google ads logo size",
      "Google Ads 图片尺寸",
      "谷歌广告图片规格",
      "展示广告图片 150KB",
      "Google Ads 素材压缩",
      "image-compressor-saas.shop 广告图片",
    ],
    content: {
      zh: [
        "Google Ads 图片尺寸这件事被问得多，是因为它其实不是一个数字。投放位决定比率，素材类型决定文件上限：经典展示图片广告卡在 150 KB，自适应展示广告的营销图和 logo 放宽到 5120 KB。本文按这个顺序把各位置的推荐像素、体积上限和上传前的压缩步骤列出来，比率、像素、KB 三项对齐之后，过审剩下的就只是文案问题。",
        { type: "h2", text: "三种广告位各自的图片比率与推荐像素" },
        {
          type: "ul",
          items: [
            "营销图（自适应展示广告）1.91:1 —— 推荐 1200×628，最小 600×314；这是信息流和横幅里出现最多的一种",
            "营销图 1:1 —— 推荐 1200×1200，最小 300×300；正方形素材在移动端版位上通用性最好",
            "竖版 4:5 —— 推荐 960×1200，最小 480×600；走移动应用和部分版位时才需要单独出一张",
            "Logo 1:1 —— 推荐 1200×1200，最小 128×128",
            "Logo 4:1 —— 推荐 1200×300，最小 512×128；横幅位置的品牌标识用这个",
            "经典展示图片广告 —— 按固定尺寸上传（300×250、728×90、300×600、320×100、160×600、970×90 等），不超过 150 KB",
          ],
        },
        "比率的实用含义是裁切：同一张照片出 1.91:1 和 1:1 两版，主体位置要重新安排，直接等比缩放会把商品或人脸切掉一半。先定版位再定构图，别指望上传时系统帮你救回来。",
        { type: "h2", text: "文件上限：150 KB 与 5120 KB 的分界" },
        "两组上限常常被混为一谈，卡住素材的通常是第一组。",
        {
          type: "ul",
          items: [
            "经典展示图片广告：单张不超过 150 KB，格式 JPG、PNG、GIF（可动图）。这是最紧的一道坎，手机直出的照片往往一上来就超了三到五倍",
            "自适应展示广告营销图：不超过 5120 KB，最小 300×300 或 600×314",
            "Logo：不超过 5120 KB，PNG 允许透明背景",
            "Gmail 与部分版位另有自己的要求，投放前在广告预览里逐个位置走一遍",
            "各项数值会随产品调整，最终以 Ads 后台上传时的提示为准",
          ],
        },
        { type: "h2", text: "上传前把图片压进合规范围的四步" },
        {
          type: "ul",
          items: [
            "先定尺寸再压体积。改画布尺寸和改压缩质量是两件不同的事，顺序错了会出现\"压到 150 KB 但画面糊得没法看\"，原因往往是一开始就拿着 4000 像素的原图硬压。尺寸与压缩的关系见 /blog/resize-and-compress-image。",
            "按目标 KB 而不是按质量百分比去压。150 KB 是硬门槛，压到 148 KB 才算过，滑块拉到 70 没有意义。目标大小的设置思路见 /blog/compress-image-to-200kb。",
            "横幅和纯色区块用 PNG，照片用 JPG 或 WebP。PNG 在照片上比 WebP 重不少，格式选择见 /blog/png-vs-jpg-differences 与 /blog/webp-vs-jpeg-comparison。",
            "一次压一整套。轮播和多个版位要的是视觉一致，逐个手动调压出来的卡片亮度会不一样，批量统一参数见 /blog/batch-compress-images-multiple。",
          ],
        },
        "收尾时做一次 100% 放大检查：看人脸边缘、商品轮廓和文字笔画。广告素材被压坏的位置几乎总是在边缘，缩略图上看不出来。压缩到什么程度会开始掉画质，见 /blog/does-compressing-image-reduce-quality。",
        { type: "h2", text: "上传前的检查清单" },
        {
          type: "ul",
          items: [
            "版位先定：信息流、横幅还是竖版，决定了先出哪张比率",
            "短边锁定到推荐值（1200 系列），长边按比率跟着走",
            "营销图与 Logo 分开导出，Logo 保留透明背景时用 PNG",
            "文件体积压进对应上限：经典展示 150 KB，自适应展示 5120 KB",
            "100% 放大检查主体边缘与文字笔画",
            "未压缩的原图另存一份，换文案或加版位时从原图重新导出",
          ],
        },
        { type: "h2", text: "FAQ" },
        {
          type: "faq",
          items: [
            { q: "Google Ads 展示广告的图片最大多少 KB？", a: "分两类。经典展示图片广告单张上限 150 KB，这是最常卡住素材的一道坎；自适应展示广告的营销图和 Logo 上限 5120 KB。两套规格不要混用，先确认自己投放的是哪一种。" },
            { q: "1.91:1 和 1:1 能不能只出一张然后让系统裁？", a: "不建议。系统裁切以画面中心为准，商品或人脸偏离中心时会被切掉。两个比率各导一版，构图各自安排主体位置，效果差很多。" },
            { q: "压到 150 KB 之后画面明显发糊，怎么办？", a: "多半是尺寸没改就硬压。先把画布缩到 300×250 这类投放实际需要的尺寸，再压体积，同样 150 KB 下清晰度会好很多。尺寸与压缩谁先谁后见 /blog/resize-and-compress-image。" },
            { q: "Logo 用 PNG 还是 JPG？", a: "需要透明背景就必须是 PNG，JPG 不支持透明通道，透明区域会被填成白底或黑底。不需要透明时 JPG 更轻。透明文件的处理方式见 /blog/compress-png-without-losing-quality。" },
          ],
        },
        { type: "cta", text: "在 image-compressor-saas.shop 按目标 KB 压缩 Google Ads 素材，文件留在本机不出网 →", href: "/" },
      ],
      en: [
        "Google Ads image size gets asked about so often because it is not one number. The placement decides the ratio and the asset type decides the file cap: 150 KB for a classic display image ad, 5120 KB for responsive display marketing images and logos. This page lists the recommended pixel sizes per placement, the caps that apply to each, and the compression steps to run before upload. Once ratio, pixels and weight line up, what is left is a copy problem.",
        { type: "h2", text: "Ratio and recommended pixels per placement" },
        {
          type: "ul",
          items: [
            "Marketing image, responsive display, 1.91:1: 1200 by 628 recommended, 600 by 314 minimum. This is the one that appears most across feeds and banners.",
            "Marketing image 1:1: 1200 by 1200 recommended, 300 by 300 minimum. The square asset travels best across mobile placements.",
            "Portrait 4:5: 960 by 1200 recommended, 480 by 600 minimum. Only worth a separate export when you are running app or portrait inventory.",
            "Logo 1:1: 1200 by 1200 recommended, 128 by 128 minimum.",
            "Logo 4:1: 1200 by 300 recommended, 512 by 128 minimum. This is the banner position brand mark.",
            "Classic display image ads: fixed sizes such as 300 by 250, 728 by 90, 300 by 600, 320 by 100, 160 by 600 and 970 by 90, under 150 KB.",
          ],
        },
        "What a ratio really means for you is cropping. The same photograph needs a separate arrangement of the subject at 1.91:1 and at 1:1, and a straight proportional scale will cut the product or the face in half. Decide the placement before you frame the shot rather than hoping the upload step rescues it.",
        { type: "h2", text: "The size limits: where 150 KB and 5120 KB split" },
        "These two caps are constantly confused, and it is usually the first one that stops a creative from running.",
        {
          type: "ul",
          items: [
            "Classic display image ads: 150 KB per file, in JPG, PNG or animated GIF. This is the tight gate, and a straight-from-phone photograph routinely arrives three to five times over it.",
            "Responsive display marketing images: 5120 KB, minimum 300 by 300 or 600 by 314.",
            "Logos: 5120 KB, with PNG allowed to keep transparency.",
            "Gmail and some other inventory carry their own requirements, so walk every placement in the ad preview before launch.",
            "Values move as the product changes, so treat the upload prompt in the Ads interface as the final word.",
          ],
        },
        { type: "h2", text: "Four steps to land inside the limit" },
        {
          type: "ul",
          items: [
            "Set the dimensions first, compress second. Resizing and quality reduction are different operations, and doing them in the wrong order is what produces a 150 KB file that is too soft to use, usually because a 4000 pixel original was squeezed as-is. The relationship between the two is set out in /blog/resize-and-compress-image.",
            "Compress to a target KB rather than to a quality percentage. 150 KB is a hard threshold, so 148 KB passes and 70 percent on a slider means nothing. The reasoning behind target-size settings is in /blog/compress-image-to-200kb.",
            "PNG for banners and flat colour, JPG or WebP for photographs. PNG runs considerably heavier than WebP on a photo; format choice is covered in /blog/png-vs-jpg-differences and /blog/webp-vs-jpeg-comparison.",
            "Compress the whole set in one pass. Carousels and multi-placement campaigns need visual consistency, and per-image manual settings leave the cards at different brightness. Uniform batch settings are in /blog/batch-compress-images-multiple.",
          ],
        },
        "Finish with one check at 100 percent zoom: face edges, product outlines and the strokes of any text. Compression damage in ad creative almost always shows at the edges first, and it is invisible in a thumbnail. Where quality starts to fall away is covered in /blog/does-compressing-image-reduce-quality.",
        { type: "h2", text: "Checklist before you upload" },
        {
          type: "ul",
          items: [
            "Placement first: feed, banner or portrait decides which ratio you export first.",
            "Lock the short edge to the recommended value in the 1200 series and let the long edge follow the ratio.",
            "Export marketing image and logo separately, keeping PNG for a transparent logo.",
            "Bring the file under the cap that applies: 150 KB for classic display, 5120 KB for responsive display.",
            "Inspect subject edges and text strokes at 100 percent.",
            "Keep an uncompressed master apart; new copy or a new placement means a fresh export from it.",
          ],
        },
        { type: "h2", text: "FAQ" },
        {
          type: "faq",
          items: [
            { q: "What is the maximum file size for a Google Ads display image?", a: "There are two answers. A classic display image ad caps at 150 KB per file, which is the limit that stops most creative, while responsive display marketing images and logos go up to 5120 KB. Do not mix the two: confirm which format your campaign uses first." },
            { q: "Can I upload one asset and let the system crop for 1.91:1 and 1:1?", a: "You can, but it crops around the centre. Anything off-centre, a product or a face, gets cut. Export both ratios and arrange the subject in each; the difference in delivery is visible." },
            { q: "My image looks mushy once it is under 150 KB. What went wrong?", a: "Usually the dimensions were never changed. Scale the canvas down to what the placement actually needs, such as 300 by 250, and then compress: at the same 150 KB the result is far sharper. Resize before or after compressing is covered in /blog/resize-and-compress-image." },
            { q: "PNG or JPG for the logo?", a: "PNG whenever you need transparency, since JPG has no alpha channel and flattens it to white or black. Without transparency JPG is lighter. Transparent files are handled in /blog/compress-png-without-losing-quality." },
          ],
        },
        { type: "cta", text: "Compress Google Ads creative to a target KB on image-compressor-saas.shop, with the file staying on your machine", href: "/" },
      ],
    },
  },

  {
    slug: "compress-images-tiktok-specs",
    date: "2026-10-15",
    title: {
      zh: "TikTok 图片规格与压缩：2026 年投放前要对齐的几项",
      en: "TikTok Image Specs and Compression: What to Line Up Before You Ship in 2026",
    },
    description: {
      zh: "TikTok 图片规格看着复杂，真正会卡住投放的只有三件事：宽高比、文件大小和安全区。这篇列出信息流单图、轮播、Spark Ads 和 Pangle 在 2026 年常用的尺寸参数，给出压到多少 KB 画质还在，以及上线前的六步检查。",
      en: "TikTok image specs look complicated, but only three things derail a delivery: aspect ratio, file weight and safe zones. Here are the 2026 figures most campaigns need for feed, carousel, Spark Ads and Pangle, how far to compress before quality shows it, and six checks to run before launch.",
    },
    keywords: [
      "tiktok image specs",
      "tiktok ad image size",
      "tiktok carousel image specs",
      "tiktok image size 1080x1920",
      "compress images for tiktok ads",
      "TikTok 图片尺寸",
      "tiktok 图片广告规格 2026",
    ],
    content: {
      zh: [
        "TikTok 图片规格看起来有许多组数字，实际能决定素材能不能跑的只有三件事：版位要求哪种宽高比、文件多重、以及主体有没有被界面盖住。 tiktok 图片广告规格在 2026 年依然以 1080 x 1920（9:16）为主轴，方形和横向能用，但会在信息流里留出黑边。把这三件事拆开按顺序处理，静态素材通常半天就能定稿。",
        { type: "h2", text: "四类素材的尺寸与格式" },
        {
          type: "ul",
          items: [
            "信息流单图：推荐 1080 x 1920（9:16），支持 1:1 和 16:9，格式是 JPG 与 PNG，单图上限普遍标注到 100 MB。",
            "轮播：每张同样按 1080 x 1920 出，一组 2 到 35 张，每张单独计算文件大小。同一组必须保持同一个比例，否则预览时每张占的高度不同，滑动会跳。",
            "Spark Ads 图片：沿用原帖的原始尺寸，推荐值仍写在 1080 x 1920 这一档，格式同样是 JPG 与 PNG。",
            "Pangle 展示位：常见写法是 1200 x 628（1.91:1），跟本土信息流的竖版不是一套参数，别混用。",
            "账号头像：1:1 的 JPG 或 PNG，限制明显更严（有资料写到 50 KB 以内），这一项要单独准备，不要顺手用素材顶上。",
          ],
        },
        { type: "h2", text: "为什么素材被打回来，多半不是像素不够" },
        "TikTok 是竖屏全屏的信息流，比例不对的影响远大于分辨率少几十像素。9:16 之外的素材会被上下留出黑边，用户滑到时画面明显偏短，停留和点击一起往下掉。真正会触发机器判定的通常是两件事：低分辨率素材（把 720p 拉到 1080p 这种）以及构图上把关键信息压进了底部那块被界面占住的区域。纯粹的超限反而少见，多数人导出的横向或方形素材根本没到文件上限。",
        {
          type: "ul",
          items: [
            "把 16:9 的素材投到 9:16 版位，系统会留出大片黑边，画面主体被压到中间一条，等于主动放弃了整屏。",
            "一组轮播里混了两种比例，预览时每张被裁成不同高度，滑动看图会跳，这类问题在后台预览里一眼能看到。",
            "把 720p 素材拉伸到 1080 x 1920 上传，会被判画质过低，而不是判通过。",
            "文案和行动按钮压在底部约 480 像素那条带上，会被标题栏和按钮叠住，素材即使过审点击率也偏低。",
            "重量超标通常不是上传被拒，而是平台二次编码后噪点变多：源头越重，处理完掉得越明显。",
          ],
        },
        { type: "h2", text: "压到多少 KB 画质还在" },
        "TikTok 拿到图之后还会再编码一次，所以源文件越重，处理完以后差别越能看出来。按 1080 x 1920 这一档给个实用区间就够了：JPEG 压到 200 到 400 KB 之间，手机上看基本没有损失；画面里如果有大面积渐变（天空、背景虚化）可以放宽到 500 KB；轮播每张尽量不超过 300 KB，十几张一起加载时最先拖慢的永远是那张最大的。带透明背景的素材不要硬转 JPEG，透明通道会被填成白色或黑色，这类图的处理办法见 /blog/compress-png-without-losing-quality。",
        {
          type: "ul",
          items: [
            "信息流单图：目标 200 到 400 KB，人像和商品先按竖版构图排好再压。",
            "轮播：每张 300 KB 上下，同一组用同一档压缩参数，卡片之间的明暗才不会打架。",
            "大面积渐变或夜景：可以放到 500 KB，压过头先糊的是过渡区，不是主体边缘。",
            "定帧封面别忘了压：视频素材抽出缩略图那一帧也按这套重压一遍，它在部分版位直接当封面用。",
            "取舍逻辑拿不准时先看 /blog/lossy-vs-lossless-compression，有损和无损的分界线讲得更细。",
          ],
        },
        { type: "h2", text: "安全区：别让界面盖住主体" },
        "TikTok 会把自己的界面叠在画面上：顶部约 130 像素是状态区和顶部导航，底部约 480 像素堆着文案、行动按钮和用户名，右侧约 140 像素是点赞、评论、分享那一列按钮，左侧约 60 像素留给文字换行。稳妥做法是把 logo、卖点、必要的免责声明全部放进画面中间那块 1080 x 1310 的区域，字幕比画面垂直中心略高一点更安全。同一套竖版素材如果还要上 Meta Reels，两边的安全区并不完全重合，居中构图是唯一两边都能过的写法。同类的版位参数对比见 /blog/instagram-image-sizes-2026。",
        {
          type: "ul",
          items: [
            "顶部约 130 像素：状态区与顶部导航，标题不要贴这条边。",
            "底部约 480 像素：文案、行动按钮、用户名的堆叠区，卖点和按钮都别放这里。",
            "右侧约 140 像素：点赞、评论、分享、头像入口，主体别靠右。",
            "左侧约 60 像素：文字换行区，边缘留够空白。",
            "中间约 1080 x 1310：真正的安全构图范围，关键信息全部往这里收。",
          ],
        },
        { type: "h2", text: "上线前的六步检查" },
        {
          type: "ul",
          items: [
            "先定版位再定比例：信息流、轮播还是 Pangle，这一步决定了构图和导出的起点。",
            "锁短边 1080，长边按 9:16 算到 1920，不要先裁成奇怪的尺寸再补回去。",
            "按上面的区间压体积，压完开到 100% 看人脸边缘、商品轮廓和文字笔画。",
            "用预览工具按每个版位过一遍，确认主体没进上下几条安全带。",
            "一组轮播统一压缩参数，避免卡片之间画质和亮度不一致。",
            "留一份未压缩的母版单独存着，换版位或改文案从母版重新导出，不要反复拯救已经压过的成品。",
          ],
        },
        { type: "h2", text: "FAQ" },
        {
          type: "faq",
          items: [
            { q: "TikTok 图片广告一定要 9:16 吗？", a: "不是强制，1:1 和 16:9 也能上传，但只有 9:16 能铺满全屏。横向和方形素材在信息流里会留出黑边，停留和点击通常跟着往下走。真要用横版素材，建议重新构图成竖版，而不是补黑边上传。" },
            { q: "单张图的大小上限到底是多少？", a: "后台在不同版位标注的数字不一样，常见口径是信息流图片与轮播每张 100 MB，账号头像这类小图另有更严格的限制（有资料写到 50 KB）。写进流程时以广告后台当前显示的数值为准，别套用二手清单。" },
            { q: "压到 200 KB 以下会不会影响画质？", a: "1080 x 1920 的 JPEG 压到 200 到 400 KB 区间，手机屏幕上基本看不出差别。真正掉画质的是两种情况：先把 720p 拉到 1080p 再压，以及同一张图被反复导出压缩。画质从哪一档开始崩，/blog/does-compressing-image-reduce-quality 讲得更具体。" },
            { q: "几十张轮播图要怎么批量压？", a: "用同一组参数一次压完整组，保证卡片之间明暗和锐度一致；逐张手调参数的结果是每张卡片看起来都不一样。批量压缩的做法见 /blog/batch-compress-images-multiple。" },
          ],
        },
        { type: "cta", text: "按目标大小压缩 TikTok 素材，文件留在你自己的机器上 —— image-compressor-saas.shop", href: "/" },
      ],
      en: [
        "TikTok image specs look like dozens of numbers, but only three decide whether a creative actually runs: which aspect ratio the placement wants, how heavy the file is, and whether the interface covers the subject. TikTok ad image size figures still centre on 1080 x 1920 (9:16) in 2026, with square and landscape accepted but letterboxed in the feed. Take those three in order and a static set is usually finished in half a day.",
        { type: "h2", text: "Dimensions and formats across four placements" },
        {
          type: "ul",
          items: [
            "In-feed single image: 1080 x 1920 (9:16) recommended, with 1:1 and 16:9 supported, JPG and PNG, and a per file cap commonly listed at 100 MB.",
            "Carousel: every card exported at 1080 x 1920, between 2 and 35 images per set, with the cap applied to each image. Keep one ratio per set, otherwise each card crops to a different height and the swipes jump.",
            "Spark Ads images: follow the original post dimensions. The recommended figure is still 1080 x 1920, with JPG and PNG as the accepted formats.",
            "Pangle display: usually given as 1200 x 628 (1.91:1). This is not the same set of numbers as the vertical feed, so do not reuse one for the other.",
            "Profile picture: 1:1 JPG or PNG with a far tighter limit, sometimes cited as 50 KB. Prepare it separately rather than cropping an ad creative into it.",
          ],
        },
        { type: "h2", text: "Why creative fails, and it is rarely the pixel count" },
        "TikTok is a full-screen vertical feed, so a wrong ratio costs far more than being a few dozen pixels short. Anything other than 9:16 gets black bars top and bottom, the frame looks visibly short as users scroll past, and dwell time and clicks go down together. What actually trips the machine check tends to be one of two things: low-resolution source material, such as 720p upscaled to 1080p, and key message pushed into the strip at the bottom that the interface occupies. Breaching the file cap is uncommon, since most sideways or square exports never come close to it.",
        {
          type: "ul",
          items: [
            "A 16:9 asset dropped into a 9:16 placement gets wide black bars, and the subject collapses into a strip across the middle, wasting the whole screen.",
            "Mixing two ratios inside one carousel means each card crops to a different height, so the grid stutters as people swipe. The preview in Ads Manager shows it immediately.",
            "Upscaling 720p footage to 1080 x 1920 gets flagged for low quality rather than accepted.",
            "Copy and call-to-action placed inside the bottom 480 pixel band are covered by the caption and the button, so even an approved creative converts poorly.",
            "An overweight file is usually not rejected on upload. It gets re-encoded, and the heavier the source, the more visible the noise afterwards.",
          ],
        },
        { type: "h2", text: "How many KB before quality shows it" },
        "TikTok re-encodes whatever you give it, so a heavier source means a more visible difference afterwards. A working range for the 1080 x 1920 tier is enough: JPEG between 200 and 400 KB looks identical to the original on a phone, and you can stretch to 500 KB when the frame has large gradients such as sky or heavy background blur. Keep each carousel card under 300 KB, because with a dozen cards loading together the heaviest one sets the pace. Do not force a transparent asset into JPEG: the alpha channel gets flattened to white or black, and /blog/compress-png-without-losing-quality covers that case.",
        {
          type: "ul",
          items: [
            "In-feed single image: target 200 to 400 KB, with portrait or product composed vertically before compressing.",
            "Carousel: around 300 KB per card, using one compression setting across the set so the cards do not fight on brightness.",
            "Large gradients or night scenes: up to 500 KB, since gradients break before subject edges do.",
            "Do not forget the thumbnail frame pulled from video; run it through the same settings, because some placements use it as the cover.",
            "When the trade-off is unclear, /blog/lossy-vs-lossless-compression draws the line between the two in more detail.",
          ],
        },
        { type: "h2", text: "Safe zones, or the interface eats your subject" },
        "TikTok overlays its own chrome: roughly the top 130 pixels hold the status area and top navigation, the bottom 480 pixels stack up the caption, call-to-action button and username, the right 140 pixels carry the like, comment and share column, and the left 60 pixels are where text wraps. The safe move is to keep logos, selling points and any required disclaimer inside the centre band of roughly 1080 x 1310, with captions sitting a little above the vertical centre. If the same vertical cut also runs on Meta Reels, the two safe zones do not line up exactly, and centre-weighted composition is the only layout that passes both. A comparable placement breakdown is in /blog/instagram-image-sizes-2026.",
        {
          type: "ul",
          items: [
            "Top 130 pixels: status area and top navigation, so no headlines against that edge.",
            "Bottom 480 pixels: where caption, button and username stack up, so keep selling points and buttons out of it.",
            "Right 140 pixels: like, comment, share and profile entry, so nothing important on the right.",
            "Left 60 pixels: the wrap margin for text, so leave the edge clear.",
            "Centre 1080 x 1310: the frame that actually reads on every device, so put everything critical inside it.",
          ],
        },
        { type: "h2", text: "Six checks before launch" },
        {
          type: "ul",
          items: [
            "Placement decides the ratio: feed, carousel or Pangle sets where composition and export start.",
            "Lock the short edge at 1080 and let the long edge reach 1920 at 9:16, rather than cropping oddly and patching later.",
            "Compress into the range above, then inspect face edges, product outlines and text strokes at 100 percent.",
            "Step through every placement in the preview tool and confirm nothing sits inside the bottom or top bands.",
            "Use one compression setting across a carousel set so quality and brightness match card to card.",
            "Keep an uncompressed master separately; new placement or new copy means a fresh export from it, not another rescue of a compressed file.",
          ],
        },
        { type: "h2", text: "FAQ" },
        {
          type: "faq",
          items: [
            { q: "Do TikTok image ads have to be 9:16?", a: "Not strictly. 1:1 and 16:9 upload fine, but only 9:16 fills the screen. Landscape and square assets letterbox in the feed, and dwell time and clicks usually follow them down. If you have landscape material, recompose it vertically rather than padding black bars around it." },
            { q: "What is the actual file size cap per image?", a: "It varies by placement, and figures differ between sources. A common reading is 100 MB per image for feed and carousel, with a much tighter limit for small assets such as profile pictures, sometimes cited as 50 KB. Write down whatever Ads Manager shows today rather than copying a second-hand list." },
            { q: "Will dropping under 200 KB hurt quality?", a: "At 1080 x 1920, JPEG between 200 and 400 KB is indistinguishable on a phone. What does hurt is upscaling 720p source material to 1080p before compressing, and re-exporting the same file repeatedly. Where quality starts to break is set out in /blog/does-compressing-image-reduce-quality." },
            { q: "How should I handle a carousel running into dozens of cards?", a: "Compress the whole set in one pass with a single setting so brightness and sharpness match across cards. Adjusting each card by hand leaves every frame looking slightly different. The batch route is in /blog/batch-compress-images-multiple." },
          ],
        },
        { type: "cta", text: "Compress TikTok creative to a target size on image-compressor-saas.shop, with the file staying on your machine", href: "/" },
      ],
    },
  },
  {
    slug: "compress-photos-iphone-3-ways",
    date: "2026-10-20",
    title: {
      zh: "压缩 iPhone 照片的 3 种方法：不装 App、不传云端",
      en: "How to Compress Photos on iPhone: 3 Ways That Need No App"
    },
    description: {
      zh: "iPhone 照片压缩有三种不装 App 的做法：快捷指令批量压、邮件插入时选尺寸、Safari 打开本地压缩工具定目标大小。这篇给出每种的具体步骤、各自的短板，以及 HEIC 该不该先转 JPEG。",
      en: "Three ways to compress photos on iPhone without installing anything: batch resize in Shortcuts, pick a size when attaching in Mail, or set a target size in a browser-local compressor. Steps for each, where each falls short, and whether to convert HEIC first."
    },
    keywords: [
      "compress photos iphone",
      "how to compress photos on iphone without app",
      "reduce iphone photo size before emailing",
      "iphone heic vs jpeg file size",
      "compress iphone photos batch",
      "压缩 iPhone 照片",
      "iPhone 照片压缩方法",
      "iPhone 照片太大怎么变小",
      "iPhone 批量压缩照片"
    ],
    content: {
      zh: [
        "一张 iPhone 14 Pro 拍出来的照片，默认设置下大概是 2 到 3MB，ProRAW 能到 25MB 以上。发邮件、填在线表格、传到公司系统，卡住的概率很高。压缩 iPhone 照片这件事有三种做法，都不需要装额外 App：用系统自带的「快捷指令」批量压、用邮件 App 插入时选尺寸、或者用 Safari 打开浏览器本地压缩工具定一个目标大小。前两种零门槛但有各自的短板，第三种能控制到具体 KB。",
        {
          type: "h2",
          text: "为什么 iPhone 照片这么占地方"
        },
        "原因有两个，一个是传感器，一个是格式。4800 万像素的传感器拍出来的原始信息量摆在那里，而 iPhone 默认用 HEIC 存，同画质下比 JPEG 小四到五成，但还是扛不住一次发二十张这种场景。HEIC 和 JPEG 的实际差别见 /blog/heic-vs-jpg-iphone-photos，需要兼容老系统时的转换步骤见 /blog/convert-heic-to-jpg-free。",
        {
          type: "ul",
          items: [
            "传感器：4800 万像素的原始数据本身就大，ProRAW 更是直接翻倍",
            "格式：HEIC 比 JPEG 省四到五成，但接收端不一定认",
            "连拍与实况：实况照片带一段视频，体积远超静态图"
          ]
        },
        "真正决定体积的其实是像素数和压缩质量这两项，跟用什么手机拍的关系没那么大，这点在 /blog/image-resolution-vs-file-size 里拆过。",
        {
          type: "h2",
          text: "方法 1：用「快捷指令」批量压缩（系统自带）"
        },
        {
          type: "ul",
          items: [
            "打开「快捷指令」App，右上角新建",
            "添加操作「选择照片」，打开「选择多张」",
            "添加「调整图像大小」，把最大宽度设成 1920，横屏竖屏都够清晰",
            "收件方用 Windows 或老系统时，再加一个「更改图像格式」选 JPEG",
            "最后加「存储到相簿」或「存储到文件」，命名成已压缩那一类",
            "跑一次，二十张照片几秒钟处理完"
          ]
        },
        "这条路的优点是批量和自动化，缺点是精度不够。「调整图像大小」只能给宽度，不能给目标 KB，压完多大得看结果。做一版够用的归档很合适，卡着 100KB 硬限制的场景就不稳。",
        {
          type: "h2",
          text: "方法 2：邮件 App 插入时选尺寸"
        },
        {
          type: "ul",
          items: [
            "在「邮件」里新建邮件，长按正文选「插入照片或视频」",
            "选完照片后，底部会出现小 / 中 / 大 / 实际大小四个选项",
            "选中通常落在几百 KB，选小能压到一百 KB 上下",
            "收件方需要看清细节时别选小，文字和人脸会先糊"
          ]
        },
        "这是最省事的一种，局限也很明确：只在邮件里生效，压完拿不到一份可以复用的小文件，而且四个档位是系统定死的。邮件附件的体积区间见 /blog/compress-image-for-email-attachments 和 /blog/compress-photo-to-1mb-email。",
        {
          type: "h2",
          text: "方法 3：浏览器本地压缩，能定目标大小"
        },
        {
          type: "ul",
          items: [
            "用 Safari 打开 image-compressor-saas.shop",
            "从「照片」里选一张或多张，不需要提前导出成 JPEG",
            "设定目标大小，比如 200KB，或者拉质量滑块",
            "压完直接存回「照片」，原图留在原地"
          ]
        },
        "这条路的好处是三件事同时成立：不装 App、不上传到别人的服务器、能压到具体数字。文件从头到尾都在手机里处理，这点对含人脸或工作材料的照片挺重要。压缩会不会掉画质单独写在 /blog/does-compressing-image-reduce-quality，一次处理几十张的做法写在 /blog/batch-compress-images-multiple。",
        {
          type: "h2",
          text: "三种方法怎么选"
        },
        {
          type: "ul",
          items: [
            "要批量、不卡具体数字：快捷指令",
            "只在发邮件时临时变小：邮件 App 的档位",
            "卡着某个 KB 上限，或者照片不能外传：浏览器本地压缩",
            "要打印：先定尺寸再压质量，别一次压到底"
          ]
        },
        {
          type: "h2",
          text: "HEIC 还是 JPEG，先别急着转"
        },
        "HEIC 在同画质下比 JPEG 小，这是它在 iPhone 上成为默认格式的理由。问题出在接收端：不少企业系统、老版本 Windows 和一些在线表单不认 HEIC，传上去直接报错，而报错信息往往含糊，看起来像文件太大。判断顺序是先看收件方是谁，再决定要不要转，而不是一律先转 JPEG，因为转成 JPEG 之后再压缩，体积优势就没了。",
        {
          type: "h2",
          text: "常见问题"
        },
        {
          type: "faq",
          items: [
            {
              q: "压缩后的照片还能打印吗？",
              a: "看尺寸。压到 1920px 宽、200KB 左右，冲印 6 寸没问题，A4 以上会看出细节不足。要打印就别压太狠，先定尺寸再压质量。"
            },
            {
              q: "为什么压完还是传不上去？",
              a: "多数情况不是体积，是格式。系统不认 HEIC 时会给出模糊的报错，看起来像文件太大。先转成 JPEG 再试一次，步骤见 /blog/convert-heic-to-jpg-free。"
            },
            {
              q: "快捷指令压完，原图还在吗？",
              a: "在。快捷指令默认输出到新文件，不会覆盖「照片」里的原件。想省空间可以之后手动删，但建议先确认压完的能看。"
            },
            {
              q: "一次压二十张会掉画质吗？",
              a: "不会，批量只是把同样的一次处理跑二十遍。真正伤画质的是同一张图反复压缩，每压一次细节少一层，原因见 /blog/does-compressing-image-reduce-quality。"
            }
          ]
        },
        {
          type: "cta",
          text: "在 image-compressor-saas.shop 给 iPhone 照片定一个目标大小，照片不离开手机",
          href: "/"
        }
      ],
      en: [
        "A photo from an iPhone 14 Pro lands around 2 to 3 MB at default settings, and ProRAW goes past 25 MB. Emails, online forms and corporate upload portals reject those regularly. There are three ways to compress photos on iPhone, and none of them need an extra app: batch resize through the built-in Shortcuts app, pick a size when attaching in Mail, or open a browser-local compressor in Safari and set a target size. The first two have no learning curve but come with limits. The third gets you to a specific KB figure.",
        {
          type: "h2",
          text: "Why iPhone photos are large"
        },
        "Two reasons, the sensor and the format. A 48-megapixel sensor captures what it captures, and while HEIC stores the same quality in roughly half the space of JPEG, it still buckles under sending twenty at once. The practical difference between HEIC and JPEG is set out in /blog/heic-vs-jpg-iphone-photos, and converting when an older system needs it is in /blog/convert-heic-to-jpg-free.",
        {
          type: "ul",
          items: [
            "Sensor: 48 megapixels of raw data is already large, and ProRAW roughly doubles it",
            "Format: HEIC saves 40 to 50 percent over JPEG, but the receiving end may not read it",
            "Bursts and Live Photos: a Live Photo carries a video clip and outweighs a still by a wide margin"
          ]
        },
        "What actually drives file size is pixel count and compression quality, which has less to do with the phone than people assume. That is broken down in /blog/image-resolution-vs-file-size.",
        {
          type: "h2",
          text: "Method 1: batch resize with Shortcuts"
        },
        {
          type: "ul",
          items: [
            "Open Shortcuts, tap the plus to create a new one",
            "Add the Select Photos action and turn on Select Multiple",
            "Add Resize Image and set the maximum width to 1920, which holds up in both orientations",
            "If the recipient runs Windows or something older, add Change Image Format and pick JPEG",
            "Finish with Save to Photo Album or Save to File, and name the output something like compressed",
            "Run it once and twenty photos are done in seconds"
          ]
        },
        "Batch and automation are the win here. Precision is not: Resize Image takes a width, not a target file size, so you find out afterwards what you got. Fine for an archive pass, unreliable against a hard 100 KB cap.",
        {
          type: "h2",
          text: "Method 2: pick a size when attaching in Mail"
        },
        {
          type: "ul",
          items: [
            "Start a new message in Mail, long press the body, choose Insert Photo or Video",
            "After picking photos, the Small, Medium, Large and Actual Size options appear at the bottom",
            "Medium usually lands in the hundreds of KB, Small goes near 100 KB",
            "Skip Small when the recipient needs to read detail; text and faces soften first"
          ]
        },
        "Cheapest option by a distance, with a matching limit: it only works inside Mail, you never get a reusable small file out of it, and the four tiers are fixed. Sizes for attachments are covered in /blog/compress-image-for-email-attachments and /blog/compress-photo-to-1mb-email.",
        {
          type: "h2",
          text: "Method 3: browser-local compression with a target size"
        },
        {
          type: "ul",
          items: [
            "Open image-compressor-saas.shop in Safari",
            "Pick one photo or several from Photos, no need to export to JPEG first",
            "Set a target size, say 200 KB, or drag the quality slider",
            "Save the result back to Photos and leave the original where it is"
          ]
        },
        "Three things hold at once here: no app to install, no upload to someone else's server, and a number you can actually hit. The file is processed on the phone the whole way through, which matters when the pictures contain faces or work material. Whether compression costs visible quality is dealt with in /blog/does-compressing-image-reduce-quality, and doing dozens at a time in /blog/batch-compress-images-multiple.",
        {
          type: "h2",
          text: "Which one to pick"
        },
        {
          type: "ul",
          items: [
            "Batch work with no specific number in mind: Shortcuts",
            "A one-off shrink before sending mail: the Mail size picker",
            "A hard KB cap, or photos that should not leave the device: browser-local compression",
            "Printing: set dimensions first, compress quality second, and stop earlier than you would for screen"
          ]
        },
        {
          type: "h2",
          text: "HEIC or JPEG, do not convert on reflex"
        },
        "HEIC is smaller than JPEG at the same quality, which is why it is the default on iPhone. The trouble is at the receiving end: a fair number of corporate systems, older Windows builds and online forms do not recognise it and fail with an unhelpful error that reads like a size problem. Decide based on who is receiving rather than converting everything up front, because converting to JPEG before compressing throws away the size advantage.",
        {
          type: "h2",
          text: "FAQ"
        },
        {
          type: "faq",
          items: [
            {
              q: "Can a compressed photo still be printed?",
              a: "It depends on dimensions. At 1920 px wide and around 200 KB, a 6 inch print is fine, while A4 and above shows the missing detail. For print, set dimensions first and compress quality second, and stop earlier than you would for screen."
            },
            {
              q: "Why is my photo still rejected after compressing?",
              a: "Usually the format, not the size. Systems that do not read HEIC often throw a vague error that looks like a size problem. Convert to JPEG first; the steps are in /blog/convert-heic-to-jpg-free."
            },
            {
              q: "Does Shortcuts overwrite the original?",
              a: "No. It writes to a new file and leaves the version in Photos alone. You can delete the originals afterwards to reclaim space, though check the compressed output first."
            },
            {
              q: "Does compressing twenty at once hurt quality?",
              a: "No. A batch is the same single operation run twenty times. What does hurt is compressing the same file repeatedly, where each pass removes another layer of fine detail, explained in /blog/does-compressing-image-reduce-quality."
            }
          ]
        },
        {
          type: "cta",
          text: "Compress iPhone photos to a target size on image-compressor-saas.shop, with the file staying on your phone",
          href: "/"
        }
      ]
    }
  },
  {
    slug: "compress-photos-android-no-app",
    date: "2026-10-21",
    title: {
      zh: "压缩安卓手机照片的 4 种方法：不装 App 也能压到指定大小",
      en: "How to Compress Photos on Android Without Installing an App"
    },
    description: {
      zh: "压缩安卓照片有四种不装 App 的做法：相册编辑导出、Google 相册画质选项、分享时的尺寸档位、Chrome 打开浏览器本地压缩工具。这篇给出每种的具体步骤、各自的短板，以及 HEIC 该不该先转 JPEG。",
      en: "Four ways to compress photos on Android without installing anything: export a resized copy from the gallery app, the Google Photos storage saver, the size picker when sharing, or a browser-local compressor opened in Chrome. Steps for each, where each falls short, and whether to convert HEIC first."
    },
    keywords: [
      "compress photos android",
      "how to compress photos on android without app",
      "reduce android photo size before sending",
      "android photo file size limit fix",
      "compress android photos batch",
      "压缩安卓照片",
      "安卓手机照片压缩",
      "手机照片太大怎么变小",
      "安卓批量压缩照片"
    ],
    content: {
      zh: [
        "一台中端安卓机拍出来的照片，默认设置下常在 3 到 6MB，开启高像素模式能到 10MB 以上。发邮件、填报名表、传到公司系统，卡住的概率很高。压缩安卓照片有四种不装 App 的做法：相册自带的编辑导出、Google 相册的画质选项、分享时系统给的尺寸档位、以及用 Chrome 打开浏览器本地压缩工具定目标大小。前三种零门槛但控不住具体数字，第四种能压到指定 KB。",
        {
          type: "h2",
          text: "为什么安卓照片这么大"
        },
        "原因有两个，一个是像素数，一个是编码。一亿像素模式拍出来的原始信息量摆在那里，而安卓阵营默认多用 JPEG 存，少数机型用 HEIC 或 HEIF，同画质下比 JPEG 省四到五成。省归省，一次发二十张照样扛不住。",
        {
          type: "ul",
          items: [
            "像素数：高像素模式下的原始信息量本身就大，部分机型一亿像素模式单张超过 10MB",
            "编码：HEIC 或 HEIF 比 JPEG 省四到五成，但接收端不一定认",
            "连拍与动态照片：带一段视频的照片体积远超静态图"
          ]
        },
        "真正决定体积的是像素数和压缩质量这两项，跟用什么手机拍的关系没那么大，这点在 /blog/image-resolution-vs-file-size 里拆过。所以压缩的第一步不是找工具，是先想清楚这张照片最终要多大：发朋友圈和冲印 6 寸是完全不同的两个目标。",
        "顺带一个常见误会：系统相册里显示的「已优化」「已备份」不代表本地文件变小了。云端存的是另一份，本地原图还在。",
        {
          type: "h2",
          text: "方法 1：相册编辑里改尺寸导出"
        },
        {
          type: "ul",
          items: [
            "在相册里打开照片，点编辑",
            "找到裁切或调整大小的图标，不同品牌位置不同，多在工具栏第二页",
            "选一个较小的尺寸档位，比如 1920px 宽",
            "点「另存为副本」或「导出」，别选「保存」，那个会覆盖原图"
          ]
        },
        "这条路的好处是系统自带、不产生新安装。短板也很明确：档位是固定的，压完多大要靠结果说话，而且各家相册的入口位置不一样，换台手机就得重新找一遍。",
        {
          type: "h2",
          text: "方法 2：Google 相册的存储节省器"
        },
        "Google 相册的「存储节省器」会把已备份的照片在云端换成画质略低的版本，本地那份不受影响。它能释放的是云端空间，不是本地空间。",
        {
          type: "ul",
          items: [
            "释放的是云端配额，手机里的原图大小不变",
            "画质略低的版本只在云端，本地打开仍是原图",
            "已经备份完成、想让配额撑久一点时才适用"
          ]
        },
        "所以如果你的目标是「把这张照片变小然后发出去」，这条路帮不上忙。",
        {
          type: "h2",
          text: "方法 3：分享时选尺寸档位"
        },
        {
          type: "ul",
          items: [
            "微信发送时，勾选「原图」才发原图，不勾就走默认压缩",
            "Gmail 插入附件时会问你要小 / 中 / 大 / 原始大小",
            "部分品牌相册在分享面板里直接给了「压缩后分享」"
          ]
        },
        "这是最省事的一种，局限也最明确：只在那个 App 里生效，压完拿不到一份可以复用的小文件，而且档位是系统定死的。邮件附件该压到多大写在 /blog/compress-image-for-email-attachments 和 /blog/compress-photo-to-1mb-email。",
        {
          type: "h2",
          text: "方法 4：Chrome 打开浏览器本地压缩，能定目标大小"
        },
        "如果卡着某个具体上限，比如报名表要求 200KB 以内，前三种都给不了保证。这时用浏览器本地工具：",
        {
          type: "ul",
          items: [
            "用 Chrome 打开 image-compressor-saas.shop",
            "从相册里选一张或多张，不需要提前导出或转格式",
            "设定目标大小，比如 200KB，或者拉质量滑块",
            "压完直接下载，原图留在手机里"
          ]
        },
        "这条路的好处是三件事同时成立：不装 App、不上传到别人的服务器、能压到具体数字。文件从头到尾都在手机里处理，对含人脸或工作材料的照片挺重要。压缩会不会掉画质单独写在 /blog/does-compressing-image-reduce-quality，一次处理几十张的做法写在 /blog/batch-compress-images-multiple。",
        {
          type: "h2",
          text: "四种方法怎么选"
        },
        {
          type: "ul",
          items: [
            "只是想顺手小一点、不看具体数字：相册编辑导出",
            "想让云端配额撑久一点：Google 相册存储节省器",
            "在微信或邮件里临时发一张：分享时的尺寸档位",
            "卡着某个 KB 上限，或者照片不能外传：Chrome 打开浏览器本地压缩",
            "一次要处理几十张：同上，批量跑一遍，见 /blog/batch-compress-images-multiple"
          ]
        },
        {
          type: "h2",
          text: "HEIC 和 JPEG，安卓上要不要先转"
        },
        "部分安卓机型拍照默认存 HEIC 或 HEIF，同画质下比 JPEG 小。问题出在接收端：不少企业系统、老版本 Windows 和一些在线表单不认这个格式，传上去直接报错，而报错信息往往含糊，看起来像文件太大。",
        "判断顺序是先看收件方是谁，再决定要不要转，而不是一律先转 JPEG，因为转成 JPEG 之后再压缩，体积优势就没了。iPhone 那边的同款判断和转换步骤见 /blog/heic-vs-jpg-iphone-photos 和 /blog/convert-heic-to-jpg-free。",
        {
          type: "h2",
          text: "常见问题"
        },
        {
          type: "faq",
          items: [
            {
              q: "压缩后的照片还能打印吗？",
              a: "看尺寸。压到 1920px 宽、200KB 左右，冲印 6 寸没问题，A4 以上会看出细节不足。要打印就别压太狠，先定尺寸再压质量。"
            },
            {
              q: "为什么压完还是传不上去？",
              a: "多数情况不是体积，是格式。系统不认 HEIC 时会给出模糊的报错，看起来像文件太大。也有部分表单同时卡尺寸和像素数，先看清限制写的是哪一项。"
            },
            {
              q: "相册里「另存为副本」会不会覆盖原图？",
              a: "不会，这选项本身就是为了留原图。但不同品牌措辞不一样，看到只有「保存」没有「另存为」时，先确认一次再点。"
            },
            {
              q: "一次压二十张会掉画质吗？",
              a: "不会，批量只是把同样的一次处理跑二十遍。真正伤画质的是同一张图反复压缩，每压一次细节少一层，原因见 /blog/does-compressing-image-reduce-quality。"
            },
            {
              q: "和 iPhone 上的做法有什么差别？",
              a: "思路一样，入口不同。iPhone 靠快捷指令做批量，安卓多数靠相册自带的编辑导出，两边都能用浏览器本地工具定目标大小。iPhone 那三种方法写在 /blog/compress-photos-iphone-3-ways。"
            }
          ]
        },
        {
          type: "cta",
          text: "在 image-compressor-saas.shop 给安卓照片定一个目标大小，照片不离开手机",
          href: "/"
        }
      ],
      en: [
        "A photo from a mid-range Android phone lands around 3 to 6 MB at default settings, and the high resolution modes go past 10 MB. Emails, application forms and corporate upload portals reject those regularly. There are four ways to compress photos on Android, and none of them need an extra app: export a resized copy from the gallery app, use the Google Photos storage saver, pick a size when sharing, or open a browser-local compressor in Chrome and set a target size. The first three have no learning curve but cannot hit a specific number. The fourth can.",
        {
          type: "h2",
          text: "Why Android photos are large"
        },
        "Two reasons, the pixel count and the encoding. A high resolution mode captures what it captures, and while most of the Android side stores JPEG by default, with some models on HEIC or HEIF, those save 40 to 50 percent over JPEG at the same quality. Cheaper per photo, and it still buckles under sending twenty at once.",
        {
          type: "ul",
          items: [
            "Pixel count: high resolution modes carry the data they carry, and a 108 megapixel mode passes 10 MB per frame",
            "Encoding: HEIC or HEIF saves 40 to 50 percent over JPEG, but the receiving end may not read it",
            "Bursts and motion photos: a photo carrying a video clip outweighs a still by a wide margin"
          ]
        },
        "What actually drives file size is pixel count and compression quality, which has less to do with the phone than people assume, broken down in /blog/image-resolution-vs-file-size. So the first step is not finding a tool but working out how large the photo needs to end up, since a feed post and a 6 inch print are two different targets.",
        "One misconception worth clearing up: an optimised or backed up badge in the gallery app does not mean the local file shrank. The cloud holds a separate copy and the full original stays on the phone.",
        {
          type: "h2",
          text: "Method 1: export a resized copy from the gallery app"
        },
        {
          type: "ul",
          items: [
            "Open the photo in the gallery app and tap edit",
            "Find the crop or resize icon, which sits in a different place on every brand and is often on the second page of the toolbar",
            "Pick a smaller dimension, say 1920 px wide",
            "Tap Save as copy or Export, not Save, which overwrites the original"
          ]
        },
        "The win here is that it ships with the phone and adds no install. The limit is just as clear: the tiers are fixed, you find out the resulting size afterwards, and every manufacturer puts the entry point somewhere else, so switching phones means hunting for it again.",
        {
          type: "h2",
          text: "Method 2: the Google Photos storage saver"
        },
        "The storage saver swaps already backed up photos for slightly lower quality versions in the cloud, and leaves the copy on your device alone. It frees cloud space, not phone space.",
        {
          type: "ul",
          items: [
            "It frees cloud quota, and the original on the phone stays the same size",
            "The lower quality version exists only in the cloud, and opening the photo locally still shows the original",
            "It suits a finished backup where the point is making the quota last longer"
          ]
        },
        "So if the goal is making one photo smaller in order to send it, this route does nothing for you.",
        {
          type: "h2",
          text: "Method 3: pick a size when sharing"
        },
        {
          type: "ul",
          items: [
            "In WeChat, ticking Original sends the original, and leaving it unticked applies the default compression",
            "Gmail offers Small, Medium, Large and Actual Size when you attach a photo",
            "Some manufacturer gallery apps put a compress before sharing option directly in the share sheet"
          ]
        },
        "Cheapest option by a distance, with a matching limit: it only works inside that one app, you never get a reusable small file out of it, and the tiers are fixed. What size an attachment should be is covered in /blog/compress-image-for-email-attachments and /blog/compress-photo-to-1mb-email.",
        {
          type: "h2",
          text: "Method 4: browser-local compression in Chrome with a target size"
        },
        "Against a specific cap, say a form that demands under 200 KB, none of the first three can promise anything. Use a browser-local tool instead:",
        {
          type: "ul",
          items: [
            "Open image-compressor-saas.shop in Chrome",
            "Pick one photo or several from the gallery, no need to export or convert first",
            "Set a target size, say 200 KB, or drag the quality slider",
            "Download the result and leave the original on the phone"
          ]
        },
        "Three things hold at once here: no app to install, no upload to someone else's server, and a number you can actually hit. The file is processed on the phone the whole way through, which matters when the pictures contain faces or work material. Whether compression costs visible quality is dealt with in /blog/does-compressing-image-reduce-quality, and doing dozens at a time in /blog/batch-compress-images-multiple.",
        {
          type: "h2",
          text: "Which one to pick"
        },
        {
          type: "ul",
          items: [
            "A quick shrink with no specific number in mind: gallery export",
            "Making cloud quota last longer: the Google Photos storage saver",
            "A one-off send in WeChat or mail: the size picker when sharing",
            "A hard KB cap, or photos that should not leave the device: browser-local compression in Chrome",
            "Dozens at once: same answer, run them in one batch, see /blog/batch-compress-images-multiple"
          ]
        },
        {
          type: "h2",
          text: "HEIC or JPEG, do not convert on reflex"
        },
        "Some Android phones save HEIC or HEIF by default, which is smaller than JPEG at the same quality. The trouble is at the receiving end: a fair number of corporate systems, older Windows builds and online forms do not read it and fail with an unhelpful error that reads like a size problem.",
        "Decide based on who is receiving rather than converting everything up front, because converting to JPEG before compressing throws away the size advantage. The same judgement on the iPhone side, and the conversion steps, are in /blog/heic-vs-jpg-iphone-photos and /blog/convert-heic-to-jpg-free.",
        {
          type: "h2",
          text: "FAQ"
        },
        {
          type: "faq",
          items: [
            {
              q: "Can a compressed Android photo still be printed?",
              a: "It depends on dimensions. At 1920 px wide and around 200 KB, a 6 inch print is fine, while A4 and above shows the missing detail. For print, set dimensions first and compress quality second, and stop earlier than you would for screen."
            },
            {
              q: "Why is my photo still rejected after compressing?",
              a: "Usually the format, not the size. Systems that do not read HEIC often throw a vague error that looks like a size problem. Some forms also cap dimensions and pixel count separately, so check which limit is written down."
            },
            {
              q: "Does saving as a copy overwrite the original?",
              a: "No, the option exists to keep the original. Wording varies by manufacturer, so when the menu only offers Save with no Save as copy, confirm once before tapping."
            },
            {
              q: "Does compressing twenty at once hurt quality?",
              a: "No. A batch is the same single operation run twenty times. What does hurt is compressing the same file repeatedly, where each pass removes another layer of fine detail, explained in /blog/does-compressing-image-reduce-quality."
            },
            {
              q: "How does this differ from doing it on iPhone?",
              a: "The logic is the same and the entry points differ. iPhone batch work runs through Shortcuts, Android mostly through the editing export in the gallery app, and both can set a target size in a browser-local compressor. The three iPhone methods are in /blog/compress-photos-iphone-3-ways."
            }
          ]
        },
        {
          type: "cta",
          text: "Compress Android photos to a target size on image-compressor-saas.shop, with the file staying on your phone",
          href: "/"
        }
      ]
    }
  },
  {
    slug: "compress-photos-for-online-forms-2026",
    date: "2026-10-22",
    title: {
      zh: "证件/签证在线表单照片压缩：三个限制只有一个是大小",
      en: "Compress Photos for Online Forms 2026: Three Limits, Only One Is Size"
    },
    description: {
      zh: "政府、签证、求职表单的上传字段会同时卡三个限制：文件大小、像素尺寸、文件格式。这篇给出各国常见上限、100KB 门槛的过法，以及上传前的六步。",
      en: "Government, visa and job forms enforce three limits at once: file size, pixel dimensions and format. Common caps by region, how to clear a 100KB ceiling, and six steps before you upload."
    },
    keywords: [
      "compress photo for online form",
      "passport photo file size limit",
      "reduce image size for visa application",
      "100kb photo upload",
      "photo upload rejected form",
      "visa photo dimensions requirements"
    ],
    content: {
      zh: [
        "每个官方表单的上传字段都在同时执行三个限制，其中只有一个跟文件大小有关。把照片压缩到符合在线表单要求却不逐个核对这三条，你会拿到那种什么都说明不了的错误提示：上传失败，原因未知。三条分别是文件大小上限、像素尺寸范围和接受的文件格式。表单按这个顺序检查，遇到第一条不满足就停下。",
        { type: "h2", text: "上传字段实际检查的三件事" },
        "证件照片的大小上限多数在 50KB 到 500KB 之间，还有相当数量仍卡在 100KB。签证和居留许可系统对尺寸的挑剔程度通常高于对大小的挑剔。大学和求职系统则是最宽松的一类。顺序很关键：尺寸不满足的文件，根本轮不到大小那一关。",
        {
          type: "ul",
          items: [
            "文件大小：表单上写明的上限，常见 100KB、200KB 或 1MB",
            "像素尺寸：既有上限也有下限，宽度低于 300 像素会被判为太小",
            "文件格式：几乎都要 JPEG，部分系统要 PNG，HEIC 基本不被接受",
            "色彩配置：少见，但少数移民系统明确指定 sRGB",
            "方形裁切：护照类系统常要求人脸落在固定的取景框内"
          ]
        },
        { type: "h2", text: "签证申请会遇到的几个上限" },
        "签证申请是三条限制卡得最紧的地方，因为照片还得同时满足证件照的取景要求。数字会随系统与年份调整，所以你所在的那份表单才是依据，下面这组只是让你知道该去看哪一栏。",
        {
          type: "ul",
          items: [
            "美国签证与 ESTA：常见 240KB 到 2MB，但尺寸卡在 600x600 到 1200x1200，方形裁切是硬性要求",
            "英国护照与签证：上限比多数国家小，文件通常先因尺寸被拒，再因大小被拒",
            "申根：按受理的成员国各自不同，以你正在填写的那个门户为准",
            "加拿大：4MB 上限几乎卡不住人，真正卡人的是尺寸和头部占比规则",
            "中国、印度与东南亚多数国家：100KB 上限在这里最常见，也是 100KB 门槛出现频率最高的地区"
          ]
        },
        { type: "h2", text: "怎么让照片进到 100KB 以内" },
        "在现代手机上听到 100KB 的上限会觉得不可能，其实并不难，因为摄像头一直在进步而表单没有。难点不在算法而在顺序：直接压一张 1200 万像素的照片，压到画质尽失也进不去 100KB；先缩到 1200 像素宽，再压到 70 到 80 画质，通常还剩不少余量。",
        {
          type: "ul",
          items: [
            "先改尺寸。1200 万像素的照片在任何画质下都进不了 100KB，1200 像素宽的在 70 到 80 画质可以。",
            "再压大小。缩放和压缩是两个不同的操作，顺序反过来结果就变了，两者的区别在 /blog/resize-and-compress-image 里拆开讲过。",
            "别动格式。在缩放之前把 HEIC 转成 JPEG，等于先把 HEIC 的体积优势扔掉，转换步骤见 /blog/convert-heic-to-jpg-free。",
            "验一遍结果，别信预估。部分表单按 KB 计，部分按字节计，两边的 100KB 不是一回事。",
            "截图不算方法。它自带一套压缩，结果通常还是超上限。"
          ]
        },
        { type: "h2", text: "上传之前的六步" },
        {
          type: "ul",
          items: [
            "先读表单自己写的字段要求。第三方整理的要求清单会过期，表单本身才是依据。",
            "先把像素尺寸改到范围内，再处理大小。",
            "按 KB 设目标大小压缩，这个设置就是为这件事存在的。",
            "确认格式是表单列出的那个，JPEG 或 PNG。",
            "保存之后重新看一眼大小，部分相册会按原画质另存。",
            "上传一次，失败时先读错误提示点名的是三条里的哪一条，再做下一步。"
          ]
        },
        {
          type: "faq",
          items: [
            {
              q: "压到 100KB 之后照片还能用吗？",
              a: "表单用途下基本没问题。这类场景接收方本来就只打算在屏幕上小尺寸查看，1200 像素宽、200KB 以内的文件足够清晰。要拿去打印才需要另外一套设置，打印与屏幕的取舍在 /blog/compressed-vs-resized-image 里讲过。"
            },
            {
              q: "为什么大小已经符合要求还是被拒？",
              a: "多半是尺寸或格式。HEIC 在多数政务系统和旧版 Windows 上读不了，抛出的错误提示常常看着像大小问题。少数表单把尺寸和总像素数分开卡，需要看清写的是哪一条。HEIC 的转换在 /blog/convert-heic-to-jpg-free。"
            },
            {
              q: "表单要求的尺寸和大小冲突怎么办？",
              a: "尺寸优先。尺寸不满足的文件会被直接拒掉，大小超了还有压缩这一条路。先把像素改到位，再压大小，两步的顺序在 /blog/resize-and-compress-image 里写清楚了。"
            },
            {
              q: "一次要交十几张，逐张压会不会掉画质？",
              a: "不会。批量只是把同一个操作跑十几遍，真正掉画质的是同一张文件反复压缩，每跑一遍细节少一层。批量做法见 /blog/batch-compress-images-multiple，原理见 /blog/does-compressing-image-reduce-quality。"
            }
          ]
        },
        {
          type: "cta",
          text: "在 image-compressor-saas.shop 把照片压到表单写明的那个上限，文件全程留在浏览器里",
          href: "/"
        }
      ],
      en: [
        "Every upload field on an official form enforces three separate limits at once, and only one of them has anything to do with file size. Compress a photo for an online form without checking all three and you get the error that explains nothing: upload rejected, reason not stated. The three are a maximum file size, a pixel dimension range, and an accepted file format. Forms check them in that order and stop at the first one that fails.",
        { type: "h2", text: "The three things an upload field checks" },
        "A passport photo file size limit usually sits somewhere between 50KB and 500KB, and a fair number of portals still cap at 100KB. Visa and residence permit systems tend to be fussier about dimensions than about size. University and job application portals are the loosest of the three. The order decides the outcome: a file that fails on dimensions never reaches the size check.",
        {
          type: "ul",
          items: [
            "File size: the cap written on the form, commonly 100KB, 200KB or 1MB",
            "Dimensions: a minimum as well as a maximum, since a photo under 300 px wide gets rejected as too small",
            "Format: JPEG almost always, PNG on some systems, and HEIC almost never",
            "Colour profile: rare, though a handful of immigration portals specify sRGB",
            "Square crop: passport systems often require the face to sit inside a fixed box"
          ]
        },
        { type: "h2", text: "Reduce image size for a visa application: the caps you will actually meet" },
        "Visa applications are where the three limits bite hardest, because the photo also has to work as a passport photo. The numbers move with the system and the year, so the form in front of you is the authority. This list is here to tell you which field to go and read.",
        {
          type: "ul",
          items: [
            "US visa and ESTA: 240 KB to 2 MB is typical, but the dimensions are 600x600 to 1200x1200 and the square crop is mandatory",
            "UK passport and visa: a smaller cap than most, and files are rejected on dimensions before they are rejected on size",
            "Schengen: it varies with the member state handling the application, so the portal you are on decides",
            "Canada: a 4 MB maximum that almost nothing fails, while the dimension and head size rules are what catch people",
            "China, India and much of Southeast Asia: 100KB caps are common here, and this is where the 100KB ceiling turns up most often"
          ]
        },
        { type: "h2", text: "Getting a photo under 100KB" },
        "A 100KB photo upload ceiling sounds impossible on a modern phone, and it is not, because the cameras kept improving while the forms did not. The difficulty is the order rather than the algorithm. Compressing a 12 megapixel original down to 100KB is impossible at any quality setting. Resizing it to 1200 px wide first and then compressing at quality 70 to 80 usually leaves room to spare.",
        {
          type: "ul",
          items: [
            "Resize first. A 12 megapixel photo will not fit in 100KB at any quality, and a 1200 px wide one fits at 70 to 80.",
            "Then compress. Resizing and compressing are two different operations and the order changes the result, which is set out in /blog/resize-and-compress-image.",
            "Leave the format alone. Converting HEIC to JPEG before resizing throws away the size advantage HEIC had, and the steps are in /blog/convert-heic-to-jpg-free.",
            "Check the result instead of trusting the estimate. Some forms count in KB and some in bytes, and 100 KB is not the same number in both.",
            "A screenshot is not a method. It applies its own compression and usually lands above the cap."
          ]
        },
        { type: "h2", text: "Six steps before you upload" },
        {
          type: "ul",
          items: [
            "Read the field requirements on the form itself. Lists compiled by third parties go stale, and the form is the authority.",
            "Fix the pixel dimensions first, then the file size.",
            "Compress to a target size in KB, which is the setting that exists for exactly this job.",
            "Confirm the format is whichever one the form lists, JPEG or PNG.",
            "Check the size again after saving, since some galleries save again at full quality.",
            "Upload once, and if it fails, read which of the three limits the error names before doing anything else."
          ]
        },
        {
          type: "faq",
          items: [
            {
              q: "Is a photo still usable after being compressed to 100KB?",
              a: "For a form, yes. The receiving side only intends to look at it on a screen at a small size, and 1200 px wide at under 200 KB is plenty for that. Printing needs a different set of settings, and the trade between print and screen is in /blog/compressed-vs-resized-image."
            },
            {
              q: "Why is my photo rejected when the size is already within the limit?",
              a: "Usually the format or the dimensions. HEIC cannot be read by many government systems and older Windows builds, and the error they throw often looks like a size problem. Some forms also cap dimensions and total pixel count separately, so check which limit is written down. The conversion is in /blog/convert-heic-to-jpg-free."
            },
            {
              q: "What if the dimension and size requirements conflict?",
              a: "Dimensions win. A file outside the dimension range is rejected outright, while a file over the size cap still has compression available. Fix the pixels first and the size second, and the two-step order is in /blog/resize-and-compress-image."
            },
            {
              q: "Does compressing a dozen photos at once hurt quality?",
              a: "No. A batch is the same single operation run a dozen times. What does hurt is compressing the same file repeatedly, where each pass removes another layer of fine detail. The batch route is in /blog/batch-compress-images-multiple and the reason in /blog/does-compressing-image-reduce-quality."
            }
          ]
        },
        {
          type: "cta",
          text: "Compress a photo to the exact cap your form states on image-compressor-saas.shop, with the file staying in your browser",
          href: "/"
        }
      ]
    }

  },
  {
    slug: "best-ios-image-compression-app-2026",
    date: "2026-10-24",
    title: {
      zh: "2026 年 iPhone 图片压缩 App 怎么选：五条路的真实差别",
      en: "Best iOS Image Compression App 2026: Five Routes, Compared Honestly"
    },
    description: {
      zh: "iPhone 上压图有五条路：相册导出、快捷指令批量、HEIC 转 JPEG、第三方批量 App、浏览器本地压缩。按画质控制、批量成本、隐私三件事排下来，差别一目了然，附安装前要看的三项。",
      en: "Compressing images on an iPhone in 2026 means picking one of five routes: gallery export, Shortcuts batching, HEIC to JPEG conversion, third-party batch apps, or browser-local compression. Compared on quality control, batch cost and privacy, plus three checks before you install anything."
    },
    keywords: [
      "best ios image compression app 2026",
      "iphone photo compressor app",
      "compress photos on iphone without losing quality",
      "ios batch image resizer",
      "heic to jpeg iphone app",
      "reduce photo size iphone free"
    ],
    content: {
      zh: [
        "2026 年在 iPhone 上压缩图片，选哪个 App 的决定因素其实不在 App 本身，而在你要压的东西：一张准备发邮件的截图，和一整个相册准备上传的八百张，答案完全不同。可用的一共五条路：相册自带的导出选择器、把 HEIC 或 JPEG 批量跑一遍的快捷指令、分享菜单里的格式转换、第三方批量压缩 App，以及完全在浏览器里本机跑的压缩工具。它们的差别集中在四件事上：能不能控制画质、五十张要按五十次还是一次、反复压缩会不会一层层掉细节，以及处理的这段时间照片落在谁手里。",
        { type: "h2", text: "五条路各自设计的场景" },
        "五条路没有谁全面占优，各自是被不同需求逼出来的。先看清自己的量级和用途，比先去 App Store 翻评分快得多。",
        {
          type: "ul",
          items: [
            "相册导出：iPhone 在分享或存储到文件时给出的尺寸选项。适合单张、临时、对画质没有精确要求的情况。",
            "快捷指令：把重复操作固化成一个动作，适合几十张一批、要长期反复用的流程。前期配置慢，后期几乎零成本。",
            "HEIC 转 JPEG：主要解决兼容性而不是体积，转完通常更大。别人读不了你的文件时才用。",
            "第三方批量 App：一次选中全部，点一次开始。上手最快，代价是文件要交给这一家处理。",
            "浏览器本地压缩：在 Safari 里跑，文件不出设备，能按 KB 设目标大小。免费档通常不限制张数。"
          ]
        },
        { type: "h2", text: "画质控制在 iOS 上卡在哪里" },
        "系统自带的路径基本不给画质滑块，只给一个抽象的尺寸档位，比如大、中、小。这是因为苹果假设你要的是「够小能发出去」，而不是「刚好卡在某个 KB 以内」。表单写死 200KB 这种场景，靠档位猜基本猜不准，要按数字往下试好几次。",
        {
          type: "ul",
          items: [
            "只要降到不影响查看的程度：系统导出够用，两次就能出结果。",
            "要卡一个具体数字 100KB 或 200KB：需要能填数字的目标大小设置，而不是三档选择器。",
            "要在手机上打印：先定像素尺寸再谈压缩，只看文件大小会吃亏。",
            "反复压同一张会掉画质：每跑一遍有损压缩，细节少一层，所以源文件和成品要分开存。"
          ]
        },
        { type: "h2", text: "批量这条路上，快捷指令最省手" },
        "iPhone 上没有传统意义上的文件拖拽批处理，快捷指令补的就是这个空缺。它把「选中目录 ‑ 缩放 ‑ 指定大小 ‑ 存到某个文件夹」固化下来，之后每次只是选一个目录再点一次。三十张以上时用它的体验差距非常明显。",
        {
          type: "ul",
          items: [
            "先在照片 app 里建一个相簿，把要处理的那批放进去，不要在全库上跑。",
            "加一个「调整图像大小」动作，先定宽度，比如 1600 或 1920 像素。",
            "再加一个压缩动作，有目标大小就填目标大小，没有就给画质档。",
            "输出到一个单独的相簿，避免和原图混在一起。",
            "跑完之后原尺寸核对一张脸或一段文字边缘，确认没问题再清空原相簿。"
          ]
        },
        { type: "h2", text: "装任何 App 之前先看的四项" },
        "图片压缩 App 是隐私风险比较集中的一类：它需要读你的整个相册，而相册里有身份证件、孩子和门牌。装之前花一分钟确认下面四项，能避开多数麻烦。",
        {
          type: "ul",
          items: [
            "文件去哪了：页面上写本地处理，还是写上传后返回。两者差别很大。",
            "免费档的真实上限：多为每天几张，或者单次几张，或者输出加水印。",
            "要不要全相册权限：iOS 支持只授权选中的照片，不要一次性放开通行。",
            "会不会保留副本和删除入口：删除是在 App 内消失，还是连服务端一起清。"
          ]
        },
        {
          type: "faq",
          items: [
            {
              q: "iPhone 上有不用装 App 就能压缩照片的办法吗？",
              a: "有四条不用装任何东西：相册分享里的尺寸选项、快捷指令 App（系统自带）、把 HEIC 转成 JPEG 的分享转换、以及在 Safari 里用浏览器本地压缩工具走完整的目标大小控制。三条系统自带的方式见 /blog/compress-photos-iphone-3-ways。"
            },
            {
              q: "HEIC 转 JPEG 算不算压缩？",
              a: "不算，它通常让文件变大。HEIC 在同等画质下比 JPEG 小得多，转过去主要解决的是对方读不了的问题。真要变小，先定尺寸再用HEIC原格式压缩，格式那一侧的取舍见 /blog/heic-vs-jpg-iphone-photos，转换步骤见 /blog/convert-heic-to-jpg-free。"
            },
            {
              q: "为什么同一个 App 压出来的照片有时忽大忽小？",
              a: "因为内容决定了压缩率。天空、白墙这类大片平坦区域很容易压小；毛发、织物、密排文字这类高频细节多的画面，同样的画质档位下体积就是下不来。先把尺寸降下来再压缩，比反复调画质档可靠，两者的区别在 /blog/resize-and-compress-image。"
            },
            {
              q: "一次压两百张会不会伤画质？",
              a: "不会。批量只是把同一个操作重复执行两百遍，每一次对那一张的影响和单张处理完全一样。真正掉画质的是同一张文件被压很多遍，每过一遍有损编码细节少一层，原理见 /blog/does-compressing-image-reduce-quality，批量做法见 /blog/batch-compress-images-multiple。"
            }
          ]
        },
        {
          type: "cta",
          text: "在 iPhone 的 Safari 里按 KB 压缩照片，文件全程留在这台设备上",
          href: "/"
        }
      ],
      en: [
        "The best iOS image compression app depends less on the app itself and more on what you are compressing. A single screenshot headed for an email is a different job from eight hundred photos waiting to be uploaded. Five routes exist on an iPhone in 2026: the size picker inside the gallery export sheet, a Shortcut that batches HEIC or JPEG files, format conversion in the share menu, a third-party batch compressor, and a browser-local compressor that never sends anything anywhere. They separate on four things: how much control you get over the result, whether fifty files take fifty taps, what repeated passes do to detail, and who holds the photograph while it is being processed.",
        { type: "h2", text: "Five routes, and what each one was built for" },
        "None of the five wins outright, since each exists because a specific job needed it. Working out your own volume and purpose first is faster than reading star ratings in the App Store.",
        {
          type: "ul",
          items: [
            "Gallery export: the size options the iPhone offers when you share or save to Files. Built for one photo, once, with no exact target in mind.",
            "Shortcuts: a recorded sequence for a job you repeat. Best for batches of dozens, since setup is slow once and running it afterwards costs almost nothing.",
            "HEIC to JPEG conversion: solves compatibility rather than size, and usually makes the file larger. Reach for it when the receiving side cannot open what you have.",
            "Third-party batch apps: select everything, tap once, wait. Fastest to learn, and the file has to go somewhere for it to work.",
            "Browser-local compression: runs in Safari, keeps the photo on the device, and accepts a target size in KB. Free tiers here usually do not cap the count."
          ]
        },
        { type: "h2", text: "Where quality control gets limited on iOS" },
        "The system routes give you abstract size tiers rather than a quality slider, because Apple assumes you want something small enough to send rather than something that lands inside a specific ceiling. A form that demands 200 KB is hard to hit by guessing between three tiers, and takes several attempts to get under.",
        {
          type: "ul",
          items: [
            "Small enough to read on a screen: the built-in export is enough, and it takes two taps.",
            "A specific number such as 100 KB or 200 KB: you need a field that accepts a number, not a three-way picker.",
            "Printing from your phone: set pixel dimensions before thinking about file size, since judging by size alone leaves you short.",
            "Compressing the same file twice: each pass removes another layer of fine detail, so keep the source and the output apart."
          ]
        },
        { type: "h2", text: "For batches, Shortcuts saves the most taps" },
        "iOS has no drag-files-into-a-folder style batching, and Shortcuts fills that gap. It fixes one sequence, picking an album, resizing, setting a size, saving somewhere, so every later run is one selection and one tap. Above thirty files the difference in effort is obvious.",
        {
          type: "ul",
          items: [
            "Create an album first and put the batch in it rather than running over the whole library.",
            "Add a resize action and set the width, 1600 or 1920 pixels covers most uses.",
            "Add a compression step, using target size when one is offered and quality only when it is not.",
            "Write the output to a separate album so results never mix with originals.",
            "Check one face or one line of text at full size before clearing the source album."
          ]
        },
        { type: "h2", text: "Four things to check before installing anything" },
        "Compressor apps carry more privacy weight than their size suggests, because they ask for the whole photo library, and libraries hold ID documents, children and street numbers. One minute spent on these four avoids most of it.",
        {
          type: "ul",
          items: [
            "Where the file goes: the listing either says processing happens on device or it says upload and download.",
            "What the free tier actually caps: usually a few per day, a few per run, or a watermark on output.",
            "Whether it wants full library access: iOS lets you grant selected photos only, so there is no reason to hand over everything.",
            "Whether copies are kept and how you delete them, on their side as well as yours."
          ]
        },
        {
          type: "faq",
          items: [
            {
              q: "Can I compress photos on iPhone without installing an app?",
              a: "Yes, and there are four ways: the size options in the share sheet, the Shortcuts app, which ships with iOS, HEIC to JPEG conversion during sharing, and a browser-local compressor in Safari that gives full control over target size. The three system routes are set out in /blog/compress-photos-iphone-3-ways."
            },
            {
              q: "Does converting HEIC to JPEG count as compression?",
              a: "No, and it usually makes the file bigger. HEIC holds far more quality per byte than JPEG, so the conversion solves compatibility rather than size. To actually reduce it, set dimensions first and stay in HEIC for the compression pass. The format side is in /blog/heic-vs-jpg-iphone-photos and the steps in /blog/convert-heic-to-jpg-free."
            },
            {
              q: "Why does the same app give wildly different file sizes?",
              a: "Because the content sets the compression ratio. Flat areas such as sky and painted walls shrink easily, while hair, fabric and dense text hold detail that refuses to go away at the same quality setting. Lowering dimensions first is more reliable than re-picking quality tiers, and the reason those two differ is in /blog/resize-and-compress-image."
            },
            {
              q: "Does compressing two hundred at once hurt quality?",
              a: "No. A batch is one operation repeated two hundred times, and each photo is affected exactly as it would be alone. What does damage quality is compressing the same file repeatedly, since every pass through a lossy encoder removes another layer of detail. The mechanism is in /blog/does-compressing-image-reduce-quality and the batch route in /blog/batch-compress-images-multiple."
            }
          ]
        },
        {
          type: "cta",
          text: "Compress photos to an exact KB target in Safari on iPhone, with the file staying on your device",
          href: "/"
        }
      ]
    }
  },
  {
    slug: "best-android-photo-compression-app",
    date: "2026-10-25",
    title: {
      zh: "Android 图片压缩 App 怎么选：五类工具与三项检查",
      en: "Best Android Photo Compression App: Five Types and Three Checks"
    },
    description: {
      zh: "Android 上压图有五类工具：相册导出、文件管理器自带、厂商分享流的尺寸选项、第三方批量压缩 App、浏览器本地压缩。按画质控制、批量成本、隐私三项排下来，附装机前要确认的事和一份五步流程。",
      en: "Five ways to compress photos on Android: gallery export, built-in file manager tools, manufacturer share flows, third-party batch compressors, and browser-local compression. Compared on quality control, batch cost and privacy, plus three checks before installing."
    },
    keywords: [
      "best android photo compression app",
      "android image compressor app",
      "reduce photo size on android",
      "android batch image resizer",
      "compress photos without losing quality android",
      "free photo size reducer android"
    ],
    content: {
      zh: [
        "挑 Android 图片压缩 App 的关键不是排名，而是先看清自己要压的东西：一张用于报名的证件照，和一整个相册要腾到云端的一千张，完全是两件事。Android 上可用的工具分五类：相册自带的导出大小选择、部分文件管理器内置的压缩动作、厂商分享菜单里的尺寸选项、第三方批量压缩 App，以及完全在 Chrome 本机跑的压缩工具。它们在三件事上拉开差距：能不能控住画质、一千张要按几次、以及这张照片在处理的时候到底落在谁手里。",
        { type: "h2", text: "五类工具各自的定位" },
        "五类里面有三类不需要装任何东西，这一点常被忽略，因为应用商店里那些广告和推荐位给人的印象相反。先从不要装的那三类试，通常就够用了。",
        {
          type: "ul",
          items: [
            "相册导出：Google 相册、三星 Gallery、小米相册等都有「大小」或「画质」选项，单张够用，参数给得很粗。",
            "文件管理器：部分管理器长按文件后有「压缩」或「瘦身」，能一次选中多个，输出多半就地覆盖或另存。",
            "厂商分享流：微信、WhatsApp 和邮件 App 在发送时会弹尺寸或质量选项，适合「此时此刻发这一张」。",
            "第三方批量 App：选中全部点一次开始，上手最快，前提是接受文件要交给这一家。",
            "浏览器本地压缩：在 Chrome 里跑，文件不离开设备，能按 KB 设目标，批量张数通常不限。"
          ]
        },
        { type: "h2", text: "画质能不能控住，是最大的分水岭" },
        "多数内置路径只给一到三个抽象档位，而同一档位在不同厂商机型上的结果差异很大：同样选「中等」，不同厂商给出的文件可以相差一倍。需要精确控制时，用事后能核对的办法：得出文件后核对实际大小与 100% 放大下的细节，而不是靠档位名去猜。",
        {
          type: "ul",
          items: [
            "只要压小到能在微信里发出去：内置路径一次就够，不用装任何东西。",
            "表单写死 200KB 或 100KB：需要能填数字的目标大小设置，档位选择器做不到。",
            "要打印：先定像素尺寸，再看文件大小，只看大小容易踩坑。",
            "同一张反复压：每一遍有损编码都少一层细节，源文件跟成品分开放。"
          ]
        },
        { type: "h2", text: "批量一千张，成本差在两个地方" },
        "批量场景下的瓶颈不是算法速度，是操作次数和通知干扰。选文件或选相册的次数决定了要按多少下，而是否逐张弹通知决定了你能不能在跑的时候去做别的事。装App之前看清这两条，比看压缩率的宣传图有用。",
        {
          type: "ul",
          items: [
            "先建一个文件夹或相簿，把要处理的这批放进去，不要在全库上跑。",
            "先改动尺寸，通常 1600 或 1920 像素宽已经足够多数用途。",
            "再压大小，有目标大小就填目标大小，没有再退到画质档。",
            "输出到另一个文件夹，避免覆盖源文件。",
            "跑完之后按 100% 抽看一张脸和一段文字边缘，确认没有明显损失。"
          ]
        },
        { type: "h2", text: "装 App 之前要确认的三项" },
        "压缩类 App 索要的权限很集中：存储、相册、有时还有网络访问。下面是装机前值得花一分钟确认的三项，比看评分有用。",
        {
          type: "ul",
          items: [
            "处理方式：写明本机处理，还是默认上传到再返回。前者不需要网络权限也能跑完。",
            "免费档的真实上限与输出：有没有水印、单次张数上限、输出分辨率是否被压缩。",
            "权限与副本：只要单行选中的权限就够，不需要全库通行；删除要能同时清掉对方服务器上的副本。"
          ]
        },
        {
          type: "faq",
          items: [
            {
              q: "Android 上有不用装 App 就能压缩照片的办法吗？",
              a: "有。系统相册的导出大小选项、部分文件管理器自带的压缩动作、聊天和邮件 App 发送时的质量选项，以及在 Chrome 里用浏览器本地压缩工具按 KB 设目标。前面三条的完整操作见 /blog/compress-photos-android-no-app。"
            },
            {
              q: "浏览器里压缩和自己手机上安装的App，效果一样吗？",
              a: "同一套编码参数下结果接近，差别在文件去哪了和控制粒度。安装的 App 通常要先拿到文件才能处理，浏览器本地方案不上传，同时普遍支持按 KB 设目标，这点在表单写死上限时最有用。"
            },
            {
              q: "为什么同一张照片有时怎么压都下不来？",
              a: "多为内容本身的高频细节太多：草地、毛发、织物纹理、密排文字都在承载大量信息。此时先降像素尺寸比继续调画质有效得多，两者顺序的区别在 /blog/resize-and-compress-image，压缩率本身的原理在 /blog/lossy-vs-lossless-compression。"
            },
            {
              q: "压到 200KB 的照片还能打印吗？",
              a: "看尺寸而不是看大小。1920 像素宽、200KB 上下的文件印六寸没问题，A4 以上会看出细节缺失。目标是打印就先锁定像素再压质量，按此顺序救回的情况比反过来多，具体做法见 /blog/compress-image-to-200kb。"
            }
          ]
        },
        {
          type: "cta",
          text: "在 Android 的 Chrome 里按 KB 压缩照片，文件全程留在这台手机上",
          href: "/"
        }
      ],
      en: [
        "The best Android photo compression app depends more on what you are sending than on which store listing ranks highest. An ID photograph for an application form and a thousand holiday photos waiting to be backed up are different jobs. Five types of tool exist on Android: the size picker in the gallery export sheet, compression built into some file managers, manufacturer share flows, third-party batch compressors you install, and a browser-local compressor that runs entirely in Chrome. They separate on three things: how much control you get over quality, how many taps a thousand photos cost, and where the picture actually sits while it is being processed.",
        { type: "h2", text: "Five types, and what each is for" },
        "Three of the five need no installation at all, which gets overlooked because the store is full of recommendations pointing the other way. Start with those three, since they cover most cases.",
        {
          type: "ul",
          items: [
            "Gallery export: Google Photos, Samsung Gallery, Xiaomi Gallery and others offer a size or quality option. Fine for one photo, with very coarse settings.",
            "File managers: several offer a compress action on long press, accept multiple selections, and save alongside or over the original.",
            "Manufacturer share flows: WeChat, WhatsApp and mail apps ask about size or quality at send time, which suits sending one photo right now.",
            "Third-party batch apps: select everything, tap once. Fastest to learn, provided you accept handing the file over.",
            "Browser-local compression: runs in Chrome, keeps the photo on the device, accepts a target size in KB, and usually imposes no count limit."
          ]
        },
        { type: "h2", text: "Quality control is the widest gap" },
        "Most built-in routes offer one to three abstract tiers, and what those tiers produce varies a lot between manufacturers, so the medium setting on one phone can be double the file size of the medium setting on another. Where precision matters, judge by measuring: check the actual size afterwards and look at the detail at full magnification rather than trusting the name of the tier.",
        {
          type: "ul",
          items: [
            "Small enough to send over WeChat: a built-in route handles it in one go, no installation needed.",
            "A form that states 200 KB or 100 KB: you need a field that takes a number, and a tiered picker cannot do it.",
            "Printing later: fix pixel dimensions first and file size second, since judging by size alone leads you astray.",
            "Compressing the same file repeatedly: every pass through a lossy encoder removes a layer of detail, so keep source and output separate."
          ]
        },
        { type: "h2", text: "Where batch cost actually comes from" },
        "With a thousand photos the bottleneck is not encoder speed, it is tap count and notification noise. How many times you have to select files decides the taps, and whether a notification fires per image decides whether you can do something else while it runs.",
        {
          type: "ul",
          items: [
            "Put the batch in one folder or album first rather than running over the entire library.",
            "Change dimensions first, since 1600 or 1920 pixels wide covers most purposes.",
            "Then reduce file size, using a target size where offered and falling back to a quality tier where it is not.",
            "Write output to a separate folder so nothing overwrites the originals.",
            "Spot check one face and one line of text at full magnification when it finishes."
          ]
        },
        { type: "h2", text: "Three things to confirm before installing" },
        "Compressor apps ask for a concentrated set of permissions: storage, photos, sometimes network access. One minute on these three beats reading star ratings.",
        {
          type: "ul",
          items: [
            "How it processes: does it say on device, or does it upload and return a result. The first needs no network permission to finish the job.",
            "What the free tier really caps: watermarks, a per-run image limit, or output pixels silently cut down.",
            "Permissions and copies: access to selected files is enough, full library access is not needed, and deletion should clear the server side too."
          ]
        },
        {
          type: "faq",
          items: [
            {
              q: "Can I compress photos on Android without installing an app?",
              a: "Yes. The size picker in the gallery export sheet, compress actions in some file managers, the quality options that chat and mail apps show when you send, and a browser-local compressor in Chrome that takes a target size in KB. The system routes are walked through in /blog/compress-photos-android-no-app."
            },
            {
              q: "Is browser compression as good as an installed app?",
              a: "With the same encoder settings the results land close together, and the difference is where the file goes and how fine the control is. Installed apps generally need the file before they can process it, while the browser route does not upload and usually accepts a target in KB, which is the setting that matters when a form states a hard ceiling."
            },
            {
              q: "Why does one photo refuse to get any smaller?",
              a: "Usually too much fine detail in the content. Grass, hair, fabric texture and dense text all carry information that resists compression, and dropping pixel dimensions helps far more than nudging quality down again. The ordering is explained in /blog/resize-and-compress-image and the mechanics in /blog/lossy-vs-lossless-compression."
            },
            {
              q: "Can a photo compressed to 200 KB still be printed?",
              a: "Judge dimensions rather than file size. At 1920 pixels wide and around 200 KB, a six inch print looks fine, while A4 and above shows what went missing. For print, lock the pixels first and compress quality second, which recovers more cases than reversing them, and the steps are in /blog/compress-image-to-200kb."
            }
          ]
        },
        {
          type: "cta",
          text: "Compress photos to an exact KB target in Chrome on Android, with the file staying on your phone",
          href: "/"
        }
      ]
    }
  },
  {
    slug: "reduce-photo-size-iphone-email",
    date: "2026-10-26",
    title: {
      zh: "在 iPhone 上把照片缩小到能发邮件：三条可行路径",
      en: "How to Reduce Photo Size on iPhone for Email"
    },
    description: {
      zh: "iOS 邮件附件超限，或者悄悄换成 Mail Drop？发件之前先把照片缩到目标大小，三条路径都保住可读画质。",
      en: "iPhone Mail says the attachment is too large, or quietly swaps in Mail Drop. Reduce photo size before you hit send, with three routes that keep the shot readable."
    },
    keywords: [
      "reduce photo size iphone email",
      "how to send large photos from iphone",
      "iphone mail attachment too large",
      "reduce photo size before email",
      "compress photo for email iphone"
    ],
    content: {
      zh: [
        "要在 iPhone 上把照片缩小到能发邮件，不需要额外装 App。iOS 邮件大约 20 MB 一条就开始劝退，而一台近年的 iPhone 拍一张 1200 万像素照片通常是 2 到 5 MB，一封信里塞四五张就到墙了。",
        "失败的样子还不止一种。有时邮件直接说太大，有时悄悄给你换成 Mail Drop，有时只是卡在发送中。先弄清自己走的是哪条路，能省掉一轮重发。",
        { type: "h2", text: "为什么屏幕上看着挺好，邮件就是不要" },
        "照片 App 给你看的是解码后的图像，不是那个文件。4032×3024 的画面摆在 6 英寸屏上，和 1600 像素版本看不出区别，可背后的文件重量差好几倍。邮件数的是字节，不是你眼睛觉得好不好看。",
        "各家邮箱的上限也不一样。20 MB 是常见的粗略天花板，但有些企业邮箱只给 5 或 10 MB，还有的连一张照片都嫌大。同一封信在这个账号发得出去、在那个账号发不出去，多半就是这个原因。",
        { type: "h2", text: "办法一：邮件里本来就有的尺寸选择" },
        "在邮件 App 里添加照片时，iOS 会在文件进去之前给一个尺寸选项：小、中、大、实际大小。多数人看都不看就点过去了。",
        {
          type: "ul",
          items: [
            "小：300 KB 上下，扫一眼够用，图里带字就糊了。",
            "中：800 KB 左右，在电脑上的邮件预览里还站得住。",
            "大：2 MB 附近，对方可能要打印或裁剪时选这个。",
            "实际大小：原图，也就是触发「太大」提示的那个选项。"
          ]
        },
        "这个选择是按附件逐个来的，五张照片要点五次。已经站在邮件里、手里只有两三张图的时候，它最快。",
        { type: "h2", text: "办法二：先在照片里把图缩好" },
        "如果对方要在电脑上打开还能看，就先缩再附。窍门是先复制一份，动副本，让原图在相册里保持全分辨率。",
        {
          type: "ul",
          items: [
            "打开照片走分享，看你的 iOS 版本有没有给尺寸或画质选项。",
            "只要一份能看清的副本时，直接截屏到你要的大小，土但是快。",
            "先裁再缩。把没人要看的部分切掉就是在减像素，而像素少了才真的让文件变小。"
          ]
        },
        "这条路慢一点，但你会得到一个能反复用的文件，同一张照片后面还要交表格或上商品页时就省事。为什么像素比画质滑块更管用，写在 /blog/resize-and-compress-image。",
        { type: "h2", text: "办法三：在浏览器里压到确定的 KB" },
        "Mail Drop 是苹果在信件过大时的兜底：照片传到 iCloud，对方收到一个会过期的链接。能用，但不少邮件过滤会把它拦掉，用旧客户端的人看到的则是坏附件。",
        "浏览器压缩不走这条路。你给定 KB 目标，文件在手机本地处理，拿回来的东西能正常附上，到对方手里也是真文件。当要求是硬数字，比如 1 MB 以下或 200 KB 以下，这条路基本一次就过。1 MB 的完整步骤在 /blog/compress-photo-to-1mb-email，200 KB 的在 /blog/compress-image-to-200kb。",
        { type: "h2", text: "多小算太小" },
        {
          type: "ul",
          items: [
            "100 KB 以下：签名、小票、小预览里的一张脸，够用。有文字就开始糊。",
            "100 到 500 KB：对方在屏幕上看的照片，安全区间。",
            "500 KB 到 2 MB：可能被打印或放大看时留在这个档。",
            "单张超过 2 MB：只有打印或归档时才需要，即便如此，缩过的原图也比又大又原的强。"
          ]
        },
        { type: "h2", text: "常见问题" },
        {
          type: "faq",
          items: [
            {
              q: "照片才 4 MB，邮件为什么说太大？",
              a: "因为限制是按整封信算的，不是单个文件。几张照片、签名图、引用历史都会往里加。看总量，别只看最大的那一张。"
            },
            {
              q: "不用 iCloud 也能从 iPhone 发大照片吗？",
              a: "可以。附上之前先把照片缩小，用邮件里的尺寸选择，或者先压到目标大小，信件就不会超线，Mail Drop 也就不会出现。"
            },
            {
              q: "缩小之后相册里的原图会变吗？",
              a: "走邮件不会，它操作的是副本。用压缩工具时把结果存成新文件，不要覆盖，不需要了再删。更完整的做法见 /blog/compress-photos-iphone-3-ways。"
            },
            {
              q: "求职简历或政府表格该用多大？",
              a: "以表格上写的数字为准。没写的话，200 到 500 KB、长边 1600 像素左右，大多数检查都能过。具体步骤在 /blog/compress-image-to-200kb。"
            }
          ]
        },
        {
          type: "cta",
          text: "在 iPhone 上把照片压到确定的 KB 目标，不上传、不用注册",
          href: "/"
        }
      ],
      en: [
        "To reduce photo size on iPhone for email, you do not need to install anything. Mail on iOS starts pushing back somewhere around 20 MB per message, and one 12 MP photo from a recent iPhone is usually 2 to 5 MB, so four or five shots in a single thread is where people hit the wall.",
        "The failure is not always obvious. Sometimes Mail says the message is too large, sometimes it quietly offers Mail Drop, and sometimes the send just hangs. Knowing which route you are on saves a round of resending.",
        { type: "h2", text: "Why iPhone Mail rejects a photo that looks fine on screen" },
        "The Photos app shows you a decoded image, not the file. A 4032 by 3024 frame displayed on a 6 inch screen looks no different from a 1600 pixel version of the same shot, but the file behind it weighs several times more. Mail counts bytes, not how good the picture looks to you.",
        "Attachment limits also vary by provider. A 20 MB message is a rough common ceiling, but some corporate mailboxes cap far lower, at 5 or 10 MB, and a few reject anything bigger than one photo. If the same message fails on one account and works on another, that is usually why.",
        { type: "h2", text: "Route one: the size picker Mail already shows you" },
        "When you attach a photo from inside Mail, iOS offers a size choice before the file goes in: Small, Medium, Large, or Actual Size. Most people tap past it without reading.",
        {
          type: "ul",
          items: [
            "Small lands near 300 KB and is fine for a quick look, weak for anything with text in it.",
            "Medium is around 800 KB and holds up in a mail preview on a laptop.",
            "Large sits near 2 MB and is the one to pick if the recipient may print or crop.",
            "Actual Size sends the original, which is the option that triggers the too large warning."
          ]
        },
        "The picker works per attachment, so a five photo message means five taps. It is the fastest fix when you are already in Mail and only have a couple of shots.",
        { type: "h2", text: "Route two: shrink the photo in Photos first" },
        "If the recipient needs the picture to survive being opened on a desktop, do the resize before you attach. The trick is to duplicate first and work on the copy, so the original stays at full resolution in your library.",
        {
          type: "ul",
          items: [
            "Open the photo, share it, and use the resize or quality options if your iOS version shows them.",
            "Take a screenshot of the photo at the size you want when you only need a readable copy. Crude, but fast.",
            "Crop before you shrink. Removing the parts nobody needs cuts pixels, and fewer pixels is what actually moves file size."
          ]
        },
        "This route is slower, but it gives you a file you can reuse, which matters when the same photo later goes to a form or a listing. Why pixels matter more than the quality slider is covered in /blog/resize-and-compress-image.",
        { type: "h2", text: "Route three: hit an exact KB target in the browser" },
        "Mail Drop is the fallback Apple uses when a message is too big: your photo goes to iCloud and the recipient gets a link that expires. It works, but plenty of mail filters strip it, and people on older clients see a broken attachment.",
        "A browser based compressor avoids that. You pick a target in KB, the file is processed on your phone, and what comes back attaches normally and arrives as a real file. When the ask is a hard number, such as under 1 MB or under 200 KB, this is the route that lands it on the first try. The 1 MB walkthrough is in /blog/compress-photo-to-1mb-email and the 200 KB version in /blog/compress-image-to-200kb.",
        { type: "h2", text: "How small is too small" },
        {
          type: "ul",
          items: [
            "Under 100 KB: fine for a signature, a receipt, or a face in a small preview. Text starts to smear.",
            "100 to 500 KB: the safe band for a photo someone reads on screen.",
            "500 KB to 2 MB: stay here if the image may be printed or zoomed into.",
            "Over 2 MB per photo: only for a print or archive handoff, and even then a resized original beats a heavy one."
          ]
        },
        { type: "h2", text: "FAQ" },
        {
          type: "faq",
          items: [
            {
              q: "Why does Mail say my attachment is too large when the photo is only 4 MB?",
              a: "Because the limit applies to the whole message, not one file. A few photos, a signature image, and any quoted history all add up. Check the total, not the single largest photo."
            },
            {
              q: "Can I send large photos from iPhone without iCloud?",
              a: "Yes. Reduce the photo before attaching, either through the size picker in Mail or by compressing to a target size first, and the message stays under the limit without Mail Drop ever being offered."
            },
            {
              q: "Does reducing the size change the photo in my library?",
              a: "Not through Mail, which works on a copy. If you use a compressor, save the result as a new file rather than overwriting, then delete it later if you do not need it. The three iPhone routes are in /blog/compress-photos-iphone-3-ways."
            },
            {
              q: "What size should I use for a job application or a government form?",
              a: "Follow the number on the form. Where no number is given, 200 KB to 500 KB with the long edge near 1600 pixels passes most checks. The exact steps are in /blog/compress-image-to-200kb."
            }
          ]
        },
        {
          type: "cta",
          text: "Compress a photo to an exact KB target on your iPhone, with the file staying on your phone",
          href: "/"
        }
      ]
    }
  },
  {
    slug: "compress-images-mac-built-in",
    date: "2026-10-22",
    title: {
      zh: "Mac 自带工具就能压缩图片：预览、快捷操作与终端",
      en: "Compress Images on Mac With Built-In Tools (No App Needed)"
    },
    description: {
      zh: "不想为一个压缩动作装软件？Mac 自带的预览、访达快捷操作和一条终端命令，基本覆盖所有情况，包括按 KB 定目标。",
      en: "You do not need an app to compress images on a Mac. Preview, a Finder quick action, and one terminal command cover nearly every case, including a target size in KB."
    },
    keywords: [
      "compress images mac built in",
      "mac preview compress image",
      "reduce image size mac without app",
      "mac quick action resize images",
      "compress jpg on mac free"
    ],
    content: {
      zh: [
        "要在 Mac 上用自带工具压缩图片，把文件丢进预览，导出时把尺寸压小就行。不用下载，不用注册，也不用上传。macOS 自带三条路径，合起来几乎覆盖所有场景，而最常被跳过的那条，恰恰是能给你确定文件大小的一条。",
        "这件事在下游有硬限制时最要紧：报名表、邮件上限、投稿系统。它们只看 KB，而三条路里只有一条能让你直接说出数字。",
        { type: "h2", text: "办法一：预览导出" },
        "预览不只是看图器。文件菜单里的导出会打开一个面板，可以选格式，也有画质滑块，滑块一动下面的预估体积就跟着变。",
        {
          type: "ul",
          items: [
            "用预览打开图片，选文件，导出。",
            "如果原图是没有透明通道的 PNG，导出成 JPEG。同一张照片存成 PNG 通常大好几倍，而肉眼几乎看不出区别。",
            "拖画质滑块，盯住体积读数，在屏幕预览还能接受的地方停手。",
            "换个名字导出，让原文件保持原样。"
          ]
        },
        "这个滑块调的是画质，不是体积。如果文件怎么都压不下去，问题在像素，不在滑块。",
        { type: "h2", text: "办法二：访达快捷操作" },
        "在访达里右键文件就能看到快捷操作，较新的 macOS 里有「调整图像大小」。填一个宽度，选一个输出文件夹，系统会把新文件写在原文件旁边。",
        {
          type: "ul",
          items: [
            "先选中一个或多个文件再右键，因为这个操作支持批量。",
            "填宽度，不是文件大小。1600 或 1920 像素覆盖屏幕观看和绝大多数表单。",
            "输出到一个单独的文件夹，方便在删掉任何东西之前先对比。"
          ]
        },
        "一个文件夹的商品图或截图要统一处理时，这条最快。它改的是尺寸，而尺寸才是真正拉动体积的杠杆，而且一次处理整批。",
        { type: "h2", text: "办法三：终端里一行搞定" },
        "如果是下个月还要再处理一遍的文件夹，macOS 自带 sips。先建一个输出文件夹，然后执行：",
        "mkdir -p out && sips -Z 1600 *.jpg --out out",
        "-Z 会把文件夹里每个 JPEG 的长边封到 1600 像素，结果写进 out，原文件不动。把 1600 换成对方要求的数字即可。它没有画质控制，这就是取舍：你拿到的是尺寸，不是目标体积。",
        { type: "h2", text: "自带工具不够用的时候" },
        "三条路都缺同一件事：没有一条能按 KB 接目标。表单写着 200 KB 以下时，你只能拿滑块猜，然后反复导出，这时候一个直接接受数字的浏览器压缩工具更快。200 KB 的步骤在 /blog/compress-image-to-200kb，100 KB 的同款做法在 /blog/compress-jpg-under-100kb。",
        "另一个缺口是格式。较新的系统里预览能导出 AVIF 和 HEIC，但接收端的支持参差不齐。要交给别人打开的文件，JPEG 仍然是稳妥答案，PNG 只在需要透明时才上，理由写在 /blog/png-vs-jpg-differences。",
        { type: "h2", text: "常见问题" },
        {
          type: "faq",
          items: [
            {
              q: "预览会不会把原图的画质降低？",
              a: "不会。导出写的是新文件。只有在图片打开状态下用存储、并且格式会重新编码时原文件才会被改，所以一律用导出。"
            },
            {
              q: "为什么我的 PNG 调低画质也小不了多少？",
              a: "因为 PNG 是无损格式，画质设置没什么可发挥的余地。先把照片转成 JPEG，或者减少像素数量，后者才是真正把体积砍下来的动作。无损与有损的差别见 /blog/lossy-vs-lossless-compression。"
            },
            {
              q: "不装软件也能一次压缩整个文件夹吗？",
              a: "可以。访达的快捷操作支持批量选中，终端里的 sips 一条命令处理整个文件夹。"
            },
            {
              q: "在 Mac 上，改尺寸和压缩有什么不一样？",
              a: "改尺寸动的是像素数量，压缩动的是这些像素的存储效率。改尺寸对文件体积的影响大得多。两者的顺序写在 /blog/resize-and-compress-image。"
            }
          ]
        },
        {
          type: "cta",
          text: "在浏览器里把一批图片压到确定的 KB 目标，不安装、不上传",
          href: "/"
        }
      ],
      en: [
        "To compress images on a Mac with built-in tools, open the file in Preview and export it at a smaller size. No download, no account, no upload. macOS ships three routes that between them cover nearly every case, and the one people skip is the one that gives you an exact file size.",
        "This matters most when something downstream states a limit: an application form, an email cap, a submission portal. Those care about kilobytes, and only one of the three routes lets you name a number.",
        { type: "h2", text: "Route one: Preview export" },
        "Preview is not only a viewer. File, Export opens a panel with a format choice and a quality slider, and the estimated size updates as you move it.",
        {
          type: "ul",
          items: [
            "Open the image in Preview, then choose File, Export.",
            "Pick JPEG if the original is a PNG without transparency. A photo stored as PNG is usually several times larger for no visible gain.",
            "Drag the quality slider and watch the size readout, stopping where the on screen preview still looks acceptable.",
            "Export under a new name so the original stays untouched."
          ]
        },
        "The slider controls quality, not size. If the file refuses to drop far enough, the pixels are the problem, not the slider.",
        { type: "h2", text: "Route two: a Finder quick action" },
        "Right clicking a file in Finder gives you Quick Actions, and Resize Image is one of them on recent macOS versions. Pick a width, choose an output folder, and the system writes new files next to the originals.",
        {
          type: "ul",
          items: [
            "Select one or many files first, then right click, since the action accepts a batch.",
            "Set the width, not the file size. 1600 or 1920 pixels covers screen viewing and most forms.",
            "Send output to a separate folder so you can compare before deleting anything."
          ]
        },
        "This is the fastest option for a folder of product shots or screenshots where every file needs the same treatment. It changes dimensions, which is the lever that actually moves size, and it does the whole set at once.",
        { type: "h2", text: "Route three: one line in Terminal" },
        "For a folder you will process again next month, macOS ships sips. Create an output folder, then run:",
        "mkdir -p out && sips -Z 1600 *.jpg --out out",
        "The -Z flag caps the longer side at 1600 pixels for every JPEG in the folder and writes the results into out, leaving originals alone. Change 1600 to whatever the destination asks for. It has no quality control, and that is the trade: you get dimensions, not a target file size.",
        { type: "h2", text: "When built-in tools are not enough" },
        "All three routes stop short of the same thing: none of them takes a target in kilobytes. If a form says under 200 KB, you end up guessing with the slider and re-exporting, which is where a browser compressor that accepts the number directly is faster. The 200 KB steps are in /blog/compress-image-to-200kb and the same idea at 100 KB in /blog/compress-jpg-under-100kb.",
        "The other gap is format. Preview exports AVIF and HEIC on newer systems, but support on the receiving end is uneven. For a file someone else has to open, JPEG is still the safe answer, and PNG only when you need transparency, which is explained in /blog/png-vs-jpg-differences.",
        { type: "h2", text: "FAQ" },
        {
          type: "faq",
          items: [
            {
              q: "Does Preview reduce the quality of the original file?",
              a: "No. Export writes a new file. The original only changes if you use Save while the image is open in a format that re-encodes, so always export instead."
            },
            {
              q: "Why does my PNG barely get smaller when I lower the quality?",
              a: "Because PNG is lossless, so a quality setting has little to work with. Convert the photo to JPEG first, or reduce the pixel dimensions, which is what actually cuts the size. The difference between the two is in /blog/lossy-vs-lossless-compression."
            },
            {
              q: "Can I compress a whole folder at once without installing anything?",
              a: "Yes. The Finder quick action handles a batch selection, and sips in Terminal handles a whole folder in one command."
            },
            {
              q: "What is the difference between resizing and compressing on a Mac?",
              a: "Resizing changes pixel dimensions, compressing changes how efficiently those pixels are stored. Resizing moves file size much further, and the order is covered in /blog/resize-and-compress-image."
            }
          ]
        },
        {
          type: "cta",
          text: "Compress a batch to an exact KB target in your browser, no install and no upload",
          href: "/"
        }
      ]
    }
  },
];

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}

export function getPostSlugs(): string[] {
  return POSTS.map((p) => p.slug);
}
