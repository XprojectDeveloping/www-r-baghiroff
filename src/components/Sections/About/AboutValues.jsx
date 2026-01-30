function AboutValues({
  title,
  text,
  swiperTitle,
  swiperText,
  swiperImg,
  swiperImgAlt,
}) {
  return (
    <>
      <div className="max-w-[1200px] m-auto">
        <h3 className="mt-[8rem] mb-[4rem] text-[4.8rem] text-[#011E41] font-bold">
          {title}
        </h3>
        <p className="mb-[8rem] text-[1.4rem] text-[#011E41] font-normal">
          {text}
        </p>

        <div className="flex flex-row mb-[8rem]">
          <div className="bg-[#F4F6F6] p-[8rem] flex flex-col items-center justify-center w-[60%]">
            <h3 className="text-[2.4rem] text-[#002755] font-semibold mb-[2rem]">
              {swiperTitle}
            </h3>

            <p className="text-[1.2rem] text-[#002755] font-normal">
              {swiperText}
            </p>
          </div>

          <div>
            <img src={swiperImg} alt={swiperImgAlt} />
          </div>
        </div>
      </div>
    </>
  );
}
export default AboutValues;
