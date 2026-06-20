import LocationPage, { locationMetadata } from "@/app/components/LocationPage";

const data = {
  slug: "roofing-neepawa",
  townName: "Neepawa",
  preposition: "in" as const,
  leadText: "Neepawa sits northeast of Brandon along the Yellowhead, well inside the Westman region we\u2019ve roofed for over 60 years. Town lot or farmstead, you get the same crew and the same standard.",
  heroImage: "/brand/metstar/web/charcoal.jpg",
  ogImage: "https://dtroofing.org/brand/metstar/web/charcoal.jpg",
  description: "Roofing in Neepawa, MB - metal roofs, shingle re-roofs, repairs and storm claims from D.T Roofing, a third-generation crew based in nearby Brandon. Free quotes.",
};

export const metadata = locationMetadata(data);

export default function Page() {
  return <LocationPage data={data} />;
}
