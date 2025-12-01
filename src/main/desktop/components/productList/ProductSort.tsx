"use client";

import React, { useState, useRef, useEffect } from 'react';
import './ProductSort.css';

type SortOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

type ProductSortProps = {
  options?: SortOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
};

const defaultOptions: SortOption[] = [
  { value: 'yeniurunler', label: 'Yeni Ürünler' },
  { value: 'artanfiyat', label: 'Artan Fiyat' },
  { value: 'azalanfiyat', label: 'Azalan Fiyat' },
  { value: 'editor', label: 'Editör Sıralaması' },
  { value: 'akillisiralama', label: 'Akıllı Sıralama' },
  { value: 'indirimliurunler', label: 'İndirimli Ürünler' },
];

export default function ProductSort({
  options = defaultOptions,
  value = '',
  onChange,
  placeholder = 'Sıralama'
}: ProductSortProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);
  const listboxRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(opt => opt.value === selectedValue);
  const displayText = selectedOption?.label || placeholder;

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (optionValue: string) => {
    const option = options.find(opt => opt.value === optionValue);
    if (option?.disabled) return;
    
    setSelectedValue(optionValue);
    setIsOpen(false);
    if (onChange) {
      onChange(optionValue);
    }
  };

  // Click dışına tıklandığında kapat
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (listboxRef.current && !listboxRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggle();
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    } else if (e.key === 'ArrowDown' && isOpen) {
      e.preventDefault();
      const currentIndex = options.findIndex(opt => opt.value === selectedValue);
      const nextIndex = currentIndex < options.length - 1 ? currentIndex + 1 : 0;
      if (!options[nextIndex].disabled) {
        setSelectedValue(options[nextIndex].value);
      }
    } else if (e.key === 'ArrowUp' && isOpen) {
      e.preventDefault();
      const currentIndex = options.findIndex(opt => opt.value === selectedValue);
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : options.length - 1;
      if (!options[prevIndex].disabled) {
        setSelectedValue(options[prevIndex].value);
      }
    }
  };

  return (
    <div 
      ref={listboxRef}
      className="listbox o-productList__sort -lbSort"
    >
      <div
        className={`listbox__selected ${!selectedValue ? '-invalid' : ''}`}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
      >
        <span className="listbox__text">{displayText}</span>
      </div>
      
      <ul
        className={`listbox__options ${isOpen ? '-show' : ''}`}
        role="listbox"
        aria-label="Sıralama seçenekleri"
      >
        {options.map((option) => (
          <li
            key={option.value}
            className={`listbox__option ${option.disabled ? '-disabled' : ''} ${selectedValue === option.value ? '-selected' : ''}`}
            role="option"
            aria-selected={selectedValue === option.value}
            onClick={() => handleSelect(option.value)}
          >
            <span className="listbox__text">{option.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
