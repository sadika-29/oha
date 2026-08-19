"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

type TeamMember = {
  _id: string;
  name: string;
  position?: string;
  background?: string;
  motivation?: string;
  contribution?: string;
  personalTouch?: string;
  imageUrl?: string | null;
};

export default function TeamPageGrid({ team }: { team: TeamMember[] }) {
  // Let's find the Principal Architect (or default to the first one)
  const principal = team.find(
    (member) => member.position === "Principal Architect"
  ) || team[0];

  // Rest of the team members
  const otherMembers = team.filter((member) => member._id !== principal._id);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1] as any,
      },
    },
  };

  return (
    <div className="space-y-16 md:space-y-24">
      {/* Main Principal Architect Highlight */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={itemVariants}
        className="bg-gray-50 border border-gray-100 rounded-2xl p-8 md:p-12 lg:p-16 flex flex-col md:flex-row gap-8 items-start justify-between"
      >
        <div className="max-w-3xl space-y-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary px-3 py-1 bg-primary/10 rounded-full inline-block mb-3">
              {principal.position}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900">
              {principal.name}
            </h2>
          </div>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-light">
            {principal.background}
          </p>
          {(principal.motivation || principal.contribution) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-gray-200">
              {principal.motivation && (
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold uppercase text-gray-400 tracking-wider">
                    Our Philosophy
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {principal.motivation}
                  </p>
                </div>
              )}
              {principal.contribution && (
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold uppercase text-gray-400 tracking-wider">
                    Role & Directorship
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {principal.contribution}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="self-end md:self-center">
          <Button asChild size="lg" className="hover:scale-105 transition-transform shadow-md">
            <Link href="/portfolio">
              View Portfolio
            </Link>
          </Button>
        </div>
      </motion.div>

      {/* Other Team Members section */}
      <div className="space-y-8">
        <div className="border-b border-gray-200 pb-4">
          <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-gray-900">
            Our Studio Team
          </h3>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {otherMembers.map((member) => (
            <motion.div
              key={member._id}
              variants={itemVariants}
              className="bg-white border border-gray-100 rounded-xl p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div>
                  <h4 className="text-lg font-medium text-gray-900">
                    {member.name}
                  </h4>
                  <p className="text-sm font-semibold text-primary/80">
                    {member.position}
                  </p>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.background || member.motivation || "Highly experienced practitioner contributing with passion."}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* General Call to Action to leading to portfolio */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={itemVariants}
        className="pt-8 text-center"
      >
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12 border border-gray-100 max-w-3xl mx-auto space-y-6">
          <h3 className="text-2xl font-semibold tracking-tight text-gray-900">
            Discover Our Architecture & Design Output
          </h3>
          <p className="text-gray-600 max-w-lg mx-auto">
            From award-winning private residences to community projects, see how our team turns vision into reality.
          </p>
          <div>
            <Button asChild size="lg" variant="outline" className="hover:bg-primary hover:text-white transition-colors duration-300">
              <Link href="/portfolio">
                Explore the Portfolio
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
