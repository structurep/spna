"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="flex min-h-screen flex-col px-6 pb-16 pt-8 md:px-12 lg:px-24">
      <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-16">
        <header
          className={`nav-shell sticky top-0 z-40 flex items-center justify-between border-b border-transparent transition-all ${scrolled ? "scrolled py-4" : "py-7"}`}
        >
          <Image
            src="/images/logo.svg"
            alt="Structured Partners"
            width={36}
            height={36}
            priority
          />
          <div className="hidden gap-7 text-[10px] tracking-[0.2em] uppercase text-spmuted md:flex">
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
        </header>

        <section id="about" className="flex flex-col gap-14 pb-8 pt-12 md:pt-20 lg:pt-24">
          <div className="max-w-3xl space-y-6">
            <p className="hero-line text-[11px] tracking-[0.22em] uppercase text-spmuted">
              Industrial &amp; field services M&amp;A
            </p>
            <h1 className="hero-line font-display text-[36px] font-medium leading-[1.08] text-sptext md:text-[48px] lg:text-[56px]">
              Structuring exits for essential service companies.
            </h1>
            <p className="hero-line max-w-2xl text-[15px] leading-[1.78] text-spmuted md:text-[16px]">
              Structured Partners is a boutique, senior-led M&amp;A advisory firm
              for industrial, infrastructure, and recurring maintenance
              businesses. Every mandate is run by an experienced Managing
              Director — there are no handoffs to junior teams, just measured
              execution and precise buyer engagement.
            </p>
            <p className="hero-line text-[12px] leading-[1.45] text-spmuted md:text-[13px]">
              Based in St. Petersburg, Florida. Working with founders, family
              offices, and select investors across the United States.
            </p>
          </div>

          <section id="mandates" className="max-w-3xl space-y-5">
            <p className="text-[10px] tracking-[0.2em] uppercase text-spmuted">
              Recent mandates
            </p>
            <div className="grid gap-5 md:grid-cols-2">
              {mandates.map(item => (
                <div
                  key={item.label}
                  className="card-fade rounded-[26px] border border-[rgba(0,0,0,0.05)] bg-[#faf5ee] px-6 py-5 shadow-[0_18px_40px_rgba(0,0,0,0.04)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_22px_50px_rgba(0,0,0,0.05)] md:px-7 md:py-6"
                >
                  <p className="text-[10px] tracking-[0.2em] uppercase text-spmuted">
                    {item.label}
                  </p>
                  <p className="mt-3 text-[13px] leading-6 text-sptext/85">
                    {item.copy}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </section>

        <footer className="border-t border-spborder pt-12 pb-10 text-[11px] text-spmuted">
          <div className="max-w-3xl space-y-5">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-sptext">
                  Structured Partners
                </p>
                <p className="text-[12px] text-spmuted">
                  Boutique M&amp;A advisory for industrial &amp; field services businesses.
                </p>
              </div>
              <div className="flex flex-col gap-1 text-[12px]">
                <a
                  href="mailto:info@structuredpartners.com"
                  className="transition-colors duration-150 hover:text-espaccent"
                >
                  info@structuredpartners.com
                </a>
                <span>St. Petersburg, Florida</span>
              </div>
            </div>
            <div className="flex flex-col gap-1 text-[10px] uppercase tracking-[0.18em] text-spmuted">
              <span>Structured Partners · Industrial &amp; Field Services M&amp;A</span>
              <span>© {new Date().getFullYear()} Structured Partners. All rights reserved.</span>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
