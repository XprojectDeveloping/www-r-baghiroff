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
            className="w-full h-[60rem] lg:h-[50rem] object-cover"
            src={bannerImg}
            alt={alt}
          />

          <h1 className="text-[#FFFFFF] text-[6rem] lg:text-[4rem] font-bold absolute inset-0 flex items-center justify-center w-full h-full">
            {text}
          </h1>
        </div>
      </div>
      <div className="relative max-w-[1200px] m-auto my-[8rem] lg:my-[4rem] lg:px-[4rem]">
        <div className="absolute -top-[19rem] right-10 ">
          <img
            className="max-w-[20rem] lg:hidden"
            src={upLogoImg}
            alt={upLogoAlt}
          />
        </div>

        <div>
          <h2 className="text-[#011E41] text-[4.8rem] lg:text-[3.8rem] lg:text-center font-bold mb-[4rem]">
            {title}
          </h2>
          <p className="text-[#011E41] text-[1.4rem] lg:text-[1.2rem] font-normal">
            {text2}
          </p>
        </div>
      </div>
    </>
  );
}
export default HomePageBanner;
