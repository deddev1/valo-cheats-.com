/**
 * SINGLE SOURCE OF TRUTH for template rebrands.
 * Employees: use Brand Studio at http://localhost:8080/brand-studio/ during `astro dev`.
 * Do not scatter brand strings across components.
 */
export const brand = {
	/** Public brand name (nav, footer, H1 hero, schema Organization) */
	name: 'Valorant Cheats',
	/** Short product label if needed */
	shortName: 'Valorant',
	/** Canonical origin — no trailing slash */
	url: 'https://valocheats.com',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@valocheats.com',
	checkoutUrl: 'https://zadeyo.com/go/QRH?to=%2Fproducts%2Fvalorant',

	/** Game this template instance targets */
	game: 'Valorant',
	/** Anti-cheat name used in Status / FAQ copy */
	antiCheat: 'Vanguard',

	logo: '/images/valorant-cheats-logo.png',
	logoRaster: '/images/valorant-cheats-logo.png',
	logoRasterWidth: 512,
	logoRasterHeight: 512,
	logoAlt: 'Valorant Cheats logo',
	defaultOgImage: '/images/valorant-cheats-hero-home.png',
	heroImage: '/images/valorant-cheats-hero-home.png',

	plans: [
		{ id: 'monthly', label: 'Monthly', price: 35, duration: 'P30D' },
		{ id: 'lifetime', label: 'Lifetime', price: 150, duration: 'P99Y' },
	] as const,
	currency: 'USD',
	platforms: ['Windows PC'] as const,

	/**
	 * Site color tones — accent + canvas + soft/deep/hover/panel.
	 * Edit in Brand Studio → Colors (tones are fully customizable).
	 */
	theme: {
		accent: '#ff4655',
		bg: '#07080d',
		soft: '#edeaf2',
		deep: '#7c3aed',
		hover: '#ff7180',
		panel: '#11121b',
	},

	/**
	 * Keyword system — primary drives titles; list feeds schema / light targeting.
	 * Keep 5–8 terms.
	 */
	keywords: {
		primary: 'valorant cheats',
		list: [
			'valorant cheats',
			'valorant hacks',
			'valorant esp',
			'valorant aimbot',
			'valorant wallhack',
			'valorant radar hack',
			'undetected valorant cheats',
			'best valorant cheats',
		] as const,
	},

	/**
	 * Editable SEO meta — tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 * Aim ~50–60 chars titles, ~140–160 chars descriptions.
	 */
	seo: {
		homeTitle: 'Valorant Cheats | Official Windows PC Site',
		homeDescription: 'Official Valorant Cheats site for Windows PC. Compare features, store plans, and live status — then buy ESP, soft aim, and radar in one license.',
		featuresTitle: '{game} Features | {brand}',
		featuresDescription: 'Everything in one {game} license for Windows PC — ESP, soft aim, radar, spike tools, and patch updates after {antiCheat}. See what is included.',
		storeTitle: '{game} Store | {brand}',
		storeDescription: 'Monthly and lifetime {game} plans for Windows PC. Same ESP, aimbot, and radar features on both. Instant delivery after you pay at checkout.',
		statusTitle: '{game} Status | {brand}',
		statusDescription: 'Live undetected status for {brand} after {game} or {antiCheat} patches. Check here before you queue on Windows PC so you play on a current build.',
		previewTitle: 'Valorant Cheats | Undetected ESP & Aimbot',
		previewDescription: 'Buy undetected valorant cheats for Valorant on Windows PC. ESP, soft aim, radar, and Vanguard patch updates in one license with instant delivery.',
		setupTitle: '{game} Setup | {brand}',
		setupDescription: 'Install and launch {brand} on Windows PC after checkout. Short setup steps so you can queue faster. Follow each step in order before your first match.',
		supportTitle: '{game} Support | {brand}',
		supportDescription: 'Get help with {brand} on Windows PC. Email {email} with your order ID for setup, delivery, or billing help after you buy.',
		faqTitle: '{game} FAQ | {brand}',
		faqDescription: 'Short answers about {brand} for Valorant — delivery, setup, {antiCheat} updates, refunds, and Windows PC system notes before you buy a license.',
		reviewsTitle: '{brand} Reviews | Buyer Feedback',
		reviewsDescription: 'Buyer reviews for {brand} — ESP, soft aim, radar, and patch updates for Valorant on Windows PC. Real feedback from license holders who play.',
		blogTitle: '{game} Intel | {brand}',
		blogDescription: 'Guides and notes for {game} — ranked tips, ESP, aimbot, map control, and {antiCheat} update coverage for Windows PC players who queue to play.',
	},

	/** On-page marketing copy (tokens allowed) */
	copy: {
		tagline: 'Undetected {primaryKeyword} — ESP, aimbot, and radar for PC',
		summary: '{brand} is an undetected {game} cheat package for Windows PC. Includes ESP, soft aim, and radar, with {antiCheat} maintenance after patches.',
		heroLede: 'Undetected ESP, soft aim, and radar for Valorant on Windows PC.',
		blogLabel: 'Valorant Intel',
		ctaBuy: 'Get Access',
		ctaBuyShort: 'Buy',
		featuresIntro: 'Everything included in one license for {game} on Windows PC.',
		storeIntro: 'Pick a plan. Same features on both. Instant delivery after payment.',
		statusIntro: 'Check here after a {game} or {antiCheat} patch before you queue.',
		previewIntro: '{brand} for Valorant — ESP wallhack, soft aim, 2D radar, and Vanguard rebuilds after patches.',
		setupIntro: 'Install {brand} on Windows PC after you buy. Follow these short steps.',
		supportIntro: 'Need help with {brand}? Email {email} with your order ID.',
		faqIntro: 'Short answers about delivery, setup, updates, and refunds.',
		reviewsIntro: 'Feedback from {brand} buyers — ESP, soft aim, radar, and support.',
		chipEsp: 'ESP / wallhack',
		chipAim: 'Soft aim',
		chipRadar: '2D radar',
		chipUpdates: 'Patch updates',
		navPreview: 'Cheats',
		navFeatures: 'Features',
		navStore: 'Store',
		navStatus: 'Status',
		navReviews: 'Reviews',
	},

	/**
	 * Sitemap labels — XML is generated at build/dev from routes + these strings.
	 * Domain comes from `url` (also written to robots.txt via sync:brand).
	 * Tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 */
	sitemap: {
		/** YYYY-MM-DD — Brand Studio can bump this on save to refresh crawl dates */
		contentLastmod: '2026-08-14',
		blogImageTitle: '{brand} blog',
		blogImageCaption: 'Tips and updates for {primaryKeyword}',
		reviewsImageTitle: '{brand} reviews',
		reviewsImageCaption: 'What buyers say about {primaryKeyword}',
		images: [
			{
				src: '/images/valorant-cheats-esp.png',
				title: 'ESP overlay in Valorant',
				caption: 'Player ESP boxes and distance readouts during a match',
			},
			{
				src: '/images/valorant-cheats-wallhack.png',
				title: 'Wallhack visibility for Valorant matches',
				caption: 'Agent and enemy outlines through walls and terrain',
			},
			{
				src: '/images/valorant-cheats-aimbot.png',
				title: 'Soft aim assist for Valorant',
				caption: 'Configurable soft aim FOV and bone priority',
			},
			{
				src: '/images/valorant-cheats-aimbot-view.png',
				title: 'Aimbot view in Valorant Cheats',
				caption: 'In-menu aimbot controls for Windows PC',
			},
			{
				src: '/images/valorant-cheats-radar.png',
				title: '2D radar threat overlay',
				caption: 'Radar cues for flanks near sites',
			},
			{
				src: '/images/valorant-cheats-match.png',
				title: 'Valorant Cheats license plans',
				caption: 'Monthly and lifetime plans for Windows PC',
			},
		],
	},
} as const;

export type Brand = typeof brand;

/** Replace {brand} {game} {antiCheat} {email} {primaryKeyword} {checkout} */
export function fillBrandTokens(input: string): string {
	return input
		.replaceAll('{brand}', brand.name)
		.replaceAll('{game}', brand.game)
		.replaceAll('{antiCheat}', brand.antiCheat)
		.replaceAll('{email}', brand.supportEmail)
		.replaceAll('{primaryKeyword}', brand.keywords.primary)
		.replaceAll('{checkout}', brand.checkoutUrl);
}

/** Locked title formula fallback: `{Game} {Topic} | {Brand}` */
export function seoTitle(topic: string): string {
	const title = `${brand.game} ${topic} | ${brand.name}`;
	return title.length <= 60 ? title : `${topic} | ${brand.name}`;
}

/** Keep descriptions short; tokens allowed. */
export function seoDescription(template: string): string {
	const text = fillBrandTokens(template).trim();
	return text.length <= 160 ? text : `${text.slice(0, 157).trim()}…`;
}

/** Resolved EN home meta from brand.seo (title clamp lives in site-core.seoPageTitle). */
export function homeSeo() {
	return {
		title: fillBrandTokens(brand.seo.homeTitle),
		description: seoDescription(brand.seo.homeDescription),
	};
}
