import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | OHA Design Workshop",
  description:
    "Profile and design philosophy of Omar Ahmed and OHA Design Workshop.",
};

export default function PortfolioPage() {
  return (
    <main className="bg-white">
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-20">
        <header className="border-b border-gray-200 pb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
            Portfolio
          </p>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold text-black leading-tight">
            Omar Ahmed
          </h1>
          <p className="mt-2 text-xl md:text-2xl text-gray-700">Principal</p>

          <div className="mt-8 space-y-2 text-sm md:text-base text-gray-700">
            <p>B.Arch [UNSW] | AIA A+ Member</p>
            <p>Nominated Architect | NSW ARB 8908 | BOAQ 6137</p>
            <p>Design Practitioner Registration DEP0002056</p>
            <p>Principal Design Practitioner Registration PDP0000697</p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12">
          <article className="lg:col-span-8 space-y-8 text-gray-700 leading-8">
            <blockquote className="border-l-4 border-black pl-5 text-gray-900 text-lg md:text-xl leading-relaxed">
              Daniel Libekind once said, "Architecture is the biggest unwritten
              document of History", which makes the built environment a silent
              witness of its progressive transformation. Perhaps buildings are
              soulful and the human history resonate in its backyard.
            </blockquote>

            <p>
              Omar Ahmed is a renowned architect for complex and large scale
              project. His award winning design approach and liberated ideas
              have rewarded in number of occasions. His commitment and sincerity
              for sustainable environment reflects on all his design work.
            </p>

            <p>
              Hence, nature plays a big role to shape his design till they
              become part of the building material. With that belief he formed
              OHA to formulate fresh ideas and contemporary building design. In
              Sanskrit OHA means "True knowledge".
            </p>

            <p>
              OHA Design Workshop is an integrated architectural and interior
              design studio, based in North Sydney. Our design focuses on new
              environmental concerns and spatial requirements, respond to the
              human condition with passion + imagination.
            </p>

            <p>
              Our architecture strives to achieve a place of memory and joy.
              Every occasion is explored for their ability to transform space
              into place. Every project is an opportunity to collaborate the
              ideas of dwelling, interaction and happiness.
            </p>

            <p>
              We aim to celebrate life with a diversity of rich materiality and
              form that create a narrative with freedom and light. Our
              creativity is in fact a process that is informed by the human
              fundamentals of contemporary living, enrolling with inspiration
              and joy. On more than one level we bridge the gap between
              physical and meta-physical experiences in Architecture.
            </p>
          </article>

          <aside className="lg:col-span-4">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 md:p-7 space-y-6">
              <h2 className="text-lg font-semibold text-black">Studio Contact</h2>

              <div className="space-y-3 text-sm text-gray-700 leading-6">
                <p>
                  <span className="font-medium text-gray-900">T</span> +61 2
                  8033 0564
                </p>
                <p>
                  <span className="font-medium text-gray-900">F</span> +61 2
                  8076 3064
                </p>
                <p>
                  <span className="font-medium text-gray-900">M</span> 0413 977
                  577
                </p>
              </div>

              <div className="h-px bg-gray-200" />

              <div className="space-y-4 text-sm text-gray-700 leading-6">
                <div>
                  <p className="font-medium text-gray-900">North Sydney</p>
                  <p>Level 10 | 122 Arthur Street</p>
                  <p>North Sydney | NSW 2060</p>
                </div>

                <div>
                  <p className="font-medium text-gray-900">North Sydney</p>
                  <p>Level 10 | 122 Arthur Street</p>
                  <p>North Sydney | NSW 2060</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
