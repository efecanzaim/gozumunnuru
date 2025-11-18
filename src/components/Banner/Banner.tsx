import Image from "next/image";
import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <section className={styles.banner}>
      <div className={styles.bannerContainer}>
        <div className={`${styles.bannerItem} ${styles.twoBanner}`}>
          <Image
            src="/banner1.jpg"
            alt="Banner 1"
            width={557}
            height={786}
            className={styles.bannerImage}
            priority
          />
          <h3 className={styles.bannerTitle}>Banner Başlık 1</h3>
          <p className={styles.bannerDescription}>Banner açıklama metni buraya gelecek</p>
          <a href="#" className={styles.bannerCTA}>Keşfet</a>
        </div>
        <div className={`${styles.bannerItem} ${styles.twoBanner}`}>
          <Image
            src="/banner2.jpg"
            alt="Banner 2"
            width={557}
            height={786}
            className={styles.bannerImage}
            priority
          />
          <h3 className={styles.bannerTitle}>Banner Başlık 2</h3>
          <p className={styles.bannerDescription}>Banner açıklama metni buraya gelecek</p>
          <a href="#" className={styles.bannerCTA}>Keşfet</a>
        </div>
        <div className={`${styles.bannerItem} ${styles.threeBanner}`}>
          <Image
            src="/banner3.jpg"
            alt="Banner 3"
            width={557}
            height={786}
            className={styles.bannerImage}
          />
          <h3 className={styles.bannerTitle}>Banner Başlık 3</h3>
          <p className={styles.bannerDescription}>Banner açıklama metni buraya gelecek</p>
          <a href="#" className={styles.bannerCTA}>Keşfet</a>
        </div>
        <div className={`${styles.bannerItem} ${styles.threeBanner}`}>
          <Image
            src="/banner4.jpg"
            alt="Banner 4"
            width={557}
            height={786}
            className={styles.bannerImage}
          />
          <h3 className={styles.bannerTitle}>Banner Başlık 4</h3>
          <p className={styles.bannerDescription}>Banner açıklama metni buraya gelecek</p>
          <a href="#" className={styles.bannerCTA}>Keşfet</a>
        </div>
        <div className={`${styles.bannerItem} ${styles.threeBanner}`}>
          <Image
            src="/banner5.jpg"
            alt="Banner 5"
            width={557}
            height={786}
            className={styles.bannerImage}
          />
          <h3 className={styles.bannerTitle}>Banner Başlık 5</h3>
          <p className={styles.bannerDescription}>Banner açıklama metni buraya gelecek</p>
          <a href="#" className={styles.bannerCTA}>Keşfet</a>
        </div>
        <div className={`${styles.bannerItem} ${styles.threeBanner}`}>
          <Image
            src="/banner6.jpg"
            alt="Banner 6"
            width={557}
            height={786}
            className={styles.bannerImage}
          />
          <h3 className={styles.bannerTitle}>Banner Başlık 6</h3>
          <p className={styles.bannerDescription}>Banner açıklama metni buraya gelecek</p>
          <a href="#" className={styles.bannerCTA}>Keşfet</a>
        </div>
        <div className={`${styles.bannerItem} ${styles.threeBanner}`}>
          <Image
            src="/banner7.jpg"
            alt="Banner 7"
            width={557}
            height={786}
            className={styles.bannerImage}
          />
          <h3 className={styles.bannerTitle}>Banner Başlık 7</h3>
          <p className={styles.bannerDescription}>Banner açıklama metni buraya gelecek</p>
          <a href="#" className={styles.bannerCTA}>Keşfet</a>
        </div>
        <div className={`${styles.bannerItem} ${styles.threeBanner}`}>
          <Image
            src="/banner8.jpg"
            alt="Banner 8"
            width={557}
            height={786}
            className={styles.bannerImage}
          />
          <h3 className={styles.bannerTitle}>Banner Başlık 8</h3>
          <p className={styles.bannerDescription}>Banner açıklama metni buraya gelecek</p>
          <a href="#" className={styles.bannerCTA}>Keşfet</a>
        </div>
        <div className={`${styles.bannerItem} ${styles.threeBanner}`}>
          <Image
            src="/banner9.jpg"
            alt="Banner 9"
            width={557}
            height={786}
            className={styles.bannerImage}
          />
          <h3 className={styles.bannerTitle}>Banner Başlık 9</h3>
          <p className={styles.bannerDescription}>Banner açıklama metni buraya gelecek</p>
          <a href="#" className={styles.bannerCTA}>Keşfet</a>
        </div>
        <div className={`${styles.bannerItem} ${styles.threeBanner}`}>
          <Image
            src="/banner10.jpg"
            alt="Banner 10"
            width={557}
            height={786}
            className={styles.bannerImage}
          />
          <h3 className={styles.bannerTitle}>Banner Başlık 10</h3>
          <p className={styles.bannerDescription}>Banner açıklama metni buraya gelecek</p>
          <a href="#" className={styles.bannerCTA}>Keşfet</a>
        </div>
        <div className={`${styles.bannerItem} ${styles.threeBanner}`}>
          <Image
            src="/banner11.jpg"
            alt="Banner 11"
            width={557}
            height={786}
            className={styles.bannerImage}
          />
          <h3 className={styles.bannerTitle}>Banner Başlık 11</h3>
          <p className={styles.bannerDescription}>Banner açıklama metni buraya gelecek</p>
          <a href="#" className={styles.bannerCTA}>Keşfet</a>
        </div>
      </div>
    </section>
  );
}

