"use client";
import Image from "next/image";
import Landing from "./landing/landing";
import Hero from "./hero/hero";
import Features from "./features/features";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "motion/react";
import Navigation from "./navigation/navigation";
import Footer from "./footer/Footer";

export default function Home() {
  return (
    <AuroraBackground>
      <Navigation></Navigation>
      <section>
        <Landing></Landing>
      </section>
      <section id="about">
        <Hero></Hero>
      </section>
      <section id="features">
        <Features></Features>
      </section>
      <Footer></Footer>
    </AuroraBackground>
  );
}
