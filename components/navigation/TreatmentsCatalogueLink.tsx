"use client";

import type { ComponentProps, MouseEvent } from "react";
import Link from "next/link";

type TreatmentsCatalogueLinkProps = Omit<ComponentProps<typeof Link>, "href">;

export function TreatmentsCatalogueLink({ onClick, ...props }: TreatmentsCatalogueLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      window.location.pathname !== "/tratamentos"
    ) return;

    event.preventDefault();
    const previousScrollBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    window.requestAnimationFrame(() => {
      document.documentElement.style.scrollBehavior = previousScrollBehavior;
    });
  };

  return <Link {...props} href="/tratamentos" onClick={handleClick} />;
}
