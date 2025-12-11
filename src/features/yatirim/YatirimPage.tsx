import Navbar from '@/components/common/Navbar/Navbar'
import Footer from '@/components/site/Footer/Footer'
import CategoryStory from '@/components/site/CategoryStory/CategoryStory'

export default function YatirimPage() {
  const story = {
    categoryId: 'yatirim',
    eyebrow: 'Yatırım için değerli taşlar',
    title: 'Portfoy Yönetimi',
    description:
      'Sertifikalı pırlanta ve altın ürünlerinde uzun vadeli değer korunumu için birlikte strateji kuruyoruz. Şeffaf fiyatlandırma, sertifika kontrolleri ve saklama rehberi sağlıyoruz.',
    heroImage: '/gorseller/danismanlik.jpg',
    sections: [
      {
        kicker: 'Strateji',
        title: 'Profilinize göre yatırım planı',
        description:
          'Bütçe, vade ve likidite beklentilerinize uygun taş ve maden dağılımını oluşturuyoruz. GIA/HRD sertifikalı taşların kıyaslamasını detaylı aktarıyoruz.',
        image: '/gorseller/product5.avif',
        tags: ['Profil analizi', 'Sertifika kontrolü', 'Fiyat kıyaslaması'],
      },
      {
        kicker: 'Saklama',
        title: 'Güvenli saklama ve sigorta rehberi',
        description:
          'Ürünlerin saklama koşulları, sigorta seçenekleri ve yıllık kontrol takvimini birlikte planlıyoruz. Seri numarası takibi ile tam şeffaflık sağlıyoruz.',
        image: '/gorseller/product6.avif',
        tags: ['Sigorta rehberi', 'Seri no takibi', 'Yıllık kontrol'],
      },
      {
        kicker: 'Likidite',
        title: 'Değer koruma ve satış desteği',
        description:
          'Güncel piyasa verilerine göre alım-satım desteği sunuyor, değer koruması için bakım ve sertifika güncelleme sürecini yönetiyoruz.',
        image: '/gorseller/product3.avif',
        tags: ['Piyasa takibi', 'Sertifika güncelleme', 'Satış desteği'],
      },
    ],
    highlights: [
      {
        title: 'Şeffaf fiyatlama',
        description: 'Güncel kur ve taş parametrelerine göre açık maliyet paylaşımı.',
      },
      {
        title: 'Dokümantasyon',
        description: 'Sertifika doğrulama, fatura ve seri numarası kayıtları tek dosyada.',
      },
      {
        title: 'Düzenli kontrol',
        description: 'Yıllık bakım, mıhlama kontrolü ve değerleme raporu desteği.',
      },
    ],
    highlightTitle: 'Yatırım yaklaşımımız',
    cta: {
      label: 'Danışmanlık',
      title: 'Portföyünüz için randevu alın',
      description:
        'Hedeflediğiniz vade ve bütçeye göre en uygun taş ve altın kombinasyonlarını birlikte belirleyelim.',
      note: 'Ön görüşme 30 dk, online veya yüz yüze',
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
