import type { Metadata } from "next";
import ThemeRegistry from "@/components/ThemeRegistry";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Open Heavens Toronto 2025 - A FREE New Year's Eve Gospel Concert",
  description: "Join us on December 31st at The International Centre for an unforgettable night of worship and celebration. Featuring Michael W. Smith, Chevelle Franklyn, Don Moen, Joe Mettle, and more. Free admission and free transportation available.",
  keywords: "Open Heavens, Toronto, Gospel Concert, New Year's Eve, Worship, Free Event, Michael W. Smith, Chevelle Franklyn, Don Moen, Joe Mettle",
  openGraph: {
    title: "Open Heavens Toronto 2025",
    description: "A FREE New Year's Eve Gospel Concert - December 31st at The International Centre",
    type: "website",
    locale: "en_CA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <ThemeRegistry>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
