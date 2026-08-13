#!/usr/bin/env node
/**
 * One-time migration: Tarkov Cheats → Valorant Cheats.
 * Domain: valocheats.com
 * Run from project root: node scripts/adapt-valorant.mjs
 */
import { readFile, writeFile, readdir, rename } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const RENAME_PAGE_DIRS = [
	['tarkov-aimbot', 'valorant-aimbot'],
	['tarkov-esp', 'valorant-esp'],
	['tarkov-wallhack', 'valorant-wallhack'],
	['tarkov-radar-hack', 'valorant-radar-hack'],
	['undetected-tarkov-cheats', 'undetected-valorant-cheats'],
	['tarkov-cheats-2026', 'valorant-cheats-2026'],
	['battleye-bypass', 'vanguard-bypass'],
	['tarkov-cheats', 'valorant-cheats'],
	['tarkov-cheat-download', 'valorant-cheat-download'],
	['tarkov-mod-menu', 'valorant-mod-menu'],
	['tarkov-soft-aim', 'valorant-soft-aim'],
	['best-tarkov-cheats', 'best-valorant-cheats'],
	['tarkov-aimbot-hack', 'valorant-aimbot-hack'],
	['tarkov-esp-hack', 'valorant-esp-hack'],
	['tarkov-unlock-all', 'valorant-unlock-all'],
];

/** Ordered replacements — specific patterns first. */
const REPLACEMENTS = [
	['https://tarkovcheats.org', 'https://valocheats.com'],
	['https://www.tarkovcheats.org', 'https://www.valocheats.com'],
	['www.tarkovcheats.org', 'www.valocheats.com'],
	['tarkovcheats.org', 'valocheats.com'],
	['support@tarkovcheats.org', 'support@valocheats.com'],
	['besttarkovcheats.com', 'valocheats.com'],
	['www.besttarkovcheats.com', 'www.valocheats.com'],
	['/products/escape-from-tarkov', '/products/valorant'],
	['%2Fproducts%2Fescape-from-tarkov', '%2Fproducts%2Fvalorant'],
	['project-name=tarkov-cheats--org', 'project-name=valo-cheats--com'],
	['name = "tarkov-cheats--org"', 'name = "valo-cheats--com"'],
	['tarkov-cheats--org', 'valo-cheats--com'],
	['tarkov-cheats-.org', 'valo-cheats-.com'],
	['"name": "tarkov-cheats"', '"name": "valorant-cheats"'],
	['tarkov-esp-player-tags', 'valorant-esp-player-tags'],
	['tarkov-wallhack-skeleton', 'valorant-wallhack-skeleton'],
	['tarkov-aimbot-sniper', 'valorant-aimbot-sniper'],
	['tarkov-aimbot-skeleton', 'valorant-aimbot-skeleton'],
	['tarkov-esp-radar', 'valorant-esp-radar'],
	['tarkov-cheats-combat', 'valorant-cheats-combat'],
	['tarkov-cheats-raid', 'valorant-cheats-match'],
	['tarkov-cheats-logo', 'valorant-cheats-logo'],
	['tarkov-cheats-hero', 'valorant-cheats-hero'],
	['tarkov-hero-banner', 'valorant-hero-banner'],
	['undetected-tarkov-cheats', 'undetected-valorant-cheats'],
	['best-tarkov-cheats', 'best-valorant-cheats'],
	['tarkov-cheat-download', 'valorant-cheat-download'],
	['tarkov-cheats-2026', 'valorant-cheats-2026'],
	['tarkov-radar-hack', 'valorant-radar-hack'],
	['tarkov-aimbot-hack', 'valorant-aimbot-hack'],
	['tarkov-esp-hack', 'valorant-esp-hack'],
	['tarkov-unlock-all', 'valorant-unlock-all'],
	['tarkov-soft-aim', 'valorant-soft-aim'],
	['tarkov-mod-menu', 'valorant-mod-menu'],
	['tarkov-wallhack', 'valorant-wallhack'],
	['tarkov-cheats', 'valorant-cheats'],
	['tarkov-aimbot', 'valorant-aimbot'],
	['tarkov-esp', 'valorant-esp'],
	['battleye-bypass', 'vanguard-bypass'],
	["'battleye'", "'vanguard'"],
	['| battleye', '| vanguard'],
	['pageId="battleye"', 'pageId="vanguard"'],
	["pageId: 'battleye'", "pageId: 'vanguard'"],
	['"battleye"', '"vanguard"'],
	['escape-from-tarkov-cheats', 'valorant-cheats'],
	['escape-from-tarkov', 'valorant'],
	['https://www.escapefromtarkov.com/support', 'https://playvalorant.com/en-us/news/'],
	['https://www.escapefromtarkov.com', 'https://playvalorant.com'],
	['https://www.battleye.com/', 'https://playvalorant.com/en-us/news/tags/patch-notes/'],
	['Escape from Tarkov', 'Valorant'],
	['Tarkov Cheats', 'Valorant Cheats'],
	['Tarkov cheats', 'Valorant cheats'],
	['Tarkov cheat', 'Valorant cheat'],
	['Tarkov Intel', 'Valorant Intel'],
	['TarkovCheatsSite', 'ValorantCheatsSite'],
	['BattlEye anti-cheat', 'Vanguard anti-cheat'],
	['BattlEye maintenance', 'Vanguard maintenance'],
	['BattlEye bypass', 'Vanguard bypass'],
	['BattlEye Bypass', 'Vanguard Bypass'],
	['BattlEye patches', 'Vanguard patches'],
	['BattlEye patch', 'Vanguard patch'],
	['BattlEye updates', 'Vanguard updates'],
	['BattlEye update', 'Vanguard update'],
	['after BattlEye', 'after Vanguard'],
	['BattlEye', 'Vanguard'],
	['battleye', 'vanguard'],
	['tarkov cheats', 'valorant cheats'],
	['tarkov cheat', 'valorant cheat'],
	['tarkov hacks', 'valorant cheats'],
	['tarkov hack', 'valorant cheat'],
	['Customs, Woods, and Streets of Tarkov', 'Ascent, Bind, and Haven'],
	['Customs, Woods and Streets of Tarkov', 'Ascent, Bind and Haven'],
	['Customs, Woods et Streets of Tarkov', 'Ascent, Bind et Haven'],
	['Customs, Woods e Streets of Tarkov', 'Ascent, Bind e Haven'],
	['Customs, Woods und Streets of Tarkov', 'Ascent, Bind und Haven'],
	['Streets of Tarkov', 'Haven'],
	['PMC raids and Scav runs', 'Unrated and Competitive matches'],
	['PMC raids and Scav run', 'Unrated and Competitive'],
	['PMC & Scav', 'agents & enemies'],
	['PMCs and Scavs', 'agents and enemies'],
	['PMC and Scav', 'agent and enemy'],
	['Scav runs', 'Deathmatch games'],
	['Scav run', 'Deathmatch'],
	['scav-run', 'deathmatch'],
	['scav run', 'deathmatch'],
	['Scavs', 'enemies'],
	['Scav', 'Deathmatch'],
	['PMCs', 'agents'],
	['PMC', 'agent'],
	['bosses', 'ultimates'],
	['Boss and enemy filters', 'Enemy and ally filters'],
	['Boss and Deathmatch filters', 'Enemy and ally filters'],
	['extract fights', 'site fights'],
	['extract fight', 'site fight'],
	['extract and loot markers', 'spike and orb markers'],
	['loot markers', 'orb markers'],
	['Loot ESP', 'Orb ESP'],
	['Loot and extract', 'Orb and spike'],
	['loot and extract', 'orb and spike'],
	['extracts', 'sites'],
	['extract', 'site'],
	['before you raid', 'before you queue'],
	['every raid', 'every match'],
	['a raid', 'a match'],
	['the raid', 'the match'],
	['in-raid', 'in-match'],
	['In-raid', 'In-match'],
	['mid-raid', 'mid-round'],
	['raids', 'matches'],
	['raid', 'match'],
	['wipes', 'episodes'],
	['wipe', 'episode'],
	['Battlestate Games', 'Riot Games'],
	['Battlestate', 'Riot Games'],
	['Customs', 'Ascent'],
	['Woods', 'Breeze'],
	['Factory', 'Icebox'],
	['Interchange', 'Sunset'],
	['dorms', 'Haven'],
	['queue a match on Windows PC today', 'queue on Windows PC today'],
	['tarkovImages', 'valorantImages'],
	["from './tarkov'", "from './valorant'"],
	["from '../data/tarkov'", "from '../data/valorant'"],
	["from '../../data/tarkov'", "from '../../data/valorant'"],
	['fetch-tarkov-images', 'fetch-valorant-images'],
	['tarkov-hack-overlays', 'valorant-hack-overlays'],
	['trucos-tarkov', 'trucos-valorant'],
	['triche-tarkov', 'triche-valorant'],
	['cheats-tarkov', 'cheats-valorant'],
	['trucchi-tarkov', 'trucchi-valorant'],
	['cheaty-tarkov', 'cheaty-valorant'],
	['chity-tarkov', 'chity-valorant'],
	['chitov-tarkov', 'chitov-valorant'],
	['chitiv-tarkov', 'chitiv-valorant'],
	['cheatow-tarkov', 'cheatow-valorant'],
	['hile-tarkov', 'hile-valorant'],
	['tarkov-hile', 'valorant-hile'],
	['unentdeckte-tarkov-cheats', 'unentdeckte-valorant-cheats'],
	['Buy Tarkov Cheats', 'Buy Valorant Cheats'],
	['Tarkov', 'Valorant'],
	['tarkov', 'valorant'],
];

const TEXT_EXTENSIONS = new Set([
	'.ts',
	'.tsx',
	'.js',
	'.mjs',
	'.astro',
	'.css',
	'.json',
	'.toml',
	'.txt',
	'.md',
	'.html',
	'.mdc',
]);

const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', '.astro']);
const SKIP_FILES = new Set([
	'adapt-warzone.mjs',
	'adapt-fortnite.mjs',
	'adapt-tarkov.mjs',
	'adapt-valorant.mjs',
	'package-lock.json',
]);

async function walk(dir, files = []) {
	const entries = await readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		if (SKIP_DIRS.has(entry.name)) continue;
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			await walk(full, files);
		} else {
			files.push(full);
		}
	}
	return files;
}

function applyReplacements(content) {
	let result = content;
	for (const [from, to] of REPLACEMENTS) {
		if (from === to) continue;
		result = result.split(from).join(to);
	}
	return result;
}

async function transformTextFiles() {
	const files = await walk(ROOT);
	let changed = 0;
	for (const file of files) {
		const ext = path.extname(file);
		if (!TEXT_EXTENSIONS.has(ext)) continue;
		if (SKIP_FILES.has(path.basename(file))) continue;
		const original = await readFile(file, 'utf8');
		const updated = applyReplacements(original);
		if (updated !== original) {
			await writeFile(file, updated, 'utf8');
			changed++;
		}
	}
	console.log(`Transformed ${changed} text files`);
}

async function renamePageDirs() {
	for (const [from, to] of RENAME_PAGE_DIRS) {
		const src = path.join(ROOT, 'src', 'pages', from);
		const dest = path.join(ROOT, 'src', 'pages', to);
		try {
			await rename(src, dest);
			console.log(`Renamed page: ${from} → ${to}`);
		} catch (e) {
			console.warn(`Skip rename ${from}: ${e.message}`);
		}
	}
}

async function renameDataFile() {
	const from = path.join(ROOT, 'src', 'data', 'tarkov.ts');
	const to = path.join(ROOT, 'src', 'data', 'valorant.ts');
	try {
		await rename(from, to);
		console.log('Renamed tarkov.ts → valorant.ts');
	} catch (e) {
		console.warn(`tarkov.ts rename: ${e.message}`);
	}
}

async function renameScripts() {
	const pairs = [
		['fetch-tarkov-images.mjs', 'fetch-valorant-images.mjs'],
		['tarkov-hack-overlays.mjs', 'valorant-hack-overlays.mjs'],
		['fix-tarkov-copy.mjs', 'fix-valorant-copy.mjs'],
	];
	for (const [from, to] of pairs) {
		try {
			await rename(path.join(ROOT, 'scripts', from), path.join(ROOT, 'scripts', to));
			console.log(`Renamed script: ${from} → ${to}`);
		} catch (e) {
			console.warn(`Skip script rename ${from}: ${e.message}`);
		}
	}
}

async function updatePageAstroFiles() {
	const idMap = {
		'valorant-aimbot': 'valorant-aimbot',
		'valorant-esp': 'valorant-esp',
		'valorant-wallhack': 'wallhack',
		'valorant-radar-hack': 'radar',
		'undetected-valorant-cheats': 'undetected',
		'valorant-cheats-2026': 'cheats-2026',
		'vanguard-bypass': 'vanguard',
		'valorant-cheats': 'hacks',
		'valorant-cheat-download': 'cheat-download',
		'valorant-mod-menu': 'mod-menu',
		'valorant-soft-aim': 'soft-aim',
		'best-valorant-cheats': 'best-cheats',
		'valorant-aimbot-hack': 'aimbot-hack',
		'valorant-esp-hack': 'esp-hack',
		'valorant-unlock-all': 'unlock-all',
	};

	for (const [dir, pageId] of Object.entries(idMap)) {
		const file = path.join(ROOT, 'src', 'pages', dir, 'index.astro');
		try {
			const content = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="${pageId}" />
`;
			await writeFile(file, content, 'utf8');
		} catch {
			// ignore missing dirs
		}
	}
}

async function renameImages() {
	const imagesDir = path.join(ROOT, 'public', 'images');
	let files;
	try {
		files = await readdir(imagesDir);
	} catch {
		return;
	}
	for (const file of files) {
		if (!file.includes('tarkov') && !file.includes('raid')) continue;
		const newName = file.replace(/tarkov/g, 'valorant').replace(/raid/g, 'match');
		if (newName !== file) {
			try {
				await rename(path.join(imagesDir, file), path.join(imagesDir, newName));
				console.log(`Renamed image: ${file} → ${newName}`);
			} catch (e) {
				console.warn(`Skip image ${file}: ${e.message}`);
			}
		}
	}
}

async function main() {
	console.log('Adapting Tarkov Cheats → Valorant Cheats (valocheats.com)...\n');
	await renamePageDirs();
	await renameDataFile();
	await renameScripts();
	await transformTextFiles();
	await renameImages();
	console.log('\nDone. Next: fix brand.ts identity, sync:brand, regenerate i18n/blog.');
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
