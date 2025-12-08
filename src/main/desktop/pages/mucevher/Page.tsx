import React from 'react'
import Navbar from '@/main/navigation/Navbar/Navbar'
import Footer from '@/main/desktop/components/footer/Footer'
import CategoryStory from '@/main/desktop/components/categoryStory/CategoryStory'

export default function DesktopMucevher() {
  const story = {
    categoryId: 'mucevher',
    eyebrow: 'Bazı anlar vardır…',
    title: 'Sessizdir, ama insanın içinde büyük bir kapı açar.',
    description:
      'Bu yüzük, işte o anların içinden doğdu.',
    heroImage: '/gorseller/urun2.jpg',
    sections: [
      {
        kicker: 'Akdeniz’in sabah ışığı',
        title: 'Yumuşak parlaklık',
        description:
          'Akdeniz’in sabah ışığı altınla buluştuğunda oluşan o yumuşak parlaklık… Ustamızın elinde, her kıvrımı sevgiyle işlenen bu yüzükte hayat buldu. Taşının berraklığı, ilk bakışta fark edilen bir huzuru taşır. Çünkü her detay, “gözümün nuru” diye sevilen birine duyulan şefkate adanmıştır.',
        image: '/gorseller/product2.avif',
        tags: ['Hipoalerjenik kaplama', 'Nikel içermez', 'İnce işçilik'],
      },
      {
        kicker: 'En nazik cümle',
        title: 'Sen benim ışığımsın',
        description:
          'Bu tasarım, sadece bir mücevher değil; bir kalbin diğerine söylenemeyen en nazik cümlesidir. “Sen benim ışığımsın…” demenin zarif bir yoludur.',
        image: '/gorseller/product5.avif',
        tags: ['Kişiye özel ölçü', 'Ömür boyu parlatma', 'Sertifikalı taş'],
      },
      {
        kicker: 'Her an hatırlanabilir',
        title: 'Kalbi anlatır',
        description:
          'Her gün taşınabilir, her anda hatırlanabilir, ama hiçbir zaman sıradanlaşmaz. Çünkü bu yüzük, takanı değil, takılan kişinin kalbini anlatır.',
        image: '/gorseller/product6.avif',
        tags: ['El cilası', 'Hassas mıhlama', 'Kalite kontrol'],
      },
    ],
    highlights: [
      {
        title: 'Sorumlu kaynak',
        description: 'RJC uyumlu tedarik ve geri dönüştürülmüş altın kullanımı.',
      },
      {
        title: 'Bakım programı',
        description: 'Ömür boyu parlatma ve yılda bir kez ücretsiz ayar kontrolü.',
      },
      {
        title: 'Randevulu deneyim',
        description: 'Atölyede taş seçimi ve prova için kişisel randevu planlıyoruz.',
      },
    ],
    highlightTitle: 'Mücevher seçiminin güvence noktaları',
    cta: {
      label: 'Atölye randevusu',
      title: 'Mücevher danışmanlığı ile başlayın',
      description:
        'Taş seçimi, ölçü alma ve günlük kullanım önerilerini birlikte planlayalım. Randevulu deneyimde tasarımınızı deneme fırsatı sunuyoruz.',
      note: 'İstanbul atölyesinde yüz yüze veya çevrim içi görüşme',
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
