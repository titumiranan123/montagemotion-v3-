import React from "react";
import Teamcard from "./Teamcard";
interface Member {
  members: {
    name: string;
    designation: string;
    photourl: string;
  }[];
}

const OurTeam: React.FC<Member> = ({ members }) => {
  return (
    <div className="max-w-[1000px] mx-auto section">
      <div className="flex  flex-col text-white  mx-auto gap-4">
        <h2 className="lg:w-[800px] text-center mx-auto">Our Team</h2>
        <p className="text-center font-[400]">
          Montage Motion is an Advertising and Digital Agency speciallzing in
          InFluencer Marketing 
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
        {members &&
          members?.map((member, idx) => {
            return <Teamcard key={idx} member={member} />;
          })}
      </div>
    </div>
  );
};

export default OurTeam;
