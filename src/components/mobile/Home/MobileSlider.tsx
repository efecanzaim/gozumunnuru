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
        imageUrl: "https://cdn.beymen.com/bannerimages/App_1_1125x1650-beymen_2025111815165830544.jpg",
        link: "https://www.beymen.com/tr/yasam-stil-onerisi-goz-alici-hediyeleri-kesfet-109890",
        alt: "Göz Alıcı Hediyeler"
    },
    {
        id: 2,
        imageUrl: "https://cdn.beymen.com/bannerimages/App_1_1125_2025111210200436979.png",
        link: "https://www.beymen.com/tr/sale-kampanyalar-secili-urunlerde-50-000-tlye-12-500-tl-indirim-109808",
        alt: "babalar-gunu"
    },
    {
        id: 3,
        imageUrl: "https://cdn.beymen.com/bannerimages/App_1_1125x1650_2025090114555957311.jpg",
        link: "https://www.beymen.com/tr/sale-kampanyalar-beymen-indirimleri-108366",
        alt: "garanti-haziran"
    },
    {
        id: 4,
        imageUrl: "https://cdn.beymen.com/bannerimages/kv-banner-app_1_2025111808053355212.gif",
        link: "https://www.beymen.com/tr/beymen-2026-yilbasi-c?contentId=6914407dc60ef444cf9f8ba0",
        alt: "CTB %50'YE Varan"
    }
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
