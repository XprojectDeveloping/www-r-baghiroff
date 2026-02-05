import { getMultiLang as ml } from "../../Language/translation/Multilang.js";
function HomePageAbout({ title, text, dataCard }) {
  return (
    <>
      <div className="max-w-[1200px] m-auto lg:px-[4rem] md:px-[2rem] sm:px-[1.5rem]">
        <div className="pt-[8rem] lg:pt-[4rem] md:pt-[2rem]">
          <h3 className="font-bold text-[4.8rem] lg:text-[3.8rem] md:text-[2.8rem] sm:text-[2.5rem] text-[#011E41] mb-[4rem] lg:mb-[2rem]">
            {title}
          </h3>

          <p className="font-normal text-[1.4rem] lg:text-[1.2rem] text-[#011E41]">
            {text}
          </p>
        </div>

        <div className="grid grid-cols-12 lg:grid-cols-6 md:grid-cols-3 gap-[2.4rem] lg:gap-[2rem] py-[8rem] lg:py-[4rem] md:py-[2rem] sm:py-[1.5rem  ]">
          {dataCard &&
            dataCard.map((item, index) => {
              return (
                <div
                  key={item.id || index}
                  className="col-span-3 bg-[#F4F6F6] flex justify-center flex-col items-center"
                >
                  <div className="mt-[-4rem] lg:mt-[0]">
                    <img
                      className="lg:hidden"
                      src={item?.src}
                      alt={item?.alt}
                    />
                  </div>
                  <div className="mt-[2rem]">
                    <p className="text-[4.8rem] lg:text-[2.8rem] font-bold text-[#002755]">
                      {item?.title_number}
                    </p>
                  </div>

                  <div className="mb-[4rem]">
                    <p className="text-[1.6rem] lg:text-[1.3rem] text-[#002755] font-normal">
                      {ml(
                        item?.text_az || "",
                        item?.text_ru || "",
                        item?.text_en || "",
                      )}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
export default HomePageAbout;
