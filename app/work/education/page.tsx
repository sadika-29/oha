import React from "react";

export default function EducationPage() {
  return (
    <section className="w-full bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 lg:py-20">
        <div className="grid grid-cols-1 gap-8 items-start">
          <div className="flex flex-col items-start justify-center md:pr-8">
            <div>
              <h1 className="leading-none">
                <span className="block text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
                  EDUCATION
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
              Inspiring educational facilities and interactive learning spaces tailored for creative development, environmental connection, and community growth.
            </p>

            <article className="prose prose-sm md:prose-base max-w-none text-gray-800 space-y-6">
              <p>
                We believe architecture plays a vital learning role, acting as a third teacher in child and young-adult educational systems. Our responsive designs emphasize flexible room planning, indoor-outdoor connectivity, light-filled classrooms, and sensory-rich common arenas that foster interactive exploration.
              </p>
              <p>
                From primary schools to higher education centers and special training campuses, our work centers on creating safe, sustainable, and joyful environments that integrate seamlessly into their unique context.
              </p>

              <h3 className="text-xl font-semibold text-black mt-8 mb-4">Educational Design Services</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Learning space strategy and educational masterplanning</li>
                <li>Flexible multi-use activity rooms and labs</li>
                <li>Indoor-outdoor connectivity and sensory landscape gardens</li>
                <li>Acoustic optimization and natural daylight integration</li>
                <li>Child-safe, low-VOC material sourcing and non-toxic environments</li>
                <li>Compliance, accessibility planning, and regulatory approvals</li>
              </ul>

              <div className="mt-8 not-prose">
                <a
                  href="/contact"
                  className="inline-block bg-gray-900 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-black transition-colors"
                >
                  Discuss your education project
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
