const MAX_BYTES = 16_384;

// Keep URLs, query strings, script samples and cookies out of public reports.
function origin(value: unknown) {
  if (typeof value !== 'string') return undefined;
  try {
    return new URL(value).origin;
  } catch {
    return ['inline', 'eval', 'data', 'blob'].includes(value) ? value : undefined;
  }
}

export async function POST(request: Request) {
  if (!request.headers.get('content-type')?.includes('application/csp-report')) {
    return new Response(null, { status: 415 });
  }
  const reader = request.body?.getReader();
  if (!reader) return new Response(null, { status: 400 });
  const chunks: Uint8Array[] = [];
  let size = 0;
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > MAX_BYTES) {
      await reader.cancel();
      return new Response(null, { status: 413 });
    }
    chunks.push(value);
  }
  try {
    const report = JSON.parse(Buffer.concat(chunks).toString('utf8'))['csp-report'];
    if (!report || typeof report !== 'object') return new Response(null, { status: 400 });
    const directive = report['effective-directive'];
    console.info('csp-violation', JSON.stringify({
      directive: typeof directive === 'string' && /^[a-z-]{1,40}$/.test(directive) ? directive : undefined,
      blockedOrigin: origin(report['blocked-uri']),
      documentOrigin: origin(report['document-uri']),
    }));
    return new Response(null, { status: 204, headers: { 'Cache-Control': 'no-store' } });
  } catch {
    return new Response(null, { status: 400 });
  }
}
