"use client";
import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
export default function StudentPoints() {
  const points = [
    {
      id: "s1",
      title: "Missing out on opportunities ?",
      text: "We provide one place with equitable access to all mentorship opportunities",
    },
    {
      id: "s2",
      title: "Scattered fliers and endless cold emails ?",
      text: "Find mentors, see their needs, and express your interest all in one place.",
    },
    {
      id: "s3",
      title: "Getting lost in the keyword search ?",
      text: "Our smart AI goes beyond keywords to understand the true meaning of your skills, revealing relevant opportunities that other platforms miss.",
    },
    {
      id: "s4",
      title: "Unsure if you're the right fit ?",
      text: "Easily express interest with a simple swipe. It's a low-pressure way to connect without the stress of a formal application",
    },
  ];

  const containerRef = useRef(null);
  useGSAP(
    () => {
      gsap.set(".student-title", { opacity: 0, x: -50 });
      gsap.set(".point-card", { opacity: 0, x: -50 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        })
        .to(".student-title", {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power3.out",
        })
        .to(
          ".point-card",
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: "power3.out",
            stagger: 0.5,
          },
          "-=0.3"
        ); // Overlap with the title animation slightly
    },
    { scope: containerRef } // Scope the animation to this component
  );
  return (
    <div
      ref={containerRef}
      className="student-section absolute left-0 top-1/2-translate-y-1/2 w-1/3 p-8 flex flex-col items-end text-right "
    >
      <div className="student-title text-5xl font-bold text-yellow-500 self-start text-center ml-40">
        Student
      </div>
      <div className="flex flex-col gap-10 mt-10">
        {points.map((point) => (
          <div key={point.id} className="info-card relative">
            {/* The connection dot */}
            <div
              id={point.id} // This ID is for potential future dynamic connections
              className="connect-dot absolute top-1/5 -right-10 -translate-y-1/2 w-5 h-5 bg-orange-400 rounded-full"
            />
            <div className="point-card">
              <h3 className="font-bold text-2xl mb-2">{point.title}</h3>
              <p className="text-gray-600 text-lg w-3/4 ml-auto">
                {point.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
