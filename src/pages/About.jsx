import { useTranslation } from "react-i18next";
import { getMultiLang as ml } from "../components/Language/translation/Multilang.js";
import AboutOurGoal from "../components/Sections/About/AboutOurGoal.jsx";
import AboutSectionAboutUs from "../components/Sections/About/AboutSectionAboutUs.jsx";
import AboutValues from "../components/Sections/About/AboutValues.jsx";
import UseGlobalFetch from "../components/UseGlobalFetch/UseGlobalFetch.jsx";
function About() {
  const { data } = UseGlobalFetch();
  const { i18n, t } = useTranslation();
  return (
    <>
      <main>
        <section>
          {data?.about && (
            <AboutSectionAboutUs
              title={ml(
                data?.about?.title_az || "",
                data?.about?.title_ru || "",
                data?.about?.title_en || "",
              )}
              aboutBanner={data?.about?.banner}
              aboutBannerAlt={data?.about?.alt}
              text={ml(
                data?.about?.text_az || "",
                data?.about?.text_ru || "",
                data?.about?.text_en || "",
              )}
            />
          )}
        </section>

        <section className="bg-[#F4F6F6]">
          {data?.about && (
            <AboutOurGoal
              title={ml(
                data?.about?.title2_az || "",
                data?.about?.title2_ru || "",
                data?.about?.title2_en || "",
              )}
              text={ml(
                data?.about?.text2_az || "",
                data?.about?.text2_ru || "",
                data?.about?.text2_en || "",
              )}
              dataCard={data?.about?.cards}
            />
          )}
        </section>

        {/* <section>
          {data?.about && (
            <AboutValues
              title={ml(
                data?.about?.title3_az || "",
                data?.about?.title3_ru || "",
                data?.about?.title3_en || "",
              )}
              text={ml(
                data?.about.text3_az || "",
                data?.about.text3_ru || "",
                data?.about.text3_en || "",
              )}
              swiperTitle={data?.about.title4_az}
              swiperText={data?.about.text4_az}
              swiperImg={data?.about?.aboutImg}
              swiperImgAlt={data?.about?.aboutImgAlt}
            />
          )}
        </section> */}
      </main>
    </>
  );
}
export default About;
