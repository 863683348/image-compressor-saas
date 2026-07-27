# 架构文档 · Image Compressor SaaS

> 版本：v1.0 ｜ 日期：2026-07-23 ｜ 配套 PRD v2.0

---

## 1. 技术选型

### 1.1 选型对比矩阵

| 维度 | 方案 A (Next.js + Neon) | 方案 B (纯静态 + 第三方 BaaS) | 方案 C (Nuxt + Supabase) | 选型 |
|------|-------------------------|------------------------------|---------------------------|------|
| 前端框架 | Next.js 15 App Router | 纯 HTML/JS | Nuxt 3 | **A** |
| 后端/BaaS | Neon (Serverless Postgres) | Firebase / Supabase | Supabase | **A** |
| 认证 | NextAuth v5 (Google) | Firebase Auth | Supabase Auth | **A** |
| 支付 | PayPal REST API (原生 fetch) | Stripe | Stripe | **A** |
| 部署 | Vercel | Cloudflare Pages | Vercel | **A** |
| 图片处理 | Canvas API + Web Worker（纯前端） | 同左 | 同左 | **A** |
| i18n | 自建 `lib/i18n.ts` (零依赖) | next-intl | vue-i18n | **A** |
| 数据库 ORM | Drizzle ORM | Prisma | Prisma | **A** |
| 图标 | Lucide | Heroicons | Material Icons | **A** |
| 打包下载 | JSZip | 同左 | 同左 | **A** |

**选型理由**：
- **Next.js + Vercel**：React 生态成熟、Server Components 减少客户端 JS、Vercel 一键部署零运维。
- **Neon + Drizzle**：Serverless Postgres 免运维、按需付费；Drizzle 轻量、类型安全、无 Prisma 的 heavy 启动。
- **NextAuth v5**：与 Next.js App Router 深度集成、Google OAuth 零行配置。
- **PayPal REST API（原生 fetch）**：零 SDK 依赖、体积小、v2 Orders API 功能完整。
- **Canvas API（纯前端）**：压缩在浏览器 Worker 中完成，无上传、无服务器算力成本。

### 1.2 技术约束
- 压缩依赖浏览器的 `createImageBitmap` + `OffscreenCanvas` + `toBlob()`，不依赖 WASM（AVIF 编码暂不支持）。
- 配额强制走服务端 `api/usage/route.ts`，前端校验仅做 UX 提示。
- 支付 capture 必须从服务端映射表取 plan/amount，**绝不信任请求体**。
- Webhook 必须通过 PayPal `verify-webhook-signature` API 验签。
- GA4 仅在生产加载（`NODE_ENV==='production' && VERCEL_ENV!=='preview'`）。

---

## 2. 系统架构

```
┌──────────────────────────────────────────────────────────┐
│                        浏览器                             │
│  ┌──────────────┐  ┌───────────┐  ┌───────────────────┐ │
│  │ UI 层(React)  │  │ Web Worker│  │ localStorage      │ │
│  │ - 上传/压缩   │  │ - 图片解码 │  │ - lang / theme    │ │
│  │ - 预览/下载   │  │ - 编码压缩 │  │ - 压缩参数记忆    │ │
│  │ - 语言/主题   │  │ - 目标大小 │  │                    │ │
│  └──────┬───────┘  └───────────┘  └───────────────────┘ │
│         │ HTTPS (JSON/REST)                               │
└─────────┼──────────────────────────────────────────────────┘
          │
┌─────────▼──────────────────────────────────────────────────┐
│                    Vercel (Edge)                            │
│  ┌──────────────────────────────────────────────────────┐ │
│  │  Next.js App Router (Server Functions)                │ │
│  │  ┌──────────┐ ┌───────────┐ ┌────────────────────┐  │ │
│  │  │ /api/auth│ │/api/pay   │ │ /api/usage         │  │ │
│  │  │ NextAuth │ │ create    │ │ quota check        │  │ │
│  │  │ Google   │ │ capture   │ │ drizzle.query      │  │ │
│  │  │ OAuth    │ │ webhook   │ │                    │  │ │
│  │  └────┬─────┘ └─────┬─────┘ └────────┬───────────┘  │ │
│  └───────┼─────────────┼────────────────┼──────────────┘ │
└──────────┼─────────────┼────────────────┼────────────────┘
           │             │                │
           │   HTTPS     │   HTTPS        │   TCP(SSL)
           ▼             ▼                ▼
  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
  │ Google OAuth │ │ PayPal API   │ │ Neon PG      │
  │ (accounts   │ │ (api-m.paypal│ │ (Serverless  │
  │  .google)   │ │  .com)        │ │  Postgres)   │
  └──────────────┘ └──────────────┘ └──────────────┘
```

**关键设计决策**：
- 图片压缩不经过服务器——压缩在浏览器 Worker 中完成，Server Functions 仅处理认证/支付/配额。
- 无状态 API：所有 Server Functions 通过 JWT（NextAuth session）认证，无需 session store。
- 支付幂等：`orders` 表为每笔 PayPal order 记录，`status='completed'` 时直接返回。

---

## 3. API 端点清单

| Method | Path | 功能 | 认证 | 请求体 | 响应体 |
|--------|------|------|------|--------|--------|
| GET | `/api/auth/signin` | 登录页 | 无 | - | HTML |
| GET | `/api/auth/callback/google` | Google 回调 | 无 | query params | 重定向 |
| GET | `/api/auth/providers` | 列出 provider | 无 | - | `{google:{...}}` |
| GET | `/api/auth/csrf` | CSRF token | 无 | - | `{csrfToken}` |
| GET | `/api/usage` | 查询配额 | Session | - | `{used, remaining, plan}` |
| GET | `/api/payments/create-order` | 创建订单 | Session | `{planId}` | `{id, status, links}` |
| POST | `/api/payments/capture-order` | 捕获订单 | Session | `{orderId}` | `{success, plan, expiresAt}` |
| POST | `/api/payments/webhook` | PayPal 回调 | 验签 | PayPal event | `{success}` |

---

## 4. 数据库 Schema

| 表名 | 核心字段 | 索引 | 说明 |
|------|----------|------|------|
| `users` | id, name, email, image, plan, plan_expires_at | email (unique) | NextAuth 用户表 |
| `accounts` | userId, provider, providerAccountId | userId+provider | OAuth 账户关联 |
| `sessions` | userId, sessionToken, expires | sessionToken (unique) | NextAuth 会话 |
| `orders` | id, userId, providerOrderId, plan, status, createdAt, completedAt | providerOrderId (unique) | PayPal 订单映射 |

**orders 表是支付安全核心**：capture 和 webhook 都从该表取 user_id/plan，不读请求体。

---

## 5. 压缩架构（纯前端）

```
用户拖入文件
  │
  ▼
主线程: 格式/大小校验 → File → postMessage
  │
  ▼
Web Worker:
  createImageBitmap(file) → OffscreenCanvas 绘制 → toBlob(quality)
  │
  ▼
主线程: 接收 blob → 更新列表(体积/压缩率/状态)
```

目标大小压缩：在 Worker 内二分 quality ∈ [0.1, 1.0]，迭代至 blob.size ≤ target 或 < 0.05 差值。

---

## 6. 部署架构

```
GitHub (main) ──push──▶ Vercel (auto-deploy)
                            │
                            ├── Next.js build (Turbopack)
                            ├── Environment Variables (8 个)
                            ├── Serverless Functions (API routes)
                            └── Static Assets (_next/static, public/)
```

- 域名：`image-compressor-saas.shop`（正式）/ `image-compressor-saas.vercel.app`（Vercel 自动预览域名）
- 环境变量通过 Vercel Dashboard 配置（Production）
- 任何 `main` 分支 push 自动触发部署
