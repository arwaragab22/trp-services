import { useTranslation } from "react-i18next";

function AboutSection() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="about-section container m-auto w-[100%] lg:w-[90%] scroll-mt-[158px] "
    >
      <div className="container flex flex-col lg:flex-row py-10 justify-between items-center px-3 ">
        <div className="about-content ">
          <h1 className="text-greentxt text-xl lg:text-4xl font-bold mb-2">
            {t("about-sec.title")}
          </h1>
          <div className="text-base md:text-2xl">
            {" "}
            <p className="text-greytxt leading-10">
              {t("about-sec.paragraph1")}
            </p>
            <p className="text-greytxt  leading-10">
              {t("about-sec.paragraph2")}
            </p>
            <p className="text-greytxt  leading-10">
              {t("about-sec.paragraph3")}
            </p>
          </div>
          <div className="mt-3 max-w-[600px] text-xl lg:text-3xl  text-greytxtbold leading-10">
            <p className="leading-10">
              <span className="text-greentxt text-xl lg:text-3xl  font-semibold">
                {t("about-sec.highlightTitle")}
              </span>{" "}
              {t("about-sec.highlightText")}
            </p>
          </div>
        </div>
        <div className="about-img">
          <img
            src="/images/who_we.png"
            alt="who we"
            className="  heigt-auto  lg:w-auto m-auto w-[100%]lg:min-w-[280px]"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
