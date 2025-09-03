import { NavLink } from "react-router";
import "../../index.css";
import { FaAngleDown } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import i18n from "../../i18n";

import { t } from "i18next";
import { MdOutlineMenu } from "react-icons/md";
import Sidemenu from "../Sidemenu";
import Menuoflink from "../Menuoflink";
type lang = "ar" | "en";
function Header() {
  const [openside, setopenside] = useState(false);
  const refheader = useRef<HTMLDivElement>(null);
  const [openmenulink, setopenmenulink] = useState<string | null>(null)
  const opensidemenu = (status: boolean) => {
    setopenside(status);
  }
  const changeLanguage = (lng: lang) => {
    if (lng == "ar") {
      i18n.changeLanguage(lng);
      document.documentElement.dir = "rtl";
      document.documentElement.lang = "ar";
    } else {
      i18n.changeLanguage(lng);
      document.documentElement.dir = "ltr";
      document.documentElement.lang = "en";
    }


  };
  const refside = useRef<HTMLDivElement>(null);
  const refmenuicon = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scrollpage = () => {
      if (window.scrollY > 40) {
        refheader?.current?.classList?.add("headermenuscroll");


      } else {
        refheader?.current?.classList.remove("headermenuscroll");

      }
    }
    const clickoutside = ((e: MouseEvent) => {
      console.log(e.target)
      if (
        refside?.current &&
        !refside?.current?.contains(e.target as Node) &&
        !refmenuicon?.current?.contains(e.target as Node)

      ) {
        setopenside(false);
      }
    });
    window.addEventListener("scroll", scrollpage);

    document.addEventListener("click", clickoutside);
    return () => {
      document.removeEventListener("click", clickoutside);
      window.removeEventListener("scroll", scrollpage);

    }
  }, []);

  return (
    <div ref={refheader} className=" bg-bgmain font-NotoSans h-[88px]">
      <nav className="flex justify-between  m-auto  items-center p-3">
        <div className="flex gap-6 justify-center items-center">
          <div
            ref={refmenuicon}
            className="menu-icon p-2 cursor-pointer "
            onClick={() => {
              opensidemenu(true);
            }}
          >
            <MdOutlineMenu className="lg:hidden text-white font-bold text-xl " />
          </div>
          <img
            src="images/logo.png"
            className="logo w-auto h-10  sm:h-14 md:h-16 lg:h-16"
          />
        </div>
        <div className="nav-info flex gap-4 h-full">
          <ul className=" hidden lg:flex text-white gap-5 font-semibold text-xl ">
            <li>
              <NavLink to="/" className={({ isActive }) =>
                `linknav ${isActive ? "active1" : ""}`
              }>
                <span>{t("nav.home")}</span>
              </NavLink>
            </li>

            <li
              className="relative"
              onMouseLeave={(e) => {
                setopenmenulink(null); const target = e.currentTarget as HTMLElement; // type assertion
                const t = target.querySelector("div");
                if (t) {

                  t.classList.remove("active1");

                }
              }}

              onMouseEnter={(e) => {
                setopenmenulink("services");
                const target = e.currentTarget as HTMLElement; // type assertion
                const t = target.querySelector("div");
                if (t) {

                  t.classList.add("active1");

                }
              }
              }
            >
              <NavLink
                to="#"
                className={({ isActive }) =>
                  `flex gap-1 items-center linknav cursor-pointer ${isActive || openmenulink === "services" ? "active1" : ""
                  }`
                }
              >
                <span>{t("nav.services")}</span>
                <FaAngleDown />
              </NavLink>
              {openmenulink === "services" && (
                <div className="absolute top-[33px] left-0 rtl:right-0 ltr:left-0 z-[40000]">
                  <Menuoflink
                    list={t("services.list", { returnObjects: true }) as string[]}
                    links={t("services.links", { returnObjects: true }) as string[]} onLinkClick={() => {
                      // نضيف الكلاس للعنصر الأساسي عند الضغط
                      setopenmenulink("services");
                    }}
                  />
                </div>
              )}
            </li>



            <li
              className="relative"
              onMouseLeave={(e) => {
                setopenmenulink(null); const target = e.currentTarget as HTMLElement; // type assertion
                const t = target.querySelector("div");
                if (t) {

                  t.classList.remove("active1");

                } }}

              onMouseEnter={(e) => {
                setopenmenulink("companies");
                const target = e.currentTarget as HTMLElement; // type assertion
                const t = target.querySelector("div");
                if (t) {

                  t.classList.add("active1");

                }
              }}
            >
              <div

                className="flex gap-1 items-center linknav cursor-pointer"
              >
                <span>{t("nav.companies")}</span>
                <FaAngleDown />
                {openmenulink === "companies" && (
                  <div className="absolute top-[33px] left-0 rtl:right-0 ltr:left-0 z-[40000]">

                    <Menuoflink

                      list={
                        t("companies.list", { returnObjects: true }) as string[]
                      }
                    />
                  </div>
                )}
              </div>
            </li>



            <li className="">
              <NavLink to="/contact" className={({ isActive }) =>
                `linknav ${isActive ? "active1" : ""}`
              }>
                {t("nav.contact")}
              </NavLink>
            </li>
          </ul>
          <div className="flex gap-2 ">
            <div className=" w-[1px] bg-greentxt"></div>
            {i18n.language == "ar" ? (
              <button
                className="text-white  p-1 rounded-sm cursor-pointer"
                onClick={() => {
                  changeLanguage("en");
                }}
              >
                English
              </button>
            ) : (
              <button
                className="text-white  p-1 rounded-sm cursor-pointer"
                onClick={() => {
                  changeLanguage("ar");
                }}
              >
                Arabic
              </button>
            )}
          </div>
        </div>
      </nav>
      <Sidemenu
        sideRef={refside}
        open={openside}
        setopen={setopenside}
      ></Sidemenu>
    </div>
  );
}

export default Header;
