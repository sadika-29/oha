"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const contactDetails = [
  { label: "Studio", value: "OHA Design Workshop" },
  { label: "Address", value: "Level 10, 122 Arthur Street, North Sydney NSW" },
  { label: "Principal", value: "Omar Ahmed" },
  { label: "Email", value: "studio@ohadesign.com.au" },
];

export default function CTA() {
  return (
    <section className="bg-black py-24 md:py-32 mx-4 lg:mx-7 rounded-xl">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Label */}
        <motion.div
          className="flex items-center justify-between mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-white/30">
            Get in Touch
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 lg:gap-24">

          {/* Left: headline + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-[3.75rem] font-light tracking-tight leading-[1.0] text-white mb-8">
              Have a project<br />in mind?
            </h2>
            <p className="text-white/40 text-sm md:text-base leading-relaxed max-w-md mb-12">
              We work with clients who value design that is thoughtful,
              enduring, and beautifully resolved. Tell us about your project
              and we will be in touch shortly.
            </p>

            <div className="flex items-center gap-8">
              <a
                href="/contact"
                className="group inline-flex items-center gap-1.5 text-sm text-white border-b border-white/50 pb-0.5 hover:border-white/20 hover:text-white/50 transition-colors duration-200"
              >
                Start a project
                <ArrowUpRight
                  size={14}
                  strokeWidth={1.5}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                />
              </a>
              <a
                href="/work/residential"
                className="group inline-flex items-center gap-1.5 text-sm text-white/35 hover:text-white transition-colors duration-200"
              >
                View our work
                <ArrowUpRight size={14} strokeWidth={1.5} />
              </a>
            </div>
          </motion.div>

          {/* Right: contact detail sheet */}
          <motion.div
            className="border-t border-white/10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
          >
            {contactDetails.map(({ label, value }) => (
              <div
                key={label}
                className="flex items-baseline justify-between py-4 border-b border-white/10"
              >
                <span className="text-[11px] font-mono tracking-[0.15em] uppercase text-white/25">
                  {label}
                </span>
                <span className="text-sm text-white/55 text-right max-w-[55%]">
                  {value}
                </span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
