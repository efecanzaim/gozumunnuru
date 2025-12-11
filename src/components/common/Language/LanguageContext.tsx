"use client";

import { createContext, useContext, useMemo, useState } from "react";
import type { LanguageOption } from "./LanguageConfig";
import { languageOptions } from "./LanguageConfig";

type LanguageContextValue = {
  selectedLanguage: LanguageOption;
  selectLanguage: (option: LanguageOption) => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageOption>(languageOptions[0]);

  const value = useMemo(
    () => ({
      selectedLanguage,
      selectLanguage: setSelectedLanguage,
    }),
    [selectedLanguage]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguageContext must be used within a LanguageProvider");
  }

  return context;
};


