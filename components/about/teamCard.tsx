"use client";
import React from "react";
import { BsLinkedin } from "react-icons/bs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

/* ----- types ----- */
export type TeamMember = {
  id?: string;
  name: string;
  role?: string;
  education?: string;
  location?: string;
  shortBio?: string; // optional short teaser
  background?: string;
  motivation?: string;
  achievements?: string; // alternate name: contribution
  contribution?: string; // some objects use this
  personal?: string; // alternate name: personalTouch
  personalTouch?: string;
  social?: any;
  image?: { src?: string; alt?: string } | null;
  imageUrl?: string | null; // some fetches project imageUrl
};

interface Props {
  member: TeamMember;
}

export default function TeamCard({ member }: Props) {
  const id =
    member.id ??
    (member.name || "member")
      .toString()
      .split(" ")
      .filter(Boolean)
      .join("-")
      .toLowerCase();

  // tolerant field mapping
  const imageSrc =
    member.image?.src ||
    (member as any).imageUrl ||
    (member as any).imageUrlFull ||
    "";
  const imageAlt = member.image?.alt || `Photo of ${member.name}`;

  const achievements =
    member.achievements ||
    (member as any).contribution ||
    (member as any).contributions ||
    "";
  const personal = member.personal || (member as any).personalTouch || "";

  // social helper
  const socialObj =
    member.social && typeof member.social === "object" ? member.social : null;

  return (
    <article className="py-6 md:py-8" aria-labelledby={`${id}-name`}>
      <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
        {/* image block (plain <img> to avoid next/image domain setup) */}
        <div className="shrink-0 w-full md:w-36 lg:w-40">
          {imageSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={imageSrc}
              alt={imageAlt}
              loading="lazy"
              className="w-full h-36 md:h-40 object-cover rounded-lg shadow-sm"
            />
          ) : (
            <div className="w-full h-36 md:h-40 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
              <span className="text-sm">No image</span>
            </div>
          )}
        </div>

        {/* content */}
        <div className="flex-1 w-full">
          <div className="flex items-start justify-between">
            <div>
              <h3
                id={`${id}-name`}
                className="text-xl font-semibold text-gray-900"
              >
                {member.name}
              </h3>
              {member.role && (
                <p className="text-sm text-gray-600 mt-1">{member.role}</p>
              )}
              {member.education && (
                <p className="text-sm text-gray-500 mt-1">{member.education}</p>
              )}
              {member.location && (
                <p className="text-sm text-gray-500 mt-1">{member.location}</p>
              )}
            </div>

            <div className="ml-4">
              {socialObj?.linkedin ? (
                <a
                  href={socialObj.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline"
                >
                  <BsLinkedin className="w-4 h-4" />
                  <span className="hidden md:inline">LinkedIn</span>
                </a>
              ) : typeof member.social === "string" && member.social ? (
                <p className="text-sm text-gray-600">{member.social}</p>
              ) : null}
            </div>
          </div>

          {/* teaser */}
          {member.shortBio && (
            <p className="text-gray-700 mt-4">{member.shortBio}</p>
          )}

          {/* accordion (only shows sections that exist) */}
          <div className="mt-4">
            <Accordion type="multiple" defaultValue={[]}>
              {member.background && (
                <AccordionItem value={`${id}-background`}>
                  <AccordionTrigger className="py-2 px-0 text-left w-full">
                    <span className="font-semibold text-gray-800">
                      Background & experience
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="text-gray-700 text-sm leading-relaxed">
                      {member.background}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )}

              {member.motivation && (
                <AccordionItem value={`${id}-motivation`}>
                  <AccordionTrigger className="py-2 px-0 text-left w-full">
                    <span className="font-semibold text-gray-800">
                      Why they joined
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="text-gray-700 text-sm leading-relaxed">
                      {member.motivation}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )}

              {achievements && (
                <AccordionItem value={`${id}-achievements`}>
                  <AccordionTrigger className="py-2 px-0 text-left w-full">
                    <span className="font-semibold text-gray-800">
                      Key contributions
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="text-gray-700 text-sm leading-relaxed">
                      {achievements}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )}

              {personal && (
                <AccordionItem value={`${id}-personal`}>
                  <AccordionTrigger className="py-2 px-0 text-left w-full">
                    <span className="font-semibold text-gray-800">
                      Personal
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="text-gray-700 text-sm leading-relaxed">
                      {personal}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )}
            </Accordion>
          </div>
        </div>
      </div>
    </article>
  );
}
