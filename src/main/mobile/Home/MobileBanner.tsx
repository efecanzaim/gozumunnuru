import React from 'react';
import Link from 'next/link';

interface MobileBannerProps {
    imageUrl: string;
    title: string;
    info: string;
    ctaText: string;
    link: string;
    altText: string;
}

const MobileBanner: React.FC<MobileBannerProps> = ({
    imageUrl,
    title,
    info,
    ctaText,
    link,
    altText,
}) => {
    return (
        <div className="o-bannerItem">
            <div className="o-bannerItemMP">
                <Link href={link} className="o-bannerItem--img">
                    <img
                        src={imageUrl}
                        className="bannerImage lazy lazyload"
                        width="320"
                        height="200"
                        alt={altText}
                    />
                </Link>
                <span className="bannerTitle">{title}</span>
                <span className="bannerInfo">{info}</span>
                <Link href={link} className="bannerCTA">
                    {ctaText}
                </Link>
            </div>
        </div>
    );
};

export default MobileBanner;
