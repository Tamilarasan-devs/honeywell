import React, { useState, useRef, useEffect } from "react";
import video from "../../../assets/video/video.mp4";
import { Volume2, VolumeX } from "lucide-react";

export default function VideoSection() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  useEffect(() => {
    // Ensure video is muted initially for autoplay policies
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, []);

  return (
    <div
      style={{
        position: "relative",
        marginTop: "80px",
        width: "100%",
        overflow: "hidden",
        lineHeight: 0,
        fontSize: 0,
        background: "#FAF9F6",
      }}
    >
      <video
        ref={videoRef}
        style={{
          display: "block",
          width: "100%",
          height: "auto",
          background: "transparent",
          verticalAlign: "bottom",
        }}
        src={video}
        autoPlay
        muted={isMuted}
        loop
        playsInline
      >
        Your browser does not support the video tag.
      </video>

      <button
        onClick={toggleMute}
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          background: "rgba(0, 0, 0, 0.5)",
          border: "none",
          borderRadius: "50%",
          width: "48px",
          height: "48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          color: "white",
          zIndex: 10,
        }}
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </button>
    </div>
  );
}
