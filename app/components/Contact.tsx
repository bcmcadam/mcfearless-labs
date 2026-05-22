"use client";

import { FormEvent, useState } from "react";

type Stage = "idle" | "sending" | "sent" | "error";

const BUDGETS = ["< $1k", "$1–10k", "$40–90k", "$90k+", "retainer"] as const;

export function Contact() {
  const [stage, setStage] = useState<Stage>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    scope: "",
    budget: "",
    website: "", // honeypot — should always stay empty
  });

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStage("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };
      if (res.ok && data.ok) {
        setStage("sent");
      } else {
        setStage("error");
        setErrorMsg(data.error ?? "Could not send right now.");
      }
    } catch {
      setStage("error");
      setErrorMsg("Network error. Try again or email me directly.");
    }
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
            <a className="channel" href="mailto:byron@mcfearless.dev">
              <span className="mono dim">email</span>
              <span className="channel-v">byron@mcfearless.dev</span>
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
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                value={form.website}
                onChange={(e) =>
                  setForm({ ...form, website: e.target.value })
                }
                style={{
                  position: "absolute",
                  left: "-9999px",
                  width: 1,
                  height: 1,
                  opacity: 0,
                }}
              />
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
              {stage === "error" && (
                <p
                  role="alert"
                  className="mono"
                  style={{ color: "#ff6b6b", marginTop: 8, fontSize: 12 }}
                >
                  {errorMsg} You can also email{" "}
                  <a href="mailto:byron@mcfearless.dev">byron@mcfearless.dev</a>
                  .
                </p>
              )}
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
                <span className="mono">byron@mcfearless.dev</span> within a
                business day. Check spam if it&apos;s quiet.
              </p>
              <button
                className="btn btn-ghost"
                type="button"
                onClick={() => {
                  setForm({
                    name: "",
                    email: "",
                    scope: "",
                    budget: "",
                    website: "",
                  });
                  setStage("idle");
                  setErrorMsg("");
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
          <span>© 2026 · last deploy 2 days ago</span>
        </div>
      </footer>
    </section>
  );
}
