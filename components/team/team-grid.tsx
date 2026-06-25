"use client";

import React, { useState } from "react";
import Image from "next/image";

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

export default function TeamGrid({ team }: { team: TeamMember[] }) {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {team.map((member) => (
          <div
            key={member._id}
            className="group relative cursor-pointer"
            onClick={() => setSelectedMember(member)}
          >
            <div className="relative h-96 rounded-lg overflow-hidden shadow-sm bg-gray-100 transition-transform duration-300 group-hover:scale-105">
              {member.imageUrl ? (
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                  <span className="text-6xl text-gray-400 font-light">
                    {member.name.charAt(0)}
                  </span>
                </div>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-semibold mb-1">{member.name}</h3>
                <p className="text-sm text-gray-200">{member.position}</p>
                <button className="mt-4 text-xs font-medium border border-white/50 px-4 py-2 rounded hover:bg-white hover:text-gray-900 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedMember && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-semibold text-gray-900">
                  {selectedMember.name}
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  {selectedMember.position}
                </p>
              </div>
              <button
                onClick={() => setSelectedMember(null)}
                className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
              >
                ×
              </button>
            </div>

            <div className="p-6 space-y-6">
              {selectedMember.imageUrl && (
                <div className="relative h-80 rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src={selectedMember.imageUrl}
                    alt={selectedMember.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {selectedMember.background && (
                <div className="border-t border-gray-100 pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Background & Experience
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    {selectedMember.background}
                  </p>
                </div>
              )}

              {selectedMember.motivation && (
                <div className="border-t border-gray-100 pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Why They Joined
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    {selectedMember.motivation}
                  </p>
                </div>
              )}

              {selectedMember.contribution && (
                <div className="border-t border-gray-100 pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Key Contributions
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    {selectedMember.contribution}
                  </p>
                </div>
              )}

              {selectedMember.personalTouch && (
                <div className="border-t border-gray-100 pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Personal
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    {selectedMember.personalTouch}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
