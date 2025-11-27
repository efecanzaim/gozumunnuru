'use client';

import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import Link from 'next/link';

// Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

const campaignItems = [
    {
        id: 1,
        imageUrl: "https://cdn.beymen.com/bannerimages/Widget_945x945_2025112420280999361.jpg",
        link: "https://www.beymen.com/tr/sale-kampanyalar-black-friday-secili-kids-urunlerinde-2-ve-uzeri-30-indirim-109934",
        title: "BLACK SALES ALERT",
        description: "Seçili Çocuk koleksiyonlarında 2 ve üzeri ürüne %30 indirim"
    },
    {
        id: 2,
        imageUrl: "https://cdn.beymen.com/bannerimages/lam_2025111413192393339.jpg",
        link: "https://www.beymen.com/tr/sale-kampanyalar-secili-lamy-urunlerinde-benzersiz-firsatlar-109823",
        title: "DÜŞÜNCEYE EŞLİK EDENLER",
        description: "Seçili Lamy tasarımlarında özel indirimler"
    },
    {
        id: 3,
        imageUrl: "https://cdn.beymen.com/bannerimages/133333_2025111113291043385.jpg",
        link: "https://www.beymen.com/tr/sale-kampanyalar-secili-foto--kamera-urunlerinde-firsatlar-109801",
        title: "ANI YAKALAYIN",
        description: "Seçili Foto & Kamera ürünlerinde özel indirimler"
    },
    {
        id: 4,
        imageUrl: "https://cdn.beymen.com/bannerimages/Widget_945x945_2025111209254050160.jpg",
        link: "https://www.beymen.com/tr/sale-kampanyalar-yildizli-urunlerde-30-indirim-109901",
        title: "MİNİK STİL İKONLARINA ÖZEL",
        description: "Seçili Çocuk koleksiyonlarında The One üyeliğinize veya Garanti BBVA kartlarınıza özel %30 indirim"
    },
    {
        id: 5,
        imageUrl: "https://cdn.beymen.com/bannerimages/saatwidget_2025110515374177325.jpg",
        link: "https://www.beymen.com/tr/yasam-stil-onerisi-secili-versace-saat-koleksiyonlarinda-sepette-essiz-indirimler-109727",
        title: "KUSURSUZ TAMAMLAYICI",
        description: "Seçili Saat tasarımlarımda sepette avantajlar"
    },
    {
        id: 6,
        imageUrl: "https://cdn.beymen.com/bannerimages/hellyhansenwidget_2025110415523624647.jpg",
        link: "https://www.beymen.com/tr/brand-helly-hansen-101203",
        title: "MODERN KIŞ KONFORU",
        description: "Seçili Helly Hansen tasarımlarında avantajlar"
    },
];

// Description'ları 85 karakterle sınırlandır
const truncateDescription = (text: string, maxLength: number = 85): string => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
};

const MobileCampaignSlider = () => {
    const swiperRef = useRef<any>(null);

    useEffect(() => {
        // Description'ları sınırlandır
        const descriptions = document.querySelectorAll('.campaignSliderItem__description');
        descriptions.forEach((desc) => {
            if (desc.textContent) {
                desc.textContent = truncateDescription(desc.textContent, 85);
            }
        });
    }, []);

    return (
        <div className="campaignSlider">
            <h3 className="campaignSlider__title">KAMPANYALAR</h3>
            <div className="campaignSlider__container">
                <Swiper
                    ref={swiperRef}
                    modules={[Scrollbar]}
                    spaceBetween={16}
                    slidesPerView={1.1}
                    loop={true}
                    autoplay={false}
                    watchSlidesProgress={true}
                    pagination={false}
                    speed={600}
                    wrapperClass="campaignSlider__wrapper swiper-wrapper"
                    scrollbar={{
                        el: '.campaignSlider .swiper-scrollbar',
                        draggable: true,
                    }}
                >
                    {campaignItems.map((item) => (
                        <SwiperSlide key={item.id} className="campaignSliderItem swiper-slide">
                            <Link href={item.link} className="campaignSliderItem__image">
                                <img
                                    src={item.imageUrl}
                                    alt={item.title}
                                    loading="lazy"
                                    className="-lazyImage"
                                />
                            </Link>
                            <div className="campaignSliderItem__content">
                                <div className="campaignSliderItem__title">{item.title}</div>
                                <div className="campaignSliderItem__description">{truncateDescription(item.description, 85)}</div>
                                <Link href={item.link} className="campaignSliderItem__ctaButton">
                                    ALIŞVERİŞE BAŞLA
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="swiper-scrollbar"></div>
            </div>
        </div>
    );
};

export default MobileCampaignSlider;

