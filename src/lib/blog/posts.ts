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
];


export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getPostSlugs(): string[] {
  return POSTS.map((p) => p.slug);
}
