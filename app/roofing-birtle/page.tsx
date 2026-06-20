import LocationPage, { locationMetadata } from "@/app/components/LocationPage";

const data = {
  slug: "roofing-birtle",
  townName: "Birtle",
  preposition: "in" as const,
  leadText: "Set in the Birdtail River valley northwest of the city, Birtle is solid Westman territory for us \u2014 older homes, newer builds and farm buildings alike.",
  heroImage: "/brand/metstar/web/charcoal.jpg",
  ogImage: "https://dtroofing.org/brand/metstar/web/charcoal.jpg",
  description: "Roofing in Birtle, MB - metal roofs, shingle re-roofs, repairs and insurance claims from D.T Roofing of Brandon. Fully insured, free quotes.",
};

export const metadata = locationMetadata(data);

export default function Page() {
  return <LocationPage data={data} />;
}
