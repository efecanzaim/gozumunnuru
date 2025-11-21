"use client";

import Image from "next/image";
import Link from "next/link";
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
  const [activeTab, setActiveTab] = React.useState(
    tabs[0]?.id ?? ""
  );
  const sliderRefs = React.useRef<Record<string, HTMLDivElement | null>>({});
  const sliderInstances = React.useRef<Record<string, any>>({});

  React.useEffect(() => {
    if (!activeTab || sliderInstances.current[activeTab]) return;
    const sliderEl = sliderRefs.current[activeTab];
    if (!sliderEl) return;

    let isMounted = true;

    import("tiny-slider/src/tiny-slider").then(({ tns }) => {
      if (!isMounted || !sliderRefs.current[activeTab]) return;
      sliderInstances.current[activeTab] = tns({
        container: sliderRefs.current[activeTab],
        controls: true,
        controlsText: ["", ""],
        autoplay: false,
        items: 4,
        gutter: 30,
        mouseDrag: true,
        nav: true,
        navPosition: "bottom",
        preventScrollOnTouch: "auto",
        arrowKeys: true,
        slideBy: "page",
        speed: 600,
        onInit: (info: any) => {
          if (info.slideCount < 4) {
            info.container.closest(".tns-slider")?.classList.add("less-than-four");
          }
        },
      } as any);

      const instance = sliderInstances.current[activeTab];
      if (instance?.events) {
        instance.events.on("indexChanged", (eventInfo: any) => {
          const container = eventInfo.container?.closest(
            `.${styles.categorySliderContainer}`
          );
          if (container) {
            container.classList.add(styles.categorySliderContainerActivated);
          }
        });
      }
    });

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

  if (!tabs.length) {
    return null;
  }

  return (
    <section className={styles.categorySlider}>
      <div className={styles.categorySliderContainer}>
        <div className={styles.categorySliderNav}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`${styles.categorySliderNavItem} ${
                tab.id === activeTab ? styles.categorySliderNavItemActive : ""
              }`}
              data-target-id={tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className={styles.categorySliderTabs}>
          {tabs.map((tab) => (
            <div
              key={tab.id}
              id={`category-tab-${tab.id}`}
              className={`${styles.categorySliderTab} ${
                tab.id === activeTab ? styles.categorySliderTabActive : ""
              }`}
            >
              <div
                ref={(el) => {
                  sliderRefs.current[tab.id] = el;
                }}
                className={styles.categorySliderWrapper}
              >
                {tab.items.map((item, index) => (
                  <div
                    key={item.id}
                    className={`${styles.categorySliderItem} categorySliderItem`}
                    data-category-item
                    data-id={item.id}
                    data-index={index + 1}
                    data-name={item.title}
                    data-slot={item.slot || ""}
                    data-link={item.url}
                  >
                    <div className={styles.categorySliderItemImage}>
                      <Link href={item.url}>
                        <Image
                          src={`${basePath}${item.image}`}
                          alt={item.title}
                          width={387}
                          height={520}
                          priority={false}
                        />
                      </Link>
                    </div>
                    <div className={styles.categorySliderItemContent}>
                      <h3 className={styles.categorySliderItemTitle}>
                        {item.title}
                      </h3>
                      <p className={styles.categorySliderItemDesc}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

