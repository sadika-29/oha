import { defineType, defineField } from "sanity";
export default defineType({
  name: "journey",
  title: "Journey",
  type: "document",
  fields: [
    defineField({ name: "year", type: "string", title: "Year" }),
    defineField({ name: "title", type: "string", title: "Title" }),
    defineField({ name: "description", type: "string", title: "Description" }),
  ],
});
