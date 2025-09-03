
import { useTranslation } from 'react-i18next';
export type ServiceItem = {
    title: string;
    description: string;
    features: string[];
    icon: string;
    button: string;
    buttonLink: string;
};



function Hosting() {
    const { t } = useTranslation();

    // جلب بيانات الخدمات من i18next
    const services = t("hostingServices", { returnObjects: true }) as ServiceItem[];

    return (
        <div className="mb-20 mt-8" id="services">
            <h2 className="text-3xl font-bold mb-10 text-center">{t("hostingTitle")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service: any, index: number) => (
                    <div key={index}>
                        <div className="rounded-xl border bg-card text-card-foreground overflow-hidden shadow-lg h-full bg-gradient-to-br from-[#c4d023] to-[#e4f22e] border-none">
                            <div className="p-6 flex  flex-col justify-between h-full">
                                <div className=''>
                                    <div className="flex items-center mb-6">
                                    <div className="w-14 h-14 bg-[#ffffffa8] rounded-full flex items-center justify-center ml-4 shrink-0">
                                        <img alt={service.title} className="w-8 h-8" src={service.icon} />
                                    </div>
                                    <h3 className="text-2xl font-bold">{service.title}</h3>
                                </div>
                                    <p className="mb-6 text-lg">{service.description}</p>
                                    <ul className="space-y-3 mb-8">
                                        {service.features.map((feat: string, idx: number) => (
                                            <li key={idx} className="flex items-center">
                                                <span className="w-6 h-6 bg-[#0b304170] text-white rounded-full flex items-center justify-center ml-3 shrink-0">✓</span>
                                                <span>{feat}</span>
                                            </li>
                                        ))}
                                    </ul></div>
                                <a href={service.buttonLink}>
                                    <button className="inline-flex  items-center justify-center gap-2 whitespace-nowrap 
                                    text-sm transition-colors focus-visible:outline-none focus-visible:ring-1
                                    focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow h-9 px-4 py-2 w-full
                                     bg-[#0b3041c2] rounded-3xl text-white border border-[#0b3041c2]  mt-3 font-bold ">
                                        {service.button}
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Hosting