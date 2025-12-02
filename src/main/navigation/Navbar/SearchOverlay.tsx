"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, Search } from 'lucide-react';
import styles from './SearchOverlay.module.css';
import { getBasePath } from '@/utils/basePath';

type SearchResult = {
  id: number;
  name: string;
  brand: string;
  price: number;
  priceText: string;
  image: string;
  url: string;
};

type SearchOverlayProps = {
  isOpen: boolean;
  onClose: () => void;
  initialQuery?: string;
};

// Örnek eski aramalar
const recentSearches = [
  'Pırlanta yüzük',
  'Altın kolye',
  'Bileklik',
  'Küpe',
];

// Örnek popüler aramalar
const popularSearches = [
  'Tek taş yüzük',
  'Tennis bileklik',
  'Altın zincir',
  'Pırlanta set',
  'Nişan yüzüğü',
];

// Örnek ürünler (gerçek uygulamada API'den gelecek)
const sampleProducts: SearchResult[] = [
  {
    id: 1,
    name: 'Pırlanta Tek Taş Yüzük',
    brand: 'Gözümün Nuru',
    price: 45000,
    priceText: '45.000,00 TL',
    image: '/gorseller/product1.avif',
    url: '/mucevher/urun/pirlanta-tek-tas-yuzuk',
  },
  {
    id: 2,
    name: 'Altın Kolye',
    brand: 'Gözümün Nuru',
    price: 28000,
    priceText: '28.000,00 TL',
    image: '/gorseller/product2.avif',
    url: '/mucevher/urun/altin-kolye',
  },
  {
    id: 3,
    name: 'Pırlanta Küpe',
    brand: 'Gözümün Nuru',
    price: 35000,
    priceText: '35.000,00 TL',
    image: '/gorseller/product3.avif',
    url: '/mucevher/urun/pirlanta-kupe',
  },
  {
    id: 4,
    name: 'Altın Bileklik',
    brand: 'Gözümün Nuru',
    price: 22000,
    priceText: '22.000,00 TL',
    image: '/gorseller/product4.avif',
    url: '/mucevher/urun/altin-bileklik',
  },
];

export default function SearchOverlay({ isOpen, onClose, initialQuery = '' }: SearchOverlayProps) {
  const [query, setQuery] = useState(initialQuery);
  const [activeTab, setActiveTab] = useState<'all' | 'products' | 'brands'>('all');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const basePath = getBasePath();

  // Focus input when overlay opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (overlayRef.current) {
        setIsSticky(overlayRef.current.scrollTop > 50);
      }
    };

    const overlay = overlayRef.current;
    if (overlay) {
      overlay.addEventListener('scroll', handleScroll);
      return () => overlay.removeEventListener('scroll', handleScroll);
    }
  }, [isOpen]);

  // Search handler
  useEffect(() => {
    if (query.length >= 2) {
      setIsLoading(true);
      // Simüle edilmiş arama - gerçek uygulamada API çağrısı yapılacak
      const timer = setTimeout(() => {
        const filtered = sampleProducts.filter(
          p => p.name.toLowerCase().includes(query.toLowerCase()) ||
               p.brand.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered.length > 0 ? filtered : sampleProducts);
        setIsLoading(false);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setResults([]);
    }
  }, [query]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
      return () => window.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      // Arama sayfasına yönlendir
      window.location.href = `/arama?q=${encodeURIComponent(query)}`;
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
  };

  const clearRecentSearches = () => {
    // Gerçek uygulamada localStorage'dan silinecek
    console.log('Recent searches cleared');
  };

  if (!isOpen) return null;

  return (
    <div className={`${styles.overlay} ${isSticky ? styles.sticky : ''}`} ref={overlayRef}>
      <div className={`${styles.header} ${isSticky ? styles.headerSticky : ''}`}>
        <div className={styles.headerContainer}>
          {/* Sol: Logo */}
          <Link href="/" className={styles.brand} onClick={onClose}>
            <Image
              src={`${basePath}/gozumun-nuru-logo.svg`}
              alt="gözümün nuru"
              width={211}
              height={16}
              className={styles.brandImage}
              priority
            />
          </Link>

          <form className={styles.searchForm} onSubmit={handleSearchSubmit}>
            <div className={styles.searchInputWrapper}>
              <Search size={16} className={styles.searchIcon} />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ürün, Marka Arayın"
                className={styles.searchInput}
                autoComplete="off"
              />
              {query && (
                <button
                  type="button"
                  className={styles.clearButton}
                  onClick={() => setQuery('')}
                >
                  <X size={14} />
                  Temizle
                </button>
              )}
            </div>
            <button type="button" className={styles.formClose} onClick={onClose}>
              Vazgeç
            </button>
          </form>
        </div>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.container}>
          {query.length < 2 ? (
            // Arama yapılmadan önce gösterilen içerik
            <div className={styles.suggestions}>
              {/* Son Aramalar */}
              <div className={styles.section}>
                <div className={styles.sectionHeader}>
                  <b>SON ARAMALAR</b>
                  <span onClick={clearRecentSearches}>Temizle</span>
                </div>
                <div className={styles.tagList}>
                  {recentSearches.map((search, index) => (
                    <button
                      key={index}
                      className={styles.tag}
                      onClick={() => handleSuggestionClick(search)}
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>

              {/* Popüler Aramalar */}
              <div className={styles.section}>
                <div className={styles.sectionHeader}>
                  <b>POPÜLER ARAMALAR</b>
                </div>
                <div className={styles.tagList}>
                  {popularSearches.map((search, index) => (
                    <button
                      key={index}
                      className={styles.tag}
                      onClick={() => handleSuggestionClick(search)}
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>

              {/* Minimum karakter uyarısı */}
              <div className={styles.minCharWarning}>
                Arama yapmak için en az <b>2 karakter</b> girmelisiniz.
              </div>
            </div>
          ) : (
            // Arama sonuçları
            <div className={styles.results}>
              {/* Tabs */}
              <div className={styles.tabs}>
                <button
                  className={`${styles.tab} ${activeTab === 'all' ? styles.tabActive : ''}`}
                  onClick={() => setActiveTab('all')}
                >
                  Tümü
                </button>
                <button
                  className={`${styles.tab} ${activeTab === 'products' ? styles.tabActive : ''}`}
                  onClick={() => setActiveTab('products')}
                >
                  Ürünler
                </button>
                <button
                  className={`${styles.tab} ${activeTab === 'brands' ? styles.tabActive : ''}`}
                  onClick={() => setActiveTab('brands')}
                >
                  Markalar
                </button>
              </div>

              {isLoading ? (
                <div className={styles.loading}>Aranıyor...</div>
              ) : results.length > 0 ? (
                <div className={styles.productGrid}>
                  {results.map((product) => (
                    <Link
                      key={product.id}
                      href={product.url}
                      className={styles.productCard}
                      onClick={onClose}
                    >
                      <div className={styles.productImage}>
                        <Image
                          src={`${basePath}${product.image}`}
                          alt={product.name}
                          fill
                          sizes="(max-width: 768px) 50vw, 25vw"
                        />
                      </div>
                      <div className={styles.productInfo}>
                        <span className={styles.productBrand}>{product.brand}</span>
                        <span className={styles.productName}>{product.name}</span>
                        <span className={styles.productPrice}>{product.priceText}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className={styles.noResults}>
                  <b>"{query}"</b> için sonuç bulunamadı.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
