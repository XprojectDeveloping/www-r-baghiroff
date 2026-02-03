import { Link } from "react-router-dom";
import UseGlobalFetch from "../components/UseGlobalFetch/UseGlobalFetch";
import { getMultiLang as ml } from "../components/Language/translation/Multilang.js";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { toSlug } from "../components/ToSlug/ToSlug.js";
function Services() {
  const { data } = UseGlobalFetch();
  const { i18n, t } = useTranslation();
  return (
    <>
      <main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <section>
            <div className="max-w-[1200px] m-auto lg:px-[4rem] md:px-[2rem] sm:px-[1.5rem] text-center my-[8rem] lg:my-[6rem] md:my-[3rem] sm:my-[2.5rem]">
              <h3 className="mb-[4rem] lg:mb-[2rem] md:mb-[1.5rem] text-[4.8rem] lg:text-[3.8rem] md:text-[2.8rem] text-[#011E41] font-bold">
                {ml(
                  data?.services?.title_az || "",
                  data?.services?.title_ru || "",
                  data?.services?.title_en || "",
                )}
              </h3>

              <p className="text-[1.4rem] lg:text-[1.2rem] text-[#011E41]">
                {ml(
                  data?.services?.text_az || "",
                  data?.services?.text_ru || "",
                  data?.services?.text_en || "",
                )}
              </p>
            </div>
          </section>

          <section>
            <div className="max-w-[1200px] lg:px-[4rem] md:px-[2rem] sm:px-[1.5rem] m-auto mb-[8rem] lg:mb-[6rem] md:mb-[3rem] sm:mb-[2.5rem]">
              <div className="grid grid-cols-12 lg:grid-cols-8 md:grid-cols-6 gap-[2.4rem]">
                {data?.services?.servicesCards &&
                  data?.services?.servicesCards.map((item, index) => {
                    const item_slug = toSlug(item.title_en);
                    return (
                      <div
                        key={item.id || index}
                        className="servis-card col-span-4 md:col-span-6 bg-[#F4F6F6] p-[4rem] md:p-[2rem] h-full flex flex-col justify-between gap-[4rem]"
                        style={{
                          backgroundImage: `url(/assets/img/body/services/card-bg-img.svg)`,
                        }}
                      >
                        <h3 className="text-[2.4rem] md:text-[1.4rem] font-bold text-[#011E41]">
                          {ml(
                            item?.title_az || "",
                            item?.title_ru || "",
                            item?.title_en || "",
                          )}
                        </h3>

                        <p className="text-[1.4rem] md:text-[1.2rem] text-[#011E41]">
                          {ml(
                            item.text_az || "",
                            item.text_ru || "",
                            item.text_en || "",
                          )}
                        </p>

                        <Link
                          className="flex items-center gap-[1.2rem] text-[1.6rem] md:text-[1.3rem] text-[#003CA5]"
                          to={`/service/${item.id}/${item_slug}`}
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
        </motion.div>
      </main>
    </>
  );
}
export default Services;
