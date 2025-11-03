"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import SplitText from "@/components/SplitText";
import { FlipWords } from "@/components/ui/flip-words";
import { TextGenerateEffect } from "@/components/ui/text-generation";
import { HighlightText } from "@/components/ui/shadcn-io/highlight-text";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Landing() {
  const tag2Words = ["Student", "Mentor", "Opportunity", "Prodigy", "Project"];
  const tag1Words = "Bridging the gap between ambition and experience";

  const titleRef = useRef<HTMLDivElement | null>(null);
  const tag1Ref = useRef(null);
  const tag2Ref = useRef(null);

  const [showTag1, setShowTag1] = useState(false);
  const [showTag2, setShowTag2] = useState(false);

  useGSAP(() => {
    gsap.set(tag1Ref.current, { opacity: 0, y: 20 });
    gsap.set(tag2Ref.current, { opacity: 0, x: 1000 });

    const tl = gsap.timeline({
      delay: 0.6,
      defaults: { ease: "power3.out", duration: 0.8 },
    });

    tl.to(
      titleRef.current,
      {
        fontSize: "2.25rem",
      },
      "+=1.5"
    );

    tl.to(
      tag1Ref.current,
      {
        opacity: 100,
        y: 0,
        onComplete: () => setShowTag1(true),
      },
      "-=1.0"
    );

    tl.to(
      tag2Ref.current,
      {
        opacity: 1,
        x: 0,
        onStart: () => setShowTag2(true),
      },
      "+=1.0"
    );
  });

  return (
    <div className="C h-[75dvh] flex flex-col justify-center items-center">
      <div ref={titleRef} className="text-8xl font-semibold text-center">
        <SplitText
          text="Mentor Match"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
      </div>
      <div ref={tag1Ref} className="relative text-8xl w-1/2 text-center mt-12">
        {showTag1 && (
          <TextGenerateEffect
            words={tag1Words}
            duration={0.6}
            staggerDelay={0.15}
          />
        )}
        <div
          ref={tag2Ref}
          className="absolute right-0 mt-8  ml-8 text-2xl font-semibold text-left whitespace-nowrap"
        >
          {showTag2 && (
            <>
              <HighlightText
                text="Let Our AI"
                inView={true}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="font-bold"
              />{" "}
              Find Your Next{" "}
              <FlipWords
                words={tag2Words}
                className="font-semibold text-orange-300"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
