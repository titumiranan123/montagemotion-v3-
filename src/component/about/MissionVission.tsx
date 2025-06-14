import React from "react";

const MissionVission = () => {
  const item = [
    {
      title: "Our Mission",
      description:
        "At Motion Montage, our mission is to empower storytellers and creators by providing top-notch video editing services that seamlessly blend innovation, precision, and creativity. We are dedicated to transforming raw footage into compelling narratives that leave a lasting impact, helping our clients share their stories with the world.",
    },
    {
      title: "Our Vision",
      description:
        "We envision Montage Motion as a leading force in the video editing industry, synonymous with excellence and innovation. Our vision is to continually push the boundaries of visual storytelling, setting new standards for creativity and quality. We aspire to be the go-to destination where individuals and businesses alike can turn their moments into captivating, unforgettable stories through our expertise and passion for cinematic editing.",
    },
  ];
  return (
    <div className="max-w-[1000px] mx-auto section flex lg:flex-row flex-col gap-5 justify-around items-center ">
      {item.map((item: { title: string; description: string }, idx: number) => (
        <div key={idx} data-aos="fade-up" data-aos-delay={100 + idx * 100}>
          <Card key={idx} title={item.title} description={item.description} />
        </div>
      ))}
    </div>
  );
};

const Card = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div
       style={{ boxShadow: "0px 4px 60px 0px #1FB5DD29 inset" }}
      className="md:w-[488px] md:h-[270px] space-y-0 w-full h-auto md:p-[22px] backdrop-blur-[21px] p-4 text-white bg-[#58585833] rounded-[19px]"
    >
      <h3 className="text-[24px] font-montserrat font-bold mb-4">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default MissionVission;
