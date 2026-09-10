"use client";

import Image from "next/image";
import { Google_Sans_Flex } from "next/font/google";
import { motion, type Variants } from "framer-motion";
import { Zap, Users, Star, type LucideIcon } from "lucide-react";
import { GradientButton } from "./ui/Button";
import GradientWaves from "./GradientWaves";
import { AvatarCircles } from "@/components/ui/avatar-circles"

const googleSansFlex = Google_Sans_Flex({
  subsets: ["latin"],
  weight: "variable",
});

interface FloatingChipProps {
  icon: LucideIcon;
  label: string;
  value: string;
  className: string;
  delay: number;
}


const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      className={`${googleSansFlex.className} relative min-h-screen w-full overflow-hidden bg-white px-4 pb-28 pt-10 mt-20 sm:pt-24`}
    >
      {/* ================= FIXED BACKGROUND CANVAS LAYER ================= */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-[780px] lg:h-[980px] z-0 overflow-hidden">
        <div className="relative w-full h-full">
          <GradientWaves
    horizonColor="#3497ff"
    waveColor="#0079ff"
    crestColor="#00b4fb"
    speed={0.15}
    amplitude={5}
    waveScale={0.85}
    waveRatio={0.9}
    swell={35}
    turbulence={7}
    tilt={1.05}
    zoom={1.25}
    height={9.5}
    fogDepth={11}
    detail="medium"
    brightness={0.85}
    opacity={1}
    grain
    grainIntensity={0.03}
    mouseInteraction
    parallaxStrength={0.03}
  />
        </div>
        
        {/* Smooth Bottom Vignette Fade to White */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent via-white/80 to-white z-10" />
      </div>
      {/* ================================================================= */}

      {/* Hero Header Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-3xl text-center"
      >
        <motion.h1
          variants={rise}
          className="mx-auto max-w-xl lg:max-w-4xl text-4xl lg:text-6xl font-semibold leading-[1.15] tracking-tight text-[#0F1728] sm:text-5xl md:text-[3.35rem]"
        >
          Stuck on a problem?{" "}
          <span className="relative -top-1 mx-1 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-b from-[#3FA0F7] to-[#0A63E0] align-middle shadow-[0_8px_18px_-4px_rgba(10,99,224,0.55)] sm:h-11 sm:w-11 sm:rounded-2xl">
            <Zap className="h-5 w-5 fill-white text-white sm:h-6 sm:w-6" strokeWidth={0} />
          </span>{" "}
          Get instant 1-on-1 expert help
        </motion.h1>

        <motion.p
          variants={rise}
          className="mx-auto mt-5 max-w-sm lg:max-w-md text-[15px] leading-relaxed text-[#64748B] sm:text-base"
        >
          We connect students with expert tutors in minutes. Book a live
          session the moment you get stuck and walk away with it solved.
        </motion.p>

        


        <motion.div variants={rise} className="mt-5 flex justify-center">
          <GradientButton>Book a Free Session</GradientButton>
        </motion.div>
        
      </motion.div>

       <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          className="relative aspect-[10/9] lg:aspect-[12/4] w-full bottom-10 overflow-hidden"
        >
          <Image
            src="/hero.png"
            alt="Tutor teaching students live over video call"
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-contain"
            priority
          />
        </motion.div>

        
      {/* Live session showcase */}
    
    </section>
  );
}