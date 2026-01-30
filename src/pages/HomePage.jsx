import UseGlobalFetch from "../components/UseGlobalFetch/UseGlobalFetch.jsx";
import HomePageBanner from "../components/Sections/HomePage/HomePageBanner.jsx";
import { getMultiLang as ml } from "../components/Language/translation/Multilang.js";
import HomePageServices from "../components/Sections/HomePage/HomePageServices.jsx";
import HomePageAbout from "../components/Sections/HomePage/HomePageAbout.jsx";
import HomePageAboutTwo from "../components/Sections/HomePage/HomePageAboutTwo.jsx";
import HomePageContact from "../components/Sections/HomePage/HomePageContact.jsx";
import { useTranslation } from "react-i18next";
function HomePage() {
  const { data } = UseGlobalFetch();
  const { i18n, t } = useTranslation();

  return (
    <>
      <main>
        <section>
          {data?.homeBanner && (
            <HomePageBanner
              bannerImg={data?.homeBanner?.src}
              alt={data?.homeBanner?.alt}
              text={ml(
                data?.homeBanner?.title_az || "",
                data?.homeBanner?.title_ru || "",
                data?.homeBanner?.title_en || "",
              )}
              upLogoImg={data?.homeBanner?.upLogo}
              title={ml(
                data?.homeBanner.title2_az || "",
                data?.homeBanner.title2_ru || "",
                data?.homeBanner.title2_en || "",
              )}
              text2={ml(
                data?.homeBanner?.text_az || "",
                data?.homeBanner?.text_ru || "",
                data?.homeBanner?.text_en || "",
              )}
            />
          )}
        </section>

        <section className="bg-[#002756]">
          {data?.homePageAbout && (
            <HomePageServices
              dataServices={data?.services?.servicesCards}
              title={ml(
                data?.services?.title_az || "",
                data?.services?.title_ru || "",
                data?.services?.title_en || "",
              )}
              text={ml(
                data?.services?.text_az || "",
                data?.services?.text_ru || "",
                data?.services?.text_en || "",
              )}
            />
          )}
        </section>

        <section>
          {data?.contact && (
            <HomePageContact
              title={ml(
                data?.contact?.title2_az || "",
                data?.contact?.title2_ru || "",
                data?.contact?.title2_en || "",
              )}
              text={ml(
                data?.contact?.text2_az || "",
                data?.contact?.text2_ru || "",
                data?.contact?.text2_en || "",
              )}
              img={data?.contact?.src}
            />
          )}
        </section>

        <section>
          {data?.homePageAbout && (
            <HomePageAbout
              title={ml(
                data?.homePageAbout.title_az || "",
                data?.homePageAbout.title_ru || "",
                data?.homePageAbout.title_en || "",
              )}
              text={ml(
                data?.homePageAbout.text_az || "",
                data?.homePageAbout.text_ru || "",
                data?.homePageAbout.text_en || "",
              )}
              dataCard={data?.homePageAbout?.aboutCard1}
            />
          )}
        </section>

        <section>
          {data?.homePageAbout2 && (
            <HomePageAboutTwo
              title={ml(
                data?.homePageAbout2.title_az || "",
                data?.homePageAbout2.title_ru || "",
                data?.homePageAbout2.title_en || "",
              )}
              text={ml(
                data?.homePageAbout2.text_az || "",
                data?.homePageAbout2.text_ru || "",
                data?.homePageAbout2.text_en || "",
              )}
              dataCard={data?.homePageAbout2?.aboutCard2}
            />
          )}
        </section>
      </main>
    </>
  );
}
export default HomePage;
