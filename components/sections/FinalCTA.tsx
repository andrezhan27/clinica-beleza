"use client";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageProvider";
import { Reveal } from "@/components/ui/Reveal";
import { ClinicButton } from "@/components/ui/ClinicButton";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { BOOKING_WHATSAPP_URL } from "@/lib/booking";
export function FinalCTA() {
  const { t } = useLanguage();
  return (
    <section className="final-cta">
      <div className="final-cta__image">
        <Image
          src="/images/image-1.png"
          width={1536}
          height={1024}
          sizes="(max-width: 820px) 100vw, 45vw"
          alt="Entrada da Clínica Beleza em Lisboa"
          style={{ width: "100%", height: "100%", display: "block", objectFit: "cover" }}
        />
      </div>
      <Reveal className="final-cta__content">
        <p className="eyebrow">{t.finalCta.eyebrow}</p>
        <h2>{t.finalCta.title}</h2>
        <p>{t.finalCta.copy}</p>
        <div className="final-cta__actions">
          <MagneticButton>
            <ClinicButton href={BOOKING_WHATSAPP_URL} target="_blank" rel="noreferrer" arrow>
              {t.finalCta.action}
            </ClinicButton>
          </MagneticButton>
          <a className="whatsapp-link" href={BOOKING_WHATSAPP_URL} target="_blank" rel="noreferrer">
            <MessageCircle size={18} />
            {t.finalCta.whatsapp}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
