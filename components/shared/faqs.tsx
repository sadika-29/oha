"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    id: "services",
    q: "What services does OHA Design Workshop offer?",
    a: "OHA provides a fully integrated design service across four core areas: Residential Design (new homes, renovations, and multi-residential developments), Sustainable Design / ESD (Green Star consulting, passive design, net-zero homes), Hospitality Architecture (hotels, restaurants, bars, and mixed-use venues), and Interior Design (material selection, joinery, lighting, and FF&E procurement).",
  },
  {
    id: "process",
    q: "How does your design process work?",
    a: "Our process follows five stages: Discovery (initial consultation to understand your brief, site, and budget), Concept Design (sketch options and schematic floor plans), Design Development (refined drawings, material palettes, and consultant coordination), Documentation (construction drawings and specifications for council approval and tendering), and Construction (site administration, progress inspections, and practical completion).",
  },
  {
    id: "esd",
    q: "What does environmentally sustainable design mean in practice?",
    a: "ESD means designing buildings that use less energy, generate less waste, and create healthier spaces for occupants. At OHA this includes passive solar orientation, cross-ventilation, high-performance insulation, all-electric services, rooftop solar, rainwater harvesting, and Green Star or BASIX compliance. We incorporate sustainability from the first sketch, not as an afterthought.",
  },
  {
    id: "project-types",
    q: "What types and sizes of project do you take on?",
    a: "We work on projects ranging from single-dwelling renovations to multi-residential developments and boutique hospitality venues. Our boutique size means every client works directly with Principal Architect Omar Ahmed and our senior team — we do not outsource design decisions or pass work to junior staff.",
  },
  {
    id: "start",
    q: "How do I start a project with OHA?",
    a: "Submit an enquiry via our contact page and we will arrange a no-obligation initial consultation (in-studio or video call). Following the consultation, we provide a fee proposal tailored to your project scope. Our studio is at Level 10, 122 Arthur Street, North Sydney NSW 2060.",
  },
];

export default function Faqs() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="w-full bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-none">
            COMMON<br />
            <span>QUESTIONS</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-xs md:max-w-sm md:text-right">
            Everything you need to know before starting a project with our studio.
          </p>
        </motion.div>

        {/* FAQ rows */}
        <div className="border-t border-gray-200">
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.06 }}
                className="border-b border-gray-200"
              >
                <button
                  className="w-full flex items-start md:items-center justify-between gap-6 py-7 md:py-8 px-5 md:px-8 text-left group"
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                >
                  <div className="flex items-start md:items-center gap-6 flex-1 min-w-0">
                    <span className="text-xs font-mono tracking-widest text-gray-300 flex-shrink-0 pt-1 md:pt-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className={`text-xl md:text-2xl font-light tracking-tight transition-colors duration-200 ${isOpen ? "text-gray-900" : "text-gray-700 group-hover:text-gray-900"}`}>
                      {faq.q}
                    </span>
                  </div>

                  {/* +/− indicator */}
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                      className="block text-2xl font-light text-gray-400 leading-none select-none"
                    >
                      +
                    </motion.span>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 px-5 md:px-8 pl-[4.5rem] md:pl-[4.5rem] text-sm md:text-base text-gray-500 leading-relaxed max-w-3xl">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
