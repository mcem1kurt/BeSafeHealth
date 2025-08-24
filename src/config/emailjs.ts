// EmailJS Configuration
// Bu dosya artık src/config/index.ts'den import ediliyor
// Geriye uyumluluk için burada tutuluyor

export { emailJSConfig } from './index';

// EmailJS Template Variables (Template'de kullanılan değişkenler):
// {{user_name}} - Kullanıcı adı
// {{user_email}} - Kullanıcı email'i
// {{user_phone}} - Kullanıcı telefonu
// {{user_message}} - Kullanıcı mesajı
// {{service}} - Seçilen hizmet
// {{date}} - Gönderim tarihi
// {{to_name}} - Alıcı adı

// Kurulum Adımları:
// 1. https://www.emailjs.com adresine gidin
// 2. Ücretsiz hesap oluşturun
// 3. Email Service ekleyin (Gmail, Outlook, vs.)
// 4. Email Template oluşturun
// 5. Public Key alın
// 6. Bu dosyadaki değerleri güncelleyin
