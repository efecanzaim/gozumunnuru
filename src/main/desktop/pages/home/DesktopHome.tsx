import React from 'react';
import Navbar from "@/main/navigation/Navbar/Navbar";
// import Slider from "@/main/desktop/components/slider/Slider";
import Banner from "@/main/desktop/components/banner/Banner";
import ProductSection from "@/main/desktop/components/productSection/ProductSection";
import { featuredProducts } from "@/main/desktop/components/productSection/productsData";
import CampaignSection from "@/main/desktop/components/campaignSection/CampaignSection";
import CategorySlider from "@/main/desktop/components/categorySlider/CategorySlider";
import FeaturedCategories from "@/main/desktop/components/featuredCategories/FeaturedCategories";
import Footer from "@/main/desktop/components/footer/Footer";
import DualImageSection from "@/main/desktop/components/dualImageSection/DualImageSection";

const DesktopHome = () => {
    return (
        <div className="desktop-home">
            <Navbar />
            {/* <Header /> */}
            <div className="container -wide">
                {/* <Slider /> */}
                <DualImageSection />
                <Banner />
            </div>
            <div className="container -wide">
                <ProductSection title={<><span className="gzn-brand">gözümün nuru</span> öneriyor</>} products={featuredProducts} variant="home" />
            </div>
            <div className="container -wide">
                <CampaignSection />
            </div>
            <div className="container -wide">
                <CategorySlider />
            </div>
            <FeaturedCategories />
            <Footer />
        </div>
    );
};

export default DesktopHome;
