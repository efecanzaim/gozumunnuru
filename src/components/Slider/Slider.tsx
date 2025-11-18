"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MoveLeft, MoveRight } from "lucide-react";
import styles from "./Slider.module.css";
import { getBasePath } from "@/utils/basePath";

export default function Slider() {
  const basePath = getBasePath();
  const slides = [
    { id: 1, src: `${basePath}/slider1.jpg`, alt: "Slider 1" },
    { id: 2, src: `${basePath}/slider2.jpg`, alt: "Slider 2" },
    { id: 3, src: `${basePath}/slider3.jpg`, alt: "Slider 3" },
    { id: 4, src: `${basePath}/slider4.jpg`, alt: "Slider 4" },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className={styles.slider}>
      <div className={styles.sliderContainer}>
        <div className={styles.sliderWrapper}>
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`${styles.slide} ${
                index === currentSlide ? styles.slideActive : ""
              } ${index === 0 ? styles.slideReference : ""}`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                width={1200}
                height={600}
                className={styles.slideImage}
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        <button
          className={styles.sliderButton}
          onClick={goToPrevious}
          aria-label="Önceki slide"
        >
          <MoveLeft size={38} color="#ffffff" strokeWidth={1.3} />
        </button>

        <button
          className={`${styles.sliderButton} ${styles.sliderButtonNext}`}
          onClick={goToNext}
          aria-label="Sonraki slide"
        >
          <MoveRight size={38} color="#ffffff" strokeWidth={1.3} />
        </button>

        <div className={styles.sliderDots}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${
                index === currentSlide ? styles.dotActive : ""
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

