import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/main/navigation/Navbar/Navbar';
import Footer from '@/main/desktop/components/footer/Footer';
import { blogPosts } from '@/data/blog-posts';
import { getBasePath } from '@/utils/basePath';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import styles from './page.module.css';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Yazı Bulunamadı | gözümün nuru',
    };
  }

  return {
    title: `${post.title} | gözümün nuru`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const basePath = getBasePath();
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // İlgili yazılar (aynı kategoriden, mevcut yazı hariç)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          {/* Back Button */}
          <Link href="/blog" className={styles.backButton}>
            <ArrowLeft size={20} />
            <span>Blog'a Dön</span>
          </Link>

          {/* Article Header */}
          <header className={styles.header}>
            <div className={styles.categoryBadge}>{post.category}</div>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.excerpt}>{post.excerpt}</p>
            
            <div className={styles.meta}>
              <div className={styles.metaItem}>
                <div className={styles.author}>
                  <span className={styles.authorName}>{post.author.name}</span>
                </div>
              </div>
              <div className={styles.metaItem}>
                <Calendar size={16} />
                <span>{formattedDate}</span>
              </div>
              {post.readTime && (
                <div className={styles.metaItem}>
                  <Clock size={16} />
                  <span>{post.readTime} dakika okuma</span>
                </div>
              )}
            </div>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className={styles.tags}>
                {post.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    <Tag size={14} />
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Featured Image */}
          <div className={styles.imageWrapper}>
            <Image
              src={`${basePath}${post.image}`}
              alt={post.title}
              fill
              className={styles.image}
              priority
              sizes="100vw"
            />
          </div>

          {/* Article Content */}
          <article className={styles.content}>
            <div
              className={styles.articleBody}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className={styles.relatedSection}>
              <h2 className={styles.relatedTitle}>İlgili Yazılar</h2>
              <div className={styles.relatedGrid}>
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className={styles.relatedCard}
                  >
                    <div className={styles.relatedImageWrapper}>
                      <Image
                        src={`${basePath}${relatedPost.image}`}
                        alt={relatedPost.title}
                        fill
                        className={styles.relatedImage}
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className={styles.relatedContent}>
                      <h3 className={styles.relatedCardTitle}>{relatedPost.title}</h3>
                      <p className={styles.relatedCardExcerpt}>{relatedPost.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

