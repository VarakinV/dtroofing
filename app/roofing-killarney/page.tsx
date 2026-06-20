import LocationPage, { locationMetadata } from "@/app/components/LocationPage";

const data = {
  slug: "roofing-killarney",
  townName: "Killarney",
  preposition: "in" as const,
  leadText: "Killarney is part of the Westman region we\u2019ve served for over 60 years. Same crew, same standard, whether you\u2019re in town or out on an acreage.",
  heroImage: "/brand/standing-seam/web/ss-brick.jpg",
  ogImage: "https://dtroofing.org/brand/standing-seam/web/ss-brick.jpg",
  description: "Roofing in Killarney, Manitoba \u2014 metal roofs, shingle re-roofs, repairs and insurance claims from D.T Roofing in nearby Brandon. Fully insured, free quotes.",
};

export const metadata = locationMetadata(data);

export default function Page() {
  return <LocationPage data={data} />;
}
