import Link from 'next/link';
import Navbar from '@/components/common/Navbar/Navbar';
import Footer from '@/components/site/Footer/Footer';
import { Home, Search } from 'lucide-react';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>404</h1>
          </div>
          
          <h2 className={styles.subtitle}>
            Sayfa Bulunamadı
          </h2>
          
          <p className={styles.description}>
            Aradığınız sayfa mevcut değil veya taşınmış olabilir. 
            Ana sayfaya dönebilir veya menüden istediğiniz sayfayı bulabilirsiniz.
          </p>
          
          <div className={styles.actions}>
            <Link href="/" className={styles.buttonPrimary}>
              <Home size={18} />
              Ana Sayfaya Dön
            </Link>
            
            <Link href="/mucevher" className={styles.buttonSecondary}>
              <Search size={18} />
              Kategorileri Keşfet
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

