import type { EventCardVM } from "@/modules/events/presentation/view-models/EventCardVM";

export function EventCard({ vm }: { vm: EventCardVM }) {
  return (
    <a
      href={vm.href}
      className="cosmic-glass rounded-2xl p-5 hover:translate-y-[-1px] transition block"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="font-semibold text-white/90">{vm.title}</div>
        <div className="text-xs text-white/60 whitespace-nowrap">
          {vm.whenLabel}
        </div>
      </div>
      {vm.summary && (
        <p className="mt-2 text-sm text-white/70 leading-relaxed">
          {vm.summary}
        </p>
      )}
      <div className="mt-3 text-xs text-white/60">{vm.whereLabel}</div>
      <div className="mt-4 text-sm text-white/80">Detalles →</div>
    </a>
  );
}
