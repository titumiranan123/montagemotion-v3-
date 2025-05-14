import React from "react";
import ServiceFullLengthcard from "./ServiceFullLengthcard";
import WebsiteCard from "./Websitecard";

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
  id?: string | number; // Recommended to have a unique id
}

const ThumbnailWorksection: React.FC<WorksectionProps> = ({
  title,
  description,
  data,
  isLoading,
}) => {

  
  return (
    <div className="container section px-4 sm:px-6 lg:px-8">
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
          {/* Loading spinner */}
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        </div>
      ) : (
        <>
          {data && data.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-[998px] mx-auto gap-4 md:gap-6 mt-8 sm:mt-12 md:mt-16">
              {data.map((work: IWork) => (
                <WebsiteCard 
                  thumbnail={work.thumbnail} 
                  sub_type={work.sub_type} 
                  key={work.id || work.video_link} // Better key
                />
              ))}
            </div>
          ) : (
            <div className="text-center text-white mt-8">
              No works found in this category
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ThumbnailWorksection;