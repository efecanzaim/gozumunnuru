import React from 'react'
import Navbar from '@/main/navigation/Navbar/Navbar'
import Footer from '@/main/desktop/components/footer/Footer'
import CategoryStory from '@/main/desktop/components/categoryStory/CategoryStory'

export default function DesktopMucevher() {
  const story = {
    categoryId: 'mucevher',
    eyebrow: 'El işçiliği mücevherler',
    title: 'Mücevher dünyamız',
    description:
      'Gözümün Nuru atölyesinde el işçiliğiyle hazırlanan zamansız parçalar. Her bir tasarım, taşıyan kişinin karakterini öne çıkaracak şekilde seçilen taşlar ve rafine formlarla tamamlanır.',
    heroImage: '/gorseller/product1.avif',
    heroNote: 'GIA sertifikalı taş seçimi',
    sections: [
      {
        kicker: 'Günlük ışıltı',
        title: 'Minimal ve zamansız formlar',
        description:
          'Her gün kullanıma uygun, hafif ve ergonomik formlar. Mat ve parlak yüzeylerin dengesiyle hem ofiste hem davette rahatça kullanılır.',
        image: '/gorseller/product2.avif',
        tags: ['Hipoalerjenik kaplama', 'Nikel içermez', 'İnce işçilik'],
      },
      {
        kicker: 'Özel anların imzası',
        title: 'Pırlanta ve değerli taş seçimi',
        description:
          'Kesim, berraklık ve karat dengesini birlikte kuruyor; özel günler için kişiye özel taş seçimi yapıyoruz. Her yüzük, ölçü ve parmak formuna göre tasarlanıyor.',
        image: '/gorseller/product5.avif',
        tags: ['Kişiye özel ölçü', 'Ömür boyu parlatma', 'Sertifikalı taş'],
      },
      {
        kicker: 'Atölyede el işçiliği',
        title: 'Ustaların dokunuşu',
        description:
          'Modelleme, döküm, mıhlama ve polisaj süreçlerinin tamamı kendi atölyemizde gerçekleşir. El cilası ve taş mıhlama, her parçada tekrarlanabilir kalite sağlar.',
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
