<script lang="ts">
	import { t } from '$lib/i18n/translations';
	import SeoHead from '$lib/components/SeoHead.svelte';
</script>

<SeoHead />

<div class="page-enter">

<!-- Hero -->
<section class="hero">
	<div class="hero__media">
		<img
			src="/images/cartajima.webp"
			alt="Valle del Genal viewed from Cartajima"
			class="hero__img"
		/>
		<div class="hero__overlay"></div>
	</div>
	<div class="hero__content container">
		<span class="section-label hero__label">{$t('home.hero.label')}</span>
		<h1 class="hero__title">{$t('home.hero.title')}</h1>
		<p class="hero__subtitle">{$t('home.hero.subtitle')}</p>
		<div class="hero__ctas">
			<a href="/vision" class="btn btn--outline">{$t('home.hero.cta_primary')}</a>
			<a href="/land" class="btn btn--gold">{$t('home.hero.cta_secondary')}</a>
		</div>
	</div>
	<div class="hero__scroll" aria-hidden="true">
		<span class="hero__scroll-line"></span>
	</div>
</section>

<!-- Vision block -->
<section class="section vision-block">
	<div class="container">
		<div class="vision-block__grid">
			<div class="vision-block__text">
				<span class="section-label">{$t('home.vision.label')}</span>
				<h2 class="section-title">{$t('home.vision.title')}</h2>
				<div class="section-divider"></div>
				<p>{$t('home.vision.body')}</p>
				<a href="/vision" class="btn btn--primary">{$t('home.vision.cta')}</a>
			</div>
			<div class="vision-block__stats">
				{#each [
					{ value: 'home.vision.detail1.value', label: 'home.vision.detail1.label' },
					{ value: 'home.vision.detail2.value', label: 'home.vision.detail2.label' },
					{ value: 'home.vision.detail3.value', label: 'home.vision.detail3.label' },
					{ value: 'home.vision.detail4.value', label: 'home.vision.detail4.label' },
				] as stat}
					<div class="stat">
						<p class="stat__value">{$t(stat.value as any)}</p>
						<p class="stat__label">{$t(stat.label as any)}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- Location cards -->
<section class="section section--cream location">
	<div class="container">
		<span class="section-label">{$t('home.location.label')}</span>
		<h2 class="section-title">{$t('home.location.title')}</h2>
		<p class="location__intro">{$t('home.location.intro')}</p>
		<div class="location__cards grid-3">
			<div class="location-card">
				<div class="location-card__img-wrap">
					<img
						src="/images/mirando-al-sur.gif"
						alt="Valle del Genal"
						class="img-cover"
						loading="lazy"
					/>
				</div>
				<div class="location-card__body">
					<h3>{$t('home.location.card1.title')}</h3>
					<p>{$t('home.location.card1.text')}</p>
				</div>
			</div>
			<div class="location-card">
				<div class="location-card__img-wrap">
					<img
						src="/images/riscos.gif"
						alt="Mountain landscape"
						class="img-cover"
						loading="lazy"
					/>
				</div>
				<div class="location-card__body">
					<h3>{$t('home.location.card2.title')}</h3>
					<p>{$t('home.location.card2.text')}</p>
				</div>
			</div>
			<div class="location-card">
				<div class="location-card__img-wrap">
					<img
						src="/images/bosque.jpeg"
						alt="Chestnut forest"
						class="img-cover"
						loading="lazy"
					/>
				</div>
				<div class="location-card__body">
					<h3>{$t('home.location.card3.title')}</h3>
					<p>{$t('home.location.card3.text')}</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Water section -->
<section class="section water-section">
	<div class="water-section__media">
		<img
			src="/images/pozas.jpg"
			alt="Natural swimming pools on the estate"
			class="img-cover"
			loading="lazy"
		/>
		<div class="water-section__overlay"></div>
	</div>
	<div class="container water-section__content">
		<div class="water-section__text">
			<span class="section-label">{$t('home.water.label')}</span>
			<h2 class="section-title">{$t('home.water.title')}</h2>
			<div class="section-divider"></div>
			<p>{$t('home.water.body')}</p>
			<a href="/land" class="btn btn--outline">{$t('home.water.cta')}</a>
		</div>
	</div>
</section>

<!-- Story timeline -->
<section class="section section--cream story">
	<div class="container">
		<span class="section-label">{$t('home.story.label')}</span>
		<h2 class="section-title">{$t('home.story.title')}</h2>
		<div class="timeline">
			{#each [
				{ year: 'home.story.step1.year', title: 'home.story.step1.title', text: 'home.story.step1.text' },
				{ year: 'home.story.step2.year', title: 'home.story.step2.title', text: 'home.story.step2.text' },
				{ year: 'home.story.step3.year', title: 'home.story.step3.title', text: 'home.story.step3.text' },
				{ year: 'home.story.step4.year', title: 'home.story.step4.title', text: 'home.story.step4.text' },
			] as step, i}
				<div class="timeline__item">
					<div class="timeline__marker">
						<span class="timeline__year">{$t(step.year as any)}</span>
						<div class="timeline__dot"></div>
					</div>
					<div class="timeline__body">
						<h3>{$t(step.title as any)}</h3>
						<p>{$t(step.text as any)}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- CTA -->
<section class="section section--forest cta-section">
	<div class="container cta-section__inner">
		<div class="cta-section__text">
			<h2>{$t('home.cta.title')}</h2>
			<p>{$t('home.cta.body')}</p>
		</div>
		<div class="cta-section__actions">
			<a href="/contact" class="btn btn--outline">{$t('home.cta.primary')}</a>
			<a href="/land" class="btn btn--gold">{$t('home.cta.secondary')}</a>
		</div>
	</div>
</section>

</div>

<style>
	/* Hero */
	.hero {
		position: relative;
		height: 100dvh;
		min-height: 600px;
		display: flex;
		align-items: center;
		overflow: hidden;
	}

	.hero__media {
		position: absolute;
		inset: 0;
	}

	.hero__img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}

	.hero__overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			to right,
			rgba(26, 26, 26, 0.72) 0%,
			rgba(26, 26, 26, 0.35) 60%,
			transparent 100%
		);
	}

	.hero__content {
		position: relative;
		z-index: 1;
		max-width: 700px;
		padding-top: var(--nav-height);
	}

	.hero__label {
		color: var(--color-gold-light);
		margin-bottom: 1rem;
	}

	.hero__title {
		font-family: var(--font-display);
		font-size: clamp(3rem, 6vw, 5.5rem);
		font-weight: 300;
		color: var(--color-cream);
		line-height: 1.05;
		margin-bottom: 1.5rem;
	}

	.hero__subtitle {
		font-family: var(--font-alt);
		font-size: clamp(1rem, 1.8vw, 1.2rem);
		color: rgba(245, 240, 232, 0.82);
		max-width: 520px;
		line-height: 1.7;
		margin-bottom: 2.5rem;
	}

	.hero__ctas {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.hero__scroll {
		position: absolute;
		bottom: 2.5rem;
		left: 50%;
		transform: translateX(-50%);
		z-index: 1;
	}

	.hero__scroll-line {
		display: block;
		width: 1px;
		height: 60px;
		background: linear-gradient(to bottom, rgba(245, 240, 232, 0.6), transparent);
		margin: 0 auto;
		animation: scrollPulse 2s ease-in-out infinite;
	}

	@keyframes scrollPulse {
		0%, 100% { opacity: 0.6; transform: scaleY(1); }
		50% { opacity: 1; transform: scaleY(0.8); }
	}

	/* Vision block */
	.vision-block__grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-xl);
		align-items: center;
	}

	.vision-block__stats {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2px;
	}

	.stat {
		background: var(--color-cream-dark);
		padding: 2rem 1.5rem;
		text-align: center;
	}

	.stat__value {
		font-family: var(--font-display);
		font-size: 3rem;
		font-weight: 300;
		color: var(--color-forest);
		line-height: 1;
		margin-bottom: 0.4rem;
	}

	.stat__label {
		font-family: var(--font-body);
		font-size: 0.75rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--color-text-light);
		margin: 0;
	}

	/* Location */
	.location__intro {
		max-width: 680px;
		color: var(--color-text-light);
		margin-bottom: var(--space-md);
	}

	.location-card {
		background: var(--color-white);
		overflow: hidden;
	}

	.location-card__img-wrap {
		height: 220px;
		overflow: hidden;
	}

	.location-card__body {
		padding: 1.5rem;
	}

	.location-card__body h3 {
		font-size: 1.3rem;
		margin-bottom: 0.6rem;
	}

	.location-card__body p {
		font-size: 0.95rem;
		color: var(--color-text-light);
		margin: 0;
	}

	/* Water section */
	.water-section {
		position: relative;
		min-height: 500px;
		display: flex;
		align-items: center;
		padding: var(--space-xl) 0;
	}

	.water-section__media {
		position: absolute;
		inset: 0;
	}

	.water-section__overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			to left,
			rgba(26, 26, 26, 0.7) 0%,
			rgba(26, 26, 26, 0.35) 50%,
			transparent 100%
		);
	}

	.water-section__content {
		position: relative;
		z-index: 1;
		display: flex;
		justify-content: flex-end;
	}

	.water-section__text {
		max-width: 480px;
		color: var(--color-cream);
	}

	.water-section__text .section-title {
		color: var(--color-cream);
	}

	.water-section__text p {
		color: rgba(245, 240, 232, 0.82);
		margin-bottom: 2rem;
	}

	/* Story timeline */
	.timeline {
		margin-top: var(--space-md);
		position: relative;
		padding-left: 2rem;
	}

	.timeline::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		width: 1px;
		background: var(--color-border);
	}

	.timeline__item {
		display: grid;
		grid-template-columns: 80px 1fr;
		gap: 2rem;
		margin-bottom: 3rem;
		position: relative;
	}

	.timeline__item:last-child {
		margin-bottom: 0;
	}

	.timeline__marker {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 0.5rem;
		padding-right: 1.5rem;
		position: relative;
	}

	.timeline__year {
		font-family: var(--font-display);
		font-size: 1.1rem;
		font-weight: 500;
		color: var(--color-gold);
	}

	.timeline__dot {
		width: 9px;
		height: 9px;
		border-radius: 50%;
		background: var(--color-gold);
		position: absolute;
		right: -0.5rem;
		top: 1.8rem;
		border: 2px solid var(--color-cream-dark);
	}

	.timeline__body h3 {
		font-size: 1.2rem;
		margin-bottom: 0.5rem;
	}

	.timeline__body p {
		font-size: 0.95rem;
		color: var(--color-text-light);
		margin: 0;
	}

	/* CTA section */
	.cta-section__inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 3rem;
		flex-wrap: wrap;
	}

	.cta-section__text h2 {
		color: var(--color-cream);
		margin-bottom: 0.75rem;
	}

	.cta-section__text p {
		color: rgba(245, 240, 232, 0.75);
		max-width: 480px;
		margin: 0;
	}

	.cta-section__actions {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		flex-shrink: 0;
	}

	/* Responsive */
	@media (max-width: 768px) {
		.vision-block__grid {
			grid-template-columns: 1fr;
			gap: var(--space-md);
		}

		.water-section__content {
			justify-content: flex-start;
		}

		.water-section__text {
			max-width: 100%;
		}

		.water-section__overlay {
			background: rgba(26, 26, 26, 0.65);
		}

		.cta-section__inner {
			flex-direction: column;
			align-items: flex-start;
		}

		.timeline {
			padding-left: 1rem;
		}

		.timeline__item {
			grid-template-columns: 60px 1fr;
			gap: 1rem;
		}
	}

	@media (max-width: 480px) {
		.hero__ctas {
			flex-direction: column;
			align-items: flex-start;
		}

		.vision-block__stats {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
