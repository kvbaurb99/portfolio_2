import type { Metadata } from "next";
import Background from "@/assets/header/northern-lights-jvwfhimjjaamngpk.jpg";

const metadataGlobal: Metadata = {
  title: "Jakub Urbański Software Developments | Bielsko-Biała",
  description:
    "Doświadczony Front-end Developer z Bielska-Białej, specjalizujący się w responsywnych stronach internetowych zoptymalizowanych pod SEO.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Jakub Urbański Software Developments | Bielsko-Biała",
    description:
      "Odkryj, jak łączę wiedzę front-endową z AI, tworząc nowoczesne, responsywne strony. Z siedzibą w Bielsku-Białej, obsługuję klientów w całej Polsce.",
    url: `https://urbanski-dev.pl`,
    siteName: "Jakub Urbański",
    images: [
      {
        url: Background.src,
        width: 800,
        height: 600,
      },
    ],
    locale: "pl",
    type: "website",
  },
};

export default metadataGlobal;
