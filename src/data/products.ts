import type { Product } from '@/main/desktop/components/productSection/ProductCard';

// Kategori bilgileri
export type CategoryInfo = {
  id: string;
  name: string;
  title: string;
  description?: string;
  subcategories?: SubcategoryInfo[];
};

export type SubcategoryInfo = {
  id: string;
  name: string;
  title: string;
  description?: string;
};

// Kategoriler ve alt kategoriler
export const categories: CategoryInfo[] = [
  {
    id: 'mucevher',
    name: 'Mücevher',
    title: 'Mücevher',
    subcategories: [
      { id: 'klasik-pirlanta', name: 'Klasik Pırlanta', title: 'Klasik Pırlanta' },
      { id: 'ozel-uretim-pirlanta', name: 'Özel Üretim Pırlanta', title: 'Özel Üretim Pırlanta' },
      { id: 'klasik-altin', name: 'Klasik Altın', title: 'Klasik Altın' },
      { id: 'ozgun-tasarim', name: 'Özgün Tasarım', title: 'Özgün Tasarım' },
      { id: 'preloved', name: 'Preloved', title: 'Preloved' },
    ]
  },
  {
    id: 'koleksiyon',
    name: 'Koleksiyon',
    title: 'Koleksiyon',
    subcategories: [
      { id: 'klasikler', name: 'Klasikler', title: 'Klasikler' },
      { id: 'atolye', name: 'Atölye', title: 'Atölye' },
      { id: 'yeni-nesil', name: 'Yeni Nesil', title: 'Yeni Nesil' },
    ]
  },
  {
    id: 'ozel-tasarim',
    name: 'Özel Tasarım',
    title: 'Özel Tasarım',
    subcategories: [
      { id: 'bize-tasarlatin', name: 'Bize Tasarlatın', title: 'Bize Tasarlatın' },
      { id: 'kendin-yarat', name: 'Kendin Yarat', title: 'Kendin Yarat' },
      { id: 'nisan-evlilik', name: 'Nişan-Evlilik', title: 'Nişan-Evlilik' },
      { id: 'kisiye-ozel-hediye', name: 'Kişiye Özel Hediye', title: 'Kişiye Özel Hediye' },
    ]
  },
  {
    id: 'hediye',
    name: 'Hediye',
    title: 'Hediye',
    subcategories: [
      { id: 'ozel-gunler', name: 'Özel Günler', title: 'Özel Günler' },
      { id: 'dogum-gunu', name: 'Doğum Günü', title: 'Doğum Günü' },
      { id: 'anneler-gunu', name: 'Anneler Günü', title: 'Anneler Günü' },
      { id: 'kadinlar-gunu', name: 'Kadınlar Günü', title: 'Kadınlar Günü' },
      { id: 'yeni-dogan', name: 'Yeni Doğan', title: 'Yeni Doğan' },
      { id: 'erkek-hediye', name: 'Erkek Hediye', title: 'Erkek Hediye' },
      { id: 'mini-butceli', name: 'Mini Bütçeli', title: 'Mini Bütçeli' },
      { id: 'aksesuar', name: 'Aksesuar', title: 'Aksesuar' },
    ]
  },
  {
    id: 'yatirim',
    name: 'Yatırım',
    title: 'Yatırım',
    subcategories: []
  }
];

// Örnek ürünler - Her kategori için farklı ürünler
const sampleProducts: Record<string, Product[]> = {
  // Mücevher kategorisi ürünleri
  'mucevher': [
    {
      id: 1,
      productUrl: '/mucevher/urun/pirlanta-tek-tas-yuzuk',
      images: ['/gorseller/product1.avif', '/gorseller/product2.avif'],
      brand: 'Gözümün Nuru',
      name: 'Pırlanta Tek Taş Yüzük',
      price: 45000,
      actualPrice: 45000,
      actualPriceText: '45.000,00 TL',
    },
    {
      id: 2,
      productUrl: '/mucevher/urun/altin-kolye',
      images: ['/gorseller/product2.avif', '/gorseller/product3.avif'],
      brand: 'Gözümün Nuru',
      name: 'Altın Kolye',
      price: 28000,
      actualPrice: 28000,
      actualPriceText: '28.000,00 TL',
    },
    {
      id: 3,
      productUrl: '/mucevher/urun/pirlanta-kupe',
      images: ['/gorseller/product3.avif', '/gorseller/product4.avif'],
      brand: 'Gözümün Nuru',
      name: 'Pırlanta Küpe',
      price: 35000,
      originalPrice: 42000,
      orginalPriceText: '42.000,00 TL',
      actualPrice: 35000,
      actualPriceText: '35.000,00 TL',
      hasDiscount: true,
      discountRateText: '%17',
    },
    {
      id: 4,
      productUrl: '/mucevher/urun/altin-bileklik',
      images: ['/gorseller/product4.avif', '/gorseller/product5.avif'],
      brand: 'Gözümün Nuru',
      name: 'Altın Bileklik',
      price: 22000,
      actualPrice: 22000,
      actualPriceText: '22.000,00 TL',
    },
    {
      id: 5,
      productUrl: '/mucevher/urun/pirlanta-set',
      images: ['/gorseller/product5.avif', '/gorseller/product6.avif'],
      brand: 'Gözümün Nuru',
      name: 'Pırlanta Set',
      price: 85000,
      actualPrice: 85000,
      actualPriceText: '85.000,00 TL',
    },
    {
      id: 6,
      productUrl: '/mucevher/urun/safir-yuzuk',
      images: ['/gorseller/product6.avif', '/gorseller/product1.avif'],
      brand: 'Gözümün Nuru',
      name: 'Safir Yüzük',
      price: 55000,
      actualPrice: 55000,
      actualPriceText: '55.000,00 TL',
    },
  ],
  'mucevher/klasik-pirlanta': [
    {
      id: 101,
      productUrl: '/mucevher/klasik-pirlanta/urun/solitaire-yuzuk',
      images: ['/gorseller/product1.avif', '/gorseller/product2.avif'],
      brand: 'Gözümün Nuru',
      name: 'Solitaire Pırlanta Yüzük',
      price: 65000,
      actualPrice: 65000,
      actualPriceText: '65.000,00 TL',
    },
    {
      id: 102,
      productUrl: '/mucevher/klasik-pirlanta/urun/tennis-bileklik',
      images: ['/gorseller/product2.avif', '/gorseller/product3.avif'],
      brand: 'Gözümün Nuru',
      name: 'Tennis Pırlanta Bileklik',
      price: 95000,
      actualPrice: 95000,
      actualPriceText: '95.000,00 TL',
    },
    {
      id: 103,
      productUrl: '/mucevher/klasik-pirlanta/urun/eternity-yuzuk',
      images: ['/gorseller/product3.avif', '/gorseller/product4.avif'],
      brand: 'Gözümün Nuru',
      name: 'Eternity Pırlanta Yüzük',
      price: 78000,
      originalPrice: 85000,
      orginalPriceText: '85.000,00 TL',
      actualPrice: 78000,
      actualPriceText: '78.000,00 TL',
      hasDiscount: true,
      discountRateText: '%8',
    },
  ],
  'mucevher/ozel-uretim-pirlanta': [
    {
      id: 111,
      productUrl: '/mucevher/ozel-uretim-pirlanta/urun/ozel-tasarim-yuzuk',
      images: ['/gorseller/product4.avif', '/gorseller/product5.avif'],
      brand: 'Gözümün Nuru',
      name: 'Özel Tasarım Pırlanta Yüzük',
      price: 125000,
      actualPrice: 125000,
      actualPriceText: '125.000,00 TL',
    },
  ],
  'mucevher/klasik-altin': [
    {
      id: 121,
      productUrl: '/mucevher/klasik-altin/urun/hasir-bileklik',
      images: ['/gorseller/product5.avif', '/gorseller/product6.avif'],
      brand: 'Gözümün Nuru',
      name: 'Hasır Altın Bileklik',
      price: 32000,
      actualPrice: 32000,
      actualPriceText: '32.000,00 TL',
    },
    {
      id: 122,
      productUrl: '/mucevher/klasik-altin/urun/zincir-kolye',
      images: ['/gorseller/product6.avif', '/gorseller/product1.avif'],
      brand: 'Gözümün Nuru',
      name: 'Zincir Altın Kolye',
      price: 28000,
      actualPrice: 28000,
      actualPriceText: '28.000,00 TL',
    },
  ],
  'mucevher/ozgun-tasarim': [
    {
      id: 131,
      productUrl: '/mucevher/ozgun-tasarim/urun/geometrik-kolye',
      images: ['/gorseller/product1.avif', '/gorseller/product2.avif'],
      brand: 'Gözümün Nuru',
      name: 'Geometrik Tasarım Kolye',
      price: 48000,
      actualPrice: 48000,
      actualPriceText: '48.000,00 TL',
    },
  ],
  'mucevher/preloved': [
    {
      id: 141,
      productUrl: '/mucevher/preloved/urun/vintage-yuzuk',
      images: ['/gorseller/product2.avif', '/gorseller/product3.avif'],
      brand: 'Gözümün Nuru',
      name: 'Vintage Pırlanta Yüzük',
      price: 38000,
      originalPrice: 55000,
      orginalPriceText: '55.000,00 TL',
      actualPrice: 38000,
      actualPriceText: '38.000,00 TL',
      hasDiscount: true,
      discountRateText: '%31',
    },
  ],
  
  // Koleksiyon kategorisi
  'koleksiyon': [
    {
      id: 201,
      productUrl: '/koleksiyon/urun/eternal-yuzuk',
      images: ['/gorseller/product3.avif', '/gorseller/product4.avif'],
      brand: 'Gözümün Nuru',
      name: 'Eternal Koleksiyonu Yüzük',
      price: 72000,
      actualPrice: 72000,
      actualPriceText: '72.000,00 TL',
    },
    {
      id: 202,
      productUrl: '/koleksiyon/urun/moonlight-kolye',
      images: ['/gorseller/product4.avif', '/gorseller/product5.avif'],
      brand: 'Gözümün Nuru',
      name: 'Moonlight Kolye',
      price: 58000,
      actualPrice: 58000,
      actualPriceText: '58.000,00 TL',
    },
    {
      id: 203,
      productUrl: '/koleksiyon/urun/aurora-kupe',
      images: ['/gorseller/product5.avif', '/gorseller/product6.avif'],
      brand: 'Gözümün Nuru',
      name: 'Aurora Küpe',
      price: 42000,
      actualPrice: 42000,
      actualPriceText: '42.000,00 TL',
    },
  ],
  'koleksiyon/klasikler': [
    {
      id: 211,
      productUrl: '/koleksiyon/klasikler/urun/heritage-yuzuk',
      images: ['/gorseller/product1.avif', '/gorseller/product2.avif'],
      brand: 'Gözümün Nuru',
      name: 'Heritage Yüzük',
      price: 82000,
      actualPrice: 82000,
      actualPriceText: '82.000,00 TL',
    },
  ],
  'koleksiyon/atolye': [
    {
      id: 221,
      productUrl: '/koleksiyon/atolye/urun/handcrafted-bileklik',
      images: ['/gorseller/product2.avif', '/gorseller/product3.avif'],
      brand: 'Gözümün Nuru',
      name: 'El Yapımı Bileklik',
      price: 35000,
      actualPrice: 35000,
      actualPriceText: '35.000,00 TL',
    },
  ],
  'koleksiyon/yeni-nesil': [
    {
      id: 231,
      productUrl: '/koleksiyon/yeni-nesil/urun/modern-kolye',
      images: ['/gorseller/product3.avif', '/gorseller/product4.avif'],
      brand: 'Gözümün Nuru',
      name: 'Modern Tasarım Kolye',
      price: 45000,
      actualPrice: 45000,
      actualPriceText: '45.000,00 TL',
    },
  ],

  // Özel Tasarım kategorisi
  'ozel-tasarim': [
    {
      id: 301,
      productUrl: '/ozel-tasarim/urun/nisan-yuzugu',
      images: ['/gorseller/product4.avif', '/gorseller/product5.avif'],
      brand: 'Gözümün Nuru',
      name: 'Özel Tasarım Nişan Yüzüğü',
      price: 95000,
      actualPrice: 95000,
      actualPriceText: '95.000,00 TL',
    },
    {
      id: 302,
      productUrl: '/ozel-tasarim/urun/alyans-set',
      images: ['/gorseller/product5.avif', '/gorseller/product6.avif'],
      brand: 'Gözümün Nuru',
      name: 'Alyans Seti',
      price: 68000,
      actualPrice: 68000,
      actualPriceText: '68.000,00 TL',
    },
  ],
  'ozel-tasarim/bize-tasarlatin': [
    {
      id: 311,
      productUrl: '/ozel-tasarim/bize-tasarlatin/urun/custom-design',
      images: ['/gorseller/product6.avif', '/gorseller/product1.avif'],
      brand: 'Gözümün Nuru',
      name: 'Custom Tasarım Yüzük',
      price: 150000,
      actualPrice: 150000,
      actualPriceText: '150.000,00 TL',
    },
  ],
  'ozel-tasarim/kendin-yarat': [
    {
      id: 321,
      productUrl: '/ozel-tasarim/kendin-yarat/urun/diy-kolye',
      images: ['/gorseller/product1.avif', '/gorseller/product2.avif'],
      brand: 'Gözümün Nuru',
      name: 'Kendin Yarat Kolye',
      price: 55000,
      actualPrice: 55000,
      actualPriceText: '55.000,00 TL',
    },
  ],
  'ozel-tasarim/nisan-evlilik': [
    {
      id: 331,
      productUrl: '/ozel-tasarim/nisan-evlilik/urun/evlilik-seti',
      images: ['/gorseller/product2.avif', '/gorseller/product3.avif'],
      brand: 'Gözümün Nuru',
      name: 'Evlilik Yüzük Seti',
      price: 125000,
      actualPrice: 125000,
      actualPriceText: '125.000,00 TL',
    },
  ],
  'ozel-tasarim/kisiye-ozel-hediye': [
    {
      id: 341,
      productUrl: '/ozel-tasarim/kisiye-ozel-hediye/urun/isim-kolye',
      images: ['/gorseller/product3.avif', '/gorseller/product4.avif'],
      brand: 'Gözümün Nuru',
      name: 'İsim Yazılı Kolye',
      price: 28000,
      actualPrice: 28000,
      actualPriceText: '28.000,00 TL',
    },
  ],

  // Hediye kategorisi
  'hediye': [
    {
      id: 401,
      productUrl: '/hediye/urun/hediye-seti',
      images: ['/gorseller/product4.avif', '/gorseller/product5.avif'],
      brand: 'Gözümün Nuru',
      name: 'Özel Hediye Seti',
      price: 38000,
      actualPrice: 38000,
      actualPriceText: '38.000,00 TL',
    },
    {
      id: 402,
      productUrl: '/hediye/urun/mini-kolye',
      images: ['/gorseller/product5.avif', '/gorseller/product6.avif'],
      brand: 'Gözümün Nuru',
      name: 'Mini Pırlanta Kolye',
      price: 18000,
      actualPrice: 18000,
      actualPriceText: '18.000,00 TL',
    },
    {
      id: 403,
      productUrl: '/hediye/urun/charm-bileklik',
      images: ['/gorseller/product6.avif', '/gorseller/product1.avif'],
      brand: 'Gözümün Nuru',
      name: 'Charm Bileklik',
      price: 22000,
      originalPrice: 28000,
      orginalPriceText: '28.000,00 TL',
      actualPrice: 22000,
      actualPriceText: '22.000,00 TL',
      hasDiscount: true,
      discountRateText: '%21',
    },
  ],
  'hediye/ozel-gunler': [
    {
      id: 411,
      productUrl: '/hediye/ozel-gunler/urun/yildonumu-seti',
      images: ['/gorseller/product1.avif', '/gorseller/product2.avif'],
      brand: 'Gözümün Nuru',
      name: 'Yıldönümü Hediye Seti',
      price: 52000,
      actualPrice: 52000,
      actualPriceText: '52.000,00 TL',
    },
  ],
  'hediye/dogum-gunu': [
    {
      id: 421,
      productUrl: '/hediye/dogum-gunu/urun/dogum-tasi-yuzuk',
      images: ['/gorseller/product2.avif', '/gorseller/product3.avif'],
      brand: 'Gözümün Nuru',
      name: 'Doğum Taşı Yüzük',
      price: 32000,
      actualPrice: 32000,
      actualPriceText: '32.000,00 TL',
    },
  ],
  'hediye/anneler-gunu': [
    {
      id: 431,
      productUrl: '/hediye/anneler-gunu/urun/anne-kolye',
      images: ['/gorseller/product3.avif', '/gorseller/product4.avif'],
      brand: 'Gözümün Nuru',
      name: 'Anne Yazılı Kolye',
      price: 25000,
      actualPrice: 25000,
      actualPriceText: '25.000,00 TL',
    },
  ],
  'hediye/kadinlar-gunu': [
    {
      id: 441,
      productUrl: '/hediye/kadinlar-gunu/urun/kadin-seti',
      images: ['/gorseller/product4.avif', '/gorseller/product5.avif'],
      brand: 'Gözümün Nuru',
      name: 'Kadınlar Günü Özel Set',
      price: 45000,
      actualPrice: 45000,
      actualPriceText: '45.000,00 TL',
    },
  ],
  'hediye/yeni-dogan': [
    {
      id: 451,
      productUrl: '/hediye/yeni-dogan/urun/bebek-bileklik',
      images: ['/gorseller/product5.avif', '/gorseller/product6.avif'],
      brand: 'Gözümün Nuru',
      name: 'Bebek Altın Bileklik',
      price: 12000,
      actualPrice: 12000,
      actualPriceText: '12.000,00 TL',
    },
  ],
  'hediye/erkek-hediye': [
    {
      id: 461,
      productUrl: '/hediye/erkek-hediye/urun/erkek-yuzuk',
      images: ['/gorseller/product6.avif', '/gorseller/product1.avif'],
      brand: 'Gözümün Nuru',
      name: 'Erkek Altın Yüzük',
      price: 35000,
      actualPrice: 35000,
      actualPriceText: '35.000,00 TL',
    },
  ],
  'hediye/mini-butceli': [
    {
      id: 471,
      productUrl: '/hediye/mini-butceli/urun/gumus-kolye',
      images: ['/gorseller/product1.avif', '/gorseller/product2.avif'],
      brand: 'Gözümün Nuru',
      name: 'Gümüş Kolye',
      price: 5000,
      actualPrice: 5000,
      actualPriceText: '5.000,00 TL',
    },
  ],
  'hediye/aksesuar': [
    {
      id: 481,
      productUrl: '/hediye/aksesuar/urun/mucevher-kutusu',
      images: ['/gorseller/product2.avif', '/gorseller/product3.avif'],
      brand: 'Gözümün Nuru',
      name: 'Lüks Mücevher Kutusu',
      price: 3500,
      actualPrice: 3500,
      actualPriceText: '3.500,00 TL',
    },
  ],

  // Yatırım kategorisi
  'yatirim': [
    {
      id: 501,
      productUrl: '/yatirim/urun/yatirimlik-altin',
      images: ['/gorseller/product3.avif', '/gorseller/product4.avif'],
      brand: 'Gözümün Nuru',
      name: 'Yatırımlık Altın',
      price: 150000,
      actualPrice: 150000,
      actualPriceText: '150.000,00 TL',
    },
    {
      id: 502,
      productUrl: '/yatirim/urun/yatirimlik-pirlanta',
      images: ['/gorseller/product4.avif', '/gorseller/product5.avif'],
      brand: 'Gözümün Nuru',
      name: 'Yatırımlık Pırlanta',
      price: 250000,
      actualPrice: 250000,
      actualPriceText: '250.000,00 TL',
    },
    {
      id: 503,
      productUrl: '/yatirim/urun/koleksiyon-pirlanta',
      images: ['/gorseller/product5.avif', '/gorseller/product6.avif'],
      brand: 'Gözümün Nuru',
      name: 'Koleksiyon Pırlanta',
      price: 500000,
      actualPrice: 500000,
      actualPriceText: '500.000,00 TL',
    },
  ],
};

// Kategori bilgisini getir
export function getCategoryInfo(categoryId: string): CategoryInfo | undefined {
  return categories.find(cat => cat.id === categoryId);
}

// Alt kategori bilgisini getir
export function getSubcategoryInfo(categoryId: string, subcategoryId: string): SubcategoryInfo | undefined {
  const category = getCategoryInfo(categoryId);
  return category?.subcategories?.find(sub => sub.id === subcategoryId);
}

// Kategori ürünlerini getir
export function getCategoryProducts(categoryId: string): Product[] {
  return sampleProducts[categoryId] || [];
}

// Alt kategori ürünlerini getir
export function getSubcategoryProducts(categoryId: string, subcategoryId: string): Product[] {
  const key = `${categoryId}/${subcategoryId}`;
  return sampleProducts[key] || [];
}

// Breadcrumb oluştur
export function getBreadcrumbs(categoryId: string, subcategoryId?: string): { name: string; href?: string }[] {
  const category = getCategoryInfo(categoryId);
  if (!category) return [];

  const breadcrumbs: { name: string; href?: string }[] = [
    { name: 'Ana Sayfa', href: '/' },
    { name: category.name, href: `/${categoryId}` },
  ];

  if (subcategoryId) {
    const subcategory = getSubcategoryInfo(categoryId, subcategoryId);
    if (subcategory) {
      breadcrumbs.push({ name: subcategory.name });
    }
  }

  return breadcrumbs;
}

// Tüm alt kategorileri al (static params için)
export function getAllSubcategories(): { category: string; subcategory: string }[] {
  const result: { category: string; subcategory: string }[] = [];
  
  for (const category of categories) {
    if (category.subcategories) {
      for (const sub of category.subcategories) {
        result.push({ category: category.id, subcategory: sub.id });
      }
    }
  }
  
  return result;
}
