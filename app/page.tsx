import Image from "next/image";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Mandates", href: "#mandates" },
  { label: "Contact", href: "mailto:info@structuredpartners.com" }
];

const mandates = [
  {
    label: "Sell-side",
    copy:
      "Family-owned specialty contractor exiting to a strategic buyer after 35 years of operation."
  },
  {
    label: "Recapitalization",
    copy:
      "Regional field services platform partnering with a private equity sponsor to accelerate growth across the Southeast."
  }
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-6 py-10 md:px-12 lg:px-20">
      <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-12">
        <nav className="flex items-center justify-between border-b border-spborder pb-6">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.svg"
              alt="Structured Partners"
              width={28}
              height={28}
              priority
            />
            <span className="text-[10px] tracking-[0.22em] uppercase text-sptext">
              Structured Partners
            </span>
          </div>
          <div className="hidden gap-6 text-[10px] tracking-[0.2em] uppercase text-spmuted md:flex">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors duration-150 hover:text-sptext"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        <section
          id="about"
          className="flex flex-1 flex-col justify-center gap-12 pb-10 pt-6"
        >
          <div className="max-w-2xl space-y-5">
            <p className="text-[10px] tracking-[0.22em] uppercase text-spmuted">
              Industrial &amp; field services M&amp;A
            </p>
            <h1 className="font-display text-[32px] leading-tight text-sptext md:text-[44px]">
              Structuring exits for essential service companies.
            </h1>
            <p className="max-w-xl text-[15px] leading-7 text-spmuted">
              Structured Partners is a boutique, senior-led M&amp;A advisory firm
              for industrial, infrastructure, and recurring maintenance
              businesses. Every mandate is run by an experienced Managing
              Director — there are no handoffs to junior teams, just measured
              execution and precise buyer engagement.
            </p>
            <p className="text-[13px] leading-6 text-spmuted">
              Based in St. Petersburg, Florida. Working with founders, family
              offices, and select investors across the United States.
            </p>
          </div>

          <section id="mandates" className="space-y-4">
            <p className="text-[10px] tracking-[0.2em] uppercase text-spmuted">
              Recent mandates
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {mandates.map(item => (
                <div
                  key={item.label}
                  className="rounded-[28px] border border-spborder bg-white/60 px-6 py-5 shadow-[0_12px_30px_rgba(0,0,0,0.04)]"
                >
                  <p className="text-[10px] tracking-[0.2em] uppercase text-spmuted">
                    {item.label}
                  </p>
                  <p className="mt-3 text-[14px] leading-6 text-sptext/80">
                    {item.copy}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </section>

        <footer className="border-t border-spborder pt-6 text-[11px] text-spmuted">
          <div className="mb-2">
            <a
              href="mailto:info@structuredpartners.com"
              className="transition-colors duration-150 hover:text-espaccent"
            >
              info@structuredpartners.com
            </a>
          </div>
          <p className="text-[10px] uppercase tracking-[0.18em]">
            Structured Partners · Industrial &amp; Field Services M&amp;A
          </p>
          <p className="mt-1 text-[11px] text-spmuted">
            © {new Date().getFullYear()} Structured Partners. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}
