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
      <FooterClient />
    </I18nProvider>
  );
}
