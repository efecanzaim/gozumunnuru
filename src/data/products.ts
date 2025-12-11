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

// Kategori bilgisini getir
export function getCategoryInfo(categoryId: string): CategoryInfo | undefined {
  return categories.find(cat => cat.id === categoryId);
}

// Alt kategori bilgisini getir
export function getSubcategoryInfo(categoryId: string, subcategoryId: string): SubcategoryInfo | undefined {
  const category = getCategoryInfo(categoryId);
  return category?.subcategories?.find(sub => sub.id === subcategoryId);
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
