import CANNIBAL_REDIRECTS from './cannibal-redirects.json' with { type: 'json' };

export const CANONICAL_ORIGIN = 'https://valocheats.com';
export const APEX_HOST = 'valocheats.com';
export const WWW_HOST = 'www.valocheats.com';

/** Locale money-page slugs (PageId `hacks`) — EN slug under /{lang}/ is a leftover. */
const LOCALE_HACKS = {
	es: 'hacks-trucos-valorant',
	fr: 'hacks-triche-valorant',
	de: 'valorant-cheats',
	pt: 'hacks-cheats-valorant',
	it: 'hacks-trucchi-valorant',
	nl: 'valorant-cheats',
	pl: 'hacks-cheatow-valorant',
	ru: 'haksy-chity-valorant',
	tr: 'valorant-hile-hacks',
	ar: 'valorant-cheats',
	ja: 'valorant-cheats',
	ko: 'valorant-cheats',
	zh: 'valorant-cheats',
	hi: 'valorant-cheats',
	id: 'valorant-cheats',
	th: 'valorant-cheats',
	vi: 'valorant-cheats',
	uk: 'haksy-chity-valorant',
	cs: 'valorant-cheats',
	ro: 'hacks-cheats-valorant',
	sv: 'valorant-cheats',
};

// Keep in sync with public/_redirects (query strings are preserved by the caller).
export const PATH_REDIRECTS = {
	'/sitemap-0.xml': '/sitemap.xml',
	'/sitemap-index.xml': '/sitemap.xml',
	'/sitemap.xml/': '/sitemap.xml',
	'/sitemap-en.xml/': '/sitemap-en.xml',
	'/sitemap-i18n.xml/': '/sitemap-i18n.xml',
	'/sitemap-images.xml/': '/sitemap-images.xml',
	'/escape-from-valorant-cheats': '/valorant-cheats/',
	'/escape-from-valorant-cheats/': '/valorant-cheats/',
	'/escape-from-tarkov-cheats': '/valorant-cheats/',
	'/escape-from-tarkov-cheats/': '/valorant-cheats/',
	'/blog/escape-from-valorant-cheats-buyers-guide': '/blog/valorant-cheats-buyers-guide/',
	'/blog/escape-from-valorant-cheats-buyers-guide/': '/blog/valorant-cheats-buyers-guide/',
	'/faq/pmc-matches-and-deathmatchs': '/faq/unrated-and-competitive/',
	'/faq/pmc-matches-and-deathmatchs/': '/faq/unrated-and-competitive/',
	'/faq/pmc-raids-and-scav-runs': '/faq/unrated-and-competitive/',
	'/faq/pmc-raids-and-scav-runs/': '/faq/unrated-and-competitive/',
	'/reviews/valorant-radar-hack-review-vanlifeeft': '/reviews/valorant-radar-hack-review-vanlifeval/',
	'/reviews/valorant-radar-hack-review-vanlifeeft/': '/reviews/valorant-radar-hack-review-vanlifeval/',
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

function lookupMap(pathname, map) {
	return map[pathname] ?? map[`${pathname}/`] ?? null;
}

function withTrailingSlash(pathname) {
	if (!pathname.endsWith('/') && !pathname.includes('.')) return `${pathname}/`;
	return pathname;
}

function mapLocaleEnglishHacksSlug(pathname) {
	const m = pathname.match(/^\/([a-z]{2})\/valorant-cheats\/?$/);
	if (!m) return pathname;
	const slug = LOCALE_HACKS[m[1]];
	if (!slug || slug === 'valorant-cheats') return withTrailingSlash(pathname);
	return `/${m[1]}/${slug}/`;
}

/** Leftover Tarkov / doorway slugs still in GSC → Valorant canonicals. */
export function rewriteLegacyValorantPath(pathname) {
	if (
		!pathname.includes('tarkov') &&
		!pathname.includes('escape-from-valorant-cheats') &&
		!pathname.includes('battleye')
	) {
		return pathname;
	}
	return pathname
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
}

function xmlTrailingSlashRedirect(pathname) {
	if (!pathname.endsWith('.xml/')) return null;
	return pathname.slice(0, -1);
}

function trailingSlashRedirect(pathname) {
	if (!pathname || pathname === '/' || pathname.includes('.') || pathname.endsWith('/')) {
		return null;
	}
	return `${pathname}/`;
}

/**
 * Final path for 301 Location (pathname only).
 * Returns null when the request is already on the canonical path.
 */
export function resolveCanonicalPath(pathname) {
	let next = rewriteLegacyValorantPath(pathname);
	next = mapLocaleEnglishHacksSlug(next);
	next =
		lookupMap(next, PATH_REDIRECTS) ??
		lookupMap(next, CANNIBAL_REDIRECTS) ??
		xmlTrailingSlashRedirect(next) ??
		trailingSlashRedirect(next) ??
		next;
	if (next !== pathname && !next.endsWith('/') && !next.includes('.')) next += '/';
	return next === pathname ? null : next;
}
