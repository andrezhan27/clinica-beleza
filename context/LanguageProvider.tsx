"use client";

import { createContext, useContext, useEffect, useMemo, useSyncExternalStore } from "react";
import { translations, type Language, type Translation } from "@/data/translations";

type LanguageContextValue = { language: Language; setLanguage: (language: Language) => void; t: Translation };
const LanguageContext = createContext<LanguageContextValue | null>(null);
const LANGUAGE_KEY = "clinica-beleza-language";
let fallbackLanguage: Language = "pt";
function getLanguage(): Language {
  try { const stored = window.localStorage.getItem(LANGUAGE_KEY); return stored === "pt" || stored === "en" ? stored : fallbackLanguage; }
  catch { return fallbackLanguage; }
}
function subscribeLanguage(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener("clinic-language-change", onChange);
  return () => { window.removeEventListener("storage", onChange); window.removeEventListener("clinic-language-change", onChange); };
}
function setLanguage(language: Language) {
  fallbackLanguage = language;
  try { window.localStorage.setItem(LANGUAGE_KEY, language); } catch { /* Keep the current choice when storage is unavailable. */ }
  window.dispatchEvent(new Event("clinic-language-change"));
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(subscribeLanguage, getLanguage, () => "pt" as Language);
  useEffect(() => { document.documentElement.lang = language; }, [language]);
  const value = useMemo(() => ({ language, setLanguage, t: translations[language] }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
