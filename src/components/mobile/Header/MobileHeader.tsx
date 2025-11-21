import React, { useEffect, useState } from 'react';
import './../mobile.css';

interface MobileHeaderProps {
    pageType?: string;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ pageType = 'homePage' }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`b-header ${!isScrolled ? '-center' : ''}`}>
            <div className="b-header__top">
                <a href="/" title="Gözümün Nuru">
                    <img
                        src="/gozumun-nuru-logo.svg"
                        alt="Gözümün Nuru"
                        className="b-header__logo"
                    />
                </a>
                <div className="b-header__searchButton">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.33304 16.6659C3.7407 16.6659 0 12.9253 0 8.33295C-8.33332e-06 3.74064 3.74069 -3.74998e-05 8.33305 2.8195e-10C12.9254 3.75004e-05 16.6661 3.74071 16.6661 8.33303C16.6661 10.3292 15.9577 12.1643 14.7814 13.6014L19.7487 18.5686C20.0781 18.8892 20.085 19.4163 19.7617 19.7502C19.4382 20.0839 18.8978 20.0838 18.5703 19.7469L13.603 14.7796C12.1657 15.9568 10.3301 16.6659 8.33304 16.6659ZM14.9998 8.33257C14.9998 4.64095 12.025 1.66618 8.33334 1.66618C4.6417 1.66618 1.6669 4.64095 1.66691 8.33257C1.66691 12.0242 4.64171 14.999 8.33334 14.999C12.025 14.999 14.9998 12.0242 14.9998 8.33257Z"
                            fill="#111111"
                        />
                    </svg>
                </div>
            </div>
            {pageType === 'homePage' && (
                <div className="b-header__search">
                    <input
                        id="searchKey"
                        name="q"
                        type="text"
                        placeholder="Ürün, Marka Arayın"
                        maxLength={100}
                        autoComplete="off"
                        autoCapitalize="off"
                        autoCorrect="off"
                    />
                </div>
            )}
        </div>
    );
};

export default MobileHeader;
