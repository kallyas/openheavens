import type { Metadata } from "next";
import ShareOHClient from "./ShareOHClient";
import { EVENT_INFO } from "@/lib/constants";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const POSTER_URL = "/images/posters/main-poster.png";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `Share ${EVENT_INFO.title} Poster`,
  description:
    "Share the official MAAMA Concert poster and invite your community to celebrate Black African women in healthcare.",
  openGraph: {
    title: `${EVENT_INFO.title} | Share Poster`,
    description:
      "Help spread the word for MAAMA Concert. Share the official event poster.",
    type: "website",
    url: "/share-MC",
    images: [
      {
        url: POSTER_URL,
        width: 1200,
        height: 1500,
        alt: "MAAMA Concert event poster",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${EVENT_INFO.title} | Share Poster`,
    description:
      "Help spread the word for MAAMA Concert. Share the official event poster.",
    images: [POSTER_URL],
  },
};

export default function ShareOHPage() {
  return <ShareOHClient />;
}
