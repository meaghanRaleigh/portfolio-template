import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

// A basic in-memory store for IP tracking
const submissionTimestamps: { [ip: string]: number } = {};
const RATE_LIMIT_WINDOW_MS = 10 * 1000; // 10 seconds

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const now = Date.now();
  const { name, email, message, website } = await req.json();

  // Honeypot field (spam trap)
  if (website) {
    return NextResponse.json({ error: "Spam detected" }, { status: 400 });
  }

  // Basic rate limit check
  const lastSubmission = submissionTimestamps[ip];
  if (lastSubmission && now - lastSubmission < RATE_LIMIT_WINDOW_MS) {
    return NextResponse.json(
      { error: "Too many requests. Please try again shortly." },
      { status: 429 }
    );
  }

  submissionTimestamps[ip] = now;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.RECEIVER_EMAIL,
    subject: `New message from ${name}`,
    text: message,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Message sent" }, { status: 200 });
  } catch (err: unknown) {
    console.error("Email send error:", err);
    return NextResponse.json(
      { error: "Email failed to send" },
      { status: 500 }
    );
  }
}
