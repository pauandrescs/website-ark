import { getHotelVariant, hotelVariants } from "../data";
import HotelCategoryClient from "./HotelCategoryClient";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return hotelVariants.map((variant) => ({ slug: variant.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const variant = getHotelVariant(slug);

  if (!variant) {
    return {
      title: "Hotel Category | ARK Platforms",
    };
  }

  return {
    title: `${variant.name} Hotels | GoldenInn`,
    description: variant.longDesc,
    openGraph: {
      title: `${variant.name} Hotels | GoldenInn`,
      description: variant.longDesc,
      images: [{ url: variant.image, width: 1200, height: 630, alt: `${variant.name} hotel concept` }],
    },
  };
}

export default async function HotelCategoryPage({ params }) {
  const { slug } = await params;
  const variant = getHotelVariant(slug);
  if (!variant) notFound();

  return <HotelCategoryClient variant={variant} />;
}
