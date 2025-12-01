"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import ProductCard from '../productSection/ProductCard';
import type { Product } from '../productSection/ProductCard';
import ProductFilter from './ProductFilter';
import ProductSort from './ProductSort';
import './ProductList.css';

type BreadcrumbItem = {
  name: string;
  href?: string;
};

type ProductListProps = {
  title: string;
  breadcrumbs?: BreadcrumbItem[];
  products?: Product[];
  totalCount?: number;
  hasBanner?: boolean;
};

const sortOptions = [
  { value: 'yeniurunler', label: 'Yeni Ürünler' },
  { value: 'artanfiyat', label: 'Artan Fiyat' },
  { value: 'azalanfiyat', label: 'Azalan Fiyat' },
  { value: 'editor', label: 'Editör Sıralaması' },
  { value: 'akillisiralama', label: 'Akıllı Sıralama' },
  { value: 'indirimliurunler', label: 'İndirimli Ürünler' },
];

export default function ProductList({ 
  title, 
  breadcrumbs = [],
  products = [],
  totalCount = 0,
  hasBanner = false 
}: ProductListProps) {
  const [sortValue, setSortValue] = useState<string>('');
  const [isSticky, setIsSticky] = useState(false);
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({});
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const stickyRef = useRef<HTMLDivElement>(null);
  const productListRef = useRef<HTMLDivElement>(null);
  const stickyOriginalTop = useRef<number>(0);

  // Default breadcrumbs if not provided
  const defaultBreadcrumbs: BreadcrumbItem[] = breadcrumbs.length > 0 
    ? breadcrumbs 
    : [
        { name: 'Ana Sayfa', href: '/' },
        { name: title },
      ];

  const handleSortChange = (value: string) => {
    setSortValue(value);
    // TODO: Implement sort logic
    console.log('Sort changed:', value);
  };

  const handleFilterChange = (filters: Record<string, string[]>) => {
    setActiveFilters(filters);
    // TODO: Implement filter logic
    console.log('Active filters:', filters);
  };

  // Sticky header için scroll listener
  // o-productList bölümüne geldiğimizde ve sticky element viewport'un üstüne çıktığında aktif olacak
  useEffect(() => {
    // Sticky element'in sayfa yüklendiğindeki orijinal top pozisyonunu kaydet
    const calculateOriginalPosition = () => {
      if (stickyRef.current) {
        const rect = stickyRef.current.getBoundingClientRect();
        stickyOriginalTop.current = rect.top + window.scrollY;
      }
    };

    // İlk yüklemede pozisyonu hesapla
    calculateOriginalPosition();

    const handleScroll = () => {
      if (!stickyRef.current || !productListRef.current) return;
      
      const scrollY = window.scrollY;
      
      // Sticky element'in orijinal pozisyonuna scroll edildiğinde sticky yap
      // Yani kullanıcı o-productList bölümüne geldiğinde sticky aktif olacak
      const shouldBeSticky = scrollY >= stickyOriginalTop.current;
      
      setIsSticky(shouldBeSticky);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', calculateOriginalPosition);
    
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateOriginalPosition);
    };
  }, []);

  return (
    <div data-product-list ref={productListRef}>
      <div className={`o-productList ${!hasBanner ? '-noBanner' : ''}`}>
        <div className="container -wide">
          <div className="row">
            <div className="col-12">
              <div 
                ref={stickyRef}
                className={`o-productList__sticky ${isSticky ? '-open' : ''}`} 
                data-sticky-header
              >
                <div className="container -wide">
                  <div className="o-productList__top">
                    {/* Product Filter */}
                    <ProductFilter 
                      isSticky={isSticky} 
                      onFilterChange={handleFilterChange} 
                      onOpenChange={setIsFilterOpen}
                    />
                    
                    <div className={`o-productList__top--breadcrumb ${totalCount === 0 ? '-noProduct' : ''}`}>
                      <div className="o-productList__top--breadcrumbTitle">
                        <h1>{title}</h1>
                        {totalCount > 0 && (
                          <div className="o-productList__top--breadcrumbCount">
                            (<span>{totalCount}</span> Ürün)
                          </div>
                        )}
                      </div>
                      {defaultBreadcrumbs.length > 0 && (
                        <div id="breadcrumb" className="m-breadcrumb">
                          <ol itemScope itemType="http://schema.org/BreadcrumbList">
                            {defaultBreadcrumbs.map((item, index) => (
                              <li 
                                key={index}
                                itemProp="itemListElement" 
                                itemScope 
                                itemType="http://schema.org/ListItem"
                              >
                                {item.href ? (
                                  <Link href={item.href} itemProp="item">
                                    <span itemProp="name">{item.name}</span>
                                  </Link>
                                ) : (
                                  <span itemProp="name">{item.name}</span>
                                )}
                                <meta itemProp="position" content={String(index + 1)} />
                              </li>
                            ))}
                          </ol>
                        </div>
                      )}
                    </div>
                    <div id="productListSortTitle" style={{ display: 'none' }}>Sırala</div>
                    <div style={{ visibility: isFilterOpen ? 'hidden' : 'visible' }}>
                      <ProductSort 
                        options={sortOptions}
                        value={sortValue}
                        onChange={handleSortChange}
                        placeholder="Sıralama"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="productList" className={`row o-productList__container ${isSticky ? '-stickyOpen' : ''}`}>
            {products.length > 0 ? (
              products.map((product, index) => (
                <div
                  key={product.id || product.productId || index}
                  data-page="1"
                  className="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-3 o-productList__itemWrapper"
                >
                  <div className="o-productList__item">
                    <ProductCard product={product} variant="list" />
                  </div>
                </div>
              ))
            ) : (
              <div className="o-productList__noProduct">
                <div className="o-productList__noProduct--header">
                  <h2 className="o-productList__noProduct--title">Ürün bulunamadı</h2>
                  <p className="o-productList__noProduct--description">
                    Aradığınız kriterlere uygun ürün bulunamadı.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

