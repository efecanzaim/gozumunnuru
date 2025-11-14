import Link from "next/link";
import styles from "./NewSection.module.css";

export default function NewSection() {
  return (
    <section className={styles.newSection} aria-label="Yeni bölüm">
      <div className={styles.newSectionContent}>
        <h2 className={styles.newSectionTitle}>
          Özel koleksiyonumuzu keşfedin
        </h2>
        <Link href="/mucevher" className={styles.newSectionButton}>
          Alışverişe Başla
        </Link>
      </div>
    </section>
  );
}

