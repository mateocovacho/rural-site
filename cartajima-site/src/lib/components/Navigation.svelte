<script lang="ts">
	import { currentLang, setLang, t } from '$lib/i18n/translations';
	import { page } from '$app/stores';
	
	let currentPath = $derived($page.url.pathname);
</script>

<nav class="main-nav">
	<div class="nav-container">
		<a href="/" class="logo">Cartajima</a>
		
		<div class="nav-right">
			<ul class="nav-links">
				<li><a href="/" class:active={currentPath === '/'}>{$t('nav.home')}</a></li>
				<li><a href="/vision" class:active={currentPath === '/vision'}>{$t('nav.vision')}</a></li>
				<li><a href="/land" class:active={currentPath === '/land'}>{$t('nav.land')}</a></li>
				<li><a href="/contact" class:active={currentPath === '/contact'}>{$t('nav.contact')}</a></li>
			</ul>
			
			<div class="lang-toggle">
				<button 
					class:active={$currentLang === 'es'}
					onclick={() => setLang('es')}
				>
					ES
				</button>
				<span class="divider">|</span>
				<button 
					class:active={$currentLang === 'en'}
					onclick={() => setLang('en')}
				>
					EN
				</button>
			</div>
		</div>
	</div>
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
	
	.nav-right {
		display: flex;
		align-items: center;
		gap: 2rem;
	}
	
	.nav-links {
		display: flex;
		list-style: none;
		gap: 2rem;
		margin: 0;
		padding: 0;
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
		gap: 0.5rem;
		font-family: var(--font-accent);
		font-size: 0.8rem;
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
	
	@media (max-width: 768px) {
		.nav-container {
			padding: 1rem;
		}
		
		.nav-links {
			gap: 1rem;
		}
		
		.nav-right {
			gap: 1rem;
		}
	}
</style>