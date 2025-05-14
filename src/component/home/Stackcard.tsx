import { useTransform } from "framer-motion";
import Image from "next/image";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";
import background from './../../../public/assets/facebook.png'

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
      <div className="w-full h-[190px] sm:h-[260px] md:w-[700px] md:h-[410px] lg:w-[792px] lg:h-[464px] bg-white rounded-xl shadow-xl overflow-hidden pointer-events-auto border border-gray-200">
        <ReactPlayer
          light={image && (image.startsWith("http") || image.startsWith("/")) ? image : false}
          playIcon={
            <div className="flex items-center justify-center w-full h-full">
              <Image
                src="/assets/playbutton.png"
                width={60}
                height={60}
                alt="Play"
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
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
    </motion.div>
  );
};



export default Stackcard;
