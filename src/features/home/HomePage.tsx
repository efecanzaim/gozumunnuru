import Navbar from "@/components/common/Navbar/Navbar";
import Banner from "@/components/site/Banner/Banner";
import ProductSection from "@/components/site/ProductSection/ProductSection";
import { featuredProducts } from "@/data/featured-products";
import FeaturedCategories from "@/components/site/FeaturedCategories/FeaturedCategories";
import Footer from "@/components/site/Footer/Footer";
import DualImageSection from "@/components/site/DualImageSection/DualImageSection";

const HomePage = () => {
    return (
        <div className="home-page">
            <Navbar />
            <div className="container -wide">
                <DualImageSection />
                <Banner />
            </div>
            <div className="container -wide">
                <ProductSection title={<><span className="gzn-brand">gözümün nuru</span> öneriyor</>} products={featuredProducts} variant="home" />
            </div>
            <FeaturedCategories />
            <Footer />
        </div>
    );
};

export default HomePage;
