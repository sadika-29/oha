"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function AboutIntro() {
  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Top label row */}
        <motion.div
          className="flex items-center justify-between mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-gray-400">
            About the Practice
          </span>
          <span className="text-[11px] font-mono text-gray-300">
            Est. 2008
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[5fr_4fr] gap-12 lg:gap-20 items-end">

          {/* Left: headline + body + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-none mb-10">
              OHA<br />Design<br />Workshop.
            </h1>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-lg mb-10">
              OHA Design Workshop is a boutique architectural practice based in
              North Sydney, led by Principal Architect Omar Ahmed. We specialise
              in residential property development, environmentally sustainable
              design (ESD), and modern hospitality — delivering architecture
              and interiors that are rooted in place, grounded in craft, and
              built to last.
            </p>
            <div className="flex items-center gap-8">
              <a
                href="/work/residential"
                className="group inline-flex items-center gap-1.5 text-sm text-gray-900 border-b border-gray-900 pb-0.5 hover:border-gray-400 hover:text-gray-400 transition-colors duration-200"
              >
                View our services
                <ArrowUpRight size={14} strokeWidth={1.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>
              <a
                href="/contact"
                className="group inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-900 transition-colors duration-200"
              >
                Start a project
                <ArrowUpRight size={14} strokeWidth={1.5} />
              </a>
            </div>
          </motion.div>

          {/* Right: image */}
          <motion.div
            className="relative h-[400px] md:h-[520px] overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
          >
            <Image
              src="/project-02.jpg"
              alt="OHA Design Workshop studio"
              fill
              sizes="(max-width: 1024px) 100vw, 44vw"
              className="object-cover"
              priority
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
