# Image Compressor SaaS

> 一个基于 Next.js 的全栈在线图片压缩 SaaS：支持账户体系、付费套餐与内容营销博客，已上线正式域名 [image-compressor-saas.shop](https://image-compressor-saas.shop)。

[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)](https://tailwindcss.com)
[![Neon](https://img.shields.io/badge/Database-Neon%20Postgres-00E699)](https://neon.tech)
[![Deploy](https://img.shields.io/badge/Deploy-Vercel-black)](https://vercel.com)

---

## 功能特性

- **图片压缩**：支持 JPG / PNG / WebP 等格式的压缩，质量与体积可控。
- **账户体系**：基于 NextAuth v5 的 Google OAuth 登录，会话落库（Drizzle Adapter）。
- **付费套餐**：集成 PayPal 结账（创建订单 / 捕获订单 / Webhook 回调），提供 Pro 月付（$4.99）与年付（$49.99）套餐。
- **用量与额度**：服务端记录用户用量，按套餐控制配额（`/api/usage`、`/api/orders`）。
- **国际化（i18n）**：内置中文 / 英文文案，路由以 `/zh`、`/en` 前缀区分。
- **内容营销博客**：`/blog` 子目录承载 Markdown 文章，作为 SEO 核心资产。
- **SEO 就绪**：结构化数据、Open Graph、`sitemap.xml`、`robots.txt`、合规页（隐私 / 条款 / FAQ / 联系）。
- **合规页面**：隐私政策、服务条款、FAQ、联系页一应俱全。

---

## 技术栈

| 层 | 技术 |
|----|------|
| 框架 | Next.js 16（App Router）+ React 19 + TypeScript 5 |
| 样式 | Tailwind CSS 4 |
| 数据库 | Neon (Postgres, serverless) + Drizzle ORM |
| 认证 | NextAuth v5（`next-auth@beta`）+ `@auth/drizzle-adapter`，Google OAuth（PKCE） |
| 支付 | PayPal Checkout（服务端 Orders API + Webhook） |
| 图片处理 | sharp（服务端编解码） |
| 部署 | Vercel（监听 `main` 分支自动部署） |

---

## 项目结构

```
src/
├── app/
│   ├── [lang]/            # 国际化路由（/zh、/en）
│   │   ├── page.tsx       # 首页（压缩器）
│   │   ├── pricing/       # 定价页
│   │   ├── blog/          # 博客（SEO 内容）
│   │   ├── faq/ contact/ privacy/ terms/   # 合规与帮助页
│   │   └── ...
│   ├── api/
│   │   ├── auth/[...nextauth]/   # NextAuth 端点
│   │   ├── payments/      # PayPal：create-order / capture-order / webhook
│   │   ├── orders/        # 订单
│   │   └── usage/         # 用量 / 额度
│   ├── auth/              # 登录页
│   └── ...
├── components/            # UI 组件
├── content/blog/          # 博客 Markdown 源
├── db/                    # Drizzle schema + 数据库连接
├── i18n/messages/         # zh / en 文案
├── lib/                   # paypal.ts / auth.ts / i18n.ts 等
└── types/
public/                    # 静态资源（robots.txt、sitemap.xml、guide.html 等）
drizzle.config.ts          # Drizzle Kit 配置
```

---

## 快速开始

### 前置条件

- Node.js 18+（推荐 20+）
- 一个 Neon Postgres 数据库
- 一个 Google OAuth 客户端（见下方「认证配置」）
- 一个 PayPal 应用（见下方「支付配置」）

### 安装与运行

```bash
# 1. 安装依赖
npm install

# 2. 配置环境变量（复制并填写 .env.local，见下节）
cp .env.example .env.local   # 如没有示例文件，请手动创建

# 3. 推送数据库表结构
npx drizzle-kit push

# 4. 启动开发服务器
npm run dev
# 打开 http://localhost:3000
```

### 常用脚本

```bash
npm run dev         # 开发服务器
npm run build       # 生产构建
npm run start       # 启动生产服务
npm run lint        # ESLint
npm run type-check  # tsc --noEmit
npm run verify      # lint + type-check + build
```

---

## 环境变量

在项目根目录创建 `.env.local`（**不要提交到仓库**），至少包含：

| 变量 | 说明 |
|------|------|
| `AUTH_SECRET` | NextAuth 会话加密密钥，用 `openssl rand -base64 32` 生成 |
| `GOOGLE_CLIENT_ID` | Google OAuth 客户端 ID |
| `GOOGLE_CLIENT_SECRET` | Google OAuth 客户端密钥 |
| `DATABASE_URL` | Neon Postgres 连接串 |
| `PAYPAL_CLIENT_ID` | PayPal 应用 Client ID |
| `PAYPAL_CLIENT_SECRET` | PayPal 应用 Secret |
| `PAYPAL_SANDBOX` | 可选，设为 `true` 使用 PayPal 沙箱环境 |

> 站点域名 `https://image-compressor-saas.shop` 在 `src/app/layout.tsx` 中以 `SITE_URL` 常量硬编码，供 `metadataBase` 与结构化数据使用。

---

## 认证配置（Google OAuth）

1. 在 [Google Cloud Console](https://console.cloud.google.com/) 创建 OAuth 2.0 客户端（类型：Web 应用）。
2. 在「已获授权的重定向 URI」中添加：
   ```
   https://image-compressor-saas.shop/api/auth/callback/google
   ```
   （`https`、无尾斜杠、域名与部署一致。）
3. 将客户端 ID / Secret 填入 `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET`。

---

## 支付配置（PayPal）

1. 在 [PayPal Developer](https://developer.paypal.com/) 创建应用，取得 Client ID / Secret。
2. 配置 Webhook，Endpoint 填写：
   ```
   https://image-compressor-saas.shop/api/payments/webhook
   ```
3. 将凭证填入 `PAYPAL_CLIENT_ID` / `PAYPAL_CLIENT_SECRET`；本地联调用 `PAYPAL_SANDBOX=true`。
4. 套餐价格在服务端 `src/lib/paypal.ts` 的 `PLAN_PRICES` 中定义（Pro 月付 $4.99 / 年付 $49.99）。

---

## 数据库

使用 Drizzle ORM + Neon。表结构定义在 `src/db/schema.ts`，推送命令：

```bash
npx drizzle-kit push
```

适配器需要 `users` / `accounts` / `sessions` / `verification_tokens` 四张表（由 schema 自动创建），另含 `orders` / `usage` 等业务表。

---

## 国际化（i18n）

- 语言路由前缀：`/zh`（中文）、`/en`（英文）。
- 文案位于 `src/i18n/messages/zh.json` 与 `en.json`，由 `src/lib/i18n.ts` 加载。

---

## 部署（Vercel）

1. 在 Vercel 导入本仓库（Root Directory 保持仓库根，即 `package.json` 所在目录）。
2. 在 **Settings → Environment Variables** 中配置上文所有变量，作用域勾选 **Production**（及 Preview）。
3. 每次推送到 `main` 自动部署。

> 注意：修改环境变量后必须**重新部署**才会生效。

---

## 许可证

MIT（示例 / 学习用途，可自由使用与修改）。
