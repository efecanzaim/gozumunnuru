'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import Link from 'next/link';

// Swiper styles - ÖNCE Swiper CSS'leri yüklensin
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// Custom pagination styles - SONRA bizim CSS'imiz yüklensin (override için)
import '../mobile.css';

const sliderItems = [
    {
        id: 1,
        imageUrl: "/gorseller/mobileslider1.jpg",
        link: "/koleksiyon/kolyeler",
        alt: "Koleksiyon Kolye"
    },
    {
        id: 2,
        imageUrl: "/gorseller/mobileslider2.jpg",
        link: "/koleksiyon/yuzukler",
        alt: "Koleksiyon Yüzük"
    },
    {
        id: 3,
        imageUrl: "/gorseller/mobileslider3.jpg",
        link: "/koleksiyon/kupe",
        alt: "Koleksiyon Küpe"
    },
];

const MobileSlider = () => {
    return (
        <div className="o-fullSlider">
            <Swiper
                modules={[Autoplay, Pagination, EffectFade]}
                effect="fade"
                speed={300}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    el: '.full-slider-pagination',
                }}
                loop={true}
                className="swiper-container"
            >
                {sliderItems.map((item) => (
                    <SwiperSlide key={item.id} className="o-fullSlider__item">
                        <Link href={item.link} className="o-fullSlider__item--link">
                            <img
                                src={item.imageUrl}
                                alt={item.alt}
                                className="o-fullSlider__item--img"
                            />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="full-slider-pagination swiper-pagination"></div>
        </div>
    );
};

export default MobileSlider;
