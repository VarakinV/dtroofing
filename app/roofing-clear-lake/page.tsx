import LocationPage, { locationMetadata } from "@/app/components/LocationPage";

const data = {
  slug: "roofing-clear-lake",
  townName: "Clear Lake",
  preposition: "at" as const,
  leadText: "Clear Lake and the Riding Mountain area are cottage and resort country north of Brandon. Cabins, year-round homes and steep cottage roofs all have to handle heavy snow \u2014 exactly where a properly installed metal or shingle roof earns its keep.",
  heroImage: "/brand/metstar/web/silver-3tone.jpg",
  ogImage: "https://dtroofing.org/brand/metstar/web/silver-3tone.jpg",
  description: "Roofing at Clear Lake & Riding Mountain, MB - metal and shingle roofs, re-roofs, repairs and storm claims from D.T Roofing of Brandon. Free quotes.",
};

export const metadata = locationMetadata(data);

export default function Page() {
  return <LocationPage data={data} />;
}
