import LocationPage, { locationMetadata } from "@/app/components/LocationPage";

const data = {
  slug: "roofing-rivers",
  townName: "Rivers",
  preposition: "in" as const,
  leadText: "Just northwest of Brandon near Lake Wahtopanah, Rivers is close enough that we treat it like home turf \u2014 quick quotes, quick starts, and the same crews you\u2019d get in the city.",
  heroImage: "/brand/standing-seam/web/ss-home-2.jpg",
  ogImage: "https://dtroofing.org/brand/standing-seam/web/ss-home-2.jpg",
  description: "Roofing in Rivers, MB - metal roofs, shingle re-roofs, repairs and storm claims from D.T Roofing, minutes away in Brandon. Fully insured, free quotes.",
};

export const metadata = locationMetadata(data);

export default function Page() {
  return <LocationPage data={data} />;
}
