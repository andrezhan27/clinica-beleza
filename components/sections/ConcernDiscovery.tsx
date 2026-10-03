"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, MessageCircle, RotateCcw } from "lucide-react";
import { useLanguage } from "@/context/LanguageProvider";
import {
  ASSESSMENT_OFFER_ID, UNSURE_CONCERN_ID, createTreatmentGuideMessage, formatTreatmentGuidePrice,
  getTreatmentGuideOptions, getTreatmentGuidePrice, treatmentGuideAreas, treatmentGuideOffers,
  type TreatmentGuideOffer,
} from "@/data/treatment-guide";
import { priceCategories } from "@/data/pricing";
import { getTreatmentBySlug } from "@/data/treatments";
import type { Language } from "@/data/translations";
import { createBookingWhatsAppUrl } from "@/lib/booking";

import styles from "./ConcernDiscovery.module.css";

const TOTAL_STEPS = 4;
const GUIDANCE_VALUE = "team-guidance";
const guidanceLabel = { pt: "Prefiro orientação da equipa", en: "I would prefer guidance from the team" };
const unsureLabel = { pt: "Não tenho a certeza", en: "I'm not sure" };
type OfferFilter = "all" | "treatments" | "programmes";

function GuideOfferCard({ entry, language, selected, onSelect, isProgramme = false, unsure = false }: {
  entry: TreatmentGuideOffer; language: Language; selected: boolean; onSelect: () => void; isProgramme?: boolean; unsure?: boolean;
}) {
  const pt = language === "pt";
  const price = getTreatmentGuidePrice(entry, priceCategories);
  const name = entry.name?.[language] ?? price.name[language];
  const treatment = entry.treatmentSlug ? getTreatmentBySlug(entry.treatmentSlug) : undefined;
  return <article className={`treatment-finder__offer ${styles.selectableOffer} ${selected ? styles.selectedOffer : ""} ${isProgramme ? "treatment-finder__offer--programme" : ""}`}>
    <label className={styles.offerLabel}>
      <input type="radio" name="finder-offer" value={entry.id} checked={selected} onChange={onSelect} className={styles.radio} />
      <span className={styles.offerContent}>
        <span className="treatment-finder__offer-heading"><span><span className={styles.offerName}>{name}</span>{price.detail && <span className={styles.offerDetail}>{price.detail[language]}</span>}</span><span className="treatment-finder__offer-price"><strong>{formatTreatmentGuidePrice(price, language)}</strong>{price.unit !== "ml" && <small>{price.unit === "pack" ? (pt ? "total do pack" : "full pack") : isProgramme ? (pt ? "total do programa" : "full programme") : price.unit === "session" ? (pt ? "por sessão" : "per session") : (pt ? "IVA incluído" : "VAT included")}</small>}</span></span>
        {unsure && <span className={styles.deductionNote}>{pt ? "O valor da consulta é deduzido se realizar o procedimento." : "The consultation fee is deducted if you go ahead with the procedure."}</span>}
        <span className={styles.selectionHint}>{selected ? (pt ? "Selecionado" : "Selected") : (pt ? "Selecionar esta opção" : "Select this option")}</span>
      </span>
    </label>
    {treatment && <div className="treatment-finder__offer-actions"><Link href={`/tratamentos/${treatment.category}/${treatment.slug}`} target="_blank" rel="noreferrer" aria-label={`${pt ? "Conhecer" : "Learn more about"} ${name}`}>{pt ? "Conhecer" : "Learn more"}<ArrowUpRight size={14} aria-hidden="true" /></Link></div>}
  </article>;
}

export function ConcernDiscovery() {
  const { language } = useLanguage();
  const pt = language === "pt";
  const [step, setStep] = useState(1);
  const [areaId, setAreaId] = useState<string>();
  const [goalId, setGoalId] = useState<string>();
  const [offerId, setOfferId] = useState<string>();
  const [filter, setFilter] = useState<OfferFilter>("all");
  const stepHeadingRef = useRef<HTMLHeadingElement>(null);
  const hasInteractedRef = useRef(false);
  const area = treatmentGuideAreas.find((entry) => entry.id === areaId);
  const goal = area?.goals.find((entry) => entry.id === goalId);
  const unsure = goalId === UNSURE_CONCERN_ID;
  const concern = unsure ? unsureLabel : goal?.name;
  const options = areaId && goalId ? getTreatmentGuideOptions(areaId, goalId) : undefined;
  const assessmentPrice = getTreatmentGuidePrice(treatmentGuideOffers[ASSESSMENT_OFFER_ID], priceCategories);
  const assessmentLabel = formatTreatmentGuidePrice(assessmentPrice, language);
  const visibleCount = options ? (filter === "programmes" ? options.programmes.length : filter === "treatments" ? options.treatments.length : options.treatments.length + options.programmes.length) : 0;
  const stepLabels = pt ? ["Área", "Preocupação", "Tratamentos", "Resumo"] : ["Area", "Concern", "Treatments", "Summary"];
  const teamGuidance = offerId === GUIDANCE_VALUE;
  const selectedOffer = teamGuidance ? treatmentGuideOffers[ASSESSMENT_OFFER_ID] : options && [...options.treatments, ...options.programmes].find((entry) => entry.id === offerId);
  const selectedPrice = selectedOffer ? getTreatmentGuidePrice(selectedOffer, priceCategories) : undefined;
  const selectedProgramme = options?.programmes.some((entry) => entry.id === offerId) ?? false;
  const selectedName = selectedOffer && selectedPrice ? selectedOffer.name?.[language] ?? selectedPrice.name[language] : undefined;
  const whatsappUrl = area && concern && selectedOffer && selectedPrice ? createBookingWhatsAppUrl(createTreatmentGuideMessage(language, area, concern, teamGuidance ? { ...selectedOffer, name: { pt: "Orientação da equipa · consulta de avaliação", en: "Team guidance · assessment consultation" } } : selectedOffer, selectedPrice, selectedProgramme)) : undefined;

  useEffect(() => {
    if (!hasInteractedRef.current || !stepHeadingRef.current) return;
    const heading = stepHeadingRef.current;
    heading.focus({ preventScroll: true });
    const bounds = heading.getBoundingClientRect();
    if (bounds.top < 110 || bounds.bottom > window.innerHeight - 60) {
      heading.scrollIntoView({ block: "start", behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    }
  }, [step]);

  const goToStep = (nextStep: number) => { hasInteractedRef.current = true; setStep(nextStep); };
  const chooseArea = (id: string) => { setAreaId(id); setGoalId(undefined); setOfferId(undefined); setFilter("all"); goToStep(2); };
  const chooseGoal = (id: string) => { setGoalId(id); setOfferId(id === UNSURE_CONCERN_ID ? ASSESSMENT_OFFER_ID : undefined); setFilter("all"); goToStep(3); };
  const restart = () => { setAreaId(undefined); setGoalId(undefined); setOfferId(undefined); setFilter("all"); goToStep(1); };

  return <section id="encontrar-tratamento" className="section concern-discovery treatment-finder" aria-labelledby="treatment-finder-title">
    <div className="treatment-finder__intro">
      <p className="eyebrow">{pt ? "Orientação personalizada" : "Personalised guidance"}</p>
      <h2 id="treatment-finder-title">{pt ? "Encontre o cuidado certo para começar." : "Find the right place to begin."}</h2>
      <p>{pt ? "Escolha a área que gostaria de cuidar e a sua principal preocupação. Conheça tratamentos, programas e preços antes de falar com a nossa equipa." : "Choose the area you would like to care for and your main concern. Explore treatments, programmes and prices before talking with our team."}</p>
      <div className="treatment-finder__assurance"><Check size={17} aria-hidden="true" /><span>{pt ? "Ao seu ritmo · sem compromisso" : "At your pace · no commitment"}</span></div>
    </div>

    <div className="treatment-finder__panel">
      <div className="treatment-finder__progress">
        <p aria-live="polite">{pt ? `Passo ${step} de ${TOTAL_STEPS}` : `Step ${step} of ${TOTAL_STEPS}`}</p>
        <ol className={styles.progressTrack} aria-label={pt ? "Etapas da orientação" : "Guidance steps"}>{stepLabels.map((label, index) => <li key={label} className={`${styles.progressStep} ${index < step ? styles.activeStep : ""}`} aria-current={index + 1 === step ? "step" : undefined}><span className={styles.stepNumber}>{index + 1 < step ? <Check size={12} aria-hidden="true" /> : index + 1}</span><span className={styles.stepLabel}>{label}</span></li>)}</ol>
      </div>

      <div className="treatment-finder__stage" key={step}>
        {step === 1 && <div>
          <p className="treatment-finder__step-label">{pt ? "Área a cuidar" : "Area of care"}</p>
          <h3 ref={stepHeadingRef} tabIndex={-1}>{pt ? "O que gostaria de cuidar?" : "What would you like to care for?"}</h3>
          <div className="treatment-finder__choices treatment-finder__choices--areas">{treatmentGuideAreas.map((entry, index) => <button type="button" key={entry.id} onClick={() => chooseArea(entry.id)} className="treatment-finder__choice" aria-pressed={areaId === entry.id}>
            <span className="treatment-finder__choice-number">{String(index + 1).padStart(2, "0")}</span><ArrowRight size={17} aria-hidden="true" /><span className="treatment-finder__choice-copy"><strong>{entry.name[language]}</strong><small>{entry.description[language]}</small></span>
          </button>)}</div>
        </div>}

        {step === 2 && area && <div>
          <p className="treatment-finder__step-label">{area.name[language]}</p>
          <h3 ref={stepHeadingRef} tabIndex={-1}>{pt ? "O que mais o preocupa?" : "What concerns you most?"}</h3>
          <p className="treatment-finder__supporting-copy">{pt ? "Escolha a opção que melhor descreve o que gostaria de cuidar." : "Choose the option that best describes what you would like to care for."}</p>
          <div className="treatment-finder__choices treatment-finder__choices--compact">{area.goals.map((entry) => <button type="button" key={entry.id} onClick={() => chooseGoal(entry.id)} className="treatment-finder__choice" aria-pressed={goalId === entry.id}>
            <span><strong>{entry.name[language]}</strong><small>{entry.description[language]}</small></span><ArrowRight size={18} aria-hidden="true" />
          </button>)}</div>
          <button type="button" onClick={() => chooseGoal(UNSURE_CONCERN_ID)} className="treatment-finder__choice treatment-finder__choice--unsure" aria-pressed={unsure}><span><strong>{unsureLabel[language]}</strong><small>{pt ? `Comece por uma consulta de avaliação · ${assessmentLabel}` : `Start with an assessment consultation · ${assessmentLabel}`}</small></span><ArrowRight size={18} aria-hidden="true" /></button>
        </div>}

        {step === 3 && area && concern && options && <div>
          <p className="treatment-finder__step-label">{area.name[language]} · {concern[language]}</p>
          <h3 ref={stepHeadingRef} tabIndex={-1}>{unsure ? (pt ? "Comece por uma avaliação." : "Start with an assessment.") : (pt ? "Opções para cuidar de si." : "Explore your care options.")}</h3>
          <p className="treatment-finder__supporting-copy">{unsure ? (pt ? "Não precisa de saber qual tratamento escolher. A consulta ajuda a compreender as suas necessidades e a definir o próximo passo." : "You do not need to know which treatment to choose. A consultation helps clarify your needs and the next step.") : (pt ? "Estas opções correspondem à área e preocupação escolhidas. A avaliação confirma a abordagem adequada para si." : "These options relate to your selected area and concern. An assessment confirms the approach that is suitable for you.")}</p>
          {!unsure && <div className="treatment-finder__filters" role="group" aria-label={pt ? "Filtrar opções" : "Filter options"}>{([
            ["all", pt ? "Todos" : "All", options.treatments.length + options.programmes.length],
            ["treatments", pt ? "Tratamentos" : "Treatments", options.treatments.length],
            ["programmes", pt ? "Programas" : "Programmes", options.programmes.length],
          ] as const).map(([id, label, count]) => <button key={id} type="button" onClick={() => setFilter(id)} aria-pressed={filter === id} aria-controls="finder-offers" disabled={count === 0}>{label}<span>{count}</span></button>)}</div>}
          <div className="treatment-finder__offer-meta"><span role="status" aria-live="polite">{unsure ? (pt ? "Consulta de avaliação" : "Assessment consultation") : `${visibleCount} ${pt ? (visibleCount === 1 ? "opção" : "opções") : (visibleCount === 1 ? "option" : "options")}`}</span><span>{pt ? "Preços 2026 · IVA incluído" : "2026 prices · VAT included"}</span></div>
          <div id="finder-offers" className="treatment-finder__offers">
            {filter !== "programmes" && options.treatments.length > 0 && <section aria-labelledby="finder-treatments-title"><h4 id="finder-treatments-title">{unsure ? (pt ? "O seu primeiro passo" : "Your first step") : (pt ? "Tratamentos a explorar" : "Treatments to explore")}</h4>{options.treatments.map((entry) => <GuideOfferCard key={entry.id} entry={entry} language={language} selected={offerId === entry.id} onSelect={() => setOfferId(entry.id)} unsure={unsure} />)}</section>}
            {filter !== "treatments" && options.programmes.length > 0 && <section aria-labelledby="finder-programmes-title"><h4 id="finder-programmes-title">{pt ? "Programas sugeridos" : "Suggested programmes"}</h4><p className="treatment-finder__programme-note">{pt ? "O preço indicado é o total do programa ou pack." : "The price shown covers the full programme or pack."}</p>{options.programmes.map((entry) => <GuideOfferCard key={entry.id} entry={entry} language={language} selected={offerId === entry.id} onSelect={() => setOfferId(entry.id)} isProgramme />)}</section>}
          </div>
          {!unsure && <label className={`${styles.guidanceChoice} ${teamGuidance ? styles.selectedOffer : ""}`}><input type="radio" name="finder-offer" value={GUIDANCE_VALUE} checked={teamGuidance} onChange={() => setOfferId(GUIDANCE_VALUE)} className={styles.radio} /><span><strong>{guidanceLabel[language]}</strong><small>{pt ? `Consulta de avaliação · ${assessmentLabel}. Deduzível se realizar o procedimento.` : `Assessment consultation · ${assessmentLabel}. Deducted if you go ahead with the procedure.`}</small></span></label>}
          <button type="button" className={styles.primaryAction} disabled={!selectedOffer} onClick={() => goToStep(4)}>{pt ? "Continuar para o resumo" : "Continue to summary"}<ArrowRight size={17} aria-hidden="true" /></button>
          <Link href="/pricing" className="treatment-finder__all-prices">{pt ? "Consultar a tabela de preços completa" : "View the full price list"}<ArrowUpRight size={14} aria-hidden="true" /></Link>
        </div>}
        {step === 4 && area && concern && selectedOffer && selectedPrice && whatsappUrl && <div>
          <p className="treatment-finder__step-label">{pt ? "As suas escolhas" : "Your choices"}</p>
          <h3 ref={stepHeadingRef} tabIndex={-1}>{pt ? "Vamos dar o próximo passo?" : "Ready for the next step?"}</h3>
          <p className="treatment-finder__supporting-copy">{pt ? "Partilhe este resumo com a nossa equipa. Vamos ajudar a esclarecer as suas dúvidas e a agendar a sua avaliação." : "Share this summary with our team. We will help answer your questions and arrange your assessment."}</p>
          <dl className={styles.summary}>
            <div><dt>{pt ? "Área a cuidar" : "Area of care"}</dt><dd>{area.name[language]}</dd></div>
            <div><dt>{pt ? "Preocupação" : "Concern"}</dt><dd>{concern[language]}</dd></div>
            <div><dt>{teamGuidance ? (pt ? "Interesse" : "Interest") : selectedProgramme ? (pt ? "Programa" : "Programme") : (pt ? "Tratamento" : "Treatment")}</dt><dd>{teamGuidance ? guidanceLabel[language] : selectedName}{!teamGuidance && selectedPrice.detail && <small>{selectedPrice.detail[language]}</small>}</dd></div>
            <div><dt>{pt ? "Preço indicado" : "Listed price"}</dt><dd className={styles.summaryPrice}>{formatTreatmentGuidePrice(selectedPrice, language)}<small>{selectedPrice.unit === "pack" ? (pt ? "Total do pack · IVA incluído" : "Full pack · VAT included") : selectedProgramme ? (pt ? "Total do programa · IVA incluído" : "Full programme · VAT included") : selectedPrice.unit === "session" ? (pt ? "Por sessão · IVA incluído" : "Per session · VAT included") : teamGuidance || unsure ? (pt ? "Consulta de avaliação · IVA incluído" : "Assessment consultation · VAT included") : (pt ? "IVA incluído" : "VAT included")}</small></dd></div>
          </dl>
          {(unsure || teamGuidance) && <p className={styles.deductionNote}>{pt ? "O valor de 90 € da avaliação é deduzido se realizar o procedimento." : "The €90 assessment fee is deducted if you go ahead with the procedure."}</p>}
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className={styles.primaryAction}><MessageCircle size={18} aria-hidden="true" />{pt ? "Falar com a equipa no WhatsApp" : "Chat with the team on WhatsApp"}<ArrowUpRight size={16} aria-hidden="true" /></a>
          <p className="treatment-finder__note">{pt ? "A mensagem inclui as suas escolhas e pode ser editada antes de enviar. Sem compromisso." : "The message includes your choices and can be edited before sending. No commitment."}</p>
        </div>}
      </div>

      {step > 1 && <div className="treatment-finder__navigation"><button type="button" onClick={() => goToStep(step - 1)}><ArrowLeft size={16} aria-hidden="true" />{pt ? "Voltar" : "Back"}</button><button type="button" onClick={restart}>{pt ? "Recomeçar" : "Start again"}<RotateCcw size={15} aria-hidden="true" /></button></div>}
    </div>
  </section>;
}
