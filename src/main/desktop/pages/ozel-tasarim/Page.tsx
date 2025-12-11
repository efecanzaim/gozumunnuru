import React from 'react'
import Navbar from '@/main/navigation/Navbar/Navbar'
import Footer from '@/main/desktop/components/footer/Footer'
import CategoryStory from '@/main/desktop/components/categoryStory/CategoryStory'

export default function DesktopOzelTasarim() {
  const story = {
    categoryId: 'ozel-tasarim',
    eyebrow: 'Hayallerin Sınırı Yok',
    title: 'Senin Hikayen, Senin İmzan',
    description:
      'Zihninde canlanan o silik görüntüyü, parmaklarında ışıldayan bir gerçeğe dönüştürüyoruz. Bu yolculuk, senin hayalinle başlıyor.',
    heroImage: '/gorseller/ozeltasarim.jpg',
    sections: [
      {
        kicker: 'İlk Kıvılcım',
        title: 'Seni Dinliyor, Seni Anlıyoruz',
        description:
          'Bir kağıt, bir kalem ve senin anlattıkların... Ruhunu yansıtan o çizgiyi bulana kadar arıyoruz. Çünkü bu, sadece bir takı değil, senin bir uzvun olacak.',
        image: '/gorseller/banner1.jpg',
        tags: ['Stil analizi', 'Form seçenekleri', 'Taş yerleşim planı'],
      },
      {
        kicker: 'Şekil Alan Düşler',
        title: 'Hayaline Dokunmak',
        description:
          'Henüz altın olmadan önce, mumun yumuşaklığında hissedersin onu. Parmağına tam oturduğunda, "İşte bu" dediğin o an, bizim en büyük ödülümüzdür.',
        image: '/gorseller/slider1.jpg',
        tags: ['Gerçek boyutlu prova', 'Hafiflik ayarı', 'Kişisel ölçü'],
      },
      {
        kicker: 'Ateş ve Sabır',
        title: 'Ustalığın Zirvesi',
        description:
          'Ateşin korunda eriyen altın, ustanın sabrıyla yeniden doğar. Ve o son cila atıldığında, artık o bir metal değil, nesilden nesile aktarılacak bir mirastır.',
        image: '/gorseller/newsection.jpg',
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
