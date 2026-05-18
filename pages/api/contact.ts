// Requires: npm install nodemailer @types/nodemailer
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

interface ContactBody {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body as ContactBody;

  // Validation
  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }
  if (message.length > 2000) {
    return res.status(400).json({ error: 'Message too long (max 2000 chars)' });
  }

  const recipient = process.env.CONTACT_EMAIL_TO ?? 'support@goldwen.app';
  const smtpHost = process.env.EMAIL_HOST;
  const smtpPort = parseInt(process.env.EMAIL_PORT ?? '587', 10);
  const smtpUser = process.env.EMAIL_USER;
  const smtpPass = process.env.EMAIL_PASSWORD;
  const emailFrom = process.env.EMAIL_FROM ?? 'noreply@goldwen.app';

  if (!smtpHost || !smtpUser || !smtpPass) {
    console.error('[contact] SMTP not configured');
    return res.status(500).json({ error: 'Email service not configured' });
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: { user: smtpUser, pass: smtpPass },
  });

  try {
    await transporter.sendMail({
      from: `"GoldWen Contact" <${emailFrom}>`,
      to: recipient,
      replyTo: `"${name}" <${email}>`,
      subject: `[Contact GoldWen] ${subject}`,
      text: `Nom: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
          <h2 style="color:#D4AF37">Nouveau message de contact</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px;font-weight:bold">Nom</td><td style="padding:8px">${name}</td></tr>
            <tr><td style="padding:8px;font-weight:bold">Email</td><td style="padding:8px"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px;font-weight:bold">Sujet</td><td style="padding:8px">${subject}</td></tr>
          </table>
          <hr style="border-color:#D4AF37;margin:16px 0"/>
          <p style="white-space:pre-wrap">${message}</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('[contact] Failed to send email:', err);
    return res.status(500).json({ error: 'Failed to send message' });
  }
}
