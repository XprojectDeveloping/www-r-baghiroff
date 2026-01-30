import { Link } from "react-router-dom";
import { getMultiLang as ml } from "../../Language/translation/Multilang.js";
function HomePageServices({ title, text, dataServices }) {
  return (
    <>
      <div className="max-w-[1200px] m-auto lg:px-[4rem]">
        <div className="pt-[6.2rem] lg:pt-[4.2rem]">
          <h2 className="text-[4.8rem] lg:text-[3.8rem] text-[#FFFFFF] fonts-bold pb-[4rem] lg:pb-[2rem]">
            {title}
          </h2>

          <p className="text-[1.4rem] text-[#AAB5B8] font-normal">{text}</p>
        </div>

        <div className="grid grid-cols-12 lg:grid-cols-8 items-center gap-[2.4rem] py-[6.2rem] lg:py-[4.2rem]">
          {dataServices &&
            dataServices?.map((item, index) => {
              return (
                <div
                  className="servis-card col-span-4 bg-[#ffffff] p-[4rem] h-full flex flex-col justify-between gap-[4rem] bg-[url('./src/assets/img/body/services/card-bg-img.svg')] bg-cover"
                  key={item?.id || index}
                >
                  <h3 className="text-[2.4rem] lg:text-[1.7rem] font-bold text-[#011E41]">
                    {ml(
                      item?.title_az || "",
                      item?.title_ru || "",
                      item?.title_en || "",
                    )}
                  </h3>

                  <p className="text-[1.4rem] text-[#011E41]">
                    {ml(
                      item.text_az || "",
                      item.text_ru || "",
                      item.text_en || "",
                    )}
                  </p>

                  <Link
                    className="flex items-center gap-[1.2rem] text-[1.6rem] lg:text-[1.3rem] text-[#003CA5]"
                    to={"/services"}
                  >
                    {ml(
                      item?.link_az || "",
                      item?.link_ru || "",
                      item?.link_en || "",
                    )}

                    <img
                      className="max-w-[2.4rem]"
                      src={item?.linkIco}
                      alt="arrow"
                    />
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
export default HomePageServices;
