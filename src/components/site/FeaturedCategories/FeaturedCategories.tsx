"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./FeaturedCategories.module.css";
import {
  FeaturedCategoryBanner,
  featuredCategoryBanners,
} from "@/data/featured-categories";
import { getBasePath } from "@/utils/basePath";

type FeaturedCategoriesProps = {
  title?: string;
  banners?: FeaturedCategoryBanner[];
};

export default function FeaturedCategories({
  title = "Öne Çıkan Kategoriler",
  banners = featuredCategoryBanners,
}: FeaturedCategoriesProps) {
  const basePath = getBasePath();

  if (!banners.length) {
    return null;
  }

  return (
    <div className="container -wide">
      <section
        className={`o-featuredCategories ${styles.featuredCategories}`}
        aria-labelledby="featured-categories-title"
      >
        <h2
          id="featured-categories-title"
          className={`o-featuredCategories__title ${styles.title}`}
        >
          {title}
        </h2>
        <div
          className={`o-featuredCategories__banners ${styles.banners}`}
        >
          {banners.map((banner) => (
            <div
              key={banner.id}
              className={`o-featuredCategoriesBanner ${styles.banner}`}
            >
              <Link
                href={banner.url}
                className={`o-featuredCategoriesBanner__link ${styles.bannerLink}`}
              >
                <Image
                  src={
                    banner.image.startsWith("http")
                      ? banner.image
                      : `${basePath}${banner.image}`
                  }
                  alt={banner.title}
                  width={276}
                  height={374}
                  className={`o-featuredCategoriesBanner__image ${styles.bannerImage}`}
                />
                <span
                  className={`o-featuredCategoriesBanner__title ${styles.bannerTitle}`}
                >
                  {banner.title}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

