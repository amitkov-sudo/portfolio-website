import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactBody = {
  topic?: string;
  business?: string;
  budget?: string;
  name: string;
  email: string;
  message: string;
};

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

function isValidEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(req: Request) {
  let body: ContactBody;
  try {
    body = (await req.json()) as ContactBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const name = isNonEmptyString(body?.name) ? body.name.trim() : "";
  const email = isNonEmptyString(body?.email) ? body.email.trim() : "";
  const message = isNonEmptyString(body?.message) ? body.message.trim() : "";
  const topic = body?.topic === "research" ? "Research and partnerships" : "New project";
  const business = isNonEmptyString(body?.business) ? body.business.trim().slice(0, 200) : "";
  const budget = isNonEmptyString(body?.budget) ? body.budget.trim().slice(0, 50) : "";
  const extra = [business && `Business: ${business}`, budget && `Budget: ${budget}`]
    .filter(Boolean)
    .map((l) => `${l}\n`)
    .join("");

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  const resendKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  const from = process.env.CONTACT_FROM;

  if (!resendKey || !to || !from) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 },
    );
  }

  const resend = new Resend(resendKey);

  try {
    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `[${topic}] Portfolio message from ${name}`,
      text: `Topic: ${topic}\nName: ${name}\nEmail: ${email}\n${extra}\n${message}\n`,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}

