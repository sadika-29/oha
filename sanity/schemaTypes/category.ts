import { defineType, defineField } from "sanity";

export default defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Name",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      type: "string",
      title: "Subtitle",
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
      rows: 4,
    }),
    defineField({
      name: "icon",
      type: "string",
      title: "Icon Name",
      description: "Lucide icon name (e.g. 'Shield', 'Heart', 'Users')",
      validation: (Rule) => Rule.required(),
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
