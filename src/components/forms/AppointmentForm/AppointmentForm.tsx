'use client';

import { useState, useEffect } from 'react';
import { z } from 'zod';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './AppointmentForm.module.css';
import { Clock, User, Phone, Mail, MessageSquare, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { createAppointment, checkAvailability, getAvailableTimeSlots, type AppointmentData } from '@/services/google-calendar';

const appointmentSchema = z.object({
  name: z.string().min(2, 'Ad soyad en az 2 karakter olmalıdır'),
  phone: z.string().regex(/^[0-9+\s()-]+$/, 'Geçerli bir telefon numarası giriniz'),
  email: z.string().email('Geçerli bir e-posta adresi giriniz'),
  date: z.date({ message: 'Lütfen bir tarih seçiniz' }),
  time: z.string().min(1, 'Lütfen bir saat seçiniz'),
  message: z.string().optional(),
});

type AppointmentFormData = z.infer<typeof appointmentSchema>;

const ALL_TIME_SLOTS = [
  '11:00', '12:00', '13:00', '14:00', '15:00', '16:00',
];

export default function AppointmentForm() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>(ALL_TIME_SLOTS);
  const [isLoadingSlots, setIsLoadingSlots] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Tarih değiştiğinde müsait saatleri getir
  useEffect(() => {
    if (selectedDate) {
      setIsLoadingSlots(true);
      getAvailableTimeSlots(selectedDate)
        .then((slots) => {
          setAvailableTimeSlots(slots);
          // Eğer seçili saat artık müsait değilse, seçimi temizle
          if (selectedTime && !slots.includes(selectedTime)) {
            setSelectedTime('');
          }
        })
        .catch((error) => {
          console.error('Müsait saatleri getirme hatası:', error);
          setAvailableTimeSlots(ALL_TIME_SLOTS);
        })
        .finally(() => {
          setIsLoadingSlots(false);
        });
    } else {
      setAvailableTimeSlots(ALL_TIME_SLOTS);
      setSelectedTime('');
    }
  }, [selectedDate]);

  const handleDateChange = (value: any) => {
    if (value instanceof Date) {
      setSelectedDate(value);
      setErrors((prev) => ({ ...prev, date: '' }));
      setSelectedTime(''); // Tarih değiştiğinde saati sıfırla
    } else if (Array.isArray(value) && value[0] instanceof Date) {
      setSelectedDate(value[0]);
      setErrors((prev) => ({ ...prev, date: '' }));
      setSelectedTime(''); // Tarih değiştiğinde saati sıfırla
    }
  };

  const handleTimeSelect = async (time: string) => {
    if (!selectedDate) return;
    
    setSelectedTime(time);
    setErrors((prev) => ({ ...prev, time: '' }));
    
    // Çakışma kontrolü yap
    const availability = await checkAvailability(selectedDate, time);
    if (!availability.available) {
      setErrors((prev) => ({
        ...prev,
        time: availability.message || 'Bu saat müsait değil. Lütfen başka bir saat seçin.',
      }));
      setSelectedTime('');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const data: AppointmentFormData = {
        ...formData,
        date: selectedDate!,
        time: selectedTime,
      };

      const validatedData = appointmentSchema.parse(data);

      // Son bir çakışma kontrolü yap
      const availability = await checkAvailability(validatedData.date, validatedData.time);
      if (!availability.available) {
        setErrors({
          time: availability.message || 'Bu saat müsait değil. Lütfen başka bir saat seçin.',
        });
        setSubmitStatus('error');
        return;
      }

      // Google Calendar'a randevu oluştur
      const appointmentData: AppointmentData = {
        name: validatedData.name,
        phone: validatedData.phone,
        email: validatedData.email,
        date: validatedData.date,
        time: validatedData.time,
        message: validatedData.message,
      };

      const result = await createAppointment(appointmentData);

      if (result.success) {
        setSubmitStatus('success');
        // Formu temizle
        setFormData({ name: '', phone: '', email: '', message: '' });
        setSelectedDate(null);
        setSelectedTime('');
        setAvailableTimeSlots(ALL_TIME_SLOTS);
      } else {
        if (result.conflict) {
          setErrors({
            time: result.message || 'Bu saat müsait değil. Lütfen başka bir saat seçin.',
          });
          // Müsait saatleri yeniden yükle
          if (selectedDate) {
            const slots = await getAvailableTimeSlots(selectedDate);
            setAvailableTimeSlots(slots);
          }
        } else {
          setSubmitStatus('error');
        }
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.issues.forEach((issue) => {
          if (issue.path[0]) {
            fieldErrors[issue.path[0] as string] = issue.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        setSubmitStatus('error');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1); // Yarın ve sonrası

  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3); // 3 ay sonrasına kadar

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formLayout}>
          {/* Sol Taraf: Takvim ve Saat Seçimi */}
          <div className={styles.leftColumn}>
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Tarih Seçimi</h2>
              <div className={styles.calendarWrapper}>
                <Calendar
                  onChange={handleDateChange}
                  value={selectedDate}
                  minDate={minDate}
                  maxDate={maxDate}
                  locale="tr-TR"
                  className={styles.calendar}
                />
                {errors.date && <span className={styles.error}>{errors.date}</span>}
              </div>
            </div>

            {/* Saat Seçimi */}
            {selectedDate && (
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>
                  <Clock size={20} />
                  Saat Seçimi
                  {isLoadingSlots && (
                    <Loader2 size={16} className={styles.loadingIcon} />
                  )}
                </h2>
                {isLoadingSlots ? (
                  <div className={styles.loadingMessage}>Müsait saatler kontrol ediliyor...</div>
                ) : (
                  <>
                <div className={styles.timeSlots}>
                  {ALL_TIME_SLOTS.map((time) => {
                    const isAvailable = availableTimeSlots.includes(time);
                    return (
                      <button
                        key={time}
                        type="button"
                        onClick={() => isAvailable && handleTimeSelect(time)}
                        disabled={!isAvailable}
                        className={`${styles.timeSlot} ${
                          selectedTime === time ? styles.timeSlotActive : ''
                        } ${!isAvailable ? styles.timeSlotDisabled : ''}`}
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>
                    {errors.time && <span className={styles.error}>{errors.time}</span>}
                  </>
                )}
              </div>
            )}
          </div>

          {/* Sağ Taraf: Form Alanları */}
          <div className={styles.rightColumn}>
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Kişisel Bilgiler</h2>
              
              <div className={styles.inputGroup}>
                <label htmlFor="name" className={styles.label}>
                  <User size={18} />
                  Ad Soyad <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                  placeholder="Adınız ve soyadınız"
                />
                {errors.name && <span className={styles.error}>{errors.name}</span>}
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="phone" className={styles.label}>
                  <Phone size={18} />
                  Telefon <span className={styles.required}>*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                  placeholder="05XX XXX XX XX"
                />
                {errors.phone && <span className={styles.error}>{errors.phone}</span>}
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.label}>
                  <Mail size={18} />
                  E-posta <span className={styles.required}>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                  placeholder="ornek@email.com"
                />
                {errors.email && <span className={styles.error}>{errors.email}</span>}
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message" className={styles.label}>
                  <MessageSquare size={18} />
                  Mesaj (Opsiyonel)
                </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className={styles.textarea}
                placeholder="Eklemek istediğiniz bir not varsa buraya yazabilirsiniz..."
                rows={2}
              />
              </div>
            </div>

            {/* Durum Mesajları */}
            {submitStatus === 'success' && (
              <div className={styles.statusMessage} style={{ backgroundColor: '#d4edda', color: '#155724' }}>
                <CheckCircle2 size={20} />
                <span>Randevunuz başarıyla oluşturuldu! En kısa sürede sizinle iletişime geçeceğiz.</span>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className={styles.statusMessage} style={{ backgroundColor: '#f8d7da', color: '#721c24' }}>
                <AlertCircle size={20} />
                <span>Bir hata oluştu. Lütfen tekrar deneyin veya bizimle iletişime geçin.</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={styles.submitButton}
            >
              {isSubmitting ? 'Gönderiliyor...' : 'Randevu Oluştur'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

