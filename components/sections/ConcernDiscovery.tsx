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
type OfferTab = "treatments" | "programmes";

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
      </span>
    </label>
    {treatment && <Link className={styles.offerLink} href={`/tratamentos/${treatment.category}/${treatment.slug}`} target="_blank" rel="noreferrer" aria-label={`${pt ? "Conhecer" : "Learn more about"} ${name}`}>{pt ? "Conhecer" : "Learn more"}<ArrowUpRight size={14} aria-hidden="true" /></Link>}
  </article>;
}

export function ConcernDiscovery() {
  const { language } = useLanguage();
  const pt = language === "pt";
  const [step, setStep] = useState(1);
  const [areaId, setAreaId] = useState<string>();
  const [goalId, setGoalId] = useState<string>();
  const [offerId, setOfferId] = useState<string>();
  const [offerTab, setOfferTab] = useState<OfferTab>("treatments");
  const stepHeadingRef = useRef<HTMLHeadingElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const hasInteractedRef = useRef(false);
  const area = treatmentGuideAreas.find((entry) => entry.id === areaId);
  const goal = area?.goals.find((entry) => entry.id === goalId);
  const unsure = goalId === UNSURE_CONCERN_ID;
  const concern = unsure ? unsureLabel : goal?.name;
  const options = areaId && goalId ? getTreatmentGuideOptions(areaId, goalId) : undefined;
  const assessmentPrice = getTreatmentGuidePrice(treatmentGuideOffers[ASSESSMENT_OFFER_ID], priceCategories);
  const assessmentLabel = formatTreatmentGuidePrice(assessmentPrice, language);
  const activeTab: OfferTab = options?.[offerTab].length ? offerTab : options?.treatments.length ? "treatments" : "programmes";
  const visibleCount = options?.[activeTab].length ?? 0;
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
    if (stageRef.current) stageRef.current.scrollTop = 0;
    heading.focus({ preventScroll: true });
    const panel = panelRef.current;
    const bounds = (panel ?? heading).getBoundingClientRect();
    if (bounds.top < 80 || bounds.bottom > window.innerHeight) {
      const target = window.matchMedia("(min-width: 821px)").matches ? panel : heading;
      target?.scrollIntoView({ block: "start", behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    }
  }, [step]);

  const goToStep = (nextStep: number) => { hasInteractedRef.current = true; setStep(nextStep); };
  const chooseArea = (id: string) => { if (id !== areaId) { setAreaId(id); setGoalId(undefined); setOfferId(undefined); setOfferTab("treatments"); } goToStep(2); };
  const chooseGoal = (id: string) => { if (id !== goalId) { setGoalId(id); setOfferId(id === UNSURE_CONCERN_ID ? ASSESSMENT_OFFER_ID : undefined); setOfferTab("treatments"); } goToStep(3); };
  const restart = () => { setAreaId(undefined); setGoalId(undefined); setOfferId(undefined); setOfferTab("treatments"); goToStep(1); };

  return <section id="encontrar-tratamento" className="section concern-discovery treatment-finder" aria-labelledby="treatment-finder-title">
    <div className="treatment-finder__intro">
      <p className="eyebrow">{pt ? "Orientação personalizada" : "Personalised guidance"}</p>
      <h2 id="treatment-finder-title">{pt ? "Encontre o cuidado certo para começar." : "Find the right place to begin."}</h2>
      <p>{pt ? "Diga-nos o que gostaria de cuidar. Explore opções e preços, depois decida o próximo passo com a nossa equipa." : "Tell us what you would like to care for. Explore options and prices, then choose your next step with our team."}</p>
      <div className="treatment-finder__assurance"><Check size={17} aria-hidden="true" /><span>{pt ? "Ao seu ritmo · sem compromisso" : "At your pace · no commitment"}</span></div>
      <div className={styles.shortcuts}><a href={createBookingWhatsAppUrl(pt ? "Olá! Gostaria de orientação para escolher o cuidado mais adequado para mim. Podem ajudar-me?" : "Hello! I would like help choosing the right care for me. Could you guide me?")} target="_blank" rel="noreferrer"><MessageCircle size={16} aria-hidden="true" />{pt ? "Prefiro falar com a equipa" : "I'd rather talk to the team"}<ArrowUpRight size={14} aria-hidden="true" /></a><Link href="/tratamentos">{pt ? "Já sei o que procuro" : "I already know what I'm looking for"}<ArrowRight size={14} aria-hidden="true" /></Link></div>
    </div>

    <div className="treatment-finder__panel" ref={panelRef}>
      <div className="treatment-finder__progress">
        <p aria-live="polite">{pt ? `Passo ${step} de ${TOTAL_STEPS}` : `Step ${step} of ${TOTAL_STEPS}`}</p>
        <ol className={styles.progressTrack} aria-label={pt ? "Etapas da orientação" : "Guidance steps"}>{stepLabels.map((label, index) => <li key={label} className={`${styles.progressStep} ${index < step ? styles.activeStep : ""}`} aria-current={index + 1 === step ? "step" : undefined}><button type="button" disabled={index + 1 >= step} onClick={() => goToStep(index + 1)} aria-label={pt ? `Voltar ao passo ${index + 1}: ${label}` : `Return to step ${index + 1}: ${label}`}><span className={styles.stepNumber}>{index + 1 < step ? <Check size={12} aria-hidden="true" /> : index + 1}</span><span className={styles.stepLabel}>{label}</span></button></li>)}</ol>
      </div>

      <div className={`treatment-finder__stage ${step === 4 ? styles.summaryStage : ""}`} key={step} ref={stageRef} tabIndex={0} role="region" aria-label={stepLabels[step - 1]}>
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
          <button type="button" onClick={() => chooseGoal(UNSURE_CONCERN_ID)} className="treatment-finder__choice treatment-finder__choice--unsure" aria-pressed={unsure}><span><strong>{unsureLabel[language]}</strong><small>{pt ? `Comece por uma consulta de avaliação · ${assessmentLabel}` : `Start with an assessment consultation · ${assessmentLabel}`}</small></span><ArrowRight size={18} aria-hidden="true" /></button>
          <div className="treatment-finder__choices treatment-finder__choices--compact">{area.goals.map((entry) => <button type="button" key={entry.id} onClick={() => chooseGoal(entry.id)} className="treatment-finder__choice" aria-pressed={goalId === entry.id}>
            <span><strong>{entry.name[language]}</strong><small>{entry.description[language]}</small></span><ArrowRight size={18} aria-hidden="true" />
          </button>)}</div>
        </div>}

        {step === 3 && area && concern && options && <div>
          <p className="treatment-finder__step-label">{area.name[language]} · {concern[language]}</p>
          <h3 ref={stepHeadingRef} tabIndex={-1}>{unsure ? (pt ? "Comece por uma avaliação." : "Start with an assessment.") : (pt ? "Opções para cuidar de si." : "Explore your care options.")}</h3>
          <p className="treatment-finder__supporting-copy">{unsure ? (pt ? "Não precisa de saber qual tratamento escolher. A consulta ajuda a compreender as suas necessidades e a definir o próximo passo." : "You do not need to know which treatment to choose. A consultation helps clarify your needs and the next step.") : (pt ? "Explore tratamentos ou programas. A avaliação confirma a opção adequada para si." : "Explore treatments or programmes. An assessment confirms the option that is suitable for you.")}</p>
          {!unsure && <div className={styles.offerTabs} role="tablist" aria-label={pt ? "Tipo de cuidado" : "Type of care"}>{([
            ["treatments", pt ? "Tratamentos" : "Treatments", options.treatments.length],
            ["programmes", pt ? "Programas" : "Programmes", options.programmes.length],
          ] as const).map(([id, label, count]) => <button key={id} id={`finder-tab-${id}`} type="button" role="tab" aria-selected={activeTab === id} aria-controls={`finder-panel-${id}`} tabIndex={activeTab === id ? 0 : -1} disabled={count === 0} onClick={() => setOfferTab(id)} onKeyDown={(event) => {
            if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
            event.preventDefault();
            const available = (["treatments", "programmes"] as const).filter((tab) => options[tab].length > 0);
            const next = event.key === "Home" ? available[0] : event.key === "End" ? available[available.length - 1] : available[(available.indexOf(activeTab) + 1) % available.length];
            setOfferTab(next);
            document.getElementById(`finder-tab-${next}`)?.focus();
          }}>{label}<span>{count}</span></button>)}</div>}
          <div className="treatment-finder__offer-meta"><span role="status" aria-live="polite">{unsure ? (pt ? "Consulta de avaliação" : "Assessment consultation") : `${visibleCount} ${pt ? (visibleCount === 1 ? "opção" : "opções") : (visibleCount === 1 ? "option" : "options")}`}</span><span>{pt ? "Preços 2026 · IVA incluído" : "2026 prices · VAT included"}</span></div>
          <div id="finder-offers" className="treatment-finder__offers">
            <section id="finder-panel-treatments" role={unsure ? undefined : "tabpanel"} aria-labelledby={unsure ? "finder-treatments-title" : "finder-tab-treatments"} hidden={activeTab !== "treatments"} tabIndex={0}>{unsure && <h4 id="finder-treatments-title">{pt ? "O seu primeiro passo" : "Your first step"}</h4>}{options.treatments.map((entry) => <GuideOfferCard key={entry.id} entry={entry} language={language} selected={offerId === entry.id} onSelect={() => setOfferId(entry.id)} unsure={unsure} />)}</section>
            {!unsure && <section id="finder-panel-programmes" role="tabpanel" aria-labelledby="finder-tab-programmes" hidden={activeTab !== "programmes"} tabIndex={0}><p className="treatment-finder__programme-note">{pt ? "O preço indicado é o total do programa ou pack." : "The price shown covers the full programme or pack."}</p>{options.programmes.map((entry) => <GuideOfferCard key={entry.id} entry={entry} language={language} selected={offerId === entry.id} onSelect={() => setOfferId(entry.id)} isProgramme />)}</section>}
          </div>
          {!unsure && <label className={`${styles.guidanceChoice} ${teamGuidance ? styles.selectedOffer : ""}`}><input type="radio" name="finder-offer" value={GUIDANCE_VALUE} checked={teamGuidance} onChange={() => setOfferId(GUIDANCE_VALUE)} className={styles.radio} /><span><strong>{guidanceLabel[language]}</strong><small>{pt ? `Consulta de avaliação · ${assessmentLabel}. Deduzível se realizar o procedimento.` : `Assessment consultation · ${assessmentLabel}. Deducted if you go ahead with the procedure.`}</small></span></label>}
          <Link href="/tratamentos" className="treatment-finder__all-prices">{pt ? "Ver todos os tratamentos" : "View all treatments"}<ArrowUpRight size={14} aria-hidden="true" /></Link>
        </div>}
        {step === 4 && area && concern && selectedOffer && selectedPrice && whatsappUrl && <div>
          <h3 ref={stepHeadingRef} tabIndex={-1}>{pt ? "Vamos dar o próximo passo?" : "Ready for the next step?"}</h3>
          <p className="treatment-finder__supporting-copy">{pt ? "Reveja as suas escolhas antes de falar com a equipa." : "Review your choices before talking with the team."}</p>
          <dl className={styles.summary}>
            <div><dt>{pt ? "Área a cuidar" : "Area of care"}</dt><dd>{area.name[language]}</dd></div>
            <div><dt>{pt ? "Preocupação" : "Concern"}</dt><dd>{concern[language]}</dd></div>
            <div><dt>{teamGuidance ? (pt ? "Interesse" : "Interest") : selectedProgramme ? (pt ? "Programa" : "Programme") : (pt ? "Tratamento" : "Treatment")}</dt><dd>{teamGuidance ? guidanceLabel[language] : selectedName}{!teamGuidance && selectedPrice.detail && <small>{selectedPrice.detail[language]}</small>}</dd></div>
            <div><dt>{pt ? "Preço indicado" : "Listed price"}</dt><dd className={styles.summaryPrice}>{formatTreatmentGuidePrice(selectedPrice, language)}<small>{selectedPrice.unit === "pack" ? (pt ? "Total do pack · IVA incluído" : "Full pack · VAT included") : selectedProgramme ? (pt ? "Total do programa · IVA incluído" : "Full programme · VAT included") : selectedPrice.unit === "session" ? (pt ? "Por sessão · IVA incluído" : "Per session · VAT included") : teamGuidance || unsure ? (pt ? "IVA incluído · Dedutível se realizar o procedimento" : "VAT included · Deducted if you go ahead with the procedure") : (pt ? "IVA incluído" : "VAT included")}</small></dd></div>
          </dl>
        </div>}
      </div>

      {step > 1 && <div className={styles.footer}>
        {step === 3 && <div className={styles.continueRow}><p role="status">{selectedOffer ? `${teamGuidance ? guidanceLabel[language] : selectedName} · ${selectedPrice && formatTreatmentGuidePrice(selectedPrice, language)}` : (pt ? "Selecione uma opção para continuar." : "Select an option to continue.")}</p><button type="button" className={styles.primaryAction} disabled={!selectedOffer} onClick={() => goToStep(4)}>{pt ? "Ver resumo" : "View summary"}<ArrowRight size={17} aria-hidden="true" /></button></div>}
        {step === 4 && whatsappUrl && <div className={styles.continueRow}><a href={whatsappUrl} target="_blank" rel="noreferrer" className={styles.primaryAction}><MessageCircle size={18} aria-hidden="true" />{pt ? "Marcar avaliação no WhatsApp" : "Book consultation on WhatsApp"}<ArrowUpRight size={16} aria-hidden="true" /></a><p className={styles.handoffNote}>{pt ? "Abre o WhatsApp com as suas escolhas. Envie a mensagem para combinar a data com a equipa." : "Opens WhatsApp with your choices. Send the message to arrange a date with the team."}</p></div>}
        <div className="treatment-finder__navigation"><button type="button" onClick={() => goToStep(step - 1)}><ArrowLeft size={16} aria-hidden="true" />{pt ? "Voltar" : "Back"}</button><button type="button" onClick={restart}>{pt ? "Recomeçar" : "Start again"}<RotateCcw size={15} aria-hidden="true" /></button></div>
      </div>}
    </div>
  </section>;
}
