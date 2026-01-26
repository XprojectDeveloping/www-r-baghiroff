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
            className="w-full h-full object-cover"
            src={bannerImg}
            alt={alt}
          />

          <h1 className="text-[#FFFFFF] text-[8rem] font-bold absolute inset-0 flex items-center justify-center w-full h-full">
            {text}
          </h1>
        </div>
      </div>
      <div className="relative max-w-[1200px] m-auto my-[8rem]">
        <div className="absolute -top-[19rem] right-10 ">
          <img className="max-w-[20rem]" src={upLogoImg} alt={upLogoAlt} />
        </div>

        <div>
          <h2 className="text-[#011E41] text-[4.8rem] font-bold mb-[4rem]">
            {title}
          </h2>
          <p className="text-[#011E41] text-[1.4rem] font-normal">{text2}</p>
        </div>
      </div>
    </>
  );
}
export default HomePageBanner;
