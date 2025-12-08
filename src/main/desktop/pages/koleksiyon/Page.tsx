import React from 'react'
import Navbar from '@/main/navigation/Navbar/Navbar'
import Footer from '@/main/desktop/components/footer/Footer'
import CategoryStory from '@/main/desktop/components/categoryStory/CategoryStory'

export default function DesktopKoleksiyon() {
  const story = {
    categoryId: 'koleksiyon',
    eyebrow: 'Sınırlı sayıda koleksiyonlar',
    title: 'Koleksiyon seçkimizi keşfedin',
    description:
      'Sanat, mimari ve doğadan ilham alan kapsül koleksiyonlar. Her parçanın hikayesi, kullanılan taş ve form diliyle birleşiyor.',
    heroImage: '/gorseller/queenkoleksiyon.jpg',
    heroNote: 'Sınırlı edisyon üretim',
    sections: [
      {
        kicker: 'Cherry Koleksiyonu',
        title: 'Renkli taşlarla modern nostalji',
        description:
          'Canlı tonlar, yuvarlak formlar ve günlük kullanım için konforlu ağırlık. Renk uyumunu doğal taşların ton farklılıklarıyla dengeliyoruz.',
        image: '/gorseller/cherrykoleksiyon.jpg',
        tags: ['Doğal taş seçimi', 'Hafif form', 'Parlak cilalı yüzey'],
      },
      {
        kicker: 'Laranja Koleksiyonu',
        title: 'Akışkan hatlar ve yumuşak köşeler',
        description:
          'Organik formlar, hareket halinde bile rahat hissettiren yüzeyler. Vücut ergonomisine göre kavis alan form dili ile hazırlanıyor.',
        image: '/gorseller/laranjkoleksiyonu.jpg',
        tags: ['Organik form dili', 'Mat-parlak kontrast', 'Maksimum konfor'],
      },
      {
        kicker: 'Wedding Koleksiyonu',
        title: 'İkonik ve zamansız imzalar',
        description:
          'Eşleşen setler, incelikli taş mıhlama ve uzun ömürlü kullanım. Alyans ve set tasarımlarında kişiselleştirme seçenekleri sunuyoruz.',
        image: '/gorseller/weddingkoleksiyonu.jpg',
        tags: ['Eşleşen set', 'Kişiselleştirilebilir', 'Ayar garantisi'],
      },
    ],
    highlights: [
      {
        title: 'Kısıtlı üretim',
        description: 'Her koleksiyonda limitli adet, numaralı sertifika ve şeffaf üretim.',
      },
      {
        title: 'Form dengesi',
        description: 'Uzun süreli kullanım için ağırlık ve denge testlerinden geçen tasarımlar.',
      },
      {
        title: 'Bakım ve yenileme',
        description: 'İlk cilalama ücretsiz, taş yenileme ve ölçü ayarı servis desteği.',
      },
    ],
    highlightTitle: 'Koleksiyon felsefemiz',
    cta: {
      label: 'Randevulu deneyim',
      title: 'Koleksiyon parçalarını yerinde deneyimleyin',
      description:
        'Atölyemizde koleksiyonları birlikte inceleyelim, parçaları kombinleyip size en uygun formu bulalım.',
      note: 'Seçtiğiniz koleksiyon için kişiselleştirme seçenekleri sunuyoruz',
    },
  }

  return (
    <>
      <Navbar />
      <main>
        <CategoryStory {...story} />
      </main>
      <Footer />
    </>
  )
}
