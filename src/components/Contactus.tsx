import React from "react";
import { useTranslation } from "react-i18next";

const ContactPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      className="flex min-h-screen w-full items-center justify-center p-6 bg-gray-50"
      style={{ backgroundImage: "url('/img/pages/contactus/main_bg.svg')" }}
    >
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#869006] text-center">
          {t("pageTitleContact")}
        </h1>
        <p className="text-center text-gray-600 mt-2 mb-8">
          {t("contactSubtitleContact")}
        </p>

        {/* Contact Form */}
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium mb-1">
                {t("labels.fullNameContact")} <span className="text-red-500">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-100 focus:ring-2 focus:ring-[#869006] outline-none"
              />
            </div>

            {/* Company Name */}
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium mb-1">
                {t("labels.companyNameContact")}
              </label>
              <input
                id="companyName"
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-gray-100 focus:ring-2 focus:ring-[#869006] outline-none"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                {t("labels.phoneContact")} <span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-100 focus:ring-2 focus:ring-[#869006] outline-none"
              />
              <p className="text-xs text-gray-500 mt-1">
                {t("phoneExampleContact")}
              </p>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                {t("labels.emailContact")} <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-100 focus:ring-2 focus:ring-[#869006] outline-none"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              {t("labels.messageContact")} <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              required
              rows={5}
              className="w-full px-4 py-2 rounded-lg bg-gray-100 focus:ring-2 focus:ring-[#869006] outline-none"
            ></textarea>
          </div>

          {/* Required fields note */}
          <p className="text-xs text-gray-500">
            {t("requiredFieldsContact")}
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-[#869006] text-white rounded-lg font-medium hover:bg-[#6d7805] transition-colors"
          >
            {t("sendContact")}
          </button>
        </form>

      
      </div>
    </section>
  );
};

export default ContactPage;
