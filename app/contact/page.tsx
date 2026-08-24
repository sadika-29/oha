"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const studioLocations = [
  {
    city: "North Sydney",
    details: [
      { label: "Studio", value: "OHA Design Workshop" },
      { label: "Address", value: "Level 10, 122 Arthur Street, North Sydney NSW 2060" },
      { label: "Principal", value: "Omar Ahmed" },
      { label: "Phone", value: "+61 2 8033 0564", href: "tel:+61280330564" },
      { label: "Email", value: "studio@ohadesign.com.au", href: "mailto:studio@ohadesign.com.au" },
    ],
  },
  {
    city: "North Sydney",
    details: [
      { label: "Studio", value: "OHA Design Workshop" },
      { label: "Address", value: "Level 10, 122 Arthur Street, North Sydney NSW 2060" },
      { label: "Phone", value: "+61 2 8033 0564", href: "tel:+61280330564" },
      { label: "Email", value: "studio@ohadesign.com.au", href: "mailto:studio@ohadesign.com.au" },
    ],
  },
];

export default function ContactPage() {
  return (
    <section className="w-full bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        
        {/* Segment Tag Line */}
        <motion.div
          className="flex items-center justify-between mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-gray-400">
            CONNECT WITH US
          </span>
          <span className="text-[11px] font-mono text-gray-300">
            Est. 2008
          </span>
        </motion.div>

        {/* Hero Row Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 lg:gap-24 items-start pb-16 border-b border-gray-100">
          
          {/* Left Area - Premium headline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-light tracking-tight leading-[1.0] text-gray-900 mb-8">
              Let's craft spaces<br />that endure.
            </h1>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-lg">
              Whether you have a fully formed masterplan brief or are looking for initial advice on a site's potential, we are always open to starting new design conversations. Our consultations are collaborative, clear, and complimentary.
            </p>
          </motion.div>

          {/* Right Area - Hours & Operational Details */}
          <motion.div
            className="space-y-6 pt-[0.5rem] lg:pt-[1.5rem]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
          >
            <h3 className="text-sm font-mono tracking-[0.2em] text-gray-400 uppercase">
              STUDIO HOURS & DIRECT CONTACT
            </h3>
            <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
              <p>
                <strong className="font-semibold text-gray-900">General Enquiries:</strong><br />
                <Link href="mailto:studio@ohadesign.com.au" className="hover:text-primary transition-colors underline underline-offset-4">
                  studio@ohadesign.com.au
                </Link>
              </p>
              <p>
                <strong className="font-semibold text-gray-900">Media & Collaborations:</strong><br />
                We are open to working with local and international contractors, suppliers, and press teams.
              </p>
              <p className="pt-2 border-t border-gray-100 text-xs text-gray-400">
                Operating Hours: Monday – Friday, 9:00 am – 5:30 pm AEST (Excludes public holidays).
              </p>
            </div>
          </motion.div>
        </div>

        {/* Location cards - 2 column layout matching home page facts architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 pt-16">
          {studioLocations.map((loc) => (
            <motion.div
              key={loc.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <h2 className="text-2xl font-light tracking-tight text-gray-900">
                  {loc.city}
                </h2>
                <span className="text-[10px] font-mono tracking-wider text-gray-400 uppercase">
                  Australia
                </span>
              </div>
              <div className="space-y-4">
                {loc.details.map((detail) => (
                  <div
                    key={detail.label}
                    className="flex justify-between items-baseline py-2 border-b border-gray-50 text-sm"
                  >
                    <span className="text-[11px] font-mono tracking-[0.15em] uppercase text-gray-400">
                      {detail.label}
                    </span>
                    <span className="text-gray-700 text-right max-w-[65%]">
                      {detail.href ? (
                        <Link href={detail.href} className="hover:text-primary transition-colors underline underline-offset-2">
                          {detail.value}
                        </Link>
                      ) : (
                        detail.value
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
