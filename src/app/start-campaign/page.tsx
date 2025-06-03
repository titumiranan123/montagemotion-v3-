"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";

import { api_url } from "@/src/hook/Apiurl";
import toast from "react-hot-toast";
import useAboutpage from "@/src/hook/useAbout";
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
  members: string[];
  budget: string;
  files: string;
};



const Campaign = () => {
  const [step, setStep] = useState(1);
   const {data} = useAboutpage()
    const membersData = data && data?.member?.filter((dt:any)=>dt.role !== "team_member")
  const [valid, setValid] = useState<string | null>(null);
  
  const { register, handleSubmit, watch, setValue } = useForm<FormData>({
    defaultValues: {
      members: [],
    },
  });

  const selectedMembers = watch("members");

  const toggleMember = (id: string) => {
    if (selectedMembers.includes(id)) {
      setValue(
        "members",
        selectedMembers.filter((memberId) => memberId !== id)
      );
    } else {
      setValue("members", [...selectedMembers, id]);
    }
  };

  const onSubmit = async (data: FormData) => {
    try {
      // await api_url.post("/api/contacts", formData);
      toast.success("Submitted successfully! 🎉");
      
    } catch (error: any) {
      toast.error(error?.response?.data?.errorMessages[0].message);
    }
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div
      style={{
        backgroundImage: "url(/assets/background.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="relative container lg:mt-20 mt-16"
    >
      <div className="flex flex-col items-center">
        <div className="text-white flex flex-col justify-center items-center lg:w-[695px] gap-6 mx-auto w-full">
          <h2 className=" gradienttext satoshi">Start Campaign</h2>
          <p>
            Montage Motion is an Advertising and Digital Agency specializing in
            Influencer Marketing.
          </p>
        </div>

        <div style={{ boxShadow: "0px 4px 60px 0px #1FB5DD29 inset" }} className="max-w-[996px] rounded-[16px] py-10 px-6 w-full flex flex-col justify-center items-center bg-[#58585833] gap-5 md:gap-10 z-30 mt-[100px]">
          {/* <div className="flex ">
            <div
              className={`flex items-center ${
                step >= 1 ? "text-white" : "text-gray-400"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= 1 ? "bg-[#25AAE1]" : "bg-gray-500"
                }`}
              >
                1
              </div>
              {step > 1 && <div className="w-16 h-1 bg-[#25AAE1] mx-2"></div>}
            </div>
            <div
              className={`flex items-center ${
                step >= 2 ? "text-white" : "text-gray-400"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= 2 ? "bg-[#25AAE1]" : "bg-gray-500"
                }`}
              >
                2
              </div>
              {step > 2 && <div className="w-16 h-1 bg-[#25AAE1] mx-2"></div>}
            </div>
            <div
              className={`flex items-center ${
                step >= 3 ? "text-white" : "text-gray-400"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= 3 ? "bg-[#25AAE1]" : "bg-gray-500"
                }`}
              >
                3
              </div>
            </div>
          </div> */}

          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            {step === 1 && (
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-white">Step : 1/3</h4>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="btns w-[101px] h-[56px] flex justify-center items-center p-5 rounded-[20px] text-white border-none transition duration-300 "
                  >
                    Next
                  </button>
                </div>
                <div>
                  <input
                    type="text"
                    className="px-[32px] focus:bg-[#58585833] text-white bg-[#58585833] rounded-[8px] backdrop-blur-[160px] w-full h-[70px] py-4 focus:outline-none outline-none"
                    placeholder="Name"
                    {...register("name", { required: true })}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    className="px-[32px] text-white bg-[#58585833] rounded-[8px] backdrop-blur-[160px] w-full h-[70px] py-4 focus:outline-none outline-none"
                    placeholder="Email"
                    {...register("email", { required: true })}
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    className="px-[32px] text-white bg-[#58585833] rounded-[8px] backdrop-blur-[160px] w-full h-[70px] py-4 focus:outline-none outline-none"
                    placeholder="Phone Number"
                    {...register("phone", { required: true })}
                  />
                </div>
                <div>
                  <textarea
                    className="px-[32px] bg-[#58585833] rounded-[8px] backdrop-blur-[160px] text-white w-full h-[210px] py-4 focus:outline-none outline-none"
                    placeholder="Type your message here"
                    {...register("message", { required: true })}
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-8">
                <div className="flex justify-between">
                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="  flex cursor-pointer   justify-center items-center  rounded-[20px] text-white  transition duration-300 "
                    >
                      <FaArrowLeft />
                    </button>
                    <h4 className="text-white">Step : 2/3</h4>
                  </div>
                  <div className="flex space-x-4">
                    <button
                      type="button"
                      onClick={nextStep}
                      className="border-gray-500 border w-[101px] h-[56px] flex justify-center items-center p-5 rounded-[20px] text-white  transition duration-300 hover:border-gray-600"
                    >
                      Skip
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="btns w-[101px] h-[56px] flex justify-center items-center p-5 rounded-[20px] text-white border-none transition duration-300 "
                    >
                      Next
                    </button>
                  </div>
                </div>
                <h3 className="text-white text-xl">Select Team Members </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {membersData.map((member:any) => (
                    <div
                      key={member.id}
                      onClick={() => toggleMember(member.id)}
                      // className={`p-4 rounded-lg cursor-pointer transition-all ${
                      //   selectedMembers.includes(member.id)
                      //     ? "bg-[#25AAE1] bg-opacity-30 border-2 border-[#25AAE1]"
                      //     : ""
                      // }`}
                    >
                      
                       <div style={{ boxShadow: "0px 4px 60px 0px #1FB5DD29 inset" }} className="w-[315px] min-h-[366px] h-full p-4 rounded-[17.54px] bg-[#58585833]">
                      <input
                        type="checkbox"
                        
                        checked={selectedMembers.includes(member.id)}
                        {...register("members")}
                        value={member.id}
                      />
                            <div className="w-[275px] h-[310px] overflow-hidden  mt-3">
                              <Image
                              style={{width:'275px',height:'313px'}}
                              src={member && member.photourl}
                              alt={member?.name}
                              width={275}
                              height={323}
                              className="rounded-[13.09px]"
                              priority
                            />
                            </div>
                            <div className="mt-[20px] space-y-1 text-white">
                              <h3>{member.name}</h3>
                            </div>
                          </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <button onClick={prevStep}  className=" cursor-pointer flex   justify-center items-center  rounded-[20px] text-white  transition duration-300 ">
                    <FaArrowLeft />
                  </button>
                  <h4 className="text-white">Step : 3/3</h4>
                </div>
                <div>
                  <h3 className="text-white text-xl mb-4">Budget</h3>
                  <input
                    type="text"
                    className="px-[32px] text-white bg-[#58585833] rounded-[8px] backdrop-blur-[160px] w-full h-[70px] py-4 focus:outline-none outline-none"
                    placeholder="Estimated Budget"
                    {...register("budget", { required: true })}
                  />
                </div>
                <div>
                  <h3 className="text-white text-xl mb-4">Documents Link (Drive & Docs)</h3>
                  <input
                    type="text"
                    className="px-[32px] text-white bg-[#58585833] rounded-[8px] backdrop-blur-[160px] w-full h-[70px] py-4 focus:outline-none outline-none"
                    placeholder="Estimated Budget"
                    {...register("files", { required: true })}
                  />
                </div>

            

                <div className="mt-6">
                  <ReCAPTCHA
                    sitekey="6LefQ_IpAAAAAPg3gXYY9vijQkXSlAakn4letZZB"
                    onChange={(value) => setValid(value)}
                  />
                </div>

                <div className="flex justify-end">
                 
                  <button
                    type="submit"
                    disabled={!valid}
                    className={`btns w-[101px] h-[56px] flex justify-center items-center p-5 rounded-[20px] text-white border-none transition duration-300 ${
                      !valid
                        ? "cursor-not-allowed opacity-50"
                        : "cursor-pointer "
                    }`}
                  >
                    Submit
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Campaign;
