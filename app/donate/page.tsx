"use client";
import React from "react";
import { FaHome, FaLeaf, FaHotel, FaCouch } from "react-icons/fa";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Residential Design",
    description:
      "From single-dwelling renovations to new homes and multi-residential developments, we guide clients through every stage — site analysis, concept design, DA documentation, and construction administration.",
    icon: <FaHome className="w-8 h-8" />,
    href: "/work/residential",
  },
  {
    id: 2,
    title: "Sustainable Design (ESD)",
    description:
      "We integrate passive design principles and active sustainability measures from day one. Services include energy modelling, BASIX compliance, Green Star consulting, and net-zero strategy.",
    icon: <FaLeaf className="w-8 h-8" />,
    href: "/work/sustainable",
  },
  {
    id: 3,
    title: "Hospitality Architecture",
    description:
      "Hotels, restaurants, and bars designed around the guest experience. We manage the full lifecycle from concept through to fitout, working closely with operators, developers, and interior designers.",
    icon: <FaHotel className="w-8 h-8" />,
    href: "/work/hospitality",
  },
  {
    id: 4,
    title: "Interior Design",
    description:
      "Complete interior environments for residential and commercial clients — material palettes, custom joinery, furniture selection, lighting design, and FF&E procurement.",
    icon: <FaCouch className="w-8 h-8" />,
    href: "/work/interiors",
  },
];

const process = [
  { step: "01", title: "Initial Consultation", desc: "A no-obligation meeting to understand your brief, timeline, and budget." },
  { step: "02", title: "Concept Design", desc: "We explore design directions and present sketch options for discussion." },
  { step: "03", title: "Design Development", desc: "Refining the preferred concept into detailed drawings and specifications." },
  { step: "04", title: "Documentation & Approval", desc: "Construction documentation, council submissions, and tender packages." },
  { step: "05", title: "Construction", desc: "Site administration, progress inspections, and practical completion." },
];

const page = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <div className="bg-black text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            OHA Design Workshop offers a fully integrated architectural and
            interior design service — from initial concept through to the last
            coat of paint.
          </p>
        </div>
      </div>

      {/* Services */}
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            What We Do
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="border-2 border-gray-200 rounded-2xl p-8 hover:border-[#BC4749] duration-300 group block"
              >
                <div className="flex items-center mb-4">
                  <div className="mr-4 text-[#BC4749]">{service.icon}</div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <span className="text-sm font-medium text-[#BC4749] group-hover:underline">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Our Process */}
      <div className="bg-black text-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Process
          </h2>

          <div className="space-y-6">
            {process.map((p) => (
              <div key={p.step} className="flex gap-6 items-start border-b border-white/10 pb-6">
                <span className="text-[#BC4749] text-2xl font-bold w-12 flex-shrink-0">
                  {p.step}
                </span>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{p.title}</h3>
                  <p className="text-gray-300">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Start a Conversation?
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Initial consultations are complimentary and obligation-free. Reach
            out to the studio to arrange a meeting with Principal Architect Omar Ahmed.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#BC4749] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#a63b3d] transition"
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
