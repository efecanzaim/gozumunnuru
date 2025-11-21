"use client";

import React, { useEffect, useRef } from "react";
import styles from "./ProductSection.module.css";
import ProductCard, { Product } from "./ProductCard";
import "tiny-slider/dist/tiny-slider.css";

type ProductSectionProps = {
  title: string;
  products?: Product[];
  variant?: "default" | "home";
};

export default function ProductSection({ title, products = [], variant = "default" }: ProductSectionProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const sliderInstanceRef = useRef<any>(null);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 991);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    // Sadece client-side'da çalış
    if (typeof window === "undefined") return;

    const initSlider = async () => {
      if (sliderRef.current && products.length > 0) {
        // Önceki instance'ı temizle
        if (sliderInstanceRef.current) {
          sliderInstanceRef.current.destroy();
          sliderInstanceRef.current = null;
        }

        // TinySlider'ı dinamik olarak yükle
        const { tns } = await import("tiny-slider/src/tiny-slider");

        const cardWidth = isMobile ? 275 : 387;
        const sliderItems = isMobile ? 3 : 4;

        sliderInstanceRef.current = tns({
          container: sliderRef.current,
          controls: true,
          controlsText: ["", ""],
          autoplay: false,
          items: sliderItems,
          gutter: 0,
          mouseDrag: true,
          nav: false,
          navPosition: "bottom",
          preventScrollOnTouch: "auto",
          arrowKeys: true,
          slideBy: "page",
          speed: 600,
          loop: false,
        } as any);

        // onInit event handler
        if (sliderInstanceRef.current && sliderInstanceRef.current.events) {
          sliderInstanceRef.current.events.on("init", function (e: any) {
            if (e && e.slideCount < 5) {
              const slider = e.container?.closest(".tns-slider");
              if (slider) {
                slider.classList.add("less-than-five");
              }
            }
          });

          sliderInstanceRef.current.events.on("indexChanged", function (e: any) {
            const wrapper = e.container?.closest(`.${styles.wrapper}`);
            if (wrapper) {
              wrapper.classList.add("activated");
            }
          });
        }
      }
    };

    // DOM'un hazır olmasını bekle
    const timer = setTimeout(initSlider, 50);

    return () => {
      clearTimeout(timer);
      if (sliderInstanceRef.current) {
        sliderInstanceRef.current.destroy();
        sliderInstanceRef.current = null;
      }
    };
  }, [products, isMobile, variant]);

  return (
    <section className={`${styles.productSlider} ${variant === "home" ? styles.home : ""}`}>
      {products.length > 0 && <h2 className={styles.title}>{title}</h2>}
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div ref={sliderRef} className={`${styles.track} ${products.length === 0 ? styles.withLoading : ""}`}>
            {products.map((product) => (
              <div key={product.id} className={`${styles.item} tns-item`}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

