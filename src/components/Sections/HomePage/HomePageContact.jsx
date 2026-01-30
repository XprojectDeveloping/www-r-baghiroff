import ContactForm from "../../Form/ContactForm";

function HomePageContact({ title, text }) {
  return (
    <>
      <div className="max-w-[1200px] m-auto">
        <div className="p-[8rem] bg-[#F4F6F6]">
          <h3 className="text-[4.8rem] text-[#002755] font-bold mb-[2rem]">
            {title}
          </h3>

          <p className="text-[1.4rem] text-[#002755] font-normal mb-[2.2rem]">
            {text}
          </p>
          <ContactForm />
        </div>
      </div>
    </>
  );
}
export default HomePageContact;
