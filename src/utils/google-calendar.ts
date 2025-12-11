/**
 * Google Calendar API ile randevu yönetimi
 * 
 * Bu dosya Google Apps Script webhook'u ile iletişim kurar.
 * Google Apps Script, Google Calendar API'yi kullanarak randevuları yönetir.
 */

export interface AppointmentData {
  name: string;
  phone: string;
  email: string;
  date: Date;
  time: string;
  message?: string;
}

export interface AppointmentResponse {
  success: boolean;
  message: string;
  appointmentId?: string;
  conflict?: boolean;
}

/**
 * Google Apps Script webhook URL'ini environment variable'dan alır
 */
const getScriptUrl = (): string => {
  if (typeof window === 'undefined') return '';
  const url = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || '';
  
  // URL kontrolü
  if (!url) {
    console.warn('NEXT_PUBLIC_GOOGLE_SCRIPT_URL environment variable ayarlanmamış. Google Calendar entegrasyonu çalışmayacak.');
  }
  
  return url;
};

/**
 * Randevu oluşturma isteği gönderir
 */
export async function createAppointment(
  data: AppointmentData
): Promise<AppointmentResponse> {
  const scriptUrl = getScriptUrl();
  
  if (!scriptUrl) {
    return {
      success: false,
      message: 'Google Calendar entegrasyonu yapılandırılmamış. Lütfen yönetici ile iletişime geçin.',
    };
  }

  try {
    // Tarih ve saati birleştir
    const [hours, minutes] = data.time.split(':').map(Number);
    const appointmentDateTime = new Date(data.date);
    appointmentDateTime.setHours(hours, minutes, 0, 0);

    // Google Apps Script'e gönderilecek veri
    const payload = {
      action: 'createAppointment',
      name: data.name,
      phone: data.phone,
      email: data.email,
      dateTime: appointmentDateTime.toISOString(),
      message: data.message || '',
    };

    // Google Apps Script için GET isteği kullan (POST CORS sorunlarına neden olur)
    const params = new URLSearchParams();
    Object.entries(payload).forEach(([key, value]) => {
      params.append(key, String(value));
    });
    
    const urlWithParams = `${scriptUrl}?${params.toString()}`;

    const response = await fetch(urlWithParams, {
      method: 'GET',
      redirect: 'follow', // Google Apps Script redirect'leri için önemli
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    
    if (result.success) {
      return {
        success: true,
        message: result.message || 'Randevunuz başarıyla oluşturuldu!',
        appointmentId: result.appointmentId,
      };
    } else {
      return {
        success: false,
        message: result.message || 'Randevu oluşturulurken bir hata oluştu.',
        conflict: result.conflict || false,
      };
    }
  } catch (error) {
    console.error('Randevu oluşturma hatası:', error);
    return {
      success: false,
      message: 'Bağlantı hatası. Lütfen tekrar deneyin veya bizimle iletişime geçin.',
    };
  }
}

/**
 * Belirli bir tarih ve saat için mevcut randevuları kontrol eder
 */
export async function checkAvailability(
  date: Date,
  time: string
): Promise<{ available: boolean; message?: string }> {
  const scriptUrl = getScriptUrl();
  
  if (!scriptUrl) {
    return { available: true }; // Script yoksa varsayılan olarak müsait kabul et
  }

  try {
    const [hours, minutes] = time.split(':').map(Number);
    const appointmentDateTime = new Date(date);
    appointmentDateTime.setHours(hours, minutes, 0, 0);

    // GET isteği kullan (POST yerine)
    const dateTimeStr = encodeURIComponent(appointmentDateTime.toISOString());
    const urlWithParams = `${scriptUrl}?action=checkAvailability&dateTime=${dateTimeStr}`;

    const response = await fetch(urlWithParams, {
      method: 'GET',
      redirect: 'follow',
    });

    if (!response.ok) {
      console.warn(`Müsaitlik kontrolü yanıt hatası: ${response.status}`);
      return { available: true }; // Hata durumunda varsayılan olarak müsait
    }

    const result = await response.json();
    return {
      available: result.available !== false,
      message: result.message,
    };
  } catch (error) {
    console.error('Müsaitlik kontrolü hatası:', error);
    return { available: true }; // Hata durumunda varsayılan olarak müsait
  }
}

/**
 * Belirli bir tarih için müsait saatleri getirir
 */
export async function getAvailableTimeSlots(date: Date): Promise<string[]> {
  const scriptUrl = getScriptUrl();
  
  if (!scriptUrl) {
    console.warn('Google Script URL bulunamadı, varsayılan saatler kullanılıyor');
    return [
      '11:00', '12:00', '13:00', '14:00', '15:00', '16:00',
    ];
  }

  try {
    const dateStr = date.toISOString().split('T')[0]; // YYYY-MM-DD formatı
    
    // Google Apps Script web uygulamaları için GET isteği kullan (POST yerine)
    // Bu CORS sorunlarını önler
    const urlWithParams = `${scriptUrl}?action=getAvailableTimeSlots&date=${encodeURIComponent(dateStr)}`;
    
    const response = await fetch(urlWithParams, {
      method: 'GET',
      // Google Apps Script web uygulamaları için redirect'i takip et
      redirect: 'follow',
    });

    if (!response.ok) {
      console.warn(`Google Script yanıt hatası: ${response.status} ${response.statusText}`);
      // Hata durumunda tüm saatleri müsait göster (11:00-16:00, 1 saatlik slotlar)
      return [
        '11:00', '12:00', '13:00', '14:00', '15:00', '16:00',
      ];
    }

    const result = await response.json();
    return result.availableSlots || [];
  } catch (error) {
    console.error('Müsait saatleri getirme hatası:', error);
    console.error('Script URL:', scriptUrl);
    // Hata durumunda tüm saatleri müsait göster (11:00-16:00, 1 saatlik slotlar)
    return [
      '11:00', '12:00', '13:00', '14:00', '15:00', '16:00',
    ];
  }
}

