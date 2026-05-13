"use client";

import { FormEvent, useState } from "react";

type Stage = "idle" | "sending" | "sent";

const BUDGETS = ["< $1k", "$1–10k", "$40–90k", "$90k+", "retainer"] as const;

export function Contact() {
  const [stage, setStage] = useState<Stage>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    scope: "",
    budget: "",
  });

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStage("sending");
    setTimeout(() => setStage("sent"), 900);
  };

  const valid =
    form.name.trim() &&
    /.+@.+\..+/.test(form.email) &&
    form.scope.trim().length > 4;

  return (
    <section className="section contact" id="contact">
      <div className="contact-grid">
        <div className="contact-left">
          <div className="eyebrow">Let&apos;s build</div>
          <h2 className="h2">
            Tell me what <span className="it">you&apos;re&nbsp;making.</span>
          </h2>
          <p className="body-lg" style={{ marginTop: 20 }}>
            A few lines is enough for me to get an idea. I reply within a business day. If we&apos;re
            a fit, we hop on a 30-minute call.
          </p>

          <div className="contact-channels">
            <a className="channel" href="mailto:hello@mcfearless.dev">
              <span className="mono dim">email</span>
              <span className="channel-v">hello@mcfearless.dev</span>
            </a>
            <a className="channel" href="#">
              <span className="mono dim">cal.com</span>
              <span className="channel-v">cal.com/mcfearless</span>
            </a>
            <a className="channel" href="#">
              <span className="mono dim">signal</span>
              <span className="channel-v">+1 415 555 0142</span>
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={submit}>
          {stage !== "sent" && (
            <>
              <label className="field">
                <span className="field-l mono">your name</span>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Ada Lovelace"
                />
              </label>
              <label className="field">
                <span className="field-l mono">email</span>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="ada@startup.dev"
                />
              </label>
              <label className="field">
                <span className="field-l mono">scope · a few lines is enough</span>
                <textarea
                  rows={4}
                  value={form.scope}
                  onChange={(e) => setForm({ ...form, scope: e.target.value })}
                  placeholder="We're a 4-person team building a billing console. Need to ship a v1 in 8 weeks."
                />
              </label>
              <label className="field">
                <span className="field-l mono">budget range (optional)</span>
                <div className="seg">
                  {BUDGETS.map((b) => (
                    <button
                      type="button"
                      key={b}
                      className={`seg-b ${form.budget === b ? "on" : ""}`}
                      onClick={() =>
                        setForm({
                          ...form,
                          budget: form.budget === b ? "" : b,
                        })
                      }
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </label>

              <div className="contact-submit">
                <button
                  type="submit"
                  disabled={!valid || stage === "sending"}
                  className="btn btn-primary"
                >
                  <span className="btn-label">
                    {stage === "sending" ? "Sending…" : "Send brief"}
                  </span>
                  <span className="btn-meta">
                    {stage === "sending" ? "wait" : "reply ≤ 1d"}
                  </span>
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
                </button>
                <span className="mono dim">
                  PGP available · NDAs gladly signed
                </span>
              </div>
            </>
          )}
          {stage === "sent" && (
            <div className="sent">
              <div className="sent-check">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
                  <path
                    d="M5 12.5l4.5 4.5L19 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="sent-h">Got it.</h3>
              <p className="sent-b">
                I&apos;ll reply from{" "}
                <span className="mono">hello@mcfearless.dev</span> within a
                business day. Check spam if it&apos;s quiet.
              </p>
              <button
                className="btn btn-ghost"
                type="button"
                onClick={() => {
                  setForm({ name: "", email: "", scope: "", budget: "" });
                  setStage("idle");
                }}
              >
                Send another
              </button>
            </div>
          )}
        </form>
      </div>

      <footer className="foot">
        <div className="foot-l">
          <span className="brand-mark" />
          <div className="foot-brand">
            <span className="foot-brand-name">
              McFearless<em>/Labs</em>
            </span>
            <span className="foot-brand-tag mono">
              Independent web studio · est. 2021
            </span>
          </div>
        </div>
        <div className="foot-r mono dim">
          <span>© 2026 · Built by hand · last deploy 2 days ago</span>
        </div>
      </footer>
    </section>
  );
}
