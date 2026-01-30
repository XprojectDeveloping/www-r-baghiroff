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
      <div className="max-w-[1200px] my-[8rem] m-auto text-center">
        <h3 className="mb-[4rem] text-[4.8rem] text-[#002755] font-bold">
          {ml(
            data?.contact?.title_az || "",
            data?.contact?.title_ru || "",
            data?.contact?.title_en || "",
          )}
        </h3>
        <p className="text-[1.4rem] text-[#002755] font-normal">
          {ml(
            data?.contact?.text_az || "",
            data?.contact?.text_ru || "",
            data?.contact?.text_en || "",
          )}
        </p>
      </div>

      <div className="max-w-[1200px] m-auto flex flex-row justify-center items-center gap-[8rem] bg-[#002755] pb-[4rem]">
        <div className="flex flex-col items-center mt-[-4rem]">
          <img
            className="bg-[#03A0E2] max-w-[7rem] p-[2rem] mb-[4rem]"
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
        <div className="flex flex-col items-center mt-[-4rem]">
          <img
            className="bg-[#03A0E2] max-w-[7rem] p-[2rem] mb-[4rem]"
            src={EmailIco}
            alt="email"
          />
          <a
            className="text-[1.4rem] text-[#FFFFFF] font-normal"
            href="mailto:info@baghiroff.az"
          >
            {"info@baghiroff.az"}
          </a>
        </div>
        <div className="flex flex-col items-center mt-[-4rem]">
          <img
            className="bg-[#03A0E2] max-w-[7rem] p-[2rem] mb-[4rem]"
            src={EmailIco}
            alt="email"
          />
          <a
            className="text-[1.4rem] text-[#FFFFFF] font-normal"
            href="mailto:Zərifə Əliyeva 55"
          >
            {"Zərifə Əliyeva 55"}
          </a>
        </div>
      </div>

      <div className="max-w-[1200px] m-auto">
        <div className="p-[8rem] bg-[#F4F6F6]">
          <div className="flex flex-col">
            <h3 className="text-[4.8rem] text-[#002755] font-bold mb-[2rem]">
              {ml(
                data?.contact?.title2_az || "",
                data?.contact?.title2_ru || "",
                data?.contact?.title2_en || "",
              )}
            </h3>

            <p className="text-[1.4rem] text-[#002755] font-normal mb-[2.2rem]">
              {ml(
                data?.contact?.text2_az || "",
                data?.contact?.text2_ru || "",
                data?.contact?.text2_en || "",
              )}
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
