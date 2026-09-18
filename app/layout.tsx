import type { Metadata, Viewport } from "next";
import { LanguageProvider } from "@/context/LanguageProvider";
import { siteUrl } from "@/lib/site-url";
import "@fontsource-variable/manrope";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  applicationName: "Clínica Beleza",
  title: {
    default: "Clínica Beleza | Medicina Estética em Lisboa",
    template: "%s | Clínica Beleza",
  },
  description: "Clínica de medicina estética em Saldanha, Lisboa. Tratamentos personalizados de medicina estética, estética facial, corporal, medicina capilar e bem-estar.",
  keywords: ["Clínica Beleza Lisboa", "Clínica de estética Lisboa", "Medicina estética Lisboa", "Medicina estética Saldanha", "Tratamentos estéticos Lisboa", "Clínica estética Saldanha"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Clínica Beleza | Medicina Estética em Lisboa",
    description: "Cuidado personalizado, tecnologia avançada e resultados naturais no centro de Lisboa.",
    siteName: "Clínica Beleza",
    url: "/",
    locale: "pt_PT",
    type: "website",
    images: [{ url: "/images/home-hero.webp", alt: "Clínica Beleza em Lisboa" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clínica Beleza | Medicina Estética em Lisboa",
    description: "Cuidado personalizado, tecnologia avançada e resultados naturais no centro de Lisboa.",
    images: ["/images/home-hero.webp"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/images/brand/favicon.svg?v=2" },
};

export const viewport: Viewport = {
  themeColor: "#fafafa",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt">
      <body><LanguageProvider>{children}</LanguageProvider></body>
    </html>
  );
}
