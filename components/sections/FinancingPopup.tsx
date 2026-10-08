"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { Dialog } from "radix-ui";
import { useLanguage } from "@/context/LanguageProvider";
import { createBookingWhatsAppUrl } from "@/lib/booking";
import styles from "./FinancingPopup.module.css";

const SESSION_KEY = "clinica-beleza-payment-popup-shown";
let shownThisSession = false;

export function FinancingPopup() {
  const { t, language } = useLanguage();
  const [open, setOpen] = useState(false);
  const pt = language === "pt";

  useEffect(() => {
    if (shownThisSession) return;
    try {
      if (window.sessionStorage.getItem(SESSION_KEY) === "1") return;
    } catch { /* The in-memory flag also prevents repeats when storage is unavailable. */ }

    const timer = window.setTimeout(() => {
      shownThisSession = true;
      try { window.sessionStorage.setItem(SESSION_KEY, "1"); } catch { /* Keep the in-memory fallback. */ }
      setOpen(true);
    }, 2000);

    return () => window.clearTimeout(timer);
  }, []);

  const paymentUrl = createBookingWhatsAppUrl(pt
    ? "Olá! Gostaria de saber mais sobre as opções e condições de pagamento na Clínica Beleza. Podem ajudar-me?"
    : "Hello! I would like to know more about payment options and terms at Clínica Beleza. Could you help me?");

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.content}>
          <div className={styles.header}>
            <span className={styles.brand}>Clínica Beleza</span>
            <Dialog.Close className={styles.close} aria-label={pt ? "Fechar informação de pagamento" : "Close payment information"}>
              <X size={19} strokeWidth={1.5} aria-hidden="true" />
            </Dialog.Close>
          </div>
          <p className={styles.eyebrow}>{t.financing.eyebrow}</p>
          <Dialog.Title className={styles.title}>{t.financing.copy}</Dialog.Title>
          <Dialog.Description className={styles.description}>{t.financing.title}</Dialog.Description>
          <a className={`button button--primary ${styles.action}`} href={paymentUrl} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
            <span>{t.financing.action}</span><ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <Dialog.Close className={styles.continue}>{pt ? "Continuar a explorar" : "Continue exploring"}</Dialog.Close>
          <p className={styles.disclaimer}>{t.financing.disclaimer}</p>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
