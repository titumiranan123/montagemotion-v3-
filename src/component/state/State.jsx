import CountUp from "react-countup";

const State = () => {
  return (
    <div className="bg mt-[68px]  rounded-[10px] md:h-[200px] md:mt-[80px] lg:mt-[90px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-12">
        <div className="flex justify-center flex-col items-center">
          <p className="text-[42px] font-bold leading-[52px] text-white boldText tracking-[0.8px]">
            <CountUp enableScrollSpy="true" start={1} duration={4} end={1000} />
            +
          </p>
          <p className="text-[24px] text-white text-center openSans">
            Succesfull Projects
          </p>
        </div>
        <div className="flex justify-center flex-col items-center">
          <p className="text-[42px] boldText tracking-[0.8px] font-bold leading-[52px] text-white">
            <CountUp enableScrollSpy="true" start={1} duration={4} end={7} />+
          </p>
          <p className="text-[24px] text-white text-center openSans">
            Year of Experience{" "}
          </p>
        </div>
        <div className="flex justify-center flex-col items-center">
          <p className="text-[42px] font-bold leading-[52px] text-white boldText tracking-[0.9px]">
            <CountUp enableScrollSpy="true" start={1} duration={4} end={12} />+
          </p>
          <p className="text-[24px] text-white text-center openSans">
            Team Members
          </p>
        </div>
      </div>
    </div>
  );
};

export default State;
