/**
 * Google Apps Script - Randevu Yönetim Sistemi
 * 
 * Bu script Google Calendar API'yi kullanarak randevuları yönetir.
 * 
 * KURULUM ADIMLARI:
 * 
 * 1. Google Drive'da yeni bir Google Apps Script projesi oluştur
 *    - https://script.google.com adresine git
 *    - "Yeni Proje" butonuna tıkla
 * 
 * 2. Bu kodu script editörüne yapıştır
 * 
 * 3. Google Calendar API'yi etkinleştir:
 *    - Sol menüden "Hizmetler" (Services) seçeneğine tıkla
 *    - "Google Calendar API" ekle
 * 
 * 4. Calendar ID'yi ayarla:
 *    - Google Calendar'ınızı açın
 *    - Ayarlar > Takvimlerim > İstediğiniz takvimi seçin
 *    - "Takvim entegrasyonu" bölümünden "Takvim kimliği"ni kopyalayın
 *    - Aşağıdaki CALENDAR_ID değişkenine yapıştırın
 * 
 * 5. Script'i web uygulaması olarak dağıt:
 *    - Sağ üstten "Dağıt" > "Yeni dağıtım" seç
 *    - Tür: "Web uygulaması" seç
 *    - Açıklama: "Randevu API"
 *    - Yürütme: "Benim olarak" seç
 *    - Erişim: "Herkes" seç
 *    - "Dağıt" butonuna tıkla
 *    - Web uygulaması URL'sini kopyala
 * 
 * 6. URL'yi environment variable olarak ekle:
 *    - .env.local dosyasına ekle:
 *      NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
 * 
 * 7. Test et:
 *    - Randevu formunu doldur ve gönder
 *    - Google Calendar'ınızda randevunun oluşturulduğunu kontrol edin
 */

// ⚠️ ÖNEMLİ: Bu ID'yi kendi Google Calendar ID'niz ile değiştirin
const CALENDAR_ID = 'primary'; // 'primary' kendi takviminiz, veya spesifik bir takvim ID'si

// Randevu süresi (dakika cinsinden)
const APPOINTMENT_DURATION = 60; // 1 saat

// Çalışma saatleri
const WORK_HOURS = {
  start: 11, // 11:00
  end: 16,   // 16:00
};

/**
 * CORS header'larını ekler
 */
function setCORSHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

/**
 * Ana handler - POST isteklerini işler
 */
function doPost(e) {
  try {
    const requestData = JSON.parse(e.postData.contents);
    const { action, data } = requestData;

    let response;

    switch (action) {
      case 'createAppointment':
        response = handleCreateAppointment(data);
        break;
      case 'checkAvailability':
        response = handleCheckAvailability(data);
        break;
      case 'getAvailableTimeSlots':
        response = handleGetAvailableTimeSlots(data);
        break;
      default:
        response = {
          success: false,
          message: 'Geçersiz işlem',
        };
    }

    const output = ContentService.createTextOutput(JSON.stringify(response))
      .setMimeType(ContentService.MimeType.JSON);
    
    // CORS header'larını ekle (Google Apps Script'te doğrudan header eklenemez, 
    // ama web uygulaması olarak dağıtıldığında otomatik olarak CORS desteklenir)
    return output;
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        message: 'Sunucu hatası: ' + error.toString(),
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * GET istekleri için (test ve müsait saatleri getirme)
 */
function doGet(e) {
  try {
    const action = e.parameter.action;
    const date = e.parameter.date;
    const dateTime = e.parameter.dateTime;

    // Randevu oluşturma (GET ile CORS sorunlarını önlemek için)
    if (action === 'createAppointment') {
      const data = {
        name: e.parameter.name,
        phone: e.parameter.phone,
        email: e.parameter.email,
        dateTime: e.parameter.dateTime,
        message: e.parameter.message || '',
      };
      const result = handleCreateAppointment(data);
      return ContentService.createTextOutput(JSON.stringify(result))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Eğer action belirtilmişse, ilgili işlemi yap
    if (action === 'getAvailableTimeSlots' && date) {
      const result = handleGetAvailableTimeSlots({ date: date });
      return ContentService.createTextOutput(JSON.stringify(result))
        .setMimeType(ContentService.MimeType.JSON);
    }

    if (action === 'checkAvailability' && dateTime) {
      const result = handleCheckAvailability({ dateTime: dateTime });
      return ContentService.createTextOutput(JSON.stringify(result))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Test için varsayılan yanıt
    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        message: 'Randevu API çalışıyor',
        version: '1.0.0',
      })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        message: 'Hata: ' + error.toString(),
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * OPTIONS istekleri için CORS desteği
 */
function doOptions(e) {
  return ContentService.createTextOutput('')
    .setMimeType(ContentService.MimeType.TEXT);
}

/**
 * Randevu oluştur
 */
function handleCreateAppointment(data) {
  try {
    const { name, phone, email, dateTime, message } = data;

    // Validasyon
    if (!name || !phone || !email || !dateTime) {
      return {
        success: false,
        message: 'Eksik bilgi: Ad, telefon, e-posta ve tarih zorunludur.',
      };
    }

    const appointmentDate = new Date(dateTime);
    const endDate = new Date(appointmentDate.getTime() + APPOINTMENT_DURATION * 60000);

    // Çakışma kontrolü
    const conflict = checkConflict(appointmentDate, endDate);
    if (conflict) {
      return {
        success: false,
        conflict: true,
        message: 'Bu saat için zaten bir randevu var. Lütfen başka bir saat seçin.',
      };
    }

    // Google Calendar'a event oluştur
    const calendar = CalendarApp.getCalendarById(CALENDAR_ID);
    const event = calendar.createEvent(
      `Randevu: ${name}`,
      appointmentDate,
      endDate,
      {
        description: `
Randevu Detayları:
- Ad Soyad: ${name}
- Telefon: ${phone}
- E-posta: ${email}
${message ? `- Mesaj: ${message}` : ''}

Randevu Tarihi: ${formatDateTime(appointmentDate)}
        `.trim(),
        guests: email, // E-posta bildirimi için
        sendInvites: true,
      }
    );

    return {
      success: true,
      message: 'Randevunuz başarıyla oluşturuldu! Google Calendar\'ınıza eklendi.',
      appointmentId: event.getId(),
    };
  } catch (error) {
    return {
      success: false,
      message: 'Randevu oluşturulurken hata oluştu: ' + error.toString(),
    };
  }
}

/**
 * Belirli bir tarih ve saat için müsaitlik kontrolü
 */
function handleCheckAvailability(data) {
  try {
    const { dateTime } = data;
    if (!dateTime) {
      return { available: false, message: 'Tarih bilgisi eksik' };
    }

    const appointmentDate = new Date(dateTime);
    const endDate = new Date(appointmentDate.getTime() + APPOINTMENT_DURATION * 60000);

    const conflict = checkConflict(appointmentDate, endDate);

    return {
      available: !conflict,
      message: conflict
        ? 'Bu saat müsait değil'
        : 'Bu saat müsait',
    };
  } catch (error) {
    return {
      available: false,
      message: 'Kontrol sırasında hata: ' + error.toString(),
    };
  }
}

/**
 * Belirli bir tarih için müsait saatleri getir
 */
function handleGetAvailableTimeSlots(data) {
  try {
    const { date } = data;
    if (!date) {
      return { availableSlots: [] };
    }

    const selectedDate = new Date(date + 'T00:00:00');
    const allSlots = generateTimeSlots(selectedDate);
    const availableSlots = allSlots.filter((slot) => {
      const slotDate = new Date(slot);
      const slotEnd = new Date(slotDate.getTime() + APPOINTMENT_DURATION * 60000);
      return !checkConflict(slotDate, slotEnd);
    });

    return {
      availableSlots: availableSlots.map((slot) => {
        const d = new Date(slot);
        return formatTime(d);
      }),
    };
  } catch (error) {
    return {
      availableSlots: [],
      error: error.toString(),
    };
  }
}

/**
 * Çakışma kontrolü
 */
function checkConflict(startDate, endDate) {
  try {
    const calendar = CalendarApp.getCalendarById(CALENDAR_ID);
    const events = calendar.getEvents(startDate, endDate);

    // Aynı zaman diliminde event var mı kontrol et
    for (let i = 0; i < events.length; i++) {
      const event = events[i];
      const eventStart = event.getStartTime();
      const eventEnd = event.getEndTime();

      // Çakışma kontrolü: yeni randevu mevcut randevu ile örtüşüyor mu?
      if (
        (startDate >= eventStart && startDate < eventEnd) ||
        (endDate > eventStart && endDate <= eventEnd) ||
        (startDate <= eventStart && endDate >= eventEnd)
      ) {
        return true;
      }
    }

    return false;
  } catch (error) {
    console.error('Çakışma kontrolü hatası:', error);
    return false; // Hata durumunda müsait kabul et
  }
}

/**
 * Belirli bir tarih için tüm saat slotlarını oluştur
 */
function generateTimeSlots(date) {
  const slots = [];
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  // 1 saatlik slotlar (11:00, 12:00, 13:00, 14:00, 15:00, 16:00)
  for (let hour = WORK_HOURS.start; hour <= WORK_HOURS.end; hour++) {
    const slotDate = new Date(year, month, day, hour, 0);
    slots.push(slotDate);
  }

  return slots;
}

/**
 * Tarih formatla (DD.MM.YYYY HH:MM)
 */
function formatDateTime(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${day}.${month}.${year} ${hours}:${minutes}`;
}

/**
 * Saat formatla (HH:MM)
 */
function formatTime(date) {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
}

