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

export const BOOKING_WHATSAPP_URL = createBookingWhatsAppUrl(
  "Olá! Gostava de agendar um tratamento na Clínica Beleza. Podem ajudar-me, por favor?",
);
