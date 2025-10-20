import { useState } from 'react';
import emailjs from '@emailjs/browser';

interface EmailJSConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

interface FormData {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  service?: string;
}

export const useEmailJS = (config: EmailJSConfig) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendEmail = async (formData: FormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      // Prepare template parameters
      const templateParams = {
        user_name: formData.name,
        user_email: formData.email,
        user_phone: formData.phone || 'Belirtilmedi',
        user_message: formData.message || 'Belirtilmedi',
        service: formData.service || 'Genel',
        date: new Date().toLocaleString('tr-TR'),
        to_name: 'Be Safe Health'
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        config.serviceId,
        config.templateId,
        templateParams,
        config.publicKey
      );

      if (result.status === 200) {
        setIsSubmitted(true);
        // Keep success state visible until user manually resets
      } else {
        throw new Error('Email gönderilemedi');
      }
    } catch (err) {
      
      setError(err instanceof Error ? err.message : 'Beklenmeyen bir hata oluştu');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setError(null);
  };

  return {
    sendEmail,
    resetForm,
    isSubmitting,
    isSubmitted,
    error
  };
};
