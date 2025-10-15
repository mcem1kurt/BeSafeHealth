import { useState } from "react";
import { useTranslation } from "next-i18next";
import { useEmailJS } from "@/hooks/useEmailJS";
import { emailJSConfig } from "@/config/emailjs";

export default function ContactForm() {
  const { t } = useTranslation("common");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const { sendEmail, isSubmitting, isSubmitted, error } = useEmailJS(emailJSConfig);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Send email using EmailJS
    await sendEmail(formData);
    
    // Reset form data
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{t("contact.form.thankYou")}</h3>
        <p className="text-gray-300 hover:text-[var(--color-gold-400)] transition-colors duration-200">{t("contact.form.successMessage")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800/50 backdrop-blur rounded-2xl p-8 border border-gray-700">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 hover:text-[var(--color-gold-400)] transition-colors duration-200 mb-2">
            {t("contact.form.name")} *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-gold-500)] focus:border-transparent transition-all duration-200"
            placeholder={t("contact.form.namePlaceholder")}
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 hover:text-[var(--color-gold-400)] transition-colors duration-200 mb-2">
            {t("contact.form.email")} *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-gold-500)] focus:border-transparent transition-all duration-200"
            placeholder={t("contact.form.emailPlaceholder")}
          />
        </div>
      </div>
      
      <div className="mb-6">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 hover:text-[var(--color-gold-400)] transition-colors duration-200 mb-2">
          {t("contact.form.phone")}
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-gold-500)] focus:border-transparent transition-all duration-200"
          placeholder={t("contact.form.phonePlaceholder")}
        />
      </div>
      
      <div className="mb-8">
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 hover:text-[var(--color-gold-400)] transition-colors duration-200 mb-2">
          {t("contact.form.message")} *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-gold-500)] focus:border-transparent transition-all duration-200 resize-none"
          placeholder={t("contact.form.messagePlaceholder")}
        />
      </div>
      
      {/* Error Message */}
      {error && (
        <div className="mb-4 text-center">
          <p className="text-red-400 text-sm">{error}</p>
        </div>
      )}
      
              <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-[var(--color-gold-500)] to-[var(--color-gold-600)] hover:from-[var(--color-gold-600)] hover:to-[var(--color-gold-700)] text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {t("contact.form.sending")}
            </div>
          ) : (
            t("contact.form.send")
          )}
        </button>
        

      </form>
    );
  }
