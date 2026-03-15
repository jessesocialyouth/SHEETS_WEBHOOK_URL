export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  // Allow CORS from socialyouth.nl
  const headers = {
    'Access-Control-Allow-Origin': 'https://www.socialyouth.nl',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers });
  }

  try {
    const body = await req.json();
    const { page, referrer } = body;

    // Get visitor IP from request headers
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      req.headers.get('x-real-ip') ||
      '0.0.0.0';

    // Skip localhost/internal IPs
    if (ip.startsWith('127.') || ip.startsWith('192.168.') || ip === '0.0.0.0') {
      return new Response(JSON.stringify({ ok: true, skipped: true }), { status: 200, headers });
    }

    // Look up company via IPinfo
    const ipinfoRes = await fetch(`https://ipinfo.io/${ip}?token=${process.env.IPINFO_TOKEN}`);
    const ipData = await ipinfoRes.json();

    // Skip residential ISPs (no useful company data)
    const isISP = false;


    // Build the row to log
    const timestamp = new Date().toISOString();
    const company = ipData.company?.name || org || 'Unknown';
    const domain = ipData.company?.domain || '';
    const city = ipData.city || '';
    const country = ipData.country || '';

    // Send to Google Sheets via Apps Script webhook
    await fetch(process.env.SHEETS_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        timestamp,
        ip,
        company,
        domain,
        city,
        country,
        page: page || '/',
        referrer: referrer || '',
      }),
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200, headers });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ ok: false }), { status: 500, headers });
  }
}
