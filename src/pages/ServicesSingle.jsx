import { useTranslation } from "react-i18next";
import UseGlobalFetch from "../components/UseGlobalFetch/UseGlobalFetch";
import { getMultiLang as ml } from "../components/Language/translation/Multilang.js";
import BannerImg from "/assets/img/body/servicesSingle/banner.png";
import ArrowImg from "/assets/img/body/servicesSingle/arrow.svg";
import LinkImg from "/assets/img/body/services/link-ico.svg";
import CardBgImg from "/assets/img/body/services/card-bg-img.svg";
import ContactForm from "../components/Form/ContactForm";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function ServicesSingle() {
  const { i18n, t } = useTranslation();
  const { data } = UseGlobalFetch();

  return (
    <>
      <main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <section className="max-w-[1200px] m-auto lg:px-[4rem] md:px-[2rem] sm:px-[1.5rem]">
            <div className="text-left my-[8rem] lg:my-[6rem] md:my-[3rem] sm:my-[2.5rem]">
              <h3 className="text-[4.8rem] lg:text-[3.8rem] md:text-[2.8rem] sm:text-[1.8rem]  text-[#002755] font-bold">
                {ml(
                  data?.services?.serviceSingle?.title_az || "",
                  data?.services?.serviceSingle?.title_ru || "",
                  data?.services?.serviceSingle?.title_en || "",
                )}
              </h3>

              <div className="mt-[4rem] lg:mt-[2rem]">
                <img src={BannerImg} alt={data?.services?.serviceSingle?.alt} />
              </div>
            </div>
          </section>

          <section className="max-w-[1200px] m-auto lg:px-[4rem] md:px-[2rem] sm:px-[1.5rem]">
            <div className="flex flex-row lg:flex-col gap-[2.4rem] mb-[8rem] lg:mb-[6rem] md:mb-[3rem] sm:mb-[2.5rem]">
              <div className="flex flex-col gap-[3rem] lg:gap-[2rem]">
                <p className="text-[1.6rem] lg:text-[1.3rem] text-[#011E41] font-normal">
                  {ml(
                    data?.services?.serviceSingle?.text_az || "",
                    data?.services?.serviceSingle?.text_en || "",
                    data?.services?.serviceSingle?.text_ru || "",
                  )}
                </p>

                <p className="text-[1.6rem] lg:text-[1.3rem] text-[#011E41] font-normal">
                  {ml(
                    data?.services?.serviceSingle?.text_az || "",
                    data?.services?.serviceSingle?.text_en || "",
                    data?.services?.serviceSingle?.text_ru || "",
                  )}
                </p>

                <p className="text-[1.6rem] lg:text-[1.3rem] text-[#011E41] font-normal">
                  {ml(
                    data?.services?.serviceSingle?.text_az || "",
                    data?.services?.serviceSingle?.text_en || "",
                    data?.services?.serviceSingle?.text_ru || "",
                  )}
                </p>
              </div>

              <div>
                <div className="p-[4rem] lg:p-[3.5rem] md:p-[2.5rem] bg-[#F4F6F6]">
                  <h3 className="text-[3.8rem] lg:text-[3.8rem] md:text-[2.8rem] sm:text-[1.8rem]  text-[#002755] font-bold mb-[2rem]">
                    {ml(
                      data?.contact?.title2_az || "",
                      data?.contact?.title2_ru || "",
                      data?.contact?.title2_en || "",
                    )}
                  </h3>

                  <p className="text-[1.4rem] lg:text-[1.2rem] text-[#002755] font-normal mb-[2.2rem]">
                    {ml(
                      data?.contact?.text2_az || "",
                      data?.contact?.text2_ru || "",
                      data?.contact?.text2_en || "",
                    )}
                  </p>
                  <ContactForm />
                </div>
              </div>
            </div>
          </section>

          <section className="max-w-[1200px] m-auto lg:px-[4rem] md:px-[2rem] sm:px-[1.5rem]">
            <h3 className="text-[4.8rem] lg:text-[3.8rem] md:text-[2.8rem] sm:text-[1.8rem]  text-[#002755] font-bold">
              {ml(
                data?.services?.serviceSingle?.cardTitle_az || "",
                data?.services?.serviceSingle?.cardTitle_ru || "",
                data?.services?.serviceSingle?.cardTitle_en || "",
              )}
            </h3>

            <div className="grid grid-cols-12 lg:grid-cols-6 md:grid-cols-3 justify-center gap-[2.4rem] mt-[4rem] lg:mt-[2rem] mb-[8rem] lg:mb-[6rem] md:mb-[3rem] sm:mb-[2.5rem]">
              {data?.services?.serviceSingle?.cards &&
                data?.services?.serviceSingle?.cards?.map((item) => {
                  return (
                    <div className="col-span-3 bg-[#002755] p-[4rem]">
                      <h3 className="mb-[2rem] text-[2.4rem] lg:text-[1.8rem] text-[#FFFFFF] font-semibold">
                        {ml(
                          item?.title_az || "",
                          item?.title_ru || "",
                          item?.title_en || "",
                        )}
                      </h3>

                      <p className="text-[1.2rem] text-[#FFFFFF]">
                        {ml(
                          item?.text_az || "",
                          item?.text_ru || "",
                          item?.text_en || "",
                        )}
                      </p>
                    </div>
                  );
                })}
            </div>
          </section>

          <section className="max-w-[1200px] m-auto lg:px-[4rem] md:px-[2rem] sm:px-[1.5rem]">
            <h3 className="text-[4.8rem] lg:text-[3.7rem] md:text-[2.8rem] sm:text-[1.8rem] text-[#002755] font-bold">
              {ml(
                data?.services?.serviceSingle?.cardTitle2_az || "",
                data?.services?.serviceSingle?.cardTitle2_ru || "",
                data?.services?.serviceSingle?.cardTitle2_en || "",
              )}
            </h3>

            <div className="grid grid-cols-12 lg:grid-cols-6 md:grid-cols-3 justify-center gap-[2.4rem] mt-[4rem] lg:mt-[2rem] mb-[8rem] lg:mb-[6rem] md:mb-[3rem]">
              {data?.services?.serviceSingle?.cards2 &&
                data?.services?.serviceSingle?.cards2?.map((item) => {
                  return (
                    <div className="col-span-3 bg-[#F4F6F6] p-[4rem] text-center">
                      <h3 className="mb-[2rem] text-[4.8rem] lg:text-[3.8rem] md:text-[2.8rem] text-[#002755] font-bold">
                        {item?.title_number}
                      </h3>

                      <p className="text-[1.2rem] text-[#422f2f]">
                        {ml(
                          item?.text_az || "",
                          item?.text_ru || "",
                          item?.text_en || "",
                        )}
                      </p>
                    </div>
                  );
                })}
            </div>
          </section>

          <section className="bg-[#F4F6F6]">
            <div className="max-w-[1200px] m-auto lg:px-[4rem] md:px-[2rem] sm:px-[1.5rem]">
              <div className="flex flex-row justify-between items-center py-[8rem] lg:py-[6rem] md:py-[3rem] sm:py-[2.5rem]">
                <div>
                  <h3 className="text-[4.8rem] lg:text-[3.8rem] md:text-[2.8rem] sm:text-[1.8rem] text-[#011E41] font-bold">
                    {ml(
                      data?.services?.serviceSingle?.title2_az,
                      data?.services?.serviceSingle?.title2_ru,
                      data?.services?.serviceSingle?.title2_en,
                    )}
                  </h3>
                </div>

                <div>
                  <Link
                    className="bg-[#011E41] py-[1.3rem] lg:py-[1.2rem] px-[7rem] md:px-[3rem] text-[1.4rem] lg:text-[1.2rem] font-normal text-[#FFFFFF] flex flex-row items-center gap-[1.2rem] hover:bg-[#03A0E2]"
                    to={"/services"}
                  >
                    {ml(
                      data?.services?.serviceSingle?.button_az,
                      data?.services?.serviceSingle?.button_ru,
                      data?.services?.serviceSingle?.button_en,
                    )}

                    <img
                      className="max-w-[2.4rem]"
                      src={ArrowImg}
                      alt={data?.services?.serviceSingle?.alt2}
                    />
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-12 lg:grid-cols-1 gap-[2.4rem] pb-[8rem] lg:pb-[6rem] md:pb-[3rem] sm:pb-[2.5rem]">
                {data?.services?.servicesCards &&
                  data?.services?.servicesCards
                    ?.slice(0, 3)
                    ?.map((item, index) => {
                      return (
                        <div
                          key={item.id || index}
                          className={`servis-card col-span-4 bg-[#FFFFFF] p-[4rem] lg:p-[2rem] h-full flex flex-col justify-between gap-[4rem] bg-cover`}
                          style={{ backgroundImage: `url(${CardBgImg})` }}
                        >
                          <h3 className="text-[2.4rem] lg:text-[1.4rem] font-bold text-[#011E41]">
                            {ml(
                              item?.title_az || "",
                              item?.title_ru || "",
                              item?.title_en || "",
                            )}
                          </h3>

                          <p className="text-[1.4rem] lg:text-[1.2rem] text-[#011E41]">
                            {ml(
                              item.text_az || "",
                              item.text_ru || "",
                              item.text_en || "",
                            )}
                          </p>

                          <Link
                            className="flex items-center gap-[1.2rem] text-[1.6rem] lg:text-[1.3rem] text-[#003CA5]"
                            to={`/services`}
                          >
                            {ml(
                              item?.link_az || "",
                              item?.link_ru || "",
                              item?.link_en || "",
                            )}

                            <img
                              className="max-w-[2.4rem]"
                              src={LinkImg}
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
export default ServicesSingle;
