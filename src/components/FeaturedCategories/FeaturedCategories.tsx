"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./FeaturedCategories.module.css";
import { useState } from "react";
import {
  FeaturedCategoryBanner,
  FeaturedCategoryLink,
  featuredCategoryBanners,
  featuredCategoryLinks,
} from "./featuredCategoriesData";
import { getBasePath } from "@/utils/basePath";

type FeaturedCategoriesProps = {
  title?: string;
  banners?: FeaturedCategoryBanner[];
  links?: FeaturedCategoryLink[];
};

export default function FeaturedCategories({
  title = "Öne Çıkan Kategoriler",
  banners = featuredCategoryBanners,
  links = featuredCategoryLinks,
}: FeaturedCategoriesProps) {
  const basePath = getBasePath();
  const [showLinks, setShowLinks] = useState(false);

  if (!banners.length) {
    return null;
  }

  return (
    <section className={styles.featuredCategories}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.banners}>
          {banners.map((banner) => (
            <div key={banner.id} className={styles.banner}>
              <Link href={banner.url} className={styles.bannerLink}>
                <Image
                  src={banner.image.startsWith('http') ? banner.image : `${basePath}${banner.image}`}
                  alt={banner.title}
                  width={276}
                  height={374}
                  className={styles.bannerImage}
                />
                <span className={styles.bannerTitle}>{banner.title}</span>
              </Link>
            </div>
          ))}
        </div>
        {links.length > 0 ? (
          <>
            <div
              className={`${styles.links} ${
                showLinks ? styles.linksVisible : ""
              }`}
            >
              {links.map((link) => (
                <div key={link.id} className={styles.linkItem}>
                  <Link href={link.url} className={styles.link}>
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
            <div className={styles.showMoreContent}>
              <button
                type="button"
                className={styles.showMoreButton}
                onClick={() => setShowLinks((prev) => !prev)}
                aria-expanded={showLinks}
              >
                {showLinks ? "Daha Az Göster" : "Daha Fazla Göster"}
              </button>
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
}

