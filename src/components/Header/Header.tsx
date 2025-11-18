import Image from "next/image";
import styles from "./Header.module.css";
import { getBasePath } from "@/utils/basePath";

export default function Header() {
  const basePath = getBasePath();
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.bannerWrapper}>
          <Image
            src={`${basePath}/banner.png`}
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

