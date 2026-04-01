<script lang="ts">
	import { currentLang, setLang, t } from '$lib/i18n/translations';
	import { page } from '$app/stores';
	
	let currentPath = $derived($page.url.pathname);
	let menuOpen = $state(false);

	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	function closeMenu() {
		menuOpen = false;
	}
</script>

<nav class="main-nav" class:menu-open={menuOpen}>
	<div class="nav-container">
		<a href="/" class="logo">Cartajima</a>
		
		<button 
			class="hamburger" 
			class:open={menuOpen}
			onclick={toggleMenu}
			aria-label="Toggle menu"
			aria-expanded={menuOpen}
		>
			<span></span>
			<span></span>
			<span></span>
		</button>
		
		<div class="nav-right" class:open={menuOpen}>
			<ul class="nav-links">
				<li><a href="/" class:active={currentPath === '/'} onclick={closeMenu}>{$t('nav.home')}</a></li>
				<li><a href="/vision" class:active={currentPath === '/vision'} onclick={closeMenu}>{$t('nav.vision')}</a></li>
				<li><a href="/land" class:active={currentPath === '/land'} onclick={closeMenu}>{$t('nav.land')}</a></li>
				<li><a href="/contact" class:active={currentPath === '/contact'} onclick={closeMenu}>{$t('nav.contact')}</a></li>
			</ul>
			
			<div class="lang-toggle">
				<button 
					class:active={$currentLang === 'es'}
					onclick={() => { setLang('es'); closeMenu(); }}
				>
					ES
				</button>
				<span class="divider">|</span>
				<button 
					class:active={$currentLang === 'en'}
					onclick={() => { setLang('en'); closeMenu(); }}
				>
					EN
				</button>
			</div>
		</div>
	</div>
	
	{#if menuOpen}
		<button 
			class="overlay" 
			onclick={closeMenu}
			aria-label="Close menu"
		></button>
	{/if}
</nav>

<style>
	.main-nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
		background: rgba(245, 241, 232, 0.95);
		backdrop-filter: blur(10px);
		border-bottom: 1px solid var(--color-bg-secondary);
	}
	
	.nav-container {
		max-width: 1400px;
		margin: 0 auto;
		padding: 1rem 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.logo {
		font-family: var(--font-heading);
		font-size: 1.5rem;
		font-weight: 600;
		color: var(--color-text-primary);
		text-decoration: none;
		letter-spacing: 0.02em;
	}
	
	.hamburger {
		display: none;
		flex-direction: column;
		justify-content: space-between;
		width: 28px;
		height: 20px;
		background: transparent;
		border: none;
		cursor: pointer;
		padding: 0;
		z-index: 110;
	}
	
	.hamburger span {
		display: block;
		width: 100%;
		height: 2px;
		background: var(--color-text-primary);
		transition: all 0.3s ease;
		transform-origin: center;
	}
	
	.hamburger.open span:nth-child(1) {
		transform: translateY(9px) rotate(45deg);
	}
	
	.hamburger.open span:nth-child(2) {
		opacity: 0;
	}
	
	.hamburger.open span:nth-child(3) {
		transform: translateY(-9px) rotate(-45deg);
	}
	
	.nav-right {
		display: flex;
		align-items: center;
	}
	
	/* Fallback for older Safari (pre-14.1) */
	.nav-right > * + * {
		margin-left: 2rem;
	}
	
	@supports (gap: 1px) {
		.nav-right {
			gap: 2rem;
		}
		.nav-right > * + * {
			margin-left: 0;
		}
	}
	
	.nav-links {
		display: flex;
		list-style: none;
		margin: 0;
		padding: 0;
	}
	
	.nav-links > li + li {
		margin-left: 2rem;
	}
	
	@supports (gap: 1px) {
		.nav-links {
			gap: 2rem;
		}
		.nav-links > li + li {
			margin-left: 0;
		}
	}
	
	.nav-links a {
		font-family: var(--font-body);
		font-size: 0.9rem;
		color: var(--color-text-primary);
		text-decoration: none;
		opacity: 0.7;
		transition: opacity 0.2s;
		position: relative;
	}
	
	.nav-links a:hover,
	.nav-links a.active {
		opacity: 1;
	}
	
	.nav-links a.active::after {
		content: '';
		position: absolute;
		bottom: -4px;
		left: 0;
		width: 100%;
		height: 1px;
		background: var(--color-accent-earth);
	}
	
	.lang-toggle {
		display: flex;
		align-items: center;
		font-family: var(--font-accent);
		font-size: 0.8rem;
	}
	
	.lang-toggle > * + * {
		margin-left: 0.5rem;
	}
	
	@supports (gap: 1px) {
		.lang-toggle {
			gap: 0.5rem;
		}
		.lang-toggle > * + * {
			margin-left: 0;
		}
	}
	
	.lang-toggle button {
		background: none;
		border: none;
		padding: 0.25rem 0.5rem;
		cursor: pointer;
		color: var(--color-text-primary);
		opacity: 0.5;
		transition: opacity 0.2s;
	}
	
	.lang-toggle button.active,
	.lang-toggle button:hover {
		opacity: 1;
	}
	
	.divider {
		opacity: 0.3;
	}
	
	.overlay {
		display: none;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.3);
		z-index: 90;
		border: none;
		padding: 0;
		cursor: pointer;
	}
	
	@media (max-width: 768px) {
		.nav-container {
			padding: 1rem;
		}
		
		.hamburger {
			display: flex;
		}
		
		.overlay {
			display: block;
		}
		
		.nav-right {
			position: fixed;
			top: 0;
			right: 0;
			width: 280px;
			height: 100vh;
			background: var(--color-bg-primary);
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
			padding: 5rem 2rem 2rem;
			transform: translateX(100%);
			transition: transform 0.3s ease;
			box-shadow: -4px 0 20px rgba(0, 0, 0, 0.1);
			z-index: 100;
		}
		
		.nav-right > * + * {
			margin-left: 0;
			margin-top: 2rem;
		}
		
		@supports (gap: 1px) {
			.nav-right {
				gap: 2rem;
			}
			.nav-right > * + * {
				margin-top: 0;
			}
		}
		
		.nav-right.open {
			transform: translateX(0);
		}
		
		.nav-links {
			flex-direction: column;
			width: 100%;
		}
		
		.nav-links > li + li {
			margin-left: 0;
			margin-top: 1.5rem;
		}
		
		@supports (gap: 1px) {
			.nav-links {
				gap: 1.5rem;
			}
			.nav-links > li + li {
				margin-top: 0;
			}
		}
		
		.nav-links a {
			font-size: 1.1rem;
			display: block;
			padding: 0.5rem 0;
		}
		
		.lang-toggle {
			font-size: 0.9rem;
			padding-top: 1rem;
			border-top: 1px solid var(--color-bg-secondary);
			width: 100%;
		}
	}
</style>