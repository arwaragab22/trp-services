import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 container">

                    {/* الشعار والوصف */}
                    <div>
                        <div className="mb-6">
                            <img src="/images/logo.png" alt="TRP Logo" className="h-16 mb-4" />
                        </div>
                        <p className="text-gray-400 mb-6 text-lg">
                            {t("footer.desc")}
                        </p>
                        <div className="flex gap-4 rtl:space-x-reverse">
                        
                            <a href="#"
                                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center 
            hover:bg-[#ffffffd4] transition-colors duration-300"
                                title="Facebook">
                                <img src="/images/f1.svg" alt="Facebook" className="w-5 h-5"/>
                            </a>

                    
                            <a href="#"
                                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center 
            hover:bg-[#ffffffd4] transition-colors duration-300"
                                title="Instagram">
                                <img src="/images/f2.svg" alt="Instagram" className="w-5 h-5"/>
                            </a>

                        
                            <a href="#"
                                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center 
            hover:bg-[#ffffffd4] transition-colors duration-300"
                                title="Twitter">
                                <img src="/images/f3.svg" alt="Twitter" className="w-5 h-5"/>
                            </a>

                        
                            <a href="#"
                                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center 
            hover:bg-[#ffffffd4] transition-colors duration-300"
                                title="YouTube">
                                <img src="/images/f4.svg" alt="YouTube" className="w-5 h-5"/>
                            </a>
                        </div>
                    </div>

                    {/* الخدمات */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 relative after:content-[''] after:absolute
                         after:bottom-[-8px] ltr:after:left-0 rtl:after:right-0  after:h-[3px] after:w-12 after:bg-[#869006]">
                            {t("footer.servicesTitle")}
                        </h3>
                        <ul className="space-y-3">
                            <li><a href="/services/erp">{t("footer.services.erp")}</a></li>
                            <li><a href="/services/development">{t("footer.services.dev")}</a></li>
                            <li><a href="/services/hosting">{t("footer.services.hosting")}</a></li>
                            <li><a href="/services/analysis">{t("footer.services.analysis")}</a></li>
                        </ul>
                    </div>

                    {/* روابط مهمة */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 relative after:content-['']
                         after:absolute after:bottom-[-8px] ltr:after:left-0 rtl:after:right-0 after:h-[3px] after:w-12 after:bg-[#869006]">
                            {t("footer.linksTitle")}
                        </h3>
                        <ul className="space-y-3">
                            <li><a href="/about">{t("footer.links.about")}</a></li>
                            <li><a href="/success-stories">{t("footer.links.success")}</a></li>
                            <li><a href="/careers">{t("footer.links.careers")}</a></li>
                            <li><a href="/faq">{t("footer.links.faq")}</a></li>
                            <li><a href="/privacy">{t("footer.links.privacy")}</a></li>
                            <li><a href="/terms">{t("footer.links.terms")}</a></li>
                        </ul>
                    </div>

                    {/* تواصل معنا */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 relative after:content-[''] after:absolute after:bottom-[-8px] 
                    ltr:after:left-0 rtl:after:right-0 after:h-[3px] after:w-12 after:bg-[#869006]">
                            {t("footer.contactTitle")}
                        </h3>
                        <ul className="space-y-4">
                            <li>{t("footer.contact.phone")}</li>
                            <li>{t("footer.contact.email")}</li>
                            <li>{t("footer.contact.address")}</li>
                            <li>{t("footer.contact.time")}</li>
                        </ul>
                    </div>
                </div>

                {/* حقوق النشر */}
                <div className="border-t border-gray-800 pt-8 mt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm">{t("footer.copyright")}</p>
                        <div className="flex gap-6">
                            <a href="/privacy">{t("footer.links.privacy")}</a>
                            <a href="/terms">{t("footer.links.terms")}</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
