"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Campaign = {
  id: string;
  name: string;
  year?: string;
  imageUrl?: string;
  description: React.ReactNode;
};

interface CampaignsClientProps {
  campaigns: Campaign[];
}

export default function CampaignsClient({ campaigns }: CampaignsClientProps) {
  const [featured, ...rest] = campaigns;

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Section label */}
        <motion.div
          className="flex items-center justify-between mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-gray-400">
            Selected Work
          </span>
          <div className="flex items-center gap-4">
            <span className="text-[11px] font-mono text-gray-300">
              {String(campaigns.length).padStart(2, "0")} Projects
            </span>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-4 py-2 text-[10px] font-mono tracking-[0.2em] uppercase text-stone-700 transition-colors duration-300 hover:border-stone-900 hover:text-stone-900"
            >
              View All
              <ArrowUpRight size={13} strokeWidth={1.5} />
            </Link>
          </div>
        </motion.div>

        {/* Featured project — asymmetric split */}
        {featured && (
          <motion.div
            className="group grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-0 mb-2 cursor-pointer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Image pane */}
            <div className="relative h-[340px] md:h-[520px] overflow-hidden bg-stone-900">
              {featured.imageUrl && (
                <Image
                  src={featured.imageUrl}
                  alt={featured.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
              {/* Year chip bottom-left of image */}
              {featured.year && (
                <span className="absolute bottom-5 left-5 text-[10px] font-mono tracking-widest uppercase text-white/60 bg-black/30 px-2 py-1 backdrop-blur-sm">
                  {featured.year}
                </span>
              )}
            </div>

            {/* Text pane */}
            <div className="flex flex-col justify-between bg-stone-950 text-white p-8 md:p-12">
              <div>
                <p className="text-[10px] font-mono tracking-[0.25em] uppercase text-white/30 mb-6">
                  01 / Featured
                </p>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight mb-6">
                  {featured.name}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {featured.description}
                </p>
              </div>
              <div className="mt-10 flex items-center gap-3 text-sm text-white/40 group-hover:text-white/70 transition-colors duration-300">
                <span className="font-mono tracking-widest text-xs uppercase">Enquire</span>
                <ArrowUpRight size={16} strokeWidth={1.5} />
              </div>
            </div>
          </motion.div>
        )}

        {/* Remaining projects — side-by-side panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {rest.map((campaign, i) => (
            <motion.div
              key={campaign.id}
              className="group relative h-[280px] md:h-[360px] overflow-hidden bg-stone-900 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
                delay: i * 0.1,
              }}
            >
              {/* Full-bleed image */}
              {campaign.imageUrl && (
                <Image
                  src={campaign.imageUrl}
                  alt={campaign.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Text overlay — bottom left */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/40 mb-2">
                  {String(i + 2).padStart(2, "0")}{campaign.year ? ` / ${campaign.year}` : ""}
                </p>
                <h3 className="text-xl md:text-2xl font-light tracking-tight text-white leading-snug">
                  {campaign.name}
                </h3>
                {/* Animated underline on hover */}
                <div className="mt-3 h-px bg-white/30 w-0 group-hover:w-full transition-all duration-500 ease-out" />
                {/* Description — revealed on hover */}
                <p className="mt-3 text-xs text-white/50 leading-relaxed max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500 ease-out">
                  {campaign.description}
                </p>
              </div>

              {/* Arrow — top right, appears on hover */}
              <div className="absolute top-5 right-5 w-9 h-9 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight size={15} strokeWidth={1.5} className="text-white" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
