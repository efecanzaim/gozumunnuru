import React from 'react'
import './ProductListBanner.css';
import { getBasePath } from '@/utils/basePath';

export default function ProductListBanner() {
  const basePath = getBasePath();

  return (
    <div id="productListBanner" className="o-productListBanner container -wide">
      <div className="banner three columns">
        <a href="https://www.beymen.com/tr/erkek-10004?marka=polo-ralph-lauren_3949">
          <img className="lazy -lazyImage" src={`${basePath}/categories/categories1.png`} alt="category-1" />
        </a>
      </div>
      <div className="banner three columns">
        <a href="https://www.beymen.com/tr/brand-burberry-32057">
          <img className="lazy -lazyImage" src={`${basePath}/categories/categories2.png`} alt="category-2" />
        </a>
      </div>
      <div className="banner three columns">
        <a href="https://www.beymen.com/tr/erkek-10004?marka=premiata_21957">
          <img className="lazy -lazyImage" src={`${basePath}/categories/categories3.png`} alt="category-3" />
        </a>
      </div>
      <div className="banner three columns">
        <a href="https://www.beymen.com/tr/brand-lacoste-2169">
          <img className="lazy -lazyImage" src={`${basePath}/categories/categories4.png`} alt="category-4" />
        </a>
      </div>
    </div>
  )
}
