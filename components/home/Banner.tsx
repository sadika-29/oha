"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <section className="relative mt-[10px] mx-4 lg:mx-7 h-[580px] sm:h-[700px] lg:h-[800px] overflow-hidden rounded-2xl">
      <Image
        src="/oha/01 67 LUCERNE ST.jpg.jpeg"
        alt="OHA Design Workshop"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Full-image cinematic darkening to keep text legible while blending seamlessly */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(0,0,0,0.38),rgba(0,0,0,0.12)_30%,rgba(0,0,0,0.65)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/75" />

      {/* Main hero title */}
      <div className="absolute inset-0 flex items-end px-5 sm:px-10 pb-9 sm:pb-14">
        <div className="overflow-hidden">
          <motion.h1
            className="text-[clamp(3.2rem,13.5vw,10.8rem)] font-light text-white tracking-[-0.02em] leading-[0.88] mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
          >
            OHA<br />Design<br />Workshop
          </motion.h1>

          <motion.p
            className="text-[13px] sm:text-[15px] font-mono tracking-[0.22em] uppercase text-white/80 mb-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            Design. Build. Inspire.
          </motion.p>

          {/* Location tag */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="h-px w-8 bg-white/30" />
            <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-white/40">
              Architecture &amp; Interiors - North Sydney
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
