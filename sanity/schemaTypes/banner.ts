import { defineType, defineField } from "sanity";

export default defineType({
  name: "banner",
  title: "Banner",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", title: "Title" }),
    defineField({ name: "subTitle", type: "string", title: "Sub-Title" }),
    defineField({
      name: "image",
      type: "image",
      title: "Banner Image",
      options: { hotspot: true },
    }),
  ],
});
