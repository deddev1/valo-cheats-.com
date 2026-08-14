import CANNIBAL_REDIRECTS from './cannibal-redirects.json';

const CANONICAL_ORIGIN = 'https://valocheats.com';
const APEX_HOST = 'valocheats.com';
const WWW_HOST = 'www.valocheats.com';

/** Legacy domains → canonical apex (301). None for this launch. */
const LEGACY_HOSTS = new Set([]);

// Keep in sync with public/_redirects (which preserves query strings by default, as we do below).
const PATH_REDIRECTS = {
	'/sitemap-0.xml': '/sitemap.xml',
	'/sitemap-index.xml': '/sitemap.xml',
	'/sitemap.xml/': '/sitemap.xml',
	'/sitemap-en.xml/': '/sitemap-en.xml',
	'/sitemap-i18n.xml/': '/sitemap-i18n.xml',
	'/sitemap-images.xml/': '/sitemap-images.xml',
	// Exact-match keyword → pillar (not homepage)
	'/escape-from-valorant-cheats': '/valorant-cheats/',
	'/escape-from-valorant-cheats/': '/valorant-cheats/',
	'/blog/escape-from-valorant-cheats-buyers-guide': '/blog/valorant-cheats-buyers-guide/',
	'/blog/escape-from-valorant-cheats-buyers-guide/': '/blog/valorant-cheats-buyers-guide/',
	'/faq/pmc-matches-and-deathmatchs': '/faq/unrated-and-competitive/',
	'/faq/pmc-matches-and-deathmatchs/': '/faq/unrated-and-competitive/',
	'/faq/pmc-raids-and-scav-runs': '/faq/unrated-and-competitive/',
	'/faq/pmc-raids-and-scav-runs/': '/faq/unrated-and-competitive/',
	'/reviews/valorant-radar-hack-review-vanlifeeft': '/reviews/valorant-radar-hack-review-vanlifeval/',
	'/reviews/valorant-radar-hack-review-vanlifeeft/': '/reviews/valorant-radar-hack-review-vanlifeval/',
	// Cannibalization → canonical landings (money URL = /valorant-cheats/)
	'/valorant-esp-hack': '/valorant-esp/',
	'/valorant-esp-hack/': '/valorant-esp/',
	'/valorant-aimbot-hack': '/valorant-aimbot/',
	'/valorant-aimbot-hack/': '/valorant-aimbot/',
	'/best-valorant-cheats': '/valorant-cheats/',
	'/best-valorant-cheats/': '/valorant-cheats/',
	'/valorant-cheats-2026': '/valorant-cheats/',
	'/valorant-cheats-2026/': '/valorant-cheats/',
	'/undetected-valorant-cheats': '/valorant-cheats/',
	'/undetected-valorant-cheats/': '/valorant-cheats/',
	'/valorant-mod-menu': '/valorant-cheats/',
	'/valorant-mod-menu/': '/valorant-cheats/',
	'/valorant-unlock-all': '/valorant-cheats/',
	'/valorant-unlock-all/': '/valorant-cheats/',
	'/valorant-soft-aim': '/valorant-aimbot/',
	'/valorant-soft-aim/': '/valorant-aimbot/',
	'/valorant-wallhack': '/valorant-esp/',
	'/valorant-wallhack/': '/valorant-esp/',
	'/valorant-cheat-download': '/setup/',
	'/valorant-cheat-download/': '/setup/',
	'/vanguard-bypass': '/updates/',
	'/vanguard-bypass/': '/updates/',
	'/warzone-cheats': '/valorant-cheats/',
	'/warzone-cheats/': '/valorant-cheats/',
	'/warzone-hacks': '/valorant-cheats/',
	'/warzone-hacks/': '/valorant-cheats/',
	'/warzone-esp': '/valorant-esp/',
	'/warzone-esp/': '/valorant-esp/',
	'/warzone-aimbot': '/valorant-aimbot/',
	'/warzone-aimbot/': '/valorant-aimbot/',
	'/ricochet-bypass': '/updates/',
	'/ricochet-bypass/': '/updates/',
	'/fortnite-aimbot': '/valorant-aimbot/',
	'/fortnite-aimbot/': '/valorant-aimbot/',
	'/fortnite-esp': '/valorant-esp/',
	'/fortnite-esp/': '/valorant-esp/',
	'/fortnite-hacks': '/valorant-cheats/',
	'/fortnite-hacks/': '/valorant-cheats/',
	'/eac-bypass': '/updates/',
	'/eac-bypass/': '/updates/',
	'/eac-bypass-fortnite': '/updates/',
	'/eac-bypass-fortnite/': '/updates/',
	'/blog/patch-notes-buffs-nerfs-vaults': '/blog/valorant-patch-notes-guide/',
	'/blog/patch-notes-buffs-nerfs-vaults/': '/blog/valorant-patch-notes-guide/',
	'/blog/chapter-7-season-3-skin-leaks-vbucks': '/blog/valorant-skin-leaks-guide/',
	'/blog/chapter-7-season-3-skin-leaks-vbucks/': '/blog/valorant-skin-leaks-guide/',
	'/blog/hammer-ar-s-tier-data-analysis': '/blog/valorant-weapon-tier-list/',
	'/blog/hammer-ar-s-tier-data-analysis/': '/blog/valorant-weapon-tier-list/',
	'/blog/zero-build-meta-broken-aggressive-strategies': '/blog/valorant-deathmatch-aggressive-strategies/',
	'/blog/zero-build-meta-broken-aggressive-strategies/': '/blog/valorant-deathmatch-aggressive-strategies/',
	'/blog/fncs-meta-watch-tournament-drops': '/blog/valorant-tournament-meta-guide/',
	'/blog/fncs-meta-watch-tournament-drops/': '/blog/valorant-tournament-meta-guide/',
	'/blog/secret-loot-routes-full-gold': '/blog/valorant-loot-routes-guide/',
	'/blog/secret-loot-routes-full-gold/': '/blog/valorant-loot-routes-guide/',
	'/blog/bugha-settings-pro-setup': '/blog/valorant-pro-settings-guide/',
	'/blog/bugha-settings-pro-setup/': '/blog/valorant-pro-settings-guide/',
	'/blog/creative-warmup-maps-pros-use': '/blog/valorant-warmup-maps-ranked/',
	'/blog/creative-warmup-maps-pros-use/': '/blog/valorant-warmup-maps-ranked/',
	'/reviews/valorant-esp-zero-build-review-buildsr4k': '/reviews/valorant-esp-deathmatch-review-buildsr4k/',
	'/reviews/valorant-esp-zero-build-review-buildsr4k/': '/reviews/valorant-esp-deathmatch-review-buildsr4k/',
	'/reviews/valorant-radar-hack-review-vanlifefn': '/reviews/valorant-radar-hack-review-vanlifeval/',
	'/reviews/valorant-radar-hack-review-vanlifefn/': '/reviews/valorant-radar-hack-review-vanlifeval/',
	'/reviews/valorant-radar-hack-review-vanlifewz': '/reviews/valorant-radar-hack-review-vanlifeval/',
	'/reviews/valorant-radar-hack-review-vanlifewz/': '/reviews/valorant-radar-hack-review-vanlifeval/',
	'/reviews/valorant-controller-soft-aim-review-ctrl-player99': '/reviews/valorant-soft-aim-review-ctrl-player99/',
	'/reviews/valorant-controller-soft-aim-review-ctrl-player99/': '/reviews/valorant-soft-aim-review-ctrl-player99/',
};

const SECURITY_HEADERS = {
	'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
	'X-Content-Type-Options': 'nosniff',
	'Referrer-Policy': 'strict-origin-when-cross-origin',
	'X-Frame-Options': 'DENY',
	'Cross-Origin-Opener-Policy': 'same-origin',
	'Cross-Origin-Resource-Policy': 'same-origin',
	'Cross-Origin-Embedder-Policy': 'credentialless',
	'Origin-Agent-Cluster': '?1',
	'Permissions-Policy':
		'accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()',
	'Content-Security-Policy': [
		"default-src 'self'",
		"base-uri 'self'",
		"object-src 'none'",
		"frame-ancestors 'none'",
		"form-action 'self' https://zadeyo.com",
		"img-src 'self' data: blob: https:",
		"font-src 'self' data:",
		"style-src 'self' 'unsafe-inline'",
		"script-src 'self'",
		"connect-src 'self'",
		"upgrade-insecure-requests",
		"trusted-types default",
		"require-trusted-types-for 'script'",
	].join('; '),
};

function getClientProtocol(request) {
	const visitor = request.headers.get('cf-visitor');
	if (visitor) {
		try {
			const scheme = JSON.parse(visitor).scheme;
			if (scheme) return String(scheme).toLowerCase();
		} catch {
			// ignore malformed cf-visitor
		}
	}

	const forwarded = request.headers.get('x-forwarded-proto');
	if (forwarded) {
		return forwarded.split(',')[0].trim().toLowerCase();
	}

	return new URL(request.url).protocol.replace(':', '').toLowerCase();
}

function applySecurityHeaders(headers, { html = false } = {}) {
	for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
		headers.set(key, value);
	}

	if (html) {
		const contentType = headers.get('Content-Type') || '';
		if (!/charset=/i.test(contentType)) {
			headers.set('Content-Type', 'text/html; charset=utf-8');
		}
		// Browser always revalidates; Cloudflare edge caches briefly for TTFB.
		headers.set('Cache-Control', 'public, max-age=0, must-revalidate');
		headers.set('CDN-Cache-Control', 'public, s-maxage=600, stale-while-revalidate=86400');
		headers.set('Cloudflare-CDN-Cache-Control', 'public, s-maxage=600, stale-while-revalidate=86400');
	}
}

/** Flat .xml sitemaps — redirect any other *.xml/ trailing-slash URL (locale sitemaps). */
function xmlTrailingSlashRedirect(pathname) {
	if (!pathname.endsWith('.xml/')) return null;
	return pathname.slice(0, -1);
}

/** Add trailing slash for directory-style paths (matches Astro trailingSlash: 'always'). */
function trailingSlashRedirect(pathname) {
	if (!pathname || pathname === '/' || pathname.includes('.') || pathname.endsWith('/')) {
		return null;
	}
	return `${pathname}/`;
}

/** Leftover Tarkov / doorway slugs still in GSC → final Valorant canonicals (no redirect chains). */
function legacyValorantPath(pathname) {
	if (
		!pathname.includes('tarkov') &&
		!pathname.includes('escape-from-valorant-cheats') &&
		!pathname.includes('battleye')
	) {
		return null;
	}
	let next = pathname
		.replaceAll('escape-from-valorant-cheats', 'valorant-cheats')
		.replaceAll('escape-from-tarkov-cheats', 'valorant-cheats')
		.replaceAll('/undetected-tarkov-cheats', '/valorant-cheats')
		.replaceAll('/best-tarkov-cheats', '/valorant-cheats')
		.replaceAll('/tarkov-cheats-2026', '/valorant-cheats')
		.replaceAll('/tarkov-cheat-download', '/setup')
		.replaceAll('/tarkov-aimbot-hack', '/valorant-aimbot')
		.replaceAll('/tarkov-esp-hack', '/valorant-esp')
		.replaceAll('/tarkov-radar-hack', '/valorant-radar-hack')
		.replaceAll('/tarkov-wallhack', '/valorant-esp')
		.replaceAll('/tarkov-soft-aim', '/valorant-aimbot')
		.replaceAll('/tarkov-mod-menu', '/valorant-cheats')
		.replaceAll('/tarkov-unlock-all', '/valorant-cheats')
		.replaceAll('/tarkov-aimbot', '/valorant-aimbot')
		.replaceAll('/tarkov-esp', '/valorant-esp')
		.replaceAll('/tarkov-cheats', '/valorant-cheats')
		.replaceAll('/battleye-bypass', '/updates')
		.replaceAll('tarkov', 'valorant');
	if (PATH_REDIRECTS[next]) next = PATH_REDIRECTS[next];
	else if (PATH_REDIRECTS[`${next}/`]) next = PATH_REDIRECTS[`${next}/`];
	else if (CANNIBAL_REDIRECTS[next]) next = CANNIBAL_REDIRECTS[next];
	else if (CANNIBAL_REDIRECTS[`${next}/`]) next = CANNIBAL_REDIRECTS[`${next}/`];
	if (next === pathname) return null;
	if (!next.endsWith('/') && !next.includes('.')) next += '/';
	return next;
}

export async function onRequest(context) {
	const url = new URL(context.request.url);
	const host = url.hostname.toLowerCase();
	const proto = getClientProtocol(context.request);

	const isLegacyHost = LEGACY_HOSTS.has(host);
	const isProductionHost = host === APEX_HOST || host === WWW_HOST || isLegacyHost;
	const needsHostRedirect = host === WWW_HOST || isLegacyHost;
	const needsHttpsRedirect = isProductionHost && proto === 'http';

	if (needsHostRedirect || needsHttpsRedirect) {
		const mappedPath = PATH_REDIRECTS[url.pathname] ?? url.pathname;
		const target = new URL(mappedPath + url.search, CANONICAL_ORIGIN);
		const headers = new Headers({
			Location: target.toString(),
			'Cache-Control': 'no-store',
			'CDN-Cache-Control': 'no-store',
			'Cloudflare-CDN-Cache-Control': 'no-store',
		});
		applySecurityHeaders(headers);
		return new Response(null, { status: 301, headers });
	}

	const pathRedirect =
		PATH_REDIRECTS[url.pathname] ??
		CANNIBAL_REDIRECTS[url.pathname] ??
		legacyValorantPath(url.pathname) ??
		xmlTrailingSlashRedirect(url.pathname) ??
		trailingSlashRedirect(url.pathname);
	if (pathRedirect) {
		const headers = new Headers({
			Location: new URL(pathRedirect + url.search, CANONICAL_ORIGIN).toString(),
			'Cache-Control': 'no-store',
		});
		applySecurityHeaders(headers);
		return new Response(null, { status: 301, headers });
	}

	const response = await context.next();
	const headers = new Headers(response.headers);
	const contentType = headers.get('Content-Type') || '';
	const isHtml = contentType.includes('text/html');

	applySecurityHeaders(headers, { html: isHtml });

	return new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers,
	});
}
