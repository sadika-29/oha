"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const facts = [
  { label: "Principal", value: "Omar Ahmed" },
  { label: "Founded", value: "2008" },
  { label: "Location", value: "North Sydney, NSW" },
  { label: "Specialisms", value: "Residential · ESD · Hospitality" },
  { label: "Approach", value: "Design-led, material honesty" },
];

export default function AboutUs() {
  return (
    <section className="w-full bg-white py-24 md:py-32">
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
            The Practice
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 lg:gap-24">

          {/* Left: headline + description + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-light tracking-tight leading-[1.05] text-gray-900 mb-8">
              Boutique architecture for clients who value design that lasts.
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-lg mb-10">
              OHA Design Workshop is a practice led by Principal Architect Omar
              Ahmed, delivering bespoke residential, sustainable, and hospitality
              architecture across Sydney and beyond. Every project begins with
              careful listening and ends with spaces that genuinely improve the
              lives of those who inhabit them.
            </p>
            <a
              href="/about"
              className="group inline-flex items-center gap-1.5 text-sm text-gray-900 border-b border-gray-900 pb-0.5 hover:border-gray-400 hover:text-gray-400 transition-colors duration-200"
            >
              About the practice
              <ArrowUpRight
                size={14}
                strokeWidth={1.5}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
              />
            </a>
          </motion.div>

          {/* Right: practice fact sheet */}
          <motion.div
            className="border-t border-gray-100"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
          >
            {facts.map(({ label, value }) => (
              <div
                key={label}
                className="flex items-baseline justify-between py-4 border-b border-gray-100"
              >
                <span className="text-[11px] font-mono tracking-[0.15em] uppercase text-gray-400">
                  {label}
                </span>
                <span className="text-sm text-gray-700 text-right">{value}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
