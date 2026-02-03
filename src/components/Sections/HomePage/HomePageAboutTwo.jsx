function HomePageAboutTwo({ title, text, dataCard }) {
  return (
    <>
      <div className="max-w-[1200px] m-auto lg:px-[4rem] md:px-[2rem] sm:px-[1.5rem]">
        <div className="pt-[8rem] lg:pt-0">
          <h3 className="font-bold text-[4.8rem] lg:text-[3.8rem] md:text-[2.8rem] text-[#011E41] mb-[4rem] lg:mb-[2rem]">
            {title}
          </h3>

          <p className="font-normal text-[1.4rem] lg:text-[1.2rem] text-[#011E41]">
            {text}
          </p>
        </div>

        <div className="grid grid-cols-12 lg:grid-cols-6 md:grid-cols-3 gap-[2.4rem] py-[8rem] lg:py-[4rem] md:py-[2rem]">
          {dataCard &&
            dataCard.map((item, index) => {
              return (
                <div
                  key={item.id || index}
                  className="bg-[#F4F6F6] flex justify-center py-[4rem] px-[7.8rem] col-span-3"
                >
                  <img
                    className="lg:max-w-[20rem]"
                    src={item?.src}
                    alt={item.alt}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
export default HomePageAboutTwo;
