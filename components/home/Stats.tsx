"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Stat {
  id: string;
  value: string;
  label: string;
  description: string;
}

const stats: Stat[] = [
  {
    id: "projects",
    value: "50+",
    label: "Projects Completed",
    description: "Residential, hospitality & commercial",
  },
  {
    id: "awards",
    value: "12",
    label: "Design Awards",
    description: "Recognised for architectural excellence",
  },
  {
    id: "experience",
    value: "15+",
    label: "Years of Practice",
    description: "Considered design since 2008",
  },
  {
    id: "countries",
    value: "3",
    label: "Countries",
    description: "Australia, UAE & Southeast Asia",
  },
];

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

function formatNumber(n: number) {
  return new Intl.NumberFormat().format(Math.round(n));
}

function useCountUp(target: number, startWhen: boolean, duration = 1500) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!startWhen) return;
    let start: number | null = null;
    let rafId: number;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(1, elapsed / duration);
      const eased = easeOutCubic(progress);
      setValue(target * eased);
      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [target, startWhen, duration]);

  return value;
}

function CountUp({
  valueStr,
  inView,
  duration = 1400,
}: {
  valueStr: string;
  inView: boolean;
  duration?: number;
}) {
  const num = parseInt(valueStr.replace(/[^0-9]/g, "")) || 0;
  const suffix = /\+$/.test(valueStr) ? "+" : "";
  const current = useCountUp(num, inView, duration);

  return (
    <span aria-live="polite" aria-atomic="true">
      {formatNumber(current)}{suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section ref={ref} className="w-full bg-neutral-950 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Top label row */}
        <motion.div
          className="flex items-center justify-between mb-16 md:mb-20"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-white/30">
            Studio Metrics
          </span>
          <span className="text-[11px] font-mono text-white/20">
            As of 2024
          </span>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.id}
              className={`py-8 md:py-0 ${
                i < stats.length - 1 ? "border-r border-white/[0.07]" : ""
              } ${i > 0 ? "pl-6 md:pl-10" : ""} ${
                i < stats.length - 1 ? "pr-6 md:pr-10" : ""
              }`}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
                delay: i * 0.1,
              }}
            >
              <div className="text-6xl md:text-7xl lg:text-8xl font-light text-white tracking-tight leading-none mb-4">
                <CountUp valueStr={stat.value} inView={inView} />
              </div>
              <p className="text-[11px] font-mono tracking-[0.2em] uppercase text-white/40 mb-1">
                {stat.label}
              </p>
              <p className="text-xs text-white/25 leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
