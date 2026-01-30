import { getMultiLang as ml } from "../../Language/translation/Multilang.js";
function AboutOurGoal({ title, text, dataCard }) {
  return (
    <>
      <div className="max-w-[1200px] m-auto">
        <h3 className="pt-[8rem] text-[4.8rem] text-[#011E41] font-bold">
          {title}
        </h3>
        <p className="pt-[4rem] text-[1.4rem] text-[#011E41] font-normal">
          {text}
        </p>

        <div className="grid grid-cols-12  gap-[2.4rem] py-[8rem]">
          {dataCard &&
            dataCard?.map((item, index) => {
              return (
                <div
                  key={item?.id || index}
                  className="col-span-3 bg-[#002755] p-[4rem] flex flex-col gap-[2rem]"
                >
                  <div>
                    <img
                      className="max-w-[4rem]"
                      src={item?.src}
                      alt={item?.alt}
                    />
                  </div>

                  <h4 className="text-[2rem] text-[#FFFFFF] font-semibold">
                    {ml(
                      item?.title_az || "",
                      item?.title_ru || "",
                      item?.title_en || "",
                    )}
                  </h4>

                  <p className="text-[1.2rem] text-[#FFFFFF] font-normal">
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
