# UIUX 设计文档 · Image Compressor SaaS

> 版本：v1.0 ｜ 日期：2026-07-23

---

## 1. 设计方向

**对标品牌**：Linear — 极简工具体验，留白主导、功能即界面、无装饰性元素。

**设计原则**：
- **功能即界面**：压缩工具本身就是主体，不堆 Hero/营销模块。
- **信噪比极致**：无渐变、无毛玻璃、无 emoji 图标——用排版和间距表达层级。
- **隐私感知**：UI 语言传递"安全"信号（静态标识、离线能力声明）。
- **性能感**：压缩即时反馈（体积数字跳变、进度条），强化"快"的体感。

---

## 2. 设计 Token

### 2.1 颜色

| Token | 亮色 (Light) | 暗色 (Dark) | 用途 |
|-------|-------------|-------------|------|
| `--bg` | `#f6f7f9` | `#0f1115` | 页面背景 |
| `--panel` | `#ffffff` | `#171a21` | 卡片/面板 |
| `--text` | `#1f2430` | `#e7e9ee` | 正文 |
| `--muted` | `#6b7280` | `#9aa3b2` | 辅助文字 |
| `--border` | `#e5e7eb` | `#2a2f3a` | 边框/分割线 |
| `--primary` | `#4f46e5` | `#818cf8` | 主色（按钮/链接） |
| `--primary-soft` | `#eef2ff` | `#1e2230` | 主色弱背景 |
| `--ok` | `#16a34a` | `#4ade80` | 成功/绿 |
| `--warn` | `#dc2626` | `#f87171` | 错误/红 |
| `--radius` | `14px` | `14px` | 全局圆角 |

### 2.2 字体

| 用途 | 字体 | 后备 |
|------|------|------|
| 全局 | system-ui | `-apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei"` |
| 等宽 | monospace | 代码/数据展示 |

**字号梯度**：15px (body) → 16px (h2) → 22px (h1 mobile) / 28px (h1 desktop)。

### 2.3 图标库

**Lucide**（24px line icons）。**严禁** emoji 图标、FontAwesome 混用。

常用：`Upload` `Download` `Zap` `Check` `X` `Sun` `Moon` `Globe` `LogIn` `LogOut` `ShoppingCart`

### 2.4 间距

- 全局 padding：`16px`（mobile）/ `24px`（desktop）
- 卡片 gap：`12px` → `16px`
- 按钮 padding：`8px 16px`

---

## 3. 页面清单

| 页面 | 路由 | 核心组件 | 说明 |
|------|------|----------|------|
| 首页（压缩工具） | `/` | 拖放区、控件条、文件列表、汇总栏 | 主体功能 |
| 定价 | `/pricing` | Free/Pro 卡片、PayPal 支付按钮 | 仅已登录用户可见支付 |
| 登录 | `/auth/signin` | Google 登录按钮 | NextAuth 默认页 |
| 隐私政策 | `/privacy` | 文本内容 | 静态 |
| 服务条款 | `/terms` | 文本内容 | 静态 |
| 常见问题 | `/faq` | 8 条 FAQ | 内嵌答案 |
| 博客 | `/blog` | 3 篇标题+摘要 | 静态 |
| 联系我们 | `/contact` | 表单 | 静态 |

**全站组件**：
- `HeaderClient`：Logo + 语言切换 + 主题切换 + 登录/用户区
- `FooterClient`：隐私/条款/FAQ/博客/联系 + 品牌描述 + 版权

---

## 4. 反模式检查

| 检查项 | 状态 |
|--------|:---:|
| 无紫色渐变 | ✅ |
| 无 emoji 图标 | ✅ |
| 非千篇一律 Hero（无首页大图宣传区） | ✅ |
| 组件颜色引用 Token（无裸色值 `#fff`） | ✅ |
| 暗色对比度 ≥ 4.5:1 | ✅ |
| 图标仅用 Lucide | ✅ |
| 无毛玻璃/backdrop-blur | ✅ |
