<script lang="ts">
	import { page } from '$app/stores';
	import { t, locale, setLocale } from '$lib/i18n/translations';
	import type { Locale } from '$lib/i18n/translations';

	let menuOpen = $state(false);

	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	function closeMenu() {
		menuOpen = false;
	}

	function toggleLang() {
		const next: Locale = $locale === 'en' ? 'es' : 'en';
		setLocale(next);
	}

	// Close menu on Escape key
	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape' && menuOpen) closeMenu();
	}

	const navLinks = [
		{ key: 'nav.home' as const, href: '/' },
		{ key: 'nav.vision' as const, href: '/vision' },
		{ key: 'nav.land' as const, href: '/land' },
		{ key: 'nav.contact' as const, href: '/contact' },
	];
</script>

<svelte:window onkeydown={handleKeydown} />

<header class="nav">
	<div class="nav__inner container">
		<a href="/" class="nav__brand" onclick={closeMenu}>
			<span class="nav__brand-title">Cartajima</span>
			<span class="nav__brand-sub">{$t('nav.tagline')}</span>
		</a>

		<nav class="nav__links" aria-label="Main navigation">
			{#each navLinks as link}
				<a
					href={link.href}
					class="nav__link"
					class:nav__link--active={$page.url.pathname === link.href}
				>
					{$t(link.key)}
				</a>
			{/each}
		</nav>

		<div class="nav__actions">
			<button class="nav__lang" onclick={toggleLang} aria-label="Switch language">
				{$t('lang.current')}
			</button>

			<button
				class="nav__hamburger"
				class:nav__hamburger--open={menuOpen}
				onclick={toggleMenu}
				aria-expanded={menuOpen}
				aria-label={menuOpen ? $t('nav.menu_close') : $t('nav.menu_open')}
				aria-controls="mobile-menu"
			>
				<span class="nav__hamburger-bar"></span>
				<span class="nav__hamburger-bar"></span>
				<span class="nav__hamburger-bar"></span>
			</button>
		</div>
	</div>
</header>

<!-- Mobile overlay -->
<div
	class="mobile-menu"
	class:mobile-menu--open={menuOpen}
	id="mobile-menu"
	role="dialog"
	aria-modal="true"
	aria-label="Mobile navigation"
>
	<div class="mobile-menu__header">
		<a href="/" class="nav__brand nav__brand--light" onclick={closeMenu}>
			<span class="nav__brand-title">Cartajima</span>
		</a>
		<button
			class="mobile-menu__close"
			onclick={closeMenu}
			aria-label={$t('nav.menu_close')}
		>
			<span></span><span></span>
		</button>
	</div>

	<nav class="mobile-menu__links" aria-label="Mobile navigation">
		{#each navLinks as link}
			<a
				href={link.href}
				class="mobile-menu__link"
				class:mobile-menu__link--active={$page.url.pathname === link.href}
				onclick={closeMenu}
			>
				{$t(link.key)}
			</a>
		{/each}
	</nav>

	<button class="mobile-menu__lang" onclick={() => { toggleLang(); closeMenu(); }}>
		{$t('lang.switch')}
	</button>
</div>

<!-- Overlay backdrop -->
{#if menuOpen}
	<div class="mobile-overlay" onclick={closeMenu} aria-hidden="true"></div>
{/if}

<style>
	/* Navigation bar */
	.nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
		height: var(--nav-height);
		background: rgba(26, 26, 26, 0.95);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		border-bottom: 1px solid rgba(255, 255, 255, 0.08);
	}

	.nav__inner {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
	}

	.nav__brand {
		display: flex;
		flex-direction: column;
		text-decoration: none;
		flex-shrink: 0;
	}

	.nav__brand-title {
		font-family: var(--font-display);
		font-size: 1.4rem;
		font-weight: 300;
		color: var(--color-cream);
		letter-spacing: 0.06em;
		line-height: 1;
	}

	.nav__brand-sub {
		font-family: var(--font-body);
		font-size: 0.65rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--color-gold-light);
		margin-top: 2px;
		line-height: 1;
	}

	.nav__links {
		display: flex;
		align-items: center;
		gap: 2.5rem;
	}

	.nav__link {
		font-family: var(--font-body);
		font-size: 0.8rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: rgba(245, 240, 232, 0.75);
		text-decoration: none;
		transition: color var(--transition-fast);
		position: relative;
	}

	.nav__link::after {
		content: '';
		position: absolute;
		bottom: -4px;
		left: 0;
		right: 0;
		height: 1px;
		background: var(--color-gold);
		transform: scaleX(0);
		transition: transform var(--transition-mid);
	}

	.nav__link:hover,
	.nav__link--active {
		color: var(--color-cream);
	}

	.nav__link--active::after,
	.nav__link:hover::after {
		transform: scaleX(1);
	}

	.nav__actions {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.nav__lang {
		font-family: var(--font-body);
		font-size: 0.75rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--color-gold-light);
		background: none;
		border: 1px solid rgba(212, 175, 122, 0.4);
		padding: 0.3rem 0.7rem;
		cursor: pointer;
		transition: all var(--transition-fast);
	}

	.nav__lang:hover {
		border-color: var(--color-gold-light);
		color: var(--color-cream);
	}

	/* Hamburger button */
	.nav__hamburger {
		display: none;
		flex-direction: column;
		justify-content: center;
		gap: 5px;
		width: 32px;
		height: 32px;
		background: none;
		border: none;
		cursor: pointer;
		padding: 4px;
	}

	.nav__hamburger-bar {
		display: block;
		width: 100%;
		height: 1.5px;
		background: var(--color-cream);
		transition: all var(--transition-mid);
		transform-origin: center;
	}

	.nav__hamburger--open .nav__hamburger-bar:nth-child(1) {
		transform: translateY(6.5px) rotate(45deg);
	}

	.nav__hamburger--open .nav__hamburger-bar:nth-child(2) {
		opacity: 0;
		transform: scaleX(0);
	}

	.nav__hamburger--open .nav__hamburger-bar:nth-child(3) {
		transform: translateY(-6.5px) rotate(-45deg);
	}

	/* Mobile menu */
	.mobile-menu {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		width: min(320px, 85vw);
		background: var(--color-charcoal);
		z-index: 200;
		transform: translateX(100%);
		transition: transform var(--transition-mid);
		display: flex;
		flex-direction: column;
		padding: 1.5rem;
	}

	.mobile-menu--open {
		transform: translateX(0);
	}

	.mobile-menu__header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 3rem;
		padding-bottom: 1.5rem;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	}

	.nav__brand--light .nav__brand-title {
		color: var(--color-cream);
	}

	.mobile-menu__close {
		width: 32px;
		height: 32px;
		background: none;
		border: none;
		cursor: pointer;
		position: relative;
		flex-shrink: 0;
	}

	.mobile-menu__close span {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 20px;
		height: 1.5px;
		background: var(--color-cream);
		display: block;
	}

	.mobile-menu__close span:first-child {
		transform: translate(-50%, -50%) rotate(45deg);
	}

	.mobile-menu__close span:last-child {
		transform: translate(-50%, -50%) rotate(-45deg);
	}

	.mobile-menu__links {
		display: flex;
		flex-direction: column;
		gap: 0;
		flex: 1;
	}

	.mobile-menu__link {
		font-family: var(--font-display);
		font-size: 1.8rem;
		font-weight: 300;
		color: rgba(245, 240, 232, 0.75);
		text-decoration: none;
		padding: 1rem 0;
		border-bottom: 1px solid rgba(255, 255, 255, 0.07);
		transition: color var(--transition-fast);
	}

	.mobile-menu__link:hover,
	.mobile-menu__link--active {
		color: var(--color-cream);
	}

	.mobile-menu__lang {
		margin-top: 2rem;
		font-family: var(--font-body);
		font-size: 0.8rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--color-gold-light);
		background: none;
		border: 1px solid rgba(212, 175, 122, 0.4);
		padding: 0.6rem 1.5rem;
		cursor: pointer;
		align-self: flex-start;
		transition: all var(--transition-fast);
	}

	.mobile-menu__lang:hover {
		border-color: var(--color-gold-light);
		color: var(--color-cream);
	}

	/* Backdrop */
	.mobile-overlay {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.5);
		z-index: 150;
	}

	/* Responsive */
	@media (max-width: 768px) {
		.nav__links {
			display: none;
		}

		.nav__hamburger {
			display: flex;
		}
	}

	@media (min-width: 769px) {
		.mobile-menu {
			display: none;
		}

		.mobile-overlay {
			display: none;
		}
	}
</style>
