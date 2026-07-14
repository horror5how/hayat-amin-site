#!/usr/bin/env node
// reindex-url.mjs — force a Google Indexing API recrawl for ONE url.
// Self-contained: raw service-account JWT -> OAuth token -> urlNotifications:publish.
// No googleapis dep. Key resolved from GCP_KEY_PATH env or the BE indexing key.
//
// Usage: node scripts/reindex-url.mjs "https://www.meethayat.com/press"
import fs from 'node:fs';
import crypto from 'node:crypto';

const URL_TO_PUSH = process.argv[2] || 'https://www.meethayat.com/press';
const KEY_PATH = process.env.GCP_KEY_PATH
  || `${process.env.HOME}/repos/beyond-elevation/.gcp-indexing-key.json`;

const b64url = (b) => Buffer.from(b).toString('base64')
  .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

async function accessToken(key) {
  const now = Math.floor(Date.now() / 1000);
  const claim = {
    iss: key.client_email,
    scope: 'https://www.googleapis.com/auth/indexing',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now, exp: now + 3600,
  };
  const head = { alg: 'RS256', typ: 'JWT' };
  const signingInput = `${b64url(JSON.stringify(head))}.${b64url(JSON.stringify(claim))}`;
  const sig = crypto.createSign('RSA-SHA256').update(signingInput).sign(key.private_key);
  const jwt = `${signingInput}.${b64url(sig)}`;
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  });
  const j = await res.json();
  if (!j.access_token) throw new Error('token failed: ' + JSON.stringify(j));
  return j.access_token;
}

async function main() {
  const key = JSON.parse(fs.readFileSync(KEY_PATH, 'utf8'));
  const token = await accessToken(key);
  const res = await fetch('https://indexing.googleapis.com/v3/urlNotifications:publish', {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ url: URL_TO_PUSH, type: 'URL_UPDATED' }),
  });
  const body = await res.text();
  console.log(`HTTP ${res.status} for ${URL_TO_PUSH}`);
  console.log(body);
  if (res.status !== 200) process.exit(1);
}

main().catch((e) => { console.error('FATAL:', e.message); process.exit(1); });
