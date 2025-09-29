import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "ta4a1ttv",
  dataset: "production",
  apiVersion: "2023-01-01", // use today's date
  useCdn: false, // ⬅️ always fetch fresh data in dev
});
