"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: "#173d95" }}>
      <div className="max-w-[1440px] mx-auto">
        {/* Grid with visible borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-white/10">
          {/* Row 1 */}

          {/* Logo */}
          <div className="border-b border-r-0 md:border-r border-white/10 px-8 lg:px-12 py-8">
            <Link
              href="/"
              className="font-display text-xl tracking-[0.3em]"
            >
              TATIUS
            </Link>
          </div>

          {/* Empty top-center */}
          <div className="hidden md:block border-b border-r border-white/10" />

          {/* Empty top-right */}
          <div className="hidden md:block border-b border-white/10" />

          {/* Row 2 */}

          {/* Slogan */}
          <div className="border-b border-r-0 md:border-r border-white/10 px-8 lg:px-12 py-10">
            <p className="font-display text-xl md:text-2xl leading-snug text-white/80 italic">
              nasce da
              <br />
              <span className="not-italic text-white">gente.</span>
              <br />
              transforma
              <br />
              em <span className="not-italic text-white">você.</span>
            </p>
          </div>

          {/* Nav links */}
          <div className="border-b border-r-0 md:border-r border-white/10 px-8 lg:px-12 py-10">
            <ul className="space-y-3">
              {["Início", "Loja", "Sobre Nós", "Novidades", "Contato"].map(
                (label) => (
                  <li key={label}>
                    <Link
                      href="#"
                      className="text-xs font-semibold tracking-[0.15em] uppercase text-white/70 hover:text-white transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="border-b border-white/10 px-8 lg:px-12 py-10">
            <h4 className="text-xs font-semibold tracking-[0.12em] uppercase text-white/90 leading-relaxed mb-3">
              Receba as últimas novidades
              <br />
              e atualizações sobre a Tatius
            </h4>
            <p className="text-xs text-white/40 mb-5">
              Entre para a mailing list
            </p>
            <form className="flex mb-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="E-mail"
                className="flex-1 bg-white/10 border border-white/20 px-4 py-3 text-sm text-white placeholder:text-white/30 rounded-none focus:outline-none focus:border-white/50 transition-colors"
              />
              <button
                type="submit"
                className="bg-white/10 border border-l-0 border-white/20 px-4 py-3 text-white/70 hover:text-white hover:bg-white/20 transition-colors rounded-none"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </button>
            </form>
            <label className="flex items-start gap-2 text-[10px] text-white/30 leading-tight cursor-pointer">
              <input type="checkbox" className="mt-0.5 accent-white rounded-none" />
              Eu li a Política de Privacidade e aceito receber e-mails marketing.
            </label>
          </div>

          {/* Row 3 */}

          {/* Empty bottom-left */}
          <div className="hidden md:block border-r border-white/10" />

          {/* Policy links */}
          <div className="border-t md:border-t-0 border-r-0 md:border-r border-white/10 px-8 lg:px-12 py-10">
            <ul className="space-y-3">
              {[
                "Política de Privacidade",
                "Atendimento ao Cliente",
                "Termos de Serviço",
                "FAQ",
              ].map((label) => (
                <li key={label}>
                  <Link
                    href="#"
                    className="text-xs font-semibold tracking-[0.12em] uppercase text-white/50 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social links */}
          <div className="border-t md:border-t-0 border-white/10 px-8 lg:px-12 py-10 flex items-end">
            <div className="grid grid-cols-2 gap-0 w-full border border-white/10">
              <a
                href="#"
                className="text-xs font-semibold tracking-[0.15em] uppercase text-white/70 hover:text-white transition-colors text-center py-4 border-r border-white/10"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-xs font-semibold tracking-[0.15em] uppercase text-white/70 hover:text-white transition-colors text-center py-4"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
