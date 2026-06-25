"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TeamHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6"
    >
      <h2 className="text-5xl md:text-6xl font-light tracking-tight leading-none">
        Our<br />Team
      </h2>
      <p className="text-sm text-gray-500 max-w-xs md:text-right leading-relaxed">
        A senior team of architects, interior designers, and sustainability
        consultants united by a shared commitment to thoughtful, enduring design.
      </p>
    </motion.div>
  );
}
