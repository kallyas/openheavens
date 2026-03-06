import type { Metadata } from "next";
import ShareOHClient from "./ShareOHClient";
import { EVENT_INFO } from "@/lib/constants";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const POSTER_URL = "/images/posters/main-poster.png";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `Share ${EVENT_INFO.title} Poster`,
  description:
    "Share the official Mama Concert poster by Pastor Judith Babirye and invite your community to worship.",
  openGraph: {
    title: `${EVENT_INFO.title} | Share Poster`,
    description:
      "Help spread the word for Mama Concert by Pastor Judith Babirye. Share the official event poster.",
    type: "website",
    url: "/share-MC",
    images: [
      {
        url: POSTER_URL,
        width: 1200,
        height: 1500,
        alt: "Mama Concert event poster by Pastor Judith Babirye",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${EVENT_INFO.title} | Share Poster`,
    description:
      "Help spread the word for Mama Concert by Pastor Judith Babirye. Share the official event poster.",
    images: [POSTER_URL],
  },
};

export default function ShareOHPage() {
  return <ShareOHClient />;
}
