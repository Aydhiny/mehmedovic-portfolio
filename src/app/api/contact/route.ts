import { NextRequest, NextResponse } from "next/server";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const TO_EMAIL = "ajdin.mehmedovic@edu.fit.ba";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Escape HTML entities so user input can't inject markup into the email body.
// This is not about SQL injection — it prevents XSS inside the email client.
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message, _hp } = body;

    // Honeypot: bots fill hidden fields; real users don't.
    // If _hp is non-empty, silently drop the request.
    if (_hp) {
      return NextResponse.json({ success: true });
    }

    // Presence checks
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Type checks — ensure strings (don't trust JSON from the client)
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string"
    ) {
      return NextResponse.json({ error: "Invalid input." }, { status: 400 });
    }

    // Length limits to prevent giant payloads being emailed
    if (name.trim().length > 100) {
      return NextResponse.json(
        { error: "Name must be under 100 characters." },
        { status: 400 }
      );
    }
    if (email.trim().length > 254) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }
    if (message.trim().length > 2000) {
      return NextResponse.json(
        { error: "Message must be under 2000 characters." },
        { status: 400 }
      );
    }

    // Basic email format validation
    if (!EMAIL_RE.test(email.trim())) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const safeMessage = escapeHtml(message.trim()).replace(/\n/g, "<br>");

    if (!RESEND_API_KEY) {
      // Dev fallback: log to server console so the form works locally without config
      console.log(
        `[Contact Form] From: ${safeName} <${safeEmail}>\n${message.trim()}`
      );
      return NextResponse.json({ success: true });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: TO_EMAIL,
        reply_to: safeEmail,
        subject: `Portfolio message from ${safeName}`,
        html: `
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        `,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
