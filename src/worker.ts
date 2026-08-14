/**
 * Cloudflare Worker — host + path canonicalization before static assets.
 * Canonical site: https://valocheats.com (matches brand.url)
 *
 * Requires DNS: CNAME `www` → `valocheats.com` (proxied) AND
 * Workers custom domain `www.valocheats.com` attached — otherwise
 * www is NXDOMAIN and Seobility fails the www/non-www check.
 */
import {
	APEX_HOST,
	WWW_HOST,
	resolveCanonicalPath,
} from '../functions/path-redirects.js';

export interface Env {
	ASSETS: Fetcher;
}

/** Old apex still 301 → current canonical. */
const LEGACY_HOSTS = new Set<string>();

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const url = new URL(request.url);
		const host = (request.headers.get('host') || url.hostname).split(':')[0].toLowerCase();
		const isProductionHost = host === APEX_HOST || host === WWW_HOST || LEGACY_HOSTS.has(host);
		const pathRedirect = resolveCanonicalPath(url.pathname);

		let changed = false;
		const target = new URL(request.url);

		if (host === WWW_HOST || LEGACY_HOSTS.has(host)) {
			target.hostname = APEX_HOST;
			target.port = '';
			changed = true;
		}

		if (isProductionHost && target.protocol === 'http:') {
			target.protocol = 'https:';
			changed = true;
		}

		if (pathRedirect) {
			target.pathname = pathRedirect;
			changed = true;
		}

		if (changed) {
			return Response.redirect(target.toString(), 301);
		}

		return env.ASSETS.fetch(request);
	},
};
