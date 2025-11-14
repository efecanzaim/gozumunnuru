"use client";

import Link from "next/link";
import { useMemo } from "react";
import styles from "./FeaturedCategories.module.css";

export default function FeaturedCategories() {
  const basePath = useMemo(() => {
    return typeof window !== "undefined" && window.location.pathname.startsWith("/gozumunnuru")
      ? "/gozumunnuru"
      : "";
  }, []);

  return (
    <section className={styles.featuredSection} aria-label="Öne çıkan kategoriler">
      <div className={styles.featuredContainer}>
        <Link href="/mucevher" className={styles.featuredCard}>
          <div className={styles.featuredImageWrapper}>
            <img
              src={`${basePath}/necklace.jpg`}
              alt="Mücevher koleksiyonu"
              className={styles.featuredImage}
            />
          </div>
          <div className={styles.featuredOverlay}>
            <h2 className={styles.featuredTitle}>Mücevherleri keşfet</h2>
          </div>
        </Link>
        <Link href="/koleksiyon" className={styles.featuredCard}>
          <div className={styles.featuredImageWrapper}>
            <img
              src={`${basePath}/bracelets.jpg`}
              alt="Koleksiyon ürünleri"
              className={styles.featuredImage}
            />
          </div>
          <div className={styles.featuredOverlay}>
            <h2 className={styles.featuredTitle}>Koleksiyonları keşfet</h2>
          </div>
        </Link>
      </div>
    </section>
  );
}

