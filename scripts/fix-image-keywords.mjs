#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const SIMPLE =
	"images: { hero: 'valorant cheats', espWallhack: 'valorant cheats wallhack', aimbotCombat: 'valorant cheats aimbot', squadFight: 'valorant cheats', playerEsp: 'valorant cheats esp', headerArt: 'valorant cheats aimbot', cheatsPackage: 'valorant cheats radar', rebootFight: 'valorant cheats aimbot', battleRoyale: 'valorant cheats', battleRoyaleIsland: 'valorant cheats esp' }";

const re =
	/images: \{ hero: '[^']+', espWallhack: '[^']+', aimbotCombat: '[^']+', squadFight: '[^']+', playerEsp: '[^']+', headerArt: '[^']+', cheatsPackage: '[^']+', rebootFight: '[^']+', battleRoyale: '[^']+', battleRoyaleIsland: '[^']+' \}/g;

for (const f of ['scripts/i18n-data/ui-strings-part1.mjs', 'scripts/i18n-data/ui-strings-part2.mjs']) {
	const c = readFileSync(f, 'utf8');
	const n = c.replace(re, SIMPLE);
	writeFileSync(f, n);
	console.log(f, (c.match(re) || []).length, 'image blocks simplified');
}

const altMap = [
	["imageAlt: 'Valorant ESP player tags hack'", "imageAlt: 'valorant cheats esp'"],
	["imageAlt: 'Valorant ESP radar hack'", "imageAlt: 'valorant cheats radar'"],
	["imageAlt: 'Valorant aimbot sniper kill'", "imageAlt: 'valorant cheats aimbot'"],
	["imageAlt: 'Valorant aimbot skeleton targeting'", "imageAlt: 'valorant cheats aimbot'"],
	["imageAlt: 'Valorant cheats ADS combat'", "imageAlt: 'valorant cheats'"],
	["imageAlt: 'Valorant cheats setup PC activation'", "imageAlt: 'valorant cheats'"],
	["imageAlt: 'Valorant cheats updates Vanguard maintenance'", "imageAlt: 'valorant cheats'"],
	["imageAlt: 'Valorant cheats FAQ ESP aimbot'", "imageAlt: 'valorant cheats'"],
	["imageAlt: 'Valorant cheats support license help'", "imageAlt: 'valorant cheats'"],
	["imageAlt: 'Undetected valorant cheats ESP wallhack'", "imageAlt: 'undetected valorant cheats'"],
	["imageAlt: 'Valorant wallhack skeleton ESP'", "imageAlt: 'valorant cheats wallhack'"],
	["imageAlt: 'Vanguard bypass valorant ESP aimbot'", "imageAlt: 'valorant cheats vanguard'"],
	["imageAlt: 'Valorant cheats 2026 ESP aimbot'", "imageAlt: 'valorant cheats'"],
	["imageAlt: 'Valorant cheats combat aimbot'", "imageAlt: 'valorant cheats'"],
	["imageAlt: 'Valorant cheat download ESP aimbot'", "imageAlt: 'valorant cheats download'"],
	["imageAlt: 'Valorant mod menu ESP aimbot'", "imageAlt: 'valorant cheats mod menu'"],
	["imageAlt: 'Valorant soft aim aimbot settings'", "imageAlt: 'valorant cheats soft aim'"],
	["imageAlt: 'Best valorant cheats 2026 ESP'", "imageAlt: 'best valorant cheats'"],
	["imageAlt: 'Valorant aimbot hack combat'", "imageAlt: 'valorant cheats aimbot'"],
	["imageAlt: 'Valorant ESP hack wallhack'", "imageAlt: 'valorant cheats esp'"],
	["imageAlt: 'Valorant unlock all ESP aimbot guide'", "imageAlt: 'valorant cheats'"],
	["imageAlt: 'Valorant cheats privacy policy'", "imageAlt: 'valorant cheats'"],
	["imageAlt: 'Valorant cheats refund policy'", "imageAlt: 'valorant cheats'"],
	["imageAlt: 'Valorant cheats terms of use'", "imageAlt: 'valorant cheats'"],
];

let pages = readFileSync('scripts/i18n-data/pages-en.mjs', 'utf8');
for (const [from, to] of altMap) pages = pages.split(from).join(to);
writeFileSync('scripts/i18n-data/pages-en.mjs', pages);
console.log('pages-en imageAlts simplified');

// productPage() imageAlt template in pages-i18n
let i18n = readFileSync('scripts/i18n-data/pages-i18n.mjs', 'utf8');
i18n = i18n
	.split("imageAlt: `Valorant ${meta.altKeyword}`")
	.join("imageAlt: 'valorant cheats'")
	.split("galleryTitle: `Valorant Cheats ${topicName}`")
	.join("galleryTitle: 'valorant cheats'")
	.split("imageAlt: `Valorant cheats ${kind} policy`")
	.join("imageAlt: 'valorant cheats'")
	.split("galleryTitle: `Valorant Cheats ${kind} resources`")
	.join("galleryTitle: 'valorant cheats'");
writeFileSync('scripts/i18n-data/pages-i18n.mjs', i18n);
console.log('pages-i18n image alts simplified');
