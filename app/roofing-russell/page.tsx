import LocationPage, { locationMetadata } from "@/app/components/LocationPage";

const data = {
  slug: "roofing-russell",
  townName: "Russell",
  preposition: "in" as const,
  leadText: "Russell is part of the Westman region we\u2019ve served for over 60 years. Same crew, same standard, whether you\u2019re in town or out on an acreage.",
  heroImage: "/brand/metstar/web/silver-3tone.jpg",
  ogImage: "https://dtroofing.org/brand/metstar/web/silver-3tone.jpg",
  description: "Roofing in Russell, Manitoba \u2014 metal roofs, shingle re-roofs, repairs and insurance claims from D.T Roofing in nearby Brandon. Fully insured, free quotes.",
};

export const metadata = locationMetadata(data);

export default function Page() {
  return <LocationPage data={data} />;
}
