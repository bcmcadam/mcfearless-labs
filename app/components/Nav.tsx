"use client";

import { useEffect, useState } from "react";
import { Magnetic } from "./Cursor";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <a href="#top" className="brand">
        <span className="brand-mark" />
        <span className="brand-name">
          McFearless<em>/Labs</em>
        </span>
      </a>
      <div className="nav-links">
        <a href="#work">Work</a>
        <a href="#process">Process</a>
        <a href="#stack">Stack</a>
        <a href="#contact">Contact</a>
      </div>
      <Magnetic as="a" href="#contact" strength={10}>
        <span className="nav-cta">
          <span className="nav-cta-label">
            <span className="dot-live" /> Book a call
          </span>
          <span className="nav-cta-arrow">
            <svg width="11" height="11" viewBox="0 0 10 10" fill="none">
              <path
                d="M2 8L8 2M8 2H3.5M8 2V6.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </span>
      </Magnetic>
    </nav>
  );
}
