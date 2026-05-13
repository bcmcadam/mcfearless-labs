import { STACK } from "../lib/data";

export function Stack() {
  return (
    <section className="section stack" id="stack">
      <div className="stack-grid">
        <div className="stack-left">
          <div className="eyebrow">The toolkit</div>
          <h2 className="h2">
            Boring tech, <span className="it">sharp edges.</span>
          </h2>
          <p className="body-lg" style={{ marginTop: 18 }}>
            I pick tools that are easy enough for the next person to maintain — even if
            that next person isn&apos;t me. I get the most out of them.
          </p>
        </div>

        <div className="stack-right">
          {STACK.map((g) => (
            <div key={g.g} className="stack-group">
              <div className="stack-g mono">{g.g}</div>
              <div className="stack-items">
                {g.items.map((it) => (
                  <span key={it} className="chip">
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="quote-card">
        <p className="quote-body">
          &ldquo;Mac rebuilt our entire site in two weeks and gave us invaluable advice on SEO and how to capitalize. &rdquo;
        </p>
        <div className="quote-foot">
          <div className="quote-av" />
          <div>
            <div className="quote-name">Judice</div>
            <div className="quote-role mono">Board Memeber, HGDC Community Crisis Center</div>
          </div>
        </div>
      </div>
    </section>
  );
}
