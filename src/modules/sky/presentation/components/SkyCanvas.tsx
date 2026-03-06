"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { SkyExploreItemVM } from "@/modules/sky/presentation/view-models/SkyExploreVM";

type Props = {
  items: SkyExploreItemVM[];
  selectedId?: string;
  onSelect?: (id: string) => void;
};

export function SkyCanvas({ items, selectedId, onSelect }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [size, setSize] = useState({ width: 900, height: 460 });

  const selected = useMemo(
    () => items.find((item) => item.id === selectedId) ?? null,
    [items, selectedId],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    const resize = () => {
      setSize({
        width: Math.max(parent.clientWidth, 320),
        height: 460,
      });
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(parent);

    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = size.width * dpr;
    canvas.height = size.height * dpr;
    canvas.style.width = `${size.width}px`;
    canvas.style.height = `${size.height}px`;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, size.width, size.height);

    drawBackground(ctx, size.width, size.height);
    drawStars(ctx, size.width, size.height);
    drawObjects(ctx, size.width, size.height, items, selected?.id);
  }, [items, selected?.id, size.height, size.width]);

  const handleClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickY = event.clientY - rect.top;

    const found = items.find((item) => {
      const px = (item.x / 100) * size.width;
      const py = (item.y / 100) * size.height;
      const distance = Math.hypot(clickX - px, clickY - py);
      return distance <= 14;
    });

    if (found && onSelect) {
      onSelect(found.id);
    }
  };

  return (
    <canvas
      ref={canvasRef}
      onClick={handleClick}
      className="w-full cursor-pointer rounded-2xl border border-white/10 bg-black/20"
      aria-label="Mapa del cielo interactivo"
    />
  );
}

function drawBackground(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
) {
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, "rgba(20, 18, 48, 1)");
  gradient.addColorStop(0.45, "rgba(8, 17, 35, 1)");
  gradient.addColorStop(1, "rgba(9, 30, 45, 1)");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  const glowA = ctx.createRadialGradient(
    width * 0.18,
    height * 0.22,
    0,
    width * 0.18,
    height * 0.22,
    180,
  );
  glowA.addColorStop(0, "rgba(139,92,246,0.18)");
  glowA.addColorStop(1, "rgba(139,92,246,0)");
  ctx.fillStyle = glowA;
  ctx.fillRect(0, 0, width, height);

  const glowB = ctx.createRadialGradient(
    width * 0.82,
    height * 0.26,
    0,
    width * 0.82,
    height * 0.26,
    220,
  );
  glowB.addColorStop(0, "rgba(34,211,238,0.15)");
  glowB.addColorStop(1, "rgba(34,211,238,0)");
  ctx.fillStyle = glowB;
  ctx.fillRect(0, 0, width, height);
}

function drawStars(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
) {
  for (let i = 0; i < 120; i++) {
    const x = (Math.sin(i * 999) * 0.5 + 0.5) * width;
    const y = (Math.cos(i * 777) * 0.5 + 0.5) * height;
    const r = (i % 3) + 0.4;

    ctx.beginPath();
    ctx.fillStyle = `rgba(255,255,255,${0.15 + (i % 5) * 0.08})`;
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawObjects(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  items: SkyExploreItemVM[],
  selectedId?: string,
) {
  items.forEach((item) => {
    const x = (item.x / 100) * width;
    const y = (item.y / 100) * height;
    const isSelected = item.id === selectedId;

    ctx.beginPath();
    ctx.fillStyle = isSelected
      ? "rgba(34,211,238,0.95)"
      : "rgba(255,255,255,0.92)";
    ctx.arc(x, y, isSelected ? 7 : 5, 0, Math.PI * 2);
    ctx.fill();

    if (isSelected) {
      ctx.beginPath();
      ctx.strokeStyle = "rgba(34,211,238,0.55)";
      ctx.lineWidth = 2;
      ctx.arc(x, y, 13, 0, Math.PI * 2);
      ctx.stroke();
    }

    ctx.fillStyle = "rgba(255,255,255,0.78)";
    ctx.font = "12px sans-serif";
    ctx.fillText(item.name, x + 10, y - 8);
  });
}
