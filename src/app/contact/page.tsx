"use client";
import ReCAPTCHA from "react-google-recaptcha";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
const ContactForm = () => {
  const [valid, setData] = useState(null);
  function onChange(value: any) {
    setData(value);
  }
  const handalSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const target = e.target;
      const formData = new FormData();
      formData.append("access_key", "9ab377e8-93da-4e3a-9664-c5872080d4b5");
      formData.append("Name", target.name.value);
      formData.append("Email", target.email.value);
      formData.append("Message", target.message.value);
      console.log(formData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div  style={{
        backgroundImage: "url(/assets/logobackgourd.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
      }} className="relative container lg:mt-20 mt-16">
      <div className=" flex  flex-col items-center ">
        <div className="text-white flex flex-col justify-center items-center lg:w-[695px] mx-auto w-full">
          <h2>Contact Us</h2>
          <p>
            Montage Motion is an Advertising and Digital Agency specializing in
            Influencer Marketing, Video production & Post Production, Thumbnail
            Design, Content Strategy, Marketing Visual Design, Custom Website
            Design & Development, and Content Marketing.
          </p>
        </div>

        <div className="grid gap-5 md:gap-10 z-30 mt-[100px] grid-cols-1 lg:grid-cols-2">
          <div className="flex  flex-col gap-3 me-auto">
            <div className="flex   flex-col">
              <h1 className="md:text-[32px] text-[24px]  font-[600] text-white uppercase">
                Lets &nbsp; Work &nbsp;together
              </h1>
              <p className="text-[#E4E8F7] text-[16px]  mt-2 font-[400]">
                Get attractive offers, let&apos;s create stuning works <br />{" "}
                together . fill in your data and we will contact
              </p>
            </div>
            <div className="flex  gap-3 mt-[37px] items-center">
              <Link
                target="_blank"
                href={"https://www.facebook.com/profile.php?id=61555719839132"}
              >
                <Image
                  src={"/assets/footer/fa.png"}
                  alt=""
                  width={24}
                  height={24}
                />
              </Link>
              <Link
                target="_blank"
                href={"https://www.linkedin.com/company/montagemotion/"}
              >
                <Image
                  src={"/assets/footer/linkdin.png"}
                  alt=""
                  width={24}
                  height={24}
                />
              </Link>
              <Link
                target="_blank"
                href={"https://www.instagram.com/montagemotion_official/"}
              >
                <Image
                  src={"/assets/footer/insta.png"}
                  alt=""
                  width={24}
                  height={24}
                />
              </Link>
              <Link
                href={
                  "https://www.youtube.com/channel/UC4CE0a0OHH7LYYgkAGvEslw"
                }
                target="_blank"
              >
                <Image
                  src={"/assets/footer/youtube.png"}
                  alt=""
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>
          <div>
            <form action="" onSubmit={handalSubmit}>
              <div>
                <input
                  type="text"
                  className="px-[32px] focus:bg-[#58585833] text-white bg-[#58585833] rounded-[8px] backdrop-blur-[160px]  md:w-[530px] w-full h-[70px] py-4 focus:outline-none outline-none"
                  placeholder="Name"
                  name="name"
                />
              </div>
              <div className="mt-4">
                <input
                  type="text"
                  className="px-[32px] text-white bg-[#58585833] rounded-[8px] backdrop-blur-[160px]  md:w-[530px] w-full h-[70px] py-4 focus:outline-none outline-none"
                  placeholder="Email"
                  name="email"
                />
              </div>
              <div className="mt-4">
                <textarea
                  name="message"
                  className="px-[32px] bg-[#58585833]  rounded-[8px] backdrop-blur-[160px]  text-white md:w-[530px] w-full h-[210px] py-4 focus:outline-none outline-none"
                  placeholder="Type your message here"
                />
              </div>
              <div className="flex md:flex-row flex-col md:gap-2 gap-10 justify-between items-center  mt-4">
                <div>
                  <ReCAPTCHA
                    sitekey="6LefQ_IpAAAAAPg3gXYY9vijQkXSlAakn4letZZB"
                    onChange={onChange}
                  />
                </div>
                <button
                  className={`btn subscribe  px-6 py-2 rounded-[33px] text-white border-none transition duration-300 ${
                    !valid
                      ? "cursor-not-allowed pointer-events-none"
                      : "cursor-pointer"
                  }`}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
