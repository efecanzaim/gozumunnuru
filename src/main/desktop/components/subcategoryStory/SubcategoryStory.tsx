import Image from "next/image";
import styles from "./SubcategoryStory.module.css";
import { getBasePath } from "@/utils/basePath";
import BentoGrid from "@/components/ui/bento";

type StorySection = {
  title: string;
  description: string;
  image: string;
  kicker?: string;
  tags?: string[];
};

type Highlight = {
  title: string;
  description: string;
};

type Cta = {
  label?: string;
  title: string;
  description: string;
  note?: string;
};

type BentoGridImage = {
  image: string;
  alt?: string;
};

type SubcategoryStoryProps = {
  eyebrow: string;
  title: string;
  description: string;
  heroImage: string;
  heroNote?: string;
  bentoImages?: BentoGridImage[];
  bentoContent?: {
    title: string;
    description: string;
  };
  sections: StorySection[];
  highlights: Highlight[];
  highlightTitle?: string;
  cta?: Cta;
};

export default function SubcategoryStory({
  eyebrow,
  title,
  description,
  heroImage,
  heroNote,
  bentoImages,
  bentoContent,
  sections,
  highlights,
  highlightTitle = "Öne çıkan detaylar",
  cta,
}: SubcategoryStoryProps) {
  const basePath = getBasePath();

  return (
    <div className={styles.container}>
      {/* Split Hero - Image left, Content right */}
      <section className={styles.heroSplit}>
        <div className={styles.heroImageContainer}>
          <Image
            src={`${basePath}${heroImage}`}
            alt={title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className={styles.heroImage}
          />
          <div className={styles.heroImageAccent} />
        </div>
        <div className={styles.heroTextContainer}>
          <div className={styles.heroTextInner}>
            <span className={styles.eyebrow}>{eyebrow}</span>
            <h1 className={styles.mainTitle}>{title}</h1>
            <p className={styles.mainDescription}>{description}</p>
            {heroNote && (
              <div className={styles.heroNoteBadge}>
                <span className={styles.heroNoteIcon}>✨</span>
                {heroNote}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Bento Grid Section */}
      {bentoImages && bentoImages.length >= 4 && bentoContent && (
        <BentoGrid
          title={bentoContent.title}
          description={bentoContent.description}
          items={bentoImages.slice(0, 5).map((img, index) => {
            const classNames = [
              "max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl",
              "lg:col-span-3 lg:rounded-tr-4xl",
              "lg:col-span-2 lg:rounded-bl-4xl",
              "lg:col-span-2",
              "max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl",
            ];
            return {
              eyebrow: `Görsel ${index + 1}`,
              title: bentoContent.title,
              description: bentoContent.description,
              image: img.image,
              className: classNames[index] || "",
              fade: index === 0 || index === 4 ? ["bottom"] : [],
            };
          })}
        />
      )}

      {/* Horizontal CTA Bar */}
      {cta && (
        <section className={styles.ctaBar}>
          <div className={styles.ctaBarContent}>
            <div className={styles.ctaBarText}>
              <span className={styles.ctaBarLabel}>{cta.label ?? "Atölye randevusu"}</span>
              <h3 className={styles.ctaBarTitle}>{cta.title}</h3>
              {cta.description && (
                <p className={styles.ctaBarDescription}>{cta.description}</p>
              )}
            </div>
            <div className={styles.ctaBarActions}>
              <button className={styles.ctaBarButton} type="button">
                Randevu Al
              </button>
              {cta.note && (
                <span className={styles.ctaBarNote}>{cta.note}</span>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

