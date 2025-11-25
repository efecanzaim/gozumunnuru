import Link from 'next/link';
import MobileHeader from '../Header/MobileHeader';
import MobileSlider from './MobileSlider';
import MobileMpSlider from './MobileMpSlider';
import MobileFooter from '../Footer/MobileFooter';
import MobileNavigation from '../Navigation/MobileNavigation';
import { getBasePath } from '@/utils/basePath';

const MobileHome = () => {
    const basePath = getBasePath();
    const videoBanners = [
        {
            id: 1,
            src: `${basePath}/gorseller/banner1.mp4`,
            title: "Işıltıyı Taşıyan Kolye",
            description: "Gözümün Nuru imzasını taşıyan 14 ayar pırlanta kolye ile stilini aydınlat.",
            link: "/koleksiyon/kolyeler",
            cta: "Keşfet",
        },
        {
            id: 2,
            src: `${basePath}/gorseller/banner2.mp4`,
            title: "Zamansız Tektaş Yüzük",
            description: "Özel kesim pırlanta taşlarla hazırlanmış tektaş yüzükle her anı unutulmaz kıl.",
            link: "/koleksiyon/yuzukler",
            cta: "Keşfet",
        },
    ];

    return (
        <div className="mobile-home">
            <MobileHeader pageType="homePage" />

            <MobileSlider />

            <MobileMpSlider />

            {videoBanners.map((banner) => (
                <div key={banner.id} className="o-bannerItem">
                    <div className="o-bannerItemMP">
                        <Link href={banner.link} className="o-bannerItem--img">
                            <video
                                className="bannerVideo"
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="auto"
                                aria-label={banner.title}
                            >
                                <source src={banner.src} type="video/mp4" />
                                {banner.title}
                            </video>
                        </Link>
                        <span className="bannerTitle">{banner.title}</span>
                        <span className="bannerInfo">{banner.description}</span>
                        <Link href={banner.link} className="bannerCTA">
                            {banner.cta}
                        </Link>
                    </div>
                </div>
            ))}

            <MobileFooter />
            <MobileNavigation />
        </div>
    );
};

export default MobileHome;
