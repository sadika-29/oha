"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function OurStory() {
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
            Our Story
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-20">

          {/* Left: prose + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="text-sm md:text-base text-gray-500 leading-relaxed space-y-5">
              <p>
                OHA Design Workshop was founded in 2008 by Omar Ahmed, following
                years spent working with leading architectural practices in
                Sydney and London. The practice began with a simple conviction:
                that architecture should be made for people — responsive to the
                way they live, work, and move through the world.
              </p>
              <p>
                From the outset, sustainability was not an add-on but a design
                driver. The studio&apos;s earliest residential projects
                demonstrated that passive solar design, natural ventilation, and
                careful material selection could produce homes that were both
                beautiful and genuinely low-impact. That ethos has shaped every
                project since, from inner-city townhouses to regional retreats
                and boutique hotels.
              </p>
              <p>
                Today, OHA operates from its North Sydney studio with a small,
                senior team. We take on a carefully curated number of projects
                each year to ensure that every client receives the attention and
                design investment their brief deserves.
              </p>
            </div>
            <div className="mt-10">
              <a
                href="/contact"
                className="group inline-flex items-center gap-1.5 text-sm text-gray-900 border-b border-gray-900 pb-0.5 hover:border-gray-400 hover:text-gray-400 transition-colors duration-200"
              >
                Start a conversation
                <ArrowUpRight size={14} strokeWidth={1.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>
            </div>
          </motion.div>

          {/* Right: pull quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
          >
            <div className="border-l-2 border-gray-200 pl-8 sticky top-32">
              <p className="text-xl md:text-2xl font-light text-gray-700 leading-relaxed italic mb-4">
                &ldquo;Good architecture is not about spectacle. It is about making
                spaces where people feel at ease — spaces that age well, perform
                well, and reward a second look.&rdquo;
              </p>
              <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-gray-400">
                — Omar Ahmed, Principal
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
