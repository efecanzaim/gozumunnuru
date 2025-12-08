import React from 'react'
import Navbar from '@/main/navigation/Navbar/Navbar'
import Footer from '@/main/desktop/components/footer/Footer'
import CategoryStory from '@/main/desktop/components/categoryStory/CategoryStory'

export default function DesktopHediye() {
  const story = {
    categoryId: 'hediye',
    eyebrow: 'Kalpten Kalbe',
    title: 'Sevginin En Saf Hali',
    description:
      'Bir kutunun kapağı açıldığında, sadece bir mücevher değil, bir gülümseme, bir hatıra ve "Seni seviyorum" demenin binbir yolu çıkar ortaya.',
    heroImage: '/gorseller/campaign3.webp',
    sections: [
      {
        kicker: 'Unutulmaz Anlar',
        title: 'Zamanı Durduran Hediyeler',
        description:
          'Yıllar geçse de o günü hatırlatan, her bakışta o anın sıcaklığını hissettiren bir armağan. Kutlamaların en zarif şahidi.',
        image: '/gorseller/campaign1.jpg',
        tags: ['Kişisel not kartı', 'Premium paketleme', 'Hızlı teslim'],
      },
      {
        kicker: 'Sadece Ona Özel',
        title: 'İsminle Yaşayan Hatıra',
        description:
          'Küçük bir harf, gizli bir tarih... Sadece ikinizin bildiği o sırrı, altının üzerine fısıldıyoruz. Dünyada tek, sadece onun için.',
        image: '/gorseller/campaign2.avif',
        tags: ['Gravür', 'Metal rengi seçimi', 'Taş rengi alternatifi'],
      },
      {
        kicker: 'Beklenmedik Mutluluk',
        title: 'Sebepsiz Gülümsemeler İçin',
        description:
          'Bazen bir neden gerekmez. Sadece "Aklımdasın" demek, günün ortasında bir güneş gibi doğmak için. Küçük ama anlamı büyük dokunuşlar.',
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
