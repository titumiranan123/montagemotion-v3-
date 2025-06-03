import React from "react";
import ServiceFullLengthcard from "./ServiceFullLengthcard";

interface WorksectionProps {
  title: string;
  description: string;
  data: IWork[];
  isLoading: boolean;
}
interface IWork {
  thumbnail: string;
  video_link: string;
  sub_type?: string;
}

const Worksection: React.FC<WorksectionProps> = ({
  title,
  description,
  data,
  isLoading,
}) => {
  if (!data || data.length === 0) {
    return null;
  }
  const [seeCount, setSeeCount] = React.useState(4);

  return (
    <div className="container h-auto   section px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col text-white mx-auto gap-3 md:gap-2">
        <h2
          data-aos="fade-up"
          data-aos-delay="200"
          className="w-full text-center mx-auto text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:max-w-[800px] gradienttext satoshi"
        >
          {title}
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-center text-sm sm:text-base md:text-lg max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] mx-auto"
        >
          {description}
        </p>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center mt-16">
          {/* You can add a loading spinner here if needed */}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-[998px] mx-auto gap-4 md:gap-6 mt-8 sm:mt-12 md:mt-16 ">
            {data?.slice(0, seeCount).map((work: IWork, idx: number) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={100 + idx * 100}
              >
                <ServiceFullLengthcard work={work} />{" "}
              </div>
            ))}
          </div>
          {data?.length > 4 && (
            <div className="flex justify-center items-center mt-16 gap-4">
              {seeCount < data.length && (
                <button
                data-aos="fade-up"
          data-aos-delay="500"
                  className="text-white border border-white rounded-[12px] p-5 w-[122px] h-[60px] flex justify-center items-center"
                  onClick={() => setSeeCount(seeCount + 4)}
                >
                  See More
                </button>
              )}
              {seeCount > 4 && (
                <button
                data-aos="fade-up"
          data-aos-delay="600"
                  className="text-white border border-white rounded-[12px] p-5 w-[122px] h-[60px] flex justify-center items-center"
                  onClick={() => setSeeCount(4)}
                >
                  See Less
                </button>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Worksection;
