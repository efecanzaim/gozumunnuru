import React from 'react';
import styles from './Footer.module.css';
import { getBasePath } from '@/utils/basePath';
import { Instagram } from 'lucide-react';

const Footer = () => {
  const basePath = getBasePath();
  return (
    <footer className={styles['o-footer']}>
      <div className={styles['o-footer__center']}>
        <div className={styles['container']}>
          <div className={`${styles['o-footer__content']} ${styles['row']}`}>
            <div className={styles['o-footer__col']}>
              <div className={styles['o-footer__group']}>
                <span className={styles['o-footer__group--title']}>HAKKIMIZDA</span>
                <a className={styles['o-footer__group--link']} href="/tarihce-c">Hikayemiz</a>
                <a className={styles['o-footer__group--link']} href="/han-kuyumculuk">Han Kuyumculuk</a>
                <a className={styles['o-footer__group--link']} href="https://e-sirket.mkk.com.tr/esir/dashboard.jsp#/sirketbilgileri/10896" target="_blank" rel="nofollow">Bilgi Toplumu Hizmeti</a>
                <a className={styles['o-footer__group--link']} href="/ozel-urunler" rel="nofollow">Özel ürünler</a>
              </div>
            </div>
            <div className={styles['o-footer__col']}>
              <div className={styles['o-footer__group']}>
                <span className={styles['o-footer__group--title']}>MÜŞTERİ HİZMETLERİ</span>
                <a className={styles['o-footer__group--link']} href="/bize-sorun" rel="nofollow">Bize Sorun</a>
                <a className={styles['o-footer__group--link']} href="/sikca-sorulan-sorular-c" rel="nofollow">Sıkça Sorulan Sorular</a>
                <a className={styles['o-footer__group--link']} href="/home/sitemap">Site Haritası</a>
                <a className={styles['o-footer__group--link']} href="/aydinlatma-metinleri-c" rel="nofollow">Kişisel Verilerin Korunması</a>
                <a className={styles['o-footer__group--link']} href="/iletisim-c" rel="nofollow">İletişim</a>
              </div>
            </div>
            <div className={styles['o-footer__col']}>
              <div className={styles['o-footer__group']}>
                <a className={styles['o-footer__group--upperCase']} href="/blog">BLOG</a>
              </div>
            </div>
            <div className={styles['o-footer__col']}>
              <div className={styles['o-footer__group']}>
                <span className={styles['o-footer__group--noLinkTitle']}>ÖZEL SAYFALAR </span>
                <a className={styles['o-footer__group--link']} href="/yilbasi-hediyeleri">Yılbaşı</a>
                <a className={styles['o-footer__group--link']} href="/sevgililer-gunu-hediye-secenekleri-53731">Sevgililer Günü</a>
                <a className={styles['o-footer__group--link']} href="/yasam-hediye-anneler-gunu-hediyeleri-54528">Anneler Günü</a>
                <a className={styles['o-footer__group--link']} href="/kadinler-gunu">Dünya Kadınlar Günü</a>
              </div>
            </div>
            <div className={styles['o-footer__col']}>
              <div className={styles['o-footer__logo']}>
                <img height="20" src={`${basePath}/gozumun-nuru-logo.svg`} title="Gözümün Nuru" width="256" alt="Gözümün Nuru Logo" />
              </div>
              <div className={styles['o-footer__social']}>
                <div className={styles['o-footer__social--title']}>BİZİ TAKİP EDİN</div>
                <a href="https://www.instagram.com/gozumunnuruantalya" target="_blank" rel="nofollow" aria-label="Instagram" className={styles['o-footer__social--instagram']}>
                  <Instagram size={26} />
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
