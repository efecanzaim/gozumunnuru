import Navbar from "@/main/navigation/Navbar/Navbar";
import Banner from "@/main/desktop/components/banner/Banner";
import ProductSection from "@/main/desktop/components/productSection/ProductSection";
import { featuredProducts } from "@/main/desktop/components/productSection/productsData";
import FeaturedCategories from "@/main/desktop/components/featuredCategories/FeaturedCategories";
import Footer from "@/main/desktop/components/footer/Footer";
import DualImageSection from "@/main/desktop/components/dualImageSection/DualImageSection";

const DesktopHome = () => {
    return (
        <div className="desktop-home">
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

export default DesktopHome;
