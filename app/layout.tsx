import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Evasión Publicidad | Agencia de Publicidad en Granada",
  description: "Agencia de publicidad en Granada especializada en diseño, branding, desarrollo web y marketing digital. #evádeteycrea",
  keywords: ["agencia publicidad", "marketing digital", "diseño gráfico", "branding", "desarrollo web", "Granada"],
  authors: [{ name: "Evasión Publicidad" }],
  openGraph: {
    title: "Evasión Publicidad | Agencia de Publicidad en Granada",
    description: "Transformamos tus ideas en campañas de marketing que hacen ¡booom!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${poppins.variable} antialiased pt-20 md:pt-24`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
