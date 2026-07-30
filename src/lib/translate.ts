import { type Lang } from "@/lib/i18n";

// 新 i18n 数据（与 [lang]/layout 的 loadMessages 同源）—— 同步 import 保证
// SSR/客户端一致，且 `t()` 拿到的就是新的中文/英文 messages（而不是
// `@/lib/i18n` 里过时的旧 dict）。
import zhCommon from "@/i18n/messages/zh.common.json";
import zhTool from "@/i18n/messages/zh.tool.json";
import zhFaq from "@/i18n/messages/zh.faq.json";
import zhPricing from "@/i18n/messages/zh.pricing.json";
import zhAuth from "@/i18n/messages/zh.auth.json";
import zhLegal from "@/i18n/messages/zh.legal.json";
import zhContact from "@/i18n/messages/zh.contact.json";
import zhMisc from "@/i18n/messages/zh.misc.json";
import enCommon from "@/i18n/messages/en.common.json";
import enTool from "@/i18n/messages/en.tool.json";
import enFaq from "@/i18n/messages/en.faq.json";
import enPricing from "@/i18n/messages/en.pricing.json";
import enAuth from "@/i18n/messages/en.auth.json";
import enLegal from "@/i18n/messages/en.legal.json";
import enContact from "@/i18n/messages/en.contact.json";
import enMisc from "@/i18n/messages/en.misc.json";

const DICT: Record<Lang, Record<string, string>> = {
  zh: {
    ...zhCommon,
    ...zhTool,
    ...zhFaq,
    ...zhPricing,
    ...zhAuth,
    ...zhLegal,
    ...zhContact,
    ...zhMisc,
  },
  en: {
    ...enCommon,
    ...enTool,
    ...enFaq,
    ...enPricing,
    ...enAuth,
    ...enLegal,
    ...enContact,
    ...enMisc,
  },
};

// 共享翻译函数：从统一 i18n dict 取文案。
// 任何 `import { t } from "@/lib/translate"` 的组件（CompressorTool 子树、
// faq/pricing 等 page）都通过它拿新文案，不再依赖过时的 `@/lib/i18n` dict。
export function t(lang: Lang, key: string): string {
  return DICT[lang]?.[key] ?? key;
}
