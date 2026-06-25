import React from "react";
import TeamHeader from "./team-header";
import TeamCarousel from "./team-carousel";

type TeamMember = {
  _id: string;
  name: string;
  position?: string;
  imageUrl?: string | null;
};

// Update with your actual team members and photos
const team: TeamMember[] = [
  { _id: "1", name: "Omar Ahmed", position: "Principal Architect", imageUrl: null },
  { _id: "2", name: "Sarah Mitchell", position: "Associate Architect", imageUrl: null },
  { _id: "3", name: "James Chen", position: "Senior Interior Designer", imageUrl: null },
  { _id: "4", name: "Priya Sharma", position: "ESD Consultant", imageUrl: null },
  { _id: "5", name: "Alex Torres", position: "Project Manager", imageUrl: null },
  { _id: "6", name: "Emma Williams", position: "Graduate Architect", imageUrl: null },
];

export default function UWTTeamComponent() {
  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-gray-400 block mb-16">
          The Team
        </span>
        <TeamHeader />
      </div>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <TeamCarousel team={team} />
      </div>
    </section>
  );
}
