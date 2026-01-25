import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function Lang({ toggle, swichLang }) {
  const { i18n } = useTranslation();
  const curretLang = i18n.language ? i18n.language.split("-")[0] : "az";

  useEffect(() => {
    if (localStorage.getItem("i18nextLng") !== curretLang) {
      localStorage.setItem("i18nextLng", curretLang);
    }
  }, [curretLang]);
  return (
    <>
      <div className="relative text-black">
        <div className="flex items-center cursor-pointer" onClick={toggle}>
          <button
            className="text-[#ffffff] lowercase text-[1.4rem]"
            name="button"
            type="button"
          >
            {curretLang} {/* Отображение текущего языка */}
          </button>
        </div>
        {swichLang} {/* Элемент для переключения языка */}
      </div>
    </>
  );
}
export default Lang;
