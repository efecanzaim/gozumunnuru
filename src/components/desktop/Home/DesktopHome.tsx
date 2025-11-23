import React from 'react';
import Navbar from "@/components/navigation/Navbar/Navbar";
import Header from "@/components/Header/Header";
import Slider from "@/components/Slider/Slider";
import Banner from "@/components/Banner/Banner";
import ProductSection from "@/components/ProductSection/ProductSection";
import { featuredProducts } from "@/components/ProductSection/productsData";
import CampaignSection from "@/components/CampaignSection/CampaignSection";
import CategorySlider from "@/components/CategorySlider/CategorySlider";
import FeaturedCategories from "@/components/FeaturedCategories/FeaturedCategories";
import Footer from "@/components/Footer/Footer";

const DesktopHome = () => {
    return (
        <div className="desktop-home">
            <Navbar />
            {/* <Header /> */}
            <div className="container -wide">
                <Slider />
                <Banner />
            </div>
            <div className="container -wide">
                <ProductSection title="Gözümün Nuru Öneriyor" products={featuredProducts} variant="home" />
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
