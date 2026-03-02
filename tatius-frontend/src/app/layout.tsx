import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { LenisProvider } from "@/components/LenisProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TATIUS | Nasce da gente. Transforma em você.",
  description:
    "Joias com personalidade. Autenticidade, cor e estilo que nascem da gente e se transformam em você.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
