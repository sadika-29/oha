import { defineType, defineField } from "sanity";
export default defineType({
  name: "campaign",
  title: "Campaign",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Name",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
    }),

    defineField({
      name: "image",
      type: "image",
      title: "Category Image",
      options: { hotspot: true },
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      description: "URL‑friendly ID generated from the name",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
