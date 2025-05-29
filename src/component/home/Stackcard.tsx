import { useTransform } from "framer-motion";
import Image from "next/image";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";
import background from "./../../../public/assets/facebook.png";

const Stackcard = ({
  image,
  index,
  scrollProgress,
  range,
  url,
}: {
  image: string;
  index: number;
  url: string;
  scrollProgress: any;
  range: number[];
}) => {
  const scale = useTransform(scrollProgress, range, [0.03, 1.2]);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const topValue = isMobile
    ? `calc(60px + ${index * 20}px)` // mobile top
    : `calc(-2vh + ${index * 20}px)`; // desktop top

  return (
    <motion.div
      style={{
        scale,
        top: topValue,
      }}
      className="sticky  flex items-center justify-center w-[95%] min-h-[260px]  md:min-h-[200px] lg:min-h-screen pointer-events-none overflow-x-hidden"
    >
      <div style={{boxShadow: "inset 0px 0px 21px #25AAE1CC", padding:"21px", backgroundColor:"#080B0C"}} className="w-full h-[190px] sm:h-[260px] md:w-[700px] md:h-[410px] lg:w-[792px] lg:h-[464px] bg-white rounded-xl shadow-xl overflow-hidden pointer-events-auto border border-[#0A303A]">
        <div className="lg:w-[748px] lg:h-[421px] h-[145px] w-full overflow-hidden rounded-lg">
          
        <ReactPlayer
          light={
            image && (image.startsWith("http") || image.startsWith("/"))
              ? image
              : false
          }
          playIcon={
            <div className="flex items-center justify-center w-[68px] h-[48px] overflow-hidden">
              <Image
                src="/small.png"
                width={68}
                height={48}
                alt="Play"
                className=""
                priority
              />
            </div>
          }
          url={url}
          height={"100%"}
          width={"100%"}
          controls
        />
        </div>
      </div>
    </motion.div>
  );
};

export default Stackcard;
