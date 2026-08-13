import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta } from './constants.mjs';
import { phrases } from './phrases.mjs';
import { PAGE_IMAGE_ALTS } from './image-alts.mjs';

/** Page-specific translated meta for home across locales. */
const PAGE_META_HOME = {
	es: { title: 'Valorant Cheats 2026 | ESP, Wallhack y Aimbot', desc: 'Trucos Valorant indetectables para Valorant en PC. ESP wallhack, radar hack y Aimbot con mantenimiento Vanguard anti-cheat. Entrega digital instantánea.', h1: 'Valorant Cheats — ESP, Wallhack y Aimbot indetectables', intro: 'Paquete undetected para Valorant en Windows PC: ESP wallhack, radar y Aimbot con mantenimiento Vanguard anti-cheat tras cada parche.', imageAlt: 'Valorant ESP player tags hack', gallery: 'Galería Valorant Cheats — ESP, Aimbot y wallhack', cta2: 'Ver funciones', h2a: 'Por qué eligen Valorant Cheats en 2026', h2b: 'ESP wallhack, radar y Aimbot en una licencia', topicA: 'Ideal para leer escuadrones enemigos en BR y deathmatch.', topicB: 'Una licencia en lugar de herramientas separadas.' },
	fr: { title: 'Valorant Cheats 2026 | ESP, Wallhack et Aimbot', desc: 'Triches Valorant indétectables pour Valorant sur PC. ESP wallhack, radar hack et Aimbot avec maintenance Vanguard anti-cheat. Livraison numérique instantanée.', h1: 'Valorant Cheats — ESP, Wallhack et Aimbot indétectables', intro: 'Pack undetected pour Valorant sur PC Windows : ESP wallhack, radar et Aimbot avec maintenance Vanguard anti-cheat après chaque patch.', imageAlt: 'Valorant ESP player tags hack', gallery: 'Galerie Valorant Cheats — ESP, Aimbot et wallhack', cta2: 'Voir les fonctions', h2a: 'Pourquoi choisir Valorant Cheats en 2026', h2b: 'ESP wallhack, radar et Aimbot en une licence', topicA: 'Parfait pour lire les escouades ennemies en BR et deathmatch.', topicB: 'Une licence au lieu d\'outils séparés.' },
	de: { title: 'Valorant Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Valorant Cheats für Valorant auf PC. ESP Wallhack, Radar Hack und Aimbot mit Vanguard anti-cheat-Wartung. Sofortige digitale Lieferung.', h1: 'Valorant Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC Paket für Valorant: ESP Wallhack, Radar und Aimbot mit Vanguard anti-cheat-Wartung nach jedem Patch.', imageAlt: 'Valorant ESP player tags hack', gallery: 'Valorant Cheats Galerie — ESP, Aimbot und Wallhack', cta2: 'Features ansehen', h2a: 'Warum Valorant Cheats 2026 führt', h2b: 'ESP Wallhack, Radar und Aimbot in einer Lizenz', topicA: 'Ideal um feindliche Squads in BR und deathmatch zu lesen.', topicB: 'Eine Lizenz statt separater Tools.' },
	pt: { title: 'Valorant Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheats Valorant indetectáveis para Valorant no PC. ESP wallhack, radar hack e Aimbot com manutenção Vanguard anti-cheat. Entrega digital instantánea.', h1: 'Valorant Cheats — ESP, Wallhack e Aimbot indetectáveis', intro: 'Pacote undetected para Valorant no Windows PC: ESP wallhack, radar e Aimbot com manutenção Vanguard anti-cheat após cada patch.', imageAlt: 'Valorant ESP player tags hack', gallery: 'Galeria Valorant Cheats — ESP, Aimbot e wallhack', cta2: 'Ver recursos', h2a: 'Por que escolher Valorant Cheats em 2026', h2b: 'ESP wallhack, radar e Aimbot numa licença', topicA: 'Ideal para ler esquadrões inimigos em BR e deathmatch.', topicB: 'Uma licença em vez de ferramentas separadas.' },
	it: { title: 'Valorant Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheat Valorant indetectable per Valorant su PC. ESP wallhack, radar hack e Aimbot con manutenzione Vanguard anti-cheat. Consegna digitale istantanea.', h1: 'Valorant Cheats — ESP, Wallhack e Aimbot indetectable', intro: 'Pacchetto undetected per Valorant su PC Windows: ESP wallhack, radar e Aimbot con manutenzione Vanguard anti-cheat dopo ogni patch.', imageAlt: 'Valorant ESP player tags hack', gallery: 'Galleria Valorant Cheats — ESP, Aimbot e wallhack', cta2: 'Vedi funzioni', h2a: 'Perché scegliere Valorant Cheats nel 2026', h2b: 'ESP wallhack, radar e Aimbot in una licenza', topicA: 'Ideale per leggere squadre nemiche in BR e deathmatch.', topicB: 'Una licenza invece di tool separati.' },
	nl: { title: 'Valorant Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Valorant cheats voor Valorant op PC. ESP wallhack, radar hack en Aimbot met Vanguard anti-cheat-onderhoud. Directe digitale levering.', h1: 'Valorant Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC pakket voor Valorant: ESP wallhack, radar en Aimbot met Vanguard anti-cheat-onderhoud na elke patch.', imageAlt: 'Valorant ESP player tags hack', gallery: 'Valorant Cheats galerij — ESP, Aimbot en wallhack', cta2: 'Bekijk functies', h2a: 'Waarom Valorant Cheats in 2026', h2b: 'ESP wallhack, radar en Aimbot in één licentie', topicA: 'Ideaal om vijandelijke squads te lezen in BR en deathmatch.', topicB: 'Eén licentie in plaats van losse tools.' },
	pl: { title: 'Valorant Cheats 2026 | ESP, Wallhack i Aimbot', desc: 'Undetected cheaty Valorant dla Valorant na PC. ESP wallhack, radar hack i Aimbot z konserwacją Vanguard anti-cheat. Natychmiastowa dostawa cyfrowa.', h1: 'Valorant Cheats — Undetected ESP, Wallhack i Aimbot', intro: 'Pakiet undetected dla Valorant na Windows PC: ESP wallhack, radar i Aimbot z konserwacją Vanguard anti-cheat po każdym patchu.', imageAlt: 'Valorant ESP player tags hack', gallery: 'Galeria Valorant Cheats — ESP, Aimbot i wallhack', cta2: 'Zobacz funkcje', h2a: 'Dlaczego Valorant Cheats w 2026', h2b: 'ESP wallhack, radar i Aimbot w jednej licencji', topicA: 'Idealny do czytania wrogich squadów w BR i deathmatch.', topicB: 'Jedna licencja zamiast osobnych narzędzi.' },
	ru: { title: 'Valorant Cheats 2026 | ESP, Wallhack и Aimbot', desc: 'Undetected читы Valorant для Valorant на PC. ESP wallhack, radar hack и Aimbot с обслуживанием Vanguard anti-cheat. Мгновенная цифровая доставка.', h1: 'Valorant Cheats — Undetected ESP, Wallhack и Aimbot', intro: 'Undetected пакет для Valorant на Windows PC: ESP wallhack, radar и Aimbot с обслуживанием Vanguard anti-cheat после патчей.', imageAlt: 'Valorant ESP player tags hack', gallery: 'Галерея Valorant Cheats — ESP, Aimbot и wallhack', cta2: 'Смотреть функции', h2a: 'Почему выбирают Valorant Cheats в 2026', h2b: 'ESP wallhack, radar и Aimbot в одной лицензии', topicA: 'Идеально для чтения вражеских отрядов в BR и deathmatch.', topicB: 'Одна лицензия вместо отдельных инструментов.' },
	tr: { title: 'Valorant Cheats 2026 | ESP, Wallhack ve Aimbot', desc: 'Valorant için undetected hileler. ESP wallhack, radar hack ve Aimbot — Vanguard anti-cheat bakımı. Anında dijital teslimat.', h1: 'Valorant Cheats — Undetected ESP, Wallhack ve Aimbot', intro: 'Valorant Windows PC undetected paketi: ESP wallhack, radar ve Aimbot — Vanguard anti-cheat bakımı dahil.', imageAlt: 'Valorant ESP player tags hack', gallery: 'Valorant Cheats galeri — ESP, Aimbot ve wallhack', cta2: 'Özellikleri gör', h2a: '2026\'da neden Valorant Cheats', h2b: 'ESP wallhack, radar ve Aimbot tek lisans', topicA: 'BR ve deathmatch\'da düşman squad okumak için ideal.', topicB: 'Ayrı araçlar yerine tek lisans.' },
	ar: { title: 'Valorant Cheats 2026 | ESP وWallhack وAimbot', desc: 'غش Valorant undetected لـ Valorant على PC. ESP wallhack ورadar hack وAimbot مع صيانة Vanguard anti-cheat. تسليم رقمي فوري.', h1: 'Valorant Cheats — ESP وWallhack وAimbot غير مكتشف', intro: 'حزمة undetected لـ Valorant على Windows PC: ESP wallhack ورadar وAimbot مع صيانة Vanguard anti-cheat.', imageAlt: 'Valorant ESP player tags hack', gallery: 'معرض Valorant Cheats — ESP وAimbot وwallhack', cta2: 'عرض الميزات', h2a: 'لماذا Valorant Cheats في 2026', h2b: 'ESP wallhack ورadar وAimbot في ترخيص واحد', topicA: 'مثالي لقراءة فرق العدو في BR وdeathmatch.', topicB: 'ترخيص واحد بدلاً من أدوات منفصلة.' },
	ja: { title: 'Valorant Cheats 2026 | ESP・Wallhack・Aimbot', desc: 'Valorant向けundetectedチート。ESP wallhack、radar hack、Aimbot、Vanguard anti-cheatメンテナンス。即時デジタル配信。', h1: 'Valorant Cheats — Undetected ESP・Wallhack・Aimbot', intro: 'Valorant Windows PC向けundetectedパッケージ：ESP wallhack、radar、Aimbot、Vanguard anti-cheatメンテナンス付き。', imageAlt: 'Valorant cheats hero ESP aimbot wallhack', gallery: 'Valorant Cheatsギャラリー — ESP、Aimbot、wallhack', cta2: '機能を見る', h2a: '2026年にValorant Cheatsを選ぶ理由', h2b: 'ESP wallhack、radar、Aimbotが1ライセンス', topicA: 'BRとdeathmatchで敵スクワッドを読むのに最適。', topicB: '別ツールではなく1ライセンス。' },
	ko: { title: 'Valorant Cheats 2026 | ESP, Wallhack, Aimbot', desc: 'Valorant undetected 치트. ESP wallhack, radar hack, Aimbot, Vanguard anti-cheat 유지보수. 즉시 디지털 배송.', h1: 'Valorant Cheats — Undetected ESP, Wallhack, Aimbot', intro: 'Valorant Windows PC undetected 패키지: ESP wallhack, radar, Aimbot, Vanguard anti-cheat 유지보수 포함.', imageAlt: 'Valorant cheats hero ESP aimbot wallhack', gallery: 'Valorant Cheats 갤러리 — ESP, Aimbot, wallhack', cta2: '기능 보기', h2a: '2026년 Valorant Cheats를 선택하는 이유', h2b: 'ESP wallhack, radar, Aimbot 단일 라이선스', topicA: 'BR 및 deathmatch에서 적 분대 읽기에 이상적.', topicB: '별도 도구 대신 단일 라이선스.' },
	zh: { title: 'Valorant Cheats 2026 | ESP、Wallhack、Aimbot', desc: 'Valorant undetected作弊。ESP wallhack、radar hack、Aimbot、Vanguard anti-cheat维护。即时数字交付。', h1: 'Valorant Cheats — Undetected ESP、Wallhack、Aimbot', intro: 'Valorant Windows PC undetected套餐：ESP wallhack、radar、Aimbot，含Vanguard anti-cheat维护。', imageAlt: 'Valorant cheats hero ESP aimbot wallhack', gallery: 'Valorant Cheats图库 — ESP、Aimbot、wallhack', cta2: '查看功能', h2a: '2026年选择Valorant Cheats的原因', h2b: 'ESP wallhack、radar、Aimbot单一许可证', topicA: '适合在BR和deathmatch中读取敌方小队。', topicB: '一个许可证而非多个工具。' },
	hi: { title: 'Valorant Cheats 2026 | ESP, Wallhack और Aimbot', desc: 'Valorant undetected cheats. ESP wallhack, radar hack, Aimbot, Vanguard maintenance. Instant digital delivery.', h1: 'Valorant Cheats — Undetected ESP, Wallhack और Aimbot', intro: 'Valorant Windows PC undetected पैकेज: ESP wallhack, radar, Aimbot, Vanguard maintenance सहित.', imageAlt: 'Valorant cheats hero ESP aimbot wallhack', gallery: 'Valorant Cheats gallery — ESP, Aimbot, wallhack', cta2: 'फ़ीचर्स देखें', h2a: '2026 में Valorant Cheats क्यों', h2b: 'ESP wallhack, radar, Aimbot एक लाइसेंस में', topicA: 'BR और deathmatch में दुश्मन squad पढ़ने के लिए आदर्श.', topicB: 'अलग टूल्स के बजाय एक लाइसेंस.' },
	id: { title: 'Valorant Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Valorant undetected untuk Valorant di PC. ESP wallhack, radar hack, Aimbot, pemeliharaan Vanguard anti-cheat. Pengiriman digital instan.', h1: 'Valorant Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Paket undetected Valorant di Windows PC: ESP wallhack, radar, Aimbot dengan pemeliharaan Vanguard anti-cheat.', imageAlt: 'Valorant ESP player tags hack', gallery: 'Galeri Valorant Cheats — ESP, Aimbot, wallhack', cta2: 'Lihat fitur', h2a: 'Mengapa Valorant Cheats di 2026', h2b: 'ESP wallhack, radar, Aimbot dalam satu lisensi', topicA: 'Ideal membaca squad musuh di BR dan deathmatch.', topicB: 'Satu lisensi alih-alih alat terpisah.' },
	th: { title: 'Valorant Cheats 2026 | ESP, Wallhack และ Aimbot', desc: 'Cheat Valorant undetected สำหรับ Valorant บน PC. ESP wallhack, radar hack, Aimbot, Vanguard maintenance. จัดส่งดิจิทัลทันที.', h1: 'Valorant Cheats — Undetected ESP, Wallhack และ Aimbot', intro: 'แพ็ก undetected สำหรับ Valorant บน Windows PC: ESP wallhack, radar, Aimbot พร้อม Vanguard maintenance', imageAlt: 'Valorant ESP player tags hack', gallery: 'แกลเลอรี Valorant Cheats — ESP, Aimbot, wallhack', cta2: 'ดูฟีเจอร์', h2a: 'ทำไมเลือก Valorant Cheats ปี 2026', h2b: 'ESP wallhack, radar, Aimbot ในใบอนุญาตเดียว', topicA: 'เหมาะสำหรับอ่าน squad ศัตรูใน BR และ deathmatch', topicB: 'ใบอนุญาตเดียวแทนเครื่องมือแยก' },
	vi: { title: 'Valorant Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Valorant undetected cho Valorant trên PC. ESP wallhack, radar hack, Aimbot, bảo trì Vanguard anti-cheat. Giao hàng kỹ thuật số tức thì.', h1: 'Valorant Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Gói undetected Valorant trên Windows PC: ESP wallhack, radar, Aimbot với bảo trì Vanguard anti-cheat.', imageAlt: 'Valorant ESP player tags hack', gallery: 'Thư viện Valorant Cheats — ESP, Aimbot, wallhack', cta2: 'Xem tính năng', h2a: 'Vì sao chọn Valorant Cheats 2026', h2b: 'ESP wallhack, radar, Aimbot trong một giấy phép', topicA: 'Lý tưởng đọc squad địch trong BR và deathmatch.', topicB: 'Một giấy phép thay vì công cụ riêng.' },
	uk: { title: 'Valorant Cheats 2026 | ESP, Wallhack і Aimbot', desc: 'Undetected чіти Valorant для Valorant на PC. ESP wallhack, radar hack, Aimbot, обслуговування Vanguard anti-cheat. Мгновенная цифровая доставка.', h1: 'Valorant Cheats — Undetected ESP, Wallhack і Aimbot', intro: 'Undetected пакет для Valorant на Windows PC: ESP wallhack, radar, Aimbot з обслуговуванням Vanguard anti-cheat.', imageAlt: 'Valorant ESP player tags hack', gallery: 'Галерея Valorant Cheats — ESP, Aimbot, wallhack', cta2: 'Дивитися функції', h2a: 'Чому Valorant Cheats у 2026', h2b: 'ESP wallhack, radar і Aimbot в одній ліцензії', topicA: 'Ідеально для читання ворожих загонів у BR і deathmatch.', topicB: 'Одна ліцензія замість окремих інструментів.' },
	cs: { title: 'Valorant Cheats 2026 | ESP, Wallhack a Aimbot', desc: 'Undetected Valorant cheaty pro Valorant na PC. ESP wallhack, radar hack, Aimbot, údržba Vanguard anti-cheat. Okamžité digitální doručení.', h1: 'Valorant Cheats — Undetected ESP, Wallhack a Aimbot', intro: 'Undetected balíček pro Valorant na Windows PC: ESP wallhack, radar, Aimbot s údržbou Vanguard anti-cheat.', imageAlt: 'Valorant ESP player tags hack', gallery: 'Galerie Valorant Cheats — ESP, Aimbot, wallhack', cta2: 'Zobrazit funkce', h2a: 'Proč Valorant Cheats v roce 2026', h2b: 'ESP wallhack, radar a Aimbot v jedné licenci', topicA: 'Ideální pro čtení nepřátelských squadů v BR a deathmatch.', topicB: 'Jedna licence místo samostatných nástrojů.' },
	ro: { title: 'Valorant Cheats 2026 | ESP, Wallhack și Aimbot', desc: 'Cheats Valorant undetected pentru Valorant pe PC. ESP wallhack, radar hack, Aimbot, mentenanță Vanguard anti-cheat. Livrare digitală instantă.', h1: 'Valorant Cheats — Undetected ESP, Wallhack și Aimbot', intro: 'Pachet undetected Valorant pe Windows PC: ESP wallhack, radar, Aimbot cu mentenanță Vanguard anti-cheat.', imageAlt: 'Valorant ESP player tags hack', gallery: 'Galerie Valorant Cheats — ESP, Aimbot, wallhack', cta2: 'Vezi funcții', h2a: 'De ce Valorant Cheats în 2026', h2b: 'ESP wallhack, radar și Aimbot într-o licență', topicA: 'Ideal pentru citirea squad-urilor inamice în BR și deathmatch.', topicB: 'O licență în loc de instrumente separate.' },
	sv: { title: 'Valorant Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Valorant cheats för Valorant på PC. ESP wallhack, radar hack, Aimbot, Vanguard anti-cheat-underhåll. Omedelbar digital leverans.', h1: 'Valorant Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected paket för Valorant på Windows PC: ESP wallhack, radar, Aimbot med Vanguard anti-cheat-underhåll.', imageAlt: 'Valorant ESP player tags hack', gallery: 'Valorant Cheats galleri — ESP, Aimbot, wallhack', cta2: 'Se funktioner', h2a: 'Varför Valorant Cheats 2026', h2b: 'ESP wallhack, radar och Aimbot i en licens', topicA: 'Ideal för att läsa fiendesquads i BR och deathmatch.', topicB: 'En licens istället för separata verktyg.' },
};

function buildHome(locale) {
	const p = phrases[locale];
	const m = PAGE_META_HOME[locale];
	return {
		title: clampTitle(stripZadeyoFromMeta(m.title)),
		description: clampDesc(stripZadeyoFromMeta(m.desc)),
		h1: m.h1,
		intro: m.intro,
		imageAlt: m.imageAlt,
		galleryTitle: m.gallery,
		heroImage: HERO_IMAGES.home,
		ctaPrimary: p.buy,
		ctaSecondary: m.cta2,
		ctaSecondaryHref: '/features/',
		sections: [
			section(m.h2a, p.s1(m.topicA), p.s2()),
			section(m.h2b, p.s1(m.topicB), p.s3()),
		],
	};
}

/** Unique title/desc tails per page — English base + locale overrides for hero H1/subtitle. */
const PAGE_META_TAILS = {
	'valorant-esp': { suffix: 'Player Boxes & Wallhack', focus: 'player boxes, orb markers, and wallhack overlays', altKeyword: 'ESP wallhack overlay' },
	'valorant-aimbot': { suffix: 'Soft Aim Controls', focus: 'soft aim, FOV, and per-weapon Aimbot profiles', altKeyword: 'aimbot combat' },
	features: { suffix: 'Full Feature List', focus: 'ESP, soft aim, radar controls', altKeyword: 'cheats package ESP aimbot' },
	pricing: { suffix: 'Monthly & Lifetime', focus: '$35 monthly or $150 lifetime licenses', altKeyword: 'cheats pricing' },
	setup: { suffix: 'PC Setup Guide', focus: 'Windows PC activation and first-launch setup', altKeyword: 'setup PC activation' },
	updates: { suffix: 'Vanguard Maintenance Log', focus: 'Vanguard patch status and rebuild notes', altKeyword: 'updates Vanguard maintenance' },
	faq: { suffix: 'Common Answers', focus: 'ESP, soft aim, delivery, and Vanguard questions', altKeyword: 'FAQ ESP aimbot' },
	support: { suffix: 'Help & Contact', focus: 'order help and license support contact', altKeyword: 'support license help' },
	undetected: { suffix: 'Vanguard Safe Status', focus: 'undetected maintenance after Vanguard anti-cheat patches', altKeyword: 'undetected cheats ESP' },
	wallhack: { suffix: 'ESP Visibility', focus: 'wallhack ESP for players, loot, and distance', altKeyword: 'wallhack ESP visibility' },
	radar: { suffix: '2D Threat Overlay', focus: '2D radar cues for flanks and rotations', altKeyword: 'radar hack overlay' },
	vanguard: { suffix: 'Patch Maintenance', focus: 'how Vanguard updates are handled for Valorant hacks', altKeyword: 'Vanguard bypass ESP aimbot' },
	'cheats-2026': { suffix: 'Buyer Guide', focus: '2026 Valorant cheats checklist before checkout', altKeyword: 'cheats 2026 ESP aimbot' },
	hacks: { suffix: 'ESP Aimbot Guide', focus: 'the Valorant hacks pillar for ESP and Aimbot', altKeyword: 'hacks ESP aimbot' },
	'cheat-download': { suffix: 'Instant Access', focus: 'digital license download after payment', altKeyword: 'cheat download ESP aimbot' },
	'mod-menu': { suffix: 'In-Game Toggles', focus: 'in-client ESP and soft aim toggles', altKeyword: 'mod menu ESP aimbot' },
	'soft-aim': { suffix: 'Smooth Aim Settings', focus: 'smooth soft aim settings for Windows PC', altKeyword: 'soft aim aimbot' },
	'best-cheats': { suffix: 'Buyer Checklist', focus: 'what to compare before buying Valorant cheats', altKeyword: 'best cheats ESP aimbot' },
	'aimbot-hack': { suffix: 'Soft Aim Assist', focus: 'undetected Aimbot hack assist for Valorant', altKeyword: 'aimbot hack combat' },
	'esp-hack': { suffix: 'Boxes & Loot', focus: 'ESP hack boxes, loot pins, and distance', altKeyword: 'ESP hack wallhack' },
	'unlock-all': { suffix: 'What It Means', focus: 'unlock-all searches vs real ESP and Aimbot tools', altKeyword: 'unlock all ESP aimbot' },
};

/** Localized H1 suffixes (title/subtitle language change on product pages). */
const SUFFIX_I18N = {
	es: {
		'valorant-esp': 'Cajas de jugador y wallhack',
		'valorant-aimbot': 'Controles soft aim',
		features: 'Lista completa de funciones',
		pricing: 'Mensual y de por vida',
		setup: 'Guía de instalación PC',
		updates: 'Registro Vanguard',
		faq: 'Preguntas frecuentes',
		support: 'Ayuda y contacto',
		undetected: 'Estado indetectable',
		wallhack: 'Visibilidad ESP',
		radar: 'Radar 2D de amenazas',
		vanguard: 'Mantenimiento de parches',
		'cheats-2026': 'Guía del comprador',
		hacks: 'Guía ESP y Aimbot',
		'cheat-download': 'Acceso instantáneo',
		'mod-menu': 'Controles en partida',
		'soft-aim': 'Ajustes soft aim',
		'best-cheats': 'Lista de compra',
		'aimbot-hack': 'Asistencia soft aim',
		'esp-hack': 'Cajas y loot',
		'unlock-all': 'Qué significa',
	},
	fr: {
		'valorant-esp': 'Boîtes joueur et wallhack',
		'valorant-aimbot': 'Contrôles soft aim',
		features: 'Liste complète des fonctions',
		pricing: 'Mensuel et à vie',
		setup: 'Guide d\'installation PC',
		updates: 'Journal Vanguard',
		faq: 'Questions fréquentes',
		support: 'Aide et contact',
		undetected: 'Statut indétectable',
		wallhack: 'Visibilité ESP',
		radar: 'Radar 2D des menaces',
		vanguard: 'Maintenance des patchs',
		'cheats-2026': 'Guide acheteur',
		hacks: 'Guide ESP et Aimbot',
		'cheat-download': 'Accès instantané',
		'mod-menu': 'Contrôles en jeu',
		'soft-aim': 'Réglages soft aim',
		'best-cheats': 'Checklist acheteur',
		'aimbot-hack': 'Assistance soft aim',
		'esp-hack': 'Boîtes et loot',
		'unlock-all': 'Ce que ça signifie',
	},
	de: {
		'valorant-esp': 'Spielerboxen & Wallhack',
		'valorant-aimbot': 'Soft-Aim Steuerung',
		features: 'Vollständige Feature-Liste',
		pricing: 'Monatlich & Lifetime',
		setup: 'PC Setup-Anleitung',
		updates: 'Vanguard Wartungslog',
		faq: 'Häufige Fragen',
		support: 'Hilfe & Kontakt',
		undetected: 'Undetected Status',
		wallhack: 'ESP Sichtbarkeit',
		radar: '2D Bedrohungsradar',
		vanguard: 'Patch-Wartung',
		'cheats-2026': 'Käuferleitfaden',
		hacks: 'ESP Aimbot Guide',
		'cheat-download': 'Sofortzugang',
		'mod-menu': 'In-Game Toggles',
		'soft-aim': 'Soft-Aim Einstellungen',
		'best-cheats': 'Käufer-Checkliste',
		'aimbot-hack': 'Soft-Aim Assist',
		'esp-hack': 'Boxen & Loot',
		'unlock-all': 'Was es bedeutet',
	},
	pt: {
		'valorant-esp': 'Caixas de jogador e wallhack',
		'valorant-aimbot': 'Controles soft aim',
		features: 'Lista completa de recursos',
		pricing: 'Mensal e vitalício',
		setup: 'Guia de instalação PC',
		updates: 'Registro Vanguard',
		faq: 'Perguntas frequentes',
		support: 'Ajuda e contato',
		undetected: 'Status indetectável',
		wallhack: 'Visibilidade ESP',
		radar: 'Radar 2D de ameaças',
		vanguard: 'Manutenção de patches',
		'cheats-2026': 'Guia do comprador',
		hacks: 'Guia ESP e Aimbot',
		'cheat-download': 'Acesso instantâneo',
		'mod-menu': 'Controles in-game',
		'soft-aim': 'Ajustes soft aim',
		'best-cheats': 'Checklist do comprador',
		'aimbot-hack': 'Assistência soft aim',
		'esp-hack': 'Caixas e loot',
		'unlock-all': 'O que significa',
	},
	it: {
		'valorant-esp': 'Box giocatore e wallhack',
		'valorant-aimbot': 'Controlli soft aim',
		features: 'Elenco completo funzioni',
		pricing: 'Mensile e lifetime',
		setup: 'Guida setup PC',
		updates: 'Log manutenzione Vanguard',
		faq: 'Domande frequenti',
		support: 'Aiuto e contatto',
		undetected: 'Stato indetectable',
		wallhack: 'Visibilità ESP',
		radar: 'Radar 2D minacce',
		vanguard: 'Manutenzione patch',
		'cheats-2026': 'Guida acquirente',
		hacks: 'Guida ESP e Aimbot',
		'cheat-download': 'Accesso istantaneo',
		'mod-menu': 'Toggle in-game',
		'soft-aim': 'Impostazioni soft aim',
		'best-cheats': 'Checklist acquirente',
		'aimbot-hack': 'Assist soft aim',
		'esp-hack': 'Box e loot',
		'unlock-all': 'Cosa significa',
	},
	ru: {
		'valorant-esp': 'Боксы игроков и wallhack',
		'valorant-aimbot': 'Управление soft aim',
		features: 'Полный список функций',
		pricing: 'Месяц и lifetime',
		setup: 'Гайд по установке',
		updates: 'Журнал Vanguard',
		faq: 'Частые вопросы',
		support: 'Помощь и контакт',
		undetected: 'Статус undetected',
		wallhack: 'Видимость ESP',
		radar: '2D радар угроз',
		vanguard: 'Обслуживание патчей',
		'cheats-2026': 'Гайд покупателя',
		hacks: 'Гайд ESP и Aimbot',
		'cheat-download': 'Мгновенный доступ',
		'mod-menu': 'Игровые переключатели',
		'soft-aim': 'Настройки soft aim',
		'best-cheats': 'Чеклист покупателя',
		'aimbot-hack': 'Soft aim ассист',
		'esp-hack': 'Боксы и лут',
		'unlock-all': 'Что это значит',
	},
};

function productPage(locale, pageKey, topicName, cta2href) {
	const p = phrases[locale];
	const home = PAGE_META_HOME[locale];
	const meta = PAGE_META_TAILS[pageKey] ?? { suffix: 'Valorant Cheats', focus: 'ESP wallhack, radar, and Aimbot', altKeyword: 'ESP aimbot wallhack' };
	const suffix = SUFFIX_I18N[locale]?.[pageKey] ?? meta.suffix;
	const titleBase = `${topicName} | ${suffix}`;
	return {
		title: clampTitle(stripZadeyoFromMeta(titleBase)),
		description: clampDesc(
			stripZadeyoFromMeta(`${topicName}: ${meta.focus}. ${p.delivery}. ${p.undetected} — ${p.win}.`),
		),
		h1: topicName,
		intro: p.s1(`${topicName}.`),
		imageAlt: PAGE_IMAGE_ALTS[pageKey] || `${topicName} — Valorant Cheats screenshot`,
		galleryTitle: topicName,
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: p.buy,
		ctaSecondary: home.cta2,
		ctaSecondaryHref: cta2href,
		sections: [
			section(topicName, p.s1(`${meta.focus}.`), p.s2()),
			section(`${p.undetected}`, p.s3(), p.s2()),
			section(p.delivery, p.s2(), p.legal()),
		],
	};
}

const TOPIC_NAMES = {
	'valorant-esp': { en: 'Valorant ESP', es: 'ESP Valorant', fr: 'ESP Valorant', de: 'Valorant ESP', pt: 'ESP Valorant', it: 'ESP Valorant', nl: 'Valorant ESP', pl: 'ESP Valorant', ru: 'ESP Valorant', tr: 'Valorant ESP', ar: 'ESP Valorant', ja: 'Valorant ESP', ko: 'Valorant ESP', zh: 'Valorant ESP', hi: 'Valorant ESP', id: 'ESP Valorant', th: 'Valorant ESP', vi: 'ESP Valorant', uk: 'ESP Valorant', cs: 'Valorant ESP', ro: 'ESP Valorant', sv: 'Valorant ESP' },
	'valorant-aimbot': { en: 'Valorant Aimbot', es: 'Aimbot Valorant', fr: 'Aimbot Valorant', de: 'Valorant Aimbot', pt: 'Aimbot Valorant', it: 'Aimbot Valorant', nl: 'Valorant Aimbot', pl: 'Aimbot Valorant', ru: 'Aimbot Valorant', tr: 'Valorant Aimbot', ar: 'Aimbot Valorant', ja: 'Valorant Aimbot', ko: 'Valorant Aimbot', zh: 'Valorant Aimbot', hi: 'Valorant Aimbot', id: 'Aimbot Valorant', th: 'Valorant Aimbot', vi: 'Aimbot Valorant', uk: 'Aimbot Valorant', cs: 'Valorant Aimbot', ro: 'Aimbot Valorant', sv: 'Valorant Aimbot' },
	features: { en: 'Features', es: 'Funciones', fr: 'Fonctions', de: 'Features', pt: 'Recursos', it: 'Funzioni', nl: 'Functies', pl: 'Funkcje', ru: 'Функции', tr: 'Özellikler', ar: 'الميزات', ja: '機能', ko: '기능', zh: '功能', hi: 'फ़ीचर्स', id: 'Fitur', th: 'ฟีเจอร์', vi: 'Tính năng', uk: 'Функції', cs: 'Funkce', ro: 'Funcții', sv: 'Funktioner' },
	pricing: { en: 'Pricing', es: 'Precios', fr: 'Tarifs', de: 'Preise', pt: 'Preços', it: 'Prezzi', nl: 'Prijzen', pl: 'Cennik', ru: 'Цены', tr: 'Fiyatlar', ar: 'الأسعار', ja: '料金', ko: '가격', zh: '价格', hi: 'कीमत', id: 'Harga', th: 'ราคา', vi: 'Giá', uk: 'Ціни', cs: 'Ceny', ro: 'Prețuri', sv: 'Priser' },
	setup: { en: 'Setup', es: 'Instalación', fr: 'Installation', de: 'Setup', pt: 'Instalação', it: 'Setup', nl: 'Setup', pl: 'Instalacja', ru: 'Установка', tr: 'Kurulum', ar: 'التثبيت', ja: 'セットアップ', ko: '설치', zh: '安装', hi: 'सेटअप', id: 'Setup', th: 'ติดตั้ง', vi: 'Cài đặt', uk: 'Встановлення', cs: 'Instalace', ro: 'Instalare', sv: 'Installation' },
	updates: { en: 'Updates', es: 'Actualizaciones', fr: 'Mises à jour', de: 'Updates', pt: 'Atualizações', it: 'Aggiornamenti', nl: 'Updates', pl: 'Aktualizacje', ru: 'Обновления', tr: 'Güncellemeler', ar: 'التحديثات', ja: '更新', ko: '업데이트', zh: '更新', hi: 'अपडेट', id: 'Pembaruan', th: 'อัปเดต', vi: 'Cập nhật', uk: 'Оновлення', cs: 'Aktualizace', ro: 'Actualizări', sv: 'Uppdateringar' },
	faq: { en: 'FAQ', es: 'FAQ', fr: 'FAQ', de: 'FAQ', pt: 'FAQ', it: 'FAQ', nl: 'FAQ', pl: 'FAQ', ru: 'FAQ', tr: 'SSS', ar: 'الأسئلة', ja: 'FAQ', ko: 'FAQ', zh: '常见问题', hi: 'FAQ', id: 'FAQ', th: 'FAQ', vi: 'FAQ', uk: 'FAQ', cs: 'FAQ', ro: 'FAQ', sv: 'FAQ' },
	support: { en: 'Support', es: 'Soporte', fr: 'Support', de: 'Support', pt: 'Suporte', it: 'Supporto', nl: 'Support', pl: 'Wsparcie', ru: 'Поддержка', tr: 'Destek', ar: 'الدعم', ja: 'サポート', ko: '지원', zh: '支持', hi: 'सहायता', id: 'Dukungan', th: 'สนับสนุน', vi: 'Hỗ trợ', uk: 'Підтримка', cs: 'Podpora', ro: 'Suport', sv: 'Support' },
	undetected: { en: 'Undetected Cheats', es: 'Trucos indetectables', fr: 'Triches indétectables', de: 'Undetected Cheats', pt: 'Cheats indetectáveis', it: 'Cheat indetectable', nl: 'Undetected Cheats', pl: 'Cheaty undetected', ru: 'Undetected читы', tr: 'Undetected hileler', ar: 'غش undetected', ja: 'Undetectedチート', ko: 'Undetected 치트', zh: 'Undetected作弊', hi: 'Undetected cheats', id: 'Cheat undetected', th: 'Cheats undetected', vi: 'Cheat undetected', uk: 'Undetected чіти', cs: 'Undetected cheaty', ro: 'Cheats undetected', sv: 'Undetected cheats' },
	wallhack: { en: 'Valorant Wallhack', es: 'Wallhack Valorant', fr: 'Wallhack Valorant', de: 'Valorant Wallhack', pt: 'Wallhack Valorant', it: 'Wallhack Valorant', nl: 'Valorant Wallhack', pl: 'Wallhack Valorant', ru: 'Wallhack Valorant', tr: 'Valorant Wallhack', ar: 'Wallhack Valorant', ja: 'Valorant Wallhack', ko: 'Valorant Wallhack', zh: 'Valorant Wallhack', hi: 'Valorant Wallhack', id: 'Wallhack Valorant', th: 'Valorant Wallhack', vi: 'Wallhack Valorant', uk: 'Wallhack Valorant', cs: 'Valorant Wallhack', ro: 'Wallhack Valorant', sv: 'Valorant Wallhack' },
	radar: { en: 'Radar Hack', es: 'Radar hack', fr: 'Radar hack', de: 'Radar Hack', pt: 'Radar hack', it: 'Radar hack', nl: 'Radar Hack', pl: 'Radar hack', ru: 'Radar hack', tr: 'Radar hack', ar: 'Radar hack', ja: 'Radar Hack', ko: 'Radar Hack', zh: 'Radar Hack', hi: 'Radar Hack', id: 'Radar hack', th: 'Radar Hack', vi: 'Radar hack', uk: 'Radar hack', cs: 'Radar Hack', ro: 'Radar hack', sv: 'Radar Hack' },
	vanguard: { en: 'Vanguard Bypass', es: 'Bypass Vanguard', fr: 'Bypass Vanguard', de: 'Vanguard Bypass', pt: 'Bypass Vanguard', it: 'Bypass Vanguard', nl: 'Vanguard Bypass', pl: 'Bypass Vanguard', ru: 'Bypass Vanguard', tr: 'Vanguard bypass', ar: 'Bypass Vanguard', ja: 'Vanguard Bypass', ko: 'Vanguard Bypass', zh: 'Vanguard Bypass', hi: 'Vanguard Bypass', id: 'Bypass Vanguard', th: 'Vanguard Bypass', vi: 'Bypass Vanguard', uk: 'Bypass Vanguard', cs: 'Vanguard Bypass', ro: 'Bypass Vanguard', sv: 'Vanguard Bypass' },
	'cheats-2026': { en: 'Valorant Cheats 2026', es: 'Trucos Valorant 2026', fr: 'Triches Valorant 2026', de: 'Valorant Cheats 2026', pt: 'Cheats Valorant 2026', it: 'Cheat Valorant 2026', nl: 'Valorant Cheats 2026', pl: 'Cheaty Valorant 2026', ru: 'Читы Valorant 2026', tr: 'Valorant Hileleri 2026', ar: 'غش Valorant 2026', ja: 'Valorant Cheats 2026', ko: 'Valorant Cheats 2026', zh: 'Valorant作弊 2026', hi: 'Valorant Cheats 2026', id: 'Cheat Valorant 2026', th: 'Valorant Cheats 2026', vi: 'Cheat Valorant 2026', uk: 'Чіти Valorant 2026', cs: 'Valorant cheaty 2026', ro: 'Cheats Valorant 2026', sv: 'Valorant Cheats 2026' },
	hacks: { en: 'Valorant Cheats', es: 'Trucos Valorant', fr: 'Triches Valorant', de: 'Valorant Cheats', pt: 'Cheats Valorant', it: 'Cheat Valorant', nl: 'Valorant Cheats', pl: 'Cheaty Valorant', ru: 'Читы Valorant', tr: 'Valorant Hileleri', ar: 'غش Valorant', ja: 'Valorant Cheats', ko: 'Valorant Cheats', zh: 'Valorant作弊', hi: 'Valorant Cheats', id: 'Cheat Valorant', th: 'Valorant Cheats', vi: 'Cheat Valorant', uk: 'Чіти Valorant', cs: 'Valorant cheaty', ro: 'Cheats Valorant', sv: 'Valorant Cheats' },
	'cheat-download': { en: 'Valorant Cheat Download', es: 'Descarga Valorant Cheats', fr: 'Téléchargement Valorant Cheats', de: 'Valorant Cheat Download', pt: 'Download Valorant Cheats', it: 'Download Valorant Cheats', nl: 'Valorant Cheat Download', pl: 'Pobieranie Valorant Cheats', ru: 'Скачать Valorant Cheats', tr: 'Valorant Hile İndir', ar: 'تحميل Valorant Cheats', ja: 'Valorant Cheat Download', ko: 'Valorant Cheat Download', zh: 'Valorant作弊下载', hi: 'Valorant Cheat Download', id: 'Download Cheat Valorant', th: 'ดาวน์โหลด Valorant Cheats', vi: 'Tải Cheat Valorant', uk: 'Завантаження Valorant Cheats', cs: 'Stáhnout Valorant Cheats', ro: 'Descărcare Valorant Cheats', sv: 'Valorant Cheat Download' },
	'mod-menu': { en: 'Valorant Mod Menu', es: 'Menú mod Valorant', fr: 'Menu mod Valorant', de: 'Valorant Mod-Menü', pt: 'Menu mod Valorant', it: 'Mod menu Valorant', nl: 'Valorant Mod Menu', pl: 'Mod menu Valorant', ru: 'Мод-меню Valorant', tr: 'Valorant Mod Menü', ar: 'قائمة مود Valorant', ja: 'Valorant Mod Menu', ko: 'Valorant 모드 메뉴', zh: 'Valorant修改菜单', hi: 'Valorant Mod Menu', id: 'Menu mod Valorant', th: 'เมนูมอด Valorant', vi: 'Mod menu Valorant', uk: 'Мод-меню Valorant', cs: 'Valorant mod menu', ro: 'Meniu mod Valorant', sv: 'Valorant Mod-meny' },
	'soft-aim': { en: 'Valorant Soft Aim', es: 'Soft aim Valorant', fr: 'Soft aim Valorant', de: 'Valorant Soft Aim', pt: 'Soft aim Valorant', it: 'Soft aim Valorant', nl: 'Valorant Soft Aim', pl: 'Soft aim Valorant', ru: 'Soft aim Valorant', tr: 'Valorant Soft Aim', ar: 'Soft aim Valorant', ja: 'Valorant Soft Aim', ko: 'Valorant Soft Aim', zh: 'Valorant Soft Aim', hi: 'Valorant Soft Aim', id: 'Soft aim Valorant', th: 'Valorant Soft Aim', vi: 'Soft aim Valorant', uk: 'Soft aim Valorant', cs: 'Valorant Soft Aim', ro: 'Soft aim Valorant', sv: 'Valorant Soft Aim' },
	'best-cheats': { en: 'Best Valorant Cheats', es: 'Mejores trucos Valorant', fr: 'Meilleures triches Valorant', de: 'Beste Valorant Cheats', pt: 'Melhores cheats Valorant', it: 'Migliori cheat Valorant', nl: 'Beste Valorant Cheats', pl: 'Najlepsze cheaty Valorant', ru: 'Лучшие читы Valorant', tr: 'En İyi Valorant Hileleri', ar: 'أفضل غش Valorant', ja: '最強Valorantチート', ko: '최고의 Valorant 치트', zh: '最佳Valorant作弊', hi: 'सर्वश्रेष्ठ Valorant Cheats', id: 'Cheat Valorant terbaik', th: 'Cheat Valorant ที่ดีที่สุด', vi: 'Cheat Valorant tốt nhất', uk: 'Найкращі чіти Valorant', cs: 'Nejlepší Valorant cheaty', ro: 'Cele mai bune cheats Valorant', sv: 'Bästa Valorant Cheats' },
	'aimbot-hack': { en: 'Valorant Aimbot Hack', es: 'Hack aimbot Valorant', fr: 'Hack aimbot Valorant', de: 'Valorant Aimbot Hack', pt: 'Hack aimbot Valorant', it: 'Hack aimbot Valorant', nl: 'Valorant Aimbot Hack', pl: 'Hack aimbot Valorant', ru: 'Хак aimbot Valorant', tr: 'Valorant Aimbot Hilesi', ar: 'هاك Aimbot Valorant', ja: 'Valorant Aimbot Hack', ko: 'Valorant 에임봇 핵', zh: 'Valorant自瞄外挂', hi: 'Valorant Aimbot Hack', id: 'Hack aimbot Valorant', th: 'Hack Aimbot Valorant', vi: 'Hack aimbot Valorant', uk: 'Хак aimbot Valorant', cs: 'Valorant aimbot hack', ro: 'Hack aimbot Valorant', sv: 'Valorant Aimbot Hack' },
	'esp-hack': { en: 'Valorant ESP Hack', es: 'Hack ESP Valorant', fr: 'Hack ESP Valorant', de: 'Valorant ESP Hack', pt: 'Hack ESP Valorant', it: 'Hack ESP Valorant', nl: 'Valorant ESP Hack', pl: 'Hack ESP Valorant', ru: 'Хак ESP Valorant', tr: 'Valorant ESP Hilesi', ar: 'هاك ESP Valorant', ja: 'Valorant ESP Hack', ko: 'Valorant ESP 핵', zh: 'Valorant ESP外挂', hi: 'Valorant ESP Hack', id: 'Hack ESP Valorant', th: 'Hack ESP Valorant', vi: 'Hack ESP Valorant', uk: 'Хак ESP Valorant', cs: 'Valorant ESP hack', ro: 'Hack ESP Valorant', sv: 'Valorant ESP Hack' },
	'unlock-all': { en: 'Valorant Unlock All', es: 'Unlock all Valorant', fr: 'Unlock all Valorant', de: 'Valorant Unlock All', pt: 'Unlock all Valorant', it: 'Unlock all Valorant', nl: 'Valorant Unlock All', pl: 'Unlock all Valorant', ru: 'Unlock all Valorant', tr: 'Valorant Unlock All', ar: 'Unlock all Valorant', ja: 'Valorant Unlock All', ko: 'Valorant Unlock All', zh: 'Valorant Unlock All', hi: 'Valorant Unlock All', id: 'Unlock all Valorant', th: 'Valorant Unlock All', vi: 'Unlock all Valorant', uk: 'Unlock all Valorant', cs: 'Valorant Unlock All', ro: 'Unlock all Valorant', sv: 'Valorant Unlock All' },
};

const CTA2_HREF = {
	'valorant-esp': '/valorant-cheats/',
	'valorant-aimbot': '/valorant-esp/',
	features: '/pricing/',
	pricing: '/setup/',
	setup: '/support/',
	updates: '/valorant-cheats/',
	faq: '/support/',
	support: '/setup/',
	undetected: '/valorant-cheats/',
	wallhack: '/valorant-esp/',
	radar: '/valorant-esp/',
	vanguard: '/updates/',
	'cheats-2026': '/valorant-cheats/',
	hacks: '/features/',
	'cheat-download': '/setup/',
	'mod-menu': '/features/',
	'soft-aim': '/valorant-aimbot/',
	'best-cheats': '/pricing/',
	'aimbot-hack': '/valorant-aimbot/',
	'esp-hack': '/valorant-esp/',
	'unlock-all': '/features/',
};

function buildLegal(locale, pageKey, kind) {
	const p = phrases[locale];
	const titles = {
		privacy: { es: 'Política de privacidad', fr: 'Politique de confidentialité', de: 'Datenschutz', pt: 'Política de privacidade', it: 'Informativa privacy', nl: 'Privacybeleid', pl: 'Polityka prywatności', ru: 'Политика конфиденциальности', tr: 'Gizlilik politikası', ar: 'سياسة الخصوصية', ja: 'プライバシーポリシー', ko: '개인정보 처리방침', zh: '隐私政策', hi: 'गोपनीयता नीति', id: 'Kebijakan privasi', th: 'นโยบายความเป็นส่วนตัว', vi: 'Chính sách bảo mật', uk: 'Політика конфіденційності', cs: 'Zásady ochrany soukromí', ro: 'Politica de confidențialitate', sv: 'Integritetspolicy' },
		refund: { es: 'Política de reembolso', fr: 'Politique de remboursement', de: 'Rückerstattung', pt: 'Política de reembolso', it: 'Politica di rimborso', nl: 'Restitutiebeleid', pl: 'Polityka zwrotów', ru: 'Политика возврата', tr: 'İade politikası', ar: 'سياسة الاسترداد', ja: '返金ポリシー', ko: '환불 정책', zh: '退款政策', hi: 'रिफंड नीति', id: 'Kebijakan refund', th: 'นโยบายการคืนเงิน', vi: 'Chính sách hoàn tiền', uk: 'Політика повернення', cs: 'Zásady vrácení peněz', ro: 'Politica de rambursare', sv: 'Återbetalningspolicy' },
		terms: { es: 'Términos de uso', fr: 'Conditions d\'utilisation', de: 'Nutzungsbedingungen', pt: 'Termos de uso', it: 'Termini di utilizzo', nl: 'Gebruiksvoorwaarden', pl: 'Warunki użytkowania', ru: 'Условия использования', tr: 'Kullanım şartları', ar: 'شروط الاستخدام', ja: '利用規約', ko: '이용 약관', zh: '使用条款', hi: 'उपयोग की शर्तें', id: 'Syarat penggunaan', th: 'ข้อกำหนดการใช้งาน', vi: 'Điều khoản sử dụng', uk: 'Умови використання', cs: 'Podmínky použití', ro: 'Termeni de utilizare', sv: 'Användarvillkor' },
	};
	const h1 = titles[kind][locale] ?? (kind === 'privacy' ? 'Privacy Policy' : kind === 'refund' ? 'Refund Policy' : 'Terms of Use');
	return {
		title: clampTitle(stripZadeyoFromMeta(`${h1} | Valorant Cheats`)),
		description: clampDesc(stripZadeyoFromMeta(`${h1} for Valorant Cheats — ESP wallhack, Aimbot, ${p.win}.`)),
		h1,
		intro: p.s1(`${h1} for valocheats.com and Valorant licenses.`),
		imageAlt: 'valorant cheats',
		galleryTitle: 'valorant cheats',
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: locale === 'ar' ? 'مراسلة الدعم' : locale === 'ja' ? 'サポートにメール' : locale === 'ko' ? '지원 이메일' : locale === 'zh' ? '邮件支持' : 'Email support',
		ctaSecondary: kind === 'privacy' ? (locale === 'es' ? 'Leer términos' : locale === 'fr' ? 'Lire conditions' : locale === 'de' ? 'Nutzungsbedingungen' : locale === 'ar' ? 'اقرأ الشروط' : locale === 'ja' ? '利用規約' : 'Read terms') : kind === 'refund' ? (locale === 'es' ? 'Leer privacidad' : 'Read privacy') : (locale === 'es' ? 'Leer privacidad' : 'Read privacy'),
		ctaSecondaryHref: kind === 'privacy' ? '/terms/' : '/privacy-policy/',
		sections: [
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Información que recopilamos' : locale === 'fr' ? 'Informations collectées' : locale === 'de' ? 'Erhobene Daten' : locale === 'ar' ? 'المعلومات التي نجمعها' : locale === 'ja' ? '収集する情報' : 'Information we collect') :
				kind === 'refund' ? (locale === 'es' ? 'Entrega digital' : locale === 'fr' ? 'Livraison numérique' : locale === 'de' ? 'Digitale Lieferung' : locale === 'ar' ? 'التسليم الرقمي' : locale === 'ja' ? 'デジタル配信' : 'Digital delivery') :
				(locale === 'es' ? 'Aceptación de términos' : locale === 'fr' ? 'Acceptation' : locale === 'de' ? 'Annahme' : locale === 'ar' ? 'قبول الشروط' : locale === 'ja' ? '規約への同意' : 'Acceptance of terms'),
				p.s1('Contact email, Zadeyo order references, and basic site security data.'),
				kind === 'privacy' ? 'Payment details are processed by Zadeyo checkout — not stored on valocheats.com.' : p.s2(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Uso de la información' : locale === 'fr' ? 'Utilisation' : locale === 'de' ? 'Datennutzung' : locale === 'ar' ? 'استخدام المعلومات' : locale === 'ja' ? '情報の利用' : 'How we use data') :
				kind === 'refund' ? (locale === 'es' ? 'Cuándo se aprueba' : locale === 'fr' ? 'Approbation' : locale === 'de' ? 'Genehmigung' : locale === 'ar' ? 'موافقة الاسترداد' : locale === 'ja' ? '返金承認' : 'Refund approval') :
				(locale === 'es' ? 'Riesgos y anti-cheat' : locale === 'fr' ? 'Risques' : locale === 'de' ? 'Risiko' : locale === 'ar' ? 'المخاطر' : locale === 'ja' ? 'リスク' : 'Risk disclaimer'),
				p.s1('Support responses, order resolution, and legal compliance when required.'),
				kind === 'terms' ? 'Using cheats may violate Epic Games terms — you assume all ban risk.' : p.s3(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Tus derechos' : locale === 'fr' ? 'Vos droits' : locale === 'de' ? 'Ihre Rechte' : locale === 'ar' ? 'حقوقك' : locale === 'ja' ? 'あなたの権利' : 'Your rights') :
				kind === 'refund' ? (locale === 'es' ? 'Cómo solicitar' : locale === 'fr' ? 'Comment demander' : locale === 'de' ? 'Anfrage stellen' : locale === 'ar' ? 'كيفية الطلب' : locale === 'ja' ? '申請方法' : 'How to request') :
				(locale === 'es' ? 'Cambios' : locale === 'fr' ? 'Modifications' : locale === 'de' ? 'Änderungen' : locale === 'ar' ? 'التغييرات' : locale === 'ja' ? '変更' : 'Policy changes'),
				p.legal(),
				'Email: support@valocheats.com',
			),
		],
	};
}

/** Build all pages for a non-English locale. */
export function buildPagesForLocale(locale) {
	const pages = { home: buildHome(locale) };
	for (const [pageKey, names] of Object.entries(TOPIC_NAMES)) {
		pages[pageKey] = productPage(locale, pageKey, names[locale], CTA2_HREF[pageKey]);
	}
	for (const kind of ['privacy', 'refund', 'terms']) {
		pages[kind] = buildLegal(locale, kind, kind);
	}
	return pages;
}
