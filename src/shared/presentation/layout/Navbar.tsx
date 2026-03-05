import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="mx-auto flex w-[min(1180px,92vw)] items-center justify-between py-4">
        <Link
          href="/"
          className="flex items-center gap-3 font-extrabold tracking-tight"
        >
          <span className="h-10 w-10 rounded-2xl border border-white/15 bg-white/10" />
          Astrociencias
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {[
            ["Explora", "/explore"],
            ["Aprende", "/learn"],
            ["Agenda", "/events"],
            ["Comunidad", "/community"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="rounded-xl px-3 py-2 text-sm text-white/70 hover:bg-white/5 hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/explore"
            className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm"
          >
            Cielo hoy
          </a>
          <a
            href="/community"
            className="cosmic-btn rounded-xl px-4 py-2 text-sm font-semibold"
          >
            Únete
          </a>
        </div>
      </div>
    </header>
  );
}
