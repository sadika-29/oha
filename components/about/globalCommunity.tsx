"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { geoRobinson } from "d3-geo-projection";
import { ArrowUpRight,  MapPin } from "lucide-react";

const MAP_VIEWBOX_WIDTH = 2000;
const MAP_VIEWBOX_HEIGHT = 857;

const robinsonProjection = geoRobinson().fitExtent(
  [
    [0, 0],
    [MAP_VIEWBOX_WIDTH, MAP_VIEWBOX_HEIGHT],
  ],
  { type: "Sphere" }
);

type InteractiveLocation = {
  id: string;
  name: string;
  longitude: number;
  latitude: number;
  svgAnchorId?: string;
  highlightIds: string[];
  description: string;
  projects: string;
};

const interactiveLocations: InteractiveLocation[] = [
  {
    id: "sydney",
    name: "North Sydney (HQ)",
    longitude: 151.2073,
    latitude: -33.8406,
    highlightIds: ["AU"],
    description:
      "Our main studio leads concept development, project management, and structural strategy.",
    projects: "30+ Projects",
  },
  {
    id: "brisbane",
    name: "East Brisbane",
    longitude: 153.0434,
    latitude: -27.481,
    highlightIds: ["AU"],
    description:
      "Our satellite design hub focuses on tropical hospitality and coastal residential work.",
    projects: "12+ Projects",
  },
  {
    id: "dubai",
    name: "Dubai (Middle East)",
    longitude: 55.2708,
    latitude: 25.2048,
    svgAnchorId: "AE",
    highlightIds: ["AE", "OM", "SA"],
    description:
      "Consultancy presence focused on residential expansion, wellness strategies, and sustainable architecture.",
    projects: "5+ Projects",
  },
  {
    id: "singapore",
    name: "Southeast Asia",
    longitude: 103.8198,
    latitude: 1.3521,
    highlightIds: ["MY", "TH", "VN", "ID", "PH"],
    description:
      "Bespoke hotel interiors and high-density residential strategies tailored for urban tropical contexts.",
    projects: "6+ Projects",
  },
];

function normalizeSvgMarkup(markup: string) {
  return markup
    .replace(/<\?xml[\s\S]*?\?>/i, "")
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/\swidth="[^"]*"/gi, "")
    .replace(/\sheight="[^"]*"/gi, "")
    .replace(/viewbox=/i, "viewBox=")
    .replace(
      /<svg\b/i,
      '<svg class="studio-presence-map-svg" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" aria-hidden="true"'
    );
}

function projectToPercent(longitude: number, latitude: number) {
  const point = robinsonProjection([longitude, latitude]);

  if (!point) {
    return { x: "50%", y: "50%" };
  }

  const [x, y] = point;

  return {
    x: `${(x / MAP_VIEWBOX_WIDTH) * 100}%`,
    y: `${(y / MAP_VIEWBOX_HEIGHT) * 100}%`,
  };
}

export default function StudioPresence() {
  const [activeLoc, setActiveLoc] = useState<InteractiveLocation | null>(
    interactiveLocations[0]
  );
  const [mapMarkup, setMapMarkup] = useState<string>("");
  const [svgAnchors, setSvgAnchors] = useState<Record<string, { x: string; y: string }>>({});
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let isMounted = true;

    fetch("/world-map.svg")
      .then((response) => response.text())
      .then((markup) => {
        if (isMounted) {
          setMapMarkup(normalizeSvgMarkup(markup));
        }
      })
      .catch(() => {
        if (isMounted) {
          setMapMarkup("");
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!mapMarkup || !mapContainerRef.current) {
      return;
    }

    const nextAnchors: Record<string, { x: string; y: string }> = {};
    const svgRoot = mapContainerRef.current.querySelector("svg");

    if (!svgRoot) {
      return;
    }

    interactiveLocations.forEach((loc) => {
      if (!loc.svgAnchorId) {
        return;
      }

      const svgPath = svgRoot.querySelector<SVGGraphicsElement>(`#${loc.svgAnchorId}`);

      if (!svgPath) {
        return;
      }

      const box = svgPath.getBBox();
      nextAnchors[loc.id] = {
        x: `${((box.x + box.width / 2) / MAP_VIEWBOX_WIDTH) * 100}%`,
        y: `${((box.y + box.height / 2) / MAP_VIEWBOX_HEIGHT) * 100}%`,
      };
    });

    setSvgAnchors(nextAnchors);
  }, [mapMarkup]);

  const activeRegionStyles = useMemo(() => {
    const activeIds = activeLoc?.highlightIds ?? [];

    return activeIds
      .map(
        (id) => `#${id} { fill: rgba(255,255,255,0.42); stroke: rgba(255,255,255,0.55); }`
      )
      .join("\n");
  }, [activeLoc]);

  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <motion.div
          className="flex items-center justify-between mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-gray-400">
            Studio Presence
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-20 items-end mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="text-5xl md:text-6xl font-light tracking-tight leading-none">
              Interactive
              <br />
              Presence
              <br />
              Map.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
          >
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8">
              Explore our physical studios and project networks globally. Hover,
              tap, or select each marked location to see how the studio operates
              across regions.
            </p>
            <a
              href="/contact"
              className="group inline-flex items-center gap-1.5 text-sm text-gray-900 border-b border-gray-900 pb-0.5 hover:border-gray-400 hover:text-gray-400 transition-colors duration-200"
            >
              Get in touch
              <ArrowUpRight
                size={14}
                strokeWidth={1.5}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
              />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] bg-neutral-950 rounded-2xl overflow-hidden border border-neutral-800">
          <div className="relative h-[340px] md:h-[480px] bg-neutral-950 border-b lg:border-b-0 lg:border-r border-neutral-800 overflow-hidden select-none">
            <style>
              {`
                .studio-presence-map {
                  position: absolute;
                  inset: 1.5rem;
                }

                @media (min-width: 768px) {
                  .studio-presence-map {
                    inset: 2.5rem;
                  }
                }

                .studio-presence-map-svg {
                  width: 100%;
                  height: 100%;
                  color: rgba(255, 255, 255, 0.2);
                }

                .studio-presence-map-svg path {
                  fill: rgba(255, 255, 255, 0.18);
                  stroke: rgba(255, 255, 255, 0.16);
                  stroke-width: 1.1;
                  vector-effect: non-scaling-stroke;
                  transition: fill 180ms ease, stroke 180ms ease;
                }

                ${activeRegionStyles}
              `}
            </style>

            <div className="absolute inset-0 bg-[radial-gradient(#1e1e1e_1px,transparent_1px)] [background-size:16px_16px] opacity-35 pointer-events-none" />

            <div ref={mapContainerRef} className="studio-presence-map pointer-events-none">
              {mapMarkup ? (
                <div
                  className="h-full w-full"
                  dangerouslySetInnerHTML={{ __html: mapMarkup }}
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center text-neutral-500 text-xs font-mono tracking-[0.2em] uppercase">
                  Loading map
                </div>
              )}
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/35 pointer-events-none" />

   

            {interactiveLocations.map((loc) => {
              const isActive = activeLoc?.id === loc.id;
              const coordinates =
                svgAnchors[loc.id] ?? projectToPercent(loc.longitude, loc.latitude);

              return (
                <button
                  key={loc.id}
                  onClick={() => setActiveLoc(loc)}
                  onMouseEnter={() => setActiveLoc(loc)}
                  style={{ left: coordinates.x, top: coordinates.y }}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group focus:outline-none focus:ring-0 z-10"
                >
                  {/* Ping effect */}
                  <span className={`absolute inline-flex h-6 w-6 rounded-full opacity-75 motion-safe:animate-ping -left-1.5 -top-1.5 ${
                    isActive ? "bg-primary" : "bg-white/40"
                  }`} />
                  
                  {/* Outer circle */}
                  <div className={`relative flex items-center justify-center h-4 w-4 rounded-full border shadow-md transition-all duration-300 ${
                    isActive ? "bg-primary border-primary scale-125" : "bg-neutral-900 border-neutral-400 group-hover:scale-110"
                  }`}>
                    {/* Inner core dot */}
                    <div className="h-1.5 w-1.5 rounded-full bg-white" />
                  </div>

                  {/* Tiny Label hovering over map dot */}
                  <div className={`absolute left-1/2 -translate-x-1/2 -top-8 px-2.5 py-1 bg-neutral-900 text-[10px] uppercase font-mono tracking-wider border text-white transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-xl rounded-md ${
                    isActive ? "opacity-100 border-neutral-700" : "opacity-0 group-hover:opacity-100 border-neutral-800"
                  }`}>
                    {loc.name}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Details Sidebar panel */}
          <div className="bg-neutral-950 p-8 md:p-12 flex flex-col justify-between text-white border-neutral-800">
            <AnimatePresence mode="wait">
              {activeLoc ? (
                <motion.div
                  key={activeLoc.id}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <span className="text-[10px] font-mono tracking-[0.25em] text-primary uppercase block mb-1">
                      ACTIVE NETWORK
                    </span>
                    <h3 className="text-3xl font-light tracking-tight text-white flex items-center gap-2">
                      <MapPin size={22} className="text-white" />
                      {activeLoc.name}
                    </h3>
                  </div>
                  
                  <p className="text-xs text-neutral-400 font-mono tracking-widest uppercase">
                    {activeLoc.projects}
                  </p>

                  <p className="text-sm text-neutral-300 leading-relaxed font-light">
                    {activeLoc.description}
                  </p>
                </motion.div>
              ) : (
                <div className="space-y-4">
                  <p className="text-xs text-neutral-500 font-mono">
                    SELECT A MAP NODE TO EXPLORE
                  </p>
                </div>
              )}
            </AnimatePresence>

            {/* Static Facts Details listing block at the bottom */}
            <div className="mt-12 pt-6 border-t border-neutral-800 space-y-4">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-neutral-500 uppercase tracking-widest">HQ</span>
                <span className="text-neutral-300 text-right">North Sydney, NSW</span>
              </div>
              <div className="flex justify-between text-xs font-mono">
                <span className="text-neutral-500 uppercase tracking-widest">GLOBAL RANGE</span>
                <span className="text-neutral-300 text-right">Oceania & Middle East</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
