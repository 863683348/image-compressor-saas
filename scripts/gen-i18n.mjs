// Generates 96 messages JSON files (12 locales x 8 domains) from the
// translation data files in ./gen-i18n/data-{a,b,c,d}.mjs.
//
// Key set is derived from the existing en.*.json files, so any key added to
// English in the future must also be added to the data files (the script
// warns about missing keys).
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import dataA from "./gen-i18n/data-a.mjs";
import dataB from "./gen-i18n/data-b.mjs";
import dataC from "./gen-i18n/data-c.mjs";
import dataD from "./gen-i18n/data-d.mjs";

const ALL = { ...dataA, ...dataB, ...dataC, ...dataD };
const LANGS = ["ar", "es", "pt", "id", "fr", "tr", "vi", "hi", "de", "ja", "ko", "ru"];
const DOMAINS = ["common", "tool", "faq", "pricing", "auth", "legal", "contact", "misc"];

const __dirname = dirname(fileURLToPath(import.meta.url));
const messagesDir = join(__dirname, "../src/i18n/messages");

function readEn(domain) {
  return JSON.parse(readFileSync(join(messagesDir, `en.${domain}.json`), "utf8"));
}

let missingTotal = 0;
for (const lang of LANGS) {
  for (const domain of DOMAINS) {
    const template = readEn(domain);
    const data = ALL[lang]?.[domain];
    if (!data) {
      console.error(`!! ${lang}.${domain}: data file missing entirely`);
      missingTotal++;
      continue;
    }
    const missing = Object.keys(template).filter((k) => !(k in data));
    if (missing.length) {
      console.error(`!! ${lang}.${domain}: missing keys -> ${missing.join(", ")}`);
      missingTotal += missing.length;
    }
    writeFileSync(join(messagesDir, `${lang}.${domain}.json`), JSON.stringify(data, null, 2) + "\n");
  }
  console.log(`ok ${lang}`);
}

if (missingTotal > 0) {
  console.error(`\nFAIL: ${missingTotal} missing translations — abort check`);
  process.exit(1);
}
console.log("\nAll 12 locales x 8 domains generated successfully.");
