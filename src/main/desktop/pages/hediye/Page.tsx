import React from 'react'
import Navbar from '@/main/navigation/Navbar/Navbar'
import Footer from '@/main/desktop/components/footer/Footer'
import CategoryStory from '@/main/desktop/components/categoryStory/CategoryStory'

export default function DesktopHediye() {
  const story = {
    categoryId: 'hediye',
    eyebrow: 'Hediye seçimi rehberi',
    title: 'Hediye etmek için ilham',
    description:
      'Özel günlere, kutlamalara ve sürpriz anlara uygun, anlamı güçlü hediyeler. Alıcının stiline göre seçilen taş ve form önerileriyle seçim sürecini kolaylaştırıyoruz.',
    heroImage: '/gorseller/campaign3.webp',
    heroNote: 'Stile göre hediye önerileri',
    sections: [
      {
        kicker: 'Özel günler',
        title: 'Kutlamalara eşlik eden zarafet',
        description:
          'Yıldönümü, mezuniyet veya terfi hediyeleri için hafif ve günlük kullanımda konforlu tasarımlar. Kişisel not kartı ve premium paketleme dahildir.',
        image: '/gorseller/campaign1.jpg',
        tags: ['Kişisel not kartı', 'Premium paketleme', 'Hızlı teslim'],
      },
      {
        kicker: 'Kişiye özel dokunuş',
        title: 'İsim, tarih ve anlamlı semboller',
        description:
          'İnisyal, tarih veya sembol gravürüyle kişiselleştirme seçenekleri. Taş rengi ve metal rengi tercihine göre küçük varyasyonlar sunuyoruz.',
        image: '/gorseller/campaign2.avif',
        tags: ['Gravür', 'Metal rengi seçimi', 'Taş rengi alternatifi'],
      },
      {
        kicker: 'Hızlı seçim',
        title: 'Mini bütçeli ve hazır öneriler',
        description:
          'Son dakikada bile şık bir hediye gönderebilmeniz için seçtiğimiz hafif parçalar. Aynı gün kargo seçeneği stoklu ürünlerde aktif.',
        image: '/gorseller/campaign4.avif',
        tags: ['Aynı gün kargo', 'Stoklu ürünler', 'Hafif formlar'],
      },
    ],
    highlights: [
      {
        title: 'Paketleme & kart',
        description: 'İmza kutu, kurdele ve kişisel mesaj kartı ücretsiz eklenir.',
      },
      {
        title: 'Doğru beden',
        description: 'Yüzük ve bilekliklerde değişim hakkı, ölçü rehberi desteği.',
      },
      {
        title: 'Zamanlama',
        description: 'Teslimat tarihini birlikte planlayıp statü güncellemelerini paylaşıyoruz.',
      },
    ],
    highlightTitle: 'Hediye sürecinde kolaylık',
    cta: {
      label: 'Hediye danışmanlığı',
      title: 'Alıcıya göre seçim yapalım',
      description:
        'Alıcının stilini, renk tercihini ve teslim tarihini paylaştığınızda üç alternatif öneriyoruz. Hızlı yanıt için WhatsApp ve e-posta desteği.',
      note: 'İade/değişim desteği ve teslimat takibi dahildir',
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
