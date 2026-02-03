function HomePageContact({ title, text, img, form }) {
  return (
    <>
      <div className="max-w-[1200px] m-auto">
        <div className="grid grid-cols-12 relative">
          <div className="col-span-8 lg:col-span-12 px-[8rem] lg:px-[4rem] md:px-[2rem] sm:px-[1.5rem] pt-[4rem] md:pt-[2rem] pb-[4rem] md:pb-[2rem] bg-[#F4F6F6]">
            <h3 className="text-[4.8rem] lg:text-[3.8rem] md:text-[2.8rem] text-[#002755] font-bold mb-[2rem] md:mb-[1.5rem]">
              {title}
            </h3>

            <p className="text-[1.4rem] lg:text-[1.2rem] text-[#002755] font-normal mb-[2.2rem] md:mb-[2rem]">
              {text}
            </p>

            {form}
          </div>
          <div className="col-span-4 flex justify-center items-center absolute right-[-3.25rem] bottom-[12.25rem] lg:hidden">
            <img className="max-w-[48rem]" src={img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
export default HomePageContact;
