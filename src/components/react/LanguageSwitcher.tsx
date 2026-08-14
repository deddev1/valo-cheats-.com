import { useEffect, useMemo, useRef } from 'react';
import { useTranslation } from 'react-i18next';

export type LocaleMeta = {
	code: string;
	name: string;
	nativeName: string;
	hreflang: string;
	region: string;
};

type Props = {
	currentLocale: string;
	locales: LocaleMeta[];
	hrefForLocale: Record<string, string>;
};

export default function LanguageSwitcher({ currentLocale, locales, hrefForLocale }: Props) {
	const { t } = useTranslation();
	const panelRef = useRef<HTMLDivElement>(null);
	const currentMeta = useMemo(
		() => locales.find((l) => l.code === currentLocale) ?? locales[0],
		[locales, currentLocale],
	);

	useEffect(() => {
		const panel = panelRef.current;
		if (!panel) return;

		const onWheel = (event: WheelEvent) => {
			if (panel.scrollHeight <= panel.clientHeight) return;
			const atTop = panel.scrollTop <= 0;
			const atBottom = panel.scrollTop + panel.clientHeight >= panel.scrollHeight - 1;
			const scrollingUp = event.deltaY < 0;
			const scrollingDown = event.deltaY > 0;
			if ((scrollingUp && atTop) || (scrollingDown && atBottom)) return;
			event.stopPropagation();
		};

		let touchStartY = 0;
		const onTouchStart = (event: TouchEvent) => {
			touchStartY = event.touches[0]?.clientY ?? 0;
		};

		const onTouchMove = (event: TouchEvent) => {
			if (panel.scrollHeight <= panel.clientHeight) return;
			const touchY = event.touches[0]?.clientY ?? touchStartY;
			const deltaY = touchStartY - touchY;
			const atTop = panel.scrollTop <= 0;
			const atBottom = panel.scrollTop + panel.clientHeight >= panel.scrollHeight - 1;
			if ((deltaY < 0 && atTop) || (deltaY > 0 && atBottom)) return;
			event.stopPropagation();
		};

		panel.addEventListener('wheel', onWheel, { passive: true });
		panel.addEventListener('touchstart', onTouchStart, { passive: true });
		panel.addEventListener('touchmove', onTouchMove, { passive: true });

		return () => {
			panel.removeEventListener('wheel', onWheel);
			panel.removeEventListener('touchstart', onTouchStart);
			panel.removeEventListener('touchmove', onTouchMove);
		};
	}, []);

	return (
		<details className="lang-switcher">
			<summary className="lang-switcher__toggle" aria-label={t('common.selectLanguage')}>
				<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
					<circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
					<path
						d="M3 12h18M12 3c2.5 2.8 3.8 6 3.8 9s-1.3 6.2-3.8 9M12 3c-2.5 2.8-3.8 6-3.8 9s1.3 6.2 3.8 9"
						stroke="currentColor"
						strokeWidth="1.6"
					/>
				</svg>
				<span>{currentMeta.nativeName}</span>
			</summary>
			<div className="lang-switcher__panel" ref={panelRef}>
				<p className="lang-switcher__note">
					{currentLocale === 'en' ? t('common.englishOfficial') : t('common.englishIsOfficial')}
				</p>
				<ul className="lang-switcher__list">
					{locales.map((locale) => {
						const href = hrefForLocale[locale.code] ?? `/${locale.code}/`;
						const isCurrent = locale.code === currentLocale;
						return (
							<li key={locale.code}>
								<a
									href={href}
									hrefLang={locale.hreflang}
									lang={locale.code}
									className={`lang-switcher__link${isCurrent ? ' is-current' : ''}`}
									aria-current={isCurrent ? 'page' : undefined}
									data-locale={locale.code}
									onClick={() => {
										document.cookie = `fc_locale=${locale.code};path=/;max-age=31536000;SameSite=Lax`;
									}}
								>
									<span className="lang-switcher__native">{locale.nativeName}</span>
									<span className="lang-switcher__region">{locale.region}</span>
								</a>
							</li>
						);
					})}
				</ul>
			</div>
		</details>
	);
}
