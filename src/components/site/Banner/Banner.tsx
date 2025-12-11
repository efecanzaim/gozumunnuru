import styles from "./Banner.module.css";
import { getBasePath } from "@/utils/basePath";

export default function Banner() {
  const basePath = getBasePath();
  const videos = [
    {
      src: `${basePath}/gorseller/banner1.mp4`,
      title: "Göz Alıcı Takılar",
      description: "Yeni sezon pırlanta tasarımları ile stilini aydınlat.",
    },
    {
      src: `${basePath}/gorseller/banner2.mp4`,
      title: "Yeni Gelenler",
      description: "Atölyemizden çıkan en yeni tasarımları ilk sen keşfet.",
    },
  ];

  return (
    <section className={styles.banner}>
      <div className={styles.bannerContainer}>
        {videos.map((banner, index) => (
          <div key={banner.title} className={`${styles.bannerItem} ${styles.twoBanner}`}>
            <video
              className={styles.bannerVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label={banner.title}
            >
              <source src={banner.src} type="video/mp4" />
              Tarayıcınız bu videoyu desteklemiyor.
            </video>
            <h3 className={styles.bannerTitle}>{banner.title}</h3>
            <p className={styles.bannerDescription}>{banner.description}</p>
            <a href="#" className={styles.bannerCTA}>Keşfet</a>
          </div>
        ))}
      </div>
    </section>
  );
}

