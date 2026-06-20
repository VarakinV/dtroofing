import LocationPage, { locationMetadata } from "@/app/components/LocationPage";

const data = {
  slug: "roofing-hamiota",
  townName: "Hamiota",
  preposition: "in" as const,
  leadText: "Hamiota sits in the prairie country northwest of Brandon, surrounded by the farms and acreages we\u2019ve roofed for three generations. Steel that shrugs off wind and snow is our bread and butter out here.",
  heroImage: "/brand/standing-seam/web/ss-brick.jpg",
  ogImage: "https://dtroofing.org/brand/standing-seam/web/ss-brick.jpg",
  description: "Roofing in Hamiota, MB - metal roofs, shingle re-roofs, repairs and hail claims from D.T Roofing in nearby Brandon. Fully insured, free quotes.",
};

export const metadata = locationMetadata(data);

export default function Page() {
  return <LocationPage data={data} />;
}
