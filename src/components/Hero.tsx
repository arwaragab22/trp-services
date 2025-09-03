
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();

  return (
    <div className="hero lg:h-[calc(100dvh-88px)]  flex bg-bgmain text-white  flex-col justify-evenly relative py-6 lg:px-0">
      <div className="">
        <div
          className=" w-full lg:w-[100%] flex  flex-col lg:flex-row mx-auto justify-center items-center mb-[10px] lh:mb-0  my-[20px] 
        lg:my-5 h-[95%]"
        >
          <div className="hero-content  w-full lg:w-[70%] flex justify-center items-center ">
            <div className="flex flex-col gap-5  lg:text-start p-2 lg:p-8 items-start lg:items-start">
              <h4 className="hero-title text-2xl lg:text-5xl font-bold  leading-12">
                {t("hero.title")}
              </h4>
              <p className="hero-description text-xl lg:text-3xl leading-10 ">
                {t("hero.description")}
              </p>
              <button
                className="cursor-pointer animate-[var(--animate-startbtn)] main-btn bg-white text-greentxt w-fit p-2
             rounded-xl text-base lg:text-xl font-semibold "
              >
                {t("hero.button")}
              </button>
            </div>
          </div>
          <div className="   h-[90%] w-full  lg:w-[60%]">
            <img
              src="/images/hero.webp"
              className=" w-full h-full object-contain max-h-[97.5%]"
            />
          </div>
        </div>
        <a
          href="#about"
          className="flex flex-col justify-center items-center    animate-[var(--animate-updown)]
        gap-1 duration-300 m-auto h-[25%] lg:absolute left-[50%] bottom-0"
        >
          <img src="/images/scroll-to.svg" className="w-5 " alt="Scroll Icon" />
          <div className="text-gray-200 font-semibold w-[60px] text-center text-sm">
            {t("more")}
          </div>
        </a>
      </div>
    </div>
  );
}

export default Hero;
