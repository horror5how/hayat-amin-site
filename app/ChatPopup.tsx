"use client";

import { useEffect, useRef, useState } from "react";
import { HAYAT } from "@/lib/content";

// Direct-line popup — same idea as the Beyond Elevation "Alexandra" prompt, but
// themed for meethayat and pointed at Hayat's own calendar. Shows once, after the
// visitor has either spent ~15s or scrolled ~45% of the page. Dismissal is
// remembered for 7 days so it never nags a returning reader.
const SEEN_KEY = "mh_directline_popup_v2";
const SNOOZE_DAYS = 3;

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
    const start = Date.now();
    const trigger = () => {
      if (done) return;
      done = true;
      setOpen(true);
      cleanup();
    };
    const onScroll = () => {
      // ponytail: gate scroll trigger behind the 13s mark so the popup is always delayed
      if (Date.now() - start < 13000) return;
      const sc = window.scrollY / (document.body.scrollHeight - window.innerHeight || 1);
      if (sc > 0.25) trigger();
    };
    const timer = window.setTimeout(trigger, 13000);
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
        <h2 className="opm-pop-h" id="opm-pop-h">
          Actively in the market for a new role.
        </h2>
        <p className="opm-pop-sub">Get on a call with him now.</p>
        <a
          className="opm-pop-cta"
          href={HAYAT.calendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={dismiss}
        >
          Get on a call →
        </a>
      </div>
    </div>
  );
}
