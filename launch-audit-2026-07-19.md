# 出海 SaaS 10 项上线工作 · 真实完成度审计

> 项目：image-compressor-saas ｜ 审计日期：2026-07-19
> 依据：`dafeixiang-saas-launch` skill 的「MVP 搭建 10 项工作」+「上线前安全审计清单」
> 方法：逐项读取实际代码/配置，非凭记忆

## 总览

| # | 工作项 | 状态 | 关键说明 |
|---|--------|------|----------|
| 1 | 需求设计（规划/UI/技术框架） | ⚠️ 部分 | 决策已落地代码，但缺正式三文档 + Spec 文件 |
| 2 | MVP 搭建（脚手架） | ✅ 完成 | 路由/布局/组件/globals 齐全 |
| 3 | 中英文 i18n | ✅ 完成 | 词典全量 + 持久化 |
| 4 | 亮黑 UI 设定 | ✅ 完成 | 双主题 Token + 持久化（小瑕疵） |
| 5 | 谷歌登录 | ✅ 代码完成 | 待生产环境验证 + 配回调 |
| 6 | 收付款对接 | ⚠️ 待修 | 2 个问题（1×P1 安全，1×P2 展示） |
| 7 | GA4 + 热力监控 | ⚠️ 部分 | 1×P1：未加 isProd 守卫 |
| 8 | 移动端适配 | ✅ 骨架完成 | 待 Phase 4 全量核验（375px） |
| 9 | 安全检测 | ⚠️ 待收口 | webhook 验签 2 处漏洞 + npm audit |
| 10 | SEO 操作 | ⚠️ 待修 | 1×P1 hreflang 死链 + 子页缺 metadata |

**结论：4 项已实质完成（2/3/4/5），6 项有未完项（1/6/7/8/9/10）。**
**上线前必须修的 P1：第 6 项 webhook 验签、第 7 项 GA4 守卫、第 10 项 hreflang。**

---

## 逐项明细

### ① 需求设计 — ⚠️ 部分
- ✅ 技术栈已锁定并落地：Next.js + Neon(Postgres) + NextAuth(Google) + PayPal + Vercel。i18n/主题/认证/支付/分析方案均已确定。
- ❌ **缺正式产物**：仓库内无 PRD / 架构文档 / UIUX 文档 / Spec 文件。决策散落在代码里，无留档。
- 建议：补一份轻量 `docs/SPEC.md`（范围、API、DB、页面、Token、验收标准），非阻塞但利于后续维护。

### ② MVP 搭建脚手架 — ✅ 完成
- ✅ `app/` 路由、`layout.tsx`、`components/`、`lib/`、`globals.css` 齐全；`dev`/`start` 可起服务。
- 注：Windows 下 Turbopack 崩溃，已用 `next start` 生产模式绕开，属环境非代码问题。

### ③ 中英文 i18n — ✅ 完成
- ✅ `src/lib/i18n.ts` 中英文全量词典（含 FAQ/定价/子页）；`lang-context.tsx` localStorage 持久化；切语言全站文案跟随。
- ✅ 无残留中文/英文字面量（文案全走 key）。
- 注：语言是**客户端 context 切换**，不是独立 `/en` 路由（这与第 10 项 hreflang 冲突，见下）。

### ④ 亮黑 UI 设定 — ✅ 完成（小瑕疵）
- ✅ `globals.css` 定义 `:root` + `[data-theme="dark"]` 双套 Token（主色/背景/文字/边框/语义色）；`theme-context.tsx` 持久化；刷新保持。
- ✅ 组件颜色大多引用 `var(--token)`。
- 🟡 小瑕疵：部分内联样式带兜底色值（如 `#fff`、`#1f2430`），属 `var()` fallback，非硬写死，可接受。

### ⑤ 谷歌登录 — ✅ 代码完成（待生产验证）
- ✅ `src/lib/auth.ts`（NextAuth + Google + DrizzleAdapter）、`[...nextauth]`、HeaderClient 登录/登出、SessionProvider 齐全。
- ✅ 需鉴权路由（usage）经 `auth()` 校验，未登录返 401。
- ⚠️ 沙箱网络无法连 Google（环境限制，非代码问题）；生产需在 Google Cloud Console 配回调 URL。代码层面 OK。

### ⑥ 收付款对接 — ⚠️ 待修（1×P1，1×P2）
- ✅ 下单落库（`create-order` 写入 pending 订单）；capture 从 DB 映射取 plan **不读请求体**；校验 `session.user.id === 订单归属`；幂等（completed 直接返回）；webhook 验签框架在。
- 🔴 **P1（安全/生产阻塞）**：`webhook/route.ts` 的 `verifyWebhookSignature` **硬编码调用 `api-m.sandbox.paypal.com`**，不读 `PAYPAL_SANDBOX`。上线切生产（`PAYPAL_SANDBOX=false`）后验签必失败 → webhook 全拒。
  - 修复：按 `PAYPAL_SANDBOX` 选 `api-m.paypal.com` / `api-m.sandbox.paypal.com`。
- 🔴 **P1（安全）**：`PAYPAL_WEBHOOK_ID` 未配置时函数直接 `return true`（fail-open）。生产若漏配，webhook 不验签就放行。
  - 修复：生产环境应 fail-closed（缺 ID 直接 401），或强制要求配置。
- 🟡 **P2（展示）**：定价展示不一致——定价页对中文显示 `¥18/¥168`，PayPal 实际收 USD `$4.99/$49.99`；`i18n.ts` 字典里还是旧价（`$5/$49`）。双数据源、币种混用，用户易困惑。
  - 修复：统一以 `PLAN_PRICES` 为唯一真源，明确币种（建议全站 USD 或明确标注）。

### ⑦ GA4 + 热力监控 — ⚠️ 部分（1×P1）
- 🔴 **P1**：`layout.tsx` 的 gtag **无条件加载**，未加 `isProd` 守卫（`NODE_ENV==='production' && VERCEL_ENV!=='preview'`）。localhost / Vercel Preview 会污染 GA4 数据。
  - 修复：包一层 `if (isProd) { ... }`。
- 🟡 热力图（Clarity/Hotjar）未接入（清单为"如…"可选，但建议加，仅生产加载）。

### ⑧ 移动端适配 — ✅ 骨架完成（待核验）
- ✅ `globals.css`：480px 媒体查询、`button/a/input` 最小 44px、`box-sizing: border-box`、`img{max-width:100%}`；布局 flex/grid + `auto-fit minmax`。
- ⏳ 待做：Phase 4 全量核验——375px 无横向滚动、tap 目标够大、核心流程（压缩/登录/支付）触屏走通。代码层已铺好，未做真机核验。

### ⑨ 安全检测 — ⚠️ 待收口
- ✅ `next.config.ts` 安全头齐全：CSP / HSTS / X-Frame-Options / X-Content-Type-Options / Referrer-Policy。
- ✅ 路由鉴权（usage/auth）、配额服务端强制（超限 403）、capture plan 映射（防越权）。
- ✅ 压缩/下载全在客户端，**无服务端上传/下载路由** → magic-byte 校验、Content-Disposition 文件名净化 N/A（无服务端文件落地）。
- 🔴 webhook 验签 sandbox 硬编码 + fail-open（同第 6 项，需收口）。
- 🟡 `npm audit`：7 moderate（postcss XSS via `</style>`）。**⚠️ 勿用 `npm audit fix --force`**（会把 Next 降到 9.x）。按 skill 指引单独 `npm i postcss@latest` 修复。
- N/A：Supabase RLS（本项目用 Neon + Drizzle，无 service_role / storage bucket 概念）。

### ⑩ SEO 操作 — ⚠️ 待修（1×P1，1×P2）
- ✅ `sitemap.xml`、`robots.txt`、`layout.tsx` JSON-LD(WebApplication)、root metadata 齐全。
- 🔴 **P1**：hreflang 指向 `/en` 但**该路由不存在**（i18n 是客户端切换，无 `/en` 页）→ 访问 `/en` 返回 404，sitemap 里的 `/en` 链接也是死链。同时 `<html lang>` 硬编码 `zh-CN`，切英文不更新。
  - 修复二选一：(a) 补 `[lang]` 动态路由或 `/en` 页；(b) 移除 hreflang 的 `/en` 互指（因无独立英文路由）。
- 🟠 子页（`pricing/faq/blog/privacy/terms/contact`）均无独立 `export const metadata` → 标题/描述全复用 root，Google 视为重复内容。
  - 修复：每页补 `metadata`（title/description），或用 `generateMetadata`。

---

## 上线前必须修（P1，按优先级）

1. **第 6 项 webhook 验签域名**：`verifyWebhookSignature` 改为按 `PAYPAL_SANDBOX` 选 sandbox/生产域名。
2. **第 6 项 webhook fail-closed**：生产缺 `PAYPAL_WEBHOOK_ID` 时拒绝而非放行。
3. **第 7 项 GA4 守卫**：gtag 仅 `isProd` 加载。
4. **第 10 项 hreflang 死链**：补 `/en` 路由或移除 `/en` 互指；`html lang` 随切换更新。

## 建议顺手做（P2 / 非阻塞）
- 第 10 项子页 metadata。
- 第 6 项定价展示统一（币种/真源）。
- 第 9 项 `npm i postcss@latest`。
- 第 8 项 375px 真机核验。
- 第 1 项补轻量 Spec 留档。

## 仍需用户手动（非代码）
- Google Cloud Console 加生产回调 URL。
- PayPal 注册 webhook 拿 `PAYPAL_WEBHOOK_ID` 配到 Vercel，并把站点域名加入 Allowed payment source domains + App Go Live。
- Vercel 生产环境变量设 `PAYPAL_SANDBOX=false` 及各项 secret。

---

## ✅ P1 修复记录（2026-07-19 已处理）

| P1 | 文件 | 改动 |
|----|------|------|
| ⑥ webhook 验签域名 | `src/app/api/payments/webhook/route.ts` | `verifyWebhookSignature` 改用 `PAYPAL_SANDBOX` 动态选 `api-m.paypal.com` / `api-m.sandbox.paypal.com`（oauth + verify 两处） |
| ⑥ webhook fail-closed | `src/app/api/payments/webhook/route.ts` | 生产环境（`NODE_ENV==='production'`）缺 `PAYPAL_WEBHOOK_ID` 时 `return false` 拒绝；非生产才跳过（dev 便利） |
| ⑦ GA4 守卫 | `src/app/layout.tsx` | gtag 两段 `<script>` 包进 `isProd` 守卫（`NODE_ENV==='production' && VERCEL_ENV!=='preview'`），localhost/Preview 不再加载 |
| ⑩ hreflang 死链 | `src/app/layout.tsx` + `public/sitemap.xml` | 移除指向不存在 `/en` 路由的 hreflang 互指（保留 zh-CN + x-default） |
| ⑩ html lang 跟随 | `src/components/lang-context.tsx` | 新增 effect：`document.documentElement.lang` 随语言切 `zh-CN`/`en` |

验证：`npx tsc --noEmit` 通过（exit 0）。

### 剩余未完（非 P1，建议后续）
- ① 补轻量 Spec 留档
- ⑥ 定价展示 ¥/$ 统一（币种/真源）
- ⑧ 375px 真机核验
- ⑨ `npm i postcss@latest`（修 7 moderate，勿 `--force`）
- ⑩ 子页独立 metadata（pricing/faq/blog/privacy/terms/contact 为 client 组件，需 server 包裹或 generateMetadata）
