import Image from "next/image";
import Link from "next/link";
import styles from "./CategoryStory.module.css";
import { getBasePath } from "@/utils/basePath";
import { getCategoryInfo } from "@/data/categories";
import { getSubcategoryStoryKey, subcategoryStories } from "@/data/story-content";

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

type CategoryStoryProps = {
  categoryId: string;
  eyebrow: string;
  title: string;
  description: string;
  heroImage: string;
  sections: StorySection[];
  highlights: Highlight[];
  highlightTitle?: string;
  cta?: Cta;
  variant?: "default" | "accent";
};

export default function CategoryStory({
  categoryId,
  eyebrow,
  title,
  description,
  heroImage,
  sections,
  highlights,
  highlightTitle = "Öne çıkan detaylar",
  cta,
  variant = "default",
}: CategoryStoryProps) {
  const basePath = getBasePath();
  const isAccent = variant === "accent";
  
  // Get subcategories for this category
  const categoryInfo = getCategoryInfo(categoryId);
  const subcategories = categoryInfo?.subcategories || [];

  // Accent variant için tamamen farklı HTML yapısı
  if (isAccent) {
    return (
      <div className={`${styles.wrapper} ${styles.wrapperAccent}`}>
        {/* Full-width hero with overlay text */}
        <section className={styles.heroAccentFull}>
          <div className={styles.heroAccentImage}>
            <Image
              src={`${basePath}${heroImage}`}
              alt={title}
              fill
              priority
              sizes="100vw"
              className={styles.image}
            />
            <div className={styles.heroAccentOverlay} />
          </div>
          <div className={styles.heroAccentContent}>
            <span className={styles.heroAccentEyebrow}>{eyebrow}</span>
            <h1 className={styles.heroAccentTitle}>{title}</h1>
            <p className={styles.heroAccentLead}>{description}</p>
          </div>
        </section>

        {/* Subcategories Grid */}
        {subcategories.length > 0 && (
          <section className={styles.subcategoriesGrid}>
            <div className={styles.subcategoriesContainer}>
              {subcategories.map((subcategory) => {
                const storyKey = getSubcategoryStoryKey(categoryId, subcategory.id);
                const subcategoryStory = subcategoryStories[storyKey];
                const subcategoryImage = subcategoryStory?.heroImage || heroImage;
                
                return (
                  <Link
                    key={subcategory.id}
                    href={`/${categoryId}/${subcategory.id}`}
                    className={styles.subcategoryCard}
                  >
                    <div className={styles.subcategoryImageWrapper}>
                      <Image
                        src={`${basePath}${subcategoryImage}`}
                        alt={subcategory.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className={styles.subcategoryImage}
                      />
                    </div>
                    <div className={styles.subcategoryContent}>
                      <h3 className={styles.subcategoryTitle}>{subcategory.title}</h3>
                      {subcategoryStory?.description && (
                        <p className={styles.subcategoryDescription}>
                          {subcategoryStory.description}
                        </p>
                      )}
                      <button className={styles.subcategoryButton} type="button">
                        Keşfet
                      </button>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* Bottom CTA - Full width banner */}
        {cta && (
          <section className={styles.accentCta}>
            <div className={styles.accentCtaContent}>
              <div className={styles.accentCtaText}>
                <span className={styles.accentCtaLabel}>{cta.label ?? "Atölye randevusu"}</span>
                <h3 className={styles.accentCtaTitle}>{cta.title}</h3>
                <p className={styles.accentCtaDescription}>{cta.description}</p>
              </div>
              <div className={styles.accentCtaActions}>
                <Link href="/randevu" className={styles.accentCtaButton}>
                  Randevu Al
                </Link>
                {cta.note && <span className={styles.accentCtaNote}>{cta.note}</span>}
              </div>
            </div>
          </section>
        )}
      </div>
    );
  }

  // Default variant - original layout
  const wrapperClass = styles.wrapper;
  const heroClass = styles.hero;
  const sectionsClass = styles.sections;
  const sectionCardClass = styles.sectionCard;
  const ctaClass = styles.cta;

  return (
    <div className={wrapperClass}>
      <section className={heroClass}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h1 className={styles.heading}>{title}</h1>
          <p className={styles.lead}>{description}</p>
        </div>
        <div className={styles.heroMedia}>
          <div className={styles.heroImage}>
            <Image
              src={`${basePath}${heroImage}`}
              alt={title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 640px"
              className={styles.image}
            />
          </div>
        </div>
      </section>

      {/* Subcategories Grid */}
      {subcategories.length > 0 && (
        <section className={styles.subcategoriesGrid}>
          <div className={styles.subcategoriesContainer}>
            {subcategories.map((subcategory) => {
              const storyKey = getSubcategoryStoryKey(categoryId, subcategory.id);
              const subcategoryStory = subcategoryStories[storyKey];
              const subcategoryImage = subcategoryStory?.heroImage || heroImage;
              
              return (
                <Link
                  key={subcategory.id}
                  href={`/${categoryId}/${subcategory.id}`}
                  className={styles.subcategoryCard}
                >
                  <div className={styles.subcategoryImageWrapper}>
                    <Image
                      src={`${basePath}${subcategoryImage}`}
                      alt={subcategory.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={styles.subcategoryImage}
                    />
                  </div>
                  <div className={styles.subcategoryContent}>
                    <h3 className={styles.subcategoryTitle}>{subcategory.title}</h3>
                    {subcategoryStory?.description && (
                      <p className={styles.subcategoryDescription}>
                        {subcategoryStory.description}
                      </p>
                    )}
                    <button className={styles.subcategoryButton} type="button">
                      Keşfet
                    </button>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {cta ? (
        <section className={ctaClass}>
          <div className={styles.ctaInner}>
            <div className={styles.ctaText}>
              <span className={styles.ctaBadge}>{cta.label ?? "Atölye randevusu"}</span>
              <h3 className={styles.ctaTitle}>{cta.title}</h3>
              <p className={styles.ctaDescription}>{cta.description}</p>
            </div>
            <div className={styles.ctaActions}>
              <Link href="/randevu" className={styles.ctaButton}>
                Randevu Al
              </Link>
              {cta.note ? <span className={styles.ctaNote}>{cta.note}</span> : null}
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}

