import type { Metadata } from "next";
import Background from "@/assets/header/header_image.webp";

const metadataGlobal: Metadata = {
  title: "Jakub Urbański Software Developments | Poland",
  description:
    "Experienced Front-end Developer from Poland, specializing in responsive websites optimized for SEO.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://urbanski-frontend.pl",
  },
  openGraph: {
    title: "Jakub Urbański Software Developments | Poland",
    description:
      "Experienced Front-end Developer from Poland, specializing in responsive websites optimized for SEO.",
    url: `https://urbanski-frontend.pl/`,
    siteName: "Jakub Urbański",
    images: [
      {
        url: Background.src,
        width: 800,
        height: 600,
      },
    ],
    locale: "en",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/favicon.png",
        href: "/favicon.png",
      },
    ],
  },
};

export default metadataGlobal;
