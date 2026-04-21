import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono, Syne, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Encre Acide | Satirical Poster Art",
  description:
    "Art that bites. Words that blast. Posters that refuse to behave. Satirical poster art from Paris — where AI-generated imagery collides with hand-crafted sarcastic wordplay.",
  keywords: [
    "satirical art",
    "poster art",
    "dark humor",
    "paris artist",
    "AI art",
    "wordplay",
    "Encre Acide",
    "Tarpe Diem",
    "S'il vous bled",
  ],
  openGraph: {
    title: "Encre Acide | Satirical Poster Art",
    description:
      "Art that bites. Words that blast. Posters that refuse to behave.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${spaceMono.variable} ${syne.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface-container-lowest text-on-surface font-body overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
