
import { useTranslation } from "react-i18next";
import Servicecard from "../Servicecard";
type Service = {
  title: string;
  desc: string;
  img: string;
  details: string;
};

function Servicessec() {
  const { t } = useTranslation();
    const servicesdata = t("servicescard", {
      returnObjects: true,
    }) as Service[];
    console.log(servicesdata);
  return (
    <div className="Servicessec p-2 w-[95%] m-auto mt-9" id="servicessec">
      <div className="section-title text-center mb-12">
        <h5 className="text-3xl font-bold mb-4">{t("coreServices")}</h5>
        <p className="text-xl max-w-2xl mx-auto">{t("coreServicesDesc")}</p>
      </div>
      <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(250px,1fr))] my-5">
 
        {Array.isArray(servicesdata) &&servicesdata.map((ele, idx) => {
          return (
            <Servicecard
              title={ele.title}
              desc={ele.desc}
              img={ele.img}
              details={ele.details}
              key={idx}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Servicessec