"use client";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";
import banner from "./sanity/schemaTypes/banner";
import journey from "./sanity/schemaTypes/journey";
import category from "./sanity/schemaTypes/category";
import team from "./sanity/schemaTypes/team";
import campaign from "./sanity/schemaTypes/campaign";
export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema: {
    types: [banner, journey, category, team, campaign],
  },
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
