export type FeaturedCategoryBanner = {
  id: string;
  title: string;
  image: string;
  url: string;
};

export type FeaturedCategoryLink = {
  id: string;
  label: string;
  url: string;
};

export const featuredCategoryBanners: FeaturedCategoryBanner[] = [
  {
    id: "wedding-edit",
    title: "KOLYELER",
    image: "/gorseller/category1.avif",
    url: "/koleksiyon/wedding-edit",
  },
  {
    id: "jewelry",
    title: "BİLEKLİKLER",
    image: "/gorseller/category2.avif",
    url: "/koleksiyon/fine-jewelry",
  },
  {
    id: "evening",
    title: "KÜPELER",
    image: "/gorseller/category3.avif",
    url: "/koleksiyon/gece-elbisesi",
  },
  {
    id: "resort",
    title: "YÜZÜKLER",
    image: "/gorseller/category4.avif",
    url: "/koleksiyon/resort",
  },
];

export const featuredCategoryLinks: FeaturedCategoryLink[] = [
  { id: "link-1", label: "Ayakkabı", url: "/kategori/ayakkabi" },
  { id: "link-2", label: "Çanta", url: "/kategori/canta" },
  { id: "link-3", label: "Takı & Aksesuar", url: "/kategori/aksesuar" },
  { id: "link-4", label: "Elbise", url: "/kategori/elbise" },
  { id: "link-5", label: "Ceket", url: "/kategori/ceket" },
  { id: "link-6", label: "Denim", url: "/kategori/denim" },
  { id: "link-7", label: "Aktif Giyim", url: "/kategori/aktif-giyim" },
  { id: "link-8", label: "Gelinlik", url: "/kategori/gelinlik" },
  { id: "link-9", label: "Swarovski", url: "/kategori/swarovski" },
  { id: "link-10", label: "Valentino", url: "/kategori/valentino" },
  { id: "link-11", label: "Nike", url: "/kategori/nike" },
  { id: "link-12", label: "Adidas", url: "/kategori/adidas" },
  { id: "link-13", label: "Ev & Yaşam", url: "/kategori/ev-yasam" },
  { id: "link-14", label: "Güzellik", url: "/kategori/guzellik" },
  { id: "link-15", label: "Anne & Çocuk", url: "/kategori/anne-cocuk" },
];

