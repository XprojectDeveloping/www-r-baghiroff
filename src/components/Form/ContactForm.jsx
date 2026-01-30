import { useState } from "react";
import UseGlobalFetch from "../UseGlobalFetch/UseGlobalFetch";
import { getMultiLang as ml } from "../Language/translation/Multilang.js";
import contactIco from "../../assets/img/body/contact/contact-arrow-ico.svg";
function ContactForm({}) {
  const { data } = UseGlobalFetch();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.service) {
      alert("Zəhmət olmasa bütün sahələri doldurun");
      return;
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="inputs flex flex-col gap-[3rem] mb-[4rem]">
          <input
            type="text"
            name="text"
            placeholder={ml(
              data?.contact?.placeholderName_az || "",
              data?.contact?.placeholderName_ru || "",
              data?.contact?.placeholderName_en || "",
            )}
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder={ml(
              data?.contact?.placeholderNumber_az || "",
              data?.contact?.placeholderNumber_ru || "",
              data?.contact?.placeholderNumber_en || "",
            )}
            value={form.phone}
            onChange={handleChange}
          />

          <select name="select" value={form.service} onChange={handleChange}>
            {data?.contact?.contactOption &&
              data?.contact?.contactOption?.map((item, index) => {
                return (
                  <option value={item.value} key={item.id || index}>
                    {ml(
                      item?.option_az || "",
                      item?.option_ru || "",
                      item?.option_en || "",
                    )}
                  </option>
                );
              })}
          </select>
          <button
            className="bg-[#011E41] transition_css text-[#FFFFFF] text-[1.4rem] lg:text-[1.2rem] font-normal py-[1.3rem] flex items-center justify-center gap-[1.2rem] hover:bg-[#03a0e2]"
            type="sumbit"
          >
            {ml(
              data?.contact?.contactButton?.button_az || "",
              data?.contact?.contactButton?.button_ru || "",
              data?.contact?.contactButton?.button_en || "",
            )}

            <img className="max-w-[2.4rem]" src={contactIco} alt="arrow" />
          </button>
        </div>
      </form>
    </>
  );
}
export default ContactForm;
