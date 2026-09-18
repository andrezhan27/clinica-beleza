import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/components/hero/Hero";
import { Intro } from "@/components/sections/Intro";
import { TreatmentCategories } from "@/components/sections/TreatmentCategories";
import { ConcernDiscovery } from "@/components/sections/ConcernDiscovery";
import { FeaturedTreatments } from "@/components/sections/FeaturedTreatments";
import { WhyClinic } from "@/components/sections/WhyClinic";
import { Team } from "@/components/sections/Team";
import { Results } from "@/components/sections/Results";
import { Testimonials } from "@/components/sections/Testimonials";
import { ClinicSpace } from "@/components/sections/ClinicSpace";
import { Financing } from "@/components/sections/Financing";
import { Location } from "@/components/sections/Location";
import { Footer } from "@/components/footer/Footer";

const clinicSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalClinic", "LocalBusiness"],
  name: "Clínica Beleza",
  description: "Clínica de medicina estética em Saldanha, Lisboa.",
  address: { "@type": "PostalAddress", streetAddress: "Av. João Crisóstomo 63 A", postalCode: "1050-126", addressLocality: "Lisboa", addressCountry: "PT" },
  telephone: "+351211500899",
  email: "info@clinicabeleza.pt",
  areaServed: "Lisboa",
};

export default function Home() {
  return <>
    <Navbar />
    <main>
      <Hero />
      <Intro />
      <ConcernDiscovery />
      <TreatmentCategories />
      <FeaturedTreatments />
      <WhyClinic />
      <Team />
      <Results />
      <Testimonials />
      <ClinicSpace />
      <Financing />
      <Location />
    </main>
    <Footer />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }} />
  </>;
}
