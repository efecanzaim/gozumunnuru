"use client";

import Link from "next/link";
import React from "react";
import styles from "./CampaignSection.module.css";
import { CampaignItem, campaignsData } from "./campaignsData";
import { getBasePath } from "@/utils/basePath";
import "tiny-slider/dist/tiny-slider.css";

type CampaignSectionProps = {
  title?: string;
  campaigns?: CampaignItem[];
};

export default function CampaignSection({
  title = "Kampanyalar",
  campaigns = campaignsData,
}: CampaignSectionProps) {
  const basePath = getBasePath();
  const sliderRef = React.useRef<HTMLDivElement>(null);
  const sliderInstanceRef = React.useRef<any>(null);


  React.useEffect(() => {
    if (typeof window === "undefined") return;
    if (!sliderRef.current || campaigns.length === 0) return;

    let isMounted = true;

    const initSlider = async () => {
      // Önceki instance'ı temizle
      if (sliderInstanceRef.current) {
        sliderInstanceRef.current.destroy();
        sliderInstanceRef.current = null;
      }

      // Pagination ve controls elementlerini manuel olarak temizle
      if (sliderRef.current) {
        const container = sliderRef.current.closest(`.${styles.campaignContainer}`);
        if (container) {
          const existingNav = container.querySelector(".tns-nav");
          const existingControls = container.querySelector(".tns-controls");
          if (existingNav) existingNav.remove();
          if (existingControls) existingControls.remove();
        }
      }

      if (!isMounted || !sliderRef.current) return;

      const { tns } = await import("tiny-slider/src/tiny-slider");
      
      if (!isMounted || !sliderRef.current) return;

      sliderInstanceRef.current = tns({
        container: sliderRef.current,
        controls: true,
        controlsText: ["", ""],
        autoplay: false,
        items: 3,
        gutter: 30,
        mouseDrag: false,
        nav: true,
        navPosition: "bottom",
        preventScrollOnTouch: "auto",
        arrowKeys: true,
        slideBy: "page",
        speed: 600,
        loop: true,
        lazyload: true,
        lazyloadSelector: ".-lazyImage",
        onInit: function (info: any) {
          const slider = info.container?.closest(".tns-slider");
          if (slider) {
            if (info.slideCount < 3) {
              slider.classList.add("less-than-thre");
            }
          }
          // İlk başta activated class'ını ekle - prev butonunun gözükmesi için
          const container = info.container?.closest(`.${styles.campaignContainer}`);
          if (container) {
            container.classList.add("activated");
          }
        },
      } as any);

      if (sliderInstanceRef.current?.events) {
        sliderInstanceRef.current.events.on("indexChanged", function (e: any) {
          const container = e.container?.closest(`.${styles.campaignContainer}`);
          if (container) {
            container.classList.add("activated");
          }
        });
      }
    };

    initSlider();

    return () => {
      isMounted = false;
      if (sliderInstanceRef.current) {
        sliderInstanceRef.current.destroy();
        sliderInstanceRef.current = null;
      }
      // Cleanup: Pagination ve controls elementlerini temizle
      const container = sliderRef.current?.closest(`.${styles.campaignContainer}`);
      if (container) {
        const existingNav = container.querySelector(".tns-nav");
        const existingControls = container.querySelector(".tns-controls");
        if (existingNav) existingNav.remove();
        if (existingControls) existingControls.remove();
      }
    };
  }, [campaigns]);

  if (!campaigns.length) {
    return null;
  }

  return (
    <section className={styles.campaignSection}>
      <div className={styles.campaignContainer}>
        <h2 className={styles.campaignTitle}>{title}</h2>
        <div ref={sliderRef} className={styles.sliderWrapper}>
          {campaigns.map((campaign) => (
            <div key={campaign.id} className={styles.campaignItem} data-campaign-item>
              <div className={styles.campaignCard}>
                <Link href={campaign.url} className={styles.campaignImageLink} title={campaign.title}>
                  <img
                    src="https://cdn.beymen.com/assets/desktop/img/beymen-placeholder-1125px-1650px.svg"
                    data-src={`${basePath}${campaign.image}`}
                    alt={campaign.title}
                    className="-lazyImage"
                  />
                </Link>
                <div className={styles.campaignDetail}>
                  <div className={styles.campaignDetailTitle}>{campaign.title}</div>
                  <div className={styles.campaignDetailDesc}>{campaign.description}</div>
                  <Link href={campaign.url} className={styles.campaignButton}>
                    {campaign.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
