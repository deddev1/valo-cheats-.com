import { siteConfig } from './site';

/** Screenshots used across product pages — simple valorant cheats keyword alts. */
export const valorantImages = {
	hero: '/images/valorant-cheats-hero-home.png',
	espWallhack: '/images/valorant-cheats-wallhack.webp',
	aimbotCombat: '/images/valorant-cheats-aimbot.webp',
	aimbotSkeleton: '/images/valorant-cheats-aimbot-view.webp',
	playerEsp: '/images/valorant-cheats-radar.webp',
	cheatsCombat: '/images/valorant-cheats-match.webp',
	logo: siteConfig.logo,
	/** @deprecated Blog / legacy aliases — each maps to one of the six assets above */
	cover: '/images/valorant-cheats-match.webp',
	loadoutBuilder: '/images/valorant-cheats-radar.webp',
	squadFight: '/images/valorant-cheats-aimbot-view.webp',
	cheatsPackage: '/images/valorant-cheats-radar.webp',
	headerArt: '/images/valorant-cheats-aimbot-view.webp',
	battleRoyaleCombat: '/images/valorant-cheats-match.webp',
	siteFight: '/images/valorant-cheats-aimbot.webp',
	rebootFight: '/images/valorant-cheats-aimbot.webp',
	deathmatchCombat: '/images/valorant-cheats-wallhack.webp',
	deathmatchMode: '/images/valorant-cheats-esp.webp',
	battleRoyaleIsland: '/images/valorant-cheats-esp.webp',
	matchMap: '/images/valorant-cheats-esp.webp',
	product: [
		{ src: '/images/valorant-cheats-esp.webp', alt: 'ESP player boxes in a Valorant match' },
		{ src: '/images/valorant-cheats-wallhack.webp', alt: 'Wallhack outlines for agents and enemies' },
		{ src: '/images/valorant-cheats-aimbot.webp', alt: 'Soft aim assist overlay for Valorant' },
		{ src: '/images/valorant-cheats-esp.webp', alt: 'Orb and spike ESP markers' },
		{ src: '/images/valorant-cheats-wallhack.webp', alt: 'Through-wall visibility during a match' },
		{ src: '/images/valorant-cheats-aimbot.webp', alt: 'Aimbot bone priority settings' },
	],
	gallery: [
		{ src: '/images/valorant-cheats-esp.webp', alt: 'ESP overlay showing enemy distance', featured: true },
		{ src: '/images/valorant-cheats-wallhack.webp', alt: 'Wallhack view through terrain' },
		{ src: '/images/valorant-cheats-aimbot.webp', alt: 'Soft aim FOV ring in combat' },
		{ src: '/images/valorant-cheats-esp.webp', alt: 'Orb and spike ESP pins' },
		{ src: '/images/valorant-cheats-wallhack.webp', alt: 'Enemy and ally wallhack filters' },
	],
	/**
	 * @deprecated Prefer brand.sitemap.images via brand-sitemap / page-sitemap.
	 * Kept as path aliases for older imports; titles come from Brand Studio.
	 */
	sitemap: [
		{ src: '/images/valorant-cheats-esp.webp', title: '', caption: '' },
		{ src: '/images/valorant-cheats-wallhack.webp', title: '', caption: '' },
		{ src: '/images/valorant-cheats-aimbot.webp', title: '', caption: '' },
		{ src: '/images/valorant-cheats-aimbot-view.webp', title: '', caption: '' },
		{ src: '/images/valorant-cheats-radar.webp', title: '', caption: '' },
		{ src: '/images/valorant-cheats-match.webp', title: '', caption: '' },
	],
} as const;
