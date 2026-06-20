import LocationPage, { locationMetadata } from "@/app/components/LocationPage";

const data = {
  slug: "roofing-minnedosa",
  townName: "Minnedosa",
  preposition: "in" as const,
  leadText: "Tucked into its river valley north of Brandon, Minnedosa is an easy run for our crews. From homes near the lake to acreages up on the hills, we roof the whole community.",
  heroImage: "/brand/metstar/web/silver-3tone.jpg",
  ogImage: "https://dtroofing.org/brand/metstar/web/silver-3tone.jpg",
  description: "Roofing in Minnedosa, MB - metal roofs, shingle re-roofs, repairs and hail claims from D.T Roofing in nearby Brandon. Fully insured, free quotes.",
};

export const metadata = locationMetadata(data);

export default function Page() {
  return <LocationPage data={data} />;
}
