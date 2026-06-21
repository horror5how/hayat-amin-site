"use client";

import { useEffect, useRef, useState } from "react";
import { HAYAT } from "@/lib/content";

// Direct-line popup — same idea as the Beyond Elevation "Alexandra" prompt, but
// themed for meethayat and pointed at Hayat's own calendar. Shows once, after the
// visitor has either spent ~15s or scrolled ~45% of the page. Dismissal is
// remembered for 7 days so it never nags a returning reader.
const SEEN_KEY = "mh_directline_popup";
const SNOOZE_DAYS = 7;

export default function ChatPopup() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Respect a recent dismissal.
    try {
      const until = Number(localStorage.getItem(SEEN_KEY) || 0);
      if (until && Date.now() < until) return;
    } catch {}

    let done = false;
    const trigger = () => {
      if (done) return;
      done = true;
      setOpen(true);
      cleanup();
    };
    const onScroll = () => {
      const sc = window.scrollY / (document.body.scrollHeight - window.innerHeight || 1);
      if (sc > 0.45) trigger();
    };
    const timer = window.setTimeout(trigger, 15000);
    window.addEventListener("scroll", onScroll, { passive: true });
    function cleanup() {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    }
    return cleanup;
  }, []);

  // Esc to close + focus the close button when shown.
  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function dismiss() {
    setOpen(false);
    try {
      localStorage.setItem(SEEN_KEY, String(Date.now() + SNOOZE_DAYS * 864e5));
    } catch {}
  }

  if (!open) return null;

  return (
    <div
      className="opm-pop-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) dismiss();
      }}
    >
      <div className="opm-pop-card" role="dialog" aria-modal="true" aria-labelledby="opm-pop-h">
        <button ref={closeRef} className="opm-pop-close" onClick={dismiss} aria-label="Close">
          ×
        </button>
        <div className="opm-pop-portrait">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hayat-nyc.jpg" alt="Hayat Amin" loading="lazy" decoding="async" />
        </div>
        <span className="opm-pop-kicker">¶ Direct line</span>
        <h2 className="opm-pop-h" id="opm-pop-h">
          Got a problem <em>on your desk?</em>
        </h2>
        <p className="opm-pop-sub">
          Twenty minutes with the operator who has solved it before. No deck, no
          pitch, just a straight answer on what to do next.
        </p>
        <a
          className="opm-pop-cta"
          href={HAYAT.calendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={dismiss}
        >
          Book a call →
        </a>
        <p className="opm-pop-sig">Hayat Amin · Fractional CFO and AI Operator</p>
      </div>
    </div>
  );
}
