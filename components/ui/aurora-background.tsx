"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "relative transition-bg bg-zinc-50 text-slate-950 dark:bg-zinc-900",
          className
        )}
        {...props}
      >
        <div
          className="fixed inset-0 overflow-hidden z-0 opacity-40"
          style={
            {
              // --- UPDATED AURORA COLORS ---
              // Picked colors from your app's palette and similar warm tones
              "--aurora":
                "repeating-linear-gradient(100deg,var(--orange-500)_10%,var(--yellow-300)_15%,var(--peach-200)_20%,var(--cream-100)_25%,var(--orange-400)_30%)",

              "--dark-gradient":
                "repeating-linear-gradient(100deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)",
              "--white-gradient":
                "repeating-linear-gradient(100deg,#fff_0%,#fff_7%,transparent_10%,transparent_12%,#fff_16%)",

              // --- NEW CUSTOM COLOR VARIABLES ---
              // These are based on your app's screenshot for better harmony
              "--orange-500": "#F59E0B", // Tailwind orange-500, similar to your app's main orange
              "--orange-400": "#FB923C", // Tailwind orange-400
              "--yellow-300": "#FCD34D", // Tailwind yellow-300, a soft yellow
              "--peach-200": "#FDBA74", // A custom peachy/light orange
              "--cream-100": "#FEF3C7", // Tailwind yellow-100, a very light cream
              // Re-defining existing ones just in case:
              "--black": "#000",
              "--white": "#ffffff66",
              "--transparent": "transparent",
            } as React.CSSProperties
          }
        >
          <div
            className={cn(
              `after:animate-aurora pointer-events-none absolute -inset-[10px] [background-image:var(--white-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] opacity-50 blur-[10px] invert filter will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--orange-500)_10%,var(--yellow-300)_15%,var(--peach-200)_20%,var(--cream-100)_25%,var(--orange-400)_30%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed] after:mix-blend-difference after:content-[""] dark:[background-image:var(--dark-gradient),var(--aurora)] dark:invert-0 after:dark:[background-image:var(--dark-gradient),var(--aurora)]`,

              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
            )}
          ></div>
        </div>
        <div className="relative z-10">{children}</div>
      </div>
    </main>
  );
};
