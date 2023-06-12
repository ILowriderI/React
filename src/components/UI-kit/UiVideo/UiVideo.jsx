import { useEffect, useRef } from "react";

const UiVideo = ({ src, playbackRate, classes }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.playbackRate = playbackRate;
  }, []);

  return (
    <video loop autoPlay muted ref={videoRef} className={classes}>
      <source src={src} />
    </video>
  );
};

export default UiVideo;
