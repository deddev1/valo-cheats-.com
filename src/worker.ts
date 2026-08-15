/**
 * Cloudflare Worker — host + path canonicalization before static assets.
 * Canonical site: https://valocheats.com (matches brand.url)
 *
 * Requires DNS: CNAME `www` → `valocheats.com` (proxied) AND
 * Workers custom domain `www.valocheats.com` attached — otherwise
 * www is NXDOMAIN and Seobility fails the www/non-www check.
 */
import { finalizeCrawlAssetResponse, isCrawlAssetPath } from '../functions/crawl-assets.js';
import {
	APEX_HOST,
	CANONICAL_ORIGIN,
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
		const needsHostRedirect = host === WWW_HOST || LEGACY_HOSTS.has(host);
		const needsHttpsRedirect = isProductionHost && url.protocol === 'http:';

		if (needsHostRedirect || needsHttpsRedirect || pathRedirect) {
			const target = new URL((pathRedirect ?? url.pathname) + url.search, CANONICAL_ORIGIN);
			return Response.redirect(target.toString(), 301);
		}

		const response = await env.ASSETS.fetch(request);

		if (isCrawlAssetPath(url.pathname)) {
			return finalizeCrawlAssetResponse(url.pathname, response);
		}

		return response;
	},
};
