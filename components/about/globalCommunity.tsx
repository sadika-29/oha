"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const facts = [
  { label: "HQ", value: "Level 10, 122 Arthur Street, North Sydney" },
  { label: "Projects", value: "50+ Completed" },
  { label: "Countries", value: "Australia · UAE · SE Asia" },
];

export default function StudioPresence() {
  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Section label */}
        <motion.div
          className="flex items-center justify-between mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-gray-400">
            Studio Presence
          </span>
        </motion.div>

        {/* Header grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-20 items-end mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="text-5xl md:text-6xl font-light tracking-tight leading-none">
              Reaching<br />beyond<br />Sydney.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
          >
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8">
              Based in North Sydney, OHA Design Workshop delivers projects across
              Australia and internationally. Our reach extends from Sydney&apos;s
              Inner West to the Northern Beaches, and from Southeast Asia to the
              Middle East.
            </p>
            <a
              href="/contact"
              className="group inline-flex items-center gap-1.5 text-sm text-gray-900 border-b border-gray-900 pb-0.5 hover:border-gray-400 hover:text-gray-400 transition-colors duration-200"
            >
              Get in touch
              <ArrowUpRight size={14} strokeWidth={1.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </a>
          </motion.div>
        </div>

        {/* Map panel */}
        <motion.div
          className="relative h-[400px] md:h-[500px] overflow-hidden bg-stone-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Image
            src="/map.jpg"
            alt="Studio presence map"
            fill
            className="object-contain opacity-30"
          />

          {/* Fact strip at bottom */}
          <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 pt-6 px-8 pb-8 flex flex-wrap gap-8">
            {facts.map(({ label, value }) => (
              <div key={label}>
                <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/30 mb-1">
                  {label}
                </p>
                <p className="text-white/60 text-sm">{value}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
