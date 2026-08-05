import "server-only";

import type { Locale } from "./config";
import type { Lang } from "@/lib/lang";

type Messages = Record<string, string>;

let cached: { locale: Locale; data: ReturnType<typeof buildMessages> } | null = null;

function buildMessages(common: Messages, tool: Messages, faq: Messages, pricing: Messages, auth: Messages, legal: Messages, contact: Messages, misc: Messages) {
  const flat = { ...common, ...tool, ...faq, ...pricing, ...auth, ...legal, ...contact, ...misc } as const;
  return { common, tool, faq, pricing, auth, legal, contact, misc, flat } as const;
}

interface Namespaces {
  common: Messages; tool: Messages; faq: Messages; pricing: Messages;
  auth: Messages; legal: Messages; contact: Messages; misc: Messages;
}

// Eager static imports → JSON is bundled at build time (no runtime lookup).
const LOADERS: Record<Locale, () => Promise<Namespaces>> = {
  zh: () => Promise.all([
    import("./messages/zh.common.json"), import("./messages/zh.tool.json"),
    import("./messages/zh.faq.json"), import("./messages/zh.pricing.json"),
    import("./messages/zh.auth.json"), import("./messages/zh.legal.json"),
    import("./messages/zh.contact.json"), import("./messages/zh.misc.json"),
  ]).then(([common, tool, faq, pricing, auth, legal, contact, misc]) => ({
    common: common.default, tool: tool.default, faq: faq.default,
    pricing: pricing.default, auth: auth.default, legal: legal.default,
    contact: contact.default, misc: misc.default,
  })),
  en: () => Promise.all([
    import("./messages/en.common.json"), import("./messages/en.tool.json"),
    import("./messages/en.faq.json"), import("./messages/en.pricing.json"),
    import("./messages/en.auth.json"), import("./messages/en.legal.json"),
    import("./messages/en.contact.json"), import("./messages/en.misc.json"),
  ]).then(([common, tool, faq, pricing, auth, legal, contact, misc]) => ({
    common: common.default, tool: tool.default, faq: faq.default,
    pricing: pricing.default, auth: auth.default, legal: legal.default,
    contact: contact.default, misc: misc.default,
  })),
  ar: () => Promise.all([
    import("./messages/ar.common.json"), import("./messages/ar.tool.json"),
    import("./messages/ar.faq.json"), import("./messages/ar.pricing.json"),
    import("./messages/ar.auth.json"), import("./messages/ar.legal.json"),
    import("./messages/ar.contact.json"), import("./messages/ar.misc.json"),
  ]).then(([common, tool, faq, pricing, auth, legal, contact, misc]) => ({
    common: common.default, tool: tool.default, faq: faq.default,
    pricing: pricing.default, auth: auth.default, legal: legal.default,
    contact: contact.default, misc: misc.default,
  })),
  es: () => Promise.all([
    import("./messages/es.common.json"), import("./messages/es.tool.json"),
    import("./messages/es.faq.json"), import("./messages/es.pricing.json"),
    import("./messages/es.auth.json"), import("./messages/es.legal.json"),
    import("./messages/es.contact.json"), import("./messages/es.misc.json"),
  ]).then(([common, tool, faq, pricing, auth, legal, contact, misc]) => ({
    common: common.default, tool: tool.default, faq: faq.default,
    pricing: pricing.default, auth: auth.default, legal: legal.default,
    contact: contact.default, misc: misc.default,
  })),
  pt: () => Promise.all([
    import("./messages/pt.common.json"), import("./messages/pt.tool.json"),
    import("./messages/pt.faq.json"), import("./messages/pt.pricing.json"),
    import("./messages/pt.auth.json"), import("./messages/pt.legal.json"),
    import("./messages/pt.contact.json"), import("./messages/pt.misc.json"),
  ]).then(([common, tool, faq, pricing, auth, legal, contact, misc]) => ({
    common: common.default, tool: tool.default, faq: faq.default,
    pricing: pricing.default, auth: auth.default, legal: legal.default,
    contact: contact.default, misc: misc.default,
  })),
  id: () => Promise.all([
    import("./messages/id.common.json"), import("./messages/id.tool.json"),
    import("./messages/id.faq.json"), import("./messages/id.pricing.json"),
    import("./messages/id.auth.json"), import("./messages/id.legal.json"),
    import("./messages/id.contact.json"), import("./messages/id.misc.json"),
  ]).then(([common, tool, faq, pricing, auth, legal, contact, misc]) => ({
    common: common.default, tool: tool.default, faq: faq.default,
    pricing: pricing.default, auth: auth.default, legal: legal.default,
    contact: contact.default, misc: misc.default,
  })),
  fr: () => Promise.all([
    import("./messages/fr.common.json"), import("./messages/fr.tool.json"),
    import("./messages/fr.faq.json"), import("./messages/fr.pricing.json"),
    import("./messages/fr.auth.json"), import("./messages/fr.legal.json"),
    import("./messages/fr.contact.json"), import("./messages/fr.misc.json"),
  ]).then(([common, tool, faq, pricing, auth, legal, contact, misc]) => ({
    common: common.default, tool: tool.default, faq: faq.default,
    pricing: pricing.default, auth: auth.default, legal: legal.default,
    contact: contact.default, misc: misc.default,
  })),
  tr: () => Promise.all([
    import("./messages/tr.common.json"), import("./messages/tr.tool.json"),
    import("./messages/tr.faq.json"), import("./messages/tr.pricing.json"),
    import("./messages/tr.auth.json"), import("./messages/tr.legal.json"),
    import("./messages/tr.contact.json"), import("./messages/tr.misc.json"),
  ]).then(([common, tool, faq, pricing, auth, legal, contact, misc]) => ({
    common: common.default, tool: tool.default, faq: faq.default,
    pricing: pricing.default, auth: auth.default, legal: legal.default,
    contact: contact.default, misc: misc.default,
  })),
  vi: () => Promise.all([
    import("./messages/vi.common.json"), import("./messages/vi.tool.json"),
    import("./messages/vi.faq.json"), import("./messages/vi.pricing.json"),
    import("./messages/vi.auth.json"), import("./messages/vi.legal.json"),
    import("./messages/vi.contact.json"), import("./messages/vi.misc.json"),
  ]).then(([common, tool, faq, pricing, auth, legal, contact, misc]) => ({
    common: common.default, tool: tool.default, faq: faq.default,
    pricing: pricing.default, auth: auth.default, legal: legal.default,
    contact: contact.default, misc: misc.default,
  })),
  hi: () => Promise.all([
    import("./messages/hi.common.json"), import("./messages/hi.tool.json"),
    import("./messages/hi.faq.json"), import("./messages/hi.pricing.json"),
    import("./messages/hi.auth.json"), import("./messages/hi.legal.json"),
    import("./messages/hi.contact.json"), import("./messages/hi.misc.json"),
  ]).then(([common, tool, faq, pricing, auth, legal, contact, misc]) => ({
    common: common.default, tool: tool.default, faq: faq.default,
    pricing: pricing.default, auth: auth.default, legal: legal.default,
    contact: contact.default, misc: misc.default,
  })),
  de: () => Promise.all([
    import("./messages/de.common.json"), import("./messages/de.tool.json"),
    import("./messages/de.faq.json"), import("./messages/de.pricing.json"),
    import("./messages/de.auth.json"), import("./messages/de.legal.json"),
    import("./messages/de.contact.json"), import("./messages/de.misc.json"),
  ]).then(([common, tool, faq, pricing, auth, legal, contact, misc]) => ({
    common: common.default, tool: tool.default, faq: faq.default,
    pricing: pricing.default, auth: auth.default, legal: legal.default,
    contact: contact.default, misc: misc.default,
  })),
  ja: () => Promise.all([
    import("./messages/ja.common.json"), import("./messages/ja.tool.json"),
    import("./messages/ja.faq.json"), import("./messages/ja.pricing.json"),
    import("./messages/ja.auth.json"), import("./messages/ja.legal.json"),
    import("./messages/ja.contact.json"), import("./messages/ja.misc.json"),
  ]).then(([common, tool, faq, pricing, auth, legal, contact, misc]) => ({
    common: common.default, tool: tool.default, faq: faq.default,
    pricing: pricing.default, auth: auth.default, legal: legal.default,
    contact: contact.default, misc: misc.default,
  })),
  ko: () => Promise.all([
    import("./messages/ko.common.json"), import("./messages/ko.tool.json"),
    import("./messages/ko.faq.json"), import("./messages/ko.pricing.json"),
    import("./messages/ko.auth.json"), import("./messages/ko.legal.json"),
    import("./messages/ko.contact.json"), import("./messages/ko.misc.json"),
  ]).then(([common, tool, faq, pricing, auth, legal, contact, misc]) => ({
    common: common.default, tool: tool.default, faq: faq.default,
    pricing: pricing.default, auth: auth.default, legal: legal.default,
    contact: contact.default, misc: misc.default,
  })),
  ru: () => Promise.all([
    import("./messages/ru.common.json"), import("./messages/ru.tool.json"),
    import("./messages/ru.faq.json"), import("./messages/ru.pricing.json"),
    import("./messages/ru.auth.json"), import("./messages/ru.legal.json"),
    import("./messages/ru.contact.json"), import("./messages/ru.misc.json"),
  ]).then(([common, tool, faq, pricing, auth, legal, contact, misc]) => ({
    common: common.default, tool: tool.default, faq: faq.default,
    pricing: pricing.default, auth: auth.default, legal: legal.default,
    contact: contact.default, misc: misc.default,
  })),
};

/**
 * Load all namespace messages for a given locale.
 * Uses eager static imports so that the JSON files are bundled at build time.
 */
export async function loadMessages(locale: Locale) {
  if (cached?.locale === locale) {
    return cached.data;
  }
  const ns = await LOADERS[locale]();
  const data = buildMessages(ns.common, ns.tool, ns.faq, ns.pricing, ns.auth, ns.legal, ns.contact, ns.misc);
  cached = { locale, data };
  return data;
}

/**
 * Invalidate the in-memory cache (useful in development after hot reloads).
 */
export function clearMessagesCache() {
  cached = null;
}
