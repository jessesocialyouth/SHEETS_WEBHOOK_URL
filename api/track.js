export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
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

    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      req.headers.get('x-real-ip') ||
      '0.0.0.0';

    if (ip.startsWith('127.') || ip.startsWith('192.168.') || ip === '0.0.0.0') {
      return new Response(JSON.stringify({ ok: true, skipped: true }), { status: 200, headers });
    }

    const ipinfoRes = await fetch(`https://ipinfo.io/${ip}?token=${process.env.IPINFO_TOKEN}`);
    const ipData = await ipinfoRes.json();

    const org = ipData.org || '';
    const isISP = /KPN|Ziggo|T-Mobile|Vodafone|Telenet|Proximus|residential|ISP/i.test(org);
    if (isISP || !ipData.company) {
      return new Response(JSON.stringify({ ok: true, skipped: 'residential' }), { status: 200, headers });
    }

    const timestamp = new Date().toISOString();
    const company = ipData.company?.name || org || 'Unknown';
    const domain = ipData.company?.domain || '';
    const city = ipData.city || '';
    const country = ipData.country || '';

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