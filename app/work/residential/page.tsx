import React from "react";

export default function ResidentialPage() {
  return (
    <section className="w-full bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 lg:py-20">
        <div className="grid grid-cols-1 gap-8 items-start">
          <div className="flex flex-col items-start justify-center md:pr-8">
            <div>
              <h1 className="leading-none">
                <span className="block text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
                  RESIDENTIAL
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mt-1">
                  DESIGN
                </span>
              </h1>
              <div className="hidden md:block h-px w-48 bg-gray-200 mt-8" />
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="text-[#BC4749] text-base md:text-lg leading-relaxed mb-8">
              Bespoke homes and multi-residential developments crafted around
              how people live — from concept through to construction.
            </p>

            <article className="prose prose-sm md:prose-base max-w-none text-gray-800">
              <p>
                Residential architecture is at the heart of what we do. Every
                home we design begins with careful listening — understanding how
                a family lives, what they value, and how a building can support
                and enrich their daily life. We work on new homes, additions and
                alterations, dual-occupancy developments, and small multi-res
                projects across Sydney and beyond.
              </p>
              <br />
              <p>
                Our residential projects are known for their spatial generosity,
                considered materiality, and sensitivity to site. We take
                particular care with natural light, cross-ventilation, and
                indoor-outdoor connection — elements that make the difference
                between a house and a home that genuinely works for its
                occupants across all seasons.
              </p>
              <br />
              <p>
                We manage the full process: site analysis, concept design,
                development application (DA), construction certificate (CC), and
                construction administration through to practical completion. Our
                clients describe working with us as collaborative and
                transparent — we explain every decision and involve you at every
                key stage.
              </p>

              <h3>What we offer</h3>
              <ul>
                <li>New homes (custom residential)</li>
                <li>Additions and alterations</li>
                <li>Dual occupancy and secondary dwellings</li>
                <li>Small multi-residential (3–12 dwellings)</li>
                <li>Heritage-listed property design</li>
              </ul>

              <div className="mt-8 not-prose">
                <a
                  href="/contact"
                  className="inline-block bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:shadow-md transition"
                >
                  Enquire about a project
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
