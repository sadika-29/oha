import React from "react";
import TeamPageHeader from "../../components/team/team-page-header";
import TeamPageGrid from "./team-page-grid";

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

// Update with your actual team members and photos
const team: TeamMember[] = [
  {
    _id: "1",
    name: "Omar Ahmed",
    position: "Principal Architect",
    background:
      "Omar holds a Master of Architecture from the University of Sydney and has over 20 years of practice experience across Australia and the United Kingdom. He founded OHA Design Workshop in 2008 following roles at several award-winning Sydney practices.",
    motivation:
      "Omar founded OHA to create a studio where sustainability and design quality are treated as inseparable. He believes that architecture has a responsibility to improve both the lives of its occupants and the broader built environment.",
    contribution:
      "Omar leads all projects from concept through to completion, personally overseeing design quality at every stage. He is the primary client contact and holds overall responsibility for the studio's design output.",
    personalTouch:
      "Outside the studio, Omar is an avid bushwalker and amateur photographer — two pursuits that continue to inform his sensitivity to landscape and light.",
    imageUrl: null,
  },
  {
    _id: "2",
    name: "Sarah Mitchell",
    position: "Associate Architect",
    background:
      "Sarah graduated from UNSW with First Class Honours and joined OHA in 2014 after four years at a commercial practice. She was promoted to Associate in 2019.",
    motivation:
      "Sarah is driven by the challenge of designing homes that work beautifully for their occupants while sitting lightly on the landscape.",
    contribution:
      "Sarah leads OHA's residential portfolio, managing projects from design development through to construction administration.",
    imageUrl: null,
  },
  {
    _id: "3",
    name: "James Chen",
    position: "Senior Interior Designer",
    background:
      "James studied Interior Architecture at UTS and has specialised in hospitality and high-end residential interiors for over a decade.",
    motivation:
      "James is passionate about the relationship between material and mood — the way texture, light, and detail combine to create spaces that feel genuinely alive.",
    contribution:
      "James leads all interior design commissions, working closely with clients on material palettes, joinery design, furniture selection, and lighting.",
    imageUrl: null,
  },
  {
    _id: "4",
    name: "Priya Sharma",
    position: "ESD Consultant",
    background:
      "Priya holds a Graduate Diploma in Sustainable Design and is a Green Star Accredited Professional. She joined OHA in 2020 from an environmental consultancy.",
    motivation:
      "Priya is committed to demonstrating that net-zero buildings can be designed to the same standard of beauty and comfort as any conventional building.",
    contribution:
      "Priya advises on all projects from a sustainability standpoint, preparing energy models, BASIX reports, and Green Star documentation.",
    imageUrl: null,
  },
  {
    _id: "5",
    name: "Alex Torres",
    position: "Project Manager",
    background:
      "Alex has a background in construction project management and has worked across residential, hospitality, and mixed-use sectors for over 12 years.",
    contribution:
      "Alex coordinates consultants, manages the construction programme, and acts as OHA's representative on-site during the delivery phase of each project.",
    imageUrl: null,
  },
  {
    _id: "6",
    name: "Emma Williams",
    position: "Graduate Architect",
    background:
      "Emma recently completed her Master of Architecture at the University of Melbourne, where she was awarded the Dean's Excellence Scholarship.",
    motivation:
      "Emma joined OHA because of the studio's integrated approach to sustainability — she wanted to work somewhere that treats ESD as a design discipline, not a checkbox.",
    imageUrl: null,
  },
];

export default function TeamPage() {
  return (
    <div className="w-full bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 lg:py-20">
        <TeamPageHeader />
        <TeamPageGrid team={team} />
      </div>
    </div>
  );
}
