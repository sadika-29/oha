import React from "react";

export default function InteriorsPage() {
  return (
    <section className="w-full bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 lg:py-20">
        <div className="grid grid-cols-1 gap-8 items-start">
          <div className="flex flex-col items-start justify-center md:pr-8">
            <div>
              <h1 className="leading-none">
                <span className="block text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
                  INTERIOR
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mt-1">
                  DESIGN
                </span>
              </h1>
              <div className="hidden md:block h-px w-48 bg-gray-200 mt-8" />
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-8">
              Material, texture, and light — complete interior environments with
              soul, for residential and commercial clients.
            </p>

            <article className="prose prose-sm md:prose-base max-w-none text-gray-800">
              <p>
                Interior design at OHA goes far beyond surface decoration. We
                approach interiors with the same rigour and intention we bring
                to architecture — considering spatial sequence, scale,
                acoustics, and the quality of natural light before selecting a
                single material. Our Senior Interior Designer, James Chen,
                leads all interior commissions, bringing over a decade of
                experience in high-end residential and hospitality interiors.
              </p>
              <br />
              <p>
                We offer a complete interior design service — from concept
                through to installation. This includes material and finish
                selection, custom joinery design, loose furniture sourcing,
                lighting design, art consulting, and FF&amp;E procurement. We
                work with both local and international suppliers to source
                pieces that are suited to the specific character of each project.
              </p>
              <br />
              <p>
                Interior design commissions can be taken on independently of an
                architecture brief, or as part of an integrated OHA project
                where the architecture and interiors are designed simultaneously
                — an approach we strongly recommend for the most cohesive result.
              </p>

              <h3>Interior design services</h3>
              <ul>
                <li>Residential interiors (new homes and renovations)</li>
                <li>Hospitality fitouts</li>
                <li>Custom joinery and cabinetry design</li>
                <li>Material and finish schedules</li>
                <li>Loose furniture and lighting selection</li>
                <li>FF&amp;E procurement and installation management</li>
              </ul>

              <div className="mt-8 not-prose">
                <a
                  href="/contact"
                  className="inline-block bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:shadow-md transition"
                >
                  Start an interiors brief
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
