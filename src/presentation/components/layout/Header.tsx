"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
    { label: "Inicio", href: "/" },
    { label: "Alianza", href: "#about" },
    { label: "Proyectos", href: "#proyectos-destacados" },
    { label: "Eventos", href: "#eventos" },
    { label: "Contacto", href: "#contacto" },
];

export default function Header() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 24);
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={[
                "sticky top-0 z-50 transition-all duration-300",
                scrolled
                    ? "border-b border-white/10 bg-[#05070D]/78 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,.28)]"
                    : "border-b border-transparent bg-[#05070D]/30 backdrop-blur-md",
            ].join(" ")}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div
                    className={[
                        "flex items-center justify-between transition-all duration-300",
                        scrolled ? "py-3" : "py-4 sm:py-5",
                    ].join(" ")}
                >
                    <Link href="/" className="flex min-w-0 items-center gap-3">
                        <div
                            className={[
                                "flex shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 transition-all duration-300",
                                scrolled ? "h-10 w-10" : "h-11 w-11 sm:h-12 sm:w-12",
                            ].join(" ")}
                        >
                            <Image
                                src="/images/3-1.png"
                                alt="Alianza de Proyectos de Astrociencias"
                                width={40}
                                height={40}
                                className="object-contain"
                            />
                        </div>

                        <div className="min-w-0 leading-tight">
                            <div
                                className={[
                                    "font-semibold uppercase tracking-[0.18em] text-cyan-300/80 transition-all duration-300",
                                    scrolled ? "text-[9px] sm:text-[10px]" : "text-[10px] sm:text-xs",
                                ].join(" ")}
                            >
                                Alianza
                            </div>
                            <div
                                className={[
                                    "truncate text-white transition-all duration-300",
                                    scrolled ? "text-sm" : "text-sm sm:text-base",
                                ].join(" ")}
                            >
                                Proyectos de Astrociencias
                            </div>
                        </div>
                    </Link>

                    <nav className="hidden items-center gap-8 lg:flex">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-sm text-white/70 transition hover:text-white"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    <div className="hidden lg:block">
                        <a
                            href="#contacto"
                            className={[
                                "group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl border border-white/10 text-white transition-all duration-300",
                                scrolled ? "px-4 py-2.5 text-sm" : "px-5 py-3 text-sm",
                            ].join(" ")}
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-[#7C4DFF] via-[#8B5CF6] to-[#22D3EE] opacity-95" />
                            <span className="absolute inset-[1px] rounded-2xl bg-[linear-gradient(180deg,rgba(255,255,255,.10),rgba(255,255,255,.04))]" />
                            <span className="absolute -left-10 top-0 h-full w-16 rotate-12 bg-white/20 blur-xl transition-all duration-500 group-hover:left-[120%]" />

                            <span className="relative flex h-2.5 w-2.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-75" />
                                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-200" />
                            </span>

                            <span className="relative font-semibold tracking-[0.02em]">
                                Colaborar
                            </span>
                        </a>
                    </div>

                    <button
                        type="button"
                        aria-label={open ? "Cerrar menú" : "Abrir menú"}
                        aria-expanded={open}
                        onClick={() => setOpen((prev) => !prev)}
                        className={[
                            "inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all duration-300 lg:hidden",
                            scrolled ? "h-10 w-10" : "h-11 w-11",
                        ].join(" ")}
                    >
                        <span className="relative block h-4 w-5">
                            <span
                                className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-white transition ${open ? "translate-y-[7px] rotate-45" : ""
                                    }`}
                            />
                            <span
                                className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-white transition ${open ? "opacity-0" : "opacity-100"
                                    }`}
                            />
                            <span
                                className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-white transition ${open ? "-translate-y-[7px] -rotate-45" : ""
                                    }`}
                            />
                        </span>
                    </button>
                </div>

                <div
                    className={`overflow-hidden transition-all duration-300 lg:hidden ${open ? "max-h-96 pb-4" : "max-h-0"
                        }`}
                >
                    <div className="rounded-2xl border border-white/10 bg-[#0A1020]/95 p-3 shadow-[0_10px_35px_rgba(0,0,0,.25)]">
                        <nav className="flex flex-col">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className="rounded-xl px-4 py-3 text-sm text-white/75 transition hover:bg-white/5 hover:text-white"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>

                        <a
                            href="#contacto"
                            onClick={() => setOpen(false)}
                            className="mt-3 flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-gradient-to-r from-[#7C4DFF] to-[#22D3EE] px-4 py-3 text-center text-sm font-semibold text-white shadow-[0_10px_30px_rgba(34,211,238,.18)]"
                        >
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-200 opacity-75" />
                                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
                            </span>
                            Colaborar
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}