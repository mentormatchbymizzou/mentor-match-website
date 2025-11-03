"use client";
import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function MentorPoints() {
  const points = [
    {
      id: "m1",
      title: "Overwhelmed by student emails ?",
      text: "Our single, structured platform replaces the flood of cold emails with a list of interested, compatible candidates.",
    },
    {
      id: "m2",
      title: "Struggling to find qualified students ?",
      text: "Our AI engine analyzes student profiles to find candidates whose skills and interests are a true fit for your research",
    },
    {
      id: "m3",
      title: "Bogged down by the recruitment process ?",
      text: "Easily post opportunities and review top student matches, significantly reducing your administrative burden",
    },
    {
      id: "m4",
      title: "Limited to the usual applicants ?",
      text: "Showcase your work to a diverse range of students across campus to foster new, campus-wide collaborations",
    },
  ];
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.set(".student-title", { opacity: 0, x: 50 });
      gsap.set(".point-card", { opacity: 0, x: 50 });

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
      className="student-section absolute right-0 top-1/2 -translate-y-1/2 w-1/3 p-8 flex flex-col items-start text-left"
    >
      <div className="student-title text-5xl font-bold text-yellow-500 self-end text-center mr-40">
        Mentor
      </div>

      <div className="flex flex-col gap-10 mt-10">
        {points.map((point) => (
          <div key={point.id} className="info-card relative ">
            {/* The connection dot */}
            <div
              id={point.id}
              className="connect-dot absolute top-1/5 -left-10 -translate-y-1/2 w-5 h-5 bg-orange-400 rounded-full"
            />
            <div className="point-card">
              <h3 className="font-bold text-2xl mb-2">{point.title}</h3>
              <p className="text-gray-600 text-lg w-3/4 ">{point.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
