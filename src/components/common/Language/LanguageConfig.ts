"use client";

export type LanguageOption = {
  code: string;
  label: string;
  labelUppercase: string;
  title: string;
};

export const languageOptions: LanguageOption[] = [
  { code: "tr", label: "Türkçe", labelUppercase: "TÜRKÇE", title: "Türkçe (Turkish)" },
  { code: "en", label: "English", labelUppercase: "ENGLISH", title: "English (İngilizce)" },
  { code: "ru", label: "Русский", labelUppercase: "РУССКИЙ", title: "Rusça (Russian)" },
];

export const translations: Record<string, Record<string, string>> = {
  tr: {
    instagram: "Instagram",
    languageSelection: "Dil Seçimi",
    language: "Dil",
    apply: "Uygula",
    close: "Kapat",
    search: "Ürün Arayın",
    searchLabel: "Arama (Search)",
  },
  en: {
    instagram: "Instagram",
    languageSelection: "Language Selection",
    language: "Language",
    apply: "Apply",
    close: "Close",
    search: "Search Products",
    searchLabel: "Search",
  },
  ru: {
    instagram: "Instagram",
    languageSelection: "Выбор языка",
    language: "Язык",
    apply: "Применить",
    close: "Закрыть",
    search: "Поиск продуктов",
    searchLabel: "Поиск",
  },
};


