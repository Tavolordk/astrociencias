"use client";

import { motion, useReducedMotion } from "motion/react";

export function HeroGlow() {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl opacity-30"
        style={{
          background: "radial-gradient(circle, var(--violet), transparent 60%)",
        }}
        animate={{
          x: [0, 18, 0],
          y: [0, 10, 0],
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full blur-3xl opacity-25"
        style={{
          background: "radial-gradient(circle, var(--cyan), transparent 60%)",
        }}
        animate={{
          x: [0, -16, 0],
          y: [0, -12, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </>
  );
}
