'use client';

import React from 'react';

const MobileBackToTop: React.FC = () => {
    const scrollToTop = () => {
        const scrollDuration = 300;
        const scrollStep = -window.scrollY / (scrollDuration / 15);
        const scrollInterval = setInterval(() => {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 15);
    };

    return (
        <button 
            type="button" 
            className="topScroll bmi-backTo-top" 
            onClick={scrollToTop}
            aria-label="Sayfanın başına dön"
        >
            <svg 
                className="icon icon-backTo-top" 
                width="18px" 
                height="18px" 
                style={{ marginRight: '0.9375rem' }}
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path 
                    d="M12 4L4 12H8V20H16V12H20L12 4Z" 
                    fill="currentColor"
                />
            </svg>
            Sayfanın Başına Dön
        </button>
    );
};

export default MobileBackToTop;

