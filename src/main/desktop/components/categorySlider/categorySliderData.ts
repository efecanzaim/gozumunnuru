export type CategorySliderItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
  slot?: string;
};

export type CategorySliderTab = {
  id: string;
  label: string;
  items: CategorySliderItem[];
};

export const categorySliderData: CategorySliderTab[] = [
  {
    id: "new-arrivals",
    label: "YENİ GELENLER",
    items: [
      {
        id: "women-1",
        title: "İpek Midi Elbise",
        description: "Günlük şıklık için ipeksi dokunuş.",
        image: "/banner1.jpg",
        url: "/kadin/ipek-midi-elbise",
        slot: "tab_slider_1",
      },
      {
        id: "women-2",
        title: "Altın Halka Küpe",
        description: "Modern ve minimalist stil.",
        image: "/banner2.jpg",
        url: "/kadin/altin-halka-kupe",
        slot: "tab_slider_2",
      },
      {
        id: "women-3",
        title: "Zincir Bileklik",
        description: "Katmanlı stillerin favorisi.",
        image: "/banner3.jpg",
        url: "/kadin/zincir-bileklik",
        slot: "tab_slider_3",
      },
      {
        id: "women-4",
        title: "Taş İşlemeli Çanta",
        description: "Geceye ışıltı katan dokunuş.",
        image: "/banner4.jpg",
        url: "/kadin/tas-islemeli-canta",
        slot: "tab_slider_4",
      },
      {
        id: "women-5",
        title: "Yüksek Topuk Ayakkabı",
        description: "İkonik silüet.",
        image: "/banner5.jpg",
        url: "/kadin/yuksek-topuk",
        slot: "tab_slider_5",
      },
      {
        id: "women-6",
        title: "Zümrüt Kolye",
        description: "Enerjisi yüksek zarafet.",
        image: "/banner9.jpg",
        url: "/kadin/zumrut-kolye",
        slot: "tab_slider_6",
      },
    ],
  },
  {
    id: "best-sellers",
    label: "ÇOK SATANLAR",
    items: [
      {
        id: "men-1",
        title: "Deri Pilot Ceket",
        description: "Kış gardırobunun yıldızı.",
        image: "/banner6.jpg",
        url: "/erkek/deri-pilot-ceket",
        slot: "tab_slider_7",
      },
      {
        id: "men-2",
        title: "Minimal Saat",
        description: "Maskülen çizgiler, ince detaylar.",
        image: "/banner7.jpg",
        url: "/erkek/minimal-saat",
        slot: "tab_slider_8",
      },
      {
        id: "men-3",
        title: "Kaşmir Atkı",
        description: "Yumuşak ve sıcak dokular.",
        image: "/banner8.jpg",
        url: "/erkek/kasmir-atki",
        slot: "tab_slider_9",
      },
      {
        id: "men-4",
        title: "Sneaker Koleksiyonu",
        description: "Gün boyu konfor.",
        image: "/banner10.jpg",
        url: "/erkek/sneaker",
        slot: "tab_slider_10",
      },
      {
        id: "men-5",
        title: "Nubuk Loafer",
        description: "Her adımda rafine stil.",
        image: "/banner11.jpg",
        url: "/erkek/loafer",
        slot: "tab_slider_11",
      },
      {
        id: "men-6",
        title: "Günlük Çanta",
        description: "Şehir temposuna uygun.",
        image: "/banner2.jpg",
        url: "/erkek/gunluk-canta",
        slot: "tab_slider_12",
      },
    ],
  },
  {
    id: "beymen-edit",
    label: "BEYMEN EDIT",
    items: [
      {
        id: "kids-1",
        title: "Renkli Sweatshirt",
        description: "Enerjik desenler.",
        image: "/banner3.jpg",
        url: "/kids/renkli-sweatshirt",
        slot: "tab_slider_13",
      },
      {
        id: "kids-2",
        title: "Peluş Mont",
        description: "Sıcacık dokular.",
        image: "/banner4.jpg",
        url: "/kids/pelus-mont",
        slot: "tab_slider_14",
      },
      {
        id: "kids-3",
        title: "Mini Sırt Çantası",
        description: "Okul günlerinin favorisi.",
        image: "/banner5.jpg",
        url: "/kids/sirt-cantasi",
        slot: "tab_slider_15",
      },
      {
        id: "kids-4",
        title: "Sneaker Pack",
        description: "Konforlu adımlar.",
        image: "/banner6.jpg",
        url: "/kids/sneaker",
        slot: "tab_slider_16",
      },
      {
        id: "kids-5",
        title: "Kapitone Yelek",
        description: "Mevsim geçişlerine uygun.",
        image: "/banner7.jpg",
        url: "/kids/kapitone-yelek",
        slot: "tab_slider_17",
      },
      {
        id: "kids-6",
        title: "Denim Set",
        description: "Her güne hazır kombin.",
        image: "/banner8.jpg",
        url: "/kids/denim-set",
        slot: "tab_slider_18",
      },
    ],
  },
  {
    id: "beymen-exclusive",
    label: "BEYMEN EXCLUSIVE",
    items: [
      {
        id: "home-1",
        title: "Mermer Servis Seti",
        description: "Sofralara modern yorum.",
        image: "/banner9.jpg",
        url: "/ev-yasam/mermer-servis",
        slot: "tab_slider_19",
      },
      {
        id: "home-2",
        title: "Aromatik Mum",
        description: "Evinizde uzun süreli koku.",
        image: "/banner10.jpg",
        url: "/ev-yasam/aromatik-mum",
        slot: "tab_slider_20",
      },
      {
        id: "home-3",
        title: "İpek Yastık Kılıfı",
        description: "Güzellik uykusu ritüeli.",
        image: "/banner11.jpg",
        url: "/ev-yasam/ipek-yastik",
        slot: "tab_slider_21",
      },
      {
        id: "home-4",
        title: "Dekoratif Vazolar",
        description: "Sanatsal silüetler.",
        image: "/banner1.jpg",
        url: "/ev-yasam/dekoratif-vazo",
        slot: "tab_slider_22",
      },
      {
        id: "home-5",
        title: "Lux Battaniye",
        description: "Yumuşacık dokular.",
        image: "/banner2.jpg",
        url: "/ev-yasam/lux-battaniye",
        slot: "tab_slider_23",
      },
      {
        id: "home-6",
        title: "Servis Peçete Seti",
        description: "Şık sofralar için.",
        image: "/banner3.jpg",
        url: "/ev-yasam/pecete-seti",
        slot: "tab_slider_24",
      },
    ],
  },
];

