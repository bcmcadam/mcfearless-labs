"use client";

import { Magnetic } from "./Cursor";

export type HeroTitleVariant = "solid" | "editorial" | "outline";

const round2 = (n: number) => Math.round(n * 100) / 100;

function HeroGlobe() {
  const ticks = [];
  for (let i = 0; i < 60; i++) {
    const a = ((i * 6 - 90) * Math.PI) / 180;
    const major = i % 5 === 0;
    const r1 = 348;
    const r2 = major ? 332 : 340;
    const x1 = round2(400 + r1 * Math.cos(a));
    const y1 = round2(400 + r1 * Math.sin(a));
    const x2 = round2(400 + r2 * Math.cos(a));
    const y2 = round2(400 + r2 * Math.sin(a));
    ticks.push(
      <line
        key={i}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="#f4f5f7"
        strokeWidth={major ? 1.2 : 0.6}
        opacity={major ? 0.55 : 0.22}
      />
    );
  }

  const stamps: { x: number; y: number; t: string; anchor: "start" | "middle" | "end" }[] = [
    { x: 400, y: 40, t: "N · 00°00", anchor: "middle" },
    { x: 768, y: 405, t: "E · 90°", anchor: "end" },
    { x: 400, y: 776, t: "S · 180°", anchor: "middle" },
    { x: 32, y: 405, t: "W · 270°", anchor: "start" },
  ];

  return (
    <svg className="hero-globe" viewBox="0 0 800 800" aria-hidden="true">
      <defs>
        <radialGradient id="g-glow" cx="36%" cy="34%" r="70%">
          <stop offset="0%" stopColor="rgba(244,245,247,0.10)" />
          <stop offset="55%" stopColor="rgba(244,245,247,0.02)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="g-accent" cx="62%" cy="62%" r="58%">
          <stop offset="0%" stopColor="var(--accent-glow)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="g-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(244,245,247,0.16)" />
          <stop offset="70%" stopColor="rgba(244,245,247,0.02)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <linearGradient id="g-sweep" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(244,245,247,0)" />
          <stop offset="80%" stopColor="var(--accent-glow)" />
          <stop offset="100%" stopColor="rgba(244,245,247,0.55)" />
        </linearGradient>
        <mask id="g-disc">
          <circle cx="400" cy="400" r="278" fill="white" />
        </mask>
      </defs>

      <circle cx="400" cy="400" r="360" fill="url(#g-accent)" opacity="0.7" />

      <circle
        cx="400"
        cy="400"
        r="350"
        fill="none"
        stroke="#f4f5f7"
        strokeOpacity="0.16"
        strokeWidth="0.8"
      />
      <g>{ticks}</g>

      <circle
        cx="400"
        cy="400"
        r="318"
        fill="none"
        stroke="#f4f5f7"
        strokeOpacity="0.10"
        strokeWidth="0.6"
      />

      <circle
        cx="400"
        cy="400"
        r="278"
        fill="url(#g-glow)"
        stroke="#f4f5f7"
        strokeOpacity="0.42"
        strokeWidth="1.1"
      />

      <g mask="url(#g-disc)">
        <g className="hg-sweep" style={{ transformOrigin: "400px 400px" }}>
          <path
            d="M400 400 L400 122 A278 278 0 0 1 678 400 Z"
            fill="url(#g-sweep)"
            opacity="0.55"
          />
        </g>
      </g>

      <g stroke="#f4f5f7" strokeWidth="0.7" fill="none" opacity="0.32">
        <ellipse cx="400" cy="400" rx="278" ry="50" />
        <ellipse cx="400" cy="400" rx="262" ry="116" />
        <ellipse cx="400" cy="400" rx="232" ry="172" />
        <ellipse cx="400" cy="400" rx="190" ry="216" />
        <ellipse cx="400" cy="400" rx="130" ry="248" />
        <ellipse cx="400" cy="400" rx="68" ry="270" />
      </g>

      <g
        className="hg-meridians"
        stroke="#f4f5f7"
        strokeWidth="0.7"
        fill="none"
        opacity="0.32"
        style={{ transformOrigin: "400px 400px" }}
      >
        <ellipse cx="400" cy="400" rx="50" ry="278" />
        <ellipse cx="400" cy="400" rx="116" ry="278" />
        <ellipse cx="400" cy="400" rx="172" ry="278" />
        <ellipse cx="400" cy="400" rx="216" ry="278" />
        <ellipse cx="400" cy="400" rx="248" ry="278" />
        <ellipse cx="400" cy="400" rx="270" ry="278" />
        <line x1="400" y1="122" x2="400" y2="678" />
      </g>

      <line
        x1="122"
        y1="400"
        x2="678"
        y2="400"
        stroke="#f4f5f7"
        strokeOpacity="0.42"
        strokeWidth="0.9"
      />

      <circle cx="400" cy="400" r="80" fill="url(#g-core)" />
      <circle
        cx="400"
        cy="400"
        r="36"
        fill="none"
        stroke="var(--accent)"
        strokeOpacity="0.55"
        strokeWidth="0.8"
      />
      <circle cx="400" cy="400" r="3.2" fill="var(--accent)" />
      <g stroke="var(--accent)" strokeOpacity="0.5" strokeWidth="0.6">
        <line x1="400" y1="370" x2="400" y2="380" />
        <line x1="400" y1="420" x2="400" y2="430" />
        <line x1="370" y1="400" x2="380" y2="400" />
        <line x1="420" y1="400" x2="430" y2="400" />
      </g>

      <g
        className="hg-labels"
        fontFamily='"JetBrains Mono", monospace'
        fontSize="11"
        letterSpacing="2.4"
        fill="#f4f5f7"
        fillOpacity="0.5"
      >
        {stamps.map((s, i) => (
          <text key={i} x={s.x} y={s.y} textAnchor={s.anchor}>
            {s.t}
          </text>
        ))}
      </g>

      <g
        className="hg-readout"
        fontFamily='"JetBrains Mono", monospace'
        fontSize="9.5"
        letterSpacing="1.6"
        fill="#f4f5f7"
        fillOpacity="0.55"
      >
        <text x="710" y="146" textAnchor="end">
          McF · LABS / 26
        </text>
        <text x="710" y="160" textAnchor="end" fillOpacity="0.32">
          NODE: PRIMARY
        </text>
        <text x="710" y="174" textAnchor="end" fillOpacity="0.32">
          UP: 99.97%
        </text>
      </g>

      <g fill="var(--accent)">
        <circle cx="400" cy="50" r="2.5" />
        <circle cx="750" cy="400" r="2.5" />
        <circle cx="400" cy="750" r="2.5" />
        <circle cx="50" cy="400" r="2.5" />
      </g>
    </svg>
  );
}

export function Hero({ variant = "solid" }: { variant?: HeroTitleVariant }) {
  return (
    <section className={`hero hero-${variant}`} id="top">
      <HeroGlobe />
      <div className="hero-vignette" aria-hidden="true" />

      <div className="hero-inner">
        <div className="eyebrow" style={{ marginBottom: 32 }}>
          <span>McFearless Labs — independent web studio</span>
        </div>

        <h1 className={`hero-title title-${variant}`}>
          {variant === "editorial" ? (
            <>
              <span className="line">
                <span className="ed-1">Web&nbsp;</span>
                <span className="ed-it">development</span>
              </span>
              <span className="line">
                <span className="ed-2">that&nbsp;ships</span>
                <span className="ed-dot">.</span>
              </span>
            </>
          ) : variant === "outline" ? (
            <>
              <span className="line">
                <span className="ol-out">Web&nbsp;development</span>
              </span>
              <span className="line">
                <span className="ol-out">that&nbsp;</span>
                <span className="ol-fill">
                  ships<span className="ol-dot">.</span>
                </span>
              </span>
            </>
          ) : (
            <>
              <span className="line">Web&nbsp;development</span>
              <span className="line">
                that&nbsp;ships<span className="sld-dot">.</span>
              </span>
            </>
          )}
        </h1>

        <p className="hero-sub">
          You&apos;re getting your own full-stack developer who can build basically anything you
          can describe — real apps, AI tools, dashboards, the works. Just me,
          working closely with you, building fast.
        </p>


        <div className="hero-cta">
          <Magnetic as="a" href="#contact" strength={12}>
            <span className="btn btn-primary">
              <span className="btn-label">
                <span className="dot-live" />
                Book an intro call
              </span>
              <span className="btn-meta">30&nbsp;min</span>
              <span className="btn-arrow">
                <svg width="12" height="12" viewBox="0 0 10 10" fill="none">
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
          <a href="#work" className="btn btn-ghost">
            See selected work
            <span className="arrow">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path
                  d="M2 5h6M5.5 2l3 3-3 3"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <div className="stat-n">62</div>
            <div className="stat-l">projects shipped</div>
          </div>
          <div className="stat">
            <div className="stat-n">
              8<span className="stat-u">wk</span>
            </div>
            <div className="stat-l">median timeline</div>
          </div>
          <div className="stat">
            <div className="stat-n">
              98<span className="stat-u">/100</span>
            </div>
            <div className="stat-l">avg Lighthouse</div>
          </div>
        </div>
      </div>
    </section>
  );
}
