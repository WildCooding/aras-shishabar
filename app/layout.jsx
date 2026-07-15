import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body"
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-display"
});

export const metadata = {
  title: "ARAS BAR Nagold | Shisha Bar Lounge",
  description:
    "ARAS BAR in Nagold: Shisha, Cocktails, Lounge-Atmosphäre, Angebote, Jobs und Route zur Emmingerstr. 14.",
  openGraph: {
    title: "ARAS BAR Nagold",
    description:
      "Shisha, Bar und Lounge in Nagold. Geöffnet ab 17:00 Uhr.",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={`${inter.variable} ${bebas.variable}`}>
      <body>{children}</body>
    </html>
  );
}
