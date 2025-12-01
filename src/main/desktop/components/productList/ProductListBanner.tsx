import React from 'react'
import './ProductListBanner.css';
export default function ProductListBanner() {
  return (
    <div id="productListBanner" className="o-productListBanner container -wide">
      <div className="banner three columns">
        <a href="https://www.beymen.com/tr/erkek-10004?marka=polo-ralph-lauren_3949">
          <img className="lazy -lazyImage" src="https://cdn.beymen.com/bannerimages/polo_2025102810472082939.jpg" alt="Polo" />
        </a>
      </div>
      <div className="banner three columns">
        <a href="https://www.beymen.com/tr/brand-burberry-32057">
          <img className="lazy -lazyImage" src="https://cdn.beymen.com/bannerimages/burberryerkek_2025102717075556074.jpg" alt="burberryerkek" />
        </a>
      </div>
      <div className="banner three columns">
        <a href="https://www.beymen.com/tr/erkek-10004?marka=premiata_21957">
          <img className="lazy -lazyImage" src="https://cdn.beymen.com/bannerimages/premiata_2025102810480455104.jpg" alt="premiata" />
        </a>
      </div>
      <div className="banner three columns">
        <a href="https://www.beymen.com/tr/brand-lacoste-2169">
          <img className="lazy -lazyImage" src="https://cdn.beymen.com/bannerimages/lacoste_2025102717084047248.jpg" alt="lacoste" />
        </a>
      </div>
    </div>
  )
}
