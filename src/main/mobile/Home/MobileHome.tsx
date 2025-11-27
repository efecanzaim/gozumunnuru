import MobileHeader from '../Header/MobileHeader';
import MobileSlider from './MobileSlider';
import MobileMpSlider from './MobileMpSlider';
import MobileCategorySlider from './MobileCategorySlider';
import MobileCampaignSlider from './MobileCampaignSlider';
import MobileBannerVideo from './MobileBannerVideo';
import MobileProductSlider from './MobileProductSlider';
import MobileFooter from '../Footer/MobileFooter';
import MobileNavigation from '../Navigation/MobileNavigation';
import MobileBackToTop from '../BackToTop/MobileBackToTop';

const MobileHome = () => {
    return (
        <>
            <div className="mobile-home">
                <MobileHeader pageType="homePage" />

                {/* Reklam banner - gizli ama boşluk bırakıyor */}
                <div className="o-bannerItem o-bannerItem--hidden" data-banner-item></div>

                <MobileSlider />

                <MobileMpSlider />

                <MobileCategorySlider />

                <MobileCampaignSlider />

                <MobileBannerVideo />

                <MobileProductSlider 
                    title="BEYMEN ÖNERİYOR"
                    sliderType="RecommendByIdHome"
                />

                <MobileBackToTop />

                <MobileFooter />
            </div>
            <MobileNavigation />
        </>
    );
};

export default MobileHome;
