import UseGlobalFetch from "../components/UseGlobalFetch/UseGlobalFetch.jsx";
import HomePageBanner from "../components/Sections/HomePageBanner.jsx";
import { getMultiLang as ml } from "../components/Language/translation/Multilang.js";
import HomePageServices from "../components/Sections/HomePageServices.jsx";
function HomePage() {
  const { data } = UseGlobalFetch();
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
              title={ml(
                data?.services?.title_az || "",
                data?.services?.title_ru || "",
                data?.services?.title_en || "",
              )}
            />
          )}
        </section>
      </main>
    </>
  );
}
export default HomePage;
