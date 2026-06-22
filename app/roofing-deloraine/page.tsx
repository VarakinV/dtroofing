import LocationPage, { locationMetadata } from "@/app/components/LocationPage";

const data = {
  slug: "roofing-deloraine",
  townName: "Deloraine",
  preposition: "in" as const,
  leadText: "Down south by Turtle Mountain, Deloraine is one of the farther corners of the Westman region we serve — and we make the trip, because a good roof shouldn't depend on how close you are to town.",
  heroImage: "/brand/metstar/web/slate-grey.jpg",
  ogImage: "https://dtroofing.org/brand/metstar/web/slate-grey.jpg",
  description: "Roofing in Deloraine, MB - metal roofs, shingle re-roofs, repairs and insurance claims from D.T Roofing of Brandon. Fully insured, free quotes.",
};

export const metadata = locationMetadata(data);

export default function Page() {
  return <LocationPage data={data} />;
}
