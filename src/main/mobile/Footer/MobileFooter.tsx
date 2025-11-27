import React from 'react';
import Link from 'next/link';
import { getBasePath } from '@/utils/basePath';

const MobileFooter = () => {
    const basePath = getBasePath();
    
    return (
        <footer className="o-footer" id="footer">
            <div className="o-footer__logo">
                <img
                    alt="Gözümün Nuru"
                    className="lazyload"
                    height="16"
                    src={`${basePath}/gozumun-nuru-logo.svg`}
                    width="205"
                />
            </div>
            <div className="o-footer__seperator"></div>
            <div className="o-footer__menu">
                <div className="o-footer__menu --col">
                    <Link href="#" className="o-footer__menu--link --first --bold">Gözümün Nuru Hakkında</Link>
                    <Link href="#" className="o-footer__menu--link">Markalar</Link>
                    <Link href="#" className="o-footer__menu--link">Koşulsuz Müşteri Mutluluğu</Link>
                    <Link href="#" className="o-footer__menu--link">The One Card</Link>
                    <Link href="#" className="o-footer__menu--link">Özel Dikim</Link>
                    <Link href="#" className="o-footer__menu--link">Gözümün Nuru Privé – Stil Danışmanlığı</Link>

                    <Link href="#" className="o-footer__menu--link --first --bold mt20 --mt">Hesabım</Link>
                    <Link href="#" className="o-footer__menu--link">Siparişlerim</Link>
                    <Link href="#" className="o-footer__menu--link">Adreslerim</Link>
                    <Link href="#" className="o-footer__menu--link">Üyelik Bilgilerim</Link>

                    <Link href="#" className="o-footer__menu--link --bold mt20 pt0 --mt --pt">Mağazalar</Link>
                    <Link href="#" className="o-footer__menu--link --bold mt20 pt0 --mt --pt">Gözümün Nuru Blog</Link>
                    <Link href="#" className="o-footer__menu--link --bold mt20 pt0 --mt --pt">Gözümün Nuru Magazine</Link>
                    <Link href="#" className="o-footer__menu--link --bold mt20 pt0 --mt --pt">Gözümün Nuru Promise</Link>
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
                    <Link href="#" className="o-footer__menu--link">Satıcı Olmak İstiyorum</Link>
                    <Link href="#" className="o-footer__menu--link" target="_blank">Kampanya Koşulları</Link>
                    <span className="o-footer__menu--link --first --bold mt20 --mt d-block">Özel Sayfalar</span>
                    <Link href="#" className="o-footer__menu--link">Yılbaşı</Link>
                    <Link href="#" className="o-footer__menu--link">Sevgililer Günü</Link>
                    <Link href="#" className="o-footer__menu--link">Anneler Günü</Link>
                    <Link href="#" className="o-footer__menu--link">Babalar Günü</Link>
                    <Link href="#" className="o-footer__menu--link">Nişan ve Düğün Elbiseleri</Link>
                    <Link href="#" className="o-footer__menu--link">Mezuniyet ve Balo Elbise</Link>
                    <Link href="#" className="o-footer__menu--link">Dünya Kadınlar Günü</Link>
                </div>
            </div>
            <div className="o-footer__bottom">
                <div className="o-footer__bottomTitle">Bizi Takip Edin</div>
                <div className="o-footer__social">
                    <a className="bmi-facebook" href="https://www.facebook.com/Gözümün Nuru" rel="nofollow" target="_blank" aria-label="Facebook">
                        <svg className="icon icon-facebook" fill="#ffffff" height="32px" width="32px" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="currentColor"/>
                        </svg>
                    </a>
                    <a className="bmi-twitter" href="https://twitter.com/Gözümün Nuru" rel="nofollow" target="_blank" aria-label="Twitter">
                        <svg className="icon icon-twitter" fill="#ffffff" height="32px" width="32px" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" fill="currentColor"/>
                        </svg>
                    </a>
                    <a className="bmi-instagram" href="http://instagram.com/Gözümün Nuru" rel="nofollow" target="_blank" aria-label="Instagram">
                        <svg className="icon icon-instagram" fill="#ffffff" height="32px" width="32px" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="currentColor"/>
                        </svg>
                    </a>
                    <a className="bmi-youtube" href="https://www.youtube.com/channel/ucmyuy0zgm93ujonhzn8rvmq" rel="nofollow" target="_blank" aria-label="YouTube">
                        <svg className="icon icon-youtube" fill="#ffffff" height="32px" width="32px" viewBox="0 0 24 24">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="currentColor"/>
                        </svg>
                    </a>
                    <a className="bmi-pinterest" href="https://tr.pinterest.com/Gözümün Nuru/" rel="nofollow" target="_blank" aria-label="Pinterest">
                        <svg className="icon icon-pinterest" fill="#ffffff" height="32px" width="32px" viewBox="0 0 24 24">
                            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" fill="currentColor"/>
                        </svg>
                    </a>
                    <a className="bmi-linkedin" href="https://tr.linkedin.com/company/Gözümün Nuru" rel="nofollow" target="_blank" aria-label="LinkedIn">
                        <svg className="icon icon-linkedin" fill="#ffffff" height="32px" width="32px" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor"/>
                        </svg>
                    </a>
                </div>
            </div>
            <div className="o-footer__bottom">
                <div className="o-footer__bottomTitle">Uygulamamızı İndirin</div>
                <div className="o-footer__appLink">
                    <a href="https://play.google.com/store/apps/details?id=com.mobisoft.Gözümün Nuru" id="footerPlayStore" rel="nofollow" target="_blank">
                        <img alt="Google Play'den İndirin" className="lazyload" height="34" src="//cdn.Gözümün Nuru.com/assets/mobile/img/PlayStore.svg" width="128"/>
                    </a>
                </div>
            </div>
            <div className="o-footer__copyright">© 2025 Gözümün Nuru Tüm Hakları Saklıdır</div>
        </footer>
    );
};

export default MobileFooter;
