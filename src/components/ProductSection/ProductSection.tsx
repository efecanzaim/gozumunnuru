"use client";

import { useEffect, useRef } from "react";
import { tns } from "tiny-slider";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductSection.module.css";
import "tiny-slider/dist/tiny-slider.css";

type Product = {
  id: number;
  images: string[];
  brand: string;
  name: string;
  price: number;
  discountedPrice?: number;
  discountText?: string;
};

type ProductSectionProps = {
  title: string;
  products: Product[];
};

export default function ProductSection({ title, products }: ProductSectionProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const sliderInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (sliderRef.current && !sliderInstanceRef.current) {
      sliderInstanceRef.current = tns({
        container: sliderRef.current,
        items: 4,
        slideBy: 4,
        autoplay: false,
        controls: true,
        controlsText: [
          '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>',
          '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>',
        ],
        nav: false,
        mouseDrag: true,
        swipeAngle: false,
        speed: 400,
        gutter: 12,
        responsive: {
          0: {
            items: 1,
            slideBy: 1,
          },
          768: {
            items: 2,
            slideBy: 2,
          },
          1024: {
            items: 4,
            slideBy: 4,
          },
        },
      });
    }

    return () => {
      if (sliderInstanceRef.current) {
        sliderInstanceRef.current.destroy();
        sliderInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <section className={styles.productSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.titleText}>{title}</span>
        </h2>
        <div className={styles.productsWrapper}>
          <div ref={sliderRef} className={styles.productsContainer}>
            {products.map((product) => (
              <div key={product.id} className={styles.productCardWrapper}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
