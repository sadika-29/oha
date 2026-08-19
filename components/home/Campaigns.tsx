import React from "react";
import CampaignsClient from "./CampaignsClient";
import { featuredProjects } from "@/lib/projects";

type Campaign = {
  id: string;
  name: string;
  year?: string;
  imageUrl?: string;
  description: React.ReactNode;
};

export default function Campaigns() {
  const homeProjects: Campaign[] = featuredProjects.map((project) => ({
    id: project.id,
    name: project.name,
    year: project.year,
    imageUrl: project.imageUrl,
    description: project.summary,
  }));

  return <CampaignsClient campaigns={homeProjects} />;
}
