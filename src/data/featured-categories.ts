export type FeaturedCategoryBanner = {
  id: string;
  title: string;
  image: string;
  url: string;
};

export const featuredCategoryBanners: FeaturedCategoryBanner[] = [
  {
    id: "wedding-edit",
    title: "MÜCEVHER",
    image: "/gorseller/kolye.jpg",
    url: "/mucevher",
  },
  {
    id: "jewelry",
    title: "KOLEKSİYON",
    image: "/gorseller/bileklik.jpg",
    url: "/koleksiyon",
  },
  {
    id: "evening",
    title: "ÖZEL TASARIM",
    image: "/gorseller/kupe.jpg",
    url: "/ozel-tasarim",
  },
  {
    id: "resort",
    title: "HEDİYE",
    image: "/gorseller/yuzuk.jpg",
    url: "/hediye",
  },
];

