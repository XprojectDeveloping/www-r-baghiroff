function HomePageBanner({
  bannerImg,
  alt,
  text,
  upLogoImg,
  upLogoAlt,
  title,
  text2,
}) {
  return (
    <>
      <div className="relative w-full h-full overflow-hidden">
        <div className="banner-bg">
          <img
            className="s-img w-full h-[60rem] lg:h-[50rem] md:h-[45rem] sm:h-[35rem] xs:h-[20rem] object-cover"
            src={bannerImg}
            alt={alt}
          />

          <h1 className="text-[#FFFFFF] text-[6rem] lg:text-[4rem] md:text-[3.5rem] sm:text-[2.8rem] font-bold absolute inset-0 flex items-center justify-center w-full h-full">
            {text}
          </h1>
        </div>
      </div>
      <div className="relative max-w-[1200px] m-auto lg:px-[4rem] md:px-[2rem] sm:px-[1.8rem] my-[8rem] lg:my-[4rem] md:my-[2rem]">
        <div className="absolute -top-[19rem] right-10 ">
          <img
            className="max-w-[20rem] lg:hidden"
            src={upLogoImg}
            alt={upLogoAlt}
          />
        </div>

        <div>
          <h2 className="text-[#011E41] text-[4.8rem] lg:text-[3.8rem] md:text-[3rem] sm:text-[2.5rem] font-bold mb-[4rem] lg:mb-[2rem]">
            {title}
          </h2>
          <p className="text-[#011E41] text-[1.4rem] lg:text-[1.3rem] md:text-[1.2rem] font-normal">
            {text2}
          </p>
        </div>
      </div>
    </>
  );
}
export default HomePageBanner;
