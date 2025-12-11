import { BlogPost } from '@/types/blog';

// Örnek blog yazıları - Daha sonra CMS veya API'den çekilebilir
export const blogPosts: BlogPost[] = [
  {
    slug: 'mucevher-bakimi-ipuclari',
    title: 'Mücevher Bakımı İpuçları: Yüzüklerinizi Nasıl Parlak Tutarsınız?',
    excerpt: 'Değerli mücevherlerinizin ömrünü uzatmak ve parlaklığını korumak için uzman önerileri.',
    content: `
      <h2>Mücevher Bakımının Önemi</h2>
      <p>Değerli mücevherleriniz, özenli bakım gerektiren hassas parçalardır. Doğru bakım yöntemleriyle yüzükleriniz, kolyeleriniz ve küpeleriniz yıllarca parlak ve güzel kalabilir.</p>
      
      <h3>Günlük Bakım</h3>
      <p>Mücevherlerinizi düzenli olarak yumuşak bir bezle silmek, parlaklığını korumak için önemlidir. Ayrıca, mücevherlerinizi temiz bir yerde saklamak da önemlidir.</p>
      
      <h3>Profesyonel Bakım</h3>
      <p>Yılda en az bir kez mücevherlerinizin profesyonel bir kuyumcu tarafından kontrol edilmesi önerilir. Bu, taşların yerinde olduğundan ve ayarların sağlam olduğundan emin olmanızı sağlar.</p>
    `,
    author: {
      name: 'Gözümün Nuru',
      avatar: '/gorseller/logo.png'
    },
    publishedAt: '2024-01-15',
    image: '/gorseller/yuzuk.jpg',
    category: 'Bakım',
    tags: ['bakım', 'yüzük', 'pırlanta'],
    readTime: 5,
    featured: true
  },
  {
    slug: 'pirlanta-secimi-rehberi',
    title: 'Pırlanta Seçimi Rehberi: 4C Kuralı Nedir?',
    excerpt: 'Pırlanta alırken dikkat edilmesi gereken en önemli kriterler: Cut, Color, Clarity ve Carat.',
    content: `
      <h2>4C Kuralı</h2>
      <p>Pırlanta seçiminde 4C kuralı, pırlantanın kalitesini belirleyen dört temel kriteri ifade eder.</p>
      
      <h3>Cut (Kesim)</h3>
      <p>Kesim, pırlantanın parlaklığını ve ateşini belirleyen en önemli faktördür. İyi kesilmiş bir pırlanta, ışığı mükemmel şekilde yansıtır.</p>
      
      <h3>Color (Renk)</h3>
      <p>Pırlanta renkleri D'den Z'ye kadar sınıflandırılır. D en beyaz ve değerli renktir.</p>
      
      <h3>Clarity (Berraklık)</h3>
      <p>Berraklık, pırlantanın içindeki kusurların derecesini ifade eder.</p>
      
      <h3>Carat (Karat)</h3>
      <p>Karat, pırlantanın ağırlığını ifade eder. 1 karat 0.2 gram'a eşittir.</p>
    `,
    author: {
      name: 'Gözümün Nuru',
      avatar: '/gorseller/logo.png'
    },
    publishedAt: '2024-01-10',
    image: '/gorseller/pirlanta.jpg',
    category: 'Rehber',
    tags: ['pırlanta', 'rehber', '4c'],
    readTime: 8,
    featured: true
  },
  {
    slug: 'ozel-tasarim-sureci',
    title: 'Özel Tasarım Süreci: Hayalinizdeki Mücevheri Yaratmak',
    excerpt: 'Kişiye özel mücevher tasarım sürecinin her adımını keşfedin.',
    content: `
      <h2>Tasarım Süreci</h2>
      <p>Özel tasarım mücevher, hayalinizdeki parçayı gerçeğe dönüştürmenin en iyi yoludur.</p>
      
      <h3>İlk Görüşme</h3>
      <p>Tasarım süreci, ihtiyaçlarınızı ve hayallerinizi paylaştığınız ilk görüşme ile başlar.</p>
      
      <h3>Tasarım Çizimi</h3>
      <p>Uzman tasarımcılarımız, görüşmelerinizden yola çıkarak size özel bir tasarım çizimi hazırlar.</p>
      
      <h3>Onay ve Üretim</h3>
      <p>Tasarımı onayladıktan sonra, ustalarımız parçanızı özenle üretir.</p>
    `,
    author: {
      name: 'Gözümün Nuru',
      avatar: '/gorseller/logo.png'
    },
    publishedAt: '2024-01-05',
    image: '/gorseller/ozeltasarim.jpg',
    category: 'Tasarım',
    tags: ['özel tasarım', 'süreç', 'yaratıcılık'],
    readTime: 6
  },
  {
    slug: 'hediye-onerileri-sevgililer-gunu',
    title: 'Sevgililer Günü Hediye Önerileri: Unutulmaz Bir Hediye Seçimi',
    excerpt: 'Sevgilinize unutulmaz bir hediye vermek için en özel mücevher önerileri.',
    content: `
      <h2>Sevgililer Günü Hediye Önerileri</h2>
      <p>Sevgililer Günü için mükemmel bir mücevher hediye seçimi yapmak istiyorsanız, doğru yerdesiniz.</p>
      
      <h3>Yüzük Seçenekleri</h3>
      <p>Klasik pırlanta yüzüklerden, modern tasarımlara kadar geniş bir yelpaze.</p>
      
      <h3>Kolye ve Küpeler</h3>
      <p>Zarif kolye ve küpe setleri, her tarz için mükemmel bir seçenek.</p>
      
      <h3>Kişiselleştirme</h3>
      <p>Hediyenizi özel mesajlarla veya tarihlerle kişiselleştirebilirsiniz.</p>
    `,
    author: {
      name: 'Gözümün Nuru',
      avatar: '/gorseller/logo.png'
    },
    publishedAt: '2024-01-01',
    image: '/gorseller/hediye.jpg',
    category: 'Hediye',
    tags: ['sevgililer günü', 'hediye', 'öneri'],
    readTime: 4
  }
];

export const blogCategories = [
  { id: '1', name: 'Bakım', slug: 'bakim' },
  { id: '2', name: 'Rehber', slug: 'rehber' },
  { id: '3', name: 'Tasarım', slug: 'tasarim' },
  { id: '4', name: 'Hediye', slug: 'hediye' },
];

