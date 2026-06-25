"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TeamPageHeader() {
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as any },
    },
  };

  const dividerVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as any, delay: 0.2 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as any, delay: 0.3 },
    },
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.div
        className="flex flex-col items-start justify-center md:pr-8"
        variants={headerVariants}
      >
        <div>
          <h1 className="leading-none">
            <span className="block text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
              OUR
            </span>
            <span className="block text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mt-1">
              TEAM
            </span>
          </h1>
          <motion.div
            className="hidden md:block h-px w-48 bg-gray-200 mt-8 origin-left"
            variants={dividerVariants}
          />
        </div>
      </motion.div>

      <motion.div className="md:col-span-2" variants={textVariants}>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-prose">
          A close-knit team of architects, designers, and consultants who bring
          deep expertise and genuine passion to every project — from first
          sketch to practical completion.
        </p>
      </motion.div>
    </motion.div>
  );
}
