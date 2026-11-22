import type { Metadata } from "next";
import {
  Barlow_Semi_Condensed,
  IBM_Plex_Sans,
  IBM_Plex_Mono,
} from "next/font/google";
// Existing secondary brand lettering; the header keeps its own Sora font.
import "@fontsource/fraunces/600.css";
import "./globals.css";
const barlow = Barlow_Semi_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
  variable: "--font-barlow",
});
const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plex-sans",
});
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  preload: false,
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  title: "Trevvos | Soluções em Inteligência Artificial",
  description:
    "Tecnologia e inteligência artificial para transformar negócios. Soluções sob medida em IA e automação, e produtos próprios: Trevvos Commerce (em desenvolvimento) e KM One (disponível para Android).",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${barlow.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
