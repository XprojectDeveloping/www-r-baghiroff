import UseGlobalFetch from "../components/UseGlobalFetch/UseGlobalFetch.jsx";
import { getMultiLang as ml } from "../components/Language/translation/Multilang.js";
import { Link } from "react-router-dom";
function Footer() {
  const { data } = UseGlobalFetch();

  return (
    <>
      <footer className="bg-[#002755]">
        <div className="max-w-[1200px] m-auto lg:px-[4rem] py-[4rem] lg:py-[2rem] sm:py-[1.8rem] flex justify-between xs:flex-col xs:gap-[2rem] items-center">
          <div>
            <Link to={"/"}>
              <img
                className="max-w-[16rem] md:max-w-[14rem] sm:max-w-[13rem]"
                src={data?.footer?.footerLogo?.src}
                ы
                alt={data?.footer?.footerLogo?.alt}
              />
            </Link>
          </div>
          <div className="flex items-center gap-[2rem]">
            {data?.footer?.footerSocial &&
              data?.footer?.footerSocial?.map((item, index) => {
                return (
                  <Link key={index?.id || index} to={item?.to}>
                    <img src={item?.src} alt={item?.alt} />
                  </Link>
                );
              })}
          </div>
        </div>
        <div className="bg-[#003CA5]">
          <p className="text-center text-[#FFFFFF] text-[1.2rem] font-light py-[1.2rem]">
            {ml(
              data?.footer?.title2_az || "",
              data?.footer?.title2_ru || "",
              data?.footer?.title2_en || "",
            )}
          </p>
        </div>
      </footer>
    </>
  );
}
export default Footer;
