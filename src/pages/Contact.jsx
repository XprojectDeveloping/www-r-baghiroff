import { getMultiLang as ml } from "../components/Language/translation/Multilang.js";
import UseGlobalFetch from "../components/UseGlobalFetch/UseGlobalFetch";
import PhoneIco from "../assets/img/body/contact/contact-img.svg";
import EmailIco from "../assets/img/body/contact/contact-img2.svg";
import ContactForm from "../components/Form/ContactForm.jsx";
import { useTranslation } from "react-i18next";
function Contact() {
  const { data } = UseGlobalFetch();
  const { i18n, t } = useTranslation();
  return (
    <>
      <div className="max-w-[1200px] m-auto lg:px-[4rem] md:px-[2rem] sm:px-[1.5rem] my-[14rem] lg:my-[6rem] md:my-[3rem] sm:my-[2.5rem] text-center">
        <h3 className="mb-[4rem] lg:mb-[2rem] text-[4.8rem] lg:text-[3.8rem] md:text-[2.8rem] text-[#002755] font-bold">
          {ml(
            data?.contact?.title_az || "",
            data?.contact?.title_ru || "",
            data?.contact?.title_en || "",
          )}
        </h3>
        <p className="text-[1.4rem] lg:text-[1.2rem] text-[#002755] font-normal">
          {ml(
            data?.contact?.text_az || "",
            data?.contact?.text_ru || "",
            data?.contact?.text_en || "",
          )}
        </p>
      </div>

      <div className="max-w-[1200px] m-auto lg:px-[4rem] md:px-[2rem] sm:px-[1.5rem] flex flex-row  lg:flex-wrap justify-center items-center gap-[8rem] lg:gap-[4rem] bg-[#002755] pb-[4rem] lg:pb-[2rem] lg:pt-[2rem]">
        <div className="flex flex-col lg:flex-row lg:gap-[2rem] items-center mt-[-4rem] lg:mt-[0]">
          <img
            className="bg-[#03A0E2] max-w-[7rem] lg:max-w-[5rem] p-[2rem] lg:p-[1.5rem] mb-[4rem] lg:mb-[0]"
            src={PhoneIco}
            alt="phone"
          />
          <a
            className="text-[1.4rem] text-[#FFFFFF] font-normal"
            href="tel:+994 50 123 45 67"
          >
            {"+994 50 123 45 67"}
          </a>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-[2rem] items-center mt-[-4rem] lg:mt-[0]">
          <img
            className="bg-[#03A0E2] max-w-[7rem] lg:max-w-[5rem] p-[2rem] lg:p-[1.5rem] mb-[4rem] lg:mb-[0]"
            src={EmailIco}
            alt="phone"
          />
          <a
            className="text-[1.4rem] text-[#FFFFFF] font-normal"
            href="mailto:info@baghiroff.az"
          >
            {"info@baghiroff.az"}
          </a>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-[2rem] items-center mt-[-4rem] lg:mt-[0]">
          <img
            className="bg-[#03A0E2] max-w-[7rem] lg:max-w-[5rem] p-[2rem] lg:p-[1.5rem] mb-[4rem] lg:mb-[0]"
            src={EmailIco}
            alt="phone"
          />
          <a
            className="text-[1.4rem] text-[#FFFFFF] font-normal"
            href="mailto:info@baghiroff.az"
          >
            {"info@baghiroff.az"}
          </a>
        </div>
      </div>

      <div className="max-w-[1200px] m-auto">
        <div className="grid grid-cols-12 lg:grid-cols-6 relative">
          <div className="col-span-8 px-[8rem] lg:px-[4rem] md:px-[2rem] sm:px-[1.5rem] pt-[4rem] lg:pt-[2rem] md:pt-[1.5rem] pb-[8rem] lg:pb-[6rem] md:pb-[3rem] bg-[#F4F6F6]">
            <h3 className="text-[4.8rem] lg:text-[3.8rem] md:text-[2.8rem] text-[#002755] font-bold mb-[2rem]">
              {ml(
                data?.contact?.title2_az || "",
                data?.contact?.title2_ru || "",
                data?.contact?.title2_en || "",
              )}
            </h3>

            <p className="text-[1.4rem] lg:text-[1.2rem] text-[#002755] font-normal mb-[2.2rem]">
              {ml(
                data?.contact?.text2_az || "",
                data?.contact?.text2_ru || "",
                data?.contact?.text2_en || "",
              )}
            </p>

            <ContactForm />
          </div>
          <div className="col-span-4 flex justify-center items-center absolute right-[-3.25rem] bottom-[12.25rem] lg:hidden">
            <img className="max-w-[48rem]" src={data?.contact?.src} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
