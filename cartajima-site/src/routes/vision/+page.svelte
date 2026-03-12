<script lang="ts">
	import { t } from '$lib/i18n/translations';
	import SeoHead from '$lib/components/SeoHead.svelte';
</script>

<SeoHead
	title="Vision"
	description="The fully approved ecotourism development plan for Cartajima Estate — 12 eco-lodges, a restored farmhouse, and complete infrastructure."
/>

<div class="page-enter">

<!-- Hero -->
<section class="page-hero">
	<div class="page-hero__media">
		<img
			src="/images/emplazamientos.jpg"
			alt="Estate site layout"
			class="img-cover"
		/>
		<div class="page-hero__overlay"></div>
	</div>
	<div class="container page-hero__content">
		<span class="section-label">{$t('vision.hero.label')}</span>
		<h1>{$t('vision.hero.title')}</h1>
		<p class="page-hero__subtitle">{$t('vision.hero.subtitle')}</p>
	</div>
</section>

<!-- Overview -->
<section class="section">
	<div class="container container--narrow">
		<span class="section-label">{$t('vision.overview.label')}</span>
		<h2 class="section-title">{$t('vision.overview.title')}</h2>
		<div class="section-divider"></div>
		<p>{$t('vision.overview.body')}</p>
	</div>
</section>

<!-- Specs table -->
<section class="section section--cream specs-section">
	<div class="container">
		<h2 class="specs-section__title">{$t('vision.specs.title')}</h2>
		<div class="specs-table">
			{#each [
				['vision.specs.total_area', 'vision.specs.total_area_value'],
				['vision.specs.lodges', 'vision.specs.lodges_value'],
				['vision.specs.central', 'vision.specs.central_value'],
				['vision.specs.services', 'vision.specs.services_value'],
				['vision.specs.pool', 'vision.specs.pool_value'],
				['vision.specs.parking', 'vision.specs.parking_value'],
				['vision.specs.energy', 'vision.specs.energy_value'],
				['vision.specs.water', 'vision.specs.water_value'],
			] as row}
				<div class="specs-row">
					<dt>{$t(row[0] as any)}</dt>
					<dd>{$t(row[1] as any)}</dd>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Central House -->
<section class="section house-section">
	<div class="container">
		<div class="house-section__grid">
			<div class="house-section__images">
				<div class="house-primary">
					<img
						src="/images/casa-central5.jpeg"
						alt="Central farmhouse exterior"
						class="img-cover"
						loading="lazy"
					/>
				</div>
				<div class="house-secondary">
					<img
						src="/images/casa-central6.jpeg"
						alt="Farmhouse detail"
						class="img-cover"
						loading="lazy"
					/>
					<img
						src="/images/casa-central7.jpeg"
						alt="Farmhouse interior"
						class="img-cover"
						loading="lazy"
					/>
				</div>
			</div>
			<div class="house-section__text">
				<span class="section-label">{$t('vision.house.label')}</span>
				<h2 class="section-title">{$t('vision.house.title')}</h2>
				<div class="section-divider"></div>
				<p>{$t('vision.house.body')}</p>
			</div>
		</div>
	</div>
</section>

<!-- Infrastructure -->
<section class="section section--cream">
	<div class="container">
		<span class="section-label">{$t('vision.infra.label')}</span>
		<h2 class="section-title">{$t('vision.infra.title')}</h2>
		<div class="grid-4 infra-cards">
			{#each [
				{ title: 'vision.infra.card1.title', text: 'vision.infra.card1.text', icon: '—' },
				{ title: 'vision.infra.card2.title', text: 'vision.infra.card2.text', icon: '—' },
				{ title: 'vision.infra.card3.title', text: 'vision.infra.card3.text', icon: '—' },
				{ title: 'vision.infra.card4.title', text: 'vision.infra.card4.text', icon: '—' },
			] as card}
				<div class="infra-card">
					<span class="infra-card__line"></span>
					<h3>{$t(card.title as any)}</h3>
					<p>{$t(card.text as any)}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Land Division -->
<section class="section division-section">
	<div class="container">
		<div class="division-section__grid">
			<div class="division-section__text">
				<span class="section-label">{$t('vision.division.label')}</span>
				<h2 class="section-title">{$t('vision.division.title')}</h2>
				<div class="section-divider"></div>
				<p>{$t('vision.division.body')}</p>
				<div class="division-zones">
					{#each [
						{ key: 'vision.division.zone1', color: '#2c3e2d' },
						{ key: 'vision.division.zone2', color: '#6b5b45' },
						{ key: 'vision.division.zone3', color: '#4a7c8a' },
						{ key: 'vision.division.zone4', color: '#9e9e8e' },
					] as zone}
						<div class="division-zone">
							<span class="division-zone__dot" style="background:{zone.color}"></span>
							<span>{$t(zone.key as any)}</span>
						</div>
					{/each}
				</div>
			</div>
			<div class="division-section__map">
				<img
					src="/images/finca.jpg"
					alt="Estate land overview"
					class="img-cover"
					loading="lazy"
				/>
			</div>
		</div>
	</div>
</section>

<!-- Renders -->
<section class="section section--cream">
	<div class="container">
		<span class="section-label">{$t('vision.renders.label')}</span>
		<h2 class="section-title">{$t('vision.renders.title')}</h2>
		<p class="renders-intro">{$t('vision.renders.body')}</p>
		<div class="renders-grid">
			<div class="render-main">
				<img
					src="/images/simulacion1.jpeg"
					alt="Concept render of eco-lodge"
					class="img-cover"
					loading="lazy"
				/>
			</div>
			<div class="render-secondary">
				<img
					src="/images/simula2.jpeg"
					alt="Concept render of development"
					class="img-cover"
					loading="lazy"
				/>
				<img
					src="/images/cabana-creba.jpg"
					alt="Reference cabin design"
					class="img-cover"
					loading="lazy"
				/>
			</div>
		</div>
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
		max-width: 540px;
		margin: 0;
	}

	/* Specs */
	.specs-section__title {
		font-family: var(--font-display);
		font-size: 1.8rem;
		font-weight: 400;
		margin-bottom: var(--space-md);
	}

	.specs-table {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2px;
		background: var(--color-border);
		border: 1px solid var(--color-border);
	}

	.specs-row {
		display: contents;
	}

	.specs-row dt,
	.specs-row dd {
		background: var(--color-white);
		padding: 1rem 1.5rem;
	}

	.specs-row dt {
		font-family: var(--font-body);
		font-size: 0.8rem;
		font-weight: 600;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--color-text-light);
	}

	.specs-row dd {
		font-family: var(--font-alt);
		font-size: 1rem;
		color: var(--color-text);
		margin: 0;
	}

	/* House section */
	.house-section__grid {
		display: grid;
		grid-template-columns: 1.2fr 1fr;
		gap: var(--space-xl);
		align-items: center;
	}

	.house-primary {
		height: 380px;
		overflow: hidden;
		margin-bottom: 4px;
	}

	.house-secondary {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4px;
		height: 180px;
	}

	.house-secondary img {
		width: 100%;
		height: 100%;
	}

	/* Infrastructure cards */
	.infra-cards {
		margin-top: var(--space-md);
	}

	.infra-card {
		padding: 2rem;
		background: var(--color-white);
	}

	.infra-card__line {
		display: block;
		width: 30px;
		height: 2px;
		background: var(--color-gold);
		margin-bottom: 1.2rem;
	}

	.infra-card h3 {
		font-size: 1.1rem;
		margin-bottom: 0.6rem;
	}

	.infra-card p {
		font-size: 0.9rem;
		color: var(--color-text-light);
		margin: 0;
	}

	/* Division */
	.division-section__grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-xl);
		align-items: center;
	}

	.division-section__map {
		height: 420px;
		overflow: hidden;
	}

	.division-zones {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		margin-top: 2rem;
	}

	.division-zone {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		font-family: var(--font-body);
		font-size: 0.9rem;
		color: var(--color-text-light);
	}

	.division-zone__dot {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		flex-shrink: 0;
	}

	/* Renders */
	.renders-intro {
		max-width: 600px;
		color: var(--color-text-light);
		margin-bottom: var(--space-md);
	}

	.renders-grid {
		display: grid;
		grid-template-columns: 1.5fr 1fr;
		gap: var(--space-sm);
	}

	.render-main {
		height: 480px;
		overflow: hidden;
	}

	.render-secondary {
		display: grid;
		grid-template-rows: 1fr 1fr;
		gap: var(--space-sm);
	}

	.render-secondary img {
		width: 100%;
		height: 100%;
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
		.specs-table {
			grid-template-columns: 1fr;
		}

		.specs-row {
			display: grid;
			grid-template-columns: 1fr 1fr;
		}

		.house-section__grid,
		.division-section__grid,
		.renders-grid {
			grid-template-columns: 1fr;
		}

		.house-primary {
			height: 260px;
		}

		.division-section__map {
			height: 260px;
		}

		.render-main {
			height: 260px;
		}

		.render-secondary {
			grid-template-rows: auto;
			grid-template-columns: 1fr 1fr;
			height: 180px;
		}
	}
</style>
