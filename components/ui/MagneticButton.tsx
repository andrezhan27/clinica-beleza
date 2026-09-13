"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";

export function MagneticButton({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 18, mass: 0.25 });
  const springY = useSpring(y, { stiffness: 180, damping: 18, mass: 0.25 });
  const move = (event: MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.12);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.12);
  };
  return <motion.div className="magnetic" style={{ x: springX, y: springY }} onMouseMove={move} onMouseLeave={() => { x.set(0); y.set(0); }}>{children}</motion.div>;
}
