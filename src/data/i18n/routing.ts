import { siteConfig } from '../site';
import {
	defaultLocale,
	isLocaleCode,
	localeCodes,
	localeMap,
	type LocaleCode,
	locales,
} from './locales';
import { getCannibalTargetId, isCannibalPageId } from '../seo-cannibal-map';

/** Canonical page identifiers shared across all locales. */
export type PageId =
	| 'home'
	| 'valorant-esp'
	| 'valorant-aimbot'
	| 'features'
	| 'pricing'
	| 'setup'
	| 'updates'
	| 'faq'
	| 'support'
	| 'undetected'
	| 'wallhack'
	| 'radar'
	| 'vanguard'
	| 'cheats-2026'
	| 'hacks'
	| 'cheat-download'
	| 'mod-menu'
	| 'soft-aim'
	| 'best-cheats'
	| 'aimbot-hack'
	| 'esp-hack'
	| 'unlock-all'
	| 'privacy'
	| 'refund'
	| 'terms';

/** English (official) paths — served at site root without /en/ prefix. */
export const englishPaths: Record<PageId, string> = {
	home: '/',
	'valorant-esp': '/valorant-esp/',
	'valorant-aimbot': '/valorant-aimbot/',
	features: '/features/',
	pricing: '/pricing/',
	setup: '/setup/',
	updates: '/updates/',
	faq: '/faq/',
	support: '/support/',
	undetected: '/undetected-valorant-cheats/',
	wallhack: '/valorant-wallhack/',
	radar: '/valorant-radar-hack/',
	'vanguard': '/vanguard-bypass/',
	'cheats-2026': '/valorant-cheats-2026/',
	hacks: '/valorant-cheats/',
	'cheat-download': '/valorant-cheat-download/',
	'mod-menu': '/valorant-mod-menu/',
	'soft-aim': '/valorant-soft-aim/',
	'best-cheats': '/best-valorant-cheats/',
	'aimbot-hack': '/valorant-aimbot-hack/',
	'esp-hack': '/valorant-esp-hack/',
	'unlock-all': '/valorant-unlock-all/',
	privacy: '/privacy-policy/',
	refund: '/refund-policy/',
	terms: '/terms/',
};

/**
 * Localized URL slugs (path after /{lang}/).
 * English uses englishPaths at root; other locales use these slugs under /{lang}/.
 */
export const localizedSlugs: Record<PageId, Record<LocaleCode, string>> = {
	home: {
		en: '',
		es: '',
		fr: '',
		de: '',
		pt: '',
		it: '',
		nl: '',
		pl: '',
		ru: '',
		tr: '',
		ar: '',
		ja: '',
		ko: '',
		zh: '',
		hi: '',
		id: '',
		th: '',
		vi: '',
		uk: '',
		cs: '',
		ro: '',
		sv: '',
	},
	'valorant-esp': {
		en: 'valorant-esp',
		es: 'trucos-valorant-esp',
		fr: 'triche-valorant-esp',
		de: 'valorant-esp-wallhack',
		pt: 'cheats-valorant-esp',
		it: 'trucchi-valorant-esp',
		nl: 'valorant-esp-wallhack',
		pl: 'cheaty-valorant-esp',
		ru: 'valorant-esp-chity',
		tr: 'valorant-esp-hile',
		ar: 'valorant-esp-wallhack',
		ja: 'valorant-esp-wallhack',
		ko: 'valorant-esp-wallhack',
		zh: 'valorant-esp-wallhack',
		hi: 'valorant-esp-wallhack',
		id: 'valorant-esp-wallhack',
		th: 'valorant-esp-wallhack',
		vi: 'valorant-esp-wallhack',
		uk: 'valorant-esp-chity',
		cs: 'valorant-esp-wallhack',
		ro: 'valorant-esp-wallhack',
		sv: 'valorant-esp-wallhack',
	},
	'valorant-aimbot': {
		en: 'valorant-aimbot',
		es: 'trucos-valorant-aimbot',
		fr: 'triche-valorant-aimbot',
		de: 'valorant-aimbot',
		pt: 'cheats-valorant-aimbot',
		it: 'trucchi-valorant-aimbot',
		nl: 'valorant-aimbot',
		pl: 'cheaty-valorant-aimbot',
		ru: 'valorant-aimbot-chity',
		tr: 'valorant-aimbot-hile',
		ar: 'valorant-aimbot',
		ja: 'valorant-aimbot',
		ko: 'valorant-aimbot',
		zh: 'valorant-aimbot',
		hi: 'valorant-aimbot',
		id: 'valorant-aimbot',
		th: 'valorant-aimbot',
		vi: 'valorant-aimbot',
		uk: 'valorant-aimbot-chity',
		cs: 'valorant-aimbot',
		ro: 'valorant-aimbot',
		sv: 'valorant-aimbot',
	},
	features: {
		en: 'features',
		es: 'caracteristicas-trucos-valorant',
		fr: 'fonctionnalites-triche-valorant',
		de: 'escape-from-valorant-cheats-funktionen',
		pt: 'recursos-cheats-valorant',
		it: 'funzioni-trucchi-valorant',
		nl: 'escape-from-valorant-cheats-functies',
		pl: 'funkcje-cheatow-valorant',
		ru: 'funkcii-chitov-valorant',
		tr: 'valorant-hile-ozellikleri',
		ar: 'escape-from-valorant-cheats-features',
		ja: 'escape-from-valorant-cheats-features',
		ko: 'escape-from-valorant-cheats-features',
		zh: 'escape-from-valorant-cheats-features',
		hi: 'escape-from-valorant-cheats-features',
		id: 'escape-from-valorant-cheats-features',
		th: 'escape-from-valorant-cheats-features',
		vi: 'escape-from-valorant-cheats-features',
		uk: 'funkcii-chitiv-valorant',
		cs: 'escape-from-valorant-cheats-funkce',
		ro: 'functii-cheats-valorant',
		sv: 'escape-from-valorant-cheats-funktioner',
	},
	pricing: {
		en: 'pricing',
		es: 'precios-trucos-valorant',
		fr: 'prix-triche-valorant',
		de: 'escape-from-valorant-cheats-preise',
		pt: 'precos-cheats-valorant',
		it: 'prezzi-trucchi-valorant',
		nl: 'escape-from-valorant-cheats-prijzen',
		pl: 'ceny-cheatow-valorant',
		ru: 'ceny-chitov-valorant',
		tr: 'valorant-hile-fiyatlari',
		ar: 'escape-from-valorant-cheats-pricing',
		ja: 'escape-from-valorant-cheats-pricing',
		ko: 'escape-from-valorant-cheats-pricing',
		zh: 'escape-from-valorant-cheats-pricing',
		hi: 'escape-from-valorant-cheats-pricing',
		id: 'escape-from-valorant-cheats-pricing',
		th: 'escape-from-valorant-cheats-pricing',
		vi: 'escape-from-valorant-cheats-pricing',
		uk: 'ciny-chitiv-valorant',
		cs: 'escape-from-valorant-cheats-ceny',
		ro: 'preturi-cheats-valorant',
		sv: 'escape-from-valorant-cheats-priser',
	},
	setup: {
		en: 'setup',
		es: 'instalacion-trucos-valorant',
		fr: 'installation-triche-valorant',
		de: 'escape-from-valorant-cheats-installation',
		pt: 'instalacao-cheats-valorant',
		it: 'installazione-trucchi-valorant',
		nl: 'escape-from-valorant-cheats-installatie',
		pl: 'instalacja-cheatow-valorant',
		ru: 'ustanovka-chitov-valorant',
		tr: 'valorant-hile-kurulum',
		ar: 'escape-from-valorant-cheats-setup',
		ja: 'escape-from-valorant-cheats-setup',
		ko: 'escape-from-valorant-cheats-setup',
		zh: 'escape-from-valorant-cheats-setup',
		hi: 'escape-from-valorant-cheats-setup',
		id: 'escape-from-valorant-cheats-setup',
		th: 'escape-from-valorant-cheats-setup',
		vi: 'escape-from-valorant-cheats-setup',
		uk: 'vstanovka-chitiv-valorant',
		cs: 'escape-from-valorant-cheats-instalace',
		ro: 'instalare-cheats-valorant',
		sv: 'escape-from-valorant-cheats-installation',
	},
	updates: {
		en: 'updates',
		es: 'actualizaciones-trucos-valorant',
		fr: 'mises-a-jour-triche-valorant',
		de: 'escape-from-valorant-cheats-updates',
		pt: 'atualizacoes-cheats-valorant',
		it: 'aggiornamenti-trucchi-valorant',
		nl: 'escape-from-valorant-cheats-updates',
		pl: 'aktualizacje-cheatow-valorant',
		ru: 'obnovleniya-chitov-valorant',
		tr: 'valorant-hile-guncellemeleri',
		ar: 'escape-from-valorant-cheats-updates',
		ja: 'escape-from-valorant-cheats-updates',
		ko: 'escape-from-valorant-cheats-updates',
		zh: 'escape-from-valorant-cheats-updates',
		hi: 'escape-from-valorant-cheats-updates',
		id: 'escape-from-valorant-cheats-updates',
		th: 'escape-from-valorant-cheats-updates',
		vi: 'escape-from-valorant-cheats-updates',
		uk: 'onovlennya-chitiv-valorant',
		cs: 'escape-from-valorant-cheats-aktualizace',
		ro: 'actualizari-cheats-valorant',
		sv: 'escape-from-valorant-cheats-uppdateringar',
	},
	faq: {
		en: 'faq',
		es: 'preguntas-trucos-valorant',
		fr: 'faq-triche-valorant',
		de: 'escape-from-valorant-cheats-faq',
		pt: 'faq-cheats-valorant',
		it: 'faq-trucchi-valorant',
		nl: 'escape-from-valorant-cheats-faq',
		pl: 'faq-cheatow-valorant',
		ru: 'faq-chitov-valorant',
		tr: 'valorant-hile-sss',
		ar: 'escape-from-valorant-cheats-faq',
		ja: 'escape-from-valorant-cheats-faq',
		ko: 'escape-from-valorant-cheats-faq',
		zh: 'escape-from-valorant-cheats-faq',
		hi: 'escape-from-valorant-cheats-faq',
		id: 'escape-from-valorant-cheats-faq',
		th: 'escape-from-valorant-cheats-faq',
		vi: 'escape-from-valorant-cheats-faq',
		uk: 'faq-chitiv-valorant',
		cs: 'escape-from-valorant-cheats-faq',
		ro: 'faq-cheats-valorant',
		sv: 'escape-from-valorant-cheats-faq',
	},
	support: {
		en: 'support',
		es: 'soporte-trucos-valorant',
		fr: 'support-triche-valorant',
		de: 'escape-from-valorant-cheats-support',
		pt: 'suporte-cheats-valorant',
		it: 'supporto-trucchi-valorant',
		nl: 'escape-from-valorant-cheats-support',
		pl: 'wsparcie-cheatow-valorant',
		ru: 'podderzhka-chitov-valorant',
		tr: 'valorant-hile-destek',
		ar: 'escape-from-valorant-cheats-support',
		ja: 'escape-from-valorant-cheats-support',
		ko: 'escape-from-valorant-cheats-support',
		zh: 'escape-from-valorant-cheats-support',
		hi: 'escape-from-valorant-cheats-support',
		id: 'escape-from-valorant-cheats-support',
		th: 'escape-from-valorant-cheats-support',
		vi: 'escape-from-valorant-cheats-support',
		uk: 'pidtrymka-chitiv-valorant',
		cs: 'escape-from-valorant-cheats-podpora',
		ro: 'suport-cheats-valorant',
		sv: 'escape-from-valorant-cheats-support',
	},
	undetected: {
		en: 'undetected-valorant-cheats',
		es: 'trucos-valorant-indetectables',
		fr: 'triche-valorant-indetectable',
		de: 'unentdeckte-escape-from-valorant-cheats',
		pt: 'cheats-valorant-indetectaveis',
		it: 'trucchi-valorant-indetectabili',
		nl: 'undetected-valorant-cheats',
		pl: 'niewykrywalne-cheats-valorant',
		ru: 'nedecektiruemye-chity-valorant',
		tr: 'tespit-edilemeyen-valorant-hileleri',
		ar: 'undetected-valorant-cheats',
		ja: 'undetected-valorant-cheats',
		ko: 'undetected-valorant-cheats',
		zh: 'undetected-valorant-cheats',
		hi: 'undetected-valorant-cheats',
		id: 'undetected-valorant-cheats',
		th: 'undetected-valorant-cheats',
		vi: 'undetected-valorant-cheats',
		uk: 'nedecektovani-chity-valorant',
		cs: 'undetected-valorant-cheats',
		ro: 'cheats-valorant-nedetectabile',
		sv: 'undetected-valorant-cheats',
	},
	wallhack: {
		en: 'valorant-wallhack',
		es: 'wallhack-trucos-valorant',
		fr: 'wallhack-triche-valorant',
		de: 'valorant-wallhack',
		pt: 'wallhack-cheats-valorant',
		it: 'wallhack-trucchi-valorant',
		nl: 'valorant-wallhack',
		pl: 'wallhack-cheatow-valorant',
		ru: 'wallhack-chity-valorant',
		tr: 'valorant-wallhack-hile',
		ar: 'valorant-wallhack',
		ja: 'valorant-wallhack',
		ko: 'valorant-wallhack',
		zh: 'valorant-wallhack',
		hi: 'valorant-wallhack',
		id: 'valorant-wallhack',
		th: 'valorant-wallhack',
		vi: 'valorant-wallhack',
		uk: 'wallhack-chity-valorant',
		cs: 'valorant-wallhack',
		ro: 'wallhack-cheats-valorant',
		sv: 'valorant-wallhack',
	},
	radar: {
		en: 'valorant-radar-hack',
		es: 'radar-hack-trucos-valorant',
		fr: 'radar-hack-triche-valorant',
		de: 'valorant-radar-hack',
		pt: 'radar-hack-cheats-valorant',
		it: 'radar-hack-trucchi-valorant',
		nl: 'valorant-radar-hack',
		pl: 'radar-hack-cheatow-valorant',
		ru: 'radar-hack-chity-valorant',
		tr: 'valorant-radar-hack',
		ar: 'valorant-radar-hack',
		ja: 'valorant-radar-hack',
		ko: 'valorant-radar-hack',
		zh: 'valorant-radar-hack',
		hi: 'valorant-radar-hack',
		id: 'valorant-radar-hack',
		th: 'valorant-radar-hack',
		vi: 'valorant-radar-hack',
		uk: 'radar-hack-chity-valorant',
		cs: 'valorant-radar-hack',
		ro: 'radar-hack-cheats-valorant',
		sv: 'valorant-radar-hack',
	},
	'vanguard': {
		en: 'vanguard-bypass',
		es: 'vanguard-bypass-trucos',
		fr: 'vanguard-bypass-triche',
		de: 'vanguard-bypass',
		pt: 'vanguard-bypass-cheats',
		it: 'vanguard-bypass-trucchi',
		nl: 'vanguard-bypass',
		pl: 'vanguard-bypass-cheatow',
		ru: 'vanguard-bypass-chity',
		tr: 'vanguard-bypass',
		ar: 'vanguard-bypass',
		ja: 'vanguard-bypass',
		ko: 'vanguard-bypass',
		zh: 'vanguard-bypass',
		hi: 'vanguard-bypass',
		id: 'vanguard-bypass',
		th: 'vanguard-bypass',
		vi: 'vanguard-bypass',
		uk: 'vanguard-bypass-chity',
		cs: 'vanguard-bypass',
		ro: 'vanguard-bypass-cheats',
		sv: 'vanguard-bypass',
	},
	'cheats-2026': {
		en: 'valorant-cheats-2026',
		es: 'trucos-valorant-2026',
		fr: 'triche-valorant-2026',
		de: 'valorant-cheats-2026',
		pt: 'cheats-valorant-2026',
		it: 'trucchi-valorant-2026',
		nl: 'valorant-cheats-2026',
		pl: 'cheaty-valorant-2026',
		ru: 'chity-valorant-2026',
		tr: 'valorant-hileleri-2026',
		ar: 'valorant-cheats-2026',
		ja: 'valorant-cheats-2026',
		ko: 'valorant-cheats-2026',
		zh: 'valorant-cheats-2026',
		hi: 'valorant-cheats-2026',
		id: 'valorant-cheats-2026',
		th: 'valorant-cheats-2026',
		vi: 'valorant-cheats-2026',
		uk: 'chity-valorant-2026',
		cs: 'valorant-cheats-2026',
		ro: 'cheats-valorant-2026',
		sv: 'valorant-cheats-2026',
	},
	hacks: {
		en: 'valorant-cheats',
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
	},
	'cheat-download': {
		en: 'valorant-cheat-download',
		es: 'descarga-trucos-valorant',
		fr: 'telechargement-triche-valorant',
		de: 'valorant-cheat-download',
		pt: 'download-cheats-valorant',
		it: 'download-trucchi-valorant',
		nl: 'valorant-cheat-download',
		pl: 'pobieranie-cheatow-valorant',
		ru: 'skachat-chity-valorant',
		tr: 'valorant-hile-indir',
		ar: 'valorant-cheat-download',
		ja: 'valorant-cheat-download',
		ko: 'valorant-cheat-download',
		zh: 'valorant-cheat-download',
		hi: 'valorant-cheat-download',
		id: 'valorant-cheat-download',
		th: 'valorant-cheat-download',
		vi: 'valorant-cheat-download',
		uk: 'zavantazhennya-chitiv-valorant',
		cs: 'valorant-cheat-download',
		ro: 'descarcare-cheats-valorant',
		sv: 'valorant-cheat-download',
	},
	'mod-menu': {
		en: 'valorant-mod-menu',
		es: 'menu-mod-trucos-valorant',
		fr: 'menu-mod-triche-valorant',
		de: 'valorant-mod-menu',
		pt: 'menu-mod-cheats-valorant',
		it: 'menu-mod-trucchi-valorant',
		nl: 'valorant-mod-menu',
		pl: 'menu-mod-cheatow-valorant',
		ru: 'mod-menu-chity-valorant',
		tr: 'valorant-mod-menu',
		ar: 'valorant-mod-menu',
		ja: 'valorant-mod-menu',
		ko: 'valorant-mod-menu',
		zh: 'valorant-mod-menu',
		hi: 'valorant-mod-menu',
		id: 'valorant-mod-menu',
		th: 'valorant-mod-menu',
		vi: 'valorant-mod-menu',
		uk: 'mod-menu-chity-valorant',
		cs: 'valorant-mod-menu',
		ro: 'meniu-mod-cheats-valorant',
		sv: 'valorant-mod-menu',
	},
	'soft-aim': {
		en: 'valorant-soft-aim',
		es: 'soft-aim-trucos-valorant',
		fr: 'soft-aim-triche-valorant',
		de: 'valorant-soft-aim',
		pt: 'soft-aim-cheats-valorant',
		it: 'soft-aim-trucchi-valorant',
		nl: 'valorant-soft-aim',
		pl: 'soft-aim-cheatow-valorant',
		ru: 'soft-aim-chity-valorant',
		tr: 'valorant-soft-aim',
		ar: 'valorant-soft-aim',
		ja: 'valorant-soft-aim',
		ko: 'valorant-soft-aim',
		zh: 'valorant-soft-aim',
		hi: 'valorant-soft-aim',
		id: 'valorant-soft-aim',
		th: 'valorant-soft-aim',
		vi: 'valorant-soft-aim',
		uk: 'soft-aim-chity-valorant',
		cs: 'valorant-soft-aim',
		ro: 'soft-aim-cheats-valorant',
		sv: 'valorant-soft-aim',
	},
	'best-cheats': {
		en: 'best-valorant-cheats',
		es: 'mejores-trucos-valorant',
		fr: 'meilleures-triches-valorant',
		de: 'beste-escape-from-valorant-cheats',
		pt: 'melhores-cheats-valorant',
		it: 'migliori-trucchi-valorant',
		nl: 'beste-escape-from-valorant-cheats',
		pl: 'najlepsze-cheats-valorant',
		ru: 'luchshie-chity-valorant',
		tr: 'en-iyi-valorant-hileleri',
		ar: 'best-valorant-cheats',
		ja: 'best-valorant-cheats',
		ko: 'best-valorant-cheats',
		zh: 'best-valorant-cheats',
		hi: 'best-valorant-cheats',
		id: 'best-valorant-cheats',
		th: 'best-valorant-cheats',
		vi: 'best-valorant-cheats',
		uk: 'naykrashchi-chity-valorant',
		cs: 'nejlepsi-escape-from-valorant-cheats',
		ro: 'cele-mai-bune-cheats-valorant',
		sv: 'basta-escape-from-valorant-cheats',
	},
	'aimbot-hack': {
		en: 'valorant-aimbot-hack',
		es: 'aimbot-hack-trucos-valorant',
		fr: 'aimbot-hack-triche-valorant',
		de: 'valorant-aimbot-hack',
		pt: 'aimbot-hack-cheats-valorant',
		it: 'aimbot-hack-trucchi-valorant',
		nl: 'valorant-aimbot-hack',
		pl: 'aimbot-hack-cheatow-valorant',
		ru: 'aimbot-hack-chity-valorant',
		tr: 'valorant-aimbot-hack',
		ar: 'valorant-aimbot-hack',
		ja: 'valorant-aimbot-hack',
		ko: 'valorant-aimbot-hack',
		zh: 'valorant-aimbot-hack',
		hi: 'valorant-aimbot-hack',
		id: 'valorant-aimbot-hack',
		th: 'valorant-aimbot-hack',
		vi: 'valorant-aimbot-hack',
		uk: 'aimbot-hack-chity-valorant',
		cs: 'valorant-aimbot-hack',
		ro: 'aimbot-hack-cheats-valorant',
		sv: 'valorant-aimbot-hack',
	},
	'esp-hack': {
		en: 'valorant-esp-hack',
		es: 'esp-hack-trucos-valorant',
		fr: 'esp-hack-triche-valorant',
		de: 'valorant-esp-hack',
		pt: 'esp-hack-cheats-valorant',
		it: 'esp-hack-trucchi-valorant',
		nl: 'valorant-esp-hack',
		pl: 'esp-hack-cheatow-valorant',
		ru: 'esp-hack-chity-valorant',
		tr: 'valorant-esp-hack',
		ar: 'valorant-esp-hack',
		ja: 'valorant-esp-hack',
		ko: 'valorant-esp-hack',
		zh: 'valorant-esp-hack',
		hi: 'valorant-esp-hack',
		id: 'valorant-esp-hack',
		th: 'valorant-esp-hack',
		vi: 'valorant-esp-hack',
		uk: 'esp-hack-chity-valorant',
		cs: 'valorant-esp-hack',
		ro: 'esp-hack-cheats-valorant',
		sv: 'valorant-esp-hack',
	},
	'unlock-all': {
		en: 'valorant-unlock-all',
		es: 'unlock-all-trucos-valorant',
		fr: 'unlock-all-triche-valorant',
		de: 'valorant-unlock-all',
		pt: 'unlock-all-cheats-valorant',
		it: 'unlock-all-trucchi-valorant',
		nl: 'valorant-unlock-all',
		pl: 'unlock-all-cheatow-valorant',
		ru: 'unlock-all-chity-valorant',
		tr: 'valorant-unlock-all',
		ar: 'valorant-unlock-all',
		ja: 'valorant-unlock-all',
		ko: 'valorant-unlock-all',
		zh: 'valorant-unlock-all',
		hi: 'valorant-unlock-all',
		id: 'valorant-unlock-all',
		th: 'valorant-unlock-all',
		vi: 'valorant-unlock-all',
		uk: 'unlock-all-chity-valorant',
		cs: 'valorant-unlock-all',
		ro: 'unlock-all-cheats-valorant',
		sv: 'valorant-unlock-all',
	},
	privacy: {
		en: 'privacy-policy',
		es: 'politica-privacidad',
		fr: 'politique-confidentialite',
		de: 'datenschutz',
		pt: 'politica-privacidade',
		it: 'privacy-policy',
		nl: 'privacybeleid',
		pl: 'polityka-prywatnosci',
		ru: 'politika-konfidencialnosti',
		tr: 'gizlilik-politikasi',
		ar: 'privacy-policy',
		ja: 'privacy-policy',
		ko: 'privacy-policy',
		zh: 'privacy-policy',
		hi: 'privacy-policy',
		id: 'privacy-policy',
		th: 'privacy-policy',
		vi: 'privacy-policy',
		uk: 'polityka-konfidentsijnosti',
		cs: 'ochrana-osobnich-udaju',
		ro: 'politica-confidentialitate',
		sv: 'integritetspolicy',
	},
	refund: {
		en: 'refund-policy',
		es: 'politica-reembolso',
		fr: 'politique-remboursement',
		de: 'rueckerstattung',
		pt: 'politica-reembolso',
		it: 'politica-rimborso',
		nl: 'terugbetalingsbeleid',
		pl: 'polityka-zwrotow',
		ru: 'politika-vozvrata',
		tr: 'iade-politikasi',
		ar: 'refund-policy',
		ja: 'refund-policy',
		ko: 'refund-policy',
		zh: 'refund-policy',
		hi: 'refund-policy',
		id: 'refund-policy',
		th: 'refund-policy',
		vi: 'refund-policy',
		uk: 'polityka-povorennya',
		cs: 'refund-policy',
		ro: 'politica-rambursare',
		sv: 'aterbetalningspolicy',
	},
	terms: {
		en: 'terms',
		es: 'terminos-uso',
		fr: 'conditions-utilisation',
		de: 'nutzungsbedingungen',
		pt: 'termos-uso',
		it: 'termini-uso',
		nl: 'gebruiksvoorwaarden',
		pl: 'regulamin',
		ru: 'usloviya-ispolzovaniya',
		tr: 'kullanim-kosullari',
		ar: 'terms',
		ja: 'terms',
		ko: 'terms',
		zh: 'terms',
		hi: 'terms',
		id: 'terms',
		th: 'terms',
		vi: 'terms',
		uk: 'umovy-vykorystannya',
		cs: 'podminky-uziti',
		ro: 'termeni-utilizare',
		sv: 'anvandarvillkor',
	},
};

export const pageIds = Object.keys(englishPaths) as PageId[];

export function getLocalizedPath(pageId: PageId, locale: LocaleCode): string {
	if (locale === defaultLocale) {
		return englishPaths[pageId];
	}
	const slug = localizedSlugs[pageId][locale];
	return slug ? `/${locale}/${slug}/` : `/${locale}/`;
}

/** Map English root paths to the correct locale URL (for CTAs and inline links). */
export function localizeInternalHref(href: string, locale: LocaleCode): string {
	if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) {
		return href;
	}
	const trimmed = href.replace(/\/+$/, '') || '/';
	const withSlash = trimmed === '/' ? '/' : `${trimmed}/`;
	for (const pageId of pageIds) {
		const english = englishPaths[pageId];
		if (english === withSlash || english.replace(/\/+$/, '') === trimmed) {
			const targetId = getCannibalTargetId(pageId) as PageId;
			return getLocalizedPath(targetId, locale);
		}
	}
	return href;
}

/** Canonical absolute URL — always https apex with trailing slash (matches Layout.astro). */
export function buildCanonicalUrl(path: string): string {
	const normalized =
		!path || path === '/'
			? '/'
			: path.endsWith('/') || path.includes('.')
				? path
				: `${path}/`;
	return new URL(normalized, siteConfig.url).href;
}

export function absoluteLocalizedUrl(pageId: PageId, locale: LocaleCode): string {
	return buildCanonicalUrl(getLocalizedPath(pageId, locale));
}

export type HreflangAlternate = { hreflang: string; href: string };

/** Self-referential hreflang for single-locale pages (reviews, 404). */
export function getSelfHreflangAlternates(
	path: string,
	locale: LocaleCode = defaultLocale,
): HreflangAlternate[] {
	const href = buildCanonicalUrl(path);
	return [
		{ hreflang: localeMap[locale].hreflang, href },
		{ hreflang: 'x-default', href },
	];
}

export function getHreflangAlternates(pageId: PageId, currentLocale: LocaleCode = defaultLocale) {
	const resolvedId = (isCannibalPageId(pageId) ? getCannibalTargetId(pageId) : pageId) as PageId;
	const byLocale = localeCodes.map((code) => ({
		hreflang: localeMap[code].hreflang,
		href: absoluteLocalizedUrl(resolvedId, code),
		code,
	}));
	const self = byLocale.find((alt) => alt.code === currentLocale)!;
	const others = byLocale.filter((alt) => alt.code !== currentLocale);
	const xDefault = {
		hreflang: 'x-default' as const,
		href: absoluteLocalizedUrl(resolvedId, defaultLocale),
	};
	// Self-referential hreflang first — required by Google/Seobility for the active locale.
	return [
		{ hreflang: self.hreflang, href: self.href },
		...others.map(({ hreflang, href }) => ({ hreflang, href })),
		xDefault,
	];
}

export function resolvePageIdFromPath(path: string): PageId | undefined {
	const normalized = path.endsWith('/') ? path : `${path}/`;
	for (const id of pageIds) {
		if (englishPaths[id] === normalized) return id;
	}
	return undefined;
}

/** Parsed locale + page from any site URL (English root or /{lang}/…). */
export type PageContext = {
	locale: LocaleCode;
	pageId?: PageId;
	isBlogIndex?: boolean;
	blogSlug?: string;
};

function normalizePathname(pathname: string): string {
	if (!pathname || pathname === '/') return '/';
	if (pathname.includes('.') || pathname.endsWith('/')) return pathname;
	return `${pathname}/`;
}

/** Resolve locale and page/blog context from the current URL path. */
export function resolvePageContextFromPath(pathname: string): PageContext {
	const path = normalizePathname(pathname);

	if (path === '/') {
		return { locale: defaultLocale, pageId: 'home' };
	}

	const segments = path.split('/').filter(Boolean);
	let locale: LocaleCode = defaultLocale;
	let offset = 0;

	if (segments.length > 0 && isLocaleCode(segments[0]) && segments[0] !== defaultLocale) {
		locale = segments[0];
		offset = 1;
	}

	const rest = segments.slice(offset);

	if (rest.length === 0) {
		return { locale, pageId: 'home' };
	}

	if (rest[0] === 'blog') {
		if (rest.length === 1) {
			return { locale, isBlogIndex: true };
		}
		return { locale, blogSlug: rest[1] };
	}

	if (locale === defaultLocale) {
		return { locale, pageId: resolvePageIdFromPath(path) };
	}

	return { locale, pageId: resolvePageFromLocalizedPath(locale, rest[0]) };
}

/** Target URL for the same page in another locale (non-blog pages). */
export function getPageLocaleSwitchHref(context: PageContext, targetLocale: LocaleCode): string {
	if (context.pageId) {
		return getLocalizedPath(context.pageId, targetLocale);
	}
	return getLocalizedPath('home', targetLocale);
}

export function hreflangLinksXml(pageId: PageId, escapeXml: (v: string) => string): string {
	return getHreflangAlternates(pageId)
		.map(
			(alt) =>
				`    <xhtml:link rel="alternate" hreflang="${escapeXml(alt.hreflang)}" href="${escapeXml(alt.href)}"/>`,
		)
		.join('\n');
}

export function resolvePageFromLocalizedPath(
	locale: LocaleCode,
	slug: string | undefined,
): PageId | undefined {
	if (!slug) return 'home';
	for (const pageId of pageIds) {
		if (localizedSlugs[pageId][locale] === slug) return pageId;
	}
	return undefined;
}

/** Map Accept-Language header to preferred locale (region-aware). */
export function localeFromAcceptLanguage(header: string | null): LocaleCode {
	if (!header) return defaultLocale;
	const prefs = header
		.split(',')
		.map((part) => {
			const [tag, qPart] = part.trim().split(';');
			const q = qPart?.startsWith('q=') ? Number.parseFloat(qPart.slice(2)) : 1;
			return { tag: tag.toLowerCase(), q };
		})
		.sort((a, b) => b.q - a.q);

	for (const { tag } of prefs) {
		const primary = tag.split('-')[0];
		if (localeCodes.includes(primary as LocaleCode)) return primary as LocaleCode;
	}
	return defaultLocale;
}

export function getNavForLocale(locale: LocaleCode, labels: Record<string, string>) {
	const items: { label: string; href: string; pageId?: PageId }[] = [
		{ label: labels.home, href: getLocalizedPath('home', locale), pageId: 'home' },
	{ label: labels.hacks ?? 'Hacks', href: getLocalizedPath('hacks', locale), pageId: 'hacks' },
		{ label: labels.aimbot, href: getLocalizedPath('valorant-aimbot', locale), pageId: 'valorant-aimbot' },
		{ label: labels.esp, href: getLocalizedPath('valorant-esp', locale), pageId: 'valorant-esp' },
		{ label: 'Blog', href: locale === defaultLocale ? '/blog/' : `/${locale}/blog/` },
		{ label: labels.features, href: getLocalizedPath('features', locale), pageId: 'features' },
		{ label: labels.pricing, href: getLocalizedPath('pricing', locale), pageId: 'pricing' },
		{ label: labels.setup, href: getLocalizedPath('setup', locale), pageId: 'setup' },
		{ label: labels.updates, href: getLocalizedPath('updates', locale), pageId: 'updates' },
		{ label: labels.faq, href: getLocalizedPath('faq', locale), pageId: 'faq' },
	];
	return items;
}
