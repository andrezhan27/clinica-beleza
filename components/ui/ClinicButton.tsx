import { ArrowUpRight } from "lucide-react";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: "primary" | "secondary" | "light"; children: ReactNode; arrow?: boolean };

export function ClinicButton({ variant = "primary", children, arrow = false, className = "", ...props }: Props) {
  return <a className={`button button--${variant} ${className}`} {...props}><span>{children}</span>{arrow && <ArrowUpRight size={17} strokeWidth={1.7} aria-hidden="true" />}</a>;
}
