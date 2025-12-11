import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getBasePath } from '@/utils/basePath';
import styles from './DualImageSection.module.css';

type ImageCardProps = {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
};

const ImageCard = ({ imageSrc, title, description, link }: ImageCardProps) => {
  const basePath = getBasePath();
  
  return (
    <Link href={link} className={styles.imageCard}>
      <div className={styles.imageWrapper}>
        <Image
          src={`${basePath}${imageSrc}`}
          alt={title}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </Link>
  );
};

const DualImageSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <ImageCard
          imageSrc="/gorseller/dualImage1.jpg"
          title="Özel Koleksiyon"
          description="Benzersiz tasarımlarımızı keşfedin"
          link="/koleksiyon"
        />
        <ImageCard
          imageSrc="/gorseller/dualImage2.jpg"
          title="Yeni Sezon"
          description="En yeni mücevher tasarımları"
          link="/mucevher"
        />
      </div>
    </section>
  );
};

export default DualImageSection;
