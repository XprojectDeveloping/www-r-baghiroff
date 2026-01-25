import { useState } from "react";
import Lang from "../components/Language/Lang.jsx";
import { useTranslation } from "react-i18next";
import { getMultiLang as ml } from "../components/Language/translation/Multilang.js";
import UseGlobalFetch from "../components/UseGlobalFetch/UseGlobalFetch.jsx";
function Header() {
  const [t, i18n] = useTranslation("translation");
  const [open, setOpen] = useState(false);
  const langs = ["az", "ru", "en"];
  const { data } = UseGlobalFetch();
  console.log(data);

  const changeLang = async (lang) => {
    await i18n.changeLanguage(lang);
    setOpen(false);
  };

  const filteredLang = (lang = "az") => {
    return lang != localStorage.getItem("i18nextLng");
  };

  const langFilter = langs?.filter(filteredLang);
  return (
    <>
      <header>
        <Lang
          toggle={() => setOpen(!open)}
          swichLang={
            open && (
              <div className="absolute mt-6 left-[-2px] top-10 h-[50px] flex flex-col items-center bg-white shadow-lg rounded-md border border-gray-300">
                {langFilter?.map((item, index) => {
                  return (
                    <button
                      onClick={() => changeLang(item)}
                      name="button"
                      type="button"
                      className="text-[#000] z-[200] text-[1.2rem] p-[1rem] hover:bg-gray-200 transitions bg-[#f9f9f9] rounded-md w-full text-center"
                      key={item.id || index}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            )
          }
        />
      </header>
    </>
  );
}
export default Header;
