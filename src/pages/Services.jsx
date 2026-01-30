import { Link } from "react-router-dom";
import UseGlobalFetch from "../components/UseGlobalFetch/UseGlobalFetch";
import { getMultiLang as ml } from "../components/Language/translation/Multilang.js";
import { useTranslation } from "react-i18next";

function Services() {
  const { data } = UseGlobalFetch();
  const { i18n, t } = useTranslation();
  return (
    <>
      <section>
        <div className="max-w-[1200px] m-auto text-center my-[8rem]">
          <h3 className="mb-[4rem] text-[4.8rem] text-[#011E41] font-bold">
            {ml(
              data?.services?.title_az || "",
              data?.services?.title_ru || "",
              data?.services?.title_en || "",
            )}
          </h3>

          <p className="text-[1.4rem] text-[#011E41]">
            {ml(
              data?.services?.text_az || "",
              data?.services?.text_ru || "",
              data?.services?.text_en || "",
            )}
          </p>
        </div>

        <div className="max-w-[1200px] m-auto mb-[8rem]">
          <div className="grid grid-cols-12 gap-[2.4rem]">
            {data?.services?.servicesCards &&
              data?.services?.servicesCards.map((item, index) => {
                return (
                  <div
                    key={item.id || index}
                    className="servis-card col-span-4 bg-[#F4F6F6] p-[4rem] h-full flex flex-col justify-between gap-[4rem]"
                    style={{
                      backgroundImage: `url(./src/assets/img/body/services/card-bg-img.svg)`,
                    }}
                  >
                    <h3 className="text-[2.4rem] font-bold text-[#011E41]">
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
                      className="flex items-center gap-[1.2rem] text-[1.6rem] text-[#003CA5]"
                      to={`/services/s/:id/:slug`}
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
      </section>
    </>
  );
}
export default Services;
