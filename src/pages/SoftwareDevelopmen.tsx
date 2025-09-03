
import { useTranslation } from 'react-i18next';


function SoftwareDevelopmen() {
    const { t } = useTranslation();
    const services = t("softwaredevs", { returnObjects: true }) as Array<any>;

    return (
        <div className="mb-16 px-4 mt-8">
            <h2 className="text-2xl font-bold mb-8 text-center">{t("softwaredevtitle")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="rounded-xl border bg-card text-card-foreground overflow-hidden shadow-lg shadow-[#eeff0029] border-[#c4d023]"
                    >
                        <div className="p-6">
                            <div className="flex items-center mb-4 flex-col gap-2">
                                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center ml-4">
                                    <img className="w-16 h-16" src={service.icon} alt={service.title} />
                                </div>
                                <h3 className="text-xl font-bold">{service.title}</h3>
                            </div>
                            <p className="mb-5">{service.description}</p>
                            <ul className="space-y-2">
                                {service.features.map((feature: string, i: number) => (
                                    <li key={i} className="flex items-center">
                                        <span className="w-5 h-5 bg-[#c4d023] text-gray-100 rounded-full flex items-center justify-center ml-2">
                                            ✓
                                        </span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SoftwareDevelopmen