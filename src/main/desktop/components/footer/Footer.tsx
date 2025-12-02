import React from 'react';
import styles from './Footer.module.css';
import { getBasePath } from '@/utils/basePath';


const Footer = () => {
  const basePath = getBasePath();
  return (
  <footer className={styles['o-footer']}>
    
    <div className={styles['o-footer__center']}>
      <div className={styles['container']}>
        <div className={`${styles['o-footer__content']} ${styles['row']}`}>
          <div className={styles['o-footer__col']}>
            <div className={styles['o-footer__group']}>
              <a className={styles['o-footer__group--title']} href="/tr/tarihce-c" rel="nofollow">HAKKIMIZDA</a>
              <a className={styles['o-footer__group--link']} href="/tr/tarihce-c">Hikayemiz</a>
              <a className={styles['o-footer__group--link']} href="/tr/han-kuyumculuk">Han Kuyumculuk</a>
               <a className={styles['o-footer__group--link']} href="https://e-sirket.mkk.com.tr/esir/dashboard.jsp#/sirketbilgileri/10896" target="_blank" rel="nofollow">Bilgi Toplumu Hizmeti</a>
              <a className={styles['o-footer__group--link']} href="/tr/ozel-urunler" rel="nofollow">Özel ürünler</a>
            </div>
          </div>
          <div className={styles['o-footer__col']}>
            <div className={styles['o-footer__group']}>
              <a className={styles['o-footer__group--title']} href="/tr/musteri-hizmetleri-c" rel="nofollow">MÜŞTERİ HİZMETLERİ</a>
              <a className={styles['o-footer__group--link']} href="/tr/bize-sorun" rel="nofollow">Bize Sorun</a>
              <a className={styles['o-footer__group--link']} href="/tr/sikca-sorulan-sorular-c" rel="nofollow">Sıkça Sorulan Sorular</a>
              <a className={styles['o-footer__group--link']} href="/tr/home/sitemap">Site Haritası</a>
              <a className={styles['o-footer__group--link']} href="/tr/aydinlatma-metinleri-c" rel="nofollow">Kişisel Verilerin Korunması</a>
              <a className={styles['o-footer__group--link']} href="/tr/iletisim-c" rel="nofollow">İletişim</a>
            </div>
          </div>
          <div className={styles['o-footer__col']}>
            <div className={styles['o-footer__group']}>
              <a className={styles['o-footer__group--upperCase']} href="/tr/magazalar" rel="nofollow">MAĞAZALAR</a>
              <a className={styles['o-footer__group--upperCase']} href="https://blog.beymen.com/" target="_blank">BLOG</a>
            </div>
          </div>
          <div className={styles['o-footer__col']}>
            <div className={styles['o-footer__group']}>
              <span className={styles['o-footer__group--noLinkTitle']}>ÖZEL SAYFALAR </span>
              <a className={styles['o-footer__group--link']} href="/tr/yilbasi-hediyeleri">Yılbaşı</a>
              <a className={styles['o-footer__group--link']} href="/tr/sevgililer-gunu-hediye-secenekleri-53731">Sevgililer Günü</a>
              <a className={styles['o-footer__group--link']} href="/tr/yasam-hediye-anneler-gunu-hediyeleri-54528">Anneler Günü</a>
              <a className={styles['o-footer__group--link']} href="https://www.beymen.com/tr/yasam-stil-onerisi-kadinlar-gunu-ozel-urunleri-94405">Dünya Kadınlar Günü</a>
            </div>
          </div>
          <div className={styles['o-footer__col']}>
              <div className={styles['o-footer__logo']}>
              <img height="20" src={`${basePath}/gozumun-nuru-logo.svg`} title="Gözümün Nuru" width="256" alt="Gözümün Nuru Logo" />
            </div>
            <div className={styles['o-footer__social']}>
              <div className={styles['o-footer__social--title']}>BİZİ TAKİP EDİN</div>
              <a href="https://www.facebook.com/beymen" target="_blank" rel="nofollow" aria-label="Facebook" className="bwi-facebook">
                <svg width="26" height="26" aria-hidden="true">
                  <use xlinkHref="#icon-footer-facebook" />
                </svg>
              </a>
              <a href="https://twitter.com/beymen" target="_blank" rel="nofollow" aria-label="Twitter" className="bwi-twitter">
                <svg width="26" height="26" aria-hidden="true">
                  <use xlinkHref="#icon-footer-twitter" />
                </svg>
              </a>
              <a href="http://instagram.com/beymen" target="_blank" rel="nofollow" aria-label="Instagram" className="bwi-instagram">
                <svg width="26" height="26" aria-hidden="true">
                  <use xlinkHref="#icon-footer-instagram" />
                </svg>
              </a>
              <a href="https://tr.pinterest.com/beymen/" target="_blank" rel="nofollow" aria-label="Pinterest" className="bwi-pinterest">
                <svg width="26" height="26" aria-hidden="true">
                  <use xlinkHref="#icon-footer-pinterest" />
                </svg>
              </a>
              <a href="https://www.youtube.com/channel/ucmyuy0zgm93ujonhzn8rvmq" target="_blank" rel="nofollow" aria-label="YouTube" className="bwi-youtube">
                <svg width="26" height="26" aria-hidden="true">
                  <use xlinkHref="#icon-footer-youtube" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/beymen" target="_blank" rel="nofollow" aria-label="LinkedIn" className="bwi-linkedin">
                <svg width="26" height="26" aria-hidden="true">
                  <use xlinkHref="#icon-footer-linkedin" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={styles['o-footer__bottom']}>
      <div className={styles['container']}>
        <div className={styles['o-footer__bottom--content']}>
          <div className={styles['o-footer__copyRight']}>
            © <span title="V-5.release-retail-product-merged.1">2025</span> Gözümün Nuru, Tüm Hakları Saklıdır
          </div>
          <div className={styles['o-footer__language']} data-language-panel-trigger>
            <svg
              width="14"
              height="14"
              className="icon"
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span>TR</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
