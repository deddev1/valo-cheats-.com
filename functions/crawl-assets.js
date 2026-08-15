/** Paths Google Search Console and crawlers must receive as plain XML/text — never HTML 404. */
export const CRAWL_ASSET_PATH =
	/^\/(?:robots\.txt|sitemap(?:-[a-z]{2}|-i18n|-images)?\.xml)$/;

const XML_PEEK_BYTES = 256;

/** Headers that can interfere with crawler fetches of robots/sitemap files. */
const CRAWL_STRIPPED_HEADERS = [
	'Content-Security-Policy',
	'Cross-Origin-Embedder-Policy',
	'Cross-Origin-Opener-Policy',
	'Cross-Origin-Resource-Policy',
	'Origin-Agent-Cluster',
	'Permissions-Policy',
	'X-Frame-Options',
];

export function isCrawlAssetPath(pathname) {
	return CRAWL_ASSET_PATH.test(pathname);
}

function xmlNotFoundBody() {
	return '<?xml version="1.0" encoding="UTF-8"?><error>Sitemap not found</error>\n';
}

function looksLikeHtmlBody(body) {
	const start = body.trimStart().slice(0, 32).toLowerCase();
	return start.startsWith('<!doctype') || start.startsWith('<html');
}

function stripCrawlHeaders(headers) {
	for (const name of CRAWL_STRIPPED_HEADERS) {
		headers.delete(name);
	}
}

function xmlNotFoundResponse() {
	return new Response(xmlNotFoundBody(), {
		status: 404,
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'no-store',
		},
	});
}

async function peekResponseBody(response, maxBytes = XML_PEEK_BYTES) {
	const reader = response.clone().body?.getReader();
	if (!reader) return '';
	const { value } = await reader.read();
	await reader.cancel();
	if (!value) return '';
	return new TextDecoder().decode(value.slice(0, maxBytes));
}

function crawlXmlHeaders(sourceHeaders) {
	const headers = new Headers(sourceHeaders);
	stripCrawlHeaders(headers);
	headers.set('Content-Type', 'application/xml; charset=utf-8');
	headers.set('Cache-Control', 'public, max-age=3600, must-revalidate');
	headers.set('CDN-Cache-Control', 'public, max-age=300, must-revalidate');
	return headers;
}

/** Normalize robots/sitemap responses so GSC never receives HTML with an XML content type. */
export async function finalizeCrawlAssetResponse(pathname, response) {
	if (pathname.endsWith('.xml')) {
		const contentType = response.headers.get('Content-Type') || '';

		if (!response.ok || contentType.includes('text/html')) {
			return xmlNotFoundResponse();
		}

		const peek = await peekResponseBody(response);
		if (looksLikeHtmlBody(peek)) {
			return xmlNotFoundResponse();
		}

		return new Response(response.body, {
			status: response.status,
			headers: crawlXmlHeaders(response.headers),
		});
	}

	if (pathname === '/robots.txt') {
		if (!response.ok) {
			return new Response('User-agent: *\nDisallow:\n', {
				status: 404,
				headers: {
					'Content-Type': 'text/plain; charset=utf-8',
					'Cache-Control': 'no-store',
				},
			});
		}

		const body = await response.text();
		const headers = new Headers(response.headers);
		stripCrawlHeaders(headers);
		headers.set('Content-Type', 'text/plain; charset=utf-8');
		headers.set('Cache-Control', 'public, max-age=3600');
		headers.set('CDN-Cache-Control', 'public, max-age=300');
		return new Response(body, { status: response.status, headers });
	}

	return response;
}
