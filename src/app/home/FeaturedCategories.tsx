import Link from "next/link";
import styles from "./FeaturedCategories.module.css";

export default function FeaturedCategories() {
  return (
    <section className={styles.featuredSection} aria-label="Öne çıkan kategoriler">
      <div className={styles.featuredContainer}>
        <Link href="/mucevher" className={styles.featuredCard}>
          <div className={`${styles.featuredImageWrapper} ${styles.featuredImageNecklace}`}>
          </div>
          <div className={styles.featuredOverlay}>
            <h2 className={styles.featuredTitle}>Mücevherleri keşfet</h2>
          </div>
        </Link>
        <Link href="/koleksiyon" className={styles.featuredCard}>
          <div className={`${styles.featuredImageWrapper} ${styles.featuredImageBracelets}`}>
          </div>
          <div className={styles.featuredOverlay}>
            <h2 className={styles.featuredTitle}>Koleksiyonları keşfet</h2>
          </div>
        </Link>
      </div>
    </section>
  );
}

