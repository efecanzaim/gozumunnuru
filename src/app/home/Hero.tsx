import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroSection} aria-label="Ana hero bölümü">
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>gözümün nuru</h1>
        <div className={styles.heroActions}>
          <a href="/mucevher" className={styles.heroButtonPrimary}>
            Koleksiyonu Keşfet
          </a>
        </div>
      </div>
    </section>
  );
}

