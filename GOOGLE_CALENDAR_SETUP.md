# Google Calendar Randevu Sistemi Kurulum Rehberi

Bu rehber, Google Calendar API ile randevu sistemini kurmak için adım adım talimatlar içerir.

## 📋 Gereksinimler

- Google hesabı
- Google Calendar erişimi
- Google Apps Script erişimi

## 🚀 Kurulum Adımları

### 1. Google Apps Script Projesi Oluşturma

1. [Google Apps Script](https://script.google.com) adresine gidin
2. "Yeni Proje" butonuna tıklayın
3. Proje adını "Randevu Yönetim Sistemi" olarak değiştirin

### 2. Script Kodunu Ekleme

1. `google-apps-script.js` dosyasındaki tüm kodu kopyalayın
2. Google Apps Script editörüne yapıştırın
3. Dosyayı kaydedin (Ctrl+S veya Cmd+S)

### 3. Google Calendar API'yi Etkinleştirme

1. Sol menüden **"Hizmetler"** (Services) seçeneğine tıklayın
2. **"+ Hizmet Ekle"** butonuna tıklayın
3. **"Google Calendar API"** arayın ve ekleyin
4. İzinleri onaylayın

### 4. Calendar ID'yi Ayarlama

#### Yöntem 1: Kendi Takviminizi Kullanma (Önerilen)

1. [Google Calendar](https://calendar.google.com) adresine gidin
2. Sol menüden kullanmak istediğiniz takvimi bulun
3. Takvimin yanındaki **üç nokta** (⋮) menüsüne tıklayın
4. **"Ayarlar ve paylaşım"** seçeneğine tıklayın
5. **"Takvim entegrasyonu"** bölümüne gidin
6. **"Takvim kimliği"** değerini kopyalayın
7. `google-apps-script.js` dosyasındaki `CALENDAR_ID` değişkenine yapıştırın:

```javascript
const CALENDAR_ID = 'your-calendar-id@group.calendar.google.com';
```

#### Yöntem 2: Primary Takvimi Kullanma

Eğer kendi takviminizi kullanmak istiyorsanız, `CALENDAR_ID` değerini `'primary'` olarak bırakabilirsiniz:

```javascript
const CALENDAR_ID = 'primary';
```

### 5. Script'i Web Uygulaması Olarak Dağıtma

1. Sağ üst köşedeki **"Dağıt"** (Deploy) butonuna tıklayın
2. **"Yeni dağıtım"** seçeneğini seçin
3. **"Tür seç"** açılır menüsünden **"Web uygulaması"** seçin
4. Aşağıdaki ayarları yapın:
   - **Açıklama**: "Randevu API v1.0"
   - **Yürütme**: "Benim olarak" (Execute as me)
   - **Erişim**: "Herkes" (Anyone) ⚠️ **ÖNEMLİ: Mutlaka "Herkes" seçilmeli, aksi halde CORS hatası alırsınız**
5. **"Dağıt"** butonuna tıklayın
6. ⚠️ **ÖNEMLİ**: İlk kez dağıtıyorsanız veya kodu güncellediyseniz, **"Sürüm"** (Version) seçeneğini **"Yeni"** (New) olarak ayarlayın
6. İlk kez dağıtıyorsanız, izinleri onaylamanız istenecek:
   - **"İzinleri gözden geçir"** butonuna tıklayın
   - Google hesabınızı seçin
   - **"Gelişmiş"** > **"Güvenli olmayan sayfaya git"** (gerekirse)
   - İzinleri onaylayın
7. Dağıtım tamamlandığında **Web uygulaması URL'si** gösterilecek
8. Bu URL'yi kopyalayın (örnek: `https://script.google.com/macros/s/ABC123.../exec`)

### 6. Environment Variable Ekleme

1. Proje kök dizininde `.env.local` dosyası oluşturun (eğer yoksa)
2. Aşağıdaki satırı ekleyin:

```env
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

3. `YOUR_SCRIPT_ID` kısmını kopyaladığınız Web uygulaması URL'si ile değiştirin

### 7. Test Etme

1. Development server'ı yeniden başlatın:
   ```bash
   npm run dev
   ```

2. `/randevu` sayfasına gidin
3. Bir randevu oluşturmayı deneyin
4. Google Calendar'ınızı kontrol edin - randevunun oluşturulduğunu görmelisiniz

## ⚙️ Yapılandırma Seçenekleri

### Randevu Süresi

Varsayılan randevu süresi 30 dakikadır. Değiştirmek için:

```javascript
const APPOINTMENT_DURATION = 60; // 60 dakika
```

### Çalışma Saatleri

Varsayılan çalışma saatleri 09:00 - 19:00 arasıdır. Değiştirmek için:

```javascript
const WORK_HOURS = {
  start: 10, // 10:00
  end: 18,   // 18:00
};
```

## 🔒 Güvenlik Notları

1. **Web uygulaması URL'sini gizli tutun** - Bu URL'yi public repository'ye commit etmeyin
2. **Environment variable kullanın** - `.env.local` dosyasını `.gitignore`'a ekleyin
3. **İzinleri kontrol edin** - Sadece gerekli izinleri verin

## 🐛 Sorun Giderme

### "Calendar not found" hatası

- Calendar ID'nin doğru olduğundan emin olun
- Takvimin paylaşım ayarlarını kontrol edin

### "Permission denied" hatası

- Script'in Calendar API izinlerine sahip olduğundan emin olun
- Web uygulaması dağıtımında "Benim olarak" seçeneğini kullandığınızdan emin olun

### Randevular oluşturulmuyor

- Browser console'da hataları kontrol edin
- Google Apps Script'te "Yürütme" (Execution) sekmesinden logları kontrol edin
- Web uygulaması URL'sinin doğru olduğundan emin olun

## 📞 Destek

Sorun yaşarsanız:
1. Google Apps Script'teki execution loglarını kontrol edin
2. Browser console'daki hataları kontrol edin
3. Network tab'ında API isteklerini kontrol edin

