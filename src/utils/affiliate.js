export const AMAZON_TAG = 'kettleapppro2-21';

const AMAZON_HOST_RE = /(^|\.)amazon\.[a-z.]+$/i;

export function withAffiliate(url) {
  if (!url) return url;
  try {
    const u = new URL(url);
    if (!AMAZON_HOST_RE.test(u.hostname)) return url;
    u.searchParams.set('tag', AMAZON_TAG);
    return u.toString();
  } catch {
    return url;
  }
}
