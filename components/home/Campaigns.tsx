import React from "react";
import CampaignsClient from "./CampaignsClient";

type Campaign = {
  id: string;
  name: string;
  year?: string;
  imageUrl?: string;
  description: React.ReactNode;
};

// Update with your actual featured projects
const featuredProjects: Campaign[] = [
  {
    id: "pyrmont-residence",
    name: "Pyrmont Residence",
    year: "2023",
    description:
      "A contemporary family home in Pyrmont, Sydney, featuring passive solar design, cross-ventilation, and a rooftop terrace. Awarded Best Residential Design at the 2023 HIA NSW Awards.",
      imageUrl: "/banner-02.jpg",
  },
  {
    id: "harbour-hotel",
    name: "Harbour Hotel, Walsh Bay",
    year: "2022",
    description:
      "A 42-room boutique hotel conversion of a heritage wharf building. The project balanced sensitive heritage restoration with modern hospitality requirements and achieved a 5 Star Green Star rating.",
    imageUrl: "/project-02.jpg",
  },
  {
    id: "manly-esd",
    name: "Manly Net-Zero Townhouses",
    year: "2024",
    description:
      "A terrace of six net-zero energy townhouses on the Northern Beaches. Designed to BASIX+ standards with rooftop solar, battery storage, and all-electric services.",
    imageUrl: "/services/sustainable.png",
  },
];

export default function Campaigns() {
  return <CampaignsClient campaigns={featuredProjects} />;
}
