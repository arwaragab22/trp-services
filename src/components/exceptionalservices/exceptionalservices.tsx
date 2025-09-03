
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import i18n from "@/i18n";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
type Service = {
  title: string;
  subtitle: string;
  details: Record<string, string>;
  cta?: string;
  img: string;
};

function Tabsexveptionservices() {
  const { t } = useTranslation();
  const serviceexp = t("servicesexp", { returnObjects: true });
  console.log(serviceexp);
  console.log(Object.values(serviceexp));
  const [tapvalue, settabvalue] = useState(
    i18n.language === "en"
      ? "Enterprise Resource Planning"
      : "أنظمة تخطيط موارد المؤسسات"
  );
  const handleTabChange = (value: string) => {
    console.log("التاب الجديد:", value);
    settabvalue(value); // تحديث الحالة
  };

  useEffect(() => {
    settabvalue(
      i18n.language === "en"
        ? "Enterprise Resource Planning"
        : "أنظمة تخطيط موارد المؤسسات"
    );
  }, [i18n.language]);
  return (
    <div className="p-2 md:p-6  bg-gradient-to-l from-gray-300 from-[0%] to-white to-[98%] mt-20 relative  overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        style={{ position: "relative" }}
      >
        <div className="relative">
          <div
            className="bg-gradient-to-l from-blue-400 to-blue-200 w-5 h-5 rounded-[50%] absolute top-3  opacity-75
         animate-bounce rtl:right-[10%] ltr:left-[10%] md:rtl:right-[20%] md:ltr:left-[20%]"
          ></div>
          <div className="section-title text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-gradient-to-r from-[#869006]/10 to-transparent text-sm text-[#869006] font-medium mb-4">
              {t("servicesexp_title")}
            </span>
            <h2 className="text-xl py-1  md:text-4xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-800">
              {t("servicesexp_subtitle")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("servicesexp_description")}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#869006] to-[#a3ad07] mx-auto mt-5"></div>
          </div>
        </div>
        <div>
        
          <Tabs
            value={tapvalue}
            onValueChange={handleTabChange}
            className=""
            dir={i18n.language === "ar" ? "rtl" : "ltr"}
          >
            <TabsList
              className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] 
  w-full bg-white p-1md:p-3 h-fit gap-1 "
            >
              {Array.from(Object.values(serviceexp)).map(
                (ele: Service, key) => {
                  return (
                    <TabsTrigger
                      key={key}
                      value={ele.title}
                      className="p-4  shadow-md text-base text-gray-700 font-semibold cursor-pointer
                  
                data-[state=active]:[&>.dot]:opacity-100       data-[state=active]:[&>.dot]:rtl:right-4
    data-[state=active]:[&>.dot]:ltr:left-3 data-[state=active]:bg-greentxt    data-[state=active]:text-white relative    data-[state=active]:[&>.dot]:bg-white"
                    >
                      {" "}
                      <div className="bg-greentxt w-2 h-2  top:[20px] rtl:right-[0px] ltr:left-[0px]
                       rounded-full dot transition-all duration-300  opacity-0 absolute hidden md:block"></div>
                      <div className="px-3 text-base"> {ele.title}</div>
                    </TabsTrigger>
                  );
                }
              )}
            </TabsList>
            {Array.from(Object.values(serviceexp)).map((ele: Service) => {
              return (
                <TabsContent value={ele.title} className="mt-6">
                  <div className="block">
                    <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/60">
                      <div className="p-3 md:p-8 bg-gradient-to-br from-white/90 via-to-transparent to-white/80 relative overflow-hidden">
                        <div className="absolute -right-12 -top-12 w-32 h-32 rounded-full bg-gradient-to-r from-[#869006]/20 to-transparent blur-md"></div>
                        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-[#869006]/5 blur-2xl"></div>
                        <div className="absolute inset-0 opacity-[0.03] bg-[url('/img/pages/home/circuit-pattern.svg')] bg-no-repeat bg-cover"></div>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 relative z-10">
                          <div className="md:max-w-[60%]">
                            <h3 className=" text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
                              {ele.title}{" "}
                            </h3>
                            <p className="text-gray-600 text-lg">
                              {ele.subtitle}
                            </p>
                          </div>
                          <div className="flex-shrink-0 h-32 w-32 mx-auto md:mx-0 relative">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/80 to-transparent backdrop-blur-sm border border-white/50 shadow-xl">
                              <img src={ele.img} />
                            </div>

                            <div className="absolute inset-0 border-2 border-dashed border-[#869006]/20 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                      <div className="p-2 md:p-8 pt-0">
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                          {Object.values(ele.details).map((element, idx) => (
                            <div className="p-3  md:p-5 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/70 shadow-sm hover:shadow-md transition-all duration-300 group">
                              <div className="md:flex items-start gap-6">
                                <span className="mb-4 flex-shrink-0 w-8 h-8 rounded-xl bg-gradient-to-br from-[#869006] to-[#a1a907] text-white font-semibold text-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                  {idx + 1}
                                </span>
                                <div>
                                  <h4 className="md:font-semibold text-lg text-gray-900 mb-2">
                                    {element}
                                  </h4>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </motion.div>
    </div>
  );
}
export default Tabsexveptionservices;
