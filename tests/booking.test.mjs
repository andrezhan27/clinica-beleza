import assert from "node:assert/strict";
import test from "node:test";
import { createConsultationBookingUrl } from "../lib/booking.ts";

test("consultation handoffs use the customer's language and preserve their treatment interest", () => {
  for (const language of ["pt", "en"]) {
    const interest = "PRP · Face & Hair / 3 sessions";
    const url = new URL(createConsultationBookingUrl(language, interest));
    assert.equal(url.origin, "https://api.whatsapp.com");
    assert.equal(url.searchParams.get("phone"), "351935486918");
    const message = url.searchParams.get("text");
    assert.ok(message.includes(interest));
    assert.match(message, language === "pt" ? /^Olá!.*marcar uma avaliação/ : /^Hello!.*book a consultation/);
    assert.match(message, language === "pt" ? /disponibilidade/ : /availability/);
  }
});

test("general consultation handoffs work without a treatment selection", () => {
  for (const language of ["pt", "en"]) {
    const message = new URL(createConsultationBookingUrl(language)).searchParams.get("text");
    assert.ok(message.includes("Clínica Beleza"));
    assert.doesNotMatch(message, /undefined|null|interesse em:|interested in:/);
  }
});
