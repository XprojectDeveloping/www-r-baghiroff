import { getMultiLang as ml } from "../../Language/translation/Multilang.js";
function HomePageAbout({ title, text, dataCard }) {
  return (
    <>
      <div className="max-w-[1200px] m-auto">
        <div className="pt-[8rem]">
          <h3 className="font-bold text-[4.8rem] text-[#011E41] mb-[4rem]">
            {title}
          </h3>

          <p className="font-normal text-[1.4rem] text-[#011E41]">{text}</p>
        </div>

        <div className="grid grid-cols-12 gap-[2.4rem] py-[8rem]">
          {dataCard &&
            dataCard.map((item, index) => {
              return (
                <div
                  key={item.id || index}
                  className="col-span-3 bg-[#F4F6F6] flex justify-center flex-col items-center"
                >
                  <div className="mt-[-4rem]">
                    <img src={item?.src} alt={item?.alt} />
                  </div>
                  <div className="mt-[2rem]">
                    <p className="text-[4.8rem] font-bold text-[#002755]">
                      {item?.title_number}
                    </p>
                  </div>

                  <div className="mb-[4rem]">
                    <p className="text-[1.6rem] text-[#002755] font-normal">
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
