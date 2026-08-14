import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve('.');
const publicDir = path.join(root, 'public');
const imagesDir = path.join(publicDir, 'images');
const heroPath = path.join(imagesDir, 'valorant-cheats-hero.webp');

const BG = { r: 15, g: 25, b: 35, alpha: 1 }; // #0f1923

async function squareLogoBuffer(size) {
	return sharp({
		create: { width: size, height: size, channels: 4, background: BG },
	})
		.composite([
			{
				input: Buffer.from(`
					<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
						<rect width="${size}" height="${size}" fill="#0f1923"/>
						<path d="M${size * 0.19} ${size * 0.81} L${size * 0.5} ${size * 0.19} L${size * 0.81} ${size * 0.81} L${size * 0.66} ${size * 0.81} L${size * 0.5} ${size * 0.5} L${size * 0.34} ${size * 0.81} Z" fill="#ff4655"/>
					</svg>
				`),
				top: 0,
				left: 0,
			},
		])
		.png()
		.toBuffer();
}

async function generateSiteLogo() {
	const logoPng = await squareLogoBuffer(512);
	await writeFile(path.join(imagesDir, 'valorant-cheats-logo.png'), logoPng);
	console.log('Wrote public/images/valorant-cheats-logo.png (512×512)');

	const logoWebp = await sharp(logoPng).webp({ quality: 90, effort: 6 }).toBuffer();
	await writeFile(path.join(imagesDir, 'valorant-cheats-logo.webp'), logoWebp);
	console.log('Wrote public/images/valorant-cheats-logo.webp');
	return logoPng;
}

async function generateFavicons(logoBuffer) {
	const sizes = [
		{ name: 'favicon-16x16.png', size: 16 },
		{ name: 'favicon-32x32.png', size: 32 },
		{ name: 'apple-touch-icon.png', size: 180 },
		{ name: 'favicon.png', size: 192 },
	];

	for (const { name, size } of sizes) {
		await writeFile(
			path.join(publicDir, name),
			await sharp(logoBuffer).resize(size, size).png().toBuffer(),
		);
		console.log(`Wrote public/${name}`);
	}

	await writeFile(
		path.join(publicDir, 'favicon.ico'),
		await sharp(logoBuffer).resize(32, 32).png().toBuffer(),
	);
	console.log('Wrote public/favicon.ico (32×32 PNG)');
}

async function generateWebManifest() {
	const manifest = {
		name: 'Valorant Cheats',
		short_name: 'Valorant Cheats',
		description: 'Undetected valorant cheats — ESP, aimbot, radar and for PC',
		start_url: '/',
		display: 'standalone',
		background_color: '#0f1923',
		theme_color: '#0f1923',
		icons: [
			{ src: '/favicon.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
			{ src: '/favicon.png', sizes: '192x192', type: 'image/png', purpose: 'maskable' },
			{ src: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
		],
	};
	await writeFile(path.join(publicDir, 'site.webmanifest'), `${JSON.stringify(manifest, null, 2)}\n`);
	console.log('Wrote public/site.webmanifest');
}

await mkdir(imagesDir, { recursive: true });
const logoBuffer = await generateSiteLogo();
await generateFavicons(logoBuffer);
await generateWebManifest();

if (await sharp(heroPath).metadata().catch(() => null)) {
	const heroFull = await sharp(heroPath).png().toBuffer();
	await writeFile(path.join(imagesDir, 'valorant-cheats-hero-full.png'), heroFull);
	console.log('Wrote public/images/valorant-cheats-hero-full.png');
}

console.log('Brand assets generated.');
