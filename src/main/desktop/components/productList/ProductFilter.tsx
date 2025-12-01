"use client";

import React, { useState } from 'react';
import './ProductFilter.css';

// Close icon SVG
const CloseIcon = () => (
  <svg width="11" height="11" viewBox="0 0 11 11" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.5 1.5L9 0L5.25 3.75L1.5 0L0 1.5L3.75 5.25L0 9L1.5 10.5L5.25 6.75L9 10.5L10.5 9L6.75 5.25L10.5 1.5Z"/>
  </svg>
);

type FilterOption = {
  id: string;
  name: string;
  count?: number;
};

type FilterCategory = {
  id: string;
  name: string;
  options: FilterOption[];
};

type ProductFilterProps = {
  isSticky?: boolean;
  categories?: FilterCategory[];
  onFilterChange?: (filters: Record<string, string[]>) => void;
  onOpenChange?: (isOpen: boolean) => void;
};

export default function ProductFilter({ 
  isSticky = false, 
  categories = [],
  onFilterChange,
  onOpenChange 
}: ProductFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});

  // Default filter categories
  const defaultCategories: FilterCategory[] = categories.length > 0 ? categories : [
    {
      id: 'category',
      name: 'Kategori',
      options: [
        { id: 'gomlek', name: 'Gömlek', count: 245 },
        { id: 'pantolon', name: 'Pantolon', count: 189 },
        { id: 'ceket', name: 'Ceket', count: 156 },
        { id: 'tshirt', name: 'T-Shirt', count: 312 },
      ]
    },
    {
      id: 'brand',
      name: 'Marka',
      options: [
        { id: 'beymen', name: 'Beymen Collection', count: 89 },
        { id: 'network', name: 'Network', count: 67 },
        { id: 'ds-damat', name: 'D\'S Damat', count: 45 },
      ]
    },
    {
      id: 'color',
      name: 'Renk',
      options: [
        { id: 'siyah', name: 'Siyah', count: 156 },
        { id: 'beyaz', name: 'Beyaz', count: 134 },
        { id: 'lacivert', name: 'Lacivert', count: 98 },
        { id: 'gri', name: 'Gri', count: 87 },
      ]
    },
    {
      id: 'size',
      name: 'Beden',
      options: [
        { id: 'xs', name: 'XS', count: 45 },
        { id: 's', name: 'S', count: 89 },
        { id: 'm', name: 'M', count: 134 },
        { id: 'l', name: 'L', count: 112 },
        { id: 'xl', name: 'XL', count: 78 },
      ]
    },
    {
      id: 'price',
      name: 'Fiyat',
      options: [
        { id: '0-500', name: '0 - 500 TL', count: 156 },
        { id: '500-1000', name: '500 - 1.000 TL', count: 234 },
        { id: '1000-2500', name: '1.000 - 2.500 TL', count: 189 },
        { id: '2500-5000', name: '2.500 - 5.000 TL', count: 145 },
        { id: '5000+', name: '5.000 TL ve üzeri', count: 98 },
      ]
    },
  ];

  const handleOpenFilter = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
    if (onOpenChange) onOpenChange(true);
  };

  const handleCloseFilter = () => {
    setIsOpen(false);
    setActiveCategory(null);
    document.body.style.overflow = '';
    if (onOpenChange) onOpenChange(false);
  };

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(activeCategory === categoryId ? null : categoryId);
  };

  const handleOptionToggle = (categoryId: string, optionId: string) => {
    setSelectedFilters(prev => {
      const currentFilters = prev[categoryId] || [];
      const newFilters = currentFilters.includes(optionId)
        ? currentFilters.filter(id => id !== optionId)
        : [...currentFilters, optionId];
      
      return {
        ...prev,
        [categoryId]: newFilters
      };
    });
  };

  const handleApplyFilters = () => {
    if (onFilterChange) {
      onFilterChange(selectedFilters);
    }
    handleCloseFilter();
  };

  const handleClearFilters = () => {
    setSelectedFilters({});
  };

  const totalSelectedCount = Object.values(selectedFilters).flat().length;

  return (
    <div className="o-productFilter">
      {/* Filter Button - Uses CSS pseudo elements for icons */}
      <button 
        className={`a-productFilter__button ${isOpen ? '-isActive' : ''}`}
        onClick={handleOpenFilter}
      >
        <span className="a-productFilter__button-text">
          FİLTRELE
          {totalSelectedCount > 0 && ` (${totalSelectedCount})`}
        </span>
      </button>

      {/* Filter Overlay & Content */}
      {isOpen && (
        <>
          <div className="o-productFilter__overlay" onClick={handleCloseFilter} />
          <div className="o-productFilter__content">
            {/* Close Button - positioned at top right */}
            <button className="a-productFilter__closeButton" onClick={handleCloseFilter}>
              <CloseIcon />
              <span>Filtreleri Kapat</span>
            </button>

            {/* Filter Menu */}
            <div className="o-productFilter__contentMenu">
              <ul className="o-productFilter__menuList">
                {defaultCategories.map((category) => (
                  <li 
                    key={category.id}
                    className={`o-productFilter__menuItem ${activeCategory === category.id ? '-active' : ''}`}
                    onClick={() => handleCategoryClick(category.id)}
                  >
                    <span className="o-productFilter__menuItemText">{category.name}</span>
                    {(selectedFilters[category.id]?.length || 0) > 0 && (
                      <span className="o-productFilter__menuItemCount">
                        ({selectedFilters[category.id]?.length})
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Filter Options */}
            <div className="o-productFilter__contentList">
              <div className="a-productFilter__subTitle">
                {activeCategory 
                  ? defaultCategories.find(c => c.id === activeCategory)?.name 
                  : 'Filtre Seçin'}
              </div>
              
              <div className="o-productFilter__contentWrapper">
                {activeCategory && (
                  <ul className="o-productFilter__optionList">
                    {defaultCategories
                      .find(c => c.id === activeCategory)
                      ?.options.map((option) => (
                        <li key={option.id} className="o-productFilter__optionItem">
                          <label className="o-productFilter__optionLabel">
                            <input
                              type="checkbox"
                              checked={selectedFilters[activeCategory]?.includes(option.id) || false}
                              onChange={() => handleOptionToggle(activeCategory, option.id)}
                              className="o-productFilter__optionCheckbox"
                            />
                            <span className="o-productFilter__optionName">{option.name}</span>
                            {option.count && (
                              <span className="o-productFilter__optionCount">({option.count})</span>
                            )}
                          </label>
                        </li>
                      ))}
                  </ul>
                )}
              </div>

              {/* Footer */}
              <div className="o-productFilter__footer">
                {totalSelectedCount > 0 && (
                  <button 
                    className="a-productFilter__clearButton"
                    onClick={handleClearFilters}
                  >
                    Filtreleri Temizle
                  </button>
                )}
                <div className="a-productFilter__applyDesc">
                  {totalSelectedCount > 0 && (
                    <span>{totalSelectedCount} filtre seçildi</span>
                  )}
                </div>
                <button 
                  className="a-productFilter__applyButton"
                  onClick={handleApplyFilters}
                >
                  UYGULA
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
