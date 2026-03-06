type Props = {
  eyebrow?: string;
  title: string;
  desc?: string;
  right?: React.ReactNode;
};

export function SectionHeader({ eyebrow, title, desc, right }: Props) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div>
        {eyebrow && (
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: "var(--cyan)" }}
            />
            {eyebrow}
          </div>
        )}
        <h2 className="mt-3 text-2xl font-semibold tracking-tight">{title}</h2>
        {desc && (
          <p className="mt-2 max-w-[80ch] text-sm text-white/70 leading-relaxed">
            {desc}
          </p>
        )}
      </div>
      {right}
    </div>
  );
}
