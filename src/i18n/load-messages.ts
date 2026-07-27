import "server-only";

import type { Locale } from "./config";

type Messages = Record<string, string>;

let cached: { locale: Locale; data: ReturnType<typeof buildMessages> } | null = null;

function buildMessages(common: Messages, tool: Messages, faq: Messages, pricing: Messages, auth: Messages, legal: Messages, contact: Messages, misc: Messages) {
  const flat = { ...common, ...tool, ...faq, ...pricing, ...auth, ...legal, ...contact, ...misc } as const;
  return { common, tool, faq, pricing, auth, legal, contact, misc, flat } as const;
}

/**
 * Load all namespace messages for a given locale.
 * Uses eager static imports so that the JSON files are bundled at build time
 * (no dynamic import → no runtime lookup overhead).
 */
export async function loadMessages(locale: Locale) {
  // Return cached if already loaded for this locale
  if (cached?.locale === locale) {
    return cached.data;
  }

  let common: Messages, tool: Messages, faq: Messages, pricing: Messages,
      auth: Messages, legal: Messages, contact: Messages, misc: Messages;

  if (locale === "zh") {
    common = (await import("./messages/zh.common.json")).default;
    tool   = (await import("./messages/zh.tool.json")).default;
    faq    = (await import("./messages/zh.faq.json")).default;
    pricing= (await import("./messages/zh.pricing.json")).default;
    auth   = (await import("./messages/zh.auth.json")).default;
    legal  = (await import("./messages/zh.legal.json")).default;
    contact= (await import("./messages/zh.contact.json")).default;
    misc   = (await import("./messages/zh.misc.json")).default;
  } else {
    common = (await import("./messages/en.common.json")).default;
    tool   = (await import("./messages/en.tool.json")).default;
    faq    = (await import("./messages/en.faq.json")).default;
    pricing= (await import("./messages/en.pricing.json")).default;
    auth   = (await import("./messages/en.auth.json")).default;
    legal  = (await import("./messages/en.legal.json")).default;
    contact= (await import("./messages/en.contact.json")).default;
    misc   = (await import("./messages/en.misc.json")).default;
  }

  const data = buildMessages(common, tool, faq, pricing, auth, legal, contact, misc);
  cached = { locale, data };
  return data;
}

/**
 * Invalidate the in-memory cache (useful in development after hot reloads).
 */
export function clearMessagesCache() {
  cached = null;
}
