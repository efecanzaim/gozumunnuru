import Link from "next/link";
import styles from "./BlogSection.module.css";

export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "Mücevher Tasarımının İncelikleri",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "https://placehold.co/800x800",
      href: "/blog/mucevher-tasarimi",
    },
    {
      id: 2,
      title: "Koleksiyonumuzun Hikayesi",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      image: "https://placehold.co/800x800",
      href: "/blog/koleksiyon-hikayesi",
    },
    {
      id: 3,
      title: "Özel Tasarım Süreci",
      description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
      image: "https://placehold.co/800x800",
      href: "/blog/ozel-tasarim",
    },
  ];

  return (
    <section className={styles.blogSection} aria-label="Blog yazıları">
      <div className={styles.blogContainer}>
        <h2 className={styles.blogTitle}>Blog Yazılarımız</h2>
        <div className={styles.blogGrid}>
          {blogPosts.map((post) => (
            <article key={post.id} className={styles.blogCard}>
              <Link href={post.href} className={styles.blogImageLink}>
                <div className={styles.blogImageWrapper}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className={styles.blogImage}
                  />
                </div>
              </Link>
              <div className={styles.blogContent}>
                <Link href={post.href} className={styles.blogTitleLink}>
                  <h3 className={styles.blogCardTitle}>{post.title}</h3>
                </Link>
                <p className={styles.blogCardDescription}>
                  {post.description.length > 196
                    ? (() => {
                        const truncated = post.description.substring(0, 196);
                        const lastSpace = truncated.lastIndexOf(' ');
                        const cutPoint = lastSpace > 0 ? lastSpace : 196;
                        return `${post.description.substring(0, cutPoint)}...`;
                      })()
                    : post.description}
                </p>
              </div>
            </article>
          ))}
        </div>
        <Link href="/blog" className={styles.blogButton}>
          Tüm Blog Yazılarını Oku
        </Link>
      </div>
    </section>
  );
}

