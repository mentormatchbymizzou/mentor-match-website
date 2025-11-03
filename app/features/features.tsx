"use client";
import { HighlightText } from "@/components/ui/shadcn-io/highlight-text";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);
export default function Features() {
  const features: { imagePath: string; feature: React.ReactNode }[] = [
    {
      imagePath: "/feature_1_bg.png",
      feature: (
        <>
          Explore your matches!{" "}
          <HighlightText
            text="Swipe"
            inView={true}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />{" "}
          right to show your interest
        </>
      ),
    },
    {
      imagePath: "/feature_2_bg.png",
      feature: (
        <>
          <HighlightText
            text="Search users."
            inView={true}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />{" "}
          <br></br> Get not only what you type but also what you mean
        </>
      ),
    },
    {
      imagePath: "/feature_3_bg.png",
      feature: (
        <>
          A{" "}
          <HighlightText
            text="new connection"
            inView={true}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />{" "}
          is made when both show interest. begin!
        </>
      ),
    },
    {
      imagePath: "/feature_4_bg.png",
      feature: (
        <>
          Your{" "}
          <HighlightText
            text="chat is ready"
            inView={true}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />{" "}
          <br></br> start a great conversation now.
        </>
      ),
    },
    {
      imagePath: "/feature_5_bg.png",
      feature: (
        <>
          <HighlightText
            text="Build your profile"
            inView={true}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />{" "}
          <br></br> The more you add, the better your matches!
        </>
      ),
    },
  ];

  useGSAP(() => {
    const cards = document.querySelectorAll(".features .feature");
    const numCards = cards.length;

    const sharedScrollTrigger = {
      trigger: ".featureSection",
      pin: true,
      scrub: true,
      end: `+=${400}%`,
      snap: {
        snapTo: "labels" as "labels",
        duration: 0.3,
        delay: 0.2,
        ease: "power1.inOut",
      },
    };
    const t1 = gsap.timeline({
      scrollTrigger: sharedScrollTrigger,
    });

    cards.forEach((card, i) => {
      const stepLabel = `step-${i}`;
      t1.addLabel(stepLabel, i);
      if (i > 0) {
        const prevLabel = `step-${i - 1}`;
        t1.to(
          card,
          {
            xPercent: -i * 160, // + (i > 0 ? 25 * i : 0),
            ease: "none",
            duration: 1,
          },
          prevLabel
        );
        t1.to(
          ".feature_static_wrapper",
          {
            xPercent: -100 * i,
            ease: "none",
            duration: 1,
          },
          prevLabel
        );
      } else {
        t1.set(card, { xPercent: 0 }, 0);
        t1.set(".feature_static_wrapper", { xPercent: 0 }, 0);
      }

      t1.to(card, {
        rotateZ: i % 2 === 0 ? -5 : 5,
        duration: 0.2,
        scale: 0.9,
        ease: "power1.inOut",
      });
    });
  });
  return (
    <div className="featureSection flex justify-center items-center h-dvh overflow-hidden">
      <div className="row">
        <div className="wireframe2 relative -left-4/5 opacity-0 scale-90">
          <Image
            src="/iphone_wireframe.png"
            alt="Picture of the author"
            width={350}
            height={350}
            className="left-2"
          ></Image>
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="feature_static_container w-[314px] h-[680px] rounded-[3.2rem] absolute overflow-hidden">
              <div className="feature_static_wrapper flex flex-row">
                <Image
                  src="/feature_1.png"
                  alt="feature 1"
                  width={314}
                  height={350}
                  className="img w-[314px] h-auto flex-shrink-0"
                ></Image>
                <Image
                  src="/feature_2.png"
                  alt="feature 2"
                  width={314}
                  height={350}
                  className="img w-[314px] h-auto flex-shrink-0"
                ></Image>
                <Image
                  src="/feature_3.png"
                  alt="feature 3"
                  width={314}
                  height={350}
                  className="img w-[314px] h-auto flex-shrink-0"
                ></Image>
                <Image
                  src="/feature_4.png"
                  alt="feature 4"
                  width={314}
                  height={350}
                  className="img w-[314px] h-auto flex-shrink-0"
                ></Image>
                <Image
                  src="/feature_5.png"
                  alt="feature 5"
                  width={314}
                  height={350}
                  className="img w-[314px] h-auto flex-shrink-0"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="features absolute flex left-[60%] flex-row justify-center items-center gap-60">
        {features.map((f, i) => (
          <div
            key={i}
            className="feature w-[400px] h-[450px] bg-amber-50 rounded-4xl shadow-2xl"
          >
            <Image
              src={f.imagePath}
              alt="Explore your matches"
              layout="fill"
              objectFit="cover" // This is the equivalent of bg-cover
              className="z-0"
            ></Image>
            <div
              className="absolute bottom-0 left-0 right-0 h-3/4 p-6 
                       flex flex-col justify-end
                       bg-black/5 
                       backdrop-blur-3xl 
                       [mask-image:linear-gradient(to_top,black_30%,transparent_100%)] rounded-4xl"
            >
              {/* <Image src="/icon_1.svg" width={80} height={80} alt="match"></Image> */}
              <p className="text-2xl font-semibold">{f.feature}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
