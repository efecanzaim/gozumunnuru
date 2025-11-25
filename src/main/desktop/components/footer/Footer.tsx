import React from 'react';
import styles from './Footer.module.css';



const Footer = () => (
  <footer className={styles['o-footer']}>
    <div className={styles['o-footer__top']}>
      <div className={styles['container']}>
        <div className={`${styles['o-footer__top--content']} ${styles['row']} ${styles['no-gutters']}`}>
          <div className={`${styles['o-footer__top--col']} ${styles['col-4']}`}>
            <i className={styles['o-footer__top--icon'] + ' bwi-cargo'}>
              {/* SVG icon for cargo */}
            </i>
            <div className={styles['o-footer__top--wrapper']}>
              <span className={styles['o-footer__top--title']}>&#220;CRETSİZ KARGO</span>
              <p className={styles['o-footer__top--text']}>2000 TL ve &#252;zeri alışverişlerinizde kargo &#252;cretsiz. The One &#252;yelerine alt limitsiz &#252;cretsiz kargo ayrıcalığı. </p>
            </div>
          </div>
          <div className={`${styles['o-footer__top--col']} ${styles['col-4']}`}>
            <i className={styles['o-footer__top--icon'] + ' bwi-cc'}>
              {/* SVG icon for mağazadan teslim */}
            </i>
            <div className={styles['o-footer__top--wrapper']}>
              <span className={styles['o-footer__top--title']}>MAĞAZADAN TESLİM</span>
              <p className={styles['o-footer__top--text']}>Online olarak satın aldığınız ürünleri mağazalarımızdan teslim alabilirsiniz.</p>
            </div>
          </div>
          <div className={`${styles['o-footer__top--col']} ${styles['col-4']}`}>
            <i className={styles['o-footer__top--icon'] + ' bwi-refund'}>
              {/* SVG icon for refund */}
            </i>
            <div className={styles['o-footer__top--wrapper']}>
              <span className={styles['o-footer__top--title']}>KOLAY İADE</span>
              <p className={styles['o-footer__top--text']}>Beymen.com’dan satın aldığınız ürünleri kolayca iade edebilirsiniz.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={styles['o-footer__center']}>
      <div className={styles['container']}>
        <div className={`${styles['o-footer__content']} ${styles['row']}`}>
          <div className={styles['o-footer__col']}>
            <div className={styles['o-footer__group']}>
              <a className={styles['o-footer__group--title']} href="/tr/tarihce-c" rel="nofollow">BEYMEN HAKKINDA</a>
              <a className={styles['o-footer__group--link']} href="/tr/markalar-1849">Markalar</a>
              <a className={styles['o-footer__group--link']} href="/tr/kosulsuz-musteri-mutlulugu-c" rel="nofollow">Koşulsuz Müşteri Mutluluğu</a>
              <a className={styles['o-footer__group--link']} href="/tr/theone-c" rel="nofollow" target="_blank">The One Card</a>
              <a className={styles['o-footer__group--link']} href="/tr/ozel-dikim-c" rel="nofollow">Özel Dikim</a>
              <a className={styles['o-footer__group--link']} href="/tr/beymenprive-c" rel="nofollow">Beymen Privé – Stil Danışmanlığı</a>
              <a className={styles['o-footer__group--link']} href="/tr/kurumsal-satis-c" rel="nofollow">Kurumsal Satış</a>
              <a className={styles['o-footer__group--link']} href="https://e-sirket.mkk.com.tr/esir/dashboard.jsp#/sirketbilgileri/10896" rel="nofollow" target="_blank">Bilgi Toplumu Hizmetleri</a>
              <a className={styles['o-footer__group--link']} href="/tr/about-beymen-c" rel="nofollow">About Beymen</a>
              <a className={styles['o-footer__group--link']} href="/tr/beymen-promise-c" rel="nofollow">Beymen Promise</a>
            </div>
          </div>
          <div className={styles['o-footer__col']}>
            <div className={styles['o-footer__group']}>
              <a className={styles['o-footer__group--title']} href="/tr/musteri-hizmetleri-c" rel="nofollow">MÜŞTERİ HİZMETLERİ</a>
              <a className={styles['o-footer__group--link']} href="/tr/bize-sorun" rel="nofollow">Bize Sorun</a>
              <a className={styles['o-footer__group--link']} href="/tr/sikca-sorulan-sorular-c" rel="nofollow">Sıkça Sorulan Sorular</a>
              <a className={styles['o-footer__group--link']} href="/tr/beymen-islem-rehberi-c" rel="nofollow">İşlem Rehberi</a>
              <a className={styles['o-footer__group--link']} href="/tr/ucretsiz-kargo-iade-c" rel="nofollow">Ücretsiz Kargo ve İade</a>
              <a className={styles['o-footer__group--link']} href="/tr/magazadan-teslim-c" rel="nofollow">Mağazadan Teslim</a>
              <a className={styles['o-footer__group--link']} href="/tr/uyelik-sozlesmesi-c" rel="nofollow">Üyelik Sözleşmesi</a>
              <a className={styles['o-footer__group--link']} href="/tr/home/sitemap">Site Haritası</a>
              <a className={styles['o-footer__group--link']} href="/tr/aydinlatma-metinleri-c" rel="nofollow">Kişisel Verilerin Korunması</a>
              <a className={styles['o-footer__group--link']} href="/tr/iletisim-c" rel="nofollow">İletişim</a>
              <a className={styles['o-footer__group--link']} href="/tr/satici-basvuru-formu" rel="nofollow">Satıcı Olmak İstiyorum</a>
              <a className={styles['o-footer__group--link']} href="https://www.beymen.com/tr/kampanya-kosullari-c-2154" rel="nofollow" target="_blank">Kampanya Koşulları</a>
              <a className={styles['o-footer__group--link']} href="https://www.beymen.com/tr/mesafeli-satis-sozlesmesi-c" rel="nofollow" target="_blank">Mesafeli Satış Sözleşmesi</a>
            </div>
          </div>
          <div className={styles['o-footer__col']}>
            <div className={styles['o-footer__group']}>
              <a className={styles['o-footer__group--title']} href="/tr/customer/order" rel="nofollow">HESABIM</a>
              <a className={styles['o-footer__group--link']} href="/tr/customer/order" rel="nofollow">Siparişlerim</a>
              <a className={styles['o-footer__group--link']} href="/tr/customer/address" rel="nofollow">Adreslerim</a>
              <a className={styles['o-footer__group--link']} href="/tr/customer/info" rel="nofollow">Üyelik Bilgilerim</a>
            </div>
            <div className={styles['o-footer__group']}>
              <a className={styles['o-footer__group--upperCase']} href="/tr/magazalar" rel="nofollow">MAĞAZALAR</a>
              <a className={styles['o-footer__group--upperCase']} href="https://blog.beymen.com/" target="_blank">BEYMEN BLOG</a>
              <a className={styles['o-footer__group--upperCase']} href="/tr/lookbook-c" rel="nofollow">BEYMEN MAGAZINE</a>
            </div>
          </div>
          <div className={styles['o-footer__col']}>
            <div className={styles['o-footer__group']}>
              <span className={styles['o-footer__group--noLinkTitle']}>ÖZEL SAYFALAR </span>
              <a className={styles['o-footer__group--link']} href="/tr/yilbasi-hediyeleri">Yılbaşı</a>
              <a className={styles['o-footer__group--link']} href="/tr/sevgililer-gunu-hediye-secenekleri-53731">Sevgililer Günü</a>
              <a className={styles['o-footer__group--link']} href="/tr/yasam-hediye-anneler-gunu-hediyeleri-54528">Anneler Günü</a>
              <a className={styles['o-footer__group--link']} href="/tr/yasam-hediye-babalar-gunu-55832">Babalar Günü</a>
              <a className={styles['o-footer__group--link']} href="/tr/dugun-ve-nisan-elbise-modelleri-60346">Nişan ve Düğün Elbiseleri</a>
              <a className={styles['o-footer__group--link']} href="/tr/mezuniyet-ve-balo-elbise-modelleri-49712">Mezuniyet ve Balo Elbise</a>
              <a className={styles['o-footer__group--link']} href="https://www.beymen.com/tr/yasam-stil-onerisi-kadinlar-gunu-ozel-urunleri-94405">Dünya Kadınlar Günü</a>
            </div>
          </div>
          <div className={styles['o-footer__col']}>
            <div className={styles['o-footer__logo']}>
              <img height="20" src="//cdn.beymen.com/assets/desktop/img/beymen-logo-dot-white.svg" title="Beymen" width="256" alt="Beymen Logo" />
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
            <div className={styles['o-footer__app']}>
              <div className={styles['o-footer__app--title']}>UYGULAMAMIZI İNDİRİN</div>
              <a className={styles['o-footer__app--link']} href="https://itunes.apple.com/tr/app/beymen/id828339291" rel="nofollow" target="_blank">
                <img alt="App Store'dan İndirin" src="https://cdn.beymen.com/assets/desktop/img/apple-icon.svg" />
              </a>
              <a className={styles['o-footer__app--link']} href="https://play.google.com/store/apps/details?id=com.mobisoft.beymen" rel="nofollow" target="_blank">
                <img alt="Google Play'den Alın" src="https://cdn.beymen.com/assets/desktop/img/google-play-icon.svg" />
              </a>
              <a className={styles['o-footer__app--link']} href="https://appgallery.huawei.com/app/c110235409?shareprepath=ag&amp;locale=en_us&amp;source=appshare&amp;subsource=c110235409&amp;shareto=com.android.bluetooth&amp;sharefrom=appmarket&amp;shareıds=e46e94bd97e546fca8db89abd1020d0e_com.android.bluetooth&amp;calltype=share" rel="nofollow" target="_blank">
                <img alt="Hemen İndirin AppGallery" src="https://cdn.beymen.com/bannerimages/huawei-app-logo_2024020914493978538.svg" />
              </a>
            </div>
            <div className='footer-legal' style={{display: 'flex', alignItems: 'flex-start', flexDirection: 'column', padding: '16px 0'}}>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <div id="ETBIS" style={{marginRight: 20}}>
                  <div id="5A8D5DE497934CA893CA85CFEF729C65">
                    <a href="https://etbis.eticaret.gov.tr/sitedogrulama/5a8d5de497934ca893ca85cfef729c65" target="_blank" rel="noopener noreferrer">
                      <img src="https://cdn.beymen.com/bannerimages/etbis-qr_2025031410365912835.png" style={{width: 80, height: 88}} alt="ETBIS QR" />
                    </a>
                  </div>
                </div>
                <a aria-label="Güven Damgası" href="https://www.guvendamgasi.org.tr/firmadetay.php?Guid=b09c96e8-c9b8-11ef-9c8c-48df373f4850" target="_blank" rel="noopener noreferrer">
                  <img alt="Güven Damgası ikonu" className="security-certificate-image" src="https://cdn.beymen.com/bannerimages/footer-trust-stamp_2025031410413824479.png" style={{width: 86}} />
                </a>
              </div>
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

export default Footer;
