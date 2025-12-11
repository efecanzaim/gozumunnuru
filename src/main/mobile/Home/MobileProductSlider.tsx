'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import { Product } from '@/main/desktop/components/productSection/ProductCard';
import { featuredProducts } from '@/main/desktop/components/productSection/productsData';
import { getBasePath } from '@/utils/basePath';

// Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

interface MobileProductSliderProps {
    title?: string;
    products?: Product[];
    sliderType?: string;
}

const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('tr-TR', {
        style: 'currency',
        currency: 'TRY',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(price);
};

const MobileProductSlider: React.FC<MobileProductSliderProps> = ({
    title = "GÖZÜMÜN NURU ÖNERİYOR",
    products = featuredProducts,
    sliderType = "RecommendByIdHome"
}) => {
    const swiperRef = useRef<any>(null);
    const basePath = getBasePath();

    // URL'nin tam URL olup olmadığını kontrol et (http:// veya https:// ile başlıyorsa)
    const addBasePath = (url: string) => {
        if (!url) return url;
        if (url.startsWith("http://") || url.startsWith("https://") || url.startsWith("//")) {
            return url;
        }
        return `${basePath}${url.startsWith("/") ? "" : "/"}${url}`;
    };

    return (
        <div className={`o-productList -redesign ${sliderType === "RecommendByIdHome" ? "o-productWidget-home" : ""}`} id={`slider${sliderType}`}>
            <div className={`o-productList__header ${sliderType === "RecommendByIdHome" ? "o-productWidget-home" : ""}`}>
                {products.length > 0 && (
                    <h3 className="o-productList__header--title">{title}</h3>
                )}
            </div>
            <div className="o-productList__listContent swiper-container" ref={swiperRef}>
                <Swiper
                    modules={[Scrollbar]}
                    spaceBetween={16}
                    slidesPerView={1.4588}
                    speed={600}
                    loop={false}
                    autoplay={false}
                    watchSlidesProgress={true}
                    pagination={false}
                    centeredSlides={false}
                    wrapperClass="swiper-wrapper"
                    scrollbar={{
                        el: '.o-productList__listContent .swiper-scrollbar',
                        draggable: true,
                    }}
                >
                    {products.map((product, index) => {
                        const productImage = product.image || (product.images && product.images[0]) || "/gorseller/product1.avif";
                        const imageUrl = addBasePath(productImage);
                        
                        return (
                            <SwiperSlide key={product.id} className="o-productCard -scrollCard swiper-slide" data-index={index}>
                                <div className="o-productCard__link">
                                    <div className="o-productCard__imageWrapper">
                                        <figure className="o-productCard__figure">
                                            <img
                                                src={imageUrl}
                                                alt={product.displayName || product.name}
                                                className="o-productCard__figure--img -lazyImage"
                                                loading="lazy"
                                            />
                                        </figure>
                                    </div>
                                <div className="o-productCard__content">
                                    <h2 className="o-productCard__content--name">
                                        {product.brandName || product.brand}
                                    </h2>
                                    <span className="o-productCard__content--desc">
                                        {product.displayName || product.name}
                                    </span>
                                    <div className="m-productPrice">
                                        {product.hasDiscount && product.showDefaultDiscountRate && product.newDiscountRateText && (
                                            <div className="a-productPrice__discount -discount">
                                                {product.newDiscountRateText}
                                            </div>
                                        )}
                                        <div className="m-productPrice__content">
                                            {product.hasDiscount && product.originalPrice && (
                                                <span className="a-m-productPrice -oldPrice">
                                                    {product.orginalPriceText || formatPrice(product.originalPrice)}
                                                </span>
                                            )}
                                            <span className="a-m-productPrice -salePrice">
                                                {product.actualPriceText || formatPrice(product.actualPrice || product.price)}
                                            </span>
                                        </div>
                                        {!product.showDefaultDiscountRate && product.newDiscountRateText && (
                                            <div className="m-productPrice__lastPrice">
                                                <span className="a-m-productPrice -discountText">
                                                    {product.newDiscountRateText}
                                                </span>
                                            </div>
                                        )}
                                        {product.productPromotions && product.productPromotions.length > 0 && product.productPromotions[0].showPrice && product.productPromotions[0].promotedPrice > 0 ? (
                                            <div className={`m-price__campaignContent ${product.hasDiscount ? "mt3" : ""}`}>
                                                <div className="m-price__campaign">
                                                    <span className="m-price__campaignDesc">
                                                        {product.productPromotions[0].campaignTitle}
                                                    </span>
                                                    <span className="m-price__campaignPrice">
                                                        {product.productPromotions[0].promotedPriceText}
                                                    </span>
                                                </div>
                                            </div>
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        );
                    })}
                </Swiper>
                <div className="swiper-scrollbar"></div>
            </div>
        </div>
    );
};

export default MobileProductSlider;

