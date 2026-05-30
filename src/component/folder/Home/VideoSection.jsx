import React from "react";
import video from "../../../assets/video/video.mp4";

export default function VideoSection() {
  return (
    <div
      style={{
        marginTop: "80px",
        width: "100%",
        overflow: "hidden",
        lineHeight: 0,
        fontSize: 0,
        background: "#FAF9F6",
      }}
    >
      <video
        style={{
          display: "block",
          width: "100%",
          height: "auto",
          background: "transparent",
          verticalAlign: "bottom",
        }}
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
