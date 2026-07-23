# Spec · Image Compressor SaaS v2.0

> 生成日期：2026-07-23
> 基于：PRD v2.0 + 架构文档 v1.0 + UIUX v1.0
> 状态：已锁定

---

## 1. 产品定义
- **一句话描述**：隐私优先的在线图片压缩 SaaS——100% 浏览器本地处理，免上传、无水印、免注册可用；登录后解锁无限次数。
- **目标用户**：自媒体/博主、前端开发者、电商运营、普通办公用户、隐私敏感用户。
- **核心问题**：市面工具要么上传服务器（隐私风险）、要么加水印/限次数。

## 2. MVP 范围（锁定——不在此列表的功能一律不做）

| 优先级 | 功能 | 验收标准摘要 | RICE |
|--------|------|-------------|------|
| P0 | 图片上传（拖拽/点击/粘贴） | 多渠道可入队，格式与大小校验拦截 | 400 |
| P0 | 质量压缩 | 5MB JPG → < 1MB，Worker 异步不卡 UI | 400 |
| P0 | 批量队列 + ZIP 导出 | 多文件并行，JSZip 打包成功 | 189 |
| P0 | 预览对比（前后滑块） | 并排 + 滑块模式正常切换 | 63 |
| P0 | 目标大小压缩 | 二分查找逼近目标 KB，不超限 | 98 |
| P0 | 谷歌登录（NextAuth） | OAuth 走通 → session 可用于 API | 63 |
| P0 | 配额系统 | 免费 10 次/天，服务端强制 | 96 |
| P0 | PayPal 支付 | create → pay → capture → 额度升级 | 84 |
| P0 | 中英文切换 | 124+ key 成对，localStorage 持久化 | 84 |
| P0 | 亮黑主题 | CSS 变量双套，刷新后保持 | 50 |
| P1 | 格式转换（WebP） | 输出可选 JPG/PNG/WebP | 192 |
| P1 | 移动端适配 | 375px 无横向滚动条 | 60 |

### 明确不做的功能（Won't Have）
- AVIF 编码（WASM 体积大，移动端下沉）
- GIF 动图帧压缩
- 自由裁剪编辑器
- 用户间协作/分享
- API 开放平台
- 管理后台

## 3. 技术架构（锁定）
- **前端**：Next.js 15 App Router + TypeScript + TailwindCSS
- **后端**：Next.js Server Functions（API Routes）
- **数据库**：Neon Serverless Postgres + Drizzle ORM
- **认证**：NextAuth v5 (Google OAuth)
- **支付**：PayPal REST API v2（原生 fetch，零 SDK 依赖）
- **部署**：Vercel（git push 自动部署）
- **压缩**：Canvas API + Web Worker（纯前端，不上传）

## 4. API 端点清单（锁定）

| Method | Path | 功能 | 认证 | 请求体 | 响应体 |
|--------|------|------|------|--------|--------|
| GET | `/api/auth/signin` | 登录页 | 无 | - | HTML |
| GET | `/api/auth/callback/google` | Google 回调 | 无 | query | Redirect |
| GET | `/api/auth/providers` | 列出 provider | 无 | - | `{google:{...}}` |
| POST | `/api/payments/create-order` | 创建 PayPal 订单 | Session | `{planId}` | `{id, links}` |
| POST | `/api/payments/capture-order` | 捕获订单 | Session | `{orderId}` | `{success, plan}` |
| POST | `/api/payments/webhook` | PayPal 回调 | 验签 | PayPal event | `{success}` |
| GET | `/api/usage` | 查询配额 | Session | - | `{used, remaining}` |

## 5. 数据库表清单（锁定）

| 表名 | 核心字段 | 索引 | 关联 |
|------|----------|------|------|
| users | id, name, email, image, plan, plan_expires_at | email(unique) | - |
| accounts | userId, provider(UQ), providerAccountId(UQ) | userId+provider | → users |
| sessions | userId, sessionToken(UQ), expires | sessionToken(UQ) | → users |
| orders | id, userId, providerOrderId(UQ), plan, status | providerOrderId(UQ) | → users |

## 6. 页面清单（锁定）

| 页面 | 路由 | 核心组件 | 对应 API | 设计 Token 主题 |
|------|------|----------|----------|-----------------|
| 首页 | `/` | DropZone, QualitySlider, FileList, SummaryBar | usage | light/dark |
| 定价 | `/pricing` | PlanCard, PayPalButton | create-order | light/dark |
| 登录 | `/auth/signin` | GoogleButton | auth/signin | light/dark |
| 隐私 | `/privacy` | TextContent | - | light/dark |
| 条款 | `/terms` | TextContent | - | light/dark |
| FAQ | `/faq` | FaqList (8 items) | - | light/dark |
| 博客 | `/blog` | BlogList (3 posts) | - | light/dark |
| 联系 | `/contact` | ContactForm | - | light/dark |

## 7. 设计 Token（锁定）
- **主色**：`#4f46e5` (indigo-600) → dark: `#818cf8` (indigo-400)
- **字体**：system-ui（`-apple-system, PingFang SC, Microsoft YaHei`）
- **图标库**：Lucide（24px line）
- **主题**：浅色/深色，`data-theme` 挂 `<html>`，localStorage 持久化
- **对标品牌**：Linear（极简工具风格）
- **圆角**：14px
- **触控**：最小 44px

## 8. 验收标准（锁定——QA 测试时以此为唯一依据）

| 编号 | 功能 | Given | When | Then |
|------|------|-------|------|------|
| AC-01 | 压缩 | 5MB JPG，质量 75% | 压缩 | 输出 < 1MB，压缩率 > 70% |
| AC-02 | 隐私 | DevTools Network 打开 | 压缩任意图片 | 无任何上传请求 |
| AC-03 | 配额 | 免费用户已用 10 次 | 尝试第 11 次 | 服务端 403，提示升级 |
| AC-04 | 登录 | 未登录用户 | 点 Google 登录 | OAuth 走通 → 显示用户信息 |
| AC-05 | 支付 | 登录用户 | Pro 月付 → PayPal → 回调 | order completed，额度 unlimited |
| AC-06 | 支付安全 | 请求体 plan=unlimited | POST capture | 服务端从映射表取 plan |
| AC-07 | webhook 幂等 | 同一 order 两次 webhook | PayPal 重发 | 第二次直接 success |
| AC-08 | i18n | 英文用户 | 切换 en | 全站无中文残留 |
| AC-09 | 主题 | 暗色 | 刷新页面 | 仍保持暗色 |
| AC-10 | 移动端 | iPhone SE 375px | 浏览全站 | 无横向滚动条 |
| AC-11 | 离线 | 断开网络 | 压缩图片 | 正常完成（Worker 不走网络）|

## 9. 边界与约束
- 不支持 IE 浏览器
- 响应式断点：480px（移动端）
- 性能目标：5MB 图片压缩 < 1s
- 文件格式：JPG/JPEG/PNG/WebP/AVIF（输入），JPG/PNG/WebP（输出）
- 单文件上限：50MB
- `npm audit` 无高危漏洞才上线
- Webhook fail-closed：生产缺 `PAYPAL_WEBHOOK_ID` 时拒收

## 10. 变更记录
| 日期 | 变更内容 | 原因 | 影响范围 |
|------|----------|------|----------|
| 2026-07-23 | 初始 Spec 锁定 | 基于 PRD/架构/UIUX 三文档生成 | 全量 |
