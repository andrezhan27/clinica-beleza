import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageProvider";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], display: "swap", variable: "--font-manrope" });

export const metadata: Metadata = {
  metadataBase: new URL("https://clinica-beleza-lisboa.zhan-liu128.chatgpt.site"),
  title: "Clínica Beleza | Medicina Estética em Lisboa",
  description: "Clínica de medicina estética em Saldanha, Lisboa. Tratamentos personalizados de medicina estética, estética facial, corporal, medicina capilar e bem-estar.",
  keywords: ["Clínica Beleza Lisboa", "Clínica de estética Lisboa", "Medicina estética Lisboa", "Medicina estética Saldanha", "Tratamentos estéticos Lisboa", "Clínica estética Saldanha"],
  openGraph: {
    title: "Clínica Beleza | Medicina Estética em Lisboa",
    description: "Cuidado personalizado, tecnologia avançada e resultados naturais no centro de Lisboa.",
    locale: "pt_PT",
    type: "website",
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt" className={manrope.variable}>
      <body><LanguageProvider>{children}</LanguageProvider></body>
    </html>
  );
}
