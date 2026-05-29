import React from "react";
import video from "../../../assets/video/video.mp4";

export default function VideoSection() {
  return (
    <div className="w-full overflow-hidden">
      <video
        className="w-full h-auto max-h-screen object-contain"
        src={video}
        autoPlay
        muted
        loop
        playsInline
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
