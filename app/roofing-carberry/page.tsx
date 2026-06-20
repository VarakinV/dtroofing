import LocationPage, { locationMetadata } from "@/app/components/LocationPage";

const data = {
  slug: "roofing-carberry",
  townName: "Carberry",
  preposition: "in" as const,
  leadText: "Carberry sits east of Brandon on the Trans-Canada, out by the Spruce Woods sandhills. It\u2019s a short trip for us and a town we\u2019ve roofed for years.",
  heroImage: "/brand/metstar/web/teak.jpg",
  ogImage: "https://dtroofing.org/brand/metstar/web/teak.jpg",
  description: "Roofing in Carberry, MB - metal roofs, shingle re-roofs, repairs and insurance claims from D.T Roofing, just west on the Trans-Canada. Free quotes.",
};

export const metadata = locationMetadata(data);

export default function Page() {
  return <LocationPage data={data} />;
}
