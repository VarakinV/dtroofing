import LocationPage, { locationMetadata } from "@/app/components/LocationPage";

const data = {
  slug: "roofing-rapid-city",
  townName: "Rapid City",
  preposition: "in" as const,
  leadText: "Rapid City sits just up the Little Saskatchewan River north of Brandon, one of the closest towns we serve. That means fast quotes and fast starts, with the same crew that works the city.",
  heroImage: "/brand/metstar/web/fresh-install.jpg",
  ogImage: "https://dtroofing.org/brand/metstar/web/fresh-install.jpg",
  description: "Roofing in Rapid City, MB - metal roofs, shingle re-roofs, repairs and storm claims from D.T Roofing, just south in Brandon. Fully insured, free quotes.",
};

export const metadata = locationMetadata(data);

export default function Page() {
  return <LocationPage data={data} />;
}
