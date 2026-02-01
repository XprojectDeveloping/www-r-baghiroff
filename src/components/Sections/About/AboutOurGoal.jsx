import { getMultiLang as ml } from "../../Language/translation/Multilang.js";
function AboutOurGoal({ title, text, dataCard }) {
  return (
    <>
      <div className="max-w-[1200px] m-auto lg:px-[4rem] md:px-[2rem] sm:px-[1.5rem]">
        <h3 className="pt-[8rem] lg:pt-[6rem] md:pt-[3rem] sm:pt-[2.5rem] text-[4.8rem] lg:text-[3.8rem] md:text-[2.8rem] sm:text-[1.8rem] text-[#011E41] font-bold">
          {title}
        </h3>
        <p className="pt-[4rem] lg:pt-[2rem] sm:pt-[1.8rem] text-[1.4rem] lg:text-[1.2rem] sm:text-[1rem] text-[#011E41] font-normal">
          {text}
        </p>

        <div className="grid grid-cols-12 lg:grid-cols-6 md:grid-cols-3 gap-[2.4rem] py-[8rem] lg:py-[6rem] md:py-[3rem] sm:py-[2.5rem]">
          {dataCard &&
            dataCard?.map((item, index) => {
              return (
                <div
                  key={item?.id || index}
                  className="col-span-3 bg-[#002755] p-[4rem] lg:p-[2.5rem] flex flex-col gap-[2rem]"
                >
                  <div>
                    <img
                      className="max-w-[4rem]"
                      src={item?.src}
                      alt={item?.alt}
                    />
                  </div>

                  <h4 className="text-[2rem] lg:text-[1.5rem] text-[#FFFFFF] font-semibold">
                    {ml(
                      item?.title_az || "",
                      item?.title_ru || "",
                      item?.title_en || "",
                    )}
                  </h4>

                  <p className="text-[1.2rem] lg:text-[1.1rem] text-[#FFFFFF] font-normal">
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
      </div>
    </>
  );
}
export default AboutOurGoal;
