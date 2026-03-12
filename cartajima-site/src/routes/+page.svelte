<script lang="ts">
	import { t } from '$lib/i18n/translations';
</script>

<svelte:head>
	<title>Cartajima | Valle del Genal</title>
	<meta name="description" content="Cartajima Ecotourism Estate - 78,000 m² of chestnut forests in Valle del Genal" />
</svelte:head>

<!-- Hero Section -->
<section class="hero">
	<div class="hero-content">
		<h1>{$t('hero.title')}</h1>
		<p class="subtitle">{$t('hero.subtitle')}</p>
	</div>
	<div class="hero-image">
		<img src="/images/cartajima.webp" alt="Valle del Genal landscape" />
	</div>
</section>

<!-- Vision Section -->
<section class="vision">
	<div class="container">
		<div class="vision-grid">
			<div class="vision-text">
				<h2>{$t('vision.title')}</h2>
				<p class="lead">{$t('vision.description')}</p>
				
				<div class="vision-points">
					<div class="point">
						<span class="number">10</span>
						<p>{$t('vision.concept')}</p>
					</div>
					<div class="point">
						<span class="icon">⟡</span>
						<p>{$t('vision.privacy')}</p>
					</div>
					<div class="point">
						<span class="icon">⌂</span>
						<p>{$t('vision.central')}</p>
					</div>
				</div>
				
				<a href="/vision" class="btn btn-primary">{$t('cta.view')}</a>
			</div>
			<div class="vision-image">
				<img src="/images/casa-central5.jpeg" alt="Central house interior" />
			</div>
		</div>
	</div>
</section>

<!-- Location Section -->
<section class="location">
	<div class="container-wide">
		<h2>{$t('location.title')}</h2>
		<p class="section-intro">{$t('location.description')}</p>
		
		<div class="location-cards">
			<div class="location-card">
				<span class="time">40 min</span>
				<p>{$t('location.marbella')}</p>
			</div>
			<div class="location-card">
				<span class="time">15 min</span>
				<p>{$t('location.ronda')}</p>
			</div>
			<div class="location-card">
				<span class="time">78k</span>
				<p>m² {$t('location.forest')}</p>
			</div>
		</div>
		
		<div class="location-map">
			<img src="/images/general.jpg" alt="Location map" />
		</div>
	</div>
</section>

<!-- Water Section -->
<section class="water">
	<div class="container">
		<div class="water-grid">
			<div class="water-images">
				<img src="/images/pozas.jpg" alt="Natural swimming pools" />
				<img src="/images/bosque.jpeg" alt="Chestnut forest" />
			</div>
			<div class="water-content">
				<h2>{$t('water.title')}</h2>
				<p class="lead">{$t('water.description')}</p>
				
				<ul class="water-features">
					<li>{$t('water.spring')}</li>
					<li>{$t('water.stream')}</li>
					<li>{$t('water.river')}</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- Story Section -->
<section class="story">
	<div class="container">
		<div class="story-content">
			<h2>{$t('story.title')}</h2>
			<p class="lead">{$t('story.description')}</p>
			
			<div class="story-timeline">
				<div class="timeline-item">
					<span class="year">20+</span>
					<p>{$t('story.years')}</p>
				</div>
				<div class="timeline-item">
					<span class="check">✓</span>
					<p>{$t('story.alignment')}</p>
				</div>
				<div class="timeline-item">
					<span class="mark">◊</span>
					<p>{$t('story.circumstances')}</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="cta">
	<div class="container">
		<h2>{$t('cta.invitation')}</h2>
		<p>{$t('cta.tagline')}</p>
		<div class="cta-buttons">
			<a href="/vision" class="btn btn-primary">{$t('cta.view')}</a>
			<a href="/contact" class="btn">{$t('cta.contact')}</a>
		</div>
	</div>
</section>

<style>
	/* Hero */
	.hero {
		position: relative;
		height: 100vh;
		min-height: 600px;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}
	
	.hero-content {
		position: relative;
		z-index: 2;
		text-align: center;
		padding: 2rem;
		background: rgba(245, 241, 232, 0.85);
		max-width: 700px;
	}
	
	.hero h1 {
		font-size: 2.5rem;
		margin-bottom: 1rem;
		font-weight: 600;
	}
	
	.subtitle {
		font-size: 1.25rem;
		font-style: italic;
		opacity: 0.9;
		margin: 0;
	}
	
	.hero-image {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
	}
	
	.hero-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	
	/* Vision Section */
	.vision {
		padding: 6rem 0;
	}
	
	.vision-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: center;
	}
	
	.vision h2 {
		font-size: 2rem;
		margin-bottom: 1.5rem;
	}
	
	.lead {
		font-size: 1.125rem;
		line-height: 1.7;
		margin-bottom: 2rem;
		opacity: 0.9;
	}
	
	.vision-points {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		margin: 2rem 0;
	}
	
	.point {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
	
	.point .number,
	.point .icon {
		font-family: var(--font-heading);
		font-size: 1.5rem;
		color: var(--color-accent-earth);
		min-width: 2.5rem;
	}
	
	.point p {
		margin: 0;
		font-size: 1rem;
	}
	
	.vision-image img {
		width: 100%;
		height: 400px;
		object-fit: cover;
		border-radius: 4px;
	}
	
	/* Location Section */
	.location {
		background: var(--color-bg-secondary);
		padding: 6rem 0;
		text-align: center;
	}
	
	.location h2 {
		font-size: 2rem;
		margin-bottom: 1rem;
	}
	
	.section-intro {
		max-width: 600px;
		margin: 0 auto 3rem;
		font-size: 1.1rem;
		opacity: 0.9;
	}
	
	.location-cards {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
		max-width: 800px;
		margin: 0 auto 4rem;
	}
	
	.location-card {
		padding: 2rem;
		background: var(--color-bg-primary);
		border-radius: 4px;
	}
	
	.location-card .time {
		display: block;
		font-family: var(--font-heading);
		font-size: 2.5rem;
		font-weight: 600;
		color: var(--color-accent-earth);
		margin-bottom: 0.5rem;
	}
	
	.location-card p {
		margin: 0;
		font-size: 0.95rem;
		opacity: 0.8;
	}
	
	.location-map {
		max-width: 900px;
		margin: 0 auto;
	}
	
	.location-map img {
		width: 100%;
		border-radius: 4px;
		box-shadow: 0 4px 20px rgba(0,0,0,0.1);
	}
	
	/* Water Section */
	.water {
		padding: 6rem 0;
	}
	
	.water-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: center;
	}
	
	.water-images {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}
	
	.water-images img {
		width: 100%;
		height: 300px;
		object-fit: cover;
		border-radius: 4px;
	}
	
	.water h2 {
		font-size: 2rem;
		margin-bottom: 1.5rem;
	}
	
	.water-features {
		list-style: none;
		margin-top: 2rem;
	}
	
	.water-features li {
		padding: 0.75rem 0;
		padding-left: 1.5rem;
		position: relative;
		font-size: 1.05rem;
	}
	
	.water-features li::before {
		content: '~';
		position: absolute;
		left: 0;
		color: var(--color-accent-water);
		font-weight: 600;
	}
	
	/* Story Section */
	.story {
		background: var(--color-bg-secondary);
		padding: 6rem 0;
		text-align: center;
	}
	
	.story h2 {
		font-size: 2rem;
		margin-bottom: 1.5rem;
	}
	
	.story-content {
		max-width: 700px;
		margin: 0 auto;
	}
	
	.story-timeline {
		display: flex;
		justify-content: center;
		gap: 3rem;
		margin-top: 3rem;
	}
	
	.timeline-item {
		text-align: center;
	}
	
	.timeline-item .year,
	.timeline-item .check,
	.timeline-item .mark {
		display: block;
		font-family: var(--font-heading);
		font-size: 2rem;
		font-weight: 600;
		color: var(--color-accent-earth);
		margin-bottom: 0.5rem;
	}
	
	.timeline-item p {
		margin: 0;
		font-size: 0.9rem;
		opacity: 0.8;
	}
	
	/* CTA Section */
	.cta {
		padding: 6rem 0;
		text-align: center;
	}
	
	.cta h2 {
		font-size: 1.75rem;
		margin-bottom: 1rem;
	}
	
	.cta p {
		font-size: 1.1rem;
		margin-bottom: 2rem;
		opacity: 0.8;
	}
	
	.cta-buttons {
		display: flex;
		gap: 1rem;
		justify-content: center;
	}
	
	@media (max-width: 768px) {
		.hero h1 {
			font-size: 1.75rem;
		}
		
		.subtitle {
			font-size: 1rem;
		}
		
		.vision-grid,
		.water-grid {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
		
		.location-cards {
			grid-template-columns: 1fr;
		}
		
		.water-images {
			grid-template-columns: 1fr;
		}
		
		.story-timeline {
			flex-direction: column;
			gap: 1.5rem;
		}
		
		.cta-buttons {
			flex-direction: column;
			align-items: center;
		}
	}
</style>