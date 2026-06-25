import { defineType, defineField } from "sanity";

export default defineType({
  name: "award",
  title: "Award",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", title: "Name" }),
    defineField({ name: "year", type: "string", title: "Year" }),
  ],
});
