"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Info, X } from "lucide-react";
import { Popover } from "radix-ui";
import type { Language } from "@/data/translations";
import styles from "./GuideTreatmentInfo.module.css";

export function GuideTreatmentInfo({ name, description, language }: {
  name: string; description: string; language: Language;
}) {
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const descriptionId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const pinnedRef = useRef(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const pt = language === "pt";

  const cancelClose = () => clearTimeout(closeTimerRef.current);
  const show = () => { cancelClose(); setOpen(true); };
  const scheduleClose = () => {
    cancelClose();
    // Allow the pointer to cross the gap and the keyboard to enter the panel.
    closeTimerRef.current = setTimeout(() => {
      if (!pinnedRef.current && document.activeElement !== triggerRef.current && !contentRef.current?.contains(document.activeElement)) setOpen(false);
    }, 50);
  };

  useEffect(() => () => clearTimeout(closeTimerRef.current), []);

  return <Popover.Root open={open} onOpenChange={(nextOpen) => {
    cancelClose();
    if (!nextOpen) pinnedRef.current = false;
    setOpen(nextOpen);
  }}>
    <Popover.Trigger asChild>
      <button ref={triggerRef} type="button" className={styles.trigger}
        aria-label={`${pt ? "O que é" : "What is"} ${name}?`}
        aria-describedby={open ? descriptionId : undefined}
        onPointerEnter={(event) => { if (event.pointerType === "mouse") show(); }}
        onPointerLeave={(event) => { if (event.pointerType === "mouse") scheduleClose(); }}
        onFocus={show} onBlur={scheduleClose}
        onClick={(event) => {
          // A hover/focus preview becomes persistent on the first tap/click.
          event.preventDefault();
          cancelClose();
          pinnedRef.current = !pinnedRef.current;
          setOpen(pinnedRef.current);
        }}>
        <Info size={18} strokeWidth={1.6} aria-hidden="true" />
      </button>
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content ref={contentRef} className={styles.content} side="top" align="start" sideOffset={6} collisionPadding={16}
        aria-labelledby={titleId} aria-describedby={descriptionId}
        onOpenAutoFocus={(event) => event.preventDefault()}
        onCloseAutoFocus={(event) => event.preventDefault()}
        onEscapeKeyDown={() => triggerRef.current?.focus()}
        onPointerEnter={cancelClose} onPointerLeave={scheduleClose}
        onFocus={cancelClose} onBlur={scheduleClose}>
        <div className={styles.heading}>
          <strong id={titleId}>{name}</strong>
          <Popover.Close asChild><button type="button" className={styles.close} aria-label={pt ? "Fechar informação" : "Close information"} onClick={() => triggerRef.current?.focus()}><X size={16} aria-hidden="true" /></button></Popover.Close>
        </div>
        <p id={descriptionId}>{description}</p>
        <Popover.Arrow className={styles.arrow} width={12} height={6} />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>;
}
