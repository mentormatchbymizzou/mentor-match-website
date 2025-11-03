// components/ConnectingLines.tsx
"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function ConnectingLines() {
  const svgRef = useRef<SVGSVGElement>(null);

  useGSAP(() => {
    const svg = svgRef.current;
    const dots = gsap.utils.toArray(".connect-dot");

    // We no longer need to find the target element
    if (!svg || !dots.length) {
      console.warn("Connecting lines: missing SVG or dots.");
      return;
    }

    const drawAndAnimateLines = () => {
      svg.innerHTML = ""; // Clear old lines

      const svgRect = svg.getBoundingClientRect();

      // --- THIS IS THE NEW LOGIC ---
      // The target is now the absolute center of the SVG container.
      // This position is stable and won't change on scroll.
      const targetX = svgRect.width / 2;
      const targetY = (svgRect.height * 5) / 12;
      // --- END NEW LOGIC ---

      dots.forEach((dot) => {
        const dotEl = dot as HTMLElement;
        const dotRect = dotEl.getBoundingClientRect();

        // Calculate dot's position relative to the SVG
        const startX = dotRect.left + dotRect.width / 2 - svgRect.left;
        const startY = dotRect.top + dotRect.height / 2 - svgRect.top;

        // Create the curve
        const controlX = (startX + targetX) / 2;
        const controlY = startY;
        const d = `M ${startX} ${startY} Q ${controlX} ${controlY} ${targetX} ${targetY}`;

        // Create the path element
        const path = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "path"
        );
        path.setAttribute("d", d);
        path.setAttribute("fill", "none");
        path.setAttribute("stroke", "#CBD5E1"); // slate-300
        path.setAttribute("stroke-width", "1");
        path.setAttribute("stroke-dasharray", "3 3"); // Dashed line
        svg.appendChild(path);

        // Animate the flow
        const dashOffset = -24; // Flow "in"
        gsap.to(path, {
          strokeDashoffset: dashOffset,
          duration: 1.5,
          repeat: -1,
          ease: "none",
          scrollTrigger: {
            trigger: svg,
            start: "top 20%",
            end: "bottom 50%",
            toggleActions: "play pause play pause",
          },
        });
      });
    };

    // Initial draw
    drawAndAnimateLines();

    // Redraw on resize
    ScrollTrigger.addEventListener("refresh", drawAndAnimateLines);

    return () => {
      ScrollTrigger.removeEventListener("refresh", drawAndAnimateLines);
    };
  }, {});

  return <svg ref={svgRef} className="absolute inset-0 w-full h-full z-0" />;
}
