import styles from "./Pluseicon.module.css";

const PluseIcon = ({ onHideImage }:any) => {
  const openVideo = () => {
    onHideImage(true);
  };

  return (
    <div className="z-[9999]">
      <button
        id="play-video"
        className={`${styles.video_play_button} cursor-pointer `}
        onClick={openVideo}
        aria-label="Play video"
      >
        <span></span>
      </button>
    </div>
  );
};

export default PluseIcon;
