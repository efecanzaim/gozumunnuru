import React from 'react';
import MobileHeader from '../Header/MobileHeader';
import MobileBanner from './MobileBanner';
import MobileSlider from './MobileSlider';
import MobileMpSlider from './MobileMpSlider';
import MobileFooter from '../Footer/MobileFooter';

const banners = [
    {
        imageUrl: "https://cdn.beymen.com/bannerimages/AnaSayfa_Redesign_03-08_2025111809090892570.jpg",
        title: "DİNAMİK TAMAMLAYICI",
        info: "Çanta",
        ctaText: "Keşfet",
        link: "https://www.beymen.com/tr/kadin-canta-10019?sezon=ilkbahar-yaz_230,sonbahar-kis_226",
        altText: "DİNAMİK TAMAMLAYICI"
    },
    {
        imageUrl: "https://cdn.beymen.com/bannerimages/AnaSayfa_Redesign_03-10_2025111908194562577.jpg",
        title: "EVİNİZE ÖZEL",
        info: "Küçük Ev Aletleri",
        ctaText: "Keşfet",
        link: "https://www.beymen.com/tr/kucuk-ev-aletleri-95939",
        altText: "EVİNİZE ÖZEL"
    },
    {
        imageUrl: "https://cdn.beymen.com/bannerimages/AnaSayfa_Redesign_03-12_2025111908204588599.jpg",
        title: "RENKLİ SUNUMLAR",
        info: "Sofra & Mutfak",
        ctaText: "Keşfet",
        link: "https://www.beymen.com/tr/sofra-mutfak-96073",
        altText: "RENKLİ SUNUMLAR"
    },
    {
        imageUrl: "https://cdn.beymen.com/bannerimages/AnaSayfa_Redesign_03-14_2025111908214942637.jpg",
        title: "YENİLEYİCİ ETKİ",
        info: "Cilt Bakımı",
        ctaText: "Keşfet",
        link: "https://www.beymen.com/tr/kozmetik-yuz-bakimi-30901",
        altText: "YENİLEYİCİ ETKİ"
    },
    {
        imageUrl: "https://cdn.beymen.com/bannerimages/AnaSayfa_Redesign_03-16_2025111908233776056.jpg",
        title: "PARLAK DÜŞLER",
        info: "Takı & Mücevher",
        ctaText: "Keşfet",
        link: "https://www.beymen.com/tr/kadin-aksesuar-mucevher-106084",
        altText: "PARLAK DÜŞLER"
    },
    {
        imageUrl: "https://cdn.beymen.com/bannerimages/AnaSayfa_Redesign_03-18_2025111908243899188.jpg",
        title: "ZAMANI GELDİ",
        info: "Saat",
        ctaText: "Keşfet",
        link: "https://www.beymen.com/tr/yasam-stil-onerisi-kol-saati-tasarimlari-104589",
        altText: "ZAMANI GELDİ"
    },
    {
        imageUrl: "https://cdn.beymen.com/bannerimages/17_kasim_mobil_app_20_2025111908253747399.jpg",
        title: "DEĞERLİ DOKULAR",
        info: "Academia",
        ctaText: "Keşfet",
        link: "https://www.beymen.com/tr/brand-academia-1887?sezon=sonbahar-kis_226&siralama=yeniurunler",
        altText: "DEĞERLİ DOKULAR"
    },
    {
        imageUrl: "https://cdn.beymen.com/bannerimages/AnaSayfa_Redesign_03-22_2025040210570734688.jpg",
        title: "İNOVATİF GÜZELLİK",
        info: "Sanal Makyaj",
        ctaText: "Keşfet",
        link: "https://www.beymen.com/sanal-makyaj-c-2086",
        altText: "İNOVATİF GÜZELLİK"
    },
    {
        imageUrl: "https://cdn.beymen.com/bannerimages/17_kasim_mobil_app_24_2025111908273459347.jpg",
        title: "RADARDA: YILBAŞI RENKLERİ",
        info: "Beymen Collection",
        ctaText: "Keşfet",
        link: "https://www.beymen.com/tr/brand-beymen-collection-1956?sezon=sonbahar-kis_226&siralama=yeniurunler",
        altText: "RADARDA: YILBAŞI RENKLERİ"
    },
    {
        imageUrl: "https://cdn.beymen.com/bannerimages/AnaSayfa_Redesign_03-26_2025111908362421461.jpg",
        title: "YENİ BİR BAŞLANGIÇ",
        info: "Beymen Club",
        ctaText: "Keşfet",
        link: "https://www.beymen.com/tr/yilbasi-joy-of-celebration-c?contentId=691ad8e0e7023789699c4da2",
        altText: "YENİ BİR BAŞLANGIÇ"
    },
    {
        imageUrl: "https://cdn.beymen.com/bannerimages/AnaSayfa_Redesign_03-28_2025111908390968818.jpg",
        title: "MİNİKLERE HEDİYE",
        info: "Konges Slojd",
        ctaText: "Keşfet",
        link: "https://www.beymen.com/tr/brand-konges-slojd-109551",
        altText: "MİNİKLERE HEDİYE"
    },
    {
        imageUrl: "https://cdn.beymen.com/bannerimages/AnaSayfa_Redesign_03-30_2025111908403084305.jpg",
        title: "O'NA ÖZEL",
        info: "Erkek Sneaker",
        ctaText: "Keşfet",
        link: "https://www.beymen.com/tr/erkek-ayakkabi-sneakers-10104",
        altText: "O'NA ÖZEL"
    },
    {
        imageUrl: "https://cdn.beymen.com/bannerimages/AnaSayfa_Redesign_03-32_2025111908413155627.jpg",
        title: "IŞIK OYUNU",
        info: "Moser",
        ctaText: "Keşfet",
        link: "https://www.beymen.com/tr/brand-moser-2254",
        altText: "IŞIK OYUNU"
    },
    {
        imageUrl: "https://cdn.beymen.com/bannerimages/AnaSayfa_Redesign_03-34_2025111908423281056.jpg",
        title: "ANI YAKALAYIN",
        info: "Instax Fujifilm",
        ctaText: "Keşfet",
        link: "https://www.beymen.com/tr/brand-fujifilm-103711",
        altText: "ANI YAKALAYIN"
    },
    {
        imageUrl: "https://cdn.beymen.com/bannerimages/AnaSayfa_Redesign_03-36_2025111908452910536.jpg",
        title: "KÜÇÜK BİR SÜRPRİZ",
        info: "Aksesuar",
        ctaText: "Keşfet",
        link: "https://www.beymen.com/tr/kadin-aksesuar-10017?marka=beymen_315,beymen-hediye_503&urun-cesidi=cuzdan_1375,kartlik_2534,makyaj-cantasi_1370,seyahat-cuzdani_1710",
        altText: "KÜÇÜK BİR SÜRPRİZ"
    },
    {
        imageUrl: "https://cdn.beymen.com/bannerimages/AnaSayfa_Redesign_03-38_2025111908463230290.jpg",
        title: "EVİN YENİ RUHU",
        info: "Mum",
        ctaText: "Keşfet",
        link: "https://www.beymen.com/tr/mum-kandil-koku-96275",
        altText: "EVİN YENİ RUHU"
    },
    {
        imageUrl: "https://cdn.beymen.com/bannerimages/3_2_935x1038-px2_2025100208174709979.jpg",
        title: "MODERN FORMLAR",
        info: "Beymen Çanta",
        ctaText: "Keşfet",
        link: "https://www.beymen.com/tr/brand-beymen-1952?urun-grubu=canta_4534&sezon=sonbahar-kis_226&siralama=yeniurunler",
        altText: "MODERN FORMLAR"
    }
];

const MobileHome = () => {
    return (
        <div className="mobile-home">
            <MobileHeader pageType="homePage" />

            <MobileSlider />

            <MobileMpSlider />

            {banners.map((banner, index) => (
                <MobileBanner
                    key={index}
                    imageUrl={banner.imageUrl}
                    title={banner.title}
                    info={banner.info}
                    ctaText={banner.ctaText}
                    link={banner.link}
                    altText={banner.altText}
                />
            ))}

            <MobileFooter />
        </div>
    );
};

export default MobileHome;
