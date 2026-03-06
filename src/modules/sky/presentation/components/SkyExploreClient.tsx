"use client";

import { useMemo, useState } from "react";
import type { SkyExploreVM } from "@/modules/sky/presentation/view-models/SkyExploreVM";
import { GlassCard } from "@/shared/presentation/ui/GlassCard";
import { Button } from "@/shared/presentation/ui/Button";
import { SkyCanvas } from "@/modules/sky/presentation/components/SkyCanvas";

type Props = {
  initialData: SkyExploreVM;
};

export function SkyExploreClient({ initialData }: Props) {
  const [selectedId, setSelectedId] = useState<string | undefined>(
    initialData.items[0]?.id,
  );

  const selectedItem = useMemo(
    () =>
      initialData.items.find((item) => item.id === selectedId) ??
      initialData.items[0] ??
      null,
    [initialData.items, selectedId],
  );

  return (
    <div className="grid gap-5 md:grid-cols-12">
      <GlassCard className="p-6 md:col-span-8">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-xs text-white/60">Mapa del cielo</div>
            <h1 className="mt-1 text-2xl font-semibold tracking-tight">
              Explora el cielo desde {initialData.city}
            </h1>
            <p className="mt-2 text-sm text-white/70">{initialData.summary}</p>
          </div>
          <div className="text-xs text-white/50">
            Haz clic sobre un objeto para ver detalles
          </div>
        </div>

        <div className="mt-5">
          <SkyCanvas
            items={initialData.items}
            selectedId={selectedItem?.id}
            onSelect={setSelectedId}
          />
        </div>
      </GlassCard>

      <GlassCard className="p-6 md:col-span-4">
        <div className="text-xs text-white/60">Objeto seleccionado</div>

        {selectedItem ? (
          <>
            <div className="mt-2 text-2xl font-semibold">
              {selectedItem.name}
            </div>

            <div className="mt-4 grid gap-3">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="text-xs text-white/50">Tipo</div>
                <div className="mt-1 font-medium">{selectedItem.typeLabel}</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="text-xs text-white/50">Dificultad</div>
                <div className="mt-1 font-medium">
                  {selectedItem.difficulty}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="text-xs text-white/50">Altura aparente</div>
                <div className="mt-1 font-medium">{selectedItem.altitude}</div>
              </div>
            </div>

            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              {selectedItem.description}
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <Button variant="primary" className="w-full">
                Guardar en mi lista
              </Button>
              <Button className="w-full">Compartir observación</Button>
            </div>
          </>
        ) : (
          <p className="mt-3 text-sm text-white/70">
            No hay objetos disponibles para esta ciudad.
          </p>
        )}
      </GlassCard>

      <div className="md:col-span-12">
        <GlassCard className="p-6">
          <div className="text-sm text-white/60">Objetos visibles</div>
          <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {initialData.items.map((item) => {
              const active = item.id === selectedItem?.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedId(item.id)}
                  className={`rounded-2xl border p-4 text-left transition ${
                    active
                      ? "border-cyan-400/50 bg-cyan-400/10"
                      : "border-white/10 bg-black/20 hover:border-white/20 hover:bg-white/5"
                  }`}
                >
                  <div className="font-medium">{item.name}</div>
                  <div className="mt-1 text-xs text-white/60">
                    {item.typeLabel}
                  </div>
                  <div className="mt-3 text-xs text-white/50">
                    {item.difficulty} · {item.altitude}
                  </div>
                </button>
              );
            })}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
