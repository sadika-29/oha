import React from "react";
import { notFound } from "next/navigation";

type Category = {
  name: string;
  subtitle?: string;
  description: string;
};

const categories: Record<string, Category> = {
  residential: {
    name: "Residential Design",
    subtitle: "Crafting homes that endure",
    description:
      "Bespoke homes, additions, and multi-residential developments designed around how people live — from concept through to construction.",
  },
  sustainable: {
    name: "Sustainable Design",
    subtitle: "Architecture aligned with the natural world",
    description:
      "Environmentally responsible architecture and ESD consulting. Green Star, BASIX, NatHERS, and net-zero strategy for residential and commercial projects.",
  },
  hospitality: {
    name: "Hospitality Architecture",
    subtitle: "Spaces that create unforgettable experiences",
    description:
      "Hotels, restaurants, and bars designed to work operationally while creating the atmosphere that keeps guests coming back.",
  },
  interiors: {
    name: "Interior Design",
    subtitle: "Material, texture, and light",
    description:
      "Complete interior environments for residential and commercial clients — from material palettes and custom joinery to loose furniture and FF&E procurement.",
  },
};

export async function generateStaticParams() {
  return Object.keys(categories).map((slug) => ({ slug }));
}

export default async function Page(props: any) {
  const { slug } = await props.params;
  const category = categories[slug];

  if (!category) {
    notFound();
  }

  return (
    <section className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-4">{category.name}</h1>
      {category.subtitle && (
        <p className="text-[#BC4749] font-medium text-lg mb-2">
          {category.subtitle}
        </p>
      )}
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        {category.description}
      </p>
    </section>
  );
}
