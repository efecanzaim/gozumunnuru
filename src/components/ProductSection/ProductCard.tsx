"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import styles from "./ProductCard.module.css";

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
  image?: string; // Ana görsel
  brand: string;
  brandName?: string; // Beymen'de brandName kullanılıyor
  name: string;
  displayName?: string; // Beymen'de displayName kullanılıyor
  price: number;
  actualPrice?: number;
  actualPriceText?: string;
  originalPrice?: number;
  orginalPriceText?: string; // Beymen'de bu şekilde yazılmış
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
};

export default function ProductCard({ product }: ProductCardProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isHoveringImage, setIsHoveringImage] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "TRY",
      minimumFractionDigits: 2,
    }).format(price);
  };

  // Beymen yapısına göre değerleri belirle
  const brandName = product.brandName || product.brand;
  const displayName = product.displayName || product.name;
  const imageList = useMemo(() => {
    if (product.images && product.images.length > 0) {
      return product.images.slice(0, 4);
    }
    return product.image ? [product.image] : [];
  }, [product.image, product.images]);

  const mainImage = imageList[activeImageIndex] || product.image || product.images?.[0] || "/placeholder.png";
  const hasDiscount = product.hasDiscount !== undefined 
    ? product.hasDiscount 
    : product.discountedPrice !== undefined || product.secondPrice !== undefined;
  
  // Eğer formatlanmış text varsa onu kullan, yoksa formatla
  const actualPriceText = product.actualPriceText || formatPrice(product.actualPrice || product.price);
  const orginalPriceText = product.orginalPriceText || formatPrice(product.originalPrice || product.price);
  const secondPriceText = product.secondPriceText || (product.secondPrice ? formatPrice(product.secondPrice) : "");
  const discountText = product.newDiscountRateText || product.discountRateText || 
    (hasDiscount && product.discountedPrice 
      ? `${Math.round(((product.price - product.discountedPrice) / product.price) * 100)}%`
      : "");

  const showDiscountBadge = hasDiscount && 
    product.showDefaultDiscountRate !== false && 
    discountText;

  const hasCampaign = product.productPromotions && 
    product.productPromotions.length > 0 && 
    product.productPromotions[0].showPrice && 
    product.productPromotions[0].promotedPrice > 0;

  const campaign = hasCampaign ? product.productPromotions![0] : null;

  useEffect(() => {
    setActiveImageIndex(0);
  }, [product.id]);

  const handleImageLeave = () => {
    setActiveImageIndex(0);
    setIsHoveringImage(false);
  };

  const handleImageMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (imageList.length <= 1) return;
    if (!isHoveringImage) {
      setIsHoveringImage(true);
    }
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const segmentWidth = rect.width / imageList.length;
    const index = Math.min(
      imageList.length - 1,
      Math.max(0, Math.floor(x / segmentWidth))
    );
    if (index !== activeImageIndex) {
      setActiveImageIndex(index);
    }
  };

  return (
    <div className={styles.productCard}>
      {/* m-productCard__photo */}
      <div
        className={styles.imageWrapper}
        onMouseLeave={handleImageLeave}
        onMouseMove={handleImageMove}
      >
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
        {imageList.length > 1 && (
          <div className={styles.imagePagination}>
            {imageList.map((_, index) => (
              <div
                key={index}
                className={`${styles.imagePaginationItem} ${
                  isHoveringImage && activeImageIndex === index ? styles.imagePaginationItemActive : ""
                }`}
                role="presentation"
              />
            ))}
          </div>
        )}
      </div>

      {/* m-productCard__detail */}
      <div className={styles.detail}>
        <Link href={product.productUrl || `/urun/${product.id}`} className="-nodrag">
          <h3 className={styles.title}>{brandName}</h3>
          <span className={styles.desc}>{displayName}</span>
        </Link>

        {/* m-productCard__price */}
        <div className={styles.price}>
          {/* m-productCard__discnt */}
          {showDiscountBadge && (
            <span className={styles.discountBadge}>{discountText}</span>
          )}

          {/* m-productCard__priceWrapper */}
          <span className={styles.priceWrapper}>
            {hasDiscount && (
              <span className={styles.oldPrice}>{orginalPriceText}</span>
            )}
            {product.secondPrice && product.secondPrice > 0 ? (
              <span className={`${styles.newPrice} ${styles.newPriceStriked}`}>
                {secondPriceText}
              </span>
            ) : (
              <span className={styles.newPrice}>{actualPriceText}</span>
            )}
                </span>

          {/* m-productCard__lastPrice */}
          {product.secondPrice && product.secondPrice > 0 ? (
            <span className={styles.lastPrice}>
              {product.newDiscountRateText && !product.showDefaultDiscountRate && (
                <span>{product.newDiscountRateText}</span>
              )}
              {actualPriceText}
            </span>
          ) : (
            /* m-productCard__campaign */
            hasCampaign && campaign && (
              <div className={styles.campaign}>
                <span className={styles.campaignDesc}>{campaign.campaignTitle}</span>
                <span className={styles.campaignPrice}>{campaign.promotedPriceText}</span>
            </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

