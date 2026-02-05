import { useTranslation } from "react-i18next";
import UseGlobalFetch from "../UseGlobalFetch/UseGlobalFetch";
import headerBurgerMenuIco from "/assets/img/header/headerBurgerMenu/header-burgerMenu-ico.svg";
import headerBurgerMenuClose from "/assets/img/header/headerBurgerMenu/header-burgerMenu-close-ico.svg";
import { getMultiLang as ml } from "../../components/Language/translation/Multilang.js";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Burgermenu(params) {
  const [t, i18n] = useTranslation("translation");
  const { data } = UseGlobalFetch();
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);
  return (
    <>
      <button onClick={toggleMenu} className="burger-hide lg:flex outline-none">
        <img className="max-w-[3rem]" src={headerBurgerMenuIco} alt="ico" />
      </button>
      {open && (
        <div onClick={closeMenu} className="fixed inset-0 bg-black/40 z-1000" />
      )}
      <div
        className={`
          fixed top-0 left-0 w-full bg-[#ffffff]
          p-[2rem] flex flex-col gap-[2rem]
          z-[1050] transition-transform duration-300
          text-[2rem]
          ${open ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <button className="flex justify-end" onClick={closeMenu}>
          <img src={headerBurgerMenuClose} className="max-w-[3rem]" alt="ico" />
        </button>

        <div className="flex flex-col justify-center items-center gap-[3rem]">
          {data?.header?.headerLinks &&
            data?.header?.headerLinks?.map((item, index) => {
              return (
                <NavLink
                  className="text-[#002755] text-[1.8rem]"
                  key={item.id || index}
                  to={item?.to}
                  onClick={closeMenu}
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
      </div>
    </>
  );
}
export default Burgermenu;
