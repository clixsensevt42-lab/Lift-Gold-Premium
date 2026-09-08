import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lift-gold-premium.vercel.app"),
  title: "Lift Gold | Cuidado Premium para a Pele",
  description:
    "Conheça o Lift Gold, cuidado premium para a pele, com foco em hidratação, firmeza e aparência mais radiante. Confira os kits disponíveis.",
  alternates: {
    canonical: "https://lift-gold-premium.vercel.app/",
  },
  openGraph: {
    title: "Lift Gold | Cuidado Premium para a Pele",
    description:
      "Conheça o Lift Gold, cuidado premium para a pele, com foco em hidratação, firmeza e aparência mais radiante. Confira os kits disponíveis.",
    url: "https://lift-gold-premium.vercel.app/",
    siteName: "Lift Gold",
    images: [
      {
        url: "/images/lift-gold.png",
        width: 1200,
        height: 630,
        alt: "Lift Gold – Cuidado Premium para a Pele",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lift Gold | Cuidado Premium para a Pele",
    description:
      "Conheça o Lift Gold, cuidado premium para a pele, com foco em hidratação, firmeza e aparência mais radiante. Confira os kits disponíveis.",
    images: ["/images/lift-gold.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
