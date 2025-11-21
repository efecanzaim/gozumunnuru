"use client";

import Image from "next/image";
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

    if (sliderInstanceRef.current) {
      sliderInstanceRef.current.destroy();
      sliderInstanceRef.current = null;
    }

      import("tiny-slider/src/tiny-slider").then(({ tns }) => {
      if (!sliderRef.current) return;

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
        onInit: function (info: any) {
          if (info.slideCount < 3) {
            const slider = info.container?.closest(".tns-slider");
            if (slider) {
              slider.classList.add("less-than-thre");
            }
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
    });

    return () => {
      if (sliderInstanceRef.current) {
        sliderInstanceRef.current.destroy();
        sliderInstanceRef.current = null;
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
            <div key={campaign.id} className={styles.campaignItem}>
              <div className={styles.campaignCard}>
                <Image
                  src={`${basePath}${campaign.image}`}
                  alt={campaign.title}
                  width={585}
                  height={585}
                  priority={false}
                />
                <div className={styles.campaignDetail}>
                  <h3 className={styles.campaignDetailTitle}>{campaign.title}</h3>
                  <p className={styles.campaignDetailDesc}>{campaign.description}</p>
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
