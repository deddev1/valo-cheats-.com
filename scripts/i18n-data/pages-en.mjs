import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta, EXT } from './constants.mjs';

/** Richest English page content — source of truth for structure. */
export const enPages = {
	home: {
		title: 'Valorant Cheats 2026 | Undetected ESP, Aimbot & Wallhack',
		description:
			'Valorant cheats for Windows PC — ESP, soft aim, radar, and Vanguard updates. Compare plans and buy.',
		h1: 'Valorant Cheats — Undetected ESP, Wallhack & Aimbot',
		intro:
			'Valorant Cheats is the undetected valorant cheats package for Windows PC — built for Valorant on Windows PC. Valorant esp wallhack, 2D radar, and valorant aimbot with Vanguard maintenance after every major patch.',
		imageAlt: "Valorant Cheats homepage hero — ESP and aimbot for Valorant",
		galleryTitle: 'Valorant Cheats gallery — ESP, Aimbot and wallhack visuals',
		ctaPrimary: 'Buy Valorant Cheats',
		ctaSecondary: 'See all features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Why players choose Valorant cheats in 2026',
				'Valorant rewards map awareness. Valorant Cheats combines ESP wallhack for enemy players and loot, radar-style threat cues, and configurable Aimbot so you can read fights before committing — on match, deathmatch, and competitive lobbies.',
				`Official seasons, patches, and anti-cheat updates come from ${EXT.valorant} and ${EXT.vanguard}. We rebuild ESP, radar, and Aimbot modules when those patches require maintenance — then post status on the <a href="/updates/">Updates page</a>.`,
				'Licenses ship digitally after payment confirmation. Monthly ($35) and lifetime ($150) plans include Vanguard maintenance rebuilds when anti-cheat or game patches require updates.',
				'Start with the <a href="/valorant-cheats/">Valorant cheats pillar</a>, <a href="/valorant-esp/">ESP guide</a>, <a href="/valorant-aimbot/">Aimbot controls</a>, and <a href="/valorant-cheats/">undetected status</a> pages if you are comparing tools before checkout.',
			),
			section(
				'ESP wallhack, radar hack, and Aimbot in one license',
				'Instead of stacking separate tools, Valorant Cheats bundles player ESP wallhack, orb markers, 2D radar overlays, and Aimbot profiles in one undetected package built for agent matches and Deathmatch — covering both “valorant cheats” and “valorant hacks” search intent.',
				'Browse the <a href="/valorant-esp/">ESP</a>, <a href="/valorant-aimbot/">Aimbot</a>, <a href="/valorant-esp/">wallhack</a>, and <a href="/valorant-radar-hack/">radar</a> pages for control details — or jump to <a href="/pricing/">Pricing</a> for monthly and lifetime options.',
				`Before patch days, check ${EXT.status} for Riot Games service health, then confirm our maintenance notes so you are not queueing on an outdated build.`,
				'Ready to buy? Open <a href="/pricing/">Pricing</a>, follow <a href="/setup/">Setup</a> after delivery, and keep <a href="/faq/">FAQ</a> / <a href="/support/">Support</a> bookmarked for license questions.',
			),
		],
	},
	'valorant-esp': {
		title: 'Valorant ESP 2026 | Player Boxes & Wallhack',
		description:
			'Valorant ESP for Windows PC — player boxes, orb markers, and distance readouts. Part of our undetected valorant cheats for Valorant.',
		h1: 'Valorant ESP — Player Boxes & Wallhack',
		intro:
			'Valorant esp visibility tools for match and deathmatch. Read enemy squads, agents, enemies, loot, and distance before you commit — toggleable valorant esp wallhack overlays bundled in our valorant cheats package.',
		imageAlt: "Valorant ESP player boxes and distance readouts in a match",
		galleryTitle: 'Valorant ESP overlay visuals',
		ctaPrimary: 'Buy Valorant Cheats',
		ctaSecondary: 'Valorant wallhack guide',
		ctaSecondaryHref: '/valorant-esp/',
		sections: [
			section(
				'What Valorant ESP solves in matches',
				'Valorant maps punish incomplete information. Valorant Cheats ESP wallhack helps you spot enemy squads early, spot agents and enemies before they push your angle, and mark high-value loot worth the detour.',
				'On match, deathmatch, and competitive lobbies, that visibility gap is often the difference between a clean third-party and a episoded squad. ESP ships bundled with radar overlays and Aimbot in one license.',
				`Valorant’s live seasons and map updates are published by Riot Games (${EXT.valorant}). When POIs or loot rules shift, ESP categories stay useful because they track players and containers — not a single static landmark.`,
			),
			section(
				'Player, boss, and loot ESP wallhack categories',
				'Toggle enemy player outlines, boss markers, site cues, and loot pins so only match-critical ESP wallhack overlays stay active during rotations.',
				'Distance readouts and snapline options help you control engagement range. Team and enemy colour coding supports agent matches and Deathmatch lobbies alike.',
				'Compare category detail on the <a href="/valorant-esp/">wallhack page</a> and pair visibility with the <a href="/valorant-radar-hack/">radar hack</a> for flanks outside your FOV.',
				[
					'Enemy player ESP outlines with distance',
					'Loot and container markers for faster rotations',
					'Boss and site awareness cues',
					'Toggleable categories to reduce overlay noise',
				],
			),
			section(
				'Undetected ESP with Vanguard maintenance',
				'Valorant Cheats ESP wallhack is maintained for Valorant with rebuilds after Vanguard anti-cheat patches. Check the <a href="/updates/">Updates page</a> before you queue — no cheat guarantees permanent undetected status.',
				`Read ${EXT.vanguard} for how anti-cheat updates ship, then cross-check our <a href="/updates/">Vanguard bypass maintenance guide</a> after major patches.`,
				'Checkout includes instant digital delivery for Windows 10 and 11. After purchase, follow the <a href="/setup/">Setup guide</a> and tune overlays before your first match.',
			),
			section(
				'ESP next steps — Aimbot, pricing, and support',
				'ESP alone wins information wars; Aimbot covers the firefight. Review <a href="/valorant-aimbot/">Aimbot controls</a> if you want one license for visibility and assist.',
				'Compare monthly ($35) and lifetime ($150) on <a href="/pricing/">Pricing</a>, then keep <a href="/support/">Support</a> ready if activation needs a human reply.',
				'Still researching? The <a href="/valorant-cheats/">Valorant cheats pillar</a> and <a href="/valorant-cheats/">2026 buyer guide</a> summarize the full stack.',
			),
		],
	},
	'valorant-aimbot': {
		title: 'Valorant Aimbot 2026 | Soft Aim for Windows PC',
		description:
			'Valorant aimbot with soft aim tuning for Windows PC. FOV, bone priority, and hotkeys bundled with ESP boxes in our valorant cheats package.',
		h1: 'Valorant Aimbot — Soft Aim for Windows PC',
		intro:
			'Configurable Aimbot tools for Valorant firefights. Smoothness, FOV, bone priority, and per-weapon profiles — bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: "Valorant aimbot and soft aim controls on Windows PC",
		galleryTitle: 'Valorant Aimbot combat previews',
		ctaPrimary: 'Buy Valorant Cheats',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/valorant-esp/',
		sections: [
			section(
				'Aimbot tuned for Valorant combat pace',
				'Valorant mixes long-range AR fights with close-quarters SMG pushes. Valorant Cheats Aimbot includes smoothness, FOV, and sensitivity controls tuned for that pace — with hotkey toggles mid-match.',
				'Bone priority and target selection options cover closest player, lowest health, or highest-threat targets during squad fights and close-range site fights.',
				`Weapon balance and season rules change via ${EXT.valorant}. Revisit Aimbot FOV and smoothness after major combat patches so assist still matches the live TTK windows.`,
			),
			section(
				'Per-weapon Aimbot profiles',
				'Save separate Aimbot profiles for ARs, SMGs, and bolt-actions. Switch between long-range DMR fights and Haven clears without reopening menus every match.',
				'Prefer softer tracking? Read the <a href="/valorant-aimbot/">soft aim guide</a>.',
				'Aimbot ships alongside <a href="/valorant-esp/">ESP wallhack</a> and <a href="/valorant-radar-hack/">2D radar</a> in the same Valorant Cheats license.',
				[
					'Smoothness, FOV, and sensitivity sliders',
					'Bone priority and threat-based targeting',
					'Hotkeys to toggle Aimbot mid-match',
					'Per-weapon profile slots for AR / SMG / bolt-action',
				],
			),
			section(
				'Vanguard maintenance for undetected Aimbot',
				'Valorant Cheats rebuilds Aimbot behavior when Vanguard anti-cheat or major Valorant patches land. Maintenance notes appear on the <a href="/updates/">Updates page</a> so you know when a new build is live.',
				`Cross-check service health on ${EXT.status} and anti-cheat context on ${EXT.vanguard}, then follow our <a href="/updates/">Vanguard maintenance guide</a> before queueing on patch day.`,
				'Responsible settings matter — undetected status requires ongoing maintenance, not set-and-forget configs. Start with conservative smoothness, then tune.',
			),
			section(
				'Buy Aimbot with ESP — pricing and setup',
				'Every plan includes Aimbot plus ESP and radar. Compare options on <a href="/pricing/">Pricing</a>, then activate with the <a href="/setup/">Setup guide</a>.',
				'Questions about delivery or profiles? Use <a href="/faq/">FAQ</a> or email <a href="/support/">Support</a> with your order ID.',
				'Want the full control list first? Open <a href="/features/">Features</a> before checkout.',
			),
		],
	},
	features: {
		title: 'Valorant Cheats Features | ESP, Soft Aim & Radar',
		description:
			'Full valorant cheats feature list: ESP boxes, soft aim, radar, and toggles for Windows PC. Review controls before checkout.',
		h1: 'Valorant Cheats Features — Full Control List',
		intro:
			'Every ESP wallhack, radar hack, and Aimbot control included in the Valorant Cheats package for Valorant on Windows PC — with Vanguard maintenance after major patches.',
		imageAlt: "Valorant Cheats features — ESP, soft aim, and radar screenshots",
		galleryTitle: 'Valorant Cheats feature gallery',
		ctaPrimary: 'Buy Valorant Cheats',
		ctaSecondary: 'View pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'ESP wallhack and visibility features',
				'Enemy player ESP wallhack, boss and site awareness cues, loot and container markers, distance readouts, snaplines, and toggleable ESP categories for match-critical overlays only.',
				'Team and enemy colour coding supports agent matches and Deathmatch. Deep-dive the <a href="/valorant-esp/">ESP page</a> and <a href="/valorant-esp/">wallhack guide</a> for category-level detail.',
				`Map and loot systems evolve with ${EXT.valorant} episode and map updates — toggleable ESP categories keep overlays useful when POIs rotate.`,
			),
			section(
				'Radar hack and Aimbot controls',
				'2D radar overlay with directional threat cues, configurable range for rotations and late-match sites, plus Aimbot smoothness, FOV, bone priority, hotkeys, and per-weapon profiles.',
				'All tools share in-client toggles so you can adjust ESP, radar, and Aimbot during live Valorant sessions. See <a href="/valorant-radar-hack/">radar</a> and <a href="/valorant-aimbot/">Aimbot</a> for settings walkthroughs.',
				'Prefer a menu-first workflow? The <a href="/valorant-cheats/">mod menu page</a> explains mid-match toggles without alt-tabbing.',
			),
			section(
				'Licensing, delivery, and Vanguard maintenance',
				'Monthly ($35) and lifetime ($150) licenses with instant digital delivery. Vanguard maintenance rebuilds publish on the <a href="/updates/">Updates page</a> after anti-cheat or game patches.',
				`Monitor ${EXT.status} on patch days, then confirm rebuild notes before you queue. Setup and billing help lives on <a href="/support/">Support</a> and support@valocheats.com.`,
				'Next step: compare plans on <a href="/pricing/">Pricing</a> or read <a href="/valorant-cheats/">how undetected maintenance works</a>.',
			),
		],
	},
	pricing: {
		title: 'Valorant Cheats Pricing | $35/mo or $150 Life',
		description:
			'Valorant cheats pricing: $35/month or $150 lifetime for ESP, soft aim, and radar on Windows PC. Instant delivery — pick a plan.',
		h1: 'Valorant Cheats Pricing — Monthly & Lifetime',
		intro:
			'Choose monthly or lifetime access to undetected Valorant Cheats — ESP wallhack, radar hack, and Aimbot for Valorant on Windows PC. Instant digital delivery after payment.',
		imageAlt: "Valorant Cheats store plans for monthly and lifetime licenses",
		galleryTitle: 'Valorant Cheats package visuals',
		ctaPrimary: 'Buy Valorant Cheats',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'Monthly and lifetime Valorant Cheats plans',
				'Monthly license: $35 USD for 30 days of full ESP wallhack, radar hack, and Aimbot access with Vanguard maintenance included during your term.',
				'Lifetime license: $150 USD for long-term access to the same undetected Valorant Cheats package — ideal if you play Valorant regularly across seasons.',
				'Both plans unlock the same feature stack described on <a href="/features/">Features</a>. Choose monthly to test, or lifetime if you already know you want the full toolkit.',
			),
			section(
				'What every plan includes',
				'Player ESP wallhack, orb markers, 2D radar overlays, Aimbot controls, in-client toggles, and maintenance rebuilds after Vanguard anti-cheat or major Valorant patches.',
				`Season calendars and client updates come from ${EXT.valorant}. Active licenses receive rebuild access when we publish maintenance on <a href="/updates/">Updates</a>.`,
				'Digital delivery starts after payment confirmation. Keep your order reference for <a href="/support/">Support</a> requests and follow <a href="/setup/">Setup</a> for first launch.',
			),
			section(
				'Refund, billing, and buying checklist',
				'Review the <a href="/refund-policy/">Refund Policy</a> before purchase. For billing or delivery issues, contact Support with your order details.',
				'Prices are listed in USD. Availability is worldwide for Windows 10 and 11 PCs.',
				'Still comparing tools? Read <a href="/valorant-cheats/">Valorant cheats</a>, <a href="/valorant-cheats/">undetected status</a>, and <a href="/faq/">FAQ</a> before you checkout.',
			),
		],
	},
	setup: {
		title: 'Valorant Cheats Setup | Windows PC Guide',
		description:
			'Set up valorant cheats on Windows PC — activate ESP boxes, soft aim profiles, and . Check Vanguard updates before your first queue.',
		h1: 'Valorant Cheats Setup — Windows PC Guide',
		intro:
			'Install and configure Valorant Cheats for Valorant on Windows 10 or 11. Activate your license, load ESP wallhack and Aimbot profiles, and verify Vanguard maintenance status before queueing.',
		imageAlt: "Valorant Cheats setup guide screenshot for Windows PC",
		galleryTitle: 'Valorant Cheats setup visuals',
		ctaPrimary: 'Buy Valorant Cheats',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'Before you install Valorant Cheats',
				'Confirm your order email and license details. Check the <a href="/updates/">Updates page</a> for the latest Vanguard maintenance build before launching Valorant.',
				`Also glance at ${EXT.status} if Riot Games services look unstable on patch day — a platform outage is not a license fault.`,
				'Valorant Cheats requires Windows 10 or 11. Close conflicting overlay software that may interfere with ESP wallhack or Aimbot toggles.',
			),
			section(
				'Activate ESP wallhack and Aimbot profiles',
				'Follow the delivery instructions in your license email. Load default ESP wallhack categories for agents, enemies, and loot — then tune radar range and Aimbot smoothness to your playstyle.',
				'Use in-client hotkeys to toggle ESP, radar, and Aimbot mid-match. Details for Vanguard module live on <a href="/valorant-esp/">ESP</a>, <a href="/valorant-aimbot/">Aimbot</a>, and <a href="/valorant-cheats/">mod menu</a>.',
				'Prefer a soft tracking feel? Start with the <a href="/valorant-aimbot/">soft aim</a> recommendations before raising aggressiveness.',
			),
			section(
				'After Valorant or Vanguard anti-cheat patches',
				'When Riot Games ships a major Valorant update or Vanguard anti-cheat patch, revisit Updates before queueing. Download maintenance rebuilds when posted.',
				`Official anti-cheat background: ${EXT.vanguard}. Our practical workflow is documented on the <a href="/updates/">Vanguard bypass page</a> and <a href="/valorant-cheats/">undetected guide</a>.`,
				'Contact <a href="/support/">Support</a> with your order ID if activation fails after a patch — include Windows version and error details for faster replies.',
			),
		],
	},
	updates: {
		title: 'Valorant Cheats Updates | Vanguard Maintenance Log',
		description:
			'Valorant cheats update log: Vanguard rebuilds for ESP boxes, soft aim, and radar on Windows PC. Check status before queueing after patches.',
		h1: 'Valorant Cheats Updates — Maintenance Log',
		intro:
			'Track Vanguard maintenance and Valorant patch rebuilds for the undetected ESP wallhack, radar hack, and Aimbot package. Check here before queueing after major updates.',
		imageAlt: "Valorant Cheats live status after Vanguard and game patches",
		galleryTitle: 'Valorant patch and maintenance visuals',
		ctaPrimary: 'Buy Valorant Cheats',
		ctaSecondary: 'Undetected status guide',
		ctaSecondaryHref: '/valorant-cheats/',
		sections: [
			section(
				'Why the Updates page matters',
				'Valorant and Vanguard anti-cheat receive frequent patches. Valorant Cheats publishes maintenance notes when ESP wallhack, radar, or Aimbot behavior needs a rebuild.',
				`Use ${EXT.status} for Riot Games platform health and this page for Valorant Cheats build status — both matter on big update days.`,
				'Checking this log before you queue reduces surprises after game days or seasonal launches on match and deathmatch.',
			),
			section(
				'What maintenance entries cover',
				'Entries note Vanguard anti-cheat compatibility status, rebuilt ESP wallhack overlays, radar range fixes, Aimbot tuning after weapon balance changes, and digital delivery of new builds to active licenses.',
				'Lifetime and monthly subscribers receive rebuild access during active license terms. See <a href="/pricing/">Pricing</a> if you need to renew.',
				'For context on why rebuilds happen, read the <a href="/updates/">Vanguard bypass guide</a> and <a href="/valorant-cheats/">undetected Valorant cheats</a> explainer.',
			),
			section(
				'Staying undetected after patches',
				'No cheat guarantees permanent undetected status. Combine maintenance updates with responsible in-game settings and patch awareness.',
				`Follow season notes from ${EXT.valorant}, then confirm our rebuild is live before you queue.`,
				'For urgent status questions after a Vanguard update, contact <a href="/support/">Support</a> with your license tier and last played build version.',
			),
		],
	},
	faq: {
		title: 'Valorant Cheats FAQ | ESP, Soft Aim & Radar Answers',
		description:
			'Valorant cheats FAQ: ESP boxes, soft aim, Vanguard maintenance, and pricing for PC. Clear answers before you buy.',
		h1: 'Valorant Cheats FAQ — Common Questions',
		intro:
			'Answers about undetected Valorant Cheats — ESP wallhack, radar hack, Aimbot, Vanguard maintenance, checkout, and Valorant compatibility on Windows PC.',
		imageAlt: "Valorant Cheats FAQ — delivery, setup, and update answers",
		galleryTitle: 'Valorant Cheats FAQ visuals',
		ctaPrimary: 'Buy Valorant Cheats',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'What is Valorant Cheats?',
				'Valorant Cheats is an undetected cheat package for Valorant on Windows PC. It includes ESP wallhack, 2D radar-style awareness, and Aimbot controls with Vanguard maintenance updates.',
				'Packages cover match and deathmatch. Explore <a href="/features/">Features</a> for the full control list and <a href="/valorant-esp/">ESP</a> / <a href="/valorant-aimbot/">Aimbot</a> for module detail.',
				`Valorant itself is published by Riot Games (${EXT.valorant}). Cheats are third-party tools and may violate Riot Games' rules — use is at your own risk.`,
			),
			section(
				'Are Valorant Cheats undetected in 2026?',
				'Valorant Cheats is maintained with rebuilds after Vanguard anti-cheat and game patches. Check the <a href="/updates/">Updates page</a> for current status — no cheat can guarantee permanent undetected operation.',
				'Read <a href="/valorant-cheats/">undetected Valorant cheats</a> and the <a href="/updates/">Vanguard guide</a> for the maintenance workflow.',
				'Responsible settings and reading maintenance notes before queueing are essential.',
			),
			section(
				'Delivery, pricing, and support',
				'Licenses deliver digitally after payment confirmation. Monthly is $35; lifetime is $150 USD — see <a href="/pricing/">Pricing</a>.',
				'Contact support@valocheats.com or the <a href="/support/">Support page</a> with order details for setup or billing help. First launch steps are on <a href="/setup/">Setup</a>.',
				'Refund eligibility is covered in the <a href="/refund-policy/">Refund Policy</a>.',
			),
		],
	},
	support: {
		title: 'Valorant Cheats Support | Help & Contact',
		description:
			'Contact valorant cheats support for licenses, ESP setup, soft aim profiles, and on Windows PC. Include your order ID for faster help.',
		h1: 'Valorant Cheats Support — Contact Us',
		intro:
			'Get help with Valorant Cheats licenses, checkout, ESP wallhack setup, Aimbot profiles, and Vanguard maintenance for Valorant on Windows PC.',
		imageAlt: "Valorant Cheats support page for license and setup help",
		galleryTitle: 'Valorant Cheats support resources',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'When to contact support',
				'Reach out for order issues, license activation failures, ESP wallhack or Aimbot setup questions, and post-patch problems after Vanguard maintenance rebuilds.',
				'Include your order ID, license tier (monthly or lifetime), Windows version, and a clear description of the issue.',
				'Many answers already live in <a href="/faq/">FAQ</a>, <a href="/setup/">Setup</a>, and <a href="/updates/">Updates</a> — check those first for faster resolution.',
			),
			section(
				'Response times and scope',
				'Support requests are reviewed daily. Valorant Cheats support covers delivery, billing, setup, and maintenance — not in-game coaching or account recovery for Riot Games bans.',
				`Account and game policy questions belong with Riot Games. We can help with license delivery and product configuration only.`,
				'Check the Updates page and FAQ before opening a ticket — many post-patch questions are answered there.',
			),
			section(
				'Self-service resources',
				'Setup guide, Features list, Updates log, Refund Policy, and Terms of Use are linked from the footer. Vanguard bypass notes live on the dedicated <a href="/updates/">Vanguard anti-cheat page</a>.',
				'Email: support@valocheats.com',
				'Ready to purchase or renew? Open <a href="/pricing/">Pricing</a>. Need feature detail first? See <a href="/features/">Features</a>.',
			),
		],
	},
	undetected: {
		title: 'Undetected Valorant Cheats 2026 | Vanguard Maintenance',
		description:
			'Undetected valorant cheats with Vanguard maintenance for ESP boxes, soft aim, and radar on Windows PC. Check status before you queue.',
		h1: 'Undetected Valorant Cheats — Vanguard Maintenance',
		intro:
			'How Valorant Cheats stays maintained for Valorant after Vanguard anti-cheat patches — ESP wallhack, radar hack, and Aimbot rebuilds for Windows PC.',
		imageAlt: "Valorant Cheats undetected status overview for Windows PC",
		galleryTitle: 'Undetected Valorant Cheats visuals',
		ctaPrimary: 'Buy Valorant Cheats',
		ctaSecondary: 'Vanguard bypass guide',
		ctaSecondaryHref: '/updates/',
		sections: [
			section(
				'What undetected means for Valorant Cheats',
				'Undetected Valorant Cheats means the package is actively maintained against Vanguard anti-cheat and major Valorant patches — not that detection is impossible forever.',
				'Rebuilds target ESP wallhack overlays, radar behavior, and Aimbot signatures after Vanguard security updates.',
				`Anti-cheat technology is documented by ${EXT.vanguard}; Valorant client updates ship through ${EXT.activision}. Undetected status is an ongoing process tied to those releases.`,
			),
			section(
				'Vanguard maintenance workflow',
				'When Vanguard anti-cheat or Valorant updates ship, the team assesses ESP, radar, and Aimbot modules, publishes status on the <a href="/updates/">Updates page</a>, and delivers rebuilt builds to active licenses.',
				`On patch mornings, also check ${EXT.status} for launcher outages that can look like product failures.`,
				'Deep technical workflow: <a href="/updates/">Vanguard bypass Valorant guide</a>. Feature stack: <a href="/features/">Features</a>.',
			),
			section(
				'Responsible use and next steps',
				'Combine maintenance with conservative in-game settings. Read the <a href="/faq/">FAQ</a> and Updates log regularly — undetected status is not a one-time promise.',
				'Lifetime and monthly plans include rebuild access during active terms — see <a href="/pricing/">Pricing</a>.',
				'New buyers should also read <a href="/valorant-cheats/">Valorant cheats 2026</a> and complete <a href="/setup/">Setup</a> after delivery.',
			),
		],
	},
	wallhack: {
		title: 'Valorant Wallhack 2026 | ESP Boxes & Visibility',
		description:
			'Valorant wallhack ESP with player boxes and orb markers for Windows PC. Undetected valorant cheats — learn overlays and buy.',
		h1: 'Valorant Wallhack — ESP Boxes & Visibility',
		intro:
			'Valorant wallhack ESP for Valorant — see players, loot, ultimates, and containers through toggleable wallhack overlays built for agent matches and Deathmatch.',
		imageAlt: "Valorant wallhack visibility through walls in a match",
		galleryTitle: 'Valorant wallhack ESP gallery',
		ctaPrimary: 'Buy Valorant Cheats',
		ctaSecondary: 'Valorant ESP page',
		ctaSecondaryHref: '/valorant-esp/',
		sections: [
			section(
				'Wallhack ESP vs raw aim tools',
				'A Valorant wallhack focuses on information — player outlines, loot pins, boss threat cues — rather than automatic aiming. Valorant Cheats bundles wallhack ESP with radar and optional Aimbot in one license.',
				'Toggle categories so only the wallhack overlays you need stay active during rotations and site holds.',
				'For the broader ESP keyword page see <a href="/valorant-esp/">Valorant ESP</a>; for combat assist see <a href="/valorant-aimbot/">Aimbot</a>.',
			),
			section(
				'Map coverage for wallhack ESP',
				'Wallhack overlays support match, deathmatch, and competitive lobbies with distance readouts and snaplines for engagement control.',
				`Season maps and POI changes are announced via ${EXT.valorant}. Wallhack remains useful because it tracks entities, not fixed landmarks alone.`,
				'Pair wallhack awareness with <a href="/valorant-radar-hack/">radar hack</a> cues for flanks during building and rooftop fights.',
			),
			section(
				'Undetected wallhack maintenance',
				'ESP wallhack modules rebuild after Vanguard anti-cheat patches. Follow the <a href="/updates/">Updates page</a> and complete checkout for instant license delivery on Windows PC.',
				'Learn the full maintenance story on <a href="/valorant-cheats/">undetected Valorant cheats</a> and <a href="/updates/">Vanguard bypass</a>.',
				'Ready to buy? Compare <a href="/pricing/">Pricing</a> or continue to the <a href="/valorant-esp/">ESP hack</a> landing for alternate search wording.',
			),
		],
	},
	radar: {
		title: 'Valorant Radar Hack 2026 | 2D Threat Overlay',
		description:
			'Valorant radar hack for flank awareness on Windows PC. Bundled with ESP boxes, soft aim, and radar in our valorant cheats package.',
		h1: 'Valorant Radar Hack — 2D Threat Awareness',
		intro:
			'2D radar-style overlay for Valorant — directional threat cues for nearby players outside your line of sight, bundled with ESP wallhack and Aimbot.',
		imageAlt: "Valorant 2D radar overlay showing nearby threats",
		galleryTitle: 'Valorant radar hack visuals',
		ctaPrimary: 'Buy Valorant Cheats',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/valorant-esp/',
		sections: [
			section(
				'Why radar hack matters in Valorant',
				'matches fights happen in three dimensions — rooftops, windows, and flanks. A 2D radar overlay shows nearby player threats outside direct line of sight so you can reposition before a third party.',
				'Valorant Cheats radar complements <a href="/valorant-esp/">ESP wallhack</a> markers during squad pushes and site camp fights.',
				`Mode rules and seasonal changes come from ${EXT.valorant}. Radar range remains configurable when map scale or mobility meta shifts.`,
			),
			section(
				'Configurable radar range',
				'Adjust radar range for early rotations versus tight site holds. Directional cues highlight flanks during building clears and flank pushes across match and deathmatch.',
				'Toggle radar alongside ESP and Aimbot with in-client hotkeys during live matches — see the <a href="/valorant-cheats/">mod menu</a> page.',
				'Combat follow-up lives on <a href="/valorant-aimbot/">Aimbot</a> when you convert radar info into a fight.',
			),
			section(
				'Maintenance and licensing',
				'Radar hack modules receive Vanguard maintenance rebuilds with the full Valorant Cheats package. Monthly and lifetime licenses include digital delivery — see <a href="/pricing/">Pricing</a>.',
				'Check <a href="/updates/">Updates</a> after major Valorant patches before relying on previous radar configs.',
				'New to the stack? Start at <a href="/features/">Features</a> or <a href="/valorant-cheats/">undetected status</a>.',
			),
		],
	},
	'vanguard': {
		title: 'Vanguard Bypass Valorant | Valorant Cheats Maintenance',
		description:
			'How valorant cheats rebuild after Vanguard patches — ESP boxes, soft aim, and radar maintenance for Windows PC. Read before queueing.',
		h1: 'Vanguard Bypass — Valorant Cheats Maintenance',
		intro:
			'Understand Vanguard anti-cheat maintenance for Valorant Cheats — how ESP wallhack, radar hack, and Aimbot rebuild after Valorant security updates.',
		imageAlt: "Valorant Cheats maintenance after a Vanguard patch",
		galleryTitle: 'Vanguard maintenance visuals',
		ctaPrimary: 'Buy Valorant Cheats',
		ctaSecondary: 'Check updates',
		ctaSecondaryHref: '/updates/',
		sections: [
			section(
				'Vanguard anti-cheat overview',
				`Vanguard anti-cheat is Riot Games' anti-cheat for Valorant on PC (see ${EXT.vanguard}). Security updates can affect ESP wallhack, radar, and Aimbot behavior — requiring maintenance rebuilds for undetected packages.`,
				`Valorant Cheats monitors Vanguard patch notes and Valorant seasonal updates from ${EXT.valorant} to schedule module reviews.`,
				'“Vanguard bypass” in our wording means timely maintenance — not a permanent free pass around anti-cheat.',
			),
			section(
				'What happens after a Vanguard patch',
				'The team tests ESP overlays, radar signatures, and Aimbot profiles against the new build, publishes status on <a href="/updates/">Updates</a>, and ships rebuilt packages to active licenses.',
				`Confirm Riot Games service health on ${EXT.status} if the launcher or matchmaking fails during the same window.`,
				'Avoid queueing on old builds after major patch days until maintenance notes confirm a new release. Related reading: <a href="/valorant-cheats/">undetected Valorant cheats</a>.',
			),
			section(
				'No permanent bypass guarantee',
				'Vanguard bypass in practice means timely maintenance. Read the undetected guide, <a href="/faq/">FAQ</a>, and Updates log before every session.',
				'Contact <a href="/support/">Support</a> if activation fails immediately after a posted rebuild.',
				'Buying for the first time? Compare <a href="/pricing/">Pricing</a> and finish <a href="/setup/">Setup</a> only after Updates shows a live build.',
			),
		],
	},
	'cheats-2026': {
		title: 'Valorant Cheats 2026 | ESP Soft Aim & Radar',
		description:
			'Best valorant cheats 2026: ESP boxes, soft aim, and radar for Windows PC. Undetected valorant cheats with Vanguard maintenance — compare and buy.',
		h1: 'Valorant Cheats 2026 — ESP, Soft Aim & Radar',
		intro:
			'The 2026 Valorant Cheats package for Valorant — undetected ESP wallhack, radar hack, and Aimbot with Vanguard maintenance, instant delivery, and Windows PC support.',
		imageAlt: "Valorant Cheats product overview for Valorant",
		galleryTitle: 'Valorant Cheats 2026 gallery',
		ctaPrimary: 'Buy Valorant Cheats',
		ctaSecondary: 'Compare features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Why valorant cheats buyers choose Valorant Cheats in 2026',
				'2026 seasons bring new maps, weapons, and Vanguard anti-cheat updates. Valorant Cheats bundles ESP wallhack, radar hack, and Aimbot with active maintenance — not a stale prior-year build.',
				`Track official season messaging on ${EXT.valorant}, then use our <a href="/updates/">Updates log</a> for product rebuild timing.`,
				'Monthly ($35) and lifetime ($150) plans cover match and deathmatch loops — see <a href="/pricing/">Pricing</a>.',
			),
			section(
				'Full feature stack for 2026 buyers',
				'Player ESP wallhack, orb markers, 2D radar overlays, Aimbot profiles, in-client toggles, and post-patch rebuilds — one license instead of stacking separate tools.',
				'Deep links: <a href="/valorant-cheats/">Valorant cheats pillar</a>, <a href="/valorant-esp/">ESP</a>, <a href="/valorant-aimbot/">Aimbot</a>, <a href="/valorant-esp/">wallhack</a>, <a href="/valorant-radar-hack/">radar</a>, <a href="/valorant-cheats/">undetected</a>.',
				'Instant digital delivery after checkout confirmation worldwide.',
			),
			section(
				'Before you buy in 2026',
				'Read the <a href="/valorant-cheats/">Valorant cheats</a> pillar, Features, Pricing, Setup, and Updates pages. Check undetected status notes after every major patch — responsible use and maintenance awareness matter.',
				'Also compare the <a href="/valorant-cheats/">Valorant cheats</a> checklist, <a href="/blog/valorant-cheats-2026-whats-new/">2026 blog guide</a>, and <a href="/faq/">FAQ</a>.',
				'Support is available at support@valocheats.com via the <a href="/support/">Support page</a>.',
			),
		],
	},
	hacks: {
		title: 'Valorant Cheats 2026 | Undetected ESP Aimbot Guide',
		description:
			'Valorant cheats for Windows PC: undetected ESP wallhack, radar hack, and Aimbot with Vanguard maintenance. Compare valorant cheats options and buy the full package.',
		h1: 'Valorant Cheats — Undetected ESP, Aimbot & Wallhack',
		intro:
			'Valorant cheats for match and deathmatch combine ESP wallhack visibility, 2D radar-style threat cues, and Aimbot controls in one undetected Windows PC license — maintained after Vanguard anti-cheat patches. This is the pillar guide for valorant cheats in 2026.',
		imageAlt: "Valorant Cheats product page — ESP, aimbot, and radar",
		galleryTitle: 'Valorant cheats gallery — ESP, Aimbot, wallhack',
		ctaPrimary: 'Buy Valorant Cheats',
		ctaSecondary: 'See undetected guide',
		ctaSecondaryHref: '/valorant-cheats/',
		sections: [
			section(
				'What Valorant cheats include in 2026',
				'Players searching for Valorant cheats usually want visibility and combat tools without stacking separate downloads. Valorant Cheats bundles player ESP wallhack, orb markers, 2D radar overlays, and configurable Aimbot in one maintained package — the same toolkit often called valorant cheats.',
				'Coverage spans match and deathmatch with in-client toggles for live matches. Monthly ($35) and lifetime ($150) licenses unlock the full stack.',
				`Official game updates come from ${EXT.valorant}; our hacks package tracks those releases via the <a href="/updates/">Updates page</a>. Cross-check platform health on ${EXT.status} before patch-day queues.`,
			),
			section(
				'How this Valorant cheats pillar fits nearby pages',
				'Use this pillar for the core product overview. For year-specific buying notes, see the <a href="/valorant-cheats/">valorant cheats 2026</a> and <a href="/valorant-cheats/">Valorant cheats</a> pages cover buyer comparisons in cheats wording.',
				'Deep-dive modules: <a href="/valorant-esp/">Valorant ESP</a>, <a href="/valorant-aimbot/">Valorant Aimbot</a>, <a href="/valorant-esp/">wallhack</a>, <a href="/valorant-radar-hack/">radar hack</a>, and <a href="/valorant-aimbot/">soft aim</a>.',
				'Blog guides expand Vanguard keyword: <a href="/blog/valorant-cheats-complete-guide-2026/">hacks complete guide</a>, <a href="/blog/valorant-cheats-buyers-guide/">cheats buyers guide</a>, and <a href="/blog/undetected-valorant-cheats-vanguard/">undetected Vanguard notes</a>.',
			),
			section(
				'Valorant cheats vs single-feature tools',
				'Standalone hacks often cover only wallhack or only aim assist. Valorant Cheats maps the full match loop: read enemy squads, track ultimates and containers, spot flanks on radar, and tune Aimbot per weapon class.',
				'Compare the <a href="/valorant-esp/">ESP</a>, <a href="/valorant-aimbot/">Aimbot</a>, and <a href="/features/">Features</a> pages — or review <a href="/pricing/">Pricing</a> for monthly and lifetime licenses.',
				'Related landings: <a href="/setup/">cheat download</a>, <a href="/valorant-cheats/">mod menu</a>, <a href="/valorant-aimbot/">aimbot</a>, <a href="/valorant-esp/">ESP</a>.',
			),
			section(
				'Undetected Valorant cheats with Vanguard maintenance',
				'Undetected Valorant cheats require rebuilds after Vanguard anti-cheat and major Valorant patches. Check Updates before queueing — maintenance notes confirm when a new build is live. No package can promise permanent undetected status.',
				`See ${EXT.vanguard} for anti-cheat background and our <a href="/updates/">Vanguard bypass guide</a> for the practical workflow. Pair with <a href="/valorant-cheats/">undetected Valorant cheats</a> for status language buyers expect.`,
				'Digital delivery runs after checkout for Windows 10 and 11 PCs worldwide. After purchase, follow <a href="/setup/">Setup</a> and keep <a href="/support/">Support</a> ready with your order ID.',
			),
		],
	},
	'cheat-download': {
		title: 'Valorant Hack Download 2026 | Instant Access',
		description:
			'Valorant cheat download with instant license delivery — ESP boxes, soft aim, and radar for Windows PC. Buy, activate, and play.',
		h1: 'Valorant Hack Download — Instant License Delivery',
		intro:
			'How Valorant cheat download works for Valorant — digital license delivery after payment confirmation, with ESP wallhack, radar hack, and Aimbot access on Windows PC.',
		imageAlt: "Valorant Cheats download and install delivery flow",
		galleryTitle: 'Valorant cheat download visuals',
		ctaPrimary: 'Buy Valorant Cheats',
		ctaSecondary: 'Setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'How Valorant cheat download delivery works',
				'After checkout confirms payment, Valorant Cheats license details arrive digitally by email. No physical shipment — access begins once activation instructions are delivered.',
				'Keep your order confirmation and license email ready for the <a href="/setup/">Setup guide</a> and Support requests.',
				`If Riot Games services are down, check ${EXT.status} before assuming a download failure.`,
			),
			section(
				'What your download unlocks',
				'Every Valorant cheat download includes player ESP wallhack, loot and container markers, 2D radar overlays, Aimbot profiles, and in-client toggles for agent matches and Deathmatch.',
				'Monthly ($35) and lifetime ($150) plans share the same feature stack — compare options on the <a href="/pricing/">Pricing page</a>.',
				'Feature detail: <a href="/features/">Features</a>. Module pages: <a href="/valorant-esp/">ESP</a>, <a href="/valorant-aimbot/">Aimbot</a>.',
			),
			section(
				'After purchase — setup and updates',
				'Follow Setup to activate ESP wallhack and Aimbot on Windows 10 or 11. When Valorant or Vanguard anti-cheat patches ship, check the <a href="/updates/">Updates page</a> for maintenance rebuilds.',
				'Contact <a href="/support/">Support</a> with your order ID if delivery or activation fails within 24 hours of purchase.',
				'Also read <a href="/valorant-cheats/">undetected status</a> so you know what “download ready” means after a patch.',
			),
		],
	},
	'mod-menu': {
		title: 'Valorant Mod Menu 2026 | ESP & Soft Aim Toggles',
		description:
			'Valorant mod menu for in-match toggles — ESP boxes, soft aim, radar, and on Windows PC. Undetected valorant cheats package.',
		h1: 'Valorant Mod Menu — In-Client Control Panel',
		intro:
			'Valorant mod menu controls for Valorant — toggle ESP wallhack categories, radar range, and Aimbot profiles mid-match without leaving your Valorant session on Windows PC.',
		imageAlt: "Valorant Cheats in-game menu controls",
		galleryTitle: 'Valorant mod menu gallery',
		ctaPrimary: 'Buy Valorant Cheats',
		ctaSecondary: 'Full feature list',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What a Valorant mod menu controls',
				'A Valorant mod menu is the in-client panel where you enable ESP wallhack overlays, adjust radar range, and switch Aimbot profiles during live matches. Valorant Cheats keeps those toggles accessible with hotkeys.',
				'Toggle player outlines, orb markers, vehicle cues, and per-weapon Aimbot settings without alt-tabbing out of Valorant.',
				'Control deep-dives: <a href="/valorant-esp/">ESP</a>, <a href="/valorant-aimbot/">Aimbot</a>, <a href="/valorant-radar-hack/">radar</a>.',
			),
			section(
				'Mod menu categories for agent matches and Deathmatch',
				'Separate ESP wallhack categories for players, loot, containers, and ultimates let you reduce overlay noise during rotations and site holds.',
				'Radar hack range and Aimbot smoothness adjust from the same mod menu — useful when ${EXT.valorant} seasons change fight distances and mobility.',
				'Soft tracking players should start with <a href="/valorant-aimbot/">soft aim</a> profiles before aggressive FOV.',
			),
			section(
				'Maintained mod menu after Vanguard patches',
				'Valorant mod menu behavior is rebuilt when Vanguard anti-cheat or major Valorant updates land. Follow the <a href="/updates/">Updates page</a> and <a href="/updates/">Vanguard bypass guide</a> before queueing on patch days.',
				'Checkout with instant digital delivery for monthly and lifetime licenses — see <a href="/pricing/">Pricing</a>.',
				'Need install steps? Open <a href="/setup/">Setup</a> after your license email arrives.',
			),
		],
	},
	'soft-aim': {
		title: 'Valorant Soft Aim 2026 | Smooth Aimbot Settings',
		description:
			'Valorant soft aim settings for natural tracking on Windows PC. Smoothness, FOV, and bone priority — included in our valorant cheats with ESP boxes.',
		h1: 'Valorant Soft Aim — Smooth Aimbot Controls',
		intro:
			'Valorant soft aim settings for Valorant — configurable Aimbot smoothness, FOV, bone priority, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: "Valorant soft aim FOV and smoothness settings",
		galleryTitle: 'Valorant soft aim gallery',
		ctaPrimary: 'Buy Valorant Cheats',
		ctaSecondary: 'Aimbot controls',
		ctaSecondaryHref: '/valorant-aimbot/',
		sections: [
			section(
				'What Valorant soft aim means',
				'Valorant soft aim refers to Aimbot behavior tuned for smooth, natural-looking tracking rather than instant snap. Valorant Cheats exposes smoothness, FOV, and sensitivity sliders so you control how assist feels in BR firefights.',
				'Bone priority and target selection cover closest player, lowest health, or highest-threat targets during squad fights.',
				'Full Aimbot documentation: <a href="/valorant-aimbot/">Valorant Aimbot</a>. Alternate wording: <a href="/valorant-aimbot/">aimbot hack</a>.',
			),
			section(
				'Soft aim profiles per weapon class',
				'Save separate soft aim profiles for ARs, SMGs, and bolt-actions. Switch between long-range AR beams and close-quarters room clears with hotkeys mid-match.',
				`Weapon TTKs shift with ${EXT.valorant} balance patches — retune smoothness after major combat updates.`,
				'Soft aim ships alongside <a href="/valorant-esp/">ESP wallhack</a> and <a href="/valorant-radar-hack/">2D radar</a> overlays.',
			),
			section(
				'Undetected soft aim with Vanguard maintenance',
				'Aimbot modules rebuild after Vanguard anti-cheat patches. Check the <a href="/updates/">Updates page</a> before queueing — responsible settings and maintenance awareness matter for undetected play.',
				'Monthly and lifetime licenses checkout with digital delivery on Windows PC — <a href="/pricing/">Pricing</a>.',
				'Activation help: <a href="/setup/">Setup</a> · status questions: <a href="/support/">Support</a>.',
			),
		],
	},
	'best-cheats': {
		title: 'Best Valorant Cheats 2026 | Buyer Guide',
		description:
			'Best valorant cheats for 2026: ESP boxes, soft aim, and Vanguard maintenance on Windows PC. Use this checklist before checkout.',
		h1: 'Best Valorant Cheats — 2026 Buyer Guide',
		intro:
			'Compare the Valorant cheats for Valorant in 2026 — undetected ESP wallhack, radar hack, and Aimbot in one maintained package with Vanguard anti-cheat rebuilds and instant delivery.',
		imageAlt: "Valorant Cheats overview for Valorant on PC",
		galleryTitle: 'Best Valorant cheats gallery',
		ctaPrimary: 'Buy Valorant Cheats',
		ctaSecondary: 'Compare pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'What makes the Valorant cheats in 2026',
				'The Valorant cheats combine active Vanguard maintenance, a full ESP wallhack and radar stack, configurable Aimbot, and clear update communication — not a stale build from a prior season.',
				'Valorant Cheats covers match and deathmatch with in-client toggles and post-patch rebuilds.',
				`Verify the live game is healthy via ${EXT.status}, then confirm our <a href="/updates/">Updates</a> note before you judge any package “best.”`,
			),
			section(
				'Best Valorant cheats feature checklist',
				'Look for player ESP wallhack, orb markers, 2D radar overlays, Aimbot profiles, hotkey toggles, and documented maintenance after Valorant patches.',
				'Review <a href="/features/">Features</a>, <a href="/valorant-cheats/">undetected status</a>, and <a href="/valorant-cheats/">Valorant cheats 2026</a> before checkout — monthly ($35) and lifetime ($150) plans available.',
				'Module pages worth opening: <a href="/valorant-esp/">ESP</a>, <a href="/valorant-aimbot/">Aimbot</a>, <a href="/valorant-cheats/">hacks</a>.',
			),
			section(
				'Buying the Valorant cheats safely',
				'Purchase through secure checkout for instant digital delivery. Read Setup, FAQ, and Updates pages before your first queue — and contact Support with order details if activation needs help.',
				'No cheat guarantees permanent undetected status — combine maintenance with responsible in-game settings.',
				`Remember: using cheats can violate Riot Games terms. Proceed only if you accept that risk.`,
			),
		],
	},
	'aimbot-hack': {
		title: 'Valorant Aimbot Hack 2026 | Soft Aim Assist',
		description:
			'Valorant aimbot hack with soft aim for Windows PC. FOV, bone priority, and hotkeys — bundled with ESP boxes in our valorant cheats package.',
		h1: 'Valorant Aimbot Hack — Soft Aim Assist',
		intro:
			'Valorant aimbot hack tools for Valorant — smoothness, FOV, bone priority, per-weapon profiles, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: "Valorant aimbot hack controls and bone priority",
		galleryTitle: 'Valorant aimbot hack gallery',
		ctaPrimary: 'Buy Valorant Cheats',
		ctaSecondary: 'Aimbot settings',
		ctaSecondaryHref: '/valorant-aimbot/',
		sections: [
			section(
				'Valorant aimbot hack vs visibility tools',
				'A Valorant aimbot hack focuses on assisted targeting during firefights — while ESP wallhack and radar handle map awareness. Valorant Cheats bundles aimbot hack modules with visibility overlays in one license.',
				'Smoothness, FOV, and sensitivity controls tune assist for Valorant combat pace across agent matches and Deathmatch.',
				'Prefer softer tracking language? See <a href="/valorant-aimbot/">soft aim</a>. Full settings: <a href="/valorant-aimbot/">Aimbot page</a>.',
			),
			section(
				'Aimbot hack controls and hotkeys',
				'Bone priority options cover head, chest, or dynamic targets. Hotkeys enable or disable aimbot hack mid-match without opening menus during rotations or late-match sites.',
				'Per-weapon profile slots separate long-range AR tuning from close-quarters SMG settings.',
				`Balance patches from ${EXT.valorant} can change ideal FOV — retune after major weapon updates.`,
			),
			section(
				'Undetected aimbot hack maintenance',
				'Aimbot hack signatures rebuild after Vanguard anti-cheat updates. Follow the <a href="/updates/">Updates page</a> and <a href="/updates/">Vanguard bypass guide</a> before queueing after patch days.',
				'Checkout with instant digital delivery for Windows 10 and 11 — <a href="/pricing/">Pricing</a>.',
				'Pair with <a href="/valorant-esp/">ESP</a> for the full information + assist loop.',
			),
		],
	},
	'esp-hack': {
		title: 'Valorant ESP Hack 2026 | Player Boxes & Loot',
		description:
			'Valorant ESP hack with player boxes and orb markers for Windows PC. Undetected valorant cheats with — see overlays and buy.',
		h1: 'Valorant ESP Hack — Player Boxes Guide',
		intro:
			'Valorant ESP hack overlays for Valorant — player outlines, boss threat cues, loot and container markers with distance readouts across match and deathmatch.',
		imageAlt: "Valorant ESP hack boxes and orb markers",
		galleryTitle: 'Valorant ESP hack gallery',
		ctaPrimary: 'Buy Valorant Cheats',
		ctaSecondary: 'ESP controls',
		ctaSecondaryHref: '/valorant-esp/',
		sections: [
			section(
				'What a Valorant ESP hack shows',
				'A Valorant ESP hack renders enemy player outlines, vehicle positions, and loot pins through walls and terrain — closing the information gap before you commit to a fight.',
				'Distance readouts and snapline options help control engagement range during squad pushes and third-party scenarios.',
				'Canonical visibility guide: <a href="/valorant-esp/">Valorant ESP</a>. Wallhack wording: <a href="/valorant-esp/">wallhack</a>.',
			),
			section(
				'ESP hack categories for matches',
				'Toggle player ESP hack, orb markers, chest pins, and vehicle cues independently so only match-critical overlays stay active during rotations.',
				'Team and enemy colour coding supports agent matches and Deathmatch.',
				`POI and loot changes publish through ${EXT.activision} — keep categories toggled to what the current map rewards.`,
			),
			section(
				'Undetected ESP hack with Vanguard maintenance',
				'ESP hack modules rebuild after Vanguard anti-cheat and Valorant patches. Check the <a href="/updates/">Updates page</a> before queueing — pair ESP hack awareness with <a href="/valorant-radar-hack/">radar hack</a> for flank reads.',
				'Licenses deliver digitally after checkout on Windows PC — see <a href="/pricing/">Pricing</a>.',
				'Install steps: <a href="/setup/">Setup</a>. Status questions: <a href="/valorant-cheats/">undetected guide</a>.',
			),
		],
	},
	'unlock-all': {
		title: 'Valorant Unlock All 2026 | What It Really Means',
		description:
			'Valorant unlock all explained vs real valorant cheats — ESP boxes, soft aim, and radar for Windows PC. Know what you are buying.',
		h1: 'Valorant Unlock All — What Players Search For',
		intro:
			'Valorant unlock all is a common search term for Valorant — this page clarifies what unlock-all tools claim versus the ESP wallhack, radar hack, and Aimbot tools Valorant Cheats actually provides on Windows PC.',
		imageAlt: "Valorant Cheats license features overview",
		galleryTitle: 'Valorant unlock all guide visuals',
		ctaPrimary: 'Buy Valorant Cheats',
		ctaSecondary: 'See features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What Valorant unlock all usually means',
				'Valorant unlock all searches often refer to instant access to weapons, camos, skins, or battle pass tiers. Those claims differ from visibility and combat-assist tools like ESP wallhack and Aimbot.',
				'Valorant Cheats focuses on in-match awareness — player ESP, orb markers, radar overlays, and configurable Aimbot — not account-wide cosmetic unlocks.',
				`Cosmetics and episode progression items are sold through ${EXT.valorant}. Be wary of unlock-all downloads that promise free skins — they are often scams.`,
			),
			section(
				'Visibility tools vs unlock-all claims',
				'ESP wallhack helps you spot enemy squads, ultimates, and high-value loot during live matches. Radar hack adds flank awareness; Aimbot covers combat assist with smoothness and hotkey controls.',
				'For loadout planning during a match, loot and container markers speed map rotations — see the <a href="/valorant-esp/">ESP</a> and <a href="/features/">Features</a> pages for the full tool list.',
				'Related: <a href="/valorant-cheats/">Valorant cheats</a> and <a href="/valorant-cheats/">Valorant cheats</a>.',
			),
			section(
				'Buying Valorant Cheats for the right reasons',
				'If you need undetected ESP wallhack, radar hack, and Aimbot for Valorant on Windows PC, compare <a href="/pricing/">Pricing</a> and read the <a href="/setup/">Setup guide</a> before checkout.',
				'Check the <a href="/updates/">Updates page</a> after Vanguard anti-cheat patches — maintenance rebuilds publish for active licenses.',
				'Questions? <a href="/faq/">FAQ</a> and <a href="/support/">Support</a> cover delivery and configuration — not cosmetic unlocks.',
			),
		],
	},
	privacy: {
		title: 'Privacy Policy | Valorant Cheats',
		description:
			'Privacy policy for Valorant Cheats. How we handle support emails, order data, and checkout for valorant cheats licenses on valocheats.com.',
		h1: 'Privacy Policy',
		intro: 'How Valorant Cheats handles information when you browse valocheats.com or contact support about a Valorant license.',
		imageAlt: "Valorant Cheats privacy policy page",
		galleryTitle: 'Valorant Cheats legal resources',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read terms of use',
		ctaSecondaryHref: '/terms/',
		sections: [
			section(
				'Information we may collect',
				'We may collect contact details you send by email, order references needed to resolve support requests, and basic technical data used to operate and secure the website.',
				'We do not sell personal data. Checkout payment details are processed by the checkout provider — review their privacy terms for transaction data.',
				['Contact details you send by email', 'Order references for support requests', 'Basic technical data for site security'],
			),
			section(
				'How information is used',
				'Information is used to respond to support requests, process order issues, improve site reliability, and meet legal obligations when required.',
				'Analytics may use aggregated traffic data without identifying individual Valorant Cheats customers.',
			),
			section(
				'Your choices and contact',
				'You may request correction or deletion of support email data by contacting support@valocheats.com with your request details.',
				'Policy updates publish on this page. Continued use of valocheats.com after updates means you accept the revised policy. Also see <a href="/terms/">Terms of Use</a> and <a href="/refund-policy/">Refund Policy</a>.',
			),
		],
	},
	refund: {
		title: 'Refund Policy | Valorant Cheats',
		description:
			'Refund policy for Valorant Cheats. Digital delivery terms and eligibility for valorant cheats packages with ESP, soft aim, and radar.',
		h1: 'Refund Policy',
		intro:
			'Refund terms for Valorant Cheats licenses — ESP wallhack, radar hack, and Aimbot packages purchased through checkout for Valorant.',
		imageAlt: "Valorant Cheats refund policy page",
		galleryTitle: 'Valorant Cheats billing resources',
		ctaPrimary: 'Contact support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Digital delivery and eligibility',
				'Valorant Cheats licenses deliver digitally after payment confirmation. Because access begins immediately, refunds are limited to cases outlined below.',
				'Submit refund requests within 24 hours of purchase with your order ID and reason.',
			),
			section(
				'When refunds may be approved',
				'Duplicate charges, failed delivery despite confirmed payment, or technical activation failures verified by support may qualify for review.',
				'Refund decisions are final. Chargebacks without contacting support first may result in license revocation. See also <a href="/terms/">Terms of Use</a>.',
			),
			section(
				'How to request a refund',
				'Email support@valocheats.com with subject "Refund Request", your order ID, purchase date, and issue summary — or use the <a href="/support/">Support page</a>.',
				'Approved refunds process back to the original payment method when possible. Pricing details live on <a href="/pricing/">Pricing</a>.',
			),
		],
	},
	terms: {
		title: 'Terms of Use 2026 | Valorant Cheats Rules',
		description:
			'Terms of use for valocheats.com and Valorant Cheats licenses. Usage rules, anti-cheat risk, and liability for Windows PC cheats.',
		h1: 'Terms of Use',
		intro: 'Terms governing use of valocheats.com and Valorant Cheats licenses for Valorant on Windows PC.',
		imageAlt: "Valorant Cheats terms of use page",
		galleryTitle: 'Valorant Cheats legal pages',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Acceptance and license scope',
				'By purchasing or using Valorant Cheats you agree to these terms. Licenses grant personal use of ESP wallhack, radar, and Aimbot tools for Valorant on Windows PC only.',
				'Sharing, reselling, or reverse-engineering the package violates these terms and may revoke access.',
			),
			section(
				'Risk and anti-cheat disclaimer',
				`Using cheats in Valorant may violate Riot Games terms and result in account penalties. Valorant Cheats provides maintenance but does not guarantee undetected status or account safety.`,
				'You assume all risk. We are not liable for bans, data loss, or damages arising from product use. See also <a href="/valorant-cheats/">undetected status</a>.',
			),
			section(
				'Changes and governing law',
				'We may update these terms by posting revisions on this page. Continued use after changes constitutes acceptance.',
				'Contact support@valocheats.com for questions. Related policies: <a href="/privacy-policy/">Privacy</a> and <a href="/refund-policy/">Refunds</a>.',
			),
		],
	},
};

/** Attach heroImage paths and clamp meta lengths. */
export function finalizePage(pageId, page) {
	return {
		...page,
		title: clampTitle(stripZadeyoFromMeta(page.title)),
		description: clampDesc(stripZadeyoFromMeta(page.description)),
		heroImage: HERO_IMAGES[pageId],
	};
}

export function finalizePages(pages) {
	const out = {};
	for (const [id, page] of Object.entries(pages)) {
		out[id] = finalizePage(id, page);
	}
	return out;
}

export const englishPagesFinal = finalizePages(enPages);
