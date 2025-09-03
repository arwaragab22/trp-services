import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
type cardtype = {
  title: string,
  desc: string,
  icon:string
}
export default function CardsCarousel() {
  const { t, i18n } = useTranslation();
  const cards = t("distinguishes.cardsdist", { returnObjects: true }) as cardtype[];
  const [langKey, setLangKey] = useState(i18n.language);

  useEffect(() => {
    setLangKey(i18n.language); // كل ما اللغة تتغير يعيد إنشاء السلايدر
  }, [i18n.language]);

  return (
    <div className="py-8 bg-gray-100">
      <div className="text-center mb-10 md:mb-16 ">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          {t("distinguishes.title")}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {t("distinguishes.subtitle")}
        </p>
      </div>

      <Swiper
        key={langKey} // مهم لإعادة التهيئة عند تغيير اللغة
        dir={i18n.language === "ar" ? "ltr" : "rtl"}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2},
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        slidesPerGroup={1}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        style={{
          margin: 'auto',
        }}
      >
        {cards?.map((c: cardtype, index: number) => (
          <SwiperSlide key={index} className=" ">
            <div className="mx-3 md:mx-4 w-[90%] md:w-80 flex-shrink-0 text-center h-[200px]">
              <div className="rounded-xl text-card-foreground shadow h-full border border-gray-200 bg-[#0b304126] transition-all duration-300 group hover:border-opacity-80">
                <div className="flex flex-col space-y-1.5 p-6 pb-2">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-2xl mb-2 mx-auto">
                    {c.icon}{" "}
                  </div>
                  <div className="tracking-tight text-xl text-gray-700 font-bold">
                    {c.title}{" "}
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <div className="text-gray-500 text-sm">{c.desc}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
