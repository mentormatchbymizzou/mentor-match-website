"use client";
import Image from "next/image";
import AutoPlayVideo from "./auto_play_video";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import StudentPoints from "./student_points";
import MentorPoints from "./mentor_points";
import ConnectingLines from "@/components/connecting_lines";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  let heroRef = useRef(null);

  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".Hero",
          scrub: true,
          pin: ".wireframe",
          start: "10% top",
        },
      })
      .to(".wireframe", {
        scale: "0.9",
        xPercent: -80,
        yPercent: 15,
        ease: "power1.inOut",
      })
      .set(".wireframe", { opacity: 0 })
      .set(".wireframe2", { opacity: 1 });
  });

  return (
    <div className="Hero h-dvh flex justify-center items-center relative overflow-hidden.">
      <ConnectingLines></ConnectingLines>
      <StudentPoints></StudentPoints>
      <div className="wireframe relative">
        <Image
          src="/iphone_wireframe.png"
          alt="Picture of the author"
          width={350}
          height={350}
        ></Image>
        <div
          ref={heroRef}
          className="absolute inset-0 flex justify-center items-center"
        >
          <div className="video absolute">
            <AutoPlayVideo></AutoPlayVideo>
          </div>
        </div>
      </div>
      <MentorPoints></MentorPoints>
    </div>
  );
}
