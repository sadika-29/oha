import React from "react";

export default function HospitalityPage() {
  return (
    <section className="w-full bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 lg:py-20">
        <div className="grid grid-cols-1 gap-8 items-start">
          <div className="flex flex-col items-start justify-center md:pr-8">
            <div>
              <h1 className="leading-none">
                <span className="block text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
                  HOSPITALITY
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mt-1">
                  ARCHITECTURE
                </span>
              </h1>
              <div className="hidden md:block h-px w-48 bg-gray-200 mt-8" />
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="text-[#BC4749] text-base md:text-lg leading-relaxed mb-8">
              Hotels, restaurants, and bars designed to create memorable guest
              experiences through atmosphere, materiality, and flow.
            </p>

            <article className="prose prose-sm md:prose-base max-w-none text-gray-800">
              <p>
                Hospitality architecture demands a particular understanding of
                how people move, gather, and linger. We design spaces that work
                operationally — where kitchen-to-table distances are efficient,
                acoustics are considered, and service flows are intuitive — while
                also creating the atmosphere that makes a venue memorable.
              </p>
              <br />
              <p>
                Our hospitality portfolio includes boutique hotels, restaurant
                and bar fitouts, café conversions, and mixed-use developments
                with ground-level hospitality tenancies. We are experienced in
                the particular regulatory requirements of licensed premises,
                food-service buildings, and accommodation in NSW and Victoria.
              </p>
              <br />
              <p>
                We work closely with operators during the brief development
                stage to ensure that every design decision — from bar height and
                banquette configuration to storage and back-of-house — reflects
                how the business actually runs.
              </p>

              <h3>Hospitality project types</h3>
              <ul>
                <li>Boutique hotels (new build and conversion)</li>
                <li>Restaurants and fine dining</li>
                <li>Bars, rooftop venues, and cocktail lounges</li>
                <li>Cafés and casual dining</li>
                <li>Mixed-use developments with hospitality tenancies</li>
                <li>Heritage building conversions</li>
              </ul>

              <div className="mt-8 not-prose">
                <a
                  href="/contact"
                  className="inline-block bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:shadow-md transition"
                >
                  Discuss your venue
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
