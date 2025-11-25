"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { MoveRight, MoveLeft } from "lucide-react";
import Link from "next/link";
import { getBasePath } from "@/utils/basePath";

// Swiper CSS - Önce Swiper CSS'leri yüklensin
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// Custom CSS - Sonra bizim CSS'imiz yüklensin (override için)
import styles from "./Slider.module.css";

export default function Slider() {
  const swiperRef = useRef<SwiperType | null>(null);
  const basePath = getBasePath();
  const slides = [
    { 
      id: 1, 
      src: `${basePath}/gorseller/slider1.avif`, 
      alt: "Slider 1",
      link: "#" 
    },
    { 
      id: 2, 
      src: `${basePath}/gorseller/slider1.avif`, 
      alt: "Slider 2",
      link: "#" 
    },
    { 
      id: 3, 
      src: `${basePath}/gorseller/slider1.avif`, 
      alt: "Slider 3",
      link: "#" 
    },
    { 
      id: 4, 
      src: `${basePath}/gorseller/slider1.avif`, 
      alt: "Slider 4",
      link: "#" 
    },
  ];

  return (
    <div className={styles.slider}>
      <Swiper
        className={styles.swiperContainer}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        fadeEffect={{
          crossFade: false,
        }}
        speed={750}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: `.${styles.customNextButton}`,
          prevEl: `.${styles.customPrevButton}`,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        loop={true}
        spaceBetween={0}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className={styles.slideItem}>
            <Link href={slide.link} className={styles.slideLink}>
              <img
                src={slide.src}
                alt={slide.alt}
                className={styles.slideImage}
                loading={slide.id === 1 ? "eager" : "lazy"}
              />
            </Link>
          </SwiperSlide>
        ))}
        <div className={styles.customPrevButton} onClick={() => swiperRef.current?.slidePrev()}>
          <MoveLeft size={30} strokeWidth={1.458} color="#FFF" />
        </div>
        <div className={styles.customNextButton} onClick={() => swiperRef.current?.slideNext()}>
          <MoveRight size={30} strokeWidth={1.458} color="#FFF" />
        </div>
      </Swiper>
    </div>
  );
}

