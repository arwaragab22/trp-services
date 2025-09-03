import { object } from "framer-motion/client";
import { useTranslation } from "react-i18next";
type ServiceKeys = "erp" | "software" | "hosting" | "analysis";

type news={
    title:string,
    desc: string,
    chooseServices: string,
    services: Record<ServiceKeys,string>,
    note: string,
    emailPlaceholder: string,
    button:string,
    footerNote: string

}

function News() {
      const { t } = useTranslation();
    const News = t("newsletter", { returnObjects: true } ) as news;
    console.log(News,890)
    return (
        <section className="newsletter-section py-16 px-8 bg-gradient-to-r from-[#869006]/5 to-[#869006]/20">
            <div className="container mx-auto max-w-4xl">
                <div className="bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden">
                    {/* دوائر خلفية ديكور */}
                    <div className="absolute top-0 left-0 w-20 h-20 bg-[#869006]/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#869006]/10 rounded-full translate-x-1/2 translate-y-1/2"></div>

                    {/* المحتوى */}
                    <div className="relative z-10">
                        {/* العنوان والوصف */}
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold mb-3">
                                {News.title}                            </h2>
                            <p className="text-gray-600">
                                {News.desc}
                            </p>
                        </div>

                        {/* الفورم */}
                        <form>
                            {/* الاختيارات */}
                            <div className="mb-6">
                                <label className="block text-gray-700 mb-2">
                                    {News.chooseServices}
                                </label>
                                <div className="grid xs:grid-cols-2 md:grid-cols-4 gap-3">
                                    {(Object.values(News.services)).map((ele) => {
                                        return <div className="cursor-pointer p-3 rounded-lg border-2 transition-all border-[#869006] bg-[#869006]/5">
                                            <div className="flex items-start gap-4">
                                                <div className="w-2 h-2  mt-1 rounded-full mr-2 flex-shrink-0 bg-[#869006]"></div>
                                                <span className="text-sm">{ele}</span>
                                            </div>
                                        </div>
                                })}
                            
                                </div>
                                <p className="text-xs text-gray-500 mt-2">
                            {News.note}
                                </p>
                            </div>

                            {/* الايميل + زر الاشتراك */}
                            <div className="flex flex-col md:flex-row gap-3">
                                <input
                                    type="email"
                                    className="flex w-full rounded-md border px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-gray-50 border-gray-200 h-12 flex-grow"
                                    placeholder={News.emailPlaceholder}
                                    required
                                />
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow py-2 bg-[#869006] text-white hover:bg-[#869006]/90 h-12 px-6"
                                >
                                    {News.button}
                                </button>
                            </div>

                            <p className="text-xs text-center mt-4 text-gray-500">
                                {News.footerNote}
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            
        </section>

  )
}

export default News