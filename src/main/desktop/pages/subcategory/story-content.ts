export type SubcategoryStoryContent = {
  eyebrow: string;
  title: string;
  description: string;
  heroImage: string;
  heroNote?: string;
  bentoImages?: {
    image: string;
    alt?: string;
  }[];
  bentoContent?: {
    title: string;
    description: string;
  };
  sections: {
    title: string;
    description: string;
    image: string;
    kicker?: string;
    tags?: string[];
  }[];
  highlights: {
    title: string;
    description: string;
  }[];
  highlightTitle?: string;
  cta?: {
    label?: string;
    title: string;
    description: string;
    note?: string;
  };
};

type StoryMap = Record<string, SubcategoryStoryContent>;

export const subcategoryStories: StoryMap = {
  "mucevher/klasik-pirlanta": {
    eyebrow: "Klasik pırlanta",
    title: "Zamansız pırlanta yorumları",
    description:
      "Tek taş, beştaş ve tamtur gibi klasik formları ince işçilikle güncelliyoruz. Her model, parmak formuna ve günlük kullanıma uygun konforla tasarlandı.",
    heroImage: "/gorseller/product1.avif",
    heroNote: "GIA/HRD sertifikalı taşlar",
    bentoImages: [
      { image: "/gorseller/product1.avif", alt: "Klasik pırlanta yüzük" },
      { image: "/gorseller/product2.avif", alt: "Pırlanta detay" },
      { image: "/gorseller/product3.avif", alt: "Pırlanta tasarım" },
      { image: "/gorseller/product4.avif", alt: "Pırlanta koleksiyon" },
      { image: "/gorseller/product5.avif", alt: "Pırlanta koleksiyon detay" },
    ],
    bentoContent: {
      title: "Klasik pırlanta koleksiyonumuz",
      description:
        "Her biri özenle seçilmiş, sertifikalı pırlanta taşlarla üretilmiş klasik yüzüklerimiz, zamansız güzellik ve mükemmel işçilik sunar. Tek taştan beştaşlıya, her zevke ve bütçeye uygun modeller.",
    },
    sections: [
      {
        kicker: "Form ve ışık",
        title: "Kesim ve parlaklık dengesi",
        description:
          "Parmak profilinize göre taş yüksekliği ve köprü formunu ayarlıyor, ışığı maksimum yansıtacak açıları belirliyoruz.",
        image: "/gorseller/product2.avif",
        tags: ["Ideal cut", "Rahat köprü", "Günlük kullanım"],
      },
      {
        kicker: "Dayanıklılık",
        title: "Güçlü tırnak yapısı",
        description:
          "Tırnak sayısı ve kalınlığı, taşın boyutuna göre dengeleniyor. Tırnak içi cilası çizilme riskini azaltıyor.",
        image: "/gorseller/product3.avif",
        tags: ["Sağlam tırnak", "El cilası", "Ayar garantisi"],
      },
      {
        kicker: "Kişiselleştirme",
        title: "Metal ve taş seçimi",
        description:
          "Beyaz, pembe veya sarı altın seçenekleri; berraklık ve renk tercihlerinize göre taş eşleştirme yapıyoruz.",
        image: "/gorseller/product4.avif",
        tags: ["Renk seçimi", "Ölçü uyumu", "Parlatma dahil"],
      },
    ],
    highlights: [
      { title: "Sertifika doğrulama", description: "Her taş için sertifika doğrulama ve seri numarası kaydı." },
      { title: "Ömür boyu bakım", description: "Parlatma ve tırnak kontrolü yıllık ücretsiz." },
      { title: "Doğru ölçü", description: "Parmak formuna göre köprü yüksekliği ve ölçü ayarı." },
    ],
    highlightTitle: "Klasik pırlantada güvence",
    cta: {
      label: "Randevu",
      title: "Tek taş seçiminizi birlikte yapalım",
      description: "Taş karşılaştırması, form denemesi ve bütçe planı için randevu alın.",
      note: "Atölyede veya çevrim içi danışmanlık",
    },
  },
  "mucevher/ozel-uretim-pirlanta": {
    eyebrow: "Özel üretim pırlanta",
    title: "Tamamen size özel pırlanta tasarım",
    description:
      "Kesim, berraklık ve karat dengesini ihtiyaçlarınıza göre kuruyor; taş yerleşimi ve formları sıfırdan tasarlıyoruz.",
    heroImage: "/gorseller/product5.avif",
    heroNote: "Modelleme + hızlı prova",
    bentoImages: [
      { image: "/gorseller/product5.avif", alt: "Özel üretim pırlanta" },
      { image: "/gorseller/product6.avif", alt: "Pırlanta tasarım" },
      { image: "/slider1.jpg", alt: "3D modelleme" },
      { image: "/slider2.jpg", alt: "Atölye işçiliği" },
      { image: "/gorseller/product1.avif", alt: "Özel tasarım detay" },
    ],
    bentoContent: {
      title: "Özel üretim pırlanta koleksiyonumuz",
      description:
        "Tamamen size özel tasarlanan pırlanta yüzükler, kişisel hikayenize ve stilinize uygun olarak özenle üretilir. 3D modellemeden el işçiliğine kadar tüm süreç şeffaf ve kişiye özeldir.",
    },
    sections: [
      {
        kicker: "Brifing",
        title: "Kişisel hikaye & stil",
        description:
          "Stil ve kullanım alışkanlıklarınıza göre taş formu, kademeli veya düz bant seçeneklerini öneriyoruz.",
        image: "/gorseller/product6.avif",
        tags: ["Stil analizi", "Form önerisi", "Konfor odaklı"],
      },
      {
        kicker: "Modelleme",
        title: "3D prova & ince ayar",
        description:
          "Gerçek boyutlu prova ile ağırlık ve yükseklik ayarı yapıyor, ışık kırılımını optimum hale getiriyoruz.",
        image: "/slider1.jpg",
        tags: ["3D baskı", "Ağırlık dengesi", "Yükseklik ayarı"],
      },
      {
        kicker: "Üretim",
        title: "Atölyede el işçiliği",
        description:
          "Mıhlama ve polisaj süreçleri usta ekibimiz tarafından yapılıyor; teslimde sertifika ve bakım rehberi veriyoruz.",
        image: "/slider2.jpg",
        tags: ["Usta mıhlama", "El cilası", "Sertifika"],
      },
    ],
    highlights: [
      { title: "Tam şeffaflık", description: "Taş seçiminden teslimata tüm aşamalar görselli raporlanır." },
      { title: "Esnek bütçe", description: "Taş ve maden kombinasyonları bütçenize göre planlanır." },
      { title: "Hızlı teslim", description: "Onay sonrası net termin ile ilerlenir." },
    ],
    highlightTitle: "Özel üretim süreci",
    cta: {
      title: "Pırlanta tasarım randevusu",
      description: "Taş seçimi, form denemesi ve teslim takvimini birlikte planlayalım.",
      note: "48 saat içinde ilk taslak",
    },
  },
  "mucevher/klasik-altin": {
    eyebrow: "Klasik altın",
    title: "Günlük kullanıma uygun altın formlar",
    description:
      "Hafif, ergonomik ve her kombinle uyumlu altın parçalar. Mat-parlak denge ve çizilme direncini ön planda tutuyoruz.",
    heroImage: "/gorseller/product2.avif",
    bentoImages: [
      { image: "/gorseller/product2.avif", alt: "Klasik altın yüzük" },
      { image: "/gorseller/product5.avif", alt: "Altın bilezik" },
      { image: "/gorseller/product6.avif", alt: "Altın tasarım" },
      { image: "/gorseller/product4.avif", alt: "Altın koleksiyon" },
      { image: "/gorseller/product3.avif", alt: "Altın detay" },
    ],
    bentoContent: {
      title: "Klasik altın koleksiyonumuz",
      description:
        "Günlük kullanıma uygun, hafif ve ergonomik altın parçalarımız. Her kombinle uyumlu, mat-parlak dengeye sahip ve çizilme direnci yüksek modeller.",
    },
    sections: [
      {
        kicker: "Konfor",
        title: "Ağırlık ve denge",
        description: "Bileklik ve zincirlerde günlük hareketi engellemeyen denge noktaları kurguluyoruz.",
        image: "/gorseller/product5.avif",
        tags: ["Hafif yapı", "Günlük konfor", "Denge testi"],
      },
      {
        kicker: "Yüzey",
        title: "Mat / parlak kontrast",
        description:
          "Çizilme görünümünü azaltmak için mat ve parlak yüzeyleri birlikte kullanıyor, uzun süreli form koruması sağlıyoruz.",
        image: "/gorseller/product6.avif",
        tags: ["Çizilme direnci", "El cilası", "Dayanıklı yapı"],
      },
      {
        kicker: "Bakım",
        title: "Kolay yenileme",
        description: "Parlatma ve ufak form düzeltmeleri için hızlı bakım programı sunuyoruz.",
        image: "/gorseller/product4.avif",
        tags: ["Parlatma dahil", "Ayar garantisi", "Hızlı servis"],
      },
    ],
    highlights: [
      { title: "24 ayar kaplama", description: "Rengi korumak için güçlendirilmiş kaplama uygulanır." },
      { title: "Ayar güvencesi", description: "Belirtilen ayar ve ağırlık belgesiyle teslim." },
      { title: "Bakım desteği", description: "Yılda bir parlatma ve kontrol ücretsiz." },
    ],
    highlightTitle: "Altın seçiminin ipuçları",
    cta: {
      title: "Altın rehberi için randevu alın",
      description: "Günlük kullanımınıza uygun kalınlık ve formu birlikte seçelim.",
      note: "Atölye veya çevrim içi görüşme",
    },
  },
  "mucevher/ozgun-tasarim": {
    eyebrow: "Özgün tasarım",
    title: "Karakteri öne çıkaran özgün formlar",
    description:
      "Mimari ve heykelsi hatlardan ilham alan, limitli sayıda üretilen özgün tasarımlar. Yüzey oyunları ve asimetrik formlar ile özgünlük katıyoruz.",
    heroImage: "/gorseller/adapt_media_ttm25_plp_1.avif",
    bentoImages: [
      { image: "/gorseller/adapt_media_ttm25_plp_1.avif", alt: "Özgün tasarım" },
      { image: "/gorseller/adapt_media_ttm25_plp_5.avif", alt: "Özgün form" },
      { image: "/gorseller/adapt_media_ttm25_brooch.avif", alt: "Özgün detay" },
      { image: "/gorseller/product1.avif", alt: "Özgün koleksiyon" },
      { image: "/gorseller/product2.avif", alt: "Özgün tasarım detay" },
    ],
    bentoContent: {
      title: "Özgün tasarım koleksiyonumuz",
      description:
        "Mimari ve heykelsi hatlardan ilham alan, limitli sayıda üretilen özgün tasarımlarımız. Yüzey oyunları ve asimetrik formlarla karakterinizi öne çıkarır.",
    },
    sections: [
      {
        kicker: "Form dili",
        title: "Organik ve geometrik dengesi",
        description:
          "Asimetrik formları parmak ve bilek ergonomisine göre dengeliyor, uzun süreli kullanım için iç kavisler oluşturuyoruz.",
        image: "/gorseller/adapt_media_ttm25_plp_5.avif",
        tags: ["Asimetrik denge", "Ergonomi", "Hafif yapı"],
      },
      {
        kicker: "Yüzey",
        title: "Mat ve parlak dokular",
        description:
          "Işığı farklı açılarda kıran yüzeylerle hacim algısını güçlendiriyor, çizilme görünümünü azaltıyoruz.",
        image: "/gorseller/adapt_media_ttm25_brooch.avif",
        tags: ["Doku oyunu", "Hacim vurgusu", "Çizilme direnci"],
      },
      {
        kicker: "Limitli üretim",
        title: "Numaralı ve sınırlı",
        description: "Her parça numaralı üretilir; yenileme ve bakım desteği ile uzun ömürlü kalır.",
        image: "/gorseller/product3.avif",
        tags: ["Sınırlı adet", "Numaralı sertifika", "Bakım desteği"],
      },
    ],
    highlights: [
      { title: "Numaralı sertifika", description: "Her parça için üretim numarası ve kartı ile teslim." },
      { title: "Konfor testi", description: "Ağırlık ve denge testleri sonrası finalize edilir." },
      { title: "Bakım programı", description: "Parlatma ve form düzeltme servisi dahildir." },
    ],
    highlightTitle: "Özgünlük yaklaşımı",
    cta: {
      title: "Özgün parçaları deneyin",
      description: "Atölyede formları deneyip size en uygun hacmi birlikte bulalım.",
      note: "Randevulu deneyim",
    },
  },
  "mucevher/preloved": {
    eyebrow: "Preloved",
    title: "Seçili preloved mücevherler",
    description:
      "Özenle seçilmiş preloved parçaları restore edip yeniden hayat veriyoruz. Taş, sertifika ve ayar kontrolleri tamamlandı.",
    heroImage: "/gorseller/product4.avif",
    bentoImages: [
      { image: "/gorseller/product4.avif", alt: "Preloved mücevher" },
      { image: "/gorseller/product3.avif", alt: "Vintage parça" },
      { image: "/gorseller/product2.avif", alt: "Klasik preloved" },
      { image: "/gorseller/product5.avif", alt: "Özel preloved" },
      { image: "/gorseller/product6.avif", alt: "Preloved detay" },
    ],
    bentoContent: {
      title: "Preloved mücevher koleksiyonumuz",
      description:
        "Özenle seçilmiş, restore edilmiş ve sertifikalı preloved mücevherlerimiz. Zamansız parçalar, uygun fiyatlarla sizinle buluşuyor.",
    },
    sections: [
      {
        kicker: "Kontrol",
        title: "Sertifika ve taş sağlığı",
        description:
          "Taşın berraklık, renk ve mıhlama sağlamlığı kontrol edilir; eksik sertifikalar doğrulanır veya güncellenir.",
        image: "/gorseller/product5.avif",
        tags: ["Taş kontrolü", "Sertifika doğrulama", "Mıhlama testi"],
      },
      {
        kicker: "Restorasyon",
        title: "Parlatma ve yüzey yenileme",
        description:
          "Çizik giderme, yüzey yenileme ve form düzeltme işlemleri sonrası hijyenik temizlik uygulanır.",
        image: "/gorseller/product6.avif",
        tags: ["Yüzey yenileme", "Hijyenik temizlik", "Form düzeltme"],
      },
      {
        kicker: "Garanti",
        title: "Ayar ve bakım güvencesi",
        description: "Ayar ve taş garantisi sunuyor, bakım planını teslimde paylaşıyoruz.",
        image: "/gorseller/product1.avif",
        tags: ["Ayar garantisi", "Bakım planı", "Şeffaf geçmiş"],
      },
    ],
    highlights: [
      { title: "Şeffaf geçmiş", description: "Önceki durum ve restorasyon adımları belgelenir." },
      { title: "Hijyen süreci", description: "Ultrasonik temizlik ve parlatma sonrası teslim." },
      { title: "Bakım rehberi", description: "Kullanım ve saklama önerileri sunulur." },
    ],
    highlightTitle: "Preloved güvence",
    cta: {
      title: "Preloved koleksiyonu görün",
      description: "Özenle yenilenen parçaları randevulu olarak inceleyin.",
      note: "Sınırlı adet stok",
    },
  },

  "koleksiyon/klasikler": {
    eyebrow: "Klasikler",
    title: "Klasikler koleksiyonunun imzası",
    description:
      "Markanın çekirdek tasarımlarının yeniden yorumları. Zamansız hatlar, ince işçilik ve dengeli hacimlerle tasarlandı.",
    heroImage: "/gorseller/queenkoleksiyon.jpg",
    sections: [
      {
        kicker: "Form",
        title: "Dengeli hacim",
        description: "Günlük kullanım için hafifletilmiş, ikonik formların modern yorumu.",
        image: "/gorseller/cherrykoleksiyon.jpg",
        tags: ["Hafif yapı", "İkonik hatlar", "Günlük konfor"],
      },
      {
        kicker: "Taş yerleşimi",
        title: "Işık ve parlaklık",
        description:
          "Küçük taş kümeleri ve mikro mıhlama ile ışığı dağıtarak canlı bir parıltı elde ediyoruz.",
        image: "/gorseller/laranjkoleksiyonu.jpg",
        tags: ["Mikro mıhlama", "Işık dağılımı", "Parıltı"],
      },
      {
        kicker: "Dayanıklılık",
        title: "Uzun ömürlü kullanım",
        description: "Günlük takıp çıkarma için sağlam köprü ve tırnak yapısı.",
        image: "/gorseller/weddingkoleksiyonu.jpg",
        tags: ["Sağlam köprü", "Ayar güvencesi", "Bakım programı"],
      },
    ],
    highlights: [
      { title: "Limitli stok", description: "Sezonluk küçük partilerle üretilir." },
      { title: "Konfor testi", description: "Her model ağırlık/denge testinden geçer." },
      { title: "Bakım desteği", description: "Parlatma ve kontrol hizmeti dahildir." },
    ],
    highlightTitle: "Klasikler yaklaşımı",
    cta: {
      title: "Klasikler için randevu alın",
      description: "En çok tercih edilen formları deneyip size uygun olanı seçelim.",
      note: "Yerinde veya online deneyim",
    },
  },
  "koleksiyon/atolye": {
    eyebrow: "Atölye serisi",
    title: "El işçiliği ve deneysel detaylar",
    description:
      "Atölyeden çıkan limitli sayıda parçalar; elde şekillendirilmiş formlar ve dokularla karakter kazanıyor.",
    heroImage: "/gorseller/storksklasik1.jpg",
    sections: [
      {
        kicker: "El formu",
        title: "Elle şekillenen hatlar",
        description:
          "Kalem ve törpüyle elde verilen formlar her parçada küçük farklılıklarla özgün kalır.",
        image: "/gorseller/product3.avif",
        tags: ["El yapımı doku", "Özgün form", "Limitli adet"],
      },
      {
        kicker: "Doku",
        title: "Fırça ve mat dokular",
        description:
          "Fırça izleri ve mat-parlak geçişler ışığı farklı açılarda kırarak sıcak bir görünüm sağlar.",
        image: "/gorseller/product5.avif",
        tags: ["Mat-parlak geçiş", "El cilası", "Sıcak ton"],
      },
      {
        kicker: "Konfor",
        title: "Yumuşatılmış iç yüzey",
        description: "Günlük kullanım için iç kavisler yumuşatılır, takıp çıkarma kolaylaşır.",
        image: "/gorseller/product6.avif",
        tags: ["Yumuşak iç yüzey", "Konfor odaklı", "Günlük kullanım"],
      },
    ],
    highlights: [
      { title: "Numaralı üretim", description: "Her parça atölye numarası ile gelir." },
      { title: "Hızlı bakım", description: "Doku koruması için özel parlatma uygulanır." },
      { title: "Kişiselleştirme", description: "Metal tonu ve genişlikte küçük varyasyonlar yapılabilir." },
    ],
    highlightTitle: "Atölye imzası",
    cta: {
      title: "Atölye randevusu",
      description: "Deneysel formları yerinde görün, size özel varyasyonları konuşalım.",
      note: "Sınırlı stok, randevu önerilir",
    },
  },
  "koleksiyon/yeni-nesil": {
    eyebrow: "Yeni nesil",
    title: "Modern ve hafif koleksiyon",
    description:
      "Geometrik hacimler, boşluklu formlar ve hafif yapı. Gün boyu konfor için optimize edildi.",
    heroImage: "/gorseller/product6.avif",
    sections: [
      {
        kicker: "Hafiflik",
        title: "Boşluklu yapılar",
        description:
          "Hacmi korurken ağırlığı azaltan boşluklu form dili; kulak ve bilekte konfor sağlar.",
        image: "/gorseller/product1.avif",
        tags: ["Hafif yapı", "Boşluklu form", "Günlük konfor"],
      },
      {
        kicker: "Renk",
        title: "İki tonlu seçenekler",
        description:
          "Beyaz-pembe-sarı altın kombinleri ile kontrastlı modern görünüm elde ediyoruz.",
        image: "/gorseller/product2.avif",
        tags: ["İki tonlu", "Kontrast", "Modern çizgi"],
      },
      {
        kicker: "Dayanıklılık",
        title: "Güçlü yüzey",
        description:
          "Çizilme görünümünü azaltmak için mikrosaten dokular ve koruyucu kaplama kullanıyoruz.",
        image: "/gorseller/product3.avif",
        tags: ["Mikrosaten doku", "Koruyucu kaplama", "Uzun ömür"],
      },
    ],
    highlights: [
      { title: "Konfor testi", description: "Uzun süreli kullanım için ağırlık testi." },
      { title: "Kombin esnekliği", description: "Minimal formlar farklı stillere uyum sağlar." },
      { title: "Bakım desteği", description: "Parlatma ve kontrol hizmeti dahildir." },
    ],
    highlightTitle: "Yeni nesil yaklaşımı",
    cta: {
      title: "Modern parçaları deneyin",
      description: "Hafif ve modern formları kombinleyip deneyelim.",
      note: "Randevulu deneyim önerilir",
    },
  },

  "ozel-tasarim/bize-tasarlatin": {
    eyebrow: "Bize tasarlatın",
    title: "Sıfırdan tasarım hizmeti",
    description:
      "Hayal ettiğiniz parçayı stiliniz, bütçeniz ve kullanım amacınıza göre tasarlıyoruz. Şeffaf süreç ve hızlı prototip ile ilerliyoruz.",
    heroImage: "/banner1.jpg",
    sections: [
      {
        kicker: "Brifing",
        title: "İlham ve gereksinimler",
        description: "Stil, kullanım sıklığı ve bütçe doğrultusunda ilk eskizi hazırlıyoruz.",
        image: "/banner2.jpg",
        tags: ["Stil analizi", "Bütçe planı", "Hızlı eskiz"],
      },
      {
        kicker: "Prototip",
        title: "3D baskı prova",
        description: "Gerçek boyutta deneme ile ağırlık ve oturuşu birlikte test ediyoruz.",
        image: "/slider1.jpg",
        tags: ["3D prova", "Ağırlık ayarı", "Konfor testi"],
      },
      {
        kicker: "Üretim",
        title: "Atölyede el işçiliği",
        description: "Mıhlama ve polisajı atölyede tamamlıyor, sertifika ile teslim ediyoruz.",
        image: "/newsection.jpg",
        tags: ["El işçiliği", "Sertifika", "Bakım rehberi"],
      },
    ],
    highlights: [
      { title: "Şeffaf ilerleme", description: "Her adım fotoğraf/video ile paylaşılır." },
      { title: "Esnek bütçe", description: "Taş ve maden kombinasyonları birlikte seçilir." },
      { title: "Hızlı teslim", description: "Onay sonrası net termin verilir." },
    ],
    highlightTitle: "Tasarım süreci",
    cta: {
      title: "Tasarım randevusu alın",
      description: "İlk görüşmede ilham panosu ve fiyatlandırma sunuyoruz.",
      note: "48 saat içinde ilk taslak",
    },
  },
  "ozel-tasarim/kendin-yarat": {
    eyebrow: "Kendin yarat",
    title: "Formu ve taşı siz seçin",
    description:
      "Hazır şablonlar üzerinden form, taş ve metal kombinasyonunu seçip hızla üretime geçiyoruz.",
    heroImage: "/slider3.jpg",
    sections: [
      {
        kicker: "Şablon seçimi",
        title: "Temel formu belirleyin",
        description: "Minimal, klasik veya modern şablonlar arasından seçip detayları özelleştirin.",
        image: "/slider4.jpg",
        tags: ["Hızlı seçim", "Özelleştirilebilir", "Çevrim içi onay"],
      },
      {
        kicker: "Taş & metal",
        title: "Kombinasyonu oluşturun",
        description: "Taş boyutu, rengi ve metal tonu için hazır kombin önerileri sunuyoruz.",
        image: "/product1.jpg",
        tags: ["Taş seçimi", "Metal rengi", "Bütçe kontrolü"],
      },
      {
        kicker: "Hızlı teslim",
        title: "Kısa termin",
        description: "Onay sonrası hızlandırılmış üretim ile kısa sürede teslim ediyoruz.",
        image: "/product2.jpg",
        tags: ["Hızlı üretim", "Takip edilebilir süreç", "Bakım desteği"],
      },
    ],
    highlights: [
      { title: "Çevrim içi onay", description: "Tüm aşamalar online onayla ilerler." },
      { title: "Şeffaf fiyat", description: "Seçtiğiniz kombin göre anlık fiyat görürsünüz." },
      { title: "Bakım planı", description: "Teslimde bakım rehberi eklenir." },
    ],
    highlightTitle: "Kendin yarat süreci",
    cta: {
      title: "Şablonları deneyin",
      description: "Form ve taş kombinlerini hızlıca oluşturup siparişe geçin.",
      note: "Kısa termin seçenekleri",
    },
  },
  "ozel-tasarim/nisan-evlilik": {
    eyebrow: "Nişan & evlilik",
    title: "Nişan ve evlilik setleri",
    description:
      "Alyans, tektaş ve set tasarımlarında uyumlu formlar; uzun ömürlü kullanım için sağlam altyapı.",
    heroImage: "/gorseller/weddingkoleksiyonu.jpg",
    sections: [
      {
        kicker: "Uyum",
        title: "Eşleşen setler",
        description: "Tektaş ve alyansın form uyumunu, yükseklik ve parlaklık dengesiyle kuruyoruz.",
        image: "/product3.jpg",
        tags: ["Eşleşen yükseklik", "Parlaklık uyumu", "Konfor iç yüzey"],
      },
      {
        kicker: "Dayanıklılık",
        title: "Güçlü altyapı",
        description:
          "Günlük kullanıma dayanacak tırnak ve köprü yapısı; parlatma ve ayar desteği dahildir.",
        image: "/product4.jpg",
        tags: ["Sağlam köprü", "Ayar garantisi", "Parlatma"],
      },
      {
        kicker: "Kişiselleştirme",
        title: "Gravür ve renk",
        description: "İnisyal, tarih ve metal rengi seçenekleriyle size özel hale getiriyoruz.",
        image: "/gorseller/campaign5.avif",
        tags: ["Gravür", "Metal tonu", "Taş seçimi"],
      },
    ],
    highlights: [
      { title: "Ayar garantisi", description: "Ölçü ve ayar değişimi desteği." },
      { title: "Bakım programı", description: "Yıllık parlatma ve kontrol." },
      { title: "Şeffaf süreç", description: "Onaylı ilerleme ve termin paylaşımı." },
    ],
    highlightTitle: "Set tasarım yaklaşımı",
    cta: {
      title: "Set danışmanlığı alın",
      description: "Tektaş ve alyans setinizi birlikte planlayalım.",
      note: "Atölye veya online görüşme",
    },
  },
  "ozel-tasarim/kisiye-ozel-hediye": {
    eyebrow: "Kişiye özel hediye",
    title: "Anlam taşıyan hediyeler",
    description:
      "İnisyal, tarih ve sembollerle kişiselleştirilen, hafif ve günlük kullanıma uygun parçalar tasarlıyoruz.",
    heroImage: "/gorseller/product6.avif",
    sections: [
      {
        kicker: "Kişiselleştirme",
        title: "İnisyal ve semboller",
        description: "Gravür, taş rengi ve zincir uzunluğu seçenekleriyle kişiye özel hale getiriyoruz.",
        image: "/gorseller/product1.avif",
        tags: ["Gravür", "Taş rengi", "Zincir uzunluğu"],
      },
      {
        kicker: "Hafif yapı",
        title: "Günlük kullanım",
        description:
          "Günlük takıp çıkarma için hafif ve konforlu form; çizilme görünümünü azaltan yüzeyler.",
        image: "/gorseller/product2.avif",
        tags: ["Hafif", "Konforlu", "Dayanıklı yüzey"],
      },
      {
        kicker: "Paketleme",
        title: "Hediye hazır",
        description: "Premium kutu, kurdele ve kişisel not kartı ile teslim.",
        image: "/gorseller/campaign1.jpg",
        tags: ["Premium kutu", "Not kartı", "Hazır hediye"],
      },
    ],
    highlights: [
      { title: "Hızlı teslim", description: "Kişiselleştirme sonrası kısa termin." },
      { title: "Değişim hakkı", description: "Ölçü ve zincir boyu değişimi desteği." },
      { title: "Paketleme", description: "Kutu ve kart ücretsiz eklenir." },
    ],
    highlightTitle: "Hediye süreci",
    cta: {
      title: "Hediye danışmanlığı",
      description: "Alıcının stiline göre üç alternatif önerelim.",
      note: "WhatsApp ve e-posta desteği",
    },
  },

  "hediye/ozel-gunler": {
    eyebrow: "Özel günler",
    title: "Kutlamalara özel seçimler",
    description:
      "Yıldönümü, mezuniyet, terfi gibi anlar için zarif ve anlamlı parçalar. Konforlu ve hafif tasarımlar önceliğimiz.",
    heroImage: "/gorseller/campaign2.avif",
    sections: [
      {
        kicker: "Zarafet",
        title: "İnce formlar",
        description: "Elbise ve günlük kombinlere uyumlu, hafif ama görünür parıltı.",
        image: "/gorseller/campaign3.webp",
        tags: ["Hafif", "Parıltılı", "Uyumlu form"],
      },
      {
        kicker: "Anlam",
        title: "Sembolik dokunuş",
        description: "Doğum taşı veya anlamlı sembollerle kişiselleştirme.",
        image: "/gorseller/product4.avif",
        tags: ["Doğum taşı", "Sembol", "Kişiselleştirme"],
      },
      {
        kicker: "Paketleme",
        title: "Hazır hediye",
        description: "Premium kutu, kurdele ve not kartı dahil.",
        image: "/gorseller/campaign4.avif",
        tags: ["Premium kutu", "Not kartı", "Hızlı teslim"],
      },
    ],
    highlights: [
      { title: "Hızlı teslim", description: "Özel gün tarihlerine göre planlama." },
      { title: "Değişim hakkı", description: "Ölçü uymazsa hızlı değişim." },
      { title: "Paketleme", description: "Ücretsiz hediye paketi ve kart." },
    ],
    highlightTitle: "Özel gün yaklaşımı",
    cta: {
      title: "Hediye önerisi alın",
      description: "Tarih ve stil bilgisiyle üç alternatif sunalım.",
      note: "Hızlı yanıt",
    },
  },
  "hediye/dogum-gunu": {
    eyebrow: "Doğum günü",
    title: "Doğum günü için parlak öneriler",
    description:
      "Alıcının stiline göre taş rengi ve form önerileriyle pratik seçimler yapmanızı sağlıyoruz.",
    heroImage: "/gorseller/product5.avif",
    sections: [
      {
        kicker: "Stil eşleştirme",
        title: "Renk ve form",
        description: "Minimal, klasik veya modern stiller için hazır kombinler.",
        image: "/gorseller/product6.avif",
        tags: ["Renk seçimi", "Form alternatifi", "Hızlı seçim"],
      },
      {
        kicker: "Kişisel dokunuş",
        title: "Gravür ve paket",
        description: "İsim veya tarih gravürü, kişisel not kartı ve kurdeleli kutu.",
        image: "/gorseller/product1.avif",
        tags: ["Gravür", "Not kartı", "Paketleme"],
      },
      {
        kicker: "Teslim",
        title: "Planlı gönderim",
        description: "Teslim tarihini birlikte planlayıp statü güncellemesi sağlıyoruz.",
        image: "/gorseller/product2.avif",
        tags: ["Planlı teslim", "Takip", "Hızlı destek"],
      },
    ],
    highlights: [
      { title: "Aynı gün opsiyon", description: "Stoklu ürünlerde aynı gün kargo." },
      { title: "Değişim desteği", description: "Ölçü uymadığında değişim hakkı." },
      { title: "Paketleme", description: "Hediye kutusu ve kart ücretsiz." },
    ],
    highlightTitle: "Doğum günü rehberi",
    cta: {
      title: "Hızlı öneri alın",
      description: "Alıcının stilini paylaşın, üç seçenek sunalım.",
      note: "WhatsApp destek",
    },
  },
  "hediye/anneler-gunu": {
    eyebrow: "Anneler Günü",
    title: "Anneler için zarif seçimler",
    description:
      "Günlük kullanıma uygun, hafif ve anlamlı parçalar. Renk ve formda sade ama zarif dokunuşlar.",
    heroImage: "/gorseller/product3.avif",
    sections: [
      {
        kicker: "Konfor",
        title: "Hafif ve yumuşak hatlar",
        description: "Günlük kullanımda rahatsız etmeyen, yuvarlatılmış formlar.",
        image: "/gorseller/product4.avif",
        tags: ["Hafif", "Yuvarlak kenar", "Günlük uyum"],
      },
      {
        kicker: "Anlam",
        title: "Aileyi simgeleyen detaylar",
        description: "Doğum taşı veya inisyal ekleyerek anlamlı hale getiriyoruz.",
        image: "/gorseller/product5.avif",
        tags: ["Doğum taşı", "İnisyal", "Sembolik"],
      },
      {
        kicker: "Paket",
        title: "Hediye hazır",
        description: "Premium kutu ve kişisel mesaj kartı ile teslim.",
        image: "/gorseller/product6.avif",
        tags: ["Premium kutu", "Mesaj kartı", "Hızlı teslim"],
      },
    ],
    highlights: [
      { title: "Değişim hakkı", description: "Ölçü uyumsuzluğunda hızlı değişim." },
      { title: "Bakım desteği", description: "Parlatma ve kontrol hizmeti." },
      { title: "Planlı teslim", description: "Tarihe göre gönderim planı." },
    ],
    highlightTitle: "Anneler Günü yaklaşımı",
    cta: {
      title: "Üç alternatif isteyin",
      description: "Stil bilgisiyle hızlıca seçenek sunalım.",
      note: "Ücretsiz paketleme",
    },
  },
  "hediye/kadinlar-gunu": {
    eyebrow: "Kadınlar Günü",
    title: "Güçlü ve zarif parçalar",
    description:
      "Modern ve güçlü hatlar, ince işçilikle buluşuyor. Günlük kullanıma uygun, hafif ve çarpıcı tasarımlar.",
    heroImage: "/gorseller/product2.avif",
    sections: [
      {
        kicker: "Modern çizgi",
        title: "Geometrik ve net",
        description: "Köşeli ve net hatlar, parlak yüzeylerle dengeleniyor.",
        image: "/gorseller/product3.avif",
        tags: ["Geometrik", "Parlak yüzey", "Modern"],
      },
      {
        kicker: "Hafiflik",
        title: "Gün boyu konfor",
        description: "Boşluklu form dili ile hafiflik korunuyor.",
        image: "/gorseller/product4.avif",
        tags: ["Hafif", "Boşluklu form", "Konfor"],
      },
      {
        kicker: "Vurgu",
        title: "Parlak detaylar",
        description: "Mikro taş veya parlak plaka detaylarıyla vurgulu görünüm.",
        image: "/gorseller/product5.avif",
        tags: ["Mikro taş", "Parlak plaka", "Vurgu"],
      },
    ],
    highlights: [
      { title: "Hızlı teslim", description: "Özel gün öncesi planlı gönderim." },
      { title: "Paketleme", description: "Hediye kutusu ve kart dahil." },
      { title: "Bakım", description: "Parlatma desteği." },
    ],
    highlightTitle: "Kadınlar Günü rehberi",
    cta: {
      title: "Modern seçenekler için danışın",
      description: "Stile göre üç alternatif önerelim.",
      note: "Hızlı destek",
    },
  },
  "hediye/yeni-dogan": {
    eyebrow: "Yeni doğan",
    title: "Bebekler için güvenli seçimler",
    description:
      "Alerji dostu malzemeler, yumuşatılmış kenarlar ve hafif yapılarla bebek bileklikleri.",
    heroImage: "/gorseller/product6.avif",
    sections: [
      {
        kicker: "Güvenlik",
        title: "Yuvarlak kenarlar",
        description: "Tüm köşeler yumuşatılır; bileğe uyumlu kavisler verilir.",
        image: "/gorseller/product1.avif",
        tags: ["Yumuşak kenar", "Konforlu kavis", "Güvenli form"],
      },
      {
        kicker: "Malzeme",
        title: "Hipoalerjenik",
        description: "Nikel içermez; parlaklık el cilasıyla sağlanır.",
        image: "/gorseller/product2.avif",
        tags: ["Nikel içermez", "El cilası", "Güvenli"],
      },
      {
        kicker: "Kişiselleştirme",
        title: "İsim ve tarih",
        description: "İsim gravürü ve tarih ekleyerek anlamlı hale getiriyoruz.",
        image: "/gorseller/product3.avif",
        tags: ["İsim gravürü", "Tarih", "Hediye hazır"],
      },
    ],
    highlights: [
      { title: "Ölçü rehberi", description: "Bilek ölçüsü için rehber sunulur." },
      { title: "Paketleme", description: "Hediye kutusu ve kart ücretsiz." },
      { title: "Değişim", description: "Ölçü uymazsa hızlı değişim." },
    ],
    highlightTitle: "Yeni doğan yaklaşımı",
    cta: {
      title: "Bebek bilekliği seçimi",
      description: "Ölçü ve isim bilgisiyle hızlıca hazırlayalım.",
      note: "Hızlı teslim",
    },
  },
  "hediye/erkek-hediye": {
    eyebrow: "Erkek hediye",
    title: "Erkekler için güçlü dokunuşlar",
    description:
      "Dengeli ağırlık, mat dokular ve net formlar. Günlük kullanıma uygun maskülen çizgiler.",
    heroImage: "/gorseller/product4.avif",
    sections: [
      {
        kicker: "Form",
        title: "Net ve güçlü hatlar",
        description: "Köşeli formlar yumuşatılmış iç yüzeyle konforlu hale getirilir.",
        image: "/gorseller/product5.avif",
        tags: ["Köşeli dış", "Yumuşak iç", "Konfor"],
      },
      {
        kicker: "Doku",
        title: "Mat yüzey",
        description: "Çizilme görünümünü azaltan mat dokular ve fırça izleri.",
        image: "/gorseller/product6.avif",
        tags: ["Mat doku", "Fırça izi", "Dayanıklılık"],
      },
      {
        kicker: "Kişiselleştirme",
        title: "İnisyal ve tarih",
        description: "İnisyal veya tarih gravürüyle kişisel dokunuş.",
        image: "/gorseller/product1.avif",
        tags: ["Gravür", "Ölçü ayarı", "Hediye kutusu"],
      },
    ],
    highlights: [
      { title: "Ölçü desteği", description: "Yüzük/bileklik ölçüsü için rehber." },
      { title: "Paketleme", description: "Maskülen kutu ve kart." },
      { title: "Bakım", description: "Parlatma ve kontrol." },
    ],
    highlightTitle: "Erkek hediye yaklaşımı",
    cta: {
      title: "Üç alternatif önerelim",
      description: "Stil ve ölçü bilgisiyle seçenek sunalım.",
      note: "Hızlı danışmanlık",
    },
  },
  "hediye/mini-butceli": {
    eyebrow: "Mini bütçeli",
    title: "Bütçe dostu şık seçenekler",
    description:
      "Hafif, zarif ve bütçe dostu parçalar. Form ve yüzey oyunlarıyla görünürlük sağlıyoruz.",
    heroImage: "/gorseller/product2.avif",
    sections: [
      {
        kicker: "Hafiflik",
        title: "Konforlu kullanım",
        description: "Gün boyu rahat takılacak hafif formlar.",
        image: "/gorseller/product3.avif",
        tags: ["Hafif", "Konforlu", "Günlük"],
      },
      {
        kicker: "Görünürlük",
        title: "Parlak vurgular",
        description: "Parlak plakalar ve minimal taşlarla ışığı görünür kılıyoruz.",
        image: "/gorseller/product4.avif",
        tags: ["Parlak plaka", "Minimal taş", "Şık"],
      },
      {
        kicker: "Paket",
        title: "Hediye hazır",
        description: "Paketleme ve kart dahil, hızlı teslim.",
        image: "/gorseller/product5.avif",
        tags: ["Paketleme", "Not kartı", "Hızlı teslim"],
      },
    ],
    highlights: [
      { title: "Hızlı kargo", description: "Stoklu ürünlerde aynı gün çıkış." },
      { title: "Değişim", description: "Ölçü uymazsa değişim." },
      { title: "Bakım", description: "Parlatma desteği." },
    ],
    highlightTitle: "Mini bütçe rehberi",
    cta: {
      title: "Hızlı üç öneri",
      description: "Bütçenizi paylaşın, üç kombin sunalım.",
      note: "Hızlı yanıt",
    },
  },
  "hediye/aksesuar": {
    eyebrow: "Aksesuar",
    title: "Mücevher bakım ve saklama aksesuarları",
    description:
      "Mücevher kutusu, bez ve seyahat organizerleri. Parçalarınızı güvenli ve düzenli tutmanız için tasarlandı.",
    heroImage: "/gorseller/file.svg",
    sections: [
      {
        kicker: "Koruma",
        title: "Yumuşak iç astar",
        description: "Çizilmeyi önleyen süet astar ve bölmeli yapı.",
        image: "/gorseller/product6.avif",
        tags: ["Süet astar", "Bölmeli", "Çizilme önleyici"],
      },
      {
        kicker: "Seyahat",
        title: "Kompakt organizer",
        description: "Seyahat için fermuarlı ve yumuşak taşıma çözümleri.",
        image: "/gorseller/product1.avif",
        tags: ["Kompakt", "Fermuarlı", "Hafif"],
      },
      {
        kicker: "Bakım",
        title: "Temizlik bezleri",
        description: "Altın ve pırlanta için uygun, iz bırakmayan bezler.",
        image: "/gorseller/product2.avif",
        tags: ["İz bırakmaz", "Hızlı temizlik", "Bakım kiti"],
      },
    ],
    highlights: [
      { title: "Korumalı yapı", description: "Darbe ve çizilme riskini azaltır." },
      { title: "Düzen", description: "Her parça için ayrılmış bölmeler." },
      { title: "Temizlik", description: "Bakım için uyumlu bez ve talimat." },
    ],
    highlightTitle: "Aksesuar rehberi",
    cta: {
      title: "Saklama önerisi alın",
      description: "Mücevher sayınıza göre doğru organizeri seçelim.",
      note: "Hızlı kargo",
    },
  },
};

export const getSubcategoryStoryKey = (category: string, subcategory: string) =>
  `${category}/${subcategory}`;

