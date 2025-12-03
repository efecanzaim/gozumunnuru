"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import type { FocusEvent, TransitionEvent } from "react";
import { Instagram } from "lucide-react";
import { useRouter } from "next/navigation";
import styles from "./Navbar.module.css";
import { getBasePath } from "@/utils/basePath";
import { translations } from "../language/language-config";
import { useLanguageContext } from "../language/language-context";
import { LanguageSwitcher } from "../language/LanguageSwitcher";
import SearchOverlay from "./SearchOverlay";

/* ───────────────────────────────────────────────────────────────────────────
   TYPES
─────────────────────────────────────────────────────────────────────────── */
type PanelLink = {
  href: string;
  label: string;
};

type PanelConfig = {
  id: string;
  label: string;
  href: string;
  links: PanelLink[];
  image: string;
};

/* ───────────────────────────────────────────────────────────────────────────
   CONSTANTS
─────────────────────────────────────────────────────────────────────────── */
const placeholderImage =
  "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=900&q=80";

const panelCtaCopy: Record<string, string> = {
  jewelry: "Mücevherleri keşfet",
  collection: "Koleksiyonları keşfet",
  bespoke: "Özel tasarımları keşfet",
  gift: "Hediye önerilerini keşfet",
};

const topLinksConfig = [
  { href: "https://instagram.com/", key: "instagram", external: true },
];

const jewelryLinks: PanelLink[] = [
  { href: "/mucevher/klasik-pirlanta", label: "Klasik Pırlanta" },
  { href: "/mucevher/ozel-uretim-pirlanta", label: "Özel Üretim Pırlanta" },
  { href: "/mucevher/klasik-altin", label: "Klasik Altın" },
  { href: "/mucevher/ozgun-tasarim", label: "Özgün Tasarım" },
  { href: "/mucevher/preloved", label: "Preloved" },
];

const collectionLinks: PanelLink[] = [
  { href: "/koleksiyon/klasikler", label: "Klasikler" },
  { href: "/koleksiyon/atolye", label: "Atölye" },
  { href: "/koleksiyon/yeni-nesil", label: "Yeni Nesil" },
];

const bespokeLinks: PanelLink[] = [
  { href: "/ozel-tasarim/bize-tasarlatin", label: "Bize Tasarlatın" },
  { href: "/ozel-tasarim/kendin-yarat", label: "Kendin Yarat" },
  { href: "/ozel-tasarim/nisan-evlilik", label: "Nişan-Evlilik" },
  { href: "/ozel-tasarim/kisiye-ozel-hediye", label: "Kişiye Özel Hediye" },
];

const giftLinks: PanelLink[] = [
  { href: "/hediye/ozel-gunler", label: "Özel Günler" },
  { href: "/hediye/dogum-gunu", label: "Doğum Günü" },
  { href: "/hediye/anneler-gunu", label: "Anneler Günü" },
  { href: "/hediye/kadinlar-gunu", label: "Kadınlar Günü" },
  { href: "/hediye/yeni-dogan", label: "Yeni Doğan" },
  { href: "/hediye/erkek-hediye", label: "Erkek Hediye" },
  { href: "/hediye/mini-butceli", label: "Mini Bütçeli" },
  { href: "/hediye/aksesuar", label: "Aksesuar" },
];

// Yatırım sadece link, alt menüsü yok
const investmentLink: PanelLink = { href: "/yatirim", label: "Yatırım" };

/* ───────────────────────────────────────────────────────────────────────────
   COMPONENT
─────────────────────────────────────────────────────────────────────────── */
export default function Navbar() {
  const basePath = getBasePath();
  const router = useRouter();
  const { selectedLanguage } = useLanguageContext();

  // Panel state
  const [openPanel, setOpenPanel] = useState<string | null>(null);
  const [panelContent, setPanelContent] = useState<PanelLink[]>([]);
  const [panelContentId, setPanelContentId] = useState<string | null>(null);
  const [isPanelVisible, setIsPanelVisible] = useState(false);
  const [isPanelClosing, setIsPanelClosing] = useState(false);
  const [panelContentLabel, setPanelContentLabel] = useState<string | null>(null);
  const [panelImage, setPanelImage] = useState<string | null>(null);

  // Search overlay
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const panelConfigurations: PanelConfig[] = useMemo(
    () => [
      { id: "jewelry", label: "Mücevher", href: "/mucevher", links: jewelryLinks, image: placeholderImage },
      { id: "collection", label: "Koleksiyon", href: "/koleksiyon", links: collectionLinks, image: placeholderImage },
      { id: "bespoke", label: "Özel Tasarım", href: "/ozel-tasarim", links: bespokeLinks, image: placeholderImage },
      { id: "gift", label: "Hediye", href: "/hediye", links: giftLinks, image: placeholderImage },
    ],
    []
  );

  /* ─────────────────────────────────────────────────────────────────────── */
  const handlePanelBlur = (event: FocusEvent<HTMLDivElement>) => {
    const currentTarget = event.currentTarget;
    requestAnimationFrame(() => {
      if (!currentTarget.contains(document.activeElement)) {
        setOpenPanel(null);
      }
    });
  };

  useEffect(() => {
    if (openPanel) {
      const nextPanel = panelConfigurations.find((p) => p.id === openPanel);
      if (nextPanel) {
        if (panelContentId !== nextPanel.id) {
          setPanelContent(nextPanel.links);
          setPanelContentId(nextPanel.id);
          setPanelContentLabel(nextPanel.label);
          setPanelImage(nextPanel.image);
        }
        setIsPanelClosing(false);
        requestAnimationFrame(() => setIsPanelVisible(true));
      }
    } else if (panelContentId) {
      setIsPanelVisible(false);
      setIsPanelClosing(true);
    }
  }, [openPanel, panelConfigurations, panelContentId]);

  const handlePanelTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.propertyName !== "max-height") return;
    if (!isPanelVisible) {
      setPanelContent([]);
      setPanelContentId(null);
      setPanelContentLabel(null);
      setPanelImage(null);
      setIsPanelClosing(false);
    }
  };

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  const showPanelBorder = isPanelVisible || isPanelClosing;
  const t = translations[selectedLanguage.code] || translations.tr;

  /* ─────────────────────────────────────────────────────────────────────── */
  return (
    <header className={styles.container}>
      {/* ───────────────── TOP BAR ───────────────── */}
      <div className={styles.topBar}>
        <nav className={styles.topLinks}>
          {topLinksConfig.map((link) => {
            const anchorProps = link.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {};
            const label = t[link.key];
            const isInstagram = link.key === "instagram";

            return (
              <Link
                key={link.href}
                href={link.href}
                {...anchorProps}
                className={isInstagram ? styles.topLinkWithIcon : undefined}
              >
                {isInstagram && <Instagram size={14} className={styles.topLinkIcon} />}
                {label}
              </Link>
            );
          })}
          <LanguageSwitcher variant="navbar" className={styles.languageSelectWrapper} />
        </nav>
      </div>

      {/* ───────────────── MIDDLE BAR ───────────────── */}
      <div className={styles.middleBar} onBlur={handlePanelBlur}>
        {/* Logo */}
        <div className={styles.mobileHeaderTop}>
          <Link href="/" className={styles.brand} aria-label="gözümün nuru">
            <Image
              src={`${basePath}/gozumun-nuru-logo.svg`}
              alt="gözümün nuru"
              width={211}
              height={16}
              className={styles.brandImage}
              priority
            />
          </Link>
        </div>

        {/* Kategori Butonları */}
        <nav className={styles.middleNav} aria-label="Kategoriler">
          {panelConfigurations.map((panel) => (
            <button
              key={panel.id}
              type="button"
              className={styles.middleTrigger}
              aria-expanded={openPanel === panel.id}
              aria-controls="navbar-panel"
              onClick={() => {
                setOpenPanel((prev) => (prev === panel.id ? null : panel.id));
                router.push(panel.href);
              }}
              onMouseEnter={() => {
                if (closeTimeoutRef.current) {
                  clearTimeout(closeTimeoutRef.current);
                  closeTimeoutRef.current = null;
                }
                setOpenPanel(panel.id);
              }}
              onMouseLeave={(e) => {
                const relatedTarget = e.relatedTarget as Element | null;
                const panelElement = document.getElementById("navbar-panel");
                const isInPanel = panelElement && relatedTarget && panelElement.contains(relatedTarget);
                const isInButton = relatedTarget && relatedTarget.classList.contains(styles.middleTrigger);

                if (!isInPanel && !isInButton) {
                  if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
                  closeTimeoutRef.current = setTimeout(() => {
                    if (openPanel === panel.id) setOpenPanel(null);
                    closeTimeoutRef.current = null;
                  }, 200);
                }
              }}
              onFocus={() => setOpenPanel(panel.id)}
              onKeyDown={(event) => {
                if (event.key === "Escape") setOpenPanel(null);
              }}
            >
              {panel.label}
            </button>
          ))}

          {/* Yatırım — sadece link, hover menüsü yok */}
          <Link
            href={investmentLink.href}
            className={styles.middleLink}
            onMouseEnter={() => setOpenPanel(null)}
            onFocus={() => setOpenPanel(null)}
          >
            {investmentLink.label}
          </Link>
        </nav>
      </div>

      {/* ───────────────── AÇILIR PANEL ───────────────── */}
      <div
        className={styles.panelWrapper}
        onMouseEnter={() => {
          if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
          }
          if (openPanel) setOpenPanel(openPanel);
        }}
        onMouseLeave={(e) => {
          const relatedTarget = e.relatedTarget as Element | null;
          const isInsideNav =
            relatedTarget && typeof relatedTarget.closest === "function"
              ? relatedTarget.closest(`.${styles.middleNav}`)
              : false;
          if (!isInsideNav) setOpenPanel(null);
        }}
      >
        <div
          id="navbar-panel"
          className={`${styles.panelDisplay} ${showPanelBorder ? styles.panelDisplayBorder : ""} ${isPanelVisible ? styles.panelDisplayVisible : ""}`}
          aria-hidden={!showPanelBorder}
          onTransitionEnd={handlePanelTransitionEnd}
        >
          <div className={styles.panelPattern} aria-hidden="true">
            <div className={`${styles.patternRow} ${styles.row1}`} />
            <div className={`${styles.patternRow} ${styles.row2}`} />
            <div className={`${styles.patternRow} ${styles.row3}`} />
            <div className={`${styles.patternRow} ${styles.row4}`} />
            <div className={`${styles.patternRow} ${styles.row5}`} />
          </div>
          <div className={styles.panelInner}>
            <div className={styles.panelHeadingBlock}>
              {panelContentLabel && <p className={styles.panelInfoLabel}>{panelContentLabel}</p>}
            </div>
            <div className={styles.panelLinksSection}>
              <p className={styles.panelLinksTitle}>Kategori</p>
              <ul className={styles.panelList}>
                {panelContent.map((link) => (
                  <li key={link.href} className={styles.panelItem}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.panelVisual}>
              {panelImage && (
                <div className={styles.panelImageWrapper}>
                  <img
                    src={panelImage}
                    alt={panelContentLabel ? `${panelContentLabel} koleksiyon görseli` : "Kategori görseli"}
                    className={styles.panelImage}
                  />
                </div>
              )}
              {panelContentId && (
                <p className={styles.panelImageCta}>
                  {panelCtaCopy[panelContentId] ?? `${panelContentLabel ?? "Kategori"} koleksiyonunu keşfet`}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  );
}
