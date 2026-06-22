import LocationPage, { locationMetadata } from "@/app/components/LocationPage";

const data = {
  slug: "roofing-boissevain",
  townName: "Boissevain",
  preposition: "in" as const,
  leadText: "Boissevain is part of the Westman region we've served for over 60 years. Same crew, same standard, whether you're in town or out on an acreage.",
  heroImage: "/brand/metstar/web/teak.jpg",
  ogImage: "https://dtroofing.org/brand/metstar/web/teak.jpg",
  description: "Roofing in Boissevain, Manitoba — metal roofs, shingle re-roofs, repairs and insurance claims from D.T Roofing in nearby Brandon. Fully insured, free quotes.",
};

export const metadata = locationMetadata(data);

export default function Page() {
  return <LocationPage data={data} />;
}
