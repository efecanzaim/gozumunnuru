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
            <Header />
            <Slider />
            <Banner />
            <ProductSection title="Gözümün Nuru Öneriyor" products={featuredProducts} variant="home" />
            <CampaignSection />
            <CategorySlider />
            <FeaturedCategories />
            <Footer />
        </div>
    );
};

export default DesktopHome;
