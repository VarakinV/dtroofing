import LocationPage, { locationMetadata } from "@/app/components/LocationPage";

const data = {
  slug: "roofing-virden",
  townName: "Virden",
  preposition: "in" as const,
  leadText: "Out west toward the Saskatchewan border, Virden is oil-and-grain country where roofs take the full brunt of prairie wind. We've worked it for decades — and wind is exactly what our metal systems are built to beat.",
  heroImage: "/brand/standing-seam/web/ss-home-1.jpg",
  ogImage: "https://dtroofing.org/brand/standing-seam/web/ss-home-1.jpg",
  description: "Roofing in Virden, MB - wind-tough metal roofs, shingle re-roofs, repairs and insurance claims from D.T Roofing of Brandon. Fully insured, free quotes.",
};

export const metadata = locationMetadata(data);

export default function Page() {
  return <LocationPage data={data} />;
}
