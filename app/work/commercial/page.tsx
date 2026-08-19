import React from "react";

export default function CommercialPage() {
  return (
    <section className="w-full bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 lg:py-20">
        <div className="grid grid-cols-1 gap-8 items-start">
          <div className="flex flex-col items-start justify-center md:pr-8">
            <div>
              <h1 className="leading-none">
                <span className="block text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
                  COMMERCIAL
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
              Bespoke workplace, commercial fitout, and retail environments designed for collaboration, wellness, and business longevity.
            </p>

            <article className="prose prose-sm md:prose-base max-w-none text-gray-800 space-y-6">
              <p>
                At OHA, our commercial design philosophy balances commercial viability, functional flexibility, and human experience. Whether designing an office workspace, boutique hotel lobby, retail shopfront, or multi-use innovation hub, we collaborate with builders, stakeholders, and clients to craft highly tailored, efficient environments.
              </p>
              <p>
                We prioritize smart spatial layouts that cultivate team bonding, connection, and productivity while optimizing every square meter. Integrating state-of-the-art sustainable systems, smart acoustics, carefully specified task lighting, and healthy, low-emission materials, our projects deliver long-term value for business occupants.
              </p>

              <h3 className="text-xl font-semibold text-black mt-8 mb-4">Commercial architecture & interior services</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Workplace strategy and structural feasibility</li>
                <li>Commercial interior fitouts and spatial planning</li>
                <li>Retail, hospitality, and mixed-use design</li>
                <li>Acoustic engineering and healthy building material selection</li>
                <li>Sustainable office conversions and green star standards</li>
                <li>Detailed construction documentation & authority approvals</li>
              </ul>

              <div className="mt-8 not-prose">
                <a
                  href="/contact"
                  className="inline-block bg-gray-900 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-black transition-colors"
                >
                  Discuss your commercial project
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
