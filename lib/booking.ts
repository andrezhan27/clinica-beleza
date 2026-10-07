const BOOKING_WHATSAPP_PHONE = "351935486918";

export function createBookingWhatsAppUrl(message: string) {
  const params = new URLSearchParams({
    phone: BOOKING_WHATSAPP_PHONE,
    text: message,
    type: "phone_number",
    app_absent: "0",
  });

  return `https://api.whatsapp.com/send/?${params.toString()}`;
}

export function createConsultationBookingUrl(language: "pt" | "en", interest?: string) {
  const message = language === "pt"
    ? `Olá! Gostaria de marcar uma avaliação na Clínica Beleza.${interest ? ` Tenho interesse em: ${interest}.` : ""} Podem ajudar-me com a disponibilidade e o próximo passo?`
    : `Hello! I would like to book a consultation at Clínica Beleza.${interest ? ` I'm interested in: ${interest}.` : ""} Could you help me with availability and the next step?`;
  return createBookingWhatsAppUrl(message);
}

export const BOOKING_WHATSAPP_URL = createBookingWhatsAppUrl(
  "Olá! Gostava de agendar um tratamento na Clínica Beleza. Podem ajudar-me, por favor?",
);
