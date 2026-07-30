import { dict, type Lang } from "@/lib/i18n";

// 共享翻译函数：页面与组件统一通过它取文案，避免每文件重复定义。
export function t(lang: Lang, key: string): string {
  const d = dict[lang] as Record<string, any>;
  return d?.[key] ?? key;
}
