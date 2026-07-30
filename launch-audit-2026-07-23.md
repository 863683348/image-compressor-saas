# 出海 SaaS 10 项上线工作 · 2026-07-23 审计

## 总览

| 项 | 工作 | 状态 | 问题 |
|----|------|------|------|
| ① | 需求设计 | ❌ | 缺正式三文档+Spec |
| ② | MVP搭建 | ⚠️ | 骨架OK，缺自动化验证链 |
| ③ | 中英文(i18n) | ✅ | 124+ key，zh/en 成对，persist |
| ④ | 亮黑UI | ✅ | Token 完整，light/dark 覆盖 |
| ⑤ | 谷歌登录 | ❌ | 线上 Configuration 报错未解决 |
| ⑥ | 收付款 | ⚠️ | 代码完成，定价 display vs charge 金额混用 |
| ⑦ | GA4 | ✅ | 基础完成（isProd 守卫） |
| ⑧ | 移动端 | ⚠️ | 骨架完成，缺 375px 核验 |
| ⑨ | 安全 | ⚠️ | 头/webhook/幂等 OK，npm audit 有 7 漏洞 |
| ⑩ | SEO | ⚠️ | 首页完备，子页缺独立 metadata |

**完成 3 项 | 待修 7 项 | P1 问题 2 个**

---

## ① 需求设计 — ❌ 未完成

**缺失**：
- saas/ 目录下无 PRD / 架构 / UIUX 三文档
- 无 Spec 契约文档（锁定范围/API/DB/页面/Token）
- 工作区根目录有 `图片压缩网站_需求文档与方案.md` 和 `图片压缩网站_PRD文档.md`，但技术选型对比矩阵、设计 Token 规范、验收标准（Given/When/Then）未成文

**修复**：补一份轻量 Spec（功能/API/DB/页面/Token 锁定），放到 `saas/docs/spec.md`。不要求像大企业那么重，但团队内部契约必须有。

---

## ② MVP搭建 — ⚠️ 骨架完成、缺验证链

**完成**：
- 路由骨架：`app/(home | pricing | faq | blog | privacy | terms | contact | auth)` ✓
- 组件分层：`components/`（HeaderClient / Footer / lang-context / theme-context）、`lib/`（auth / i18n / paypal / compress）、`db/`（schema / index）✓
- i18n / 主题 / mobile-first 骨架随脚手架铺好 ✓

**缺失**：
- 无自检验证链（lint → type-check → test 自动化，fail ≤3 轮自修复）
- `next build` 在本地因 favicon.ico 损坏报错过一次，线上已修（换 icon.svg），但本地 favicon.ico 仍在 tracking

**修复**：无阻塞操作。可在 CI/CD 中加 lint/type-check/test 步骤。

---

## ③ 中英文(i18n) — ✅ 完成

- `lib/i18n.ts`：zh/en 双字典，124+ key 完全成对 ✓
- `lang-context.tsx`：localStorage 持久化 + `document.documentElement.lang` 跟随 ✓
- 含变量插值（`quotaUsed(n,m)`）✓
- 无硬编码字面量残留（验证通过）✓

---

## ④ 亮黑UI — ✅ 完成

- CSS 变量完整：`--bg` / `--panel` / `--text` / `--muted` / `--border` / `--primary` / `--primary-soft` / `--ok` / `--warn` / `--radius` ✓
- light (`:root`) + dark (`[data-theme="dark"]`) 双套 ✓
- `theme-context.tsx`：切换 + `data-theme` 到 `<html>` + localStorage 持久化 ✓
- 反模式检查：无紫色渐变（indigo solid #4f46e5）、图标 Lucide ✓

---

## ⑤ 谷歌登录 — ❌ 线上不通 [P1]

**代码层面** ✅：
- `auth.ts`：NextAuth + Google provider + DrizzleAdapter ✓
- 登录页面 `/auth/signin` 渲染正常 ✓
- 部署后 providers API 返回 Google ✓

**线上问题**：`/api/auth/signin/google` → "Server error: There is a problem with the server configuration."

**根因推测**：
1. Vercel 环境变量 `AUTH_SECRET` 缺失或值错误
2. `AUTH_URL` 仍为 `http://localhost:7500` 而非 `https://image-compressor-saas.vercel.app`
3. `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` 拼写错误
4. 数据库连接失败（DATABASE_URL 不匹配 → DrizzleAdapter 初始化失败）
5. 环境变量加了但没触发重新部署

**修复**：
1. 在 Vercel → Settings → Environment Variables 逐一确认 8 个变量都已勾选 Production
2. Vercel → Deployments → 点最新那条 → "Redeploy"（触发重新构建）
3. 查看 Vercel Runtime Logs 获取精确错误

---

## ⑥ 收付款 — ⚠️ 代码完成、定价问题 [P2]

**代码层面** ✅：
- create-order：从 PLAN_PRICES 读价格 → PayPal Orders API ✓
- capture-order：读订单映射表取 user_id + plan，校验归属（`eq(users.id, session.user.id)`）✓
- webhook：verify-webhook-signature + fail-closed + 幂等 ✓
- PayPal 凭证：Live 凭证，`PAYPAL_SANDBOX=false` ✓

**问题**：**定价显示与实际收费金额混用** [P2]
- `lib/paypal.ts` `PLAN_PRICES`：`pro_monthly: 499`（美分）= **$4.99**
- `lib/i18n.ts` 中文版：`pricingProPrice: "¥18"`（18 元）— 对不上！
- `lib/i18n.ts` 英文版：`pricingProPrice: "$5"`（$5）— 对不上 $4.99！
- `pricingYearly`：中文 "¥168（省 22%）" vs 英文 "$49/year (save 18%)"
- 折扣百分比也不一致（22% vs 18%）

**修复**：
- 中文定价改为 `"$4.99"` 或保持 ¥ 但数字与 `PLAN_PRICES` 一致
- 统一按服务端 `PLAN_PRICES` 显示（`4.99` → `$4.99` / `¥ 约 36`）
- 年付价格修正：`4999` 美分 = $49.99（非 $49）

---

## ⑦ GA4 — ✅ 基础完成

- `layout.tsx`：gtag 带 `isProd` 守卫（NODE_ENV==='production' && VERCEL_ENV!=='preview'）✓
- Measurement ID：G-XKHEV8W1T7 ✓
- 仅生产加载 ✓

**缺失（非阻塞）**：自定义事件埋点（generate_start / pay_start / sign_in 等漏斗事件）

---

## ⑧ 移动端 — ⚠️ 骨架完成、缺核验

**完成**：
- `media (max-width:480px)` 断点 ✓
- `box-sizing: border-box` / `max-width: 100%` ✓
- 触控目标 min-height: 44px ✓
- `clamp()` / flex 布局 ✓

**缺失**：Phase 4 要求的 375px 全量核验没做。

**修复**：在 DevTools 用 375px 设备模拟器逐页过一遍（首⻚/定价/FAQ/博客/登录），确认无横向滚动条/无被裁切元素/主交互可完成。这是上线前验证，非代码修改。

---

## ⑨ 安全 — ⚠️ 代码机制 OK、npm 有漏洞

**完成**：
- `next.config.ts`：CSP / HSTS / X-Frame-Options / X-Content-Type-Options / Referrer-Policy ✓
- webhook 验签（verify-webhook-signature）✓
- webhook fail-closed（生产缺 ID 时拒收）✓
- capture 从映射表读 plan ✓
- 幂等发额度 ✓
- 配额服务端强制（`api/usage/route.ts`）✓

**不适用**（本项目栈不同）：
- 无 Supabase（用的 Neon + NextAuth），RLS 不适用
- 无文件上传路由（纯前端 Canva 压缩），magic-byte 校验不适用

**问题**：
- `npm audit`：7 个漏洞（5 moderate + 2 high），来自 **sharp → libvips CVE**（CVE-2026-33327/33328/35590/35591）
- postcss 已升 latest ✓

**修复**：`npm i sharp@latest` 看是否能修复。如仍存在，标记为已知风险（sharp 是图片处理依赖，本项目可能未直接使用），记录在决策日志。

---

## ⑩ SEO — ⚠️ 首页完备、子页缺失

**完成**：
- 首页 metadata：title / description / OG / Twitter ✓
- JSON-LD（WebApplication schema）✓
- sitemap.xml + robots.txt ✓
- `<html lang>` 在 lang-context 跟随切换 ✓
- hreflang：zh-CN + x-default（无死链）✓
- canonical URL ✓

**问题**：**子页无独立 metadata** [P2]
```bash
# grep -rn "export const metadata" src/app/{pricing,faq,blog,privacy,terms,contact}
# 结果：空
```
- pricing / faq / blog / privacy / terms / contact 所有子页都是 client 组件，无法直接 `export const metadata`
- 需要拆为 server wrapper（metadata export） + client inner（用 `use client`）

**修复**：每个子页改为 `page.tsx`（server，export metadata）包裹 `<PageClient />`（`use client`）。

---

## 优先修复顺序

| 优先级 | 项目 | 预估时间 | 原因 |
|--------|------|----------|------|
| **P1** | ⑤ 谷歌登录线上不通 | 15min（查 Vercel 日志 + 修 env） | 阻塞支付、影响用户体验 |
| **P2** | ⑥ 定价 display vs charge 混用 | 10min（改 i18n 数字） | 客户看到 ¥18 付 $4.99，信任问题 |
| **P2** | ⑩ 子页 metadata | 20min（拆 server/client） | SEO 死胡同 |
| **P2** | ⑨ npm audit 漏洞 | 5min（npm i sharp@latest） | 安全合规 |
| 非阻塞 | ① 需求设计 | 30min（补 Spec） | 团队新成员接手需要 |
| 非阻塞 | ② 验证链 | 后续 | CI/CD 建设 |
| 非阻塞 | ⑧ 375px 核验 | 10min（人工过一遍） | 上线前安全 |
