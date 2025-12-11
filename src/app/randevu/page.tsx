import Navbar from '@/main/navigation/Navbar/Navbar';
import Footer from '@/main/desktop/components/footer/Footer';
import AppointmentForm from '@/components/appointment/AppointmentForm';

export default function RandevuPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px', paddingBottom: '80px', minHeight: '60vh' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h1 style={{ fontSize: '36px', fontWeight: 600, marginBottom: '12px', color: '#111' }}>
              Randevu Al
            </h1>
            <p style={{ fontSize: '18px', color: '#333', lineHeight: 1.6, fontWeight: 500 }}>
              Size en uygun tarih ve saati seçerek randevunuzu oluşturabilirsiniz.
            </p>
          </div>
          <AppointmentForm />
        </div>
      </main>
      <Footer />
    </>
  );
}

