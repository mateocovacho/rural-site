<script lang="ts">
	import { t } from '$lib/i18n/translations';
	import SeoHead from '$lib/components/SeoHead.svelte';
</script>

<SeoHead
	title="The Land"
	description="26 hectares of ancient chestnut forest, natural swimming pools, mountain streams and panoramic views over Valle del Genal, Málaga."
	image="/images/bosque.jpeg"
/>

<div class="page-enter">

<!-- Hero -->
<section class="page-hero">
	<div class="page-hero__media">
		<img
			src="/images/bosque2.jpeg"
			alt="Chestnut forest on the estate"
			class="img-cover"
		/>
		<div class="page-hero__overlay"></div>
	</div>
	<div class="container page-hero__content">
		<span class="section-label">{$t('land.hero.label')}</span>
		<h1>{$t('land.hero.title')}</h1>
		<p class="page-hero__subtitle">{$t('land.hero.subtitle')}</p>
	</div>
</section>

<!-- Valle del Genal -->
<section class="section">
	<div class="container">
		<div class="text-image-grid">
			<div class="text-image-grid__text">
				<span class="section-label">{$t('land.valley.label')}</span>
				<h2 class="section-title">{$t('land.valley.title')}</h2>
				<div class="section-divider"></div>
				<p>{$t('land.valley.body')}</p>
			</div>
			<div class="text-image-grid__image">
				<img
					src="/images/mirando-al-sur.gif"
					alt="View across Valle del Genal"
					class="img-cover"
					loading="lazy"
				/>
			</div>
		</div>
	</div>
</section>

<!-- Cartajima village -->
<section class="section section--cream">
	<div class="container">
		<div class="text-image-grid text-image-grid--reverse">
			<div class="text-image-grid__image">
				<img
					src="/images/img-1822.jpg"
					alt="Cartajima village"
					class="img-cover"
					loading="lazy"
				/>
			</div>
			<div class="text-image-grid__text">
				<span class="section-label">{$t('land.village.label')}</span>
				<h2 class="section-title">{$t('land.village.title')}</h2>
				<div class="section-divider"></div>
				<p>{$t('land.village.body')}</p>
			</div>
		</div>
	</div>
</section>

<!-- Water gallery -->
<section class="section water-gallery">
	<div class="container">
		<span class="section-label">{$t('land.water.label')}</span>
		<h2 class="section-title">{$t('land.water.title')}</h2>
		<p class="water-gallery__intro">{$t('land.water.body')}</p>
		<div class="water-gallery__grid">
			<div class="water-gallery__main">
				<img
					src="/images/pozas.jpg"
					alt="Natural swimming pools"
					class="img-cover"
					loading="lazy"
				/>
			</div>
			<div class="water-gallery__side">
				<img
					src="/images/poza.jpg"
					alt="Mountain pool"
					class="img-cover"
					loading="lazy"
				/>
				<img
					src="/images/bosque.jpeg"
					alt="Forest stream"
					class="img-cover"
					loading="lazy"
				/>
			</div>
		</div>
	</div>
</section>

<!-- Accessibility -->
<section class="section section--cream access-section">
	<div class="container">
		<div class="access-section__grid">
			<div>
				<span class="section-label">{$t('land.access.label')}</span>
				<h2 class="section-title">{$t('land.access.title')}</h2>
				<div class="section-divider"></div>
				<p>{$t('land.access.body')}</p>
			</div>
			<div class="access-distances">
				{#each [
					{ place: 'land.access.malaga', time: 'land.access.malaga_time' },
					{ place: 'land.access.marbella', time: 'land.access.marbella_time' },
					{ place: 'land.access.ronda', time: 'land.access.ronda_time' },
					{ place: 'land.access.seville', time: 'land.access.seville_time' },
				] as item}
					<div class="access-item">
						<span class="access-item__place">{$t(item.place as any)}</span>
						<span class="access-item__line"></span>
						<span class="access-item__time">{$t(item.time as any)}</span>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- Ecotourism activities -->
<section class="section eco-section">
	<div class="container">
		<div class="eco-section__grid">
			<div class="eco-section__image">
				<img
					src="/images/ecoturismo1.jpg"
					alt="Hiking in the valley"
					class="img-cover"
					loading="lazy"
				/>
			</div>
			<div class="eco-section__content">
				<span class="section-label">{$t('land.eco.label')}</span>
				<h2 class="section-title">{$t('land.eco.title')}</h2>
				<div class="section-divider"></div>
				<p>{$t('land.eco.intro')}</p>
				<ul class="eco-list">
					{#each ['land.eco.act1','land.eco.act2','land.eco.act3','land.eco.act4','land.eco.act5','land.eco.act6','land.eco.act7','land.eco.act8'] as act}
						<li>{$t(act as any)}</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- Panoramic views -->
<section class="section views-section">
	<div class="views-section__images">
		<img src="/images/ecoturismo2.jpg" alt="Mountain panorama" class="img-cover" loading="lazy" />
		<img src="/images/ecoturismo3.jpg" alt="Valley view" class="img-cover" loading="lazy" />
		<img src="/images/ecoturismo5.jpg" alt="Landscape view" class="img-cover" loading="lazy" />
	</div>
	<div class="container views-section__content">
		<span class="section-label">{$t('land.views.label')}</span>
		<h2>{$t('land.views.title')}</h2>
		<p>{$t('land.views.body')}</p>
	</div>
</section>

<!-- CTA -->
<section class="section section--forest">
	<div class="container page-cta">
		<h2>{$t('home.cta.title')}</h2>
		<p>{$t('home.cta.body')}</p>
		<a href="/contact" class="btn btn--outline">{$t('home.cta.primary')}</a>
	</div>
</section>

</div>

<style>
	/* Page hero */
	.page-hero {
		position: relative;
		height: 65vh;
		min-height: 420px;
		display: flex;
		align-items: flex-end;
		overflow: hidden;
		padding-bottom: var(--space-xl);
	}

	.page-hero__media {
		position: absolute;
		inset: 0;
	}

	.page-hero__overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			to top,
			rgba(26, 26, 26, 0.8) 0%,
			rgba(26, 26, 26, 0.3) 60%,
			transparent 100%
		);
	}

	.page-hero__content {
		position: relative;
		z-index: 1;
		padding-top: var(--nav-height);
	}

	.page-hero__content h1 {
		color: var(--color-cream);
		margin-bottom: 1rem;
	}

	.page-hero__subtitle {
		font-family: var(--font-alt);
		font-size: 1.1rem;
		color: rgba(245, 240, 232, 0.8);
		max-width: 580px;
		margin: 0;
	}

	/* Text + image grid */
	.text-image-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-xl);
		align-items: center;
	}

	.text-image-grid--reverse .text-image-grid__image {
		order: -1;
	}

	.text-image-grid__image {
		height: 420px;
		overflow: hidden;
	}

	/* Water gallery */
	.water-gallery__intro {
		max-width: 680px;
		color: var(--color-text-light);
		margin-bottom: var(--space-md);
	}

	.water-gallery__grid {
		display: grid;
		grid-template-columns: 2fr 1fr;
		gap: var(--space-sm);
	}

	.water-gallery__main {
		height: 440px;
		overflow: hidden;
	}

	.water-gallery__side {
		display: grid;
		grid-template-rows: 1fr 1fr;
		gap: var(--space-sm);
	}

	.water-gallery__side img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	/* Access section */
	.access-section__grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-xl);
		align-items: center;
	}

	.access-distances {
		display: flex;
		flex-direction: column;
		gap: 0;
		border-top: 1px solid var(--color-border);
	}

	.access-item {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1.2rem 0;
		border-bottom: 1px solid var(--color-border);
	}

	.access-item__place {
		font-family: var(--font-body);
		font-size: 1rem;
		color: var(--color-text);
		min-width: 160px;
	}

	.access-item__line {
		flex: 1;
		height: 1px;
		background: var(--color-border);
	}

	.access-item__time {
		font-family: var(--font-display);
		font-size: 1.2rem;
		font-weight: 400;
		color: var(--color-forest);
		white-space: nowrap;
	}

	/* Eco section */
	.eco-section__grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-xl);
		align-items: center;
	}

	.eco-section__image {
		height: 500px;
		overflow: hidden;
	}

	.eco-list {
		list-style: none;
		padding: 0;
		margin-top: 1rem;
	}

	.eco-list li {
		font-family: var(--font-alt);
		font-size: 1rem;
		color: var(--color-text-light);
		padding: 0.65rem 0;
		border-bottom: 1px solid var(--color-border);
		padding-left: 1.2rem;
		position: relative;
	}

	.eco-list li::before {
		content: '—';
		position: absolute;
		left: 0;
		color: var(--color-gold);
		font-size: 0.8rem;
	}

	/* Views section */
	.views-section {
		position: relative;
		overflow: hidden;
	}

	.views-section__images {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		height: 400px;
		overflow: hidden;
	}

	.views-section__images img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform var(--transition-slow);
	}

	.views-section__images img:hover {
		transform: scale(1.03);
	}

	.views-section__content {
		padding-top: var(--space-md);
	}

	.views-section__content h2 {
		margin-bottom: 1rem;
	}

	.views-section__content p {
		max-width: 680px;
		color: var(--color-text-light);
	}

	/* CTA */
	.page-cta {
		text-align: center;
	}

	.page-cta h2 {
		color: var(--color-cream);
		margin-bottom: 1rem;
	}

	.page-cta p {
		color: rgba(245, 240, 232, 0.75);
		max-width: 500px;
		margin: 0 auto 2rem;
	}

	/* Responsive */
	@media (max-width: 768px) {
		.text-image-grid,
		.water-gallery__grid,
		.access-section__grid,
		.eco-section__grid {
			grid-template-columns: 1fr;
		}

		.text-image-grid--reverse .text-image-grid__image {
			order: 0;
		}

		.text-image-grid__image,
		.water-gallery__main,
		.eco-section__image {
			height: 280px;
		}

		.water-gallery__side {
			grid-template-rows: auto;
			grid-template-columns: 1fr 1fr;
			height: 180px;
		}

		.views-section__images {
			grid-template-columns: 1fr;
			height: auto;
		}

		.views-section__images img {
			height: 220px;
		}

		.access-item__place {
			min-width: 120px;
		}
	}
</style>
