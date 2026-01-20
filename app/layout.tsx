import type { Metadata } from "next";
import ThemeRegistry from "@/components/ThemeRegistry";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mama Concert Toronto 2026 - Tickets Available Now at CAD $100",
  description: "Join us on November 21st at the Metro Convention Centre for an unforgettable night of worship and celebration. Featuring Judith Babirye, Pastor Wilson Bugembe, Levixon, and more. Tickets available now for CAD $100.",
  keywords: "Mama Concert, Toronto, Gospel Concert, Worship,Judith Babirye, Pastor Wilson Bugembe, Levixon",
  openGraph: {
    title: "Mama Concert Toronto 2026",
    description: "A Ticket at CAD $100 ! November 28th | Metro Convention Centre",
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
