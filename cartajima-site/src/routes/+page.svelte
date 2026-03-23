<script lang="ts">
	import { t } from '$lib/i18n/translations';
	
	let lightboxOpen = $state(false);
	let lightboxImage = $state('');
	
	function openLightbox(src: string) {
		lightboxImage = src;
		lightboxOpen = true;
	}
	
	function closeLightbox() {
		lightboxOpen = false;
	}
</script>

<svelte:head>
	<title>Cartajima | Valle del Genal</title>
	<meta name="description" content="Cartajima Ecotourism Estate - 78,000 m² of chestnut forests in Valle del Genal" />
</svelte:head>

<!-- Lightbox Modal -->
{#if lightboxOpen}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<div class="lightbox" onclick={closeLightbox} role="dialog" aria-modal="true" aria-label="Image viewer" tabindex="-1">
		<button class="lightbox-close" onclick={closeLightbox} aria-label="Close">×</button>
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<img src={lightboxImage} alt="Expanded view" onclick={(e) => e.stopPropagation()} />
	</div>
{/if}

<!-- Hero Section -->
<section class="hero">
	<div class="hero-content">
		<div class="hero-header">
			<h1>{$t('hero.title')}</h1>
			<p class="license">{$t('hero.license')}</p>
		</div>
		<p class="subtitle">{$t('hero.subtitle')}</p>
		<div class="owner-note">
			<span class="owner-label">{$t('hero.ownerNote')}</span>
			<a href="/nota-propietario" class="owner-link">{$t('hero.readVision')}</a>
		</div>
	</div>
	<div class="hero-image">
		<img src="/images/cartajima.jpg" alt="Valle del Genal landscape" />
	</div>
</section>

<!-- Vision Section -->
<section class="vision">
	<div class="container">
		<div class="vision-grid">
			<div class="vision-text">
				<h2>{$t('vision.title')}</h2>
				<p class="lead">{$t('vision.description')}</p>
				
				<a href="/Planos.pdf" class="btn btn-primary" target="_blank">{$t('cta.view')}</a>
			</div>
			<div class="vision-image">
				<img src="/images/IMG_1822.JPG" alt="Valle del Genal landscape" />
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
				<span class="location-label">{$t('location.sierra')}</span>
			</div>
		</div>
		
		<div class="location-maps">
			<button type="button" class="map-btn" onclick={() => openLightbox('/images/goglemaps.png')} aria-label="Expand Google Maps location">
				<img src="/images/goglemaps.png" alt="Google Maps location" />
			</button>
			<button type="button" class="map-btn" onclick={() => openLightbox('/images/general.jpg')} aria-label="Expand location map">
				<img src="/images/general.jpg" alt="Location map" />
			</button>
			<button type="button" class="map-btn" onclick={() => openLightbox('/images/situacion2.gif')} aria-label="Expand situation map">
				<img src="/images/situacion2.gif" alt="Situation map" />
			</button>
		</div>
		
		<p class="gps-coords">{$t('location.gps')}</p>
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
		margin-bottom: 0.5rem;
		font-weight: 600;
	}
	
	.license {
		font-size: 0.85rem;
		letter-spacing: 0.1em;
		opacity: 0.8;
		margin-bottom: 1.5rem;
	}
	
	.subtitle {
		font-size: 1.25rem;
		font-style: italic;
		opacity: 0.9;
		margin: 0;
	}
	
	.hero-header {
		margin-bottom: 1rem;
	}
	
	.owner-note {
		margin-top: 2rem;
		padding: 1.25rem 1.5rem;
		background: rgba(255, 255, 255, 0.6);
		border-radius: 4px;
		border-left: 3px solid var(--color-accent-earth);
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		align-items: flex-start;
	}
	
	.owner-label {
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.1em;
		opacity: 0.7;
	}
	
	.owner-link {
		font-size: 1rem;
		color: var(--color-accent-earth);
		text-decoration: none;
		font-weight: 500;
		transition: opacity 0.2s;
	}
	
	.owner-link:hover {
		opacity: 0.7;
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
	
	.location-card .location-label {
		display: block;
		font-family: var(--font-heading);
		font-size: 1.4rem;
		font-weight: 600;
		color: var(--color-accent-earth);
		margin-bottom: 0.5rem;
		line-height: 1.3;
	}
	
	.location-card p {
		margin: 0;
		font-size: 0.95rem;
		opacity: 0.8;
	}
	
	.location-maps {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
		max-width: 1000px;
		margin: 0 auto 2rem;
	}
	
	.map-btn {
		padding: 0;
		border: none;
		background: none;
		cursor: pointer;
		transition: transform 0.2s;
	}
	
	.map-btn img {
		width: 100%;
		height: 250px;
		object-fit: cover;
		border-radius: 4px;
		box-shadow: 0 4px 20px rgba(0,0,0,0.1);
		transition: box-shadow 0.2s;
	}
	
	.map-btn:hover img {
		box-shadow: 0 6px 25px rgba(0,0,0,0.15);
	}
	
	.lightbox {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.9);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
		cursor: pointer;
	}
	
	.lightbox img {
		max-width: 90%;
		max-height: 90%;
		object-fit: contain;
		border-radius: 4px;
	}
	
	.lightbox-close {
		position: absolute;
		top: 20px;
		right: 30px;
		font-size: 3rem;
		color: white;
		background: none;
		border: none;
		cursor: pointer;
		line-height: 1;
		opacity: 0.8;
		transition: opacity 0.2s;
	}
	
	.lightbox-close:hover {
		opacity: 1;
	}
	
	.gps-coords {
		font-family: var(--font-accent);
		font-size: 0.9rem;
		opacity: 0.7;
		margin-top: 1rem;
	}
	
	@media (max-width: 768px) {
		.hero {
			height: auto;
			min-height: 70vh;
			padding: 6rem 1rem;
		}
		
		.hero-content {
			padding: 1.5rem;
			max-width: 100%;
			margin: 0 1rem;
		}
		
		.hero h1 {
			font-size: 1.5rem;
			line-height: 1.3;
		}
		
		.subtitle {
			font-size: 1rem;
		}
		
		.vision-grid {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
		
		.location-cards {
			grid-template-columns: 1fr;
		}
		
		.location-maps {
			grid-template-columns: 1fr;
		}
	}
</style>