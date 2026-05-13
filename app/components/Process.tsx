import { PROCESS } from "../lib/data";

export function Process() {
  return (
    <section className="section process" id="process">
      <header className="proc-head">
        <div className="eyebrow">How it works</div>
        <h2 className="h2">
          Four steps. <span className="it">No theatre.</span>
        </h2>
      </header>

      <ol className="proc-list">
        {PROCESS.map((p) => (
          <li key={p.n} className="proc-row">
            <div className="proc-n mono">{p.n}</div>
            <div className="proc-t">{p.t}</div>
            <div className="proc-d">{p.d}</div>
            <div className="proc-rule" />
          </li>
        ))}
      </ol>
    </section>
  );
}
