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
  title: "Lift Gold | Cuidado Premium para a Pele",
  description:
    "Lift Gold: uma opção premium para sua rotina de cuidados com a pele. Conheça os kits disponíveis e escolha o seu.",
  openGraph: {
    title: "Lift Gold | Cuidado Premium para a Pele",
    description:
      "Lift Gold: uma opção premium para sua rotina de cuidados com a pele. Conheça os kits disponíveis e escolha o seu.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lift Gold | Cuidado Premium para a Pele",
    description:
      "Lift Gold: uma opção premium para sua rotina de cuidados com a pele. Conheça os kits disponíveis e escolha o seu.",
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
