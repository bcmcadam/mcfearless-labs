import { Resend } from "resend";

export const runtime = "nodejs";

const TO_ADDRESS = process.env.CONTACT_TO ?? "byron@mcfearless.dev";
const FROM_ADDRESS =
  process.env.CONTACT_FROM ?? "McFearless Labs <onboarding@resend.dev>";

type ContactBody = {
  name?: string;
  email?: string;
  scope?: string;
  budget?: string;
  website?: string;
};

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY not set");
    return Response.json(
      { ok: false, error: "Email is not configured." },
      { status: 500 },
    );
  }

  let body: ContactBody;
  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return Response.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  // Honeypot — bots fill every field; silently accept and drop.
  if (body.website && body.website.length > 0) {
    return Response.json({ ok: true });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const scope = (body.scope ?? "").trim();
  const budget = (body.budget ?? "").trim();

  if (!name) {
    return Response.json(
      { ok: false, error: "Name is required." },
      { status: 400 },
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json(
      { ok: false, error: "A valid email is required." },
      { status: 400 },
    );
  }
  if (scope.length < 5) {
    return Response.json(
      { ok: false, error: "Tell me a bit more about the scope." },
      { status: 400 },
    );
  }

  const subject = `New brief from ${name}`;
  const text = [
    `Name:   ${name}`,
    `Email:  ${email}`,
    `Budget: ${budget || "(not specified)"}`,
    "",
    "Scope:",
    scope,
  ].join("\n");

  const resend = new Resend(apiKey);
  try {
    const { data, error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: TO_ADDRESS,
      replyTo: email,
      subject,
      text,
    });
    if (error) {
      console.error("[contact] resend error:", error);
      return Response.json(
        { ok: false, error: "Could not send right now. Try again shortly." },
        { status: 502 },
      );
    }
    return Response.json({ ok: true, id: data?.id });
  } catch (err) {
    console.error("[contact] unexpected error:", err);
    return Response.json(
      { ok: false, error: "Could not send right now. Try again shortly." },
      { status: 500 },
    );
  }
}
