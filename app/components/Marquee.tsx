import { CSSProperties } from "react";
import { SERVICES } from "../lib/data";

export function Marquee({ speed = 40 }: { speed?: number }) {
  const seq = [...SERVICES, ...SERVICES, ...SERVICES];
  return (
    <section className="marquee-wrap" aria-label="services">
      <div
        className="marquee"
        style={{ ["--dur" as string]: `${speed}s` } as CSSProperties}
      >
        <div className="marquee-track">
          {seq.map((s, i) => (
            <span key={i} className="marquee-item">
              <span className="marquee-star" aria-hidden="true">
                ✦
              </span>
              <span>{s}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
