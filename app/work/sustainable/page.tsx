import React from "react";

export default function SustainablePage() {
  return (
    <section className="w-full bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 lg:py-20">
        <div className="grid grid-cols-1 gap-8 items-start">
          <div className="flex flex-col items-start justify-center md:pr-8">
            <div>
              <h1 className="leading-none">
                <span className="block text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
                  SUSTAINABLE
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
              Environmentally responsible architecture and ESD consulting that
              reduces operational carbon without compromising design quality.
            </p>

            <article className="prose prose-sm md:prose-base max-w-none text-gray-800">
              <p>
                At OHA, sustainability is not a feature — it is a fundamental
                design principle. From the earliest sketch, we consider solar
                orientation, natural ventilation, daylighting, and thermal
                performance alongside spatial planning and aesthetics. The result
                is architecture that performs well, costs less to run, and
                endures.
              </p>
              <br />
              <p>
                We are Green Star Accredited Professionals and have delivered
                projects to BASIX, NatHERS, and Green Star standards. Our ESD
                Consultant, Priya Sharma, works across all project types to
                develop tailored sustainability strategies — from passive-first
                residential homes to all-electric net-zero commercial fitouts.
              </p>
              <br />
              <p>
                We also offer standalone ESD consulting for clients working with
                other architects or developers who need specialist sustainability
                input, energy modelling, or documentation support.
              </p>

              <h3>Sustainability services</h3>
              <ul>
                <li>Passive solar design and orientation analysis</li>
                <li>NatHERS and BASIX assessments</li>
                <li>Green Star design and as-built certification</li>
                <li>Net-zero and all-electric building strategy</li>
                <li>Energy modelling and life-cycle carbon assessment</li>
                <li>Rainwater harvesting and water-sensitive design</li>
              </ul>

              <div className="mt-8 not-prose">
                <a
                  href="/contact"
                  className="inline-block bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:shadow-md transition"
                >
                  Talk to our ESD team
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
