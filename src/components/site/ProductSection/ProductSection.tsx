"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./ProductSection.module.css";
import ProductCard, { Product } from "./ProductCard";
import "tiny-slider/dist/tiny-slider.css";

type ProductSectionProps = {
  title: React.ReactNode;
  products?: Product[];
  variant?: "default" | "home";
};

export default function ProductSection({ title, products = [], variant = "default" }: ProductSectionProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const sliderInstanceRef = useRef<any>(null);
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const detectDevice = () => {
      setIsTablet(window.innerWidth <= 991);
      setIsMobile(window.innerWidth <= 768);
    };
    detectDevice();

    window.addEventListener("resize", detectDevice);
    return () => window.removeEventListener("resize", detectDevice);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const initSlider = async () => {
      if (!sliderRef.current || products.length === 0 || isMobile) return;

      if (sliderInstanceRef.current) {
        sliderInstanceRef.current.destroy();
        sliderInstanceRef.current = null;
      }

      const { tns } = await import("tiny-slider/src/tiny-slider");

      const isMobileWidth = window.innerWidth <= 768;
      const sliderItems = variant === "home" ? 4 : (isMobileWidth ? 1.2 : 4);

      sliderInstanceRef.current = tns({
        container: sliderRef.current,
        controlsText: ["", ""],
        autoplay: false,
        items: sliderItems,
        gutter: isMobileWidth ? 12 : 0,
        mouseDrag: true,
        touch: true,
        swipeAngle: false,
        lazyload: true,
        lazyloadSelector: ".-lazyImage",
        nav: false,
        navPosition: "bottom",
        preventScrollOnTouch: false,
        arrowKeys: true,
        slideBy: isMobileWidth ? 1 : "page",
        speed: 600,
        loop: false,
        onInit: function(e: any) {
          if (e?.slideCount < 5) {
            const slider = e.container?.closest(".tns-slider");
            slider?.classList.add("less-than-five");
          }
        }
      } as any);

      if (sliderInstanceRef.current?.events) {
        sliderInstanceRef.current.events.on("indexChanged", function (e: any) {
          const container = e.container?.closest(`.${styles.container}`);
          container?.classList.add("activated");
        });
      }
    };

    const timer = setTimeout(initSlider, 50);

    return () => {
      clearTimeout(timer);
      if (sliderInstanceRef.current) {
        sliderInstanceRef.current.destroy();
        sliderInstanceRef.current = null;
      }
    };
  }, [products, variant, isMobile]);

  const sliderId = variant === "home" ? "sliderRecommendByIdHome" : `slider${variant}`;

  return (
    <div 
      className={`${styles.productSlider} ${variant === "home" ? styles.home : ""}`}
      id={sliderId}
    >
      {products.length > 0 && <h3 className={styles.title}>{title}</h3>}
      <div className={styles.container}>
        <div 
          ref={sliderRef} 
          className={`${styles.wrapper} ${isMobile ? styles.wrapperMobile : ""} ${products.length === 0 ? styles.withLoading : ""}`}
        >
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className={styles.item}
              style={{ 
                minWidth: isMobile 
                  ? `calc(100vw - 40px)` 
                  : isTablet 
                    ? "275px" 
                    : "387px" 
              }}
              data-index={index}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

