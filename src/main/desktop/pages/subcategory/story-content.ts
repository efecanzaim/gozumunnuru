export type SubcategoryStoryContent = {
  eyebrow: string;
  title: string;
  description: string;
  heroImage: string;
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
    eyebrow: "Zamanın Ötesinde",
    title: "Sessiz Bir Yemin Gibi",
    description:
      "Moda değişir, mevsimler döner ama bazı şeyler hep aynı kalır. Klasik pırlanta, sadeliğin en güçlü halidir. Senin ışığını, hiç söz söylemeden anlatır.",
    heroImage: "/gorseller/yuzuk.jpg",
    bentoImages: [
      { image: "/gorseller/product1.avif", alt: "Klasik pırlanta yüzük" },
      { image: "/gorseller/product2.avif", alt: "Pırlanta detay" },
      { image: "/gorseller/product3.avif", alt: "Pırlanta tasarım" },
      { image: "/gorseller/product4.avif", alt: "Pırlanta koleksiyon" },
      { image: "/gorseller/product5.avif", alt: "Pırlanta koleksiyon detay" },
    ],
    bentoContent: {
      title: "Işığın En Saf Hali",
      description:
        "Her bir taş, doğanın milyonlarca yıllık sabrının bir meyvesi. Usta ellerde şekillenen bu koleksiyon, senin hikayene tanıklık etmek için bekliyor.",
    },
    sections: [
      {
        kicker: "İlk Bakış",
        title: "Göz Kamaştıran Sadeliği",
        description:
          "Karmaşadan uzak, sadece sen ve o var. Işığın taşın kalbinde kırılıp sana geri döndüğü o an, zaman durur.",
        image: "/gorseller/product2.avif",
        tags: ["Ideal cut", "Rahat köprü", "Günlük kullanım"],
      },
      {
        kicker: "Güven",
        title: "Sımsıkı Tutan Eller",
        description:
          "Tıpkı sevginin kalbi sarması gibi, tırnaklar da taşı şefkatle ama güçlüce tutar. Yıllara meydan okuyan bir birliktelik.",
        image: "/gorseller/product3.avif",
        tags: ["Sağlam tırnak", "El cilası", "Ayar garantisi"],
      },
      {
        kicker: "Senin Rengin",
        title: "Ruhuna Dokunan Tonlar",
        description:
          "İster beyazın asaleti, ister sarının sıcaklığı... Senin tenine, senin ruhuna en çok yakışanı bulmak, bizim sanatımız.",
        image: "/gorseller/product4.avif",
        tags: ["Renk seçimi", "Ölçü uyumu", "Parlatma dahil"],
      },
    ],
    highlights: [
      { title: "Gerçekliğin Belgesi", description: "Her taşın kimliği, uluslararası sertifikalarla tescillenmiştir." },
      { title: "Sonsuz Bakım", description: "Işıltısı hiç solmasın diye, ömür boyu bakım garantisi." },
      { title: "Tam Sana Göre", description: "Parmağına değil, kalbine de tam uyan ölçü." },
    ],
    highlightTitle: "Güvenin Teminatı",
    cta: {
      label: "Randevu",
      title: "Bu Hikayeyi Birlikte Yazalım",
      description: "Seni yansıtan o tek taşı bulmak için bir kahveye bekleriz.",
      note: "Atölyede veya çevrim içi danışmanlık",
    },
  },
  "mucevher/ozel-uretim-pirlanta": {
    eyebrow: "Sadece Senin İçin",
    title: "Parmak İzlerin Kadar Eşsiz",
    description:
      "Dünyada milyarlarca insan var ama sen teksin. Senin hikayen, senin aşkın, senin hayalin... Hepsi biricik. Bu yüzden, senin pırlantan da sadece sana özel olmalı.",
    heroImage: "/gorseller/kolye.jpg",
    bentoImages: [
      { image: "/gorseller/product5.avif", alt: "Özel üretim pırlanta" },
      { image: "/gorseller/product6.avif", alt: "Pırlanta tasarım" },
      { image: "/slider1.jpg", alt: "3D modelleme" },
      { image: "/slider2.jpg", alt: "Atölye işçiliği" },
      { image: "/gorseller/product1.avif", alt: "Özel tasarım detay" },
    ],
    bentoContent: {
      title: "Ruhunu Yansıtan Tasarım",
      description:
        "Bir kağıda karalanan ilk çizgiden, parmağında ışıldayan o son ana kadar... Her adımda senin izin, senin nefesin var.",
    },
    sections: [
      {
        kicker: "Dinlemek",
        title: "Seni Anlamakla Başlar",
        description:
          "Önce seni dinleriz. Neyi sevdiğini, neyi hayal ettiğini... Çünkü en güzel tasarım, senin kalbinde olandır.",
        image: "/gorseller/product6.avif",
        tags: ["Stil analizi", "Form önerisi", "Konfor odaklı"],
      },
      {
        kicker: "Görmek",
        title: "Hayaline Dokunmak",
        description:
          "Henüz altın dökülmeden, hayalini ellerinde tutarsın. Her detay içine sinene kadar, o sadece bir taslaktır.",
        image: "/slider1.jpg",
        tags: ["3D baskı", "Ağırlık dengesi", "Yükseklik ayarı"],
      },
      {
        kicker: "Yaratmak",
        title: "Ustanın Dokunuşu",
        description:
          "Ve sonra ateş, sabır ve ustalık devreye girer. Senin hayalin, bizim ellerimizde ölümsüz bir esere dönüşür.",
        image: "/slider2.jpg",
        tags: ["Usta mıhlama", "El cilası", "Sertifika"],
      },
    ],
    highlights: [
      { title: "Adım Adım Birlikte", description: "Sürecin her anında yanındayız, her detayı seninle paylaşıyoruz." },
      { title: "Sana Uygun Seçenekler", description: "Hayallerinle bütçeni buluşturan en doğru çözümler." },
      { title: "Beklemeye Değer", description: "En güzel şeyler zaman alır, ama sana söz verdiğimiz vakitte." },
    ],
    highlightTitle: "Yaratım Süreci",
    cta: {
      title: "Hayalini Anlatmaya Başla",
      description: "Bir kahve eşliğinde, hayalindeki o yüzüğü konuşalım.",
      note: "48 saat içinde ilk taslak",
    },
  },
  "mucevher/klasik-altin": {
    eyebrow: "Güneşin Dokunuşu",
    title: "Her An Seninle",
    description:
      "Altın, sadece bir maden değil, teninde taşıdığın bir sıcaklıktır. Günün her saatinde, hayatın her anında sana eşlik eden, varlığıyla seni tamamlayan bir dost.",
    heroImage: "/gorseller/klasikaltin.jpg",
    bentoImages: [
      { image: "/gorseller/product2.avif", alt: "Klasik altın yüzük" },
      { image: "/gorseller/product5.avif", alt: "Altın bilezik" },
      { image: "/gorseller/product6.avif", alt: "Altın tasarım" },
      { image: "/gorseller/product4.avif", alt: "Altın koleksiyon" },
      { image: "/gorseller/product3.avif", alt: "Altın detay" },
    ],
    bentoContent: {
      title: "Günlük Zarafet",
      description:
        "Abartıdan uzak, ama gözden kaçmayacak kadar zarif. Senin doğal ışıltını gölgelemeyen, aksine onu ortaya çıkaran tasarımlar.",
    },
    sections: [
      {
        kicker: "Hafiflik",
        title: "Varlığı Yok Gibi",
        description: "O kadar hafif, o kadar dengeli ki... Bazen parmağında olduğunu unutursun, ama o hep oradadır, seni sarar.",
        image: "/gorseller/product5.avif",
        tags: ["Hafif yapı", "Günlük konfor", "Denge testi"],
      },
      {
        kicker: "Doku",
        title: "Işıkla Oynayan Yüzeyler",
        description:
          "Matın dinginliği, parlağın neşesi... İki farklı dokunun dansı, altının en güzel halini ortaya çıkarır.",
        image: "/gorseller/product6.avif",
        tags: ["Çizilme direnci", "El cilası", "Dayanıklı yapı"],
      },
      {
        kicker: "Yenilenmek",
        title: "Hep İlk Günkü Gibi",
        description: "Zaman geçse de, küçük bir dokunuşla ilk günkü ışıltısına kavuşur. Tıpkı taze bir başlangıç gibi.",
        image: "/gorseller/product4.avif",
        tags: ["Parlatma dahil", "Ayar garantisi", "Hızlı servis"],
      },
    ],
    highlights: [
      { title: "Korunan Işıltı", description: "Rengini ve parlaklığını uzun süre koruması için özel işlem." },
      { title: "Gerçek Değer", description: "Ayar ve gramaj garantisiyle, içiniz rahat olsun." },
      { title: "Dost Eli", description: "Ne zaman istersen, bakım ve kontrol için buradayız." },
    ],
    highlightTitle: "Altın seçiminin ipuçları",
    cta: {
      title: "Sana En Yakışanı Bulalım",
      description: "Günlük stilini tamamlayacak o parçayı seçmek için bekliyoruz.",
      note: "Atölye veya çevrim içi görüşme",
    },
  },
  "mucevher/ozgun-tasarim": {
    eyebrow: "Sanatın İzi",
    title: "Cesur ve Özgür",
    description:
      "Sıradanlığa bir başkaldırı... Her çizgi, her kıvrım bir hikaye anlatır. Bu tasarımlar, kalıplara sığmayan ruhlar için.",
    heroImage: "/gorseller/ozguntasarim.jpg",
    bentoImages: [
      { image: "/gorseller/adapt_media_ttm25_plp_1.avif", alt: "Özgün tasarım" },
      { image: "/gorseller/adapt_media_ttm25_plp_5.avif", alt: "Özgün form" },
      { image: "/gorseller/adapt_media_ttm25_brooch.avif", alt: "Özgün detay" },
      { image: "/gorseller/product1.avif", alt: "Özgün koleksiyon" },
      { image: "/gorseller/product2.avif", alt: "Özgün tasarım detay" },
    ],
    bentoContent: {
      title: "Karakterin Yansıması",
      description:
        "Mimari bir disiplinle, sanatsal bir özgürlüğün buluşması. Sadece bir takı değil, üzerinde taşıdığın bir sanat eseri.",
    },
    sections: [
      {
        kicker: "Denge",
        title: "Kaosun İçindeki Uyum",
        description:
          "Asimetrinin şaşırtıcı dengesi... Gözü yormayan, aksine kendine çeken bir ahenk. Tıpkı hayatın kendisi gibi.",
        image: "/gorseller/adapt_media_ttm25_plp_5.avif",
        tags: ["Asimetrik denge", "Ergonomi", "Hafif yapı"],
      },
      {
        kicker: "Oyun",
        title: "Işıkla Dans",
        description:
          "Mat yüzeylerin gizemi, parlak alanların neşesiyle buluşuyor. Her açıda farklı bir yüzünü gösteren, yaşayan bir form.",
        image: "/gorseller/adapt_media_ttm25_brooch.avif",
        tags: ["Doku oyunu", "Hacim vurgusu", "Çizilme direnci"],
      },
      {
        kicker: "Nadir",
        title: "Sadece Birkaç Kişi İçin",
        description: "Herkesin sahip olamayacağı, sınırlı sayıda üretilen bir ayrıcalık. Senin kadar özel, senin kadar nadir.",
        image: "/gorseller/product3.avif",
        tags: ["Sınırlı adet", "Numaralı sertifika", "Bakım desteği"],
      },
    ],
    highlights: [
      { title: "Sana Özel Numara", description: "Eserin kimliği, üretim numarasıyla tescillenir." },
      { title: "Hissedilen Konfor", description: "Görünüşü iddialı, taşıması hafif." },
      { title: "Sanatın Koruması", description: "Formunu ve dokusunu korumak için özel bakım." },
    ],
    highlightTitle: "Özgünlük yaklaşımı",
    cta: {
      title: "Sanatı Üzerinde Taşı",
      description: "Bu heykelsi formları denemek ve ruhuna dokunanı bulmak için bekliyoruz.",
      note: "Randevulu deneyim",
    },
  },
  "mucevher/preloved": {
    eyebrow: "Yaşanmışlıklar",
    title: "Geçmişin Işıltısı, Geleceğin Mirası",
    description:
      "Her çizik bir anı, her parıltı bir hikaye... Geçmişin ruhunu taşıyan bu parçalar, seninle yeni bir hayata başlıyor.",
    heroImage: "/gorseller/preloved.jpg",
    bentoImages: [
      { image: "/gorseller/product4.avif", alt: "Preloved mücevher" },
      { image: "/gorseller/product3.avif", alt: "Vintage parça" },
      { image: "/gorseller/product2.avif", alt: "Klasik preloved" },
      { image: "/gorseller/product5.avif", alt: "Özel preloved" },
      { image: "/gorseller/product6.avif", alt: "Preloved detay" },
    ],
    bentoContent: {
      title: "Yeniden Doğuş",
      description:
        "Eskinin zarafeti, bugünün titizliğiyle buluştu. Usta ellerde şifalanan, arınan ve parlayan bu hazineler, ikinci baharını yaşamaya hazır.",
    },
    sections: [
      {
        kicker: "Güven",
        title: "Gerçeğin Peşinde",
        description:
          "Taşın kalbine iniyor, geçmişini okuyoruz. Her detay inceleniyor, her belge doğrulanıyor. Şüpheye yer yok, sadece güven var.",
        image: "/gorseller/product5.avif",
        tags: ["Taş kontrolü", "Sertifika doğrulama", "Mıhlama testi"],
      },
      {
        kicker: "Şifa",
        title: "Yaraları Sarmak",
        description:
          "Zamanın bıraktığı izleri nazikçe siliyoruz. Yorgun metaller canlanıyor, solgun taşlar yeniden gülümsüyor.",
        image: "/gorseller/product6.avif",
        tags: ["Yüzey yenileme", "Hijyenik temizlik", "Form düzeltme"],
      },
      {
        kicker: "Söz",
        title: "Yeni Bir Başlangıç",
        description: "Artık o senin. Geçmişin bilgeliğiyle, geleceğin umudunu birleştiriyor. Ve biz, bu yeni yolculukta da yanındayız.",
        image: "/gorseller/product1.avif",
        tags: ["Ayar garantisi", "Bakım planı", "Şeffaf geçmiş"],
      },
    ],
    highlights: [
      { title: "Açık Kitap", description: "Nereden geldiği, ne işlem gördüğü... Her şey şeffaf." },
      { title: "Tertemiz Sayfa", description: "Derinlemesine temizlik ve bakım ile ilk günkü saflığında." },
      { title: "Yol Arkadaşlığı", description: "Nasıl saklamalı, nasıl korumalı? Rehberliğimiz seninle." },
    ],
    highlightTitle: "Preloved güvence",
    cta: {
      title: "Hikayeye Ortak Ol",
      description: "Bu eşsiz parçaların yeni kahramanı olmak için seni bekliyoruz.",
      note: "Sınırlı adet stok",
    },
  },

  "koleksiyon/klasikler": {
    eyebrow: "Kökler",
    title: "Vazgeçilmez Olan",
    description:
      "Bazı şarkılar hiç eskimez, bazı kokular hep huzur verir. Klasikler Koleksiyonu, işte o tanıdık ve güvenli liman. Her zaman şık, her zaman sen.",
    heroImage: "/gorseller/klasikler.jpg",
    sections: [
      {
        kicker: "Denge",
        title: "Hafifleyen Yük",
        description: "Geçmişin ağırlığını attık, sadece güzelliğini bıraktık. İkonik formlar artık daha hafif, daha özgür.",
        image: "/gorseller/cherrykoleksiyon.jpg",
        tags: ["Hafif yapı", "İkonik hatlar", "Günlük konfor"],
      },
      {
        kicker: "Işıltı",
        title: "Yıldız Tozu",
        description:
          "Küçük taşların büyük dansı... Mikro mıhlama ile ışık her yere yayılıyor, parmağında bir yıldız kümesi gibi parlıyor.",
        image: "/gorseller/laranjkoleksiyonu.jpg",
        tags: ["Mikro mıhlama", "Işık dağılımı", "Parıltı"],
      },
      {
        kicker: "Güç",
        title: "Yıllara Meydan Okuyan",
        description: "Zarif görünebilir ama o çok güçlü. Günlük hayatın koşuşturmacasında seni asla yarı yolda bırakmaz.",
        image: "/gorseller/weddingkoleksiyonu.jpg",
        tags: ["Sağlam köprü", "Ayar güvencesi", "Bakım programı"],
      },
    ],
    highlights: [
      { title: "Az ve Öz", description: "Her sezon sadece belirli sayıda üretilen kıymetli parçalar." },
      { title: "Rahatlık", description: "Parmağında olduğunu unutturacak kadar konforlu." },
      { title: "Hep Yanında", description: "Bakım ve kontrol desteğimizle ışıltısı hiç sönmez." },
    ],
    highlightTitle: "Klasikler yaklaşımı",
    cta: {
      title: "Klasiklerden Şaşma",
      description: "Sana en çok yakışacak o zamansız parçayı bulmak için bekliyoruz.",
      note: "Yerinde veya online deneyim",
    },
  },
  "koleksiyon/atolye": {
    eyebrow: "Ustanın Nefesi",
    title: "Kusursuz Kusurlar",
    description:
      "Makinenin soğukluğu değil, elin sıcaklığı... Her çekiç darbesi, her törpü izi bir imza. Mükemmel olmayan, ama tam da bu yüzden mükemmel olan parçalar.",
    heroImage: "/gorseller/atolye.jpg",
    sections: [
      {
        kicker: "İz",
        title: "Parmak Uçlarında Hayat",
        description:
          "Ustanın parmak uçlarından altına geçen o titreşim... Her parça, yaratıcısının ruhundan bir parça taşır. Hiçbiri diğerinin aynısı değil.",
        image: "/gorseller/product3.avif",
        tags: ["El yapımı doku", "Özgün form", "Limitli adet"],
      },
      {
        kicker: "Doku",
        title: "Zamanın Rengi",
        description:
          "Fırça darbeleriyle oluşan o mat doku, ışığı içine çeker ve yumuşatır. Parlaklığın en sıcak, en samimi hali.",
        image: "/gorseller/product5.avif",
        tags: ["Mat-parlak geçiş", "El cilası", "Sıcak ton"],
      },
      {
        kicker: "His",
        title: "Teninle Bütünleşen",
        description: "Sanki hep oradaymış gibi... İç yüzeyindeki o yumuşak kavis, tenine değdiği an sana 'evindesin' hissi verir.",
        image: "/gorseller/product6.avif",
        tags: ["Yumuşak iç yüzey", "Konfor odaklı", "Günlük kullanım"],
      },
    ],
    highlights: [
      { title: "Sana Özel Numara", description: "Atölyeden çıkan her parçanın kendine ait bir kimliği var." },
      { title: "Özenli Bakım", description: "O özel dokuyu korumak için hassas bakım." },
      { title: "Senin Dokunuşun", description: "Metal tonunda veya genişliğinde küçük değişikliklerle tamamen senin olsun." },
    ],
    highlightTitle: "Atölye imzası",
    cta: {
      title: "Atölyenin Kapısını Arala",
      description: "Bu deneysel formları yakından görmek ve hissetmek için bekliyoruz.",
      note: "Sınırlı stok, randevu önerilir",
    },
  },
  "koleksiyon/yeni-nesil": {
    eyebrow: "Yarının Işığı",
    title: "Hafif, Özgür ve Sen",
    description:
      "Şehrin ritmine ayak uyduran, seninle koşan, seninle duran... Modern zamanların ruhunu taşıyan, varlığıyla seni yormayan, sadece tamamlayan tasarımlar.",
    heroImage: "/gorseller/yeninesil.jpg",
    sections: [
      {
        kicker: "Hava",
        title: "Nefes Alan Formlar",
        description:
          "Boşlukların gücü... Hacimli ama tüy kadar hafif. Sanki altından değil, havadan yapılmış gibi. Gün boyu seninle, hiç ağırlık yapmadan.",
        image: "/gorseller/product1.avif",
        tags: ["Hafif yapı", "Boşluklu form", "Günlük konfor"],
      },
      {
        kicker: "Renk",
        title: "Zıtlıkların Uyumu",
        description:
          "Beyazın serinliği, sarının sıcaklığı... Farklı tonların cesurca buluşması. Tıpkı senin içindeki farklı renkler gibi.",
        image: "/gorseller/product2.avif",
        tags: ["İki tonlu", "Kontrast", "Modern çizgi"],
      },
      {
        kicker: "Güç",
        title: "Hayatın İçinde",
        description:
          "Zarif ama kırılgan değil. Şehrin hızına, hayatın akışına dayanıklı. Çizilmelere inat, hep parlayan bir yüzey.",
        image: "/gorseller/product3.avif",
        tags: ["Mikrosaten doku", "Koruyucu kaplama", "Uzun ömür"],
      },
    ],
    highlights: [
      { title: "Test Edilmiş Konfor", description: "Gün boyu rahat etmen için ağırlık testlerinden geçti." },
      { title: "Sınırsız Uyum", description: "Her kıyafetine, her anına uyum sağlayan minimal çizgiler." },
      { title: "Hep Yeni", description: "Bakım desteğimizle ışıltısı hiç kaybolmaz." },
    ],
    highlightTitle: "Yeni nesil yaklaşımı",
    cta: {
      title: "Modern Zamanlara Adım At",
      description: "Bu hafif ve özgür formları denemek için seni bekliyoruz.",
      note: "Randevulu deneyim önerilir",
    },
  },

  "ozel-tasarim/bize-tasarlatin": {
    eyebrow: "Hayal Ortaklığı",
    title: "Senin Hayalin, Bizim Ellerimiz",
    description:
      "Zihninde bir resim var, biliyoruz. Belki bir rüya, belki bir anı... Gel, o resmi birlikte gerçeğe dönüştürelim. Sen anlat, biz şekil verelim.",
    heroImage: "/gorseller/atolye.jpg",
    sections: [
      {
        kicker: "Başlangıç",
        title: "İlk Kıvılcım",
        description: "Her şey bir sohbetle başlar. Senin stilin, senin bütçen, senin hayalin... Kağıda dökülen ilk çizgiler, yolculuğumuzun haritası olur.",
        image: "/banner2.jpg",
        tags: ["Stil analizi", "Bütçe planı", "Hızlı eskiz"],
      },
      {
        kicker: "Deneyim",
        title: "Gerçeğe Dokunmak",
        description: "Henüz bitmeden, onu hissetmeni isteriz. 3D prova ile parmağındaki duruşunu, ağırlığını test ederiz. Sürprizlere yer yok, sadece mutluluk var.",
        image: "/slider1.jpg",
        tags: ["3D prova", "Ağırlık ayarı", "Konfor testi"],
      },
      {
        kicker: "Sonuç",
        title: "Ustalık Eseri",
        description: "Ve atölyenin büyüsü... Ateş ve el emeğiyle yoğrulan metal, senin hikayeni anlatan eşsiz bir mücevhere dönüşür.",
        image: "/newsection.jpg",
        tags: ["El işçiliği", "Sertifika", "Bakım rehberi"],
      },
    ],
    highlights: [
      { title: "Adım Adım İzle", description: "Fotoğraf ve videolarla sürecin her anına tanıklık et." },
      { title: "Sana Uygun Çözümler", description: "Hayallerinle bütçeni buluşturan en doğru seçenekler." },
      { title: "Söz Verdiğimiz Gibi", description: "Tam zamanında, tam istediğin gibi teslim." },
    ],
    highlightTitle: "Tasarım süreci",
    cta: {
      title: "Hayalini Erteleme",
      description: "O eşsiz parçayı tasarlamak için ilk adımı at, randevunu al.",
      note: "48 saat içinde ilk taslak",
    },
  },
  "ozel-tasarim/kendin-yarat": {
    eyebrow: "Senin İmzan",
    title: "Kendi Hikayenin Yazarı Ol",
    description:
      "Seçimlerin seni anlatır. Hangi taş, hangi renk, hangi form... Parçaları birleştir, kendi şaheserini yarat. Bu senin sahnen.",
    heroImage: "/gorseller/kendintasarla.jpg",
    sections: [
      {
        kicker: "Temel",
        title: "Tuvalini Seç",
        description: "Her şey bir formla başlar. İster klasik, ister modern... Senin ruhuna en yakın olanı bul ve üzerine inşa etmeye başla.",
        image: "/slider4.jpg",
        tags: ["Hızlı seçim", "Özelleştirilebilir", "Çevrim içi onay"],
      },
      {
        kicker: "Renk",
        title: "Ruhunu Yansıt",
        description: "Taşın rengi, metalin tonu... Senin enerjini yansıtan o mükemmel uyumu yakala. Kurallar yok, sadece sen varsın.",
        image: "/product1.jpg",
        tags: ["Taş seçimi", "Metal rengi", "Bütçe kontrolü"],
      },
      {
        kicker: "Zaman",
        title: "Hızla Kavuş",
        description: "Sen tasarla, biz hızla hayata geçirelim. Beklemeye gerek yok, hayalin en kısa sürede parmaklarında olsun.",
        image: "/product2.jpg",
        tags: ["Hızlı üretim", "Takip edilebilir süreç", "Bakım desteği"],
      },
    ],
    highlights: [
      { title: "Kolay ve Keyifli", description: "Karmaşık süreçler yok, sadece yaratmanın keyfi var." },
      { title: "Anında Gör", description: "Seçimlerinin nasıl görüneceğini ve maliyetini anında bil." },
      { title: "Sonsuz Destek", description: "Teslimden sonra da bakım ve onarım için yanındayız." },
    ],
    highlightTitle: "Kendin yarat süreci",
    cta: {
      title: "Tasarımcı Sensin",
      description: "Kendi mücevherini yaratmanın büyüsünü keşfetmek için başla.",
      note: "Kısa termin seçenekleri",
    },
  },
  "ozel-tasarim/nisan-evlilik": {
    eyebrow: "Sonsuzluk",
    title: "İki Kalp, Tek Yol",
    description:
      "Birbirini tamamlayan iki ruh gibi, birbirini tamamlayan iki yüzük... Bu yolculukta attığınız her adımda, parmağınızdaki o ışıltı size eşlik edecek.",
    heroImage: "/gorseller/nisan.jpg",
    sections: [
      {
        kicker: "Ahenk",
        title: "Mükemmel Uyum",
        description: "Tektaşın zarafeti, alyansın sadeliğiyle buluşuyor. Yan yana geldiklerinde, tıpkı sizin gibi, daha güçlü ve daha güzeller.",
        image: "/product3.jpg",
        tags: ["Eşleşen yükseklik", "Parlaklık uyumu", "Konfor iç yüzey"],
      },
      {
        kicker: "Söz",
        title: "Yıllara Söz Verdik",
        description:
          "Hayatın her anına, her zorluğuna dayanacak kadar güçlü. Bu yüzükler, verdiğiniz sözün somut bir kanıtı.",
        image: "/product4.jpg",
        tags: ["Sağlam köprü", "Ayar garantisi", "Parlatma"],
      },
      {
        kicker: "İz",
        title: "Sadece Size Ait",
        description: "İçine kazınan bir tarih, bir isim... Sizin hikayenizi, sizin sırrınızı taşıyan, size özel bir mühür.",
        image: "/gorseller/campaign5.avif",
        tags: ["Gravür", "Metal tonu", "Taş seçimi"],
      },
    ],
    highlights: [
      { title: "Ömür Boyu Garanti", description: "Aşkınız gibi, yüzükleriniz de güvencemiz altında." },
      { title: "Hep Parlak", description: "Yıllık bakımlarla ilk günkü heyecanını korur." },
      { title: "Adım Adım", description: "Sürecin her aşamasında şeffaf ve güvenilir." },
    ],
    highlightTitle: "Set tasarım yaklaşımı",
    cta: {
      title: "Mutluluğa İlk Adım",
      description: "Bu özel setleri birlikte tasarlamak için sizi bekliyoruz.",
      note: "Atölye veya online görüşme",
    },
  },
  "ozel-tasarim/kisiye-ozel-hediye": {
    eyebrow: "Kalpten",
    title: "En Güzel Hediye Sensin",
    description:
      "Bir hediye, bin kelimeye bedeldir. Ona verdiğin değer, seçtiğin bu özel parçada hayat bulsun. Sadece onun için, sadece ona özel.",
    heroImage: "/gorseller/kisiyeozel.jpg",
    sections: [
      {
        kicker: "İmza",
        title: "Adını Yazdık",
        description: "Bir harf, bir tarih, bir sembol... Küçük bir detay, büyük bir anlam. Onu ne kadar iyi tanıdığını gösteren o ince dokunuş.",
        image: "/gorseller/product1.avif",
        tags: ["Gravür", "Taş rengi", "Zincir uzunluğu"],
      },
      {
        kicker: "Konfor",
        title: "Hep Üzerinde",
        description:
          "Varlığıyla mutlu eden, yokluğuyla aranan... Gün boyu teninden ayırmak istemeyeceği kadar hafif ve rahat.",
        image: "/gorseller/product2.avif",
        tags: ["Hafif", "Konforlu", "Dayanıklı yüzey"],
      },
      {
        kicker: "Sunum",
        title: "Heyecan Dolu Bir Kutu",
        description: "Kapağı açtığı andaki o gülümseme... En az içindeki kadar değerli bir sunumla, o anı ölümsüzleştiriyoruz.",
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
    eyebrow: "Unutulmaz Anlar",
    title: "Zamanı Durduran Hatıralar",
    description:
      "Takvimdeki bir yaprak değil, kalpteki bir izdir özel günler. O günü sonsuz kılacak, her bakışta o anı hatırlatacak bir armağan.",
    heroImage: "/gorseller/ozelgunler.jpg",
    sections: [
      {
        kicker: "Zarafet",
        title: "Işığın Dansı",
        description: "Gecenin en parlak yıldızı o olsun. Zarif, ince ama bir o kadar da göz alıcı. Tıpkı o anın büyüsü gibi.",
        image: "/gorseller/campaign3.webp",
        tags: ["Hafif", "Parıltılı", "Uyumlu form"],
      },
      {
        kicker: "Anlam",
        title: "Sessiz Kelimeler",
        description: "Bazen 'Seni seviyorum' demenin en güzel yolu, sessiz bir semboldür. Bir taş, bir harf, binlerce duygu.",
        image: "/gorseller/product4.avif",
        tags: ["Doğum taşı", "Sembol", "Kişiselleştirme"],
      },
      {
        kicker: "Sunum",
        title: "İlk Heyecan",
        description: "Kutunun kapağı aralandığında yüzüne yayılan o gülümseme... İşte en büyük hediye bu.",
        image: "/gorseller/campaign4.avif",
        tags: ["Premium kutu", "Not kartı", "Hızlı teslim"],
      },
    ],
    highlights: [
      { title: "Tam Zamanında", description: "O özel güne yetişmesi için özenli planlama." },
      { title: "Gönül Rahatlığı", description: "Beğenilmezse diye düşünme, değişim hakkın saklı." },
      { title: "Özenli Paket", description: "En az içindeki kadar değerli bir sunum." },
    ],
    highlightTitle: "Özel gün yaklaşımı",
    cta: {
      title: "En Doğru Seçim",
      description: "Ona en çok yakışacak hediyeyi bulmak için bize danış.",
      note: "Hızlı yanıt",
    },
  },
  "hediye/dogum-gunu": {
    eyebrow: "İyi ki Doğdun",
    title: "Yeni Yaşın Işıltısı",
    description:
      "Her yaş yeni bir hikaye, her doğum günü yeni bir başlangıç. Bu yeni sayfayı, ışıltılı bir anıyla açmaya ne dersin?",
    heroImage: "/gorseller/dogumgunu.jpg",
    sections: [
      {
        kicker: "Uyum",
        title: "Ruhunu Yansıtan Renkler",
        description: "Onun enerjisi hangi renk? Hangi form onu anlatıyor? Sadece bir takı değil, onun bir parçası olacak.",
        image: "/gorseller/product6.avif",
        tags: ["Renk seçimi", "Form alternatifi", "Hızlı seçim"],
      },
      {
        kicker: "İz",
        title: "Sonsuza Dek",
        description: "İçine kazınan bir tarih, belki bir isim... Yıllar geçse de o günü hatırlatacak, silinmez bir iz.",
        image: "/gorseller/product1.avif",
        tags: ["Gravür", "Not kartı", "Paketleme"],
      },
      {
        kicker: "Kavuşma",
        title: "Tam Zamanında",
        description: "Mumlar üflenirken, dilekler tutulurken... O kutu tam zamanında ellerinde olsun diye.",
        image: "/gorseller/product2.avif",
        tags: ["Planlı teslim", "Takip", "Hızlı destek"],
      },
    ],
    highlights: [
      { title: "Son Dakika Sürprizi", description: "Unuttum diye üzülme, aynı gün kargo seçeneği var." },
      { title: "Rahat Ol", description: "Beğenmezse veya uymazsa değiştirmek çok kolay." },
      { title: "Özenli Sunum", description: "Hediye paketi ve notunla hazır gelir." },
    ],
    highlightTitle: "Doğum günü rehberi",
    cta: {
      title: "Sürprizini Seç",
      description: "Onu en mutlu edecek hediyeyi bulmak için yardım edelim.",
      note: "WhatsApp destek",
    },
  },
  "hediye/anneler-gunu": {
    eyebrow: "Anneye Sevgi",
    title: "Şefkatin Karşılığı",
    description:
      "Seni koşulsuz seven, her anında yanında olan o güzel kalbe... Teşekkür etmenin en zarif, en kalıcı yolu.",
    heroImage: "/gorseller/annelergunu.jpg",
    sections: [
      {
        kicker: "Huzur",
        title: "Yumuşak Dokunuşlar",
        description: "Onun şefkati gibi yumuşak, onun varlığı gibi huzur veren formlar. Gün boyu rahat etsin diye.",
        image: "/gorseller/product4.avif",
        tags: ["Hafif", "Yuvarlak kenar", "Günlük uyum"],
      },
      {
        kicker: "Bağ",
        title: "Ailenin Kalbi",
        description: "Her bir taş bir evladı, her bir detay aileyi simgeler. Kalbine en yakın yerde taşıyacağı bir hatıra.",
        image: "/gorseller/product5.avif",
        tags: ["Doğum taşı", "İnisyal", "Sembolik"],
      },
      {
        kicker: "Mutluluk",
        title: "Gözlerindeki Işık",
        description: "Paketi açtığında hissedeceği o mutluluk, paha biçilemez. Ona kendini özel hissettir.",
        image: "/gorseller/product6.avif",
        tags: ["Premium kutu", "Mesaj kartı", "Hızlı teslim"],
      },
    ],
    highlights: [
      { title: "Kolay Değişim", description: "Beğenmezse veya uymazsa, yorulmadan değişim." },
      { title: "Hep Parlak", description: "Onun gibi hep ışıldasın diye bakım desteği." },
      { title: "Zamanında", description: "O özel günde elinde olması için planlı gönderim." },
    ],
    highlightTitle: "Anneler Günü yaklaşımı",
    cta: {
      title: "Onu Mutlu Et",
      description: "Annene en çok yakışacak o parçayı seçmek için yardım al.",
      note: "Ücretsiz paketleme",
    },
  },
  "hediye/kadinlar-gunu": {
    eyebrow: "Güç ve Zarafet",
    title: "Kendi Işığını Yansıtanlara",
    description:
      "Hayata dokunan, üreten, seven ve güzelleştiren tüm kadınlara... Gücünü zarafetinden alan, ilham veren tasarımlar.",
    heroImage: "/gorseller/kadinlargunu.jpg",
    sections: [
      {
        kicker: "Duruş",
        title: "Net ve Kararlı",
        description: "Keskin hatlar, parlak yüzeyler... Tıpkı senin gibi ne istediğini bilen, güçlü bir duruş.",
        image: "/gorseller/product3.avif",
        tags: ["Geometrik", "Parlak yüzey", "Modern"],
      },
      {
        kicker: "Özgürlük",
        title: "Sınır Tanımayan",
        description: "Hafif, esnek ve özgür. Seni kısıtlamayan, seninle birlikte hareket eden, hayatın hızına yetişen formlar.",
        image: "/gorseller/product4.avif",
        tags: ["Hafif", "Boşluklu form", "Konfor"],
      },
      {
        kicker: "Işıltı",
        title: "Göz Alıcı Detaylar",
        description: "Küçük bir pırıltı, büyük bir etki. Senin içindeki o cevheri dışarı yansıtan, fark edilir dokunuşlar.",
        image: "/gorseller/product5.avif",
        tags: ["Mikro taş", "Parlak plaka", "Vurgu"],
      },
    ],
    highlights: [
      { title: "Zamanında Teslim", description: "Bu anlamlı günde elinde olması için özenli kargo." },
      { title: "Özel Sunum", description: "Sana yakışır şıklıkta bir paketleme." },
      { title: "Hep Yanında", description: "Işıltını korumak için bakım desteğimiz seninle." },
    ],
    highlightTitle: "Kadınlar Günü rehberi",
    cta: {
      title: "Gücünü Keşfet",
      description: "Seni en iyi anlatan o parçayı bulmak için seçeneklere göz at.",
      note: "Hızlı destek",
    },
  },
  "hediye/yeni-dogan": {
    eyebrow: "Hoş Geldin Bebek",
    title: "İlk Hediye, İlk Hatıra",
    description:
      "Dünyaya gözlerini açan o minik mucizeye... Saflığın, masumiyetin ve yeni başlangıçların simgesi.",
    heroImage: "/gorseller/yenidogan.jpg",
    sections: [
      {
        kicker: "Koruma",
        title: "Pamuk Gibi",
        description: "Onun hassas tenine zarar vermeyecek kadar yumuşak, yuvarlatılmış kenarlar. Güvenle takabilirsin.",
        image: "/gorseller/product1.avif",
        tags: ["Yumuşak kenar", "Konforlu kavis", "Güvenli form"],
      },
      {
        kicker: "Saflık",
        title: "Tertemiz Bir Dokunuş",
        description: "İçinde hiçbir zararlı madde yok. Sadece saf altın ve el emeği. Onun kadar temiz, onun kadar doğal.",
        image: "/gorseller/product2.avif",
        tags: ["Nikel içermez", "El cilası", "Güvenli"],
      },
      {
        kicker: "Hatıra",
        title: "Adıyla Yaşasın",
        description: "Üzerine kazınan ismi ve doğum tarihiyle, büyüdüğünde bile saklayacağı en değerli anısı.",
        image: "/gorseller/product3.avif",
        tags: ["İsim gravürü", "Tarih", "Hediye hazır"],
      },
    ],
    highlights: [
      { title: "Doğru Ölçü", description: "Minik bilekler için özel ölçü rehberimizle yanılma payı yok." },
      { title: "Özenli Paket", description: "Bebek hediyesine yakışır şirinlikte bir kutu." },
      { title: "Kolay Değişim", description: "Olmazsa diye düşünme, değişim çok kolay." },
    ],
    highlightTitle: "Yeni doğan yaklaşımı",
    cta: {
      title: "Minik Bir Hatıra",
      description: "İsmini ve ölçüsünü söyle, ömürlük hediyesini hazırlayalım.",
      note: "Hızlı teslim",
    },
  },
  "hediye/erkek-hediye": {
    eyebrow: "Erkek İçin",
    title: "Gücün Sessiz İfadesi",
    description:
      "Sözlere gerek bırakmayan, duruşuyla konuşan tasarımlar. Modern erkeğin stilini tamamlayan, güçlü ve karizmatik detaylar.",
    heroImage: "/gorseller/erkekhediye.jpg",
    sections: [
      {
        kicker: "Karakter",
        title: "Net Çizgiler",
        description: "Karmaşadan uzak, sade ama iddialı. Köşeli hatların maskülen duruşu, konforla buluşuyor.",
        image: "/gorseller/product5.avif",
        tags: ["Köşeli dış", "Yumuşak iç", "Konfor"],
      },
      {
        kicker: "Doku",
        title: "Matın Asaleti",
        description: "Parlaklığın yerini mat dokuların derinliği alıyor. Zamanla karakter kazanan, yaşanmışlık hissi veren yüzeyler.",
        image: "/gorseller/product6.avif",
        tags: ["Mat doku", "Fırça izi", "Dayanıklılık"],
      },
      {
        kicker: "İmza",
        title: "Sadece Onun",
        description: "Bir harf, bir tarih... Gizli bir detayla ona özel kılınan, kişisel bir mühür.",
        image: "/gorseller/product1.avif",
        tags: ["Gravür", "Ölçü ayarı", "Hediye kutusu"],
      },
    ],
    highlights: [
      { title: "Tam Ölçü", description: "Bilek veya parmak ölçüsü için rehberliğimizle yanılma payı yok." },
      { title: "Şık Sunum", description: "Erkeğe yakışır sadelikte ve şıklıkta bir kutu." },
      { title: "Bakım", description: "İlk günkü karizmasını koruması için bakım desteği." },
    ],
    highlightTitle: "Erkek hediye yaklaşımı",
    cta: {
      title: "Stilini Tamamla",
      description: "Ona en uygun parçayı seçmek için seçenekleri incele.",
      note: "Hızlı danışmanlık",
    },
  },
  "hediye/mini-butceli": {
    eyebrow: "Küçük Mutluluklar",
    title: "Zarafetin Bedeli Olmaz",
    description:
      "Bazen küçük bir dokunuş, dünyalara bedeldir. Bütçeni yormayan ama kalbini dolduran, zarif ve anlamlı seçenekler.",
    heroImage: "/gorseller/dusukbutceli.jpg",
    sections: [
      {
        kicker: "Hafiflik",
        title: "Tüy Gibi",
        description: "Varlığıyla mutlu eden, yokluğuyla aranan... Gün boyu teninden ayırmak istemeyeceğin kadar hafif.",
        image: "/gorseller/product3.avif",
        tags: ["Hafif", "Konforlu", "Günlük"],
      },
      {
        kicker: "Işıltı",
        title: "Küçük Pırıltılar",
        description: "Minimal taşlar, parlak plakalar... Işığı yakalayan küçük detaylarla büyük bir etki yarat.",
        image: "/gorseller/product4.avif",
        tags: ["Parlak plaka", "Minimal taş", "Şık"],
      },
      {
        kicker: "Sunum",
        title: "Değerli Hissettir",
        description: "Fiyatı ne olursa olsun, sunumu paha biçilemez. Özenli paketimizle, hediyen her zaman değerli.",
        image: "/gorseller/product5.avif",
        tags: ["Paketleme", "Not kartı", "Hızlı teslim"],
      },
    ],
    highlights: [
      { title: "Hemen Yola Çıkar", description: "Beklemene gerek yok, stoktan aynı gün kargo." },
      { title: "Rahat Değişim", description: "İçine sinmezse değiştirmek çok kolay." },
      { title: "Hep Parlak", description: "Bakım desteğimizle ışıltısı hiç solmaz." },
    ],
    highlightTitle: "Mini bütçe rehberi",
    cta: {
      title: "Bütçene Uygun Şıklık",
      description: "Seni ve bütçeni düşünen önerilerimiz için bize yaz.",
      note: "Hızlı yanıt",
    },
  },
  "hediye/aksesuar": {
    eyebrow: "Tamamlayıcılar",
    title: "Mücevherinin Evi",
    description:
      "Onlar senin en değerli hazinelerin. Işıltılarını korumak, düzenli tutmak ve güvenle saklamak için en şık çözümler.",
    heroImage: "/gorseller/aksesuar.jpg",
    sections: [
      {
        kicker: "Koruma",
        title: "Yumuşak Bir Yuva",
        description: "Kadife dokunuşlarla sarıp sarmalayan, çizilmelerden koruyan özel bölmeler. Onlar burada güvende.",
        image: "/gorseller/product6.avif",
        tags: ["Süet astar", "Bölmeli", "Çizilme önleyici"],
      },
      {
        kicker: "Seyahat",
        title: "Seninle Her Yere",
        description: "Tatile, iş gezisine veya hafta sonu kaçamağına... Mücevherlerin de seninle, düzenli ve şık bir şekilde gelsin.",
        image: "/gorseller/product1.avif",
        tags: ["Kompakt", "Fermuarlı", "Hafif"],
      },
      {
        kicker: "Bakım",
        title: "İlk Günkü Gibi",
        description: "Küçük bir dokunuşla eski parlaklığına kavuşsun. Özel bezlerimizle temizlik artık çok kolay.",
        image: "/gorseller/product2.avif",
        tags: ["İz bırakmaz", "Hızlı temizlik", "Bakım kiti"],
      },
    ],
    highlights: [
      { title: "Güvenli Saklama", description: "Dış etkenlerden uzak, korunaklı bir alan." },
      { title: "Düzenli Hayat", description: "Karışan zincirlere, kaybolan küpelere son." },
      { title: "Pratik Bakım", description: "Evde kolayca uygulayabileceğin temizlik çözümleri." },
    ],
    highlightTitle: "Aksesuar rehberi",
    cta: {
      title: "Düzenini Kur",
      description: "Mücevherlerine en uygun saklama çözümünü bulmak için incele.",
      note: "Hızlı kargo",
    },
  },
};

export const getSubcategoryStoryKey = (category: string, subcategory: string) =>
  `${category}/${subcategory}`;

