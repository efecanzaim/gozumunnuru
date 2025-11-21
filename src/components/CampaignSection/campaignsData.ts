export type CampaignItem = {
  id: number;
  image: string;
  title: string;
  description: string;
  buttonText: string;
  url: string;
};

export const campaignsData: CampaignItem[] = [
  {
    id: 1,
    image: "/campaign1.jpg",
    title: "Göz Alıcı Takılar",
    description: "Yeni sezon pırlanta tasarımlarında %30’a varan indirim fırsatı.",
    buttonText: "Alışverişe Başla",
    url: "/kampanyalar/goz-alici",
  },
  {
    id: 2,
    image: "/campaign2.jpg",
    title: "Özel Koleksiyon",
    description: "Sadece Gözümün Nuru’nda bulunan koleksiyon ürünlerinde sürpriz fırsatlar.",
    buttonText: "Alışverişe Başla",
    url: "/kampanyalar/ozel-koleksiyon",
  },
  {
    id: 3,
    image: "/campaign3.jpg",
    title: "Hediye Rehberi",
    description: "Sevdiklerin için seçilmiş yüzlerce hediye önerisi ve özel paketleme.",
    buttonText: "Alışverişe Başla",
    url: "/kampanyalar/hediye-rehberi",
  },
  {
    id: 4,
    image: "/campaign4.jpg",
    title: "Yeni Gelenler",
    description: "Atölyemizden çıkan en yeni tasarımları ilk sen keşfet.",
    buttonText: "Alışverişe Başla",
    url: "/kampanyalar/yeni-gelenler",
  },
  {
    id: 5,
    image: "/campaign5.jpg",
    title: "Hafta Sonu Fırsatı",
    description: "Sadece hafta sonuna özel seçili ürünlerde ek %15 indirim.",
    buttonText: "Alışverişe Başla",
    url: "/kampanyalar/hafta-sonu",
  },
  {
    id: 6,
    image: "/campaign6.jpg",
    title: "Düğün Hazırlıkları",
    description: "Gelin ve damat aksesuarlarında tamamlayıcı set önerileri.",
    buttonText: "Alışverişe Başla",
    url: "/kampanyalar/dugun",
  },
];

