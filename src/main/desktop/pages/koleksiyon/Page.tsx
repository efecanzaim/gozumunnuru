import React from 'react'
import Navbar from '@/main/navigation/Navbar/Navbar'
import Footer from '@/main/desktop/components/footer/Footer'
import CategoryStory from '@/main/desktop/components/categoryStory/CategoryStory'

export default function DesktopKoleksiyon() {
  const story = {
    categoryId: 'koleksiyon',
    eyebrow: 'Nadide Hikayeler',
    title: 'Her Biri Kendi Masalını Anlatır',
    description:
      'Doğanın fısıltıları, mimarinin sessiz gücü ve sanatın dokunuşu... Bu koleksiyonlar, sıradanlığa bir başkaldırı, estetiğe bir övgüdür.',
    heroImage: '/gorseller/queenkoleksiyon.jpg',
    sections: [
      {
        kicker: 'Doğanın Neşesi',
        title: 'Renklerin Sıcak Kucaklaşması',
        description:
          'Bir yaz akşamının tatlı esintisi gibi... Doğal taşların o canlı, hayat dolu enerjisi, modern formlarla buluştu. İçindeki çocuğu hiç kaybetmeyenler için.',
        image: '/gorseller/cherrykoleksiyon.jpg',
        tags: ['Doğal taş seçimi', 'Hafif form', 'Parlak cilalı yüzey'],
      },
      {
        kicker: 'Suyun Yolu',
        title: 'Yumuşaklığın Gücü',
        description:
          'Keskin köşeler yok, sadece akıp giden bir huzur var. Vücudunla bütünleşen, seninle hareket eden, seni kısıtlamayan özgür formlar.',
        image: '/gorseller/laranjkoleksiyonu.jpg',
        tags: ['Organik form dili', 'Mat-parlak kontrast', 'Maksimum konfor'],
      },
      {
        kicker: 'İki Kalp, Tek Hikaye',
        title: 'Sözlerin En Güzeli',
        description:
          '"Evet" dediğin o anın sonsuzluğa mühürlenmesi. Sadece bir yüzük değil, parmağında taşıdığın bir yemin, her bakışta hatırlanan o büyülü söz.',
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
