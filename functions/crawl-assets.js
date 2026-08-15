/** Paths Google Search Console and crawlers must receive as plain XML/text — never HTML 404. */
export const CRAWL_ASSET_PATH =
	/^\/(?:robots\.txt|sitemap(?:-[a-z]{2}|\.en|-i18n|-images)?\.xml)$/;

export function isCrawlAssetPath(pathname) {
	return CRAWL_ASSET_PATH.test(pathname);
}

function xmlNotFoundBody() {
	return '<?xml version="1.0" encoding="UTF-8"?><error>Sitemap not found</error>\n';
}

/** Normalize robots/sitemap responses so GSC never receives HTML with an XML content type. */
export function finalizeCrawlAssetResponse(pathname, response) {
	if (pathname.endsWith('.xml')) {
		const contentType = response.headers.get('Content-Type') || '';
		const looksLikeHtml = contentType.includes('text/html');

		if (!response.ok || looksLikeHtml) {
			return new Response(xmlNotFoundBody(), {
				status: 404,
				headers: {
					'Content-Type': 'application/xml; charset=utf-8',
					'Cache-Control': 'no-store',
				},
			});
		}

		const headers = new Headers(response.headers);
		headers.set('Content-Type', 'application/xml; charset=utf-8');
		if (!headers.has('Cache-Control')) {
			headers.set('Cache-Control', 'public, max-age=3600');
		}
		return new Response(response.body, { status: response.status, headers });
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

		const headers = new Headers(response.headers);
		headers.set('Content-Type', 'text/plain; charset=utf-8');
		if (!headers.has('Cache-Control')) {
			headers.set('Cache-Control', 'public, max-age=3600');
		}
		return new Response(response.body, { status: response.status, headers });
	}

	return response;
}
