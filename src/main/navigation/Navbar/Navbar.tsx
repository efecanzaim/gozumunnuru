"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import type { FocusEvent, TransitionEvent } from "react";
import { Search, Instagram, User, Heart, ShoppingCart } from "lucide-react";
import { useRouter } from 'next/navigation'
import styles from "./Navbar.module.css";
import { getBasePath } from "@/utils/basePath";
import { translations } from "../language/language-config";
import { useLanguageContext } from "../language/language-context";
import { LanguageSwitcher } from "../language/LanguageSwitcher";
import SearchOverlay from "./SearchOverlay";

type PanelLink = {
  href: string;
  label: string;
};

type PanelConfig = {
  id: string;
  label: string;
  links: PanelLink[];
  image: string;
};

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

const auxiliaryBottomLinks = [{ href: "/yatirim", label: "Yatırım" }];

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

export default function Navbar() {
  const basePath = getBasePath();
  const router = useRouter();
  const { selectedLanguage } = useLanguageContext();
  const [openPanel, setOpenPanel] = useState<string | null>(null);
  const [panelContent, setPanelContent] = useState<PanelLink[]>([]);
  const [panelContentId, setPanelContentId] = useState<string | null>(null);
  const [isPanelVisible, setIsPanelVisible] = useState(false);
  const [isPanelClosing, setIsPanelClosing] = useState(false);
  const [panelContentLabel, setPanelContentLabel] = useState<string | null>(null);
  const [panelImage, setPanelImage] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const panelConfigurations: PanelConfig[] = useMemo(
    () => [
      { id: "jewelry", label: "Mücevher", links: jewelryLinks, image: placeholderImage },
      { id: "collection", label: "Koleksiyon", links: collectionLinks, image: placeholderImage },
      { id: "bespoke", label: "Özel Tasarım", links: bespokeLinks, image: placeholderImage },
      { id: "gift", label: "Hediye", links: giftLinks, image: placeholderImage },
    ],
    []
  );

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
      const nextPanel = panelConfigurations.find(
        (panel) => panel.id === openPanel
      );

      if (nextPanel) {
        if (panelContentId !== nextPanel.id) {
          setPanelContent(nextPanel.links);
          setPanelContentId(nextPanel.id);
          setPanelContentLabel(nextPanel.label);
          setPanelImage(nextPanel.image);
        }

        setIsPanelClosing(false);

        requestAnimationFrame(() => {
          setIsPanelVisible(true);
        });
      }
    } else if (panelContentId) {
      setIsPanelVisible(false);
      setIsPanelClosing(true);
    }
  }, [openPanel, panelConfigurations, panelContentId]);

  const handlePanelTransitionEnd = (
    event: TransitionEvent<HTMLDivElement>
  ) => {
    if (event.propertyName !== "max-height") {
      return;
    }

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
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const showPanelBorder = isPanelVisible || isPanelClosing;
  const t = translations[selectedLanguage.code] || translations.tr;

  return (
    <header className={styles.container}>
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
                {isInstagram && (
                  <Instagram size={14} className={styles.topLinkIcon} />
                )}
                {label}
              </Link>
            );
          })}
          <LanguageSwitcher variant="navbar" className={styles.languageSelectWrapper} />
        </nav>
      </div>

      <div className={styles.middleBar}>
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

        <form className={styles.searchForm} role="search">
          <label htmlFor="nav-search" className={styles.srOnly}>
            {t.searchLabel}
          </label>
          <input
            id="nav-search"
            type="search"
            placeholder={t.search}
            aria-label={t.searchLabel}
            onFocus={() => setIsSearchOpen(true)}
          />
          <button type="submit" className={styles.searchButton} aria-label={t.search} disabled>
            <Search size={18} />
          </button>
        </form>
        {/* <nav className={styles.middleBarActions}>
          <Link href="/hesabim" className={styles.middleBarAction}>
            <User size={24} />
            <span>Hesabım</span>
          </Link>
          <Link href="/favorilerim" className={styles.middleBarAction}>
            <Heart size={24} />
            <span>Favorilerim</span>
          </Link>
          <Link href="/sepetim" className={styles.middleBarAction}>
            <ShoppingCart size={24} />
            <span>Sepetim</span>
          </Link>
        </nav> */}
      </div>

      <div
        className={styles.bottomSection}
        onBlur={handlePanelBlur}
      >
        <div className={styles.bottomBar}>
          {panelConfigurations.map((panel, index) => {
            const routeMap: Record<string, string> = {
              jewelry: '/mucevher',
              collection: '/koleksiyon',
              bespoke: '/ozel-tasarim',
              gift: '/hediye',
            }

            return (
              <button
                key={panel.id}
                type="button"
                className={styles.bottomTrigger}
                aria-expanded={openPanel === panel.id}
                aria-controls="navbar-bottom-panel"
                onClick={() => {
                  // open/close panel for hover interactions
                  setOpenPanel((prev) => (prev === panel.id ? null : panel.id))
                  // navigate to the category page as well
                  const target = routeMap[panel.id]
                  if (target) router.push(target)
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
                  const panelElement = document.getElementById("navbar-bottom-panel");
                  const isInPanel = panelElement && relatedTarget && panelElement.contains(relatedTarget);
                  const isInButton = relatedTarget && relatedTarget.classList.contains(styles.bottomTrigger);

                  if (!isInPanel && !isInButton) {
                    if (closeTimeoutRef.current) {
                      clearTimeout(closeTimeoutRef.current);
                    }
                    closeTimeoutRef.current = setTimeout(() => {
                      if (openPanel === panel.id) {
                        setOpenPanel(null);
                      }
                      closeTimeoutRef.current = null;
                    }, 200);
                  }
                }}
                onFocus={() => setOpenPanel(panel.id)}
                onKeyDown={(event) => {
                  if (event.key === "Escape") {
                    setOpenPanel(null);
                  }
                }}
              >
                {panel.label}
              </button>
            )
          })}
          <nav className={styles.bottomLinks} aria-label="Alt menü bağlantıları">
            {auxiliaryBottomLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onMouseEnter={() => setOpenPanel(null)}
                onFocus={() => setOpenPanel(null)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div 
          className={styles.bottomPanelWrapper} 
          onBlur={handlePanelBlur}
          onMouseEnter={() => {
            if (closeTimeoutRef.current) {
              clearTimeout(closeTimeoutRef.current);
              closeTimeoutRef.current = null;
            }
            if (openPanel) {
              setOpenPanel(openPanel);
            }
          }}
          onMouseLeave={(e) => {
            const relatedTarget = e.relatedTarget as Element | null;
            const isInsideBottomBar =
              relatedTarget && typeof relatedTarget.closest === "function"
                ? relatedTarget.closest(`.${styles.bottomBar}`)
                : false;
            if (!isInsideBottomBar) {
              setOpenPanel(null);
            }
          }}
        >
          <div
            id="navbar-bottom-panel"
            className={`${styles.bottomPanelDisplay} ${
              showPanelBorder ? styles.bottomPanelDisplayBorder : ""
            } ${isPanelVisible ? styles.bottomPanelDisplayVisible : ""}`}
            aria-hidden={!showPanelBorder}
            onTransitionEnd={handlePanelTransitionEnd}
          >
            <div className={styles.bottomPanelPattern} aria-hidden="true">
              <div className={`${styles.patternRow} ${styles.row1}`} />
              <div className={`${styles.patternRow} ${styles.row2}`} />
              <div className={`${styles.patternRow} ${styles.row3}`} />
              <div className={`${styles.patternRow} ${styles.row4}`} />
              <div className={`${styles.patternRow} ${styles.row5}`} />
            </div>
            <div className={styles.bottomPanelInner}>
              <div className={styles.bottomPanelHeadingBlock}>
                {panelContentLabel && (
                  <p className={styles.bottomPanelInfoLabel}>{panelContentLabel}</p>
                )}
              </div>
              <div className={styles.bottomPanelLinksSection}>
                <p className={styles.bottomPanelLinksTitle}>Kategori</p>
                <ul className={styles.bottomPanelList}>
                  {panelContent.map((link) => (
                    <li key={link.href} className={styles.bottomPanelItem}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.bottomPanelVisual}>
                {panelImage && (
                  <div className={styles.bottomPanelImageWrapper}>
                    <img
                      src={panelImage}
                      alt={
                        panelContentLabel
                          ? `${panelContentLabel} koleksiyon görseli`
                          : "Kategori görseli"
                      }
                      className={styles.bottomPanelImage}
                    />
                  </div>
                )}
                {panelContentId && (
                  <p className={styles.bottomPanelImageCta}>
                    {panelCtaCopy[panelContentId] ??
                      `${panelContentLabel ?? "Kategori"} koleksiyonunu keşfet`}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  );
}

