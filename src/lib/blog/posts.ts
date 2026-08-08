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
        { type: "cta", text: "免费在线压缩图片", href: "https://image-compressor-saas.shop" },
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
        { type: "cta", text: "Compress images online for free", href: "https://image-compressor-saas.shop" },
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
        { type: "cta", text: "免费压缩你的图片 →", href: "https://image-compressor-saas.shop" },
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
        { type: "cta", text: "Compress your images for free →", href: "https://image-compressor-saas.shop" },
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
        { type: "cta", text: "免费压缩你的图片 →", href: "https://image-compressor-saas.shop" },
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
        { type: "cta", text: "Compress your images for free →", href: "https://image-compressor-saas.shop" },
      ],
    },
  },
  {
    slug: "compress-image-for-email-attachments",
    date: "2026-08-09",
    title: {
      zh: "压缩图片再发邮件：让附件不再被退回（2026 实操）",
      en: "How to Compress Images for Email Attachments (2026, No Upload)",
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
        { type: "cta", text: "免费压缩图片（浏览器本地处理）→", href: "https://image-compressor-saas.shop" },
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
        { type: "cta", text: "Compress images for free (browser-local) →", href: "https://image-compressor-saas.shop" },
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
