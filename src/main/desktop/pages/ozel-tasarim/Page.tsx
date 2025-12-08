import React from 'react'
import Navbar from '@/main/navigation/Navbar/Navbar'
import Footer from '@/main/desktop/components/footer/Footer'
import CategoryStory from '@/main/desktop/components/categoryStory/CategoryStory'

export default function DesktopOzelTasarim() {
  const story = {
    categoryId: 'ozel-tasarim',
    eyebrow: 'Kişiye özel tasarım',
    title: 'Özel tasarım sürecimiz',
    description:
      'Hayalinizdeki parçayı birlikte modelliyoruz. Taş seçimi, modelleme ve prova aşamalarını tamamen şeffaf yürütüyor, her aşamada size onay imkânı veriyoruz.',
    heroImage: '/banner2.jpg',
    heroNote: '3D modelleme & hızlı prova',
    sections: [
      {
        kicker: '1. İlham & çizim',
        title: 'Sizin için eskiz hazırlıyoruz',
        description:
          'Kişisel hikayenizi, stil tercihlerinizi ve kullanım alışkanlıklarınızı dinleyip eskizler çıkarıyoruz. Form, kalınlık ve taş yerleşiminde sizi rahatlatacak alternatifler sunuyoruz.',
        image: '/banner1.jpg',
        tags: ['Stil analizi', 'Form seçenekleri', 'Taş yerleşim planı'],
      },
      {
        kicker: '2. 3D model & prova',
        title: 'Gerçek boyutlu model',
        description:
          '3D baskı veya mum prova ile gerçek ölçüde deneme yapıyoruz. Ağırlık, oturuş ve parlaklık dengesi için küçük düzeltmeleri bu aşamada tamamlıyoruz.',
        image: '/slider1.jpg',
        tags: ['Gerçek boyutlu prova', 'Hafiflik ayarı', 'Kişisel ölçü'],
      },
      {
        kicker: '3. Üretim & teslim',
        title: 'Atölyede el işçiliği',
        description:
          'Döküm, mıhlama ve polisaj süreçlerini atölyemizde yürütüyoruz. Teslim öncesi kalite kontrol ve sertifika hazırlığı ile güvence sağlıyoruz.',
        image: '/newsection.jpg',
        tags: ['El işçiliği', 'Kalite kontrol', 'Sertifika'],
      },
    ],
    highlights: [
      {
        title: 'Şeffaf süreç',
        description: 'Her aşamada fotoğraf ve video güncellemesi ile ilerleme paylaşıyoruz.',
      },
      {
        title: 'Esnek bütçe',
        description: 'Taş ve maden alternatifleriyle bütçenize uygun kombinasyonlar öneriyoruz.',
      },
      {
        title: 'Hızlı teslim',
        description: 'Standart tasarımlarda 10 iş günü, özel işçiliklerde net takvim paylaşıyoruz.',
      },
    ],
    highlightTitle: 'Özel tasarımda güvence',
    cta: {
      label: 'Tasarım randevusu',
      title: 'Birlikte tasarlayalım',
      description:
        'Özel bir hikayesi olan, yıllarca kullanılacak parçayı birlikte kuralım. İlk görüşmede ilham panosu ve bütçe planı sunuyoruz.',
      note: 'Online veya yüz yüze randevu ile 48 saat içinde eskiz',
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
