import { cookies } from "next/headers";
import { I18nProvider } from "@/i18n/i18n-provider";
import HeaderClient from "@/components/HeaderClient";
import FooterClient from "@/components/FooterClient";
import { CompressorTool } from "@/components/CompressorTool";
import { isValidLocale } from "@/i18n/config";

// 根路径（/）渲染：Header + 内容 + Footer。
// 包一层 I18nProvider（语言来自 NEXT_LOCALE cookie，默认英文），
// 让根路径的语言切换按钮也能工作（in-place 切换，不导航）。
// [lang]/* 路由不要复用此 page —— 它们直接 render <CompressorTool />，
// Header/Footer 由 [lang]/layout.tsx 提供，避免重复渲染。
export default async function HomePage() {
  const store = await cookies();
  const cookieLocale = store.get("NEXT_LOCALE")?.value;
  const locale = isValidLocale(cookieLocale ?? "") ? (cookieLocale as string) : "en"; // 默认英文

  return (
    <I18nProvider locale={locale}>
      <HeaderClient />
      <CompressorTool />

      <section className="mx-auto max-w-3xl px-4 py-12 text-sm leading-relaxed text-[var(--muted)]">
        <h2 className="text-lg font-semibold text-[var(--fg)]">
          JPG vs PNG vs WebP: Which Format Should You Compress To?
        </h2>
        <p className="mt-3">
          Picking the right output format matters as much as the compression level. Each format
          trades quality, file size, and features differently, so the "best" one depends on what
          the image contains and where it will be used.
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            <strong>JPG (JPEG)</strong> — best for photos and images with smooth gradients. It uses
            lossy compression, so file sizes stay small, but it does not support transparency. Use it
            for photography, social posts, and web hero images.
          </li>
          <li>
            <strong>PNG</strong> — lossless and supports transparency, which makes it ideal for
            logos, icons, screenshots, and graphics with sharp edges or text. Files are usually
            larger than JPG, so compress PNG when size matters more than perfect fidelity.
          </li>
          <li>
            <strong>WebP</strong> — a modern format that often beats both JPG and PNG on size at
            similar quality, and supports transparency. Great for websites, but some older email
            clients and editors still don't accept it, so keep a JPG/PNG fallback.
          </li>
        </ul>

        <h2 className="mt-6 text-lg font-semibold text-[var(--fg)]">
          Compressing Images for Email Attachments
        </h2>
        <p className="mt-3">
          Most mail providers cap a single message at 20–25 MB, and many recipients hit limits long
          before that. If your photos or scans bounce back, compress them first: a 5 MB camera photo
          often drops to under 500 KB with no visible difference on a phone screen. Compress to JPG
          for photos and PNG for screenshots/logos, then attach — or share a download link if the
          total is still large.
        </p>

        <h2 className="mt-6 text-lg font-semibold text-[var(--fg)]">Frequently Asked Questions</h2>
        <dl className="mt-3 space-y-3">
          <div>
            <dt className="font-semibold text-[var(--fg)]">Will compression ruin my image quality?</dt>
            <dd className="mt-1">
              Lossy formats like JPG lose a little detail, but at sane quality settings the change is
              invisible on screens. PNG compression is lossless, so pixels are preserved exactly.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-[var(--fg)]">Is my image uploaded to a server?</dt>
            <dd className="mt-1">
              No. Compression runs entirely in your browser. Files never leave your device, which
              keeps private documents and photos on your machine.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-[var(--fg)]">What size should I target?</dt>
            <dd className="mt-1">
              For web and email, aim for under 200 KB per image when possible; for prints or archival
              keep higher quality. Our tool lets you preview the result before downloading.
            </dd>
          </div>
        </dl>

        <p className="mt-6">
          Want a deeper walkthrough? Read our{' '}
          <a href="/guide" className="text-[var(--brand)] hover:underline">
            complete image compression guide
          </a>
          .
        </p>
      </section>

      <FooterClient />
    </I18nProvider>
  );
}
