"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import styles from "./ProductCard.module.css";
import { getBasePath } from "@/utils/basePath";

export type ProductPromotion = {
  campaignTitle: string;
  campaignDesc?: string;
  campaignId?: string;
  promotedPrice: number;
  promotedPriceText: string;
  showPrice: boolean;
};

export type Product = {
  id: number;
  productId?: string;
  productUrl: string;
  images: string[];
  image?: string;
  brand: string;
  brandName?: string;
  name: string;
  displayName?: string;
  price: number;
  actualPrice?: number;
  actualPriceText?: string;
  originalPrice?: number;
  orginalPriceText?: string;
  discountedPrice?: number;
  secondPrice?: number;
  secondPriceText?: string;
  discountText?: string;
  discountRate?: number;
  discountRateText?: string;
  newDiscountRateText?: string;
  hasDiscount?: boolean;
  showDefaultDiscountRate?: boolean;
  productPromotions?: ProductPromotion[];
  hasPreImageTag?: boolean;
  brandCategoryId?: number;
};

type ProductCardProps = {
  product: Product;
  variant?: "slider" | "list"; // slider = ana sayfa tiny slider, list = ürün listesi sayfaları
};

export default function ProductCard({ product, variant = "slider" }: ProductCardProps) {
  const basePath = getBasePath();

  // URL'nin tam URL olup olmadığını kontrol et (http:// veya https:// ile başlıyorsa)
  const addBasePath = (url: string) => {
    if (!url) return url;
    if (url.startsWith("http://") || url.startsWith("https://") || url.startsWith("//")) {
      return url;
    }
    return `${basePath}${url.startsWith("/") ? "" : "/"}${url}`;
  };

  const brandName = product.brandName || product.brand;
  const displayName = product.displayName || product.name;
  
  const mainImage = useMemo(() => {
    if (product.images && product.images.length > 0) {
      return addBasePath(product.images[0]);
    }
    return product.image ? addBasePath(product.image) : `${basePath}/placeholder.png`;
  }, [product.image, product.images, basePath]);

  return (
    <div className={`${styles.productCard} ${variant === "list" ? styles.listVariant : ""}`}>
      {/* m-productCard__photo */}
      <div className={styles.imageWrapper}>
        {/* m-productCard__heart - favori ikonu */}
        <span className={styles.heart} style={{ display: 'none' }}>
          <svg className="icon icon-favorite-active" fill="#e90808" width="24px" height="24px">
            <use xlinkHref="#icon-favorite-active"></use>
          </svg>
        </span>
        <Link href={product.productUrl || `/urun/${product.id}`} className="-nodrag">
          <Image
            src={mainImage}
            alt={displayName}
            fill
            className={styles.image}
            priority={!!product.hasPreImageTag}
            sizes="(max-width: 991.98px) 255px, 387px"
          />
        </Link>
      </div>

      {/* m-productCard__detail */}
      <div className={styles.detail}>
        <h3>
          <Link href={product.productUrl || `/urun/${product.id}`}>
            <span className={styles.title}>{brandName}</span>
          </Link>
          <Link href={product.productUrl || `/urun/${product.id}`} className={styles.descLink}>
            <span className={styles.desc}>{displayName}</span>
          </Link>
        </h3>
      </div>
    </div>
  );
}

