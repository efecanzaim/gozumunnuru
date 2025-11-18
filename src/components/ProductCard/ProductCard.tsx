"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ProductCard.module.css";
import { getBasePath } from "@/utils/basePath";

type ProductCardProps = {
  id: number;
  images: string[];
  brand: string;
  name: string;
  price: number;
  discountedPrice?: number;
  discountText?: string;
};

export default function ProductCard({
  images,
  brand,
  name,
  price,
  discountedPrice,
  discountText,
}: ProductCardProps) {
  const basePath = getBasePath();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const wrapper = e.currentTarget;
    const rect = wrapper.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    const percentage = x / width;
    
    // 4 görsel için 0-3 arası index hesapla
    const newIndex = Math.min(Math.floor(percentage * images.length), images.length - 1);
    setCurrentImageIndex(newIndex);
  };

  const handleMouseLeave = () => {
    setCurrentImageIndex(0);
  };

  return (
    <Link href={`/urun/${name.toLowerCase().replace(/\s+/g, "-")}`} className={styles.productCard}>
      <div 
        className={styles.imageWrapper}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            src={`${basePath}${image}`}
            alt={`${name} - Görsel ${index + 1}`}
            width={387}
            height={516}
            className={`${styles.productImage} ${index === currentImageIndex ? styles.active : styles.hidden}`}
          />
        ))}
      </div>
      <div className={styles.productInfo}>
        <p className={styles.brand}>{brand}</p>
        <h3 className={styles.productName}>{name}</h3>
        <div className={styles.priceContainer}>
          {discountedPrice ? (
            <>
              <span className={styles.discountedPrice}>{discountedPrice.toLocaleString("tr-TR")} TL</span>
              <span className={styles.originalPrice}>{price.toLocaleString("tr-TR")} TL</span>
            </>
          ) : (
            <span className={styles.price}>{price.toLocaleString("tr-TR")} TL</span>
          )}
        </div>
        {discountText && <p className={styles.discountText}>{discountText}</p>}
      </div>
    </Link>
  );
}

