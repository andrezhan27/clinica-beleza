"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageProvider";
import styles from "./TreatmentCategories.module.css";

export function TreatmentCategories() {
  const { language } = useLanguage();
  const pt = language === "pt";

  return (
    <section id="tratamentos" className={styles.section} aria-labelledby="home-treatments-title">
      <div className={styles.content}>
        <div className={styles.copy}>
          <h2 id="home-treatments-title">{pt ? "Tratamentos" : "Treatments"}</h2>
          <p>{pt ? "Encontre o cuidado certo para si." : "Find the right care for you."}</p>
        </div>
        <Link href="/tratamentos" className={`button button--primary ${styles.action}`}>
          <span>{pt ? "Ver tratamentos" : "View treatments"}</span>
          <ArrowRight size={19} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
