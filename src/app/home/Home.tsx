import Hero from "./Hero";
import FeaturedCategories from "./FeaturedCategories";
import NewSection from "./NewSection";
import BlogSection from "./BlogSection";
import InstagramFeed from "./InstagramFeed";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <NewSection />
      <BlogSection />
      <InstagramFeed />
      <section className={styles.homeSection} aria-label="Ana sayfa içeriği" />
    </>
  );
}

