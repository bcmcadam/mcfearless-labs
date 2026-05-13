"use client";

import { Magnetic } from "./Cursor";

export type HeroTitleVariant = "solid" | "editorial" | "outline";

export function Hero({ variant = "solid" }: { variant?: HeroTitleVariant }) {
  return (
    <section className={`hero hero-${variant}`} id="top">
      <div className="hero-orb" aria-hidden="true" />
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
          A solo full-stack developer for companies who need a polished product,
          fast. Design, code, deploy.
        </p>

        <p className="hero-sub">
        One person. Zero
          hand-offs.
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
