function AboutSectionAboutUs({ title, aboutBanner, aboutBannerAlt, text }) {
  return (
    <>
      <div className="max-w-[1200px] m-auto lg:px-[4rem] md:px-[2rem] sm:px-[1.5rem]">
        <h1 className="text-center my-[4rem] lg:my-[2rem] md:my-[1.5rem] text-[4.8rem] lg:text-[3.8rem] md:text-[2.8rem] sm:text-[2.5rem] text-[#011E41] font-bold">
          {title}
        </h1>

        <div>
          <img src={aboutBanner} alt={aboutBannerAlt} />
        </div>

        <p className="max-w-[1000px] m-auto text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] sm:text-[1rem] my-[8rem] lg:my-[6rem] md:my-[3rem] sm:my-[2rem] text-[#002755] font-normal text-center">
          {text}
        </p>
      </div>
    </>
  );
}
export default AboutSectionAboutUs;
