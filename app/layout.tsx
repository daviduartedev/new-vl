import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vip Lar Imobiliária — Conheça nossa equipe",
  description:
    "Vip Lar Imobiliária — Conheça nossa equipe de corretoras e fale direto no WhatsApp.",
  icons: {
    icon: "/logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#9a9a9a",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
