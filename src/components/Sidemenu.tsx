import { t } from "i18next";
import {  type RefObject } from "react";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router";
import { AccordionDemo } from "./Accordions";

function Sidemenu({
  open,
  setopen,
  sideRef,
}: {
  open: boolean;
  setopen: (status: boolean) => void;
  sideRef: RefObject<HTMLDivElement | null>;
}) {
  return (
    open && (
      <div
        ref={sideRef}
        className="sidemenu bg-white w-[90%]  sm:w-[70%] min-h-screen absolute ltr:left-0 max-w-[360px] top-0 z-10 p-3"
      >
        <button
          onClick={() => setopen(false)}
          className="text-greentxt p-2 rounded-2xl bg-gray-100 mt-2 cursor-pointer hover:scale-115 duration-200
         hover:bg-gray-200 rtl:float-left ltr:float-right w-fit"
        >
          <IoClose className="text-xl" />
        </button>
        <ul className=" text-gray-700 gap-1 font-semibold  text-base lg:text-xl flex flex-col mt-11 px-2-">
          <li className="py-[20px] cursor-pointer border-b-1 border-b-gray-100 border-b-solid">
            <NavLink to="/" className="flex gap-1 items-center ">
              <span>{t("nav.home")}</span>
            </NavLink>
          </li>

          <li className="border-b-1 border-b-gray-100 border-b-solid">
            <AccordionDemo
              links={t("services.links", { returnObjects: true }) as string[]}
              title={t("services.title")}
              list={t("services.list", { returnObjects: true }) as string[]}
            />
          </li>

    
          <li className="border-b-1 border-b-gray-100 border-b-solid">
            <AccordionDemo
              title={t("companies.title")}
              list={t("companies.list", { returnObjects: true }) as string[]}
            />
          </li>

  

          <li className="py-[20px] cursor-pointer border-b-1 border-b-gray-100 border-b-solid text-gray-700">
            <NavLink to="/contact">{t("nav.contact")}</NavLink>
          </li>
        </ul>
      </div>
    )
  );
}

export default Sidemenu;
