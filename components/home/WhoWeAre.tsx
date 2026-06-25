"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function WhoWeAre() {
  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Top label row */}
        <motion.div
          className="flex items-center justify-between mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-gray-400">
            About the Studio
          </span>
          <span className="text-[11px] font-mono text-gray-300">
            Est. 2008 — North Sydney
          </span>
        </motion.div>

        {/* Main grid: image left, text right — aligned to bottom */}
        <div className="grid grid-cols-1 md:grid-cols-[5fr_4fr] gap-8 md:gap-16 items-end">

          {/* Image column */}
          <motion.div
            className="relative h-[360px] md:h-[560px] overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Image
              src="/team.png"
              alt="OHA Design Workshop studio"
              fill
              sizes="(max-width: 768px) 100vw, 55vw"
              className="object-cover"
              priority
            />
            {/* Principal strip pinned to bottom of image */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/55 backdrop-blur-sm px-6 py-4 flex items-center justify-between">
              <div>
                <p className="text-white text-sm font-light">Our Team</p>
                {/* <p className="text-white/40 text-[10px] font-mono tracking-[0.2em] uppercase mt-0.5">
                  Principal Architect
                </p> */}
              </div>
              <div className="h-7 w-px bg-white/15" />
              <p className="text-white/30 text-[10px] font-mono tracking-wider">
                North Sydney, NSW
              </p>
            </div>
          </motion.div>

          {/* Text column — sits at the bottom of the grid row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-light tracking-tight leading-[1.1] text-gray-900 mb-8">
              A studio built on<br />considered design<br />and material honesty.
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-10">
              We are a close-knit team of architects, interior designers, and
              sustainability consultants united by a shared commitment to
              thoughtful, enduring design. Every project begins with careful
              listening and ends with spaces that genuinely improve the lives of
              the people who inhabit them.
            </p>

            {/* Minimal text-link CTAs */}
            <div className="flex items-center gap-8">
              <a
                href="/work/residential"
                className="group flex items-center gap-1.5 text-sm text-gray-900 border-b border-gray-900 pb-0.5 hover:border-gray-400 hover:text-gray-400 transition-colors duration-200"
              >
                Our Services
                <ArrowUpRight
                  size={14}
                  strokeWidth={1.5}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                />
              </a>
              <a
                href="/contact"
                className="group flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-900 transition-colors duration-200"
              >
                Start a project
                <ArrowUpRight size={14} strokeWidth={1.5} />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
