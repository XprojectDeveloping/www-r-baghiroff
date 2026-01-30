import ContactForm from "../../Form/ContactForm";

function HomePageContact({ title, text, img }) {
  return (
    <>
      <div className="max-w-[1200px] m-auto">
        <div className="grid grid-cols-12 relative">
          <div className="col-span-8 lg:col-span-12 px-[8rem] lg:px-[4rem] pt-[4rem] pb-[4rem] bg-[#F4F6F6]">
            <h3 className="text-[4.8rem] lg:text-[2.8rem] text-[#002755] font-bold mb-[2rem]">
              {title}
            </h3>

            <p className="text-[1.4rem] lg:text-[1.2rem] text-[#002755] font-normal mb-[2.2rem]">
              {text}
            </p>

            <ContactForm />
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
