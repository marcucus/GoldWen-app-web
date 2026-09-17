const { test } = require('node:test');
const assert = require('node:assert/strict');
const { validateContact, escapeHtml, allowContact } = require('../.test-build/lib/contact-security.js');
const { localizedUrl } = require('../.test-build/lib/site.js');
const valid = { name: 'Adrien', email: 'a@example.com', subject: 'Question', message: 'Bonjour', website: '' };
test('validates unexpected JSON shapes, field lengths and header injection', () => {
  for (const body of [null, [], 'hello', {}, { ...valid, email: 4 }, { ...valid, name: 'a\r\nBcc: x@example.com' }, { ...valid, message: 'a'.repeat(2001) }, { ...valid, website: 'spam' }, { ...valid, email: 'a@b.com\n' }]) assert.equal(validateContact(body), null);
  assert.equal(validateContact(valid).email, 'a@example.com');
});
test('escapes all HTML delimiters while preserving text', () => {
  assert.equal(escapeHtml(`<img src="x" onerror='bad'>&`), '&lt;img src=&quot;x&quot; onerror=&#39;bad&#39;&gt;&amp;');
});
test('limits repeated contact requests', async () => {
  process.env.NODE_ENV = 'test';
  const ip = `test-${Date.now()}`;
  assert.deepEqual(await Promise.all([allowContact(ip), allowContact(ip), allowContact(ip), allowContact(ip)]), [true, true, true, false]);
});
test('production limiter fails closed without shared storage', async () => {
  process.env.NODE_ENV = 'production';
  await assert.rejects(allowContact('production-test'));
  process.env.NODE_ENV = 'test';
});
test('locale URLs exclude default prefix, query strings and fragments', () => {
  assert.equal(localizedUrl('fr', '/fr/contact?test=1#form'), 'https://goldwen.app/contact');
  assert.equal(localizedUrl('es', '/contact?test=1'), 'https://goldwen.app/es/contact');
  assert.equal(localizedUrl('fr', '/'), 'https://goldwen.app');
});
test('contact handler rejects methods, origin and malformed input before SMTP', async () => {
  const handler = require('../.test-build/pages/api/contact.js').default;
  const call = async (method, origin, body) => {
    const res = { headers: {}, setHeader(k, v) { this.headers[k] = v; }, status(code) { this.code = code; return this; }, json(body) { this.body = body; return this; } };
    await handler({ method, headers: { origin, 'content-type': 'application/json', host: 'localhost:3100' }, body, socket: { remoteAddress: 'handler-test' } }, res);
    return res;
  };
  assert.equal((await call('GET', 'https://goldwen.app', valid)).code, 405);
  assert.equal((await call('POST', 'https://evil.example', valid)).code, 403);
  assert.equal((await call('POST', 'https://goldwen.app', { ...valid, email: {} })).code, 400);
  assert.equal((await call('POST', 'https://goldwen.app', valid)).code, 503);
});
test('mail keeps a fixed recipient and escapes user content', async () => {
  const nodemailer = require('nodemailer');
  const original = nodemailer.createTransport;
  let sent;
  nodemailer.createTransport = () => ({ sendMail: async value => { sent = value; }, close() {} });
  Object.assign(process.env, { NODE_ENV: 'test', EMAIL_HOST: 'smtp.example.com', EMAIL_USER: 'test', EMAIL_PASSWORD: 'test', CONTACT_EMAIL_TO: 'fixed@example.com' });
  try {
    const handler = require('../.test-build/pages/api/contact.js').default;
    const res = { setHeader() {}, status(code) { this.code = code; return this; }, json(body) { this.body = body; return this; } };
    await handler({ method: 'POST', headers: { origin: 'https://goldwen.app', 'content-type': 'application/json' }, body: { ...valid, name: '<b>Name</b>', message: '<script>bad</script>' }, socket: { remoteAddress: 'mail-test' } }, res);
    assert.equal(res.code, 200);
    assert.equal(sent.to, 'fixed@example.com');
    assert.deepEqual(sent.replyTo, { name: '<b>Name</b>', address: 'a@example.com' });
    assert.equal(sent.html.includes('<script>'), false);
    assert.equal(sent.html.includes('&lt;script&gt;'), true);
  } finally {
    nodemailer.createTransport = original;
    for (const key of ['EMAIL_HOST', 'EMAIL_USER', 'EMAIL_PASSWORD', 'CONTACT_EMAIL_TO']) delete process.env[key];
  }
});
