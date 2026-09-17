import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { allowContact, escapeHtml, validateContact } from '../../lib/contact-security';
import { siteUrl } from '../../lib/site';
export const config = { api: { bodyParser: { sizeLimit: '8kb' } } };
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return res.status(405).json({ error: 'Method not allowed' }); }
  if (!req.headers['content-type']?.startsWith('application/json')) return res.status(415).json({ error: 'JSON required' });
  if (req.headers.origin !== new URL(siteUrl).origin && !(process.env.NODE_ENV !== 'production' && req.headers.origin === `http://${req.headers.host}`)) return res.status(403).json({ error: 'Invalid origin' });
  const data = validateContact(req.body);
  if (!data) return res.status(400).json({ error: 'Invalid contact fields' });
  try {
    // Vercel overwrites this header. Other hosts use the socket address; never trust arbitrary forwarding headers.
    const ip = process.env.VERCEL === '1' ? String(req.headers['x-vercel-forwarded-for'] || 'unknown').split(',')[0] : req.socket.remoteAddress || 'unknown';
    if (!await allowContact(ip)) { res.setHeader('Retry-After', '600'); return res.status(429).json({ error: 'Too many requests' }); }
  } catch { return res.status(503).json({ error: 'Contact temporarily unavailable' }); }
  const { name, email, subject, message } = data;
  const { EMAIL_HOST: host, EMAIL_USER: user, EMAIL_PASSWORD: pass } = process.env;
  if (!host || !user || !pass) return res.status(503).json({ error: 'Contact temporarily unavailable' });
  const port = Number(process.env.EMAIL_PORT || 587);
  const transporter = nodemailer.createTransport({ host, port, secure: port === 465, requireTLS: port !== 465, auth: { user, pass }, connectionTimeout: 5000, socketTimeout: 10000 });
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || 'noreply@goldwen.app', to: process.env.CONTACT_EMAIL_TO || 'goldwen.supp.app@gmail.com',
      replyTo: { name, address: email }, subject: `[Contact GoldWen] ${subject}`,
      text: `Nom: ${name}\nEmail: ${email}\nSujet: ${subject}\n\n${message}`,
      html: `<h2>Contact GoldWen</h2><p>${escapeHtml(name)} (${escapeHtml(email)})</p><h3>${escapeHtml(subject)}</h3><p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
    });
    return res.status(200).json({ success: true });
  } catch { return res.status(503).json({ error: 'Contact temporarily unavailable' }); }
  finally { transporter.close(); }
}
