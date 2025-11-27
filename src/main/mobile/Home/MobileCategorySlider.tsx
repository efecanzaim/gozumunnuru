'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

// Swiper styles
import 'swiper/css';

const categoryTabs = [
    {
        id: 1,
        name: 'YENİ GELENLER',
        items: [
            {
                id: 1,
                imageUrl: "https://cdn.beymen.com/bannerimages/prl_2025112510160049077.jpg",
                link: "/koleksiyon/yeni-gelenler-1",
                title: "POLO RALPH LAUREN",
                description: "Çocuk"
            },
            {
                id: 2,
                imageUrl: "https://cdn.beymen.com/bannerimages/Carolina_2025112510164537669.jpg",
                link: "/koleksiyon/yeni-gelenler-2",
                title: "HERRERA BEAUTY",
                description: "Kozmetik"
            },
            {
                id: 3,
                imageUrl: "https://cdn.beymen.com/bannerimages/Skandinavisk_2025112510174079811.jpg",
                link: "/koleksiyon/yeni-gelenler-3",
                title: "SKANDINAVISK",
                description: "Oda Kokusu & Mum"
            },
            {
                id: 4,
                imageUrl: "https://cdn.beymen.com/bannerimages/Sandro_2025112510181437392.jpg",
                link: "/koleksiyon/yeni-gelenler-4",
                title: "SANDRO",
                description: "Kadın & Erkek"
            },
            {
                id: 5,
                imageUrl: "https://cdn.beymen.com/bannerimages/shark_2025112510190168092.jpg",
                link: "/koleksiyon/yeni-gelenler-5",
                title: "SHARK NINJA",
                description: "Teknoloji"
            },
        ]
    },
    {
        id: 2,
        name: 'ÇOK SATANLAR',
        items: [
            {
                id: 1,
                imageUrl: "https://cdn.beymen.com/bannerimages/aaaper_2025112510271241259.jpg",
                link: "/koleksiyon/cok-satanlar-1",
                title: "AA PAPER & CO.",
                description: "Kırtasiye"
            },
            {
                id: 2,
                imageUrl: "https://cdn.beymen.com/bannerimages/ralphlauren_2025112510274776456.jpg",
                link: "/koleksiyon/cok-satanlar-2",
                title: "RALPH LAUREN",
                description: "Ev & Yaşam"
            },
            {
                id: 3,
                imageUrl: "https://cdn.beymen.com/bannerimages/camper_2025112510281855774.jpg",
                link: "/koleksiyon/cok-satanlar-3",
                title: "CAMPER",
                description: "Ayakkabı"
            },
            {
                id: 4,
                imageUrl: "https://cdn.beymen.com/bannerimages/club_2025112510284826622.jpg",
                link: "/koleksiyon/cok-satanlar-4",
                title: "BEYMEN CLUB",
                description: "Kadın Triko"
            },
            {
                id: 5,
                imageUrl: "https://cdn.beymen.com/bannerimages/foreo_2025112510292048162.jpg",
                link: "/koleksiyon/cok-satanlar-5",
                title: "FOREO",
                description: "Kozmetik"
            },
        ]
    },
    {
        id: 3,
        name: 'BEYMEN EDIT',
        items: [
            {
                id: 1,
                imageUrl: "https://cdn.beymen.com/bannerimages/leabo_2025111209210318887.jpg",
                link: "/koleksiyon/beymen-edit-1",
                title: "USTALIK ESERİ NOTALAR",
                description: "Le Labo"
            },
            {
                id: 2,
                imageUrl: "https://cdn.beymen.com/bannerimages/prl_2025112510160049077.jpg",
                link: "/koleksiyon/beymen-edit-2",
                title: "POLO RALPH LAUREN",
                description: "Erkek"
            },
            {
                id: 3,
                imageUrl: "https://cdn.beymen.com/bannerimages/Carolina_2025112510164537669.jpg",
                link: "/koleksiyon/beymen-edit-3",
                title: "CAROLINA HERRERA",
                description: "Kadın"
            },
        ]
    },
    {
        id: 4,
        name: 'BEYMEN EXCLUSIVE',
        items: [
            {
                id: 1,
                imageUrl: "https://cdn.beymen.com/bannerimages/Skandinavisk_2025112510174079811.jpg",
                link: "/koleksiyon/exclusive-1",
                title: "SKANDINAVISK",
                description: "Exclusive"
            },
            {
                id: 2,
                imageUrl: "https://cdn.beymen.com/bannerimages/Sandro_2025112510181437392.jpg",
                link: "/koleksiyon/exclusive-2",
                title: "SANDRO",
                description: "Exclusive"
            },
            {
                id: 3,
                imageUrl: "https://cdn.beymen.com/bannerimages/shark_2025112510190168092.jpg",
                link: "/koleksiyon/exclusive-3",
                title: "SHARK NINJA",
                description: "Exclusive"
            },
        ]
    },
];

const MobileCategorySlider = () => {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <div className="categorySlider">
            <div className="categorySliderNav">
                {categoryTabs.map((tab) => (
                    <div
                        key={tab.id}
                        className={`categorySliderNav__item ${activeTab === tab.id ? '-active' : ''}`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
            <div className="categorySliderTabs">
                {categoryTabs.map((tab) => (
                    <div
                        key={tab.id}
                        className={`categorySliderTab ${activeTab === tab.id ? '-active' : ''}`}
                    >
                        <div className="categorySlider__container swiper-container">
                            <Swiper
                                spaceBetween={16}
                                slidesPerView={'auto'}
                                speed={300}
                                loop={false}
                                autoplay={false}
                                watchSlidesProgress={true}
                                pagination={false}
                                wrapperClass="categorySlider__wrapper swiper-wrapper"
                            >
                                {tab.items.map((item) => (
                                    <SwiperSlide key={item.id} className="categorySliderItem">
                                        <Link href={item.link} className="categorySliderItem__image">
                                            <img
                                                src={item.imageUrl}
                                                alt={item.title}
                                                loading="lazy"
                                            />
                                        </Link>
                                        <Link href={item.link} className="categorySliderItem__content">
                                            <div className="categorySliderItem__title">{item.title}</div>
                                            <div className="categorySliderItem__description">{item.description}</div>
                                        </Link>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MobileCategorySlider;

