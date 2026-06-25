"use client";

import React from "react";
import { motion } from "framer-motion";

const milestones = [
  {
    year: "2008",
    title: "Practice Founded",
    description:
      "Omar Ahmed establishes OHA Design Workshop in Sydney, taking on the first residential commissions after years with leading practices in Australia and the UK.",
  },
  {
    year: "2012",
    title: "First Award",
    description:
      "OHA receives the HIA NSW Award for Best Custom Home for the Hunters Hill Residence — a passive solar home marking the studio's commitment to sustainable design.",
  },
  {
    year: "2015",
    title: "Hospitality Expansion",
    description:
      "The studio completes its first major hospitality project — a 28-room boutique hotel in Surry Hills — cementing expertise in accommodation and restaurant design.",
  },
  {
    year: "2018",
    title: "ESD Certification",
    description:
      "OHA achieves Green Star accreditation and begins offering ESD consulting as a dedicated service, advising clients on net-zero pathways.",
  },
  {
    year: "2022",
    title: "North Sydney Studio",
    description:
      "The practice moves to its current home at Level 10, 122 Arthur Street, North Sydney — a purpose-fitted studio designed by the team themselves.",
  },
  {
    year: "2024",
    title: "Growing Portfolio",
    description:
      "With 50+ completed projects across residential, hospitality, and commercial sectors, OHA continues to grow its presence in Australia and internationally.",
  },
];

export default function JourneyMap() {
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
            Timeline
          </span>
        </motion.div>

        {/* Header grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-20 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="text-5xl md:text-6xl font-light tracking-tight leading-none">
              Our<br />Journey
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
          >
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              From a small Sydney practice to an award-winning studio with
              projects across Australia and beyond.
            </p>
          </motion.div>
        </div>

        {/* Milestone rows */}
        <div className="border-t border-gray-200">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              className="border-b border-gray-200 py-7 md:py-8"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
                delay: index * 0.08,
              }}
            >
              <div className="flex items-start gap-6 md:gap-10">
                <span className="text-xs font-mono tracking-widest text-gray-300 w-16 flex-shrink-0 pt-1">
                  {milestone.year}
                </span>
                <div>
                  <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed max-w-2xl">
                    {milestone.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
