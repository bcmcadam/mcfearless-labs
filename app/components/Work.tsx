"use client";

import { CSSProperties, Fragment, PointerEvent, useRef } from "react";
import { WORK, WorkItem } from "../lib/data";
import { BootJuiceMascot } from "./BootJuiceMascot";

function WorkVisual({ id }: { id: WorkItem["id"] }) {
  switch (id) {
    case "kalshi":
      return (
        <div className="wv wv-kalshi">
          <aside className="kp-sidebar">
            <div className="kp-side-brand">
              <div className="kp-side-logo">K</div>
              <div className="kp-side-brand-text">
                <span className="kp-side-brand-name">KalshiPilot</span>
                <span className="kp-side-brand-sub">AUTO-TRADER</span>
              </div>
            </div>
            <nav className="kp-side-nav">
              <span className="kp-nav-item on">
                <span className="kp-nav-icon kp-i-grid" />
                Dashboard
              </span>
              <span className="kp-nav-item">
                <span className="kp-nav-icon kp-i-search" />
                Market Scanner
              </span>
              <span className="kp-nav-item">
                <span className="kp-nav-icon kp-i-star" />
                Strategy Analysis
              </span>
              <span className="kp-nav-item">
                <span className="kp-nav-icon kp-i-chat" />
                Approval Queue
                <span className="kp-nav-badge">1</span>
              </span>
              <span className="kp-nav-item">
                <span className="kp-nav-icon kp-i-pulse" />
                Agent Activity
              </span>
              <span className="kp-nav-item">
                <span className="kp-nav-icon kp-i-chart" />
                Portfolio &amp; History
              </span>
              <div className="kp-side-sect">SYSTEM</div>
              <span className="kp-nav-item">
                <span className="kp-nav-icon kp-i-gear" />
                Settings
              </span>
            </nav>
            <div className="kp-agent-card">
              <div className="kp-agent-l">AGENT</div>
              <div className="kp-agent-t">Awaiting Approval</div>
              <div className="kp-agent-d">Turn 14 · 12m 06s</div>
            </div>
          </aside>

          <div className="kp-main">
            <div className="kp-head">
              <div className="kp-head-l">
                <div className="kp-head-h">Dashboard</div>
                <div className="kp-head-sub">
                  Your automated trading session at a glance
                </div>
              </div>
              <div className="kp-head-r">
                <span className="kp-approval-btn">
                  <span className="kp-bell" />
                  Approval
                  <span className="kp-approval-badge">1</span>
                </span>
                <span className="kp-theme-toggle">
                  <span className="on">☀</span>
                  <span>☾</span>
                </span>
              </div>
            </div>

            <div className="kp-overview">
              <div className="kp-stats">
                <div className="kp-stat">
                  <div className="kp-stat-l">BALANCE</div>
                  <div className="kp-stat-v">$12,847.32</div>
                  <div className="kp-stat-d kp-stat-up">+$842.17 today</div>
                </div>
                <div className="kp-stat">
                  <div className="kp-stat-l">WIN RATE</div>
                  <div className="kp-stat-v">64.2%</div>
                  <div className="kp-stat-d">187 trades</div>
                </div>
                <div className="kp-stat">
                  <div className="kp-stat-l">TODAY&apos;S P&amp;L</div>
                  <div className="kp-stat-v kp-stat-up">+$284.50</div>
                  <div className="kp-stat-d kp-stat-up">+2.27%</div>
                </div>
                <div className="kp-stop">
                  <span className="kp-stop-btn">Stop session</span>
                  <div className="kp-stop-pills">
                    <span className="kp-pill-live">Live</span>
                    <span className="kp-pill-app">Approval</span>
                  </div>
                </div>
              </div>

              <div className="kp-chart">
                <svg
                  viewBox="0 0 400 100"
                  preserveAspectRatio="none"
                  width="100%"
                  height="100%"
                >
                  <defs>
                    <linearGradient
                      id="kp-chart-fill"
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="1"
                    >
                      <stop offset="0" stopColor="#30a14e" stopOpacity="0.18" />
                      <stop offset="1" stopColor="#30a14e" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 5 82 L 25 80 L 45 76 L 65 78 L 85 72 L 105 70 L 125 64 L 145 62 L 165 56 L 185 52 L 205 50 L 225 44 L 245 42 L 265 36 L 285 32 L 305 28 L 325 26 L 345 22 L 365 18 L 385 14 L 395 12 L 395 100 L 5 100 Z"
                    fill="url(#kp-chart-fill)"
                  />
                  <path
                    d="M 5 82 L 25 80 L 45 76 L 65 78 L 85 72 L 105 70 L 125 64 L 145 62 L 165 56 L 185 52 L 205 50 L 225 44 L 245 42 L 265 36 L 285 32 L 305 28 L 325 26 L 345 22 L 365 18 L 385 14 L 395 12"
                    fill="none"
                    stroke="#30a14e"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                  />
                  <circle cx="395" cy="12" r="3" fill="#30a14e" />
                </svg>
              </div>
            </div>

            <div className="kp-progs">
              <div className="kp-prog">
                <div className="kp-prog-head">
                  <span className="kp-prog-l">DAILY LOSS</span>
                  <span className="kp-prog-pct">24%</span>
                </div>
                <div className="kp-prog-v">
                  $120<small>/ $500</small>
                </div>
                <div className="kp-prog-bar">
                  <span className="kp-prog-fill red" style={{ width: "24%" }} />
                </div>
              </div>
              <div className="kp-prog">
                <div className="kp-prog-head">
                  <span className="kp-prog-l">TRADES TODAY</span>
                  <span className="kp-prog-pct">35%</span>
                </div>
                <div className="kp-prog-v">
                  14<small>/ 40</small>
                </div>
                <div className="kp-prog-bar">
                  <span
                    className="kp-prog-fill black"
                    style={{ width: "35%" }}
                  />
                </div>
              </div>
              <div className="kp-prog">
                <div className="kp-prog-head">
                  <span className="kp-prog-l">POSITION EXPOSURE</span>
                  <span className="kp-prog-pct">48%</span>
                </div>
                <div className="kp-prog-v">
                  $2,400<small>/ $5,000</small>
                </div>
                <div className="kp-prog-bar">
                  <span
                    className="kp-prog-fill orange"
                    style={{ width: "48%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    case "hgdc":
      return (
        <div className="wv wv-hgdc">
          <div className="hg-marquee">
            <div className="hg-marquee-track">
              {[0, 1].map((k) => (
                <Fragment key={k}>
                  <span>Counseling</span>
                  <span className="hg-bullet">●</span>
                  <span>Food Pantry</span>
                  <span className="hg-bullet">●</span>
                  <span>Job Training</span>
                  <span className="hg-bullet">●</span>
                  <span>Restoring Hope, Rebuilding Lives</span>
                  <span className="hg-bullet">●</span>
                  <span>Goldsboro, NC</span>
                  <span className="hg-bullet">●</span>
                  <span>Community Crisis Center</span>
                  <span className="hg-bullet">●</span>
                </Fragment>
              ))}
            </div>
          </div>
          <div className="hg-nav">
            <div className="hg-brand">
              <svg
                className="hg-mark"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <rect width="24" height="24" rx="5" fill="#1a1612" />
                <circle cx="9" cy="10" r="1.4" fill="#f0ebe0" />
                <circle cx="15" cy="10" r="1.4" fill="#f0ebe0" />
                <path
                  d="M7.5 14 Q12 18 16.5 14"
                  stroke="#f0ebe0"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
              <div className="hg-brand-text">
                <span className="hg-brand-name">
                  HGDC<i>.</i>
                </span>
                <span className="hg-brand-sub">Community Crisis Center</span>
              </div>
            </div>
            <div className="hg-nav-right">
              <span className="hg-cta-ghost">Get Help</span>
              <span className="hg-cta">Donate</span>
            </div>
          </div>
          <div className="hg-side">HGDC — COMMUNITY CRISIS CENTER — 2026</div>
          <div className="hg-hero">
            <div className="hg-eyebrow">
              Wayne County · Goldsboro, NC · Est. 1981
            </div>
            <h4 className="hg-head">
              Restoring
              <br />
              <span className="hg-it">Hope,</span>
              <br />
              Rebuilding
              <br />
              Lives<span className="hg-stop">.</span>
            </h4>
            <div className="hg-cta-row">
              <span className="hg-cta">Make a Donation</span>
              <span className="hg-cta-ghost">Our Services</span>
            </div>
          </div>
          <div className="hg-stats">
            <div className="hg-stat">
              <b>40</b>
              <span>Years of Service</span>
            </div>
            <div className="hg-stat">
              <b>500</b>
              <span>Meals Served Weekly</span>
            </div>
            <div className="hg-stat">
              <b>6</b>
              <span>Core Programs</span>
            </div>
            <div className="hg-stat">
              <b>1,981</b>
              <span>Est. Goldsboro, NC</span>
            </div>
          </div>
        </div>
      );
    case "bootjuice":
      return (
        <div className="wv wv-bj">
          <div className="bj-nav">
            <span className="bj-nav-l">
              <span className="bj-dots">
                <i /><i /><i /><i />
              </span>
              BOOT&nbsp;JUICE //&nbsp;EST.&nbsp;1996
            </span>
            <span className="bj-nav-r">30 YEARS KICKING • 1996 → 2026</span>
          </div>
          <div className="bj-marquee">
            <div className="bj-logo-block">
              <div className="bj-logo">
                <div className="bj-logo-row">
                  <span className="bj-letter bj-letter-B">
                    B
                    <svg className="bj-boot" viewBox="0 0 100 170" aria-hidden="true">
                      <path
                        d="M 30 6 Q 28 2 40 2 Q 64 2 64 18 L 64 96 Q 64 104 70 108 L 84 116 Q 92 122 92 130 L 92 140 Q 92 148 84 148 L 70 148 Q 62 148 60 140 Q 58 136 54 136 L 50 140 Q 48 148 40 148 L 22 148 Q 12 148 12 140 L 12 130 Q 12 124 16 122 L 22 120 L 22 18 Q 22 6 30 6 Z"
                        fill="#E52421"
                        stroke="#141414"
                        strokeWidth="4"
                        strokeLinejoin="round"
                      />
                      <path d="M 44 6 Q 54 -4 62 4" fill="none" stroke="#141414" strokeWidth="3" strokeLinecap="round" />
                      <path d="M 28 16 L 28 110" stroke="#FFF4E0" strokeWidth="3" strokeLinecap="round" opacity="0.55" />
                      <path d="M 14 118 Q 38 128 62 118" fill="none" stroke="#FFC72C" strokeWidth="1.5" strokeDasharray="2 2" />
                      <path d="M 70 128 Q 80 132 88 132" fill="none" stroke="#FFC72C" strokeWidth="1.5" strokeDasharray="2 2" />
                      <path d="M 18 148 L 22 148 L 26 166 L 16 166 Z" fill="#141414" stroke="#141414" strokeWidth="2" strokeLinejoin="round" />
                      <path d="M 26 148 L 88 148 L 86 152 L 28 152 Z" fill="#141414" stroke="#141414" strokeWidth="2" strokeLinejoin="round" />
                      <g stroke="#FFC72C" strokeWidth="3" strokeLinecap="round">
                        <line x1="12" y1="166" x2="-4" y2="166" />
                        <line x1="14" y1="162" x2="2" y2="152" />
                        <line x1="14" y1="170" x2="2" y2="178" />
                      </g>
                    </svg>
                  </span>
                  <span className="bj-letter">
                    o
                    <span className="bj-ocontent">
                      <svg viewBox="0 0 60 60" aria-hidden="true">
                        <g stroke="#141414" strokeWidth="2">
                          <circle cx="18" cy="30" r="5" fill="#6B2D8F" />
                          <circle cx="28" cy="26" r="5" fill="#6B2D8F" />
                          <circle cx="38" cy="30" r="5" fill="#6B2D8F" />
                          <circle cx="22" cy="38" r="5" fill="#6B2D8F" />
                          <circle cx="32" cy="40" r="5" fill="#6B2D8F" />
                          <path d="M28 20 Q30 14 36 16" fill="none" />
                          <path d="M30 16 Q36 12 42 18" fill="#2BB673" />
                        </g>
                      </svg>
                    </span>
                  </span>
                  <span className="bj-letter">
                    o
                    <span className="bj-ocontent">
                      <svg viewBox="0 0 60 60" aria-hidden="true">
                        <g stroke="#141414" strokeWidth="2">
                          <circle cx="30" cy="30" r="18" fill="#F47A1F" />
                          <g stroke="#FFF4E0" strokeWidth="1.5">
                            <line x1="30" y1="15" x2="30" y2="45" />
                            <line x1="15" y1="30" x2="45" y2="30" />
                            <line x1="20" y1="20" x2="40" y2="40" />
                            <line x1="40" y1="20" x2="20" y2="40" />
                          </g>
                        </g>
                      </svg>
                    </span>
                  </span>
                  <span className="bj-letter">
                    t
                    <svg className="bj-hat" viewBox="0 0 40 40" aria-hidden="true">
                      <path d="M6 6 L34 6 L30 30 Q30 34 26 34 L14 34 Q10 34 10 30 Z" fill="#fff" stroke="#141414" strokeWidth="3" />
                      <rect x="8" y="9" width="24" height="14" fill="#E52421" />
                      <line x1="20" y1="2" x2="20" y2="8" stroke="#141414" strokeWidth="3" />
                    </svg>
                  </span>
                </div>
                <div className="bj-juice-tag">juice</div>
                <div className="bj-tm">©&apos;96</div>
              </div>
              <div className="bj-logo-caption">
                Kicking you into the next millennium.
              </div>
            </div>

            <div className="bj-stage" aria-hidden="true">
              <div className="bj-sun">
                <svg className="bj-sun-rays" viewBox="-50 -50 200 200">
                  <g stroke="#141414" strokeWidth="5" strokeLinecap="round" fill="none">
                    <line x1="50" y1="-40" x2="50" y2="-20" />
                    <line x1="50" y1="120" x2="50" y2="140" />
                    <line x1="-40" y1="50" x2="-20" y2="50" />
                    <line x1="120" y1="50" x2="140" y2="50" />
                    <line x1="10" y1="10" x2="22" y2="22" />
                    <line x1="90" y1="10" x2="78" y2="22" />
                    <line x1="10" y1="90" x2="22" y2="78" />
                    <line x1="90" y1="90" x2="78" y2="78" />
                  </g>
                </svg>
              </div>
              <div className="bj-cloud" />
              <div className="bj-cloud bj-cloud-2" />
              <div className="bj-speed-lines" />
              <div className="bj-pow">POW!</div>
              <svg className="bj-splash" viewBox="0 0 100 100">
                <g stroke="#141414" strokeWidth="3" strokeLinejoin="round">
                  <polygon
                    fill="#E52421"
                    points="50,10 58,30 80,20 68,42 92,50 68,58 80,80 58,70 50,90 42,70 20,80 32,58 8,50 32,42 20,20 42,30"
                  />
                  <circle cx="20" cy="18" r="5" fill="#FFC72C" />
                  <circle cx="82" cy="80" r="4" fill="#E6197F" />
                  <circle cx="80" cy="18" r="4" fill="#2BB673" />
                </g>
              </svg>
              <svg className="bj-stage-bottle" viewBox="0 0 100 160">
                <rect x="28" y="6" width="44" height="22" fill="#2BB673" stroke="#141414" strokeWidth="3" />
                <rect x="42" y="0" width="16" height="12" fill="#fff" stroke="#141414" strokeWidth="3" rx="2" />
                <path
                  d="M18 30 Q16 42 20 54 L20 140 Q20 155 35 155 L65 155 Q80 155 80 140 L80 54 Q84 42 82 30 Z"
                  fill="#E52421"
                  stroke="#141414"
                  strokeWidth="3"
                />
                <rect x="22" y="68" width="56" height="44" fill="#FFF4E0" stroke="#141414" strokeWidth="3" />
                <text x="50" y="90" textAnchor="middle" fontFamily="Ultra, Georgia, serif" fontWeight="700" fontSize="14" fill="#141414">
                  BOOT
                </text>
                <text x="50" y="104" textAnchor="middle" fontFamily="Shrikhand, Georgia, serif" fontStyle="italic" fontSize="12" fill="#E52421">
                  juice
                </text>
                <circle cx="30" cy="128" r="4" fill="#FFC72C" stroke="#141414" strokeWidth="2" />
                <circle cx="64" cy="132" r="5" fill="#F47A1F" stroke="#141414" strokeWidth="2" />
                <circle cx="48" cy="44" r="3" fill="#FFC72C" stroke="#141414" strokeWidth="2" />
              </svg>
              <div className="bj-mascot-wrap">
                <BootJuiceMascot />
              </div>
              <div className="bj-ground" />
            </div>

            <div className="bj-corner">
              EST. <b>1996</b> &nbsp;/&nbsp; 30 YRS
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
}

function WorkCard({ item }: { item: WorkItem }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty(
      "--mx",
      `${((e.clientX - r.left) / r.width) * 100}%`
    );
    el.style.setProperty(
      "--my",
      `${((e.clientY - r.top) / r.height) * 100}%`
    );
  };

  return (
    <article className={`work-card span-${item.span}`}>
      <div
        ref={ref}
        className="work-link"
        style={{ ["--card-accent" as string]: item.accent } as CSSProperties}
        onPointerMove={onMove}
      >
        <div className="work-shine" aria-hidden="true" />
        <div className="work-thumb" aria-hidden="true">
          <WorkVisual id={item.id} />
        </div>
        <div className="work-meta">
          <div className="work-tag">
            <span className="mono">{item.kind}</span>
            <span className="mono dim">{item.year}</span>
          </div>
          <h3 className="work-title">{item.title}</h3>
          <p className="work-blurb">{item.blurb}</p>
        </div>
      </div>
    </article>
  );
}

export function Work() {
  return (
    <section className="section work" id="work">
      <header className="work-head">
        <div className="eyebrow">Selected work — 2025/26</div>
        <h2 className="h2">
          Things I&apos;ve <span className="it">actually</span> shipped.
        </h2>
        <p className="body-lg" style={{ marginTop: 18 }}>
          A range from a financial trading agent to a small-batch beverage companies&apos;
          anniversary site. Each one designed, built, and deployed end-to-end.
        </p>
      </header>

      <div className="bento">
        {WORK.map((w) => (
          <WorkCard key={w.id} item={w} />
        ))}
      </div>
    </section>
  );
}
