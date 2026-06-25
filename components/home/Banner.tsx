"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Banner() {
  return (
    <section className="relative mt-[10px] mx-4 lg:mx-7 h-[580px] sm:h-[700px] lg:h-[800px] overflow-hidden rounded-2xl">
      <Image
        src="/banner-02.jpg"
        alt="OHA Design Workshop"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Gradient: dark top bar + heavier dark at bottom for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />

      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-7 sm:px-10 py-6">
        <motion.span
          className="text-[11px] font-mono tracking-[0.25em] uppercase text-white/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          OHA Design Workshop
        </motion.span>
        <motion.a
          href="/contact"
          className="group flex items-center gap-1.5 text-[11px] font-mono tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors duration-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Enquire
          <ArrowUpRight size={11} strokeWidth={1.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
        </motion.a>
      </div>

      {/* Bottom-left stacked headline */}
      <div className="absolute bottom-0 left-0 right-0 px-7 sm:px-10 pb-10 sm:pb-14">
        <div className="overflow-hidden">
          <motion.h1
            className="text-[clamp(3.5rem,9vw,7.5rem)] font-light text-white tracking-tight leading-[0.92] mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
          >
            Design.<br />Build.<br />Inspire.
          </motion.h1>
        </div>

        {/* Location tag */}
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="h-px w-8 bg-white/30" />
          <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-white/40">
            Architecture &amp; Interiors — North Sydney
          </span>
        </motion.div>
      </div>
    </section>
  );
}
