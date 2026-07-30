import HeaderClient from "@/components/HeaderClient";
import FooterClient from "@/components/FooterClient";
import { CompressorTool } from "@/components/CompressorTool";

// 根路径（/）渲染：Header + 内容 + Footer。
// [lang]/* 路由不要复用此 page —— 它们直接 render <CompressorTool />，
// Header/Footer 由 [lang]/layout.tsx 提供，避免重复渲染。
export default function HomePage() {
  return (
    <>
      <HeaderClient />
      <CompressorTool />
      <FooterClient />
    </>
  );
}
