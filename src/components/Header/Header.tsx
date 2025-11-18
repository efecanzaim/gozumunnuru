import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.bannerWrapper}>
          <Image
            src="/banner.png"
            alt="gözümün nuru banner"
            width={1200}
            height={400}
            className={styles.bannerImage}
            priority
          />
        </div>
      </div>
    </header>
  );
}

