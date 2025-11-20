import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col px-6 py-10 md:px-12 lg:px-20">
      <div className="w-full max-w-5xl mx-auto flex flex-col flex-1">
        {/* NAV */}
        <nav className="flex items-center justify-between mb-20 md:mb-24">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.svg"
              alt="Structured Partners"
              width={28}
              height={28}
              priority
            />
            <span className="text-[11px] md:text-xs tracking-[0.18em] uppercase">
              Structured Partners
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-[11px] tracking-[0.16em] uppercase text-spmuted">
            <a href="#about" className="hover:text-sptext transition-colors">
              About
            </a>
            <a href="#mandates" className="hover:text-sptext transition-colors">
              Mandates
            </a>
            <a
              href="mailto:info@structuredpartners.com"
              className="hover:text-sptext transition-colors"
            >
              Contact
            </a>
          </div>
        </nav>

        {/* HERO */}
        <section id="about" className="flex-1 flex items-center">
          <div className="max-w-xl">
            <div className="text-[10px] md:text-[11px] tracking-[0.18em] uppercase text-spmuted mb-4">
              Industrial &amp; field services M&amp;A
            </div>

            <h1 className="text-[28px] md:text-[36px] lg:text-[40px] leading-tight mb-4">
              Structuring exits for essential service companies.
            </h1>

            <p className="text-[14px] leading-7 text-spmuted mb-3 max-w-xl">
              Structured Partners is a boutique M&amp;A advisory firm focused
              on industrial and field services businesses. We run a limited
              number of sale and recapitalization processes each year, and
              every mandate is led start-to-finish by an experienced
              Managing Director — not a junior team.
            </p>

            <p className="text-[12px] leading-6 text-spmuted">
              Based in St. Petersburg, Florida. Working with founders,
              families, and select investors across the United States.
            </p>
          </div>
        </section>

        {/* Mandates */}
        <section id="mandates" className="mt-16 md:mt-20">
          <div className="text-[11px] tracking-[0.18em] uppercase text-spmuted mb-3">
            Recent Mandates
          </div>
          <div className="grid gap-4 md:grid-cols-2 text-[13px] leading-6">
            <div className="border border-spborder rounded-lg p-4 bg-white/70">
              <div className="text-xs uppercase tracking-[0.18em] text-spmuted mb-1">
                Sell-Side
              </div>
              <p>
                Family-owned specialty contractor exiting to a strategic buyer
                after 35 years of operation.
              </p>
            </div>
            <div className="border border-spborder rounded-lg p-4 bg-white/70">
              <div className="text-xs uppercase tracking-[0.18em] text-spmuted mb-1">
                Recapitalization
              </div>
              <p>
                Regional field services platform partnering with a private
                equity sponsor to accelerate growth across the Southeast.
              </p>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-spborder mt-20 pt-5 text-spmuted text-[11px] md:text-xs">
          <div className="mb-1">
            <a
              href="mailto:info@structuredpartners.com"
              className="hover:text-espaccent transition-colors"
            >
              info@structuredpartners.com
            </a>
          </div>
          <div className="uppercase tracking-[0.14em] text-[10px] md:text-[11px]">
            Structured Partners · Industrial &amp; field services M&amp;A
          </div>
          <div className="mt-1 text-[11px] md:text-xs">
            © 2025 Structured Partners. All rights reserved.
          </div>
        </footer>
      </div>
    </main>
  );
}
