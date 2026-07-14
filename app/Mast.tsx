"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { HAYAT, NAV } from "@/lib/content";

export default function Mast() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const anchor = (n: string) => {
    if (n === "Story") return "#story";
    if (n === "Work") return "#pillars";
    if (n === "Cases") return "#cases";
    if (n === "Field Notes") return "#notes";
    if (n === "Book a call") return HAYAT.calendarUrl;
    return "#";
  };

  return (
    <header className={`opm-mast ${scrolled ? "is-scrolled" : ""}`}>
      <div className="opm-mast-inner">
        <div className="opm-mast-l">
          <span className="opm-nav-tag">Hayat Amin</span>
        </div>
        <nav className="opm-mast-r">
          {NAV.map((n, i) => {
            const isCta = i === NAV.length - 1;
            return (
              <a
                key={n}
                href={anchor(n)}
                {...(isCta ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={isCta ? "opm-cta" : ""}
              >
                {n}
              </a>
            );
          })}
          <Link href="/answers">Answers</Link>
          <Link href="/speaking">Speaking</Link>
        </nav>
      </div>
    </header>
  );
}
