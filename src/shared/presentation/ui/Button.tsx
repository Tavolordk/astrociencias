import React from "react";

type ButtonVariant = "primary" | "ghost";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export function Button({
  variant = "ghost",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "rounded-xl px-5 py-3 font-semibold transition hover:translate-y-[-1px] active:translate-y-0 disabled:opacity-50 disabled:pointer-events-none";
  const styles =
    variant === "primary"
      ? "cosmic-btn"
      : "border border-white/15 bg-white/5 hover:bg-white/10";

  return <button className={`${base} ${styles} ${className}`} {...props} />;
}
