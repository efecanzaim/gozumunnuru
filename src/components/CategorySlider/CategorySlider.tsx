"use client";

import React from "react";
import styles from "./CategorySlider.module.css";
import {
  CategorySliderTab,
  categorySliderData,
} from "./categorySliderData";
import { getBasePath } from "@/utils/basePath";
import "tiny-slider/dist/tiny-slider.css";

type CategorySliderProps = {
  tabs?: CategorySliderTab[];
};

export default function CategorySlider({
  tabs = categorySliderData,
}: CategorySliderProps) {
  const basePath = getBasePath();
  const containerRefs = React.useRef<Record<string, HTMLDivElement | null>>({});
  const sliderRefs = React.useRef<Record<string, HTMLDivElement | null>>({});
  const sliderInstances = React.useRef<Record<string, any>>({});
  const [activeTab, setActiveTab] = React.useState(
    tabs[0]?.id ?? ""
  );

  React.useEffect(() => {
    if (!activeTab) return;
    const sliderEl = sliderRefs.current[activeTab];
    if (!sliderEl) return;

    if (sliderEl.classList.contains("tns-slider")) return;

    let isMounted = true;

    const initSlider = () => {
      import("tiny-slider/src/tiny-slider").then(({ tns }) => {
        if (!isMounted || !sliderRefs.current[activeTab]) return;

        const sliderEl = sliderRefs.current[activeTab];
        if (!sliderEl || sliderEl.classList.contains("tns-slider")) return;

        const containerEl = containerRefs.current[activeTab];
        if (!containerEl) return;

      sliderInstances.current[activeTab] = tns({
        container: sliderRefs.current[activeTab],
        controls: false,
        autoplay: false,
        items: 4,
        gutter: 30,
        mouseDrag: false,
        nav: true,
        navPosition: "bottom",
        preventScrollOnTouch: "auto",
        arrowKeys: true,
        slideBy: "page",
        speed: 600,
        loop: false,
        lazyload: true,
        lazyloadSelector: ".-lazyImage",
        onInit: (e: any) => {
          if (e.slideCount < 4) {
            e.container.closest(".tns-slider")?.classList.add("less-than-four");
          }
          const controls = containerEl.querySelector(".controls");
          if (controls && e.slideCount >= 4) {
            (controls as HTMLElement).style.display = "none";
          }
          const prevBtn = containerEl.querySelector(".controls .prev");
          if (prevBtn) {
            (prevBtn as HTMLElement).style.display = "none";
          }
        },
      } as any);

      const instance = sliderInstances.current[activeTab];
      const prevBtn = containerEl.querySelector(".controls .prev");
      const nextBtn = containerEl.querySelector(".controls .next");

      const handleNav = (direction: "prev" | "next") => {
        const navButtons = containerEl.querySelectorAll('.tns-nav button:not([style*="display:none"])');
        const activeNav = containerEl.querySelector(".tns-nav-active");
        if (activeNav) {
          const nextNav = direction === "prev" ? activeNav.previousElementSibling : activeNav.nextElementSibling;
          if (nextNav && (nextNav as HTMLElement).style.display !== "none") {
            (nextNav as HTMLElement).click();
          } else if (navButtons.length > 0) {
            const targetButton = direction === "prev" ? navButtons[navButtons.length - 1] : navButtons[0];
            (targetButton as HTMLElement).click();
          }
          const newActiveNav = containerEl.querySelector(".tns-nav-active");
          if (newActiveNav && navButtons.length > 0) {
            const activeIndex = parseInt(newActiveNav.getAttribute("data-nav") || "0");
            const isLast = activeIndex === navButtons.length - 1;
            if (prevBtn) {
              (prevBtn as HTMLElement).style.display = activeIndex === 0 ? "none" : "flex";
            }
            if (nextBtn) {
              (nextBtn as HTMLElement).style.display = isLast ? "none" : "flex";
            }
          }
        }
      };

      if (prevBtn) {
        prevBtn.addEventListener("click", () => handleNav("prev"));
      }
      if (nextBtn) {
        nextBtn.addEventListener("click", () => handleNav("next"));
      }

      if (instance?.events) {
        instance.events.on("indexChanged", () => {
          containerEl.classList.add("activated");
        });
      }
    });
    };

    setTimeout(() => {
      initSlider();
    }, 0);

    return () => {
      isMounted = false;
    };
  }, [activeTab, tabs]);

  React.useEffect(() => {
    return () => {
      Object.values(sliderInstances.current).forEach((instance) => {
        instance?.destroy?.();
      });
      sliderInstances.current = {};
    };
  }, []);

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  if (!tabs.length) {
    return null;
  }

  return (
    <div className={styles.categorySlider} data-category-slider>
      <div className={styles.categorySliderNav}>
        {tabs.map((tab, index) => (
          <div
            key={tab.id}
            className={`${styles.categorySliderNavItem} ${
              tab.id === activeTab ? styles.categorySliderNavItemActive : ""
            }`}
            data-target-id={`categorySliderTab-${index + 1}`}
            onClick={() => handleNavClick(tab.id)}
          >
            {tab.label}
          </div>
        ))}
      </div>

      <div className={styles.categorySliderTabs}>
        {tabs.map((tab, index) => (
          <div
            key={tab.id}
            id={`categorySliderTab-${index + 1}`}
            className={`${styles.categorySliderTab} ${
              tab.id === activeTab ? styles.categorySliderTabActive : ""
            }`}
          >
            <div
              className={styles.categorySliderContainer}
              ref={(el) => {
                containerRefs.current[tab.id] = el;
              }}
            >
              <div className={styles.controls}>
                <div className={`${styles.controlsPrev} prev`}></div>
                <div className={`${styles.controlsNext} next`}></div>
              </div>
              <div
                ref={(el) => {
                  sliderRefs.current[tab.id] = el;
                }}
                className={`${styles.categorySliderWrapper}`}
              >
                {tab.items.map((item, itemIndex) => (
                  <div
                    key={item.id}
                    className={`${styles.categorySliderItem} categorySliderItem swiper-slide`}
                    data-category-item
                    data-index={index + 1}
                    data-id={`categorySliderItem${index + 1}${itemIndex + 1}`}
                    data-link={item.url}
                    data-slot={itemIndex + 1}
                    data-name={item.title}
                  >
                    <a
                      href={item.url}
                      title={item.title}
                      className={styles.categorySliderItemImage}
                    >
                      <img
                        src={`https://cdn.beymen.com/assets/desktop/img/beymen-placeholder.svg?t=2`}
                        data-src={`${basePath}${item.image}`}
                        alt={item.title}
                        className="swiper-lazy -lazyImage"
                      />
                    </a>
                    <a
                      href={item.url}
                      title={item.title}
                      className={styles.categorySliderItemContent}
                    >
                      <div className={styles.categorySliderItemTitle}>
                        {item.title}
                      </div>
                      <div className={styles.categorySliderItemDescription}>
                        {item.description}
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

