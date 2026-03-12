<script lang="ts">
	import { t } from '$lib/i18n/translations';
</script>

<footer class="footer">
	<div class="container">
		<div class="footer__grid">
			<div class="footer__brand">
				<p class="footer__brand-name">Cartajima</p>
				<p class="footer__brand-sub">Ecotourism Estate</p>
				<p class="footer__tagline">{$t('footer.tagline')}</p>
				<p class="footer__location">{$t('footer.location')}</p>
			</div>

			<div class="footer__nav">
				<p class="footer__col-title">{$t('footer.nav_title')}</p>
				<nav aria-label="Footer navigation">
					<a href="/" class="footer__link">{$t('nav.home')}</a>
					<a href="/vision" class="footer__link">{$t('nav.vision')}</a>
					<a href="/land" class="footer__link">{$t('nav.land')}</a>
					<a href="/contact" class="footer__link">{$t('nav.contact')}</a>
				</nav>
			</div>

			<div class="footer__contact">
				<p class="footer__col-title">{$t('footer.contact_title')}</p>
				<a href="mailto:info@cartajima-estate.com" class="footer__link footer__link--email">
					info@cartajima-estate.com
				</a>
				<p class="footer__geo">Valle del Genal<br />Serranía de Ronda<br />Málaga, España</p>
			</div>
		</div>

		<div class="footer__bottom">
			<p class="footer__copy">{$t('footer.copyright')} {$t('footer.legal')}</p>
			<p class="footer__private">Private presentation — not for public distribution.</p>
		</div>
	</div>
</footer>

<style>
	.footer {
		background: var(--color-charcoal-mid);
		color: rgba(245, 240, 232, 0.65);
		padding: var(--space-xl) 0 var(--space-md);
		border-top: 1px solid rgba(255, 255, 255, 0.06);
	}

	.footer__grid {
		display: grid;
		grid-template-columns: 2fr 1fr 1.5fr;
		gap: var(--space-lg);
		margin-bottom: var(--space-lg);
	}

	.footer__brand-name {
		font-family: var(--font-display);
		font-size: 2rem;
		font-weight: 300;
		color: var(--color-cream);
		letter-spacing: 0.06em;
		line-height: 1;
		margin-bottom: 0.2rem;
	}

	.footer__brand-sub {
		font-family: var(--font-body);
		font-size: 0.65rem;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: var(--color-gold-light);
		margin-bottom: 1.2rem;
	}

	.footer__tagline {
		font-family: var(--font-alt);
		font-size: 0.95rem;
		color: rgba(245, 240, 232, 0.55);
		line-height: 1.6;
		max-width: 280px;
		margin-bottom: 0.75rem;
	}

	.footer__location {
		font-family: var(--font-body);
		font-size: 0.75rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: rgba(245, 240, 232, 0.35);
		margin: 0;
	}

	.footer__col-title {
		font-family: var(--font-body);
		font-size: 0.7rem;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: var(--color-gold-light);
		margin-bottom: 1.2rem;
	}

	.footer__nav {
		display: flex;
		flex-direction: column;
	}

	.footer__nav nav {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
	}

	.footer__link {
		font-family: var(--font-body);
		font-size: 0.9rem;
		color: rgba(245, 240, 232, 0.55);
		text-decoration: none;
		transition: color var(--transition-fast);
	}

	.footer__link:hover {
		color: var(--color-cream);
	}

	.footer__link--email {
		font-size: 0.85rem;
		color: rgba(212, 175, 122, 0.7);
		word-break: break-all;
		margin-bottom: 1rem;
		display: block;
	}

	.footer__link--email:hover {
		color: var(--color-gold-light);
	}

	.footer__geo {
		font-family: var(--font-body);
		font-size: 0.82rem;
		line-height: 1.8;
		color: rgba(245, 240, 232, 0.4);
		margin: 0;
	}

	.footer__bottom {
		padding-top: var(--space-md);
		border-top: 1px solid rgba(255, 255, 255, 0.06);
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.footer__copy {
		font-family: var(--font-body);
		font-size: 0.78rem;
		color: rgba(245, 240, 232, 0.3);
		margin: 0;
	}

	.footer__private {
		font-family: var(--font-body);
		font-size: 0.72rem;
		letter-spacing: 0.08em;
		color: rgba(245, 240, 232, 0.2);
		margin: 0;
	}

	@media (max-width: 768px) {
		.footer__grid {
			grid-template-columns: 1fr;
			gap: 2.5rem;
		}

		.footer__tagline {
			max-width: none;
		}

		.footer__bottom {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.5rem;
		}
	}
</style>
