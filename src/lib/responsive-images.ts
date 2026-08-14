/**
 * Responsive image helpers — homepage hero uses lossless PNG (no WebP compression).
 */

export interface ResponsiveWidth {
	src: string;
	width: number;
}

/** Build a srcset string from width-tagged image paths. */
export function buildSrcSet(widths: ResponsiveWidth[]): string | undefined {
	if (widths.length === 0) return undefined;
	if (widths.length === 1) return `${widths[0].src} ${widths[0].width}w`;
	return widths.map(({ src, width }) => `${src} ${width}w`).join(', ');
}

/** Build srcset for content images that have -480w / -960w variants. */
export function contentSrcSet(baseSrc: string): string | undefined {
	const match = baseSrc.match(/^(.+\/)(.+)\.webp$/i);
	if (!match) return undefined;

	const [, dir, name] = match;
	if (
		name.endsWith('-640w') ||
		name.endsWith('-960w') ||
		name.endsWith('-1400w') ||
		name.endsWith('-1024w') ||
		name.endsWith('-1536w') ||
		name.endsWith('-480w')
	) {
		return undefined;
	}

	return buildSrcSet(
		contentWidths.map((width) => ({
			src: `${dir}${name}-${width}w.webp`,
			width,
		})),
	);
}

/** Homepage hero — lossless PNG master + WebP srcset for fast loads. */
export const heroResponsive: ResponsiveWidth[] = [
	{ src: '/images/valorant-cheats-hero-home.png', width: 1795 },
];

export const heroWebpResponsive: ResponsiveWidth[] = [
	{ src: '/images/valorant-cheats-hero-home-640w.webp', width: 640 },
	{ src: '/images/valorant-cheats-hero-home-960w.webp', width: 960 },
	{ src: '/images/valorant-cheats-hero-home-1400w.webp', width: 1400 },
];

export const heroDesktopResponsive: ResponsiveWidth[] = heroResponsive;

/** Default LCP src — PNG fallback for OG/schema; browsers prefer WebP via picture. */
export const heroSrc = '/images/valorant-cheats-hero-home.png';
export const heroSrcSet = buildSrcSet(heroResponsive);
export const heroWebpSrcSet = buildSrcSet(heroWebpResponsive);
export const heroSizes = '100vw';

/** LCP preload — smallest WebP likely to cover initial viewport through port forward. */
export const heroPreloadSrc = '/images/valorant-cheats-hero-home-960w.webp';
export const heroPreloadSrcSet = heroWebpSrcSet;
export const heroMimeType = 'image/webp';

/** Native dimensions of valorant-cheats-hero-home.png */
export const heroWidth = 1795;
export const heroHeight = 876;

/** Responsive widths for below-fold content images. */
export const contentWidths = [480, 960] as const;

export const galleryFeaturedSizes = '(max-width: 560px) 100vw, (max-width: 900px) 90vw, 640px';
export const galleryTileSizes = '(max-width: 560px) 100vw, (max-width: 900px) 45vw, 320px';
export const productMainSizes = '(max-width: 900px) 100vw, 640px';
export const productThumbSizes = '160px';
