"use client";

import { useState } from "react";
import { Globe, X } from "lucide-react";
import styles from "./LanguageSwitcher.module.css";
import { languageOptions, translations } from "./language-config";
import { useLanguageContext } from "./language-context";

type LanguageSwitcherProps = {
  variant?: "navbar" | "footer";
  className?: string;
};

export const LanguageSwitcher = ({
  variant = "navbar",
  className,
}: LanguageSwitcherProps) => {
  const { selectedLanguage, selectLanguage } = useLanguageContext();
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[selectedLanguage.code] || translations.tr;

  const wrapperClass = [
    styles.wrapper,
    variant === "footer" ? styles.footerWrapper : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  const triggerClass =
    variant === "footer"
      ? `${styles.trigger} ${styles.triggerFooter}`
      : styles.trigger;

  return (
    <div className={wrapperClass}>
      {variant === "footer" && <span className={styles.footerLabel}>{t.language}</span>}
      <button
        type="button"
        className={triggerClass}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={t.languageSelection}
      >
        <Globe className={styles.icon} aria-hidden="true" size={14} />
        <span className={styles.text}>{selectedLanguage.code.toUpperCase()}</span>
      </button>

      {isOpen && (
        <div
          className={styles.overlay}
          role="presentation"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`${styles.panel} ${isOpen ? styles.panelOpen : ""}`}
        role="dialog"
        aria-hidden={!isOpen}
        aria-labelledby="language-dialog-title"
      >
        <div className={styles.panelHeader}>
          <h2 id="language-dialog-title" className={styles.panelTitle}>
            {t.languageSelection}
          </h2>
          <button
            type="button"
            className={styles.closeButton}
            onClick={() => setIsOpen(false)}
            aria-label={t.close}
          >
            <X size={24} strokeWidth={2} />
          </button>
        </div>

        <div className={styles.panelBody}>
          <p className={styles.panelSectionTitle}>{t.language}</p>
          <div className={styles.optionList}>
            {languageOptions.map((option) => {
              const isActive = option.code === selectedLanguage.code;
              return (
                <button
                  key={option.code}
                  type="button"
                  className={`${styles.option} ${isActive ? styles.optionActive : ""}`}
                  onClick={() => selectLanguage(option)}
                  title={option.title}
                >
                  <span className={styles.radio}>
                    {isActive && <span className={styles.radioInner} />}
                  </span>
                  <span>{option.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className={styles.panelFooter}>
          <button
            type="button"
            className={styles.applyButton}
            onClick={() => setIsOpen(false)}
          >
            {t.apply}
          </button>
        </div>
      </div>
    </div>
  );
};


