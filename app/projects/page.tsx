import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { allProjects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white pb-20 pt-28 md:pt-32">
      <section className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <div className="mb-14 flex flex-col gap-6 border-b border-stone-200 pb-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 text-[11px] font-mono uppercase tracking-[0.26em] text-stone-400">
              Projects Archive
            </p>
            <h1 className="text-4xl font-light tracking-tight text-stone-900 md:text-6xl">
              Our Projects
            </h1>
            <p className="mt-5 text-sm leading-relaxed text-stone-600 md:text-base">
              A complete collection of current OHA project visuals from recent residential and mixed-use work.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-stone-300 px-5 py-3 text-[11px] font-mono uppercase tracking-[0.2em] text-stone-700 transition-colors duration-300 hover:border-stone-900 hover:text-stone-900"
          >
            Start Your Project
            <ArrowUpRight size={14} strokeWidth={1.5} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allProjects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-2xl border border-stone-200 bg-white"
            >
              <div className="relative h-64 overflow-hidden bg-stone-100">
                <Image
                  src={project.imageUrl}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <p className="mb-2 text-[10px] font-mono uppercase tracking-[0.2em] text-stone-400">
                  {project.year} / {project.location}
                </p>
                <h2 className="text-lg font-medium tracking-tight text-stone-900">
                  {project.name}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">
                  {project.summary}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
