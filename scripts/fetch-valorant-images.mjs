import { mkdir, readdir, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { buildOverlaySvg } from './valorant-hack-overlays.mjs';

const imagesDir = path.resolve('public/images');
const publicDir = path.resolve('public');

const HERO_PROMO =
	'https://cdn.oneesports.gg/wp-content/uploads/2024/07/Valorant_ValorantChampions2024_SUPERPOWER_Anthem.jpg';

const WIKI = (p) =>
	`https://images.weserv.nl/?url=${encodeURIComponent(`static.wikia.nocookie.net/valorant/images/${p}`)}&w=1920&output=jpg`;

/** Map UUIDs from valorant-api.com — official Valorant splash art. */
const MAP_SPLASH = {
	ascent: 'https://media.valorant-api.com/maps/7eaecc1b-4337-bbf6-6ab9-04b8f06b3319/splash.png',
	split: 'https://media.valorant-api.com/maps/d960549e-485c-e861-8d71-aa9d1aed12a2/splash.png',
	bind: 'https://media.valorant-api.com/maps/2c9d57ec-4431-9c5e-2939-8f9ef6dd5cba/splash.png',
	fracture: 'https://media.valorant-api.com/maps/b529448b-4d60-346e-e89e-00a4c527a405/splash.png',
	haven: 'https://media.valorant-api.com/maps/2bee0dc9-4ffe-519b-1cbd-7fbe763a6047/splash.png',
	icebox: 'https://media.valorant-api.com/maps/e2ad5c54-4114-a870-9641-8ea21279579a/splash.png',
};

/** Primary site images — Valorant art only (no Tarkov / Warzone / CoD leftovers). */
const KEYWORD_ASSETS = [
	{ file: 'valorant-cheats-esp.webp', url: MAP_SPLASH.ascent, overlay: 'esp' },
	{ file: 'valorant-cheats-wallhack.webp', url: MAP_SPLASH.split, overlay: 'wallhack' },
	{ file: 'valorant-cheats-aimbot.webp', url: MAP_SPLASH.bind, overlay: 'aimbot' },
	{ file: 'valorant-cheats-aimbot-view.webp', url: MAP_SPLASH.fracture, overlay: 'aimbot' },
	{ file: 'valorant-cheats-radar.webp', url: MAP_SPLASH.haven, overlay: 'radar' },
	{ file: 'valorant-cheats-match.webp', url: WIKI('7/78/FracturePreview1.jpg'), overlay: 'esp' },
	{ file: 'valorant-cheats-combat.webp', url: WIKI('8/8c/FracturePreview2.jpg'), overlay: 'deathmatch' },
	{ file: 'valorant-squad-fight.webp', url: WIKI('6/62/FracturePreview3.jpg'), overlay: 'site' },
	{ file: 'valorant-cheats-package.webp', url: MAP_SPLASH.bind, overlay: 'menu' },
	{ file: 'valorant-cheats-cover.webp', url: MAP_SPLASH.ascent, overlay: 'esp' },
	{ file: 'valorant-header-art.webp', url: HERO_PROMO, overlay: 'hero' },
	{ file: 'valorant-loadout-builder.webp', url: MAP_SPLASH.split, overlay: 'menu' },
	{ file: 'valorant-battle-royale-combat.webp', url: WIKI('7/78/FracturePreview1.jpg'), overlay: 'esp' },
	{ file: 'valorant-site-fight.webp', url: WIKI('8/8c/FracturePreview2.jpg'), overlay: 'site' },
	{ file: 'valorant-player-esp.webp', url: MAP_SPLASH.fracture, overlay: 'esp' },
	{ file: 'valorant-deathmatch-combat.webp', url: WIKI('6/62/FracturePreview3.jpg'), overlay: 'deathmatch' },
	{ file: 'valorant-deathmatch-mode.webp', url: WIKI('f/fc/Loading_Screen_Fracture.png'), overlay: 'loot' },
	{ file: 'valorant-verdansk-map.webp', url: MAP_SPLASH.ascent, overlay: 'map' },
];

const REMOVE_PATTERNS = [
	/^fortnite-/,
	/-\d+w\.webp$/i,
	/^valorant-cheats-logo/,
	/^valorant-cheats-hero-home/,
	/^valorant-hero-ghost/,
	/^zadeyo-/,
	/^hero-banner/,
	/^valorant-hero-banner/,
];

async function fetchBase(url) {
	const res = await fetch(url, {
		headers: { 'User-Agent': 'Mozilla/5.0 (compatible; ValorantCheatsSite/1.0)' },
	});
	if (!res.ok) throw new Error(`HTTP ${res.status}`);
	return Buffer.from(await res.arrayBuffer());
}

async function prepareBase(baseBuffer, asset) {
	let img = sharp(baseBuffer);

	if (asset.heroCrop) {
		const meta = await img.metadata();
		const width = meta.width ?? 1920;
		const height = meta.height ?? 1080;
		const targetRatio = 1024 / 409;
		const currentRatio = width / height;
		let cropW = width;
		let cropH = height;
		if (currentRatio > targetRatio) {
			cropW = Math.round(height * targetRatio);
		} else {
			cropH = Math.round(width / targetRatio);
		}
		const left = Math.max(0, Math.round((width - cropW) / 2));
		const top = Math.max(0, Math.round((height - cropH) * 0.35));
		img = img.extract({ left, top, width: cropW, height: cropH });
	}

	return img.resize({ width: 1920, withoutEnlargement: true });
}

async function composeHackImage(baseBuffer, overlayPreset, asset = {}) {
	const preparedBuffer = await (await prepareBase(baseBuffer, asset)).toBuffer();
	const meta = await sharp(preparedBuffer).metadata();
	const width = meta.width ?? 1920;
	const height = meta.height ?? 1080;

	const overlaySvg = Buffer.from(buildOverlaySvg(width, height, overlayPreset));
	const darkened = await sharp(preparedBuffer)
		.modulate({ brightness: 0.94, saturation: 1.05 })
		.toBuffer();
	const overlayPng = await sharp(overlaySvg).png().toBuffer();

	return sharp(darkened)
		.composite([{ input: overlayPng, top: 0, left: 0 }])
		.webp({ quality: 86 })
		.toBuffer();
}

async function cleanImagesDir() {
	const files = await readdir(imagesDir).catch(() => []);
	for (const file of files) {
		if (file.includes('valorant-cheats-logo')) continue;
		if (file.includes('valorant-cheats-hero-home')) continue;
		if (REMOVE_PATTERNS.some((pattern) => pattern.test(file))) {
			await unlink(path.join(imagesDir, file));
			console.log(`Removed ${file}`);
		}
	}
}

async function generateBrandAssets(heroBuffer) {
	const BG = { r: 15, g: 25, b: 35, alpha: 1 };

	const logoBuffer = await sharp({
		create: { width: 512, height: 512, channels: 4, background: BG },
	})
		.composite([
			{
				input: Buffer.from(`
					<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
						<rect width="512" height="512" fill="#0f1923"/>
						<path d="M96 416 L256 96 L416 416 L336 416 L256 256 L176 416 Z" fill="#ff4655"/>
					</svg>
				`),
				top: 0,
				left: 0,
			},
		])
		.png()
		.toBuffer();

	await writeFile(path.join(imagesDir, 'valorant-cheats-logo.png'), logoBuffer);
	await writeFile(
		path.join(imagesDir, 'valorant-cheats-logo.webp'),
		await sharp(logoBuffer).webp({ quality: 90 }).toBuffer(),
	);

	for (const { name, size } of [
		{ name: 'favicon-16x16.png', size: 16 },
		{ name: 'favicon-32x32.png', size: 32 },
		{ name: 'apple-touch-icon.png', size: 180 },
		{ name: 'favicon.png', size: 192 },
	]) {
		await writeFile(
			path.join(publicDir, name),
			await sharp(logoBuffer).resize(size, size).png().toBuffer(),
		);
	}
	await writeFile(
		path.join(publicDir, 'favicon.ico'),
		await sharp(logoBuffer).resize(32, 32).png().toBuffer(),
	);

	const heroFull = await sharp(heroBuffer).png().toBuffer();
	await writeFile(path.join(imagesDir, 'valorant-cheats-hero-full.png'), heroFull);
}

await mkdir(imagesDir, { recursive: true });
await cleanImagesDir();

let heroBuffer = null;
let saved = 0;

for (const asset of KEYWORD_ASSETS) {
	console.log(`Fetching ${asset.file} (${asset.overlay} overlay)`);
	try {
		const base = await fetchBase(asset.url);
		const webp = await composeHackImage(base, asset.overlay, asset);
		await writeFile(path.join(imagesDir, asset.file), webp);
		console.log(`  ✓ ${asset.file} (${webp.length} bytes)`);
		saved++;
		if (asset.file === 'valorant-cheats-hero.webp') heroBuffer = webp;
	} catch (err) {
		console.warn(`  ✗ Skip ${asset.file}: ${err.message}`);
	}
}

if (heroBuffer) {
	await generateBrandAssets(heroBuffer);
	console.log('Generated logo + favicons from Valorant hero.');
}

/** Legacy aliases still referenced by Brand Studio gallery presets. */
const LEGACY_ALIASES = [
	['valorant-esp-player-tags.webp', 'valorant-cheats-esp.webp'],
	['valorant-wallhack-skeleton.webp', 'valorant-cheats-wallhack.webp'],
	['valorant-aimbot-sniper.webp', 'valorant-cheats-aimbot.webp'],
	['valorant-aimbot-skeleton.webp', 'valorant-cheats-aimbot-view.webp'],
	['valorant-esp-radar.webp', 'valorant-cheats-radar.webp'],
];

for (const [dest, src] of LEGACY_ALIASES) {
	try {
		const buf = await sharp(path.join(imagesDir, src)).webp({ quality: 86 }).toBuffer();
		await writeFile(path.join(imagesDir, dest), buf);
		console.log(`Alias ${dest} ← ${src}`);
	} catch {
		/* source may have failed fetch */
	}
}

console.log(`\nDone — ${saved}/${KEYWORD_ASSETS.length} Valorant images.`);
