import { siteConfig } from './site';

/** Screenshots used across product pages — simple valorant cheats keyword alts. */
export const valorantImages = {
	hero: '/images/valorant-cheats-hero-home.png',
	espWallhack: '/images/valorant-cheats-wallhack.png',
	aimbotCombat: '/images/valorant-cheats-aimbot.png',
	aimbotSkeleton: '/images/valorant-cheats-aimbot-view.png',
	playerEsp: '/images/valorant-cheats-radar.png',
	cheatsCombat: '/images/valorant-cheats-match.png',
	logo: siteConfig.logo,
	/** @deprecated Blog / legacy aliases — each maps to one of the six assets above */
	cover: '/images/valorant-cheats-match.png',
	loadoutBuilder: '/images/valorant-cheats-radar.png',
	squadFight: '/images/valorant-cheats-aimbot-view.png',
	cheatsPackage: '/images/valorant-cheats-radar.png',
	headerArt: '/images/valorant-cheats-aimbot-view.png',
	battleRoyaleCombat: '/images/valorant-cheats-match.png',
	siteFight: '/images/valorant-cheats-aimbot.png',
	rebootFight: '/images/valorant-cheats-aimbot.png',
	deathmatchCombat: '/images/valorant-cheats-wallhack.png',
	deathmatchMode: '/images/valorant-cheats-esp.png',
	battleRoyaleIsland: '/images/valorant-cheats-esp.png',
	matchMap: '/images/valorant-cheats-esp.png',
	product: [
		{ src: '/images/valorant-cheats-esp.png', alt: 'ESP player boxes in a Valorant match' },
		{ src: '/images/valorant-cheats-wallhack.png', alt: 'Wallhack outlines for agents and enemies' },
		{ src: '/images/valorant-cheats-aimbot.png', alt: 'Soft aim assist overlay for Valorant' },
		{ src: '/images/valorant-cheats-esp.png', alt: 'Orb and spike ESP markers' },
		{ src: '/images/valorant-cheats-wallhack.png', alt: 'Through-wall visibility during a match' },
		{ src: '/images/valorant-cheats-aimbot.png', alt: 'Aimbot bone priority settings' },
	],
	gallery: [
		{ src: '/images/valorant-cheats-esp.png', alt: 'ESP overlay showing enemy distance', featured: true },
		{ src: '/images/valorant-cheats-wallhack.png', alt: 'Wallhack view through terrain' },
		{ src: '/images/valorant-cheats-aimbot.png', alt: 'Soft aim FOV ring in combat' },
		{ src: '/images/valorant-cheats-esp.png', alt: 'Orb and spike ESP pins' },
		{ src: '/images/valorant-cheats-wallhack.png', alt: 'Enemy and ally wallhack filters' },
	],
	/**
	 * @deprecated Prefer brand.sitemap.images via brand-sitemap / page-sitemap.
	 * Kept as path aliases for older imports; titles come from Brand Studio.
	 */
	sitemap: [
		{ src: '/images/valorant-cheats-esp.png', title: '', caption: '' },
		{ src: '/images/valorant-cheats-wallhack.png', title: '', caption: '' },
		{ src: '/images/valorant-cheats-aimbot.png', title: '', caption: '' },
		{ src: '/images/valorant-cheats-aimbot-view.png', title: '', caption: '' },
		{ src: '/images/valorant-cheats-radar.png', title: '', caption: '' },
		{ src: '/images/valorant-cheats-match.png', title: '', caption: '' },
	],
} as const;
