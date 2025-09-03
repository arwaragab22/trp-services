import Numberanimation from "@/util/Numberanimation";
import { useTranslation } from "react-i18next";
type numberdata = {
    icon: string,
    value: string,
    unit?: string,
    title: string,
    desc: string
}

function Statisticstrp() {
    const { t } = useTranslation();

    const numbersSection = t("numbersSection.cards", { returnObjects: true }) as numberdata[];
    console.log(numbersSection)
    return (
        <div className="bg-gray-200 ">        <section className="numbers-section py-16  px-1 md:px-5 mt-12 rounded-3xl rounded-b-none w-full md:w-[80%] m-auto">
            <div className="container">
                <div className="text-center mb-12" style={{ opacity: 1, transform: "none" }}>
                    <h2 className="text-3xl font-bold text-primary mb-3">{t("numbersSection.title")}</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        {t("numbersSection.subtitle")}
                    </p>
                </div>

                <div className="flex  justify-center  justify-items-center flex-wrap gap-[20px]">
                    {Array.from(numbersSection).map((ele: numberdata) => {

                        return <div className="card-number  flex gap-3  bg-white rounded-2xl shadow-2xl  p-4 duration-200 hover:bg-greentxt hover:text-white
    w-[98%]   sm:w-[400px] hover:[&_*]:text-white cursor-pointer hover:scale-105" >
                            <div className="img-box  bg-gray-300 
                         w-20 h-20 rounded-[50%] flex justify-center items-center">
                                <img src={`/images/${ele.icon}`} className="w-10 h-10 " />
                            </div>
                            <div className="content-box ">
                                <h6 className="flex gap-2 items-center">
                                    <Numberanimation number1={ele.value} />

                                    <span className="  text-greentxt font-semibold  text-2xl md:text-5xl mb-3">{ele.unit}</span>
                                </h6>
                                <p className="text-base md:mt-4">             {ele.title}</p>
                                <span className="text-base text-gray-600 block mt-1">
                                    {ele.desc}                                </span>
                            </div>
                        </div>

                    })}



                </div>

            </div>
        </section>
        </div>

    )
}

export default Statisticstrp