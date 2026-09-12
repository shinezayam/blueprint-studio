import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

/* Sent server-side through Resend (same provider as our other sites) so the
   API key never reaches the browser. Required env:
     RESEND_API_KEY
     RESEND_TO_EMAIL    — inbox that receives submissions
     RESEND_FROM_EMAIL  — verified sender; onboarding@resend.dev only
                          delivers to the Resend account's own address */
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  const { name, email, message } = (body ?? {}) as Record<string, unknown>;
  if (
    typeof name !== "string" || !name.trim() || name.length > 200 ||
    typeof email !== "string" || !EMAIL_RE.test(email) || email.length > 320 ||
    typeof message !== "string" || !message.trim() || message.length > 5000
  ) {
    return NextResponse.json({ error: "invalid_input" }, { status: 400 });
  }

  const to = process.env.RESEND_TO_EMAIL;
  if (!resend || !to) {
    console.error("Contact form: RESEND_API_KEY or RESEND_TO_EMAIL is not set");
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL || "Blueprint Studio <onboarding@resend.dev>",
    to: [to],
    replyTo: email,
    subject: `Blueprint Studio — message from ${name.trim()}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    html: `
      <div style="font-family:system-ui,sans-serif;max-width:600px;line-height:1.5">
        <h2 style="margin:0 0 16px">New contact form message</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}<br/>
           <strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
        <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
      </div>`,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "provider" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
