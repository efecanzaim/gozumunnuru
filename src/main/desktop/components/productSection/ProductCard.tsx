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
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  const basePath = getBasePath();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "TRY",
      minimumFractionDigits: 2,
    }).format(price);
  };

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
  const imageList = useMemo(() => {
    if (product.images && product.images.length > 0) {
      return product.images.slice(0, 4).map(img => addBasePath(img));
    }
    return product.image ? [addBasePath(product.image)] : [];
  }, [product.image, product.images, basePath]);

  const mainImage = imageList[activeImageIndex] || 
    (product.image ? addBasePath(product.image) : null) || 
    (product.images?.[0] ? addBasePath(product.images[0]) : null) || 
    `${basePath}/placeholder.png`;
  const hasDiscount = product.hasDiscount !== undefined 
    ? product.hasDiscount 
    : product.discountedPrice !== undefined || product.secondPrice !== undefined;
  
  // Eğer formatlanmış text varsa onu kullan, yoksa formatla
  const actualPriceText = product.actualPriceText || formatPrice(product.actualPrice || product.price);
  const orginalPriceText = product.orginalPriceText || formatPrice(product.originalPrice || product.price);
  const secondPriceText = product.secondPriceText || (product.secondPrice ? formatPrice(product.secondPrice) : "");
  const finalPriceText = product.secondPrice && product.secondPrice > 0 ? secondPriceText : actualPriceText;
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
    <div className={`${styles.productCard} ${variant === "list" ? styles.listVariant : ""}`}>
      {/* m-productCard__photo */}
      <div
        className={styles.imageWrapper}
        onMouseLeave={handleImageLeave}
        onMouseMove={handleImageMove}
      >
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
        <h3>
          <Link href={product.productUrl || `/urun/${product.id}`}>
            <span className={styles.title}>{brandName}</span>
          </Link>
          <Link href={product.productUrl || `/urun/${product.id}`} className={styles.descLink}>
            <span className={styles.desc}>{displayName}</span>
          </Link>
        </h3>

        {/* m-productCard__price */}
        <div className={styles.price}>
          {/* m-productCard__discnt */}
          {showDiscountBadge && (
            <span className={styles.discountBadge}>{discountText}</span>
          )}

          {/* m-productCard__priceWrapper */}
          <span className={`${styles.priceWrapper} ${!hasDiscount ? styles.onlyOnePrice : ''}`}>
            {hasDiscount && (
              <span className={styles.oldPrice}>{orginalPriceText}</span>
            )}
            <span className={styles.newPrice}>{finalPriceText}</span>
          </span>

          {/* m-productCard__campaign */}
          {hasCampaign && campaign && (
            <div className={`${styles.campaign} ${!hasDiscount ? styles.campaignOnlyOne : ''}`}>
              <span className={styles.campaignDesc}>{campaign.campaignTitle}</span>
              <span className={styles.campaignPrice}>{campaign.promotedPriceText}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

