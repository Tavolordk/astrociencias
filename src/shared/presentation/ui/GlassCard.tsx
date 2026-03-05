import React, { JSX } from "react";

type GlassCardProps = React.HTMLAttributes<HTMLDivElement> & {
  as?: keyof JSX.IntrinsicElements;
};

export function GlassCard({ as, className = "", ...props }: GlassCardProps) {
  const Tag = (as ?? "div") as React.ElementType;
  return <Tag className={`cosmic-glass rounded-3xl ${className}`} {...props} />;
}
