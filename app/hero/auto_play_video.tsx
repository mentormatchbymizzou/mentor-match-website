"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AutoPlayVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Create the ScrollTrigger instance
    let st = ScrollTrigger.create({
      trigger: video,
      start: "top 50%", // Play when the top of the video hits 75% down from the top of the viewport
      end: "bottom 25%", // Pause when the bottom of the video hits 25% from the top of the viewport

      // Uncomment to see the trigger points
      // markers: true,

      onEnter: () => video.play(),
      onLeave: () => video.pause(),
      onEnterBack: () => video.play(),
      onLeaveBack: () => video.pause(),
    });

    // Cleanup function
    return () => {
      if (st) st.kill();
    };
  }, []); // Empty dependency array so it only runs once on mount

  return (
    <video
      width={314}
      height={350}
      className="rounded-[3.2rem]"
      ref={videoRef}
      src="/video_1.mp4"
      loop
      muted // IMPORTANT: Autoplay requires the video to be muted
      playsInline // IMPORTANT: Required for autoplay on iOS
      //   style={{ width: "100%", height: "auto" }}
    >
      Your browser does not support the video tag.
    </video>
  );
}
