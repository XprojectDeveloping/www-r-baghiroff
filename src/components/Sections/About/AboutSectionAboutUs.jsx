function AboutSectionAboutUs({ title, aboutBanner, aboutBannerAlt, text }) {
  return (
    <>
      <div className="max-w-[1200px] m-auto">
        <h1 className="text-center my-[8rem] text-[4.8rem] text-[#011E41] font-bold">
          {title}
        </h1>

        <div>
          <img src={aboutBanner} alt={aboutBannerAlt} />
        </div>

        <p className="max-w-[1000px] m-auto text-[1.6rem] my-[8rem] text-[#002755] font-normal text-center">
          {text}
        </p>
      </div>
    </>
  );
}
export default AboutSectionAboutUs;
