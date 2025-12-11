import Navbar from '@/main/navigation/Navbar/Navbar';
import Footer from '@/main/desktop/components/footer/Footer';
import { BlogSection } from '@/components/ui/blog-section-with-rich-preview';
import { blogPosts } from '@/data/blog-posts';

export const metadata = {
  title: 'Blog | gözümün nuru',
  description: 'Mücevher bakımı, pırlanta seçimi ve özel tasarım süreci hakkında uzman önerileri ve rehberler.',
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '100px', backgroundColor: '#f0ece8' }}>
        <BlogSection posts={blogPosts} />
      </main>
      <Footer />
    </>
  );
}

