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
  const [seeCount, setSeeCount] = React.useState(4);
 
  return (
    <div className="container h-auto   section px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col text-white mx-auto gap-3 md:gap-4">
        <h2 className="w-full text-center mx-auto text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:max-w-[800px]">
          {title}
        </h2>
        <p className="text-center text-sm sm:text-base md:text-lg max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] mx-auto">
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
            {data?.slice(0,seeCount).map((work: IWork, idx: number) => (
              <ServiceFullLengthcard work={work} key={idx} />
            ))}
          </div>
        { data?.length > 4 && <div>
            <button className="text-white bg-green-600 py-2 px-4 rounded-[20px]" onClick={()=>setSeeCount(seeCount+4)}>See More</button>
          </div>}
        </>
      )}
    </div>
  );
};

export default Worksection;
