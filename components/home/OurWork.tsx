"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ITEMS = [
  {
    id: "residential",
    number: "01",
    title: "Residential Design",
    tag: "Architecture",
    summary:
      "Bespoke homes and multi-residential developments crafted around how people live — from concept through to construction.",
    href: "/work/residential",
    img: "/services/residential.png",
  },
  {
    id: "sustainable",
    number: "02",
    title: "Sustainable Design",
    tag: "ESD",
    summary:
      "Environmentally responsible architecture and ESD consulting that reduces operational carbon without compromising design quality.",
    href: "/work/sustainable",
    img: "/services/sustainable.png",
  },
  {
    id: "hospitality",
    number: "03",
    title: "Hospitality Architecture",
    tag: "Hospitality",
    summary:
      "Hotels, restaurants, and bars designed to create memorable guest experiences through atmosphere, materiality, and flow.",
    href: "/work/hospitality",
    img: "/services/hospitality.png",
  },
  {
    id: "interiors",
    number: "04",
    title: "Interior Design",
    tag: "Interiors",
    summary:
      "Complete interior environments — material palettes, furniture selection, lighting, and joinery — for residential and commercial clients.",
    href: "/work/interiors",
    img: "/services/interior.png",
  },
  {
    id: "commercial",
    number: "05",
    title: "Commercial Design",
    tag: "Commercial",
    summary:
      "Modern workplaces, commercial fitouts, and retail environments designed for productivity, collaboration, and environmental wellness.",
    href: "/work/commercial",
    img: "/services/residential.png",
  },
  {
    id: "education",
    number: "06",
    title: "Education Design",
    tag: "Education",
    summary:
      "Inspiring educational facilities, childcare centers, and collaborative classrooms built for flexible discovery and creative learning.",
    href: "/work/education",
    img: "/services/sustainable.png",
  },
];

export default function OurWorkCards() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="w-full bg-white text-black">
      <div className="max-w-7xl mx-auto py-20 px-5 md:px-8">

        {/* Header row */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-none">
            OUR<br />
            <span className="">SERVICES</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-xs md:max-w-sm md:text-right">
            Architecture, interiors, and sustainability — integrated design
            from first sketch to practical completion.
          </p>
        </motion.div>

        {/* Service rows */}
        <div className="border-t border-gray-200">
          {ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
                delay: index * 0.08,
              }}
            >
              <Link
                href={item.href}
                className="group block border-b border-gray-200"
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="relative overflow-hidden">

                  {/* Background image + overlay — fades in on hover */}
                  <div
                    className="absolute -inset-x-6 md:-inset-x-12 inset-y-0 transition-opacity duration-500"
                    style={{ opacity: hovered === item.id ? 1 : 0 }}
                  >
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover scale-105 transition-transform duration-700 group-hover:scale-100"
                    />
                    {/* Dark gradient overlay for text legibility */}
                    <div className="absolute inset-0 bg-black/65" />
                  </div>

                  <div className="relative flex items-start md:items-center justify-between py-7 md:py-9 px-6 md:px-12 gap-4">
                    {/* Number */}
                    <span
                      className={`text-xs font-mono tracking-widest w-8 flex-shrink-0 pt-1 md:pt-0 transition-colors duration-300 ${
                        hovered === item.id ? "text-white/40" : "text-gray-300"
                      }`}
                    >
                      {item.number}
                    </span>

                    {/* Title + description */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-4 mb-1">
                        <h3
                          className={`text-2xl md:text-3xl lg:text-4xl font-light tracking-tight transition-colors duration-300 ${
                            hovered === item.id ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {item.title}
                        </h3>
                        <span
                          className={`hidden md:inline-block text-xs uppercase tracking-widest border px-2 py-0.5 transition-colors duration-300 ${
                            hovered === item.id
                              ? "border-white/30 text-white/50"
                              : "border-gray-200 text-gray-400"
                          }`}
                        >
                          {item.tag}
                        </span>
                      </div>
                      <p
                        className={`text-sm leading-relaxed max-w-xl transition-colors duration-300 ${
                          hovered === item.id ? "text-white/60" : "text-gray-400"
                        }`}
                      >
                        {item.summary}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div
                      className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
                        hovered === item.id
                          ? "border-white/40 bg-white/10"
                          : "border-gray-200 bg-transparent"
                      }`}
                    >
                      <ArrowUpRight
                        size={18}
                        strokeWidth={1.5}
                        className={`transition-colors duration-300 ${
                          hovered === item.id ? "text-white" : "text-gray-400"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
