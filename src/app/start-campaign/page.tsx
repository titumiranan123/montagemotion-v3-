"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import { useDropzone } from "react-dropzone";
import { api_url } from "@/src/hook/Apiurl";
import toast from "react-hot-toast";
import useAboutpage from "@/src/hook/useAbout";
import { FaArrowLeft } from "react-icons/fa";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
  members: string[];
  budget: string;
  files: File[];
};

const membersData = [
  {
    id: "1",
    name: "John Doe",
    designation: "Creative Director",
    image: "/assets/member1.jpg",
  },
  {
    id: "2",
    name: "Jane Smith",
    designation: "Marketing Specialist",
    image: "/assets/member2.jpg",
  },
  {
    id: "3",
    name: "Mike Johnson",
    designation: "Content Writer",
    image: "/assets/member3.jpg",
  },
];

const Campaign = () => {
  const [step, setStep] = useState(1);
  const { data } = useAboutpage();
  const [valid, setValid] = useState<string | null>(null);
  const [files, setFiles] = useState<File[]>([]);

  const { register, handleSubmit, watch, setValue } = useForm<FormData>({
    defaultValues: {
      members: [],
    },
  });

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "application/pdf": [".pdf"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"],
    },
    onDrop: (acceptedFiles) => {
      setFiles([...files, ...acceptedFiles]);
      setValue("files", [...files, ...acceptedFiles]);
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
          <h2 className="poppins">Start Campaign</h2>
          <p>
            Montage Motion is an Advertising and Digital Agency specializing in
            Influencer Marketing.
          </p>
        </div>

        <div className="max-w-[996px] rounded-[16px] py-10 px-6 w-full flex flex-col justify-center items-center bg-[#58585833] gap-5 md:gap-10 z-30 mt-[100px]">
          <div className="flex">
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
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            {step === 1 && (
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-white">Step : 1/3</h4>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-[#25AAE1] w-[101px] h-[56px] flex justify-center items-center p-5 rounded-[20px] text-white border-none transition duration-300 hover:bg-[#1e8dbd]"
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
                      className="bg-[#25AAE1] w-[101px] h-[56px] flex justify-center items-center p-5 rounded-[20px] text-white border-none transition duration-300 hover:bg-[#1e8dbd]"
                    >
                      Next
                    </button>
                  </div>
                </div>
                <h3 className="text-white text-xl">Select Team Members </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {membersData.map((member) => (
                    <div
                      key={member.id}
                      onClick={() => toggleMember(member.id)}
                      className={`p-4 rounded-lg cursor-pointer transition-all ${
                        selectedMembers.includes(member.id)
                          ? "bg-[#25AAE1] bg-opacity-30 border-2 border-[#25AAE1]"
                          : "bg-[#58585833] hover:bg-[#58585866]"
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="text-white font-medium">
                            {member.name}
                          </h4>
                          <p className="text-gray-300 text-sm">
                            {member.designation}
                          </p>
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        className="hidden"
                        checked={selectedMembers.includes(member.id)}
                        {...register("members")}
                        value={member.id}
                      />
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
                  <h3 className="text-white text-xl mb-4">Upload Documents</h3>
                  <div
                    {...getRootProps()}
                    className="border-2 border-dashed border-gray-500 rounded-lg p-8 text-center cursor-pointer hover:border-[#25AAE1] transition-colors"
                  >
                    <input {...getInputProps()} />
                    <p className="text-gray-300">
                      Drag & drop some files here, or click to select files
                    </p>
                    <p className="text-gray-400 text-sm mt-2">
                      (PDF, DOC, DOCX)
                    </p>
                  </div>

                  {files.length > 0 && (
                    <div className="mt-4">
                      <h4 className="text-white mb-2">Selected files:</h4>
                      <ul className="space-y-2">
                        {files.map((file, index) => (
                          <li
                            key={index}
                            className="text-gray-300 flex items-center"
                          >
                            <span className="truncate max-w-xs">
                              {file.name}
                            </span>
                            <button
                              type="button"
                              onClick={() => {
                                const newFiles = [...files];
                                newFiles.splice(index, 1);
                                setFiles(newFiles);
                                setValue("files", newFiles);
                              }}
                              className="ml-2 text-red-400 hover:text-red-300"
                            >
                              ×
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
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
                    className={`bg-[#25AAE1] w-[101px] h-[56px] flex justify-center items-center p-5 rounded-[20px] text-white border-none transition duration-300 ${
                      !valid
                        ? "cursor-not-allowed opacity-50"
                        : "cursor-pointer hover:bg-[#1e8dbd]"
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
