import { createHash } from 'crypto';
export function validateContact(body: unknown) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) return null;
  const data = body as Record<string, unknown>;
  const limits: Record<string, number> = { name: 100, email: 254, subject: 150, message: 2000 };
  const result: Record<string, string> = {};
  for (const [key, max] of Object.entries(limits)) {
    const value = data[key];
    if (typeof value !== 'string' || !value.trim() || value.length > max) return null;
    if (key !== 'message' && /[\r\n\x00]/.test(value)) return null;
    result[key] = value.trim();
  }
  if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/.test(result.email)) return null;
  if (data.website !== undefined && (typeof data.website !== 'string' || data.website !== '')) return null;
  return result;
}
export function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));
}
const local = new Map<string, { count: number; until: number }>();
export async function allowContact(ip: string) {
  const key = `goldwen:contact:${createHash('sha256').update(ip).digest('hex')}:${Math.floor(Date.now() / 600000)}`;
  const url = process.env.CONTACT_REDIS_REST_URL;
  const token = process.env.CONTACT_REDIS_REST_TOKEN;
  if (url && token) {
    const response = await fetch(`${url.replace(/\/$/, '')}/pipeline`, {
      method: 'POST', headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify([['INCR', key], ['EXPIRE', key, 660]]), signal: AbortSignal.timeout(3000),
    });
    if (!response.ok) throw new Error('Rate limiter unavailable');
    const data = await response.json();
    if (!Array.isArray(data) || !Number.isInteger(data[0]?.result) || data.some(item => item.error)) throw new Error('Rate limiter unavailable');
    return data[0].result <= 3;
  }
  if (process.env.NODE_ENV === 'production') throw new Error('Rate limiter not configured');
  local.forEach((value, k) => { if (value.until < Date.now()) local.delete(k); });
  const value = local.get(key) || { count: 0, until: Date.now() + 660000 };
  value.count++; local.set(key, value);
  return value.count <= 3;
}
