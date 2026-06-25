import { defineType, defineField } from "sanity";

export default defineType({
  name: "team",
  title: "Team",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) =>
        Rule.required().error("Please add the team member's name"),
    }),

    defineField({
      name: "position",
      title: "Position",
      type: "string",
      validation: (Rule) =>
        Rule.required().error("Please add the person's position"),
    }),

    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      description: "Headshot or profile image.",
    }),

    defineField({
      name: "background",
      title: "Background",
      type: "text",
      description: "Short background or bio (education, previous roles, etc.).",
    }),

    defineField({
      name: "motivation",
      title: "Motivation",
      type: "text",
      description: "What motivates them — why they do the work.",
    }),

    defineField({
      name: "contribution",
      title: "Contribution",
      type: "text",
      description:
        "Key contributions, responsibilities, or what they bring to the team.",
    }),

    defineField({
      name: "personalTouch",
      title: "Personal Touch (optional)",
      type: "text",
      description: "Fun fact, hobby, or a little personal note — optional.",
      validation: (Rule) => Rule.max(500),
    }),
  ],

  preview: {
    select: {
      title: "name",
      subtitle: "position",
      media: "image",
    },
  },
});
