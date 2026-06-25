"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

type TeamMember = {
  _id: string;
  name: string;
  position?: string;
  imageUrl?: string | null;
};

export default function TeamCarousel({ team }: { team: TeamMember[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const maxIndex = Math.max(0, team.length - itemsPerView);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    if (isPaused || team.length <= itemsPerView) return;
    const interval = setInterval(goToNext, 3000);
    return () => clearInterval(interval);
  }, [isPaused, goToNext, team.length, itemsPerView]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            gap: itemsPerView === 1 ? "0px" : "1.5rem",
          }}
        >
          {team.map((member) => (
            <div
              key={member._id}
              className="flex-shrink-0 px-3"
              style={{ width: `${100 / itemsPerView}%` }}
            >
              <div className="group relative">
                <div className="relative h-80 sm:h-96 overflow-hidden bg-stone-100">
                  {member.imageUrl ? (
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-stone-100">
                      <span className="text-4xl sm:text-6xl text-stone-300 font-light">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-white">
                    <h3 className="text-xl font-light mb-1">{member.name}</h3>
                    <p className="text-[11px] font-mono tracking-[0.2em] uppercase text-white/50">
                      {member.position}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {team.length > itemsPerView && (
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={goToPrevious}
            className="w-10 h-10 border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors text-gray-600"
            aria-label="Previous"
          >
            ←
          </button>
          <span className="text-xs font-mono tracking-widest text-gray-400">
            {String(currentIndex + 1).padStart(2, "0")} / {String(maxIndex + 1).padStart(2, "0")}
          </span>
          <button
            onClick={goToNext}
            className="w-10 h-10 border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors text-gray-600"
            aria-label="Next"
          >
            →
          </button>
        </div>
      )}
    </div>
  );
}
