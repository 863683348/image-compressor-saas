import type { Lang } from "./lang";

// 新 i18n 数据（与 [lang]/layout 的 loadMessages 同源）—— 同步 import 保证
// SSR/客户端一致，且 `t()` 拿到的就是新的多语言 messages（而不是
// `@/lib/i18n` 里过时的旧 dict）。

// zh / en
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

// ar
import arCommon from "@/i18n/messages/ar.common.json";
import arTool from "@/i18n/messages/ar.tool.json";
import arFaq from "@/i18n/messages/ar.faq.json";
import arPricing from "@/i18n/messages/ar.pricing.json";
import arAuth from "@/i18n/messages/ar.auth.json";
import arLegal from "@/i18n/messages/ar.legal.json";
import arContact from "@/i18n/messages/ar.contact.json";
import arMisc from "@/i18n/messages/ar.misc.json";

// es
import esCommon from "@/i18n/messages/es.common.json";
import esTool from "@/i18n/messages/es.tool.json";
import esFaq from "@/i18n/messages/es.faq.json";
import esPricing from "@/i18n/messages/es.pricing.json";
import esAuth from "@/i18n/messages/es.auth.json";
import esLegal from "@/i18n/messages/es.legal.json";
import esContact from "@/i18n/messages/es.contact.json";
import esMisc from "@/i18n/messages/es.misc.json";

// pt
import ptCommon from "@/i18n/messages/pt.common.json";
import ptTool from "@/i18n/messages/pt.tool.json";
import ptFaq from "@/i18n/messages/pt.faq.json";
import ptPricing from "@/i18n/messages/pt.pricing.json";
import ptAuth from "@/i18n/messages/pt.auth.json";
import ptLegal from "@/i18n/messages/pt.legal.json";
import ptContact from "@/i18n/messages/pt.contact.json";
import ptMisc from "@/i18n/messages/pt.misc.json";

// id
import idCommon from "@/i18n/messages/id.common.json";
import idTool from "@/i18n/messages/id.tool.json";
import idFaq from "@/i18n/messages/id.faq.json";
import idPricing from "@/i18n/messages/id.pricing.json";
import idAuth from "@/i18n/messages/id.auth.json";
import idLegal from "@/i18n/messages/id.legal.json";
import idContact from "@/i18n/messages/id.contact.json";
import idMisc from "@/i18n/messages/id.misc.json";

// fr
import frCommon from "@/i18n/messages/fr.common.json";
import frTool from "@/i18n/messages/fr.tool.json";
import frFaq from "@/i18n/messages/fr.faq.json";
import frPricing from "@/i18n/messages/fr.pricing.json";
import frAuth from "@/i18n/messages/fr.auth.json";
import frLegal from "@/i18n/messages/fr.legal.json";
import frContact from "@/i18n/messages/fr.contact.json";
import frMisc from "@/i18n/messages/fr.misc.json";

// tr
import trCommon from "@/i18n/messages/tr.common.json";
import trTool from "@/i18n/messages/tr.tool.json";
import trFaq from "@/i18n/messages/tr.faq.json";
import trPricing from "@/i18n/messages/tr.pricing.json";
import trAuth from "@/i18n/messages/tr.auth.json";
import trLegal from "@/i18n/messages/tr.legal.json";
import trContact from "@/i18n/messages/tr.contact.json";
import trMisc from "@/i18n/messages/tr.misc.json";

// vi
import viCommon from "@/i18n/messages/vi.common.json";
import viTool from "@/i18n/messages/vi.tool.json";
import viFaq from "@/i18n/messages/vi.faq.json";
import viPricing from "@/i18n/messages/vi.pricing.json";
import viAuth from "@/i18n/messages/vi.auth.json";
import viLegal from "@/i18n/messages/vi.legal.json";
import viContact from "@/i18n/messages/vi.contact.json";
import viMisc from "@/i18n/messages/vi.misc.json";

// hi
import hiCommon from "@/i18n/messages/hi.common.json";
import hiTool from "@/i18n/messages/hi.tool.json";
import hiFaq from "@/i18n/messages/hi.faq.json";
import hiPricing from "@/i18n/messages/hi.pricing.json";
import hiAuth from "@/i18n/messages/hi.auth.json";
import hiLegal from "@/i18n/messages/hi.legal.json";
import hiContact from "@/i18n/messages/hi.contact.json";
import hiMisc from "@/i18n/messages/hi.misc.json";

// de
import deCommon from "@/i18n/messages/de.common.json";
import deTool from "@/i18n/messages/de.tool.json";
import deFaq from "@/i18n/messages/de.faq.json";
import dePricing from "@/i18n/messages/de.pricing.json";
import deAuth from "@/i18n/messages/de.auth.json";
import deLegal from "@/i18n/messages/de.legal.json";
import deContact from "@/i18n/messages/de.contact.json";
import deMisc from "@/i18n/messages/de.misc.json";

// ja
import jaCommon from "@/i18n/messages/ja.common.json";
import jaTool from "@/i18n/messages/ja.tool.json";
import jaFaq from "@/i18n/messages/ja.faq.json";
import jaPricing from "@/i18n/messages/ja.pricing.json";
import jaAuth from "@/i18n/messages/ja.auth.json";
import jaLegal from "@/i18n/messages/ja.legal.json";
import jaContact from "@/i18n/messages/ja.contact.json";
import jaMisc from "@/i18n/messages/ja.misc.json";

// ko
import koCommon from "@/i18n/messages/ko.common.json";
import koTool from "@/i18n/messages/ko.tool.json";
import koFaq from "@/i18n/messages/ko.faq.json";
import koPricing from "@/i18n/messages/ko.pricing.json";
import koAuth from "@/i18n/messages/ko.auth.json";
import koLegal from "@/i18n/messages/ko.legal.json";
import koContact from "@/i18n/messages/ko.contact.json";
import koMisc from "@/i18n/messages/ko.misc.json";

// ru
import ruCommon from "@/i18n/messages/ru.common.json";
import ruTool from "@/i18n/messages/ru.tool.json";
import ruFaq from "@/i18n/messages/ru.faq.json";
import ruPricing from "@/i18n/messages/ru.pricing.json";
import ruAuth from "@/i18n/messages/ru.auth.json";
import ruLegal from "@/i18n/messages/ru.legal.json";
import ruContact from "@/i18n/messages/ru.contact.json";
import ruMisc from "@/i18n/messages/ru.misc.json";

const DICT: Record<Lang, Record<string, string>> = {
  zh: {
    ...zhCommon, ...zhTool, ...zhFaq, ...zhPricing,
    ...zhAuth, ...zhLegal, ...zhContact, ...zhMisc,
  },
  en: {
    ...enCommon, ...enTool, ...enFaq, ...enPricing,
    ...enAuth, ...enLegal, ...enContact, ...enMisc,
  },
  ar: { ...arCommon, ...arTool, ...arFaq, ...arPricing, ...arAuth, ...arLegal, ...arContact, ...arMisc },
  es: { ...esCommon, ...esTool, ...esFaq, ...esPricing, ...esAuth, ...esLegal, ...esContact, ...esMisc },
  pt: { ...ptCommon, ...ptTool, ...ptFaq, ...ptPricing, ...ptAuth, ...ptLegal, ...ptContact, ...ptMisc },
  id: { ...idCommon, ...idTool, ...idFaq, ...idPricing, ...idAuth, ...idLegal, ...idContact, ...idMisc },
  fr: { ...frCommon, ...frTool, ...frFaq, ...frPricing, ...frAuth, ...frLegal, ...frContact, ...frMisc },
  tr: { ...trCommon, ...trTool, ...trFaq, ...trPricing, ...trAuth, ...trLegal, ...trContact, ...trMisc },
  vi: { ...viCommon, ...viTool, ...viFaq, ...viPricing, ...viAuth, ...viLegal, ...viContact, ...viMisc },
  hi: { ...hiCommon, ...hiTool, ...hiFaq, ...hiPricing, ...hiAuth, ...hiLegal, ...hiContact, ...hiMisc },
  de: { ...deCommon, ...deTool, ...deFaq, ...dePricing, ...deAuth, ...deLegal, ...deContact, ...deMisc },
  ja: { ...jaCommon, ...jaTool, ...jaFaq, ...jaPricing, ...jaAuth, ...jaLegal, ...jaContact, ...jaMisc },
  ko: { ...koCommon, ...koTool, ...koFaq, ...koPricing, ...koAuth, ...koLegal, ...koContact, ...koMisc },
  ru: { ...ruCommon, ...ruTool, ...ruFaq, ...ruPricing, ...ruAuth, ...ruLegal, ...ruContact, ...ruMisc },
};

export { DICT };

// 共享翻译函数：从统一 i18n dict 取文案。
// 任何 `import { t } from "@/lib/translate"` 的组件（CompressorTool 子树、
// faq/pricing 等 page）都通过它拿新文案，不再依赖过时的 `@/lib/i18n` dict。
export function t(lang: Lang, key: string): string {
  return DICT[lang]?.[key] ?? key;
}
