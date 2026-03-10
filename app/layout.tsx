import type { Metadata } from "next";
import ThemeRegistry from "@/components/ThemeRegistry";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "MAAMA Concert Toronto 2026 - Tickets Available Now at CAD $100",
  description: "Join us on November 21, 2026 at the Metro Convention Centre in Toronto for MAAMA Concert, a celebration honouring Black African women in healthcare through music, storytelling, and community.",
  keywords: "MAAMA Concert, Toronto, Black women in healthcare, community concert, Judith Babirye, Wilson Bugembe, Levixone",
  openGraph: {
    title: "MAAMA Concert Toronto 2026",
    description: "Tickets are CAD $100 | November 21, 2026 | Metro Convention Centre",
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
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <ThemeRegistry>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
