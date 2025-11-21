import React from 'react';
import Link from 'next/link';

const MobileFooter = () => {
    return (
        <footer className="o-footer" id="footer">
            <div className="o-footer__logo">
                <img
                    alt="Beymen"
                    className="lazyload"
                    height="16"
                    src="//cdn.beymen.com/assets/mobile/img/beymen-logo-dot-white.svg"
                    width="205"
                />
            </div>
            <div className="o-footer__seperator"></div>
            <div className="o-footer__menu">
                <div className="o-footer__menu --col">
                    <Link href="#" className="o-footer__menu--link --first --bold">Beymen Hakkında</Link>
                    <Link href="#" className="o-footer__menu--link">Markalar</Link>
                    <Link href="#" className="o-footer__menu--link">Koşulsuz Müşteri Mutluluğu</Link>
                    <Link href="#" className="o-footer__menu--link">The One Card</Link>
                    <Link href="#" className="o-footer__menu--link">Özel Dikim</Link>
                    <Link href="#" className="o-footer__menu--link">Beymen Privé – Stil Danışmanlığı</Link>

                    <Link href="#" className="o-footer__menu--link --first --bold mt20 --mt">Hesabım</Link>
                    <Link href="#" className="o-footer__menu--link">Siparişlerim</Link>
                    <Link href="#" className="o-footer__menu--link">Adreslerim</Link>
                    <Link href="#" className="o-footer__menu--link">Üyelik Bilgilerim</Link>

                    <Link href="#" className="o-footer__menu--link --bold mt20 pt0 --mt --pt">Mağazalar</Link>
                    <Link href="#" className="o-footer__menu--link --bold mt20 pt0 --mt --pt">Beymen Blog</Link>
                    <Link href="#" className="o-footer__menu--link --bold mt20 pt0 --mt --pt">Beymen Magazine</Link>
                    <Link href="#" className="o-footer__menu--link --bold mt20 pt0 --mt --pt">Beymen Promise</Link>
                </div>
                <div className="o-footer__menu --col">
                    <span className="o-footer__menu--link --first --bold d-block">Müşteri Hizmetleri</span>
                    <Link href="#" className="o-footer__menu--link">Bize Sorun</Link>
                    <Link href="#" className="o-footer__menu--link">Sıkça Sorulan Sorular</Link>
                    <Link href="#" className="o-footer__menu--link">İşlem Rehberi</Link>
                    <Link href="#" className="o-footer__menu--link">Ücretsiz Kargo ve İade</Link>
                    <Link href="#" className="o-footer__menu--link">Mağazadan Teslim</Link>
                    <Link href="#" className="o-footer__menu--link">Üyelik Sözleşmesi</Link>
                    <Link href="#" className="o-footer__menu--link">Site Haritası</Link>
                    <Link href="#" className="o-footer__menu--link">Kişisel Verilerin Korunması</Link>
                    <Link href="#" className="o-footer__menu--link">İletişim</Link>
                    <Link href="#" className="o-footer__menu--link">Mesafeli Satış Sözleşmesi</Link>
                </div>
            </div>
            <div className="o-footer__bottom">
                <div className="o-footer__bottomTitle">Bizi Takip Edin</div>
                <div className="o-footer__social">
                    {/* Social Icons would go here, using placeholders for now */}
                    <span>Facebook</span>
                    <span>Twitter</span>
                    <span>Instagram</span>
                </div>
            </div>
            <div className="o-footer__copyright">© 2025 Beymen Tüm Hakları Saklıdır</div>
        </footer>
    );
};

export default MobileFooter;
