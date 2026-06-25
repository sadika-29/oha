"use client";

import React from "react";
import { motion } from "framer-motion";

const items = [
  {
    number: "01",
    title: "Our Mission",
    description:
      "To design buildings and spaces that improve the lives of the people who inhabit them — through thoughtful architecture, responsible sustainability practices, and an unwavering commitment to craft and quality.",
  },
  {
    number: "02",
    title: "Our Vision",
    description:
      "A built environment where beauty and sustainability are inseparable — where every building contributes positively to its neighbourhood, its occupants, and the planet.",
  },
];

export default function MissionAndVision() {
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
            Our Values
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-20">

          {/* Left: heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="text-5xl md:text-6xl font-light tracking-tight leading-none">
              Inside<br />OHA
            </h2>
          </motion.div>

          {/* Right: mission + vision rows */}
          <div className="border-t border-gray-100">
            {items.map((item, index) => (
              <motion.div
                key={item.number}
                className="py-8 border-b border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.1 }}
              >
                <div className="flex gap-6">
                  <span className="text-xs font-mono tracking-widest text-gray-300 w-8 flex-shrink-0 pt-1">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
