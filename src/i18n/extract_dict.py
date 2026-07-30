#!/usr/bin/env python3
"""Convert i18n.ts dict into next-intl namespace JSON files."""

import re
import json
from pathlib import Path

i18n_ts_path = Path("saas/src/lib/i18n.ts")
content = i18n_ts_path.read_text()

def extract_block_between_braces(text, start_keyword):
    # Simple robust method: find start_keyword, then find first { after it,
    # then use brace counting to find the matching }
    idx = text.find(start_keyword)
    if idx == -1:
        return None
    brace_start = text.find("{", idx)
    if brace_start == -1:
        return None
    brace_count = 1
    pos = brace_start + 1
    body_chars = []
    while pos < len(text) and brace_count > 0:
        ch = text[pos]
        if ch == "{":
            brace_count += 1
        elif ch == "}":
            brace_count -= 1
            if brace_count == 0:
                break
        body_chars.append(ch)
        pos += 1
    return "".join(body_chars)

zh_body = extract_block_between_braces(content, "zh")
en_body = extract_block_between_braces(content, "en")
print(f"Zh body length: {len(zh_body) if zh_body else 0}")
print(f"En body length: {len(en_body) if en_body else 0}")

def parse_object_body(body_text):
    if not body_text:
        return {}
    result = {}
    pairs = []
    current = []
    in_string = False
    string_char = None
    i = 0
    while i < len(body_text):
        ch = body_text[i]
        if not in_string and ch in ('"', "'"):
            in_string = True
            string_char = ch
            current.append(ch)
        elif in_string and ch == string_char:
            if i > 0 and body_text[i - 1] != "\\":
                in_string = False
                string_char = None
            current.append(ch)
        elif in_string:
            current.append(ch)
        elif not in_string and ch == ",":
            pair = "".join(current).strip()
            if pair:
                pairs.append(pair)
            current = []
        else:
            current.append(ch)
        i += 1
    if current:
        pair = "".join(current).strip()
        if pair:
            pairs.append(pair)
    for pair in pairs:
        colon_idx = pair.find(":")
        if colon_idx == -1:
            continue
        key_str = pair[:colon_idx].strip()
        val_str = pair[colon_idx + 1 :].strip()
        key = key_str.strip('"\'')
        if not key:
            continue
        if val_str.startswith('"') or val_str.startswith("'"):
            val = val_str.strip('"\'')
        elif val_str.lower() == "true":
            val = True
        elif val_str.lower() == "false":
            val = False
        elif val_str.lower() == "null":
            val = None
        elif val_str.startswith("(") or val_str.startswith("{"):
            val = None
        else:
            try:
                val = int(val_str)
            except ValueError:
                try:
                    val = float(val_str)
                    if val.is_integer():
                        val = int(val)
                except ValueError:
                    val = val_str
        result[key] = val
    return result

zh_dict = parse_object_body(zh_body) if zh_body else {}
en_dict = parse_object_body(en_body) if en_body else {}
print(f"Parsed zh dict: {len(zh_dict)} keys")
print(f"Parsed en dict: {len(en_dict)} keys")

common_keys = [
    "title", "brand", "badge", "privacy", "langTitle", "themeTitle",
    "footer", "footerPrivacy", "footerTerms", "footerFaq", "footerBlog",
    "footerContact", "footerDesc", "footerRights"
]

tool_keys = [
    "dropBig", "dropSub", "dropFmt", "dropActive",
    "quality", "format", "formatKeep", "targetLabel", "targetHint",
    "ctrlAll", "deselectAll", "downloadAll", "downloadZip", "removeDone",
    "colFile", "colOrig", "colComp", "colRate", "colStatus", "colAction",
    "statusPending", "statusProcessing", "statusDone", "statusError",
    "actDownload", "actRemove", "preview", "cmpOrig", "cmpComp", "cmpSlider",
    "toastTargetUnreachable", "toastCopied"
]

faq_keys = [
    "faqTitle", "faq1Q", "faq1A", "faq2Q", "faq2A", "faq3Q", "faq3A",
    "faq4Q", "faq4A", "faq5Q", "faq5A", "faq6Q", "faq6A", "faq7Q", "faq7A",
    "faq8Q", "faq8A"
]

pricing_keys = [
    "pricing", "pricingTitle", "pricingSub", "pricingFree", "pricingFreeDesc",
    "pricingFreePrice", "pricingFreePer", "pricingFreeC1", "pricingFreeC2",
    "pricingFreeC3", "pricingFreeC4", "pricingPro", "pricingProDesc",
    "pricingProPrice", "pricingProPer", "pricingProC1", "pricingProC2",
    "pricingProC3", "pricingProC4", "pricingYearly", "pricingCta",
    "pricingLogin", "pricingNote", "quotaUsed", "quotaLimit", "quotaUpgrade"
]

auth_keys = ["signIn", "signOut", "signInWithGoogle"]

legal_keys = [
    "termsTitle", "termsUpdated", "termsP1", "termsP2", "termsP3", "termsP4",
    "termsP5", "termsP6",
    "blogTitle", "blogSub", "blog1Title", "blog1Desc", "blog2Title", "blog2Desc",
    "blog3Title", "blog3Desc"
]

contact_keys = [
    "contactTitle", "contactSub", "contactName", "contactEmail", "contactMsg",
    "contactSend", "contactSuccess"
]

def categorize(dct, key_groups):
    namespaces = {}
    all_used = set()
    for name, keys in key_groups.items():
        ns = {k: dct[k] for k in keys if k in dct}
        if ns:
            namespaces[name] = ns
            all_used.update(ns.keys())
    misc = {k: v for k, v in dct.items() if k not in all_used}
    if misc:
        namespaces["misc"] = misc
    return namespaces

zh_namespaces = categorize(
    zh_dict,
    {
        "common": common_keys,
        "tool": tool_keys,
        "faq": faq_keys,
        "pricing": pricing_keys,
        "auth": auth_keys,
        "legal": legal_keys,
        "contact": contact_keys,
    }
)

en_namespaces = categorize(
    en_dict,
    {
        "common": common_keys,
        "tool": tool_keys,
        "faq": faq_keys,
        "pricing": pricing_keys,
        "auth": auth_keys,
        "legal": legal_keys,
        "contact": contact_keys,
    }
)

# Write output files
output_dir = Path("saas/src/i18n/messages")
output_dir.mkdir(parents=True, exist_ok=True)

for lang_code, ns_dict in [("zh", zh_namespaces), ("en", en_namespaces)]:
    for namespace, data in ns_dict.items():
        file_path = output_dir / f"{lang_code}.{namespace}.json"
        file_path.write_text(json.dumps(data, ensure_ascii=False, indent=2))
        print(f"Written: {lang_code}.{namespace}.json ({len(data)} keys)")

print(f"Total: {len(output_dir)} namespace files created")
