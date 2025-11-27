'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import Link from 'next/link';

// Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

const mpSliderItems = [
    {
        id: 1,
        imageUrl: "https://assets.gowit.com/live/2/20251119_9cf27a0b-54c6-414f-b4e8-0b1fc86425b6.jpeg",
        link: "https://www.beymen.com/tr/brand-rawe-108075?siralama=yeniurunler",
        alt: "RAWE"
    },
    {
        id: 2,
        imageUrl: "https://assets.gowit.com/live/2/20251117_76f50e8f-ba7c-43d8-9417-d7ee7f013d5b.jpeg",
        link: "https://www.beymen.com/tr/garanti-amex-kasim-c?contentId=6911918ab117a951f605a3d8",
        alt: "Garanti Amex Kasım"
    },
    {
        id: 3,
        imageUrl: "https://assets.gowit.com/live/2/20251121_97eb370d-3c68-4054-8e7d-4519db45e14e.jpeg",
        link: "https://www.beymen.com/tr/search?q=braun&marka=braun_45387&urun-cesidi=ipl-lazer-epilasyon-aleti_60078&isRequestUserFiltered=true",
        alt: "Braun"
    },
];

const MobileMpSlider = () => {
    return (
        <div className="o-mpSliderWrapper">
            <Swiper
                modules={[Scrollbar]}
                spaceBetween={16}
                slidesPerView={1.1}
                speed={600}
                loop={false}
                centeredSlides={false}
                watchSlidesProgress
                className="o-mpSliderItems"
                wrapperClass="o-mpSliderItemsWrapper"
                scrollbar={{
                    draggable: true,
                }}
            >
                {mpSliderItems.map((item) => (
                    <SwiperSlide key={item.id} className="o-mpSliderItem">
                        <Link href={item.link}>
                            <img
                                src={item.imageUrl}
                                alt={item.alt}
                                className="swiper-lazy"
                                loading="lazy"
                            />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default MobileMpSlider;

