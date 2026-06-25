import React from "react";

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

const milestones: Milestone[] = [
  {
    year: "2008",
    title: "Practice Founded",
    description:
      "Omar Ahmed establishes OHA Design Workshop in Sydney, taking on the first residential commissions after years working with leading practices in Australia and the UK.",
  },
  {
    year: "2012",
    title: "First Award",
    description:
      "OHA receives the HIA NSW Award for Best Custom Home for the Hunters Hill Residence — a passive solar home that marks the studio's commitment to sustainable design.",
  },
  {
    year: "2015",
    title: "Hospitality Expansion",
    description:
      "The studio completes its first major hospitality project — a 28-room boutique hotel in Surry Hills — cementing expertise in the accommodation and restaurant sector.",
  },
  {
    year: "2018",
    title: "ESD Certification",
    description:
      "OHA achieves Green Star accreditation and begins offering ESD consulting as a dedicated service, advising developers and homeowners on net-zero pathways.",
  },
  {
    year: "2022",
    title: "North Sydney Studio",
    description:
      "The practice moves to its current home at Level 10, 122 Arthur Street, North Sydney — a purpose-fitted studio designed by the team themselves.",
  },
  {
    year: "2024",
    title: "Growing Portfolio",
    description:
      "With 50+ completed projects across residential, hospitality, and commercial sectors, OHA continues to grow its presence in Australia and internationally.",
  },
];

const Journey: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-black mb-4">Our Journey</h2>
        <p className="text-xl text-gray-600">
          Key milestones in OHA Design Workshop&apos;s story
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
        {milestones.map((milestone, index) => (
          <div
            key={milestone.year + index}
            className={`relative flex items-center mb-12 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div
              className={`w-1/2 ${
                index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
              }`}
            >
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="text-[#BC4749] font-bold text-lg mb-2">
                  {milestone.year}
                </div>
                <h3 className="text-xl font-bold text-black mb-2">
                  {milestone.title}
                </h3>
                <p className="text-gray-600">{milestone.description}</p>
              </div>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#BC4749] rounded-full border-4 border-white shadow-lg"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Journey;
