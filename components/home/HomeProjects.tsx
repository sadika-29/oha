import Image from "next/image";
import React from "react";

const projects = [
  {
    id: "uwt-pep",
    title: "Personal Enhancement Program",
    subtitle: "Creating safer futures through SRHR education and awareness",
    description:
      "Interactive workshops for Grades 5–12 focusing on anti-bullying, self-love, healthy boundaries, mental health awareness, and stigma reduction. Sessions built safe spaces for students to explore identity, emotions, and empathy—helping them grow into resilient, confident members of society.",
    imagesFolder: "PEP SRU / PEP SUNNYDALE / PEP VASSAR COLLEGE",
    coverSrc: "/projects/pep-sru.jpg",
  },
  {
    id: "scholastica-sru",
    title: "Scholastica SRU (Uttara)",
    subtitle: "250+ students — grades 7–12",
    description:
      "Two separate sessions (grades 7–9 and 10–12), hosted by Tayieba Rahemin. Time slots coordinated with school authorities.",
    imagesFolder: "PEP SRU",
    coverSrc: "/projects/pep-sru.jpg",
  },
  {
    id: "sunnydale",
    title: "Sunnydale",
    subtitle: "Two separate sessions",
    description: "Two sessions delivered for different age groups.",
    imagesFolder: "PEP SUNNYDALE",
    coverSrc: "/projects/pep-sunnydale.jpg",
  },
  {
    id: "vassar",
    title: "Vassar College, New York",
    subtitle: "2022",
    description: "Workshop held at Vassar College.",
    imagesFolder: "PEP VASSAR COLLEGE, 2023",
    coverSrc: "/projects/pep-vassar.jpg",
  },
];

export default function HomeProjects() {
  return (
    <section className="max-w-7xl mx-auto py-16 ">
      <h2 className="leading-none">
        <span className="block text-3xl md:text-4xl lg:text-5xl font-light tracking-tight">
          Core
        </span>
        <span className="block text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mt-1">
          Projects
        </span>
      </h2>
      <div className="flex items-center justify-start gap-2 my-4">
        <div className="h-px w-48 bg-gray-200" />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-6">
        {/* Large feature card: UWT PEP */}
        <article className="relative col-span-1 sm:col-span-2 md:col-span-4 rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-neutral-900 border">
          <div className="relative w-full h-56 md:h-72">
            {/* Replace src with the actual image you will add */}
            <Image
              src={projects[0].coverSrc}
              alt={`${projects[0].title} cover — replace with real image`}
              fill
              className="object-cover hover:scale-105 transform transition-transform duration-300"
              priority
            />
          </div>

          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2">{projects[0].title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">
              {projects[0].subtitle}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              {projects[0].description}
            </p>
          </div>
        </article>

        {/* Right column: 3 smaller project cards stacked */}
        <div className="col-span-1 sm:col-span-2 md:col-span-2 flex flex-col gap-6">
          {projects.slice(1).map((p) => (
            <article
              key={p.id}
              className="bg-white dark:bg-neutral-900 p-4 rounded-2xl shadow-lg border flex gap-4 items-start"
            >
              <div className="relative w-28 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                <Image
                  src={p.coverSrc}
                  alt={`${p.title} — add image to ${p.imagesFolder}`}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1">
                <h4 className="text-lg font-semibold">{p.title}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {p.subtitle}
                </p>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  {p.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
