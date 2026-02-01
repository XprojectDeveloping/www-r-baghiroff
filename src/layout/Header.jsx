import UseGlobalFetch from "../components/UseGlobalFetch/UseGlobalFetch.jsx";
import langArrow2 from "assets/img/header/langArrow/arrow-ico2.svg";
import Lang from "../components/Language/Lang.jsx";
import { getMultiLang as ml } from "../components/Language/translation/Multilang.js";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import Burgermenu from "../components/Burgermenu/Burgermenu.jsx";
function Header() {
  const [t, i18n] = useTranslation("translation");
  const [open, setOpen] = useState(false);
  const langs = ["az", "ru", "en"];
  const { data } = UseGlobalFetch();

  const changeLang = async (lang) => {
    await i18n.changeLanguage(lang);
    setOpen(false);
  };

  const filteredLang = (lang = "az") => {
    return lang != localStorage.getItem("i18nextLng");
  };

  const langFilter = langs?.filter(filteredLang);

  const [scroll, setScroll] = useState();
  const SCROLL_Y = 100;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > SCROLL_Y) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header
        className={`bg-[#F4F6F6] ${scroll ? "fixed top-0 left-0 right-0 z-[2000]" : ""}`}
      >
        <div
          className={`max-w-[1200px] m-auto py-[3rem] md:py-[2.5rem] lg:px-[4rem] md:px-[4rem] sm:px-[2rem] xs:px-[1.8rem] transition_css flex justify-between items-center ${scroll ? "!py-[2rem]" : ""}`}
        >
          <div className="">
            <Link to="/">
              <img
                className="max-w-[16rem] md:max-w-[14rem] sm:max-w-[13rem]"
                src={data?.header?.headerLogo?.src}
                alt={data?.header?.headerLogo?.alt}
              />
            </Link>
          </div>
          <div className="flex gap-[3.2rem] lg:hidden">
            {data?.header?.headerLinks &&
              data?.header?.headerLinks?.map((item, index) => {
                return (
                  <NavLink
                    className="text-[#002755] text-[1.4rem]"
                    key={item.id || index}
                    to={item?.to}
                  >
                    {ml(
                      item?.link_az || "",
                      item?.link_ru || "",
                      item?.link_en || "",
                    )}
                  </NavLink>
                );
              })}
          </div>
          <div className="flex items-center gap-[3.2rem] lg:gap-[1.3rem]">
            <div className="bg-[#EAEDED] p-[8px] cursor-pointer">
              <img
                src={data?.header?.headerSearchIco?.src}
                alt={data?.header?.headerSearchIco?.alt}
              />
            </div>
            <div className="bg-[#EAEDED] py-[6px] px-[19px]">
              <Lang
                toggle={() => setOpen(!open)}
                swichLang={
                  open && (
                    <div className="absolute mt-6 left-[-20px] top-8 w-[80px] h-[50px] flex flex-col items-center">
                      {langFilter?.map((item, index) => {
                        return (
                          <button
                            onClick={() => changeLang(item)}
                            name="button"
                            type="button"
                            className="text-[#002755] z-[200] text-[1.4rem] font-normal py-[7px] px-[19px] transition_css hover:bg-gray-200 transitions bg-[#ffffff] flex items-center gap-[8px]"
                            key={item.id || index}
                          >
                            {item}
                            <img className="max-w-[2rem]" src={langArrow2} />
                          </button>
                        );
                      })}
                      ы
                    </div>
                  )
                }
              />
            </div>
            <div className="bg-[#EAEDED]">
              <Burgermenu />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
