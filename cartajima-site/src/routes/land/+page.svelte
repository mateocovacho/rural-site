<script lang="ts">
	import { t } from '$lib/i18n/translations';
	import { onMount } from 'svelte';
	
	let sierraSlideIndex = $state(0);
	
	const sierraSlides = [
		'/images/Setenil-de-las-Bodegas-31-scaled.jpg',
		'/images/cartajimafiesta.png'
	];
	
	onMount(() => {
		const sierraInterval = setInterval(() => {
			sierraSlideIndex = (sierraSlideIndex + 1) % sierraSlides.length;
		}, 4000);
		
		return () => {
			clearInterval(sierraInterval);
		};
	});
</script>

<svelte:head>
	<title>The Land | Cartajima</title>
	<meta name="description" content="Valle del Genal and Cartajima - 78,000 m² of protected chestnut forest landscape" />
</svelte:head>

<section class="page-header">
	<div class="container">
		<h1>{$t('landPage.title')}</h1>
	</div>
</section>

<!-- Sierra de Ronda Section -->
<section class="sierra-section">
	<div class="container-wide">
		<h2>{$t('landPage.sierraTitle')}</h2>
		<p class="lead">{$t('landPage.sierraDesc')}</p>
		
		<div class="sierra-gallery">
			<div class="sierra-main">
				<img src="/images/ronda.jpg" alt="Puente de Ronda" />
			</div>
			<div class="sierra-slideshow-large slideshow">
				{#each sierraSlides as slide, i}
					<img src={slide} alt="Serranía de Ronda - Cultura y tradición" class:active={i === sierraSlideIndex} />
				{/each}
			</div>
			<div class="sierra-small">
				<img src="/images/Cueva-de-la-Pileta.jpg" alt="Cueva del Gato" />
				<img src="/images/cartajima casas blancas.jpg" alt="Pueblo blanco" />
			</div>
		</div>
	</div>
</section>

<!-- Valle del Genal Section -->
<section class="valle-section">
	<div class="container-wide">
		<div class="valle-grid">
			<div class="valle-content">
				<h2>{$t('landPage.valleTitle')}</h2>
				<p class="lead">{$t('landPage.valleDesc')}</p>
			</div>
			<div class="valle-image">
				<img src="/images/valledelgenal.jpg" alt="Valle del Genal chestnut forest" />
			</div>
		</div>
	</div>
</section>

<!-- Cartajima Section -->
<section class="cartajima-section">
	<div class="container">
		<div class="cartajima-grid">
			<div class="cartajima-images">
				<img src="/images/cartajima.jpg" alt="Cartajima village" />
				<img src="/images/cartajima casas blancas.jpg" alt="Pueblo blanco Cartajima" />
			</div>
			<div class="cartajima-content">
				<h2>{$t('landPage.cartajimaTitle')}</h2>
				<p class="lead">{$t('landPage.cartajimaDesc')}</p>
				
				<div class="stats">
					<div class="stat">
						<span class="stat-value">40</span>
						<span class="stat-unit">min</span>
						<span class="stat-label">{$t('location.marbella')}</span>
					</div>
					<div class="stat">
						<span class="stat-value">15</span>
						<span class="stat-unit">min</span>
						<span class="stat-label">{$t('location.ronda')}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Panoramic Views -->
<section class="panorama-section">
	<div class="container-wide">
		<h2>{$t('landPage.viewsFromEstate')}</h2>
		
		<div class="panorama-grid">
			<div class="panorama-item">
				<img src="/images/MirandoAlSur.gif" alt="Panoramic view south" />
				<p class="caption">{$t('landPage.viewSouth')}</p>
			</div>
			<div class="panorama-item">
				<img src="/images/riscos.gif" alt="Rocky peaks view" />
				<p class="caption">{$t('landPage.viewNorth')}</p>
			</div>
		</div>
	</div>
</section>

<!-- Water Features Section -->
<section class="water-section">
	<div class="container">
		<h2>{$t('landPage.waterPresence')}</h2>
		<p class="lead">{$t('landPage.waterPresenceDesc')}</p>
		
		<div class="water-gallery">
			<div class="water-item large">
				<img src="/images/pozas.jpg" alt="Natural swimming pools" />
				<p class="caption">{$t('landPage.genalSource')}</p>
			</div>
			<div class="water-item">
				<img src="/images/poza.JPG" alt="Water feature" />
				<p class="caption">{$t('landPage.arroyoCascadas')}</p>
			</div>
			<div class="water-item">
				<img src="/images/aguas-de-genal.jpg" alt="Genal river waters" />
				<p class="caption">{$t('landPage.genalPozas')}</p>
			</div>
		</div>
	</div>
</section>

<!-- Ecotourism Activities -->
<section class="activities-section">
	<div class="container">
		<h2>{$t('landPage.activitiesTitle')}</h2>
		<p class="lead">{$t('landPage.activitiesDesc')}</p>
		
		<div class="activities-grid">
			<div class="activity-card">
				<img src="/images/ECOTURISMO1.jpg" alt="Hiking in the forest" />
				<h3>{$t('landPage.hiking.title')}</h3>
				<p>{$t('landPage.hiking.desc')}</p>
			</div>
			<div class="activity-card">
				<img src="/images/ECOTURISMO2.jpg" alt="Mountain biking" />
				<h3>{$t('landPage.biking.title')}</h3>
				<p>{$t('landPage.biking.desc')}</p>
			</div>
			<div class="activity-card">
				<img src="/images/ECOTURISMO3.jpg" alt="Horseback riding" />
				<h3>{$t('landPage.horseback.title')}</h3>
				<p>{$t('landPage.horseback.desc')}</p>
			</div>
		</div>
	</div>
</section>

<!-- Accessibility Section -->
<section class="access-section">
	<div class="container">
		<div class="access-grid">
			<div class="access-content">
				<h2>{$t('landPage.accessTitle')}</h2>
				<p class="lead">{$t('landPage.accessDesc')}</p>
				
				<div class="access-features">
					<div class="access-feature">
						<h3>{$t('landPage.current')}</h3>
						<p>{$t('landPage.currentTimes')}</p>
					</div>
					<div class="access-feature future">
						<h3>{$t('landPage.future')}</h3>
						<p>{$t('landPage.futureTimes')}</p>
					</div>
				</div>
			</div>
			<div class="access-map">
				<img src="/images/Captura-de-pantalla-2026-02-24-a-las-18.21.03.png" alt="Route from Marbella" />
			</div>
		</div>
	</div>
</section>

<style>
	.page-header {
		padding: 8rem 0 4rem;
		text-align: center;
		background: var(--color-bg-secondary);
	}
	
	.page-header h1 {
		font-size: 3rem;
		margin: 0;
	}
	
	/* Sierra Section */
	.sierra-section {
		padding: 6rem 0;
		background: var(--color-bg-secondary);
		text-align: center;
	}
	
	.sierra-section h2 {
		font-size: 2rem;
		margin-bottom: 1.5rem;
	}
	
	.sierra-gallery {
		display: grid;
		grid-template-columns: 1fr 2fr 1fr;
		gap: 1rem;
		margin-top: 3rem;
		max-width: 1200px;
		margin-left: auto;
		margin-right: auto;
	}
	
	.sierra-main img {
		width: 100%;
		height: 500px;
		object-fit: cover;
		border-radius: 4px;
	}
	
	.sierra-slideshow-large {
		height: 500px;
	}
	
	.sierra-small {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	
	.sierra-small img {
		flex: 1;
		width: 100%;
		object-fit: cover;
		border-radius: 4px;
	}
	
	.slideshow {
		position: relative;
		width: 100%;
		height: 100%;
		overflow: hidden;
		border-radius: 4px;
	}
	
	.slideshow img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0;
		transition: opacity 1s ease-in-out;
		border-radius: 4px;
	}
	
	.slideshow img.active {
		opacity: 1;
	}
	
	/* Valle Section */
	.valle-section {
		padding: 6rem 0;
	}
	
	.valle-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: center;
	}
	
	.valle-content h2 {
		font-size: 2rem;
		margin-bottom: 1.5rem;
	}
	
	.lead {
		font-size: 1.125rem;
		line-height: 1.7;
		margin-bottom: 2rem;
		opacity: 0.9;
	}
	
	.valle-image img {
		width: 100%;
		height: 450px;
		object-fit: cover;
		border-radius: 4px;
	}
	
	/* Cartajima Section */
	.cartajima-section {
		background: var(--color-bg-secondary);
		padding: 6rem 0;
	}
	
	.cartajima-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: center;
	}
	
	.cartajima-images {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}
	
	.cartajima-images img {
		width: 100%;
		height: 300px;
		object-fit: cover;
		border-radius: 4px;
	}
	
	.cartajima-content h2 {
		font-size: 2rem;
		margin-bottom: 1.5rem;
	}
	
	.stats {
		display: flex;
		gap: 3rem;
		margin-top: 2rem;
	}
	
	.stat {
		text-align: center;
	}
	
	.stat-value {
		display: block;
		font-family: var(--font-heading);
		font-size: 3rem;
		font-weight: 600;
		color: var(--color-accent-earth);
		line-height: 1;
	}
	
	.stat-unit {
		font-size: 0.875rem;
		opacity: 0.7;
	}
	
	.stat-label {
		display: block;
		font-size: 0.9rem;
		opacity: 0.8;
		margin-top: 0.25rem;
	}
	
	/* Water Section */
	.water-section {
		padding: 6rem 0;
		text-align: center;
	}
	
	.water-section h2 {
		font-size: 2rem;
		margin-bottom: 1rem;
	}
	
	.water-gallery {
		display: grid;
		grid-template-columns: 2fr 1fr;
		grid-template-rows: 1fr 1fr;
		gap: 1rem;
		margin-top: 3rem;
		max-width: 1000px;
		margin-left: auto;
		margin-right: auto;
	}
	
	.water-item {
		position: relative;
	}
	
	.water-item.large {
		grid-row: span 2;
	}
	
	.water-item img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 4px;
	}
	
	.water-item.large img {
		height: 100%;
		min-height: 400px;
	}
	
	.caption {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		background: rgba(61, 61, 61, 0.8);
		color: var(--color-text-light);
		padding: 0.75rem;
		font-size: 0.85rem;
		margin: 0;
		border-radius: 0 0 4px 4px;
	}
	
	/* Access Section */
	.access-section {
		background: var(--color-bg-secondary);
		padding: 6rem 0;
	}
	
	.access-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: center;
	}
	
	.access-content h2 {
		font-size: 2rem;
		margin-bottom: 1.5rem;
	}
	
	.access-features {
		display: flex;
		gap: 2rem;
		margin-top: 2rem;
	}
	
	.access-feature {
		flex: 1;
		padding: 1.5rem;
		background: var(--color-bg-primary);
		border-radius: 4px;
	}
	
	.access-feature.future {
		border: 2px dashed var(--color-accent-earth);
		background: transparent;
	}
	
	.access-feature h3 {
		font-size: 1rem;
		margin-bottom: 0.5rem;
		color: var(--color-accent-earth);
	}
	
	.access-feature p {
		margin: 0;
		font-size: 0.9rem;
	}
	
	.access-map img {
		width: 100%;
		border-radius: 4px;
		box-shadow: 0 4px 20px rgba(0,0,0,0.1);
	}
	
	/* Activities Section */
	.activities-section {
		padding: 6rem 0;
		text-align: center;
	}
	
	.activities-section h2 {
		font-size: 2rem;
		margin-bottom: 1rem;
	}
	
	.activities-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
		margin-top: 3rem;
	}
	
	.activity-card {
		text-align: left;
	}
	
	.activity-card img {
		width: 100%;
		height: 250px;
		object-fit: cover;
		border-radius: 4px;
		margin-bottom: 1rem;
	}
	
	.activity-card h3 {
		font-size: 1.25rem;
		margin-bottom: 0.5rem;
	}
	
	.activity-card p {
		margin: 0;
		font-size: 0.9rem;
		opacity: 0.8;
	}
	
	/* Panorama Section */
	.panorama-section {
		background: var(--color-bg-secondary);
		padding: 6rem 0;
		text-align: center;
	}
	
	.panorama-section h2 {
		font-size: 2rem;
		margin-bottom: 1rem;
	}
	
	.panorama-section h2 strong {
		font-weight: 700;
	}
	
	.panorama-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 2rem;
		margin-top: 3rem;
	}
	
	.panorama-item {
		position: relative;
	}
	
	.panorama-item img {
		width: 100%;
		height: 350px;
		object-fit: cover;
		border-radius: 4px;
	}
	
	.panorama-item .caption {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		background: rgba(61, 61, 61, 0.8);
		color: var(--color-text-light);
		padding: 0.75rem;
		font-size: 0.9rem;
		margin: 0;
		border-radius: 0 0 4px 4px;
	}
	
	@media (max-width: 768px) {
		.page-header h1 {
			font-size: 2rem;
		}
		
		.valle-grid,
		.cartajima-grid,
		.access-grid {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
		
		.sierra-gallery {
			grid-template-columns: 1fr;
			gap: 1rem;
		}
		
		.sierra-main img,
		.sierra-slideshow-large {
			height: 250px;
		}
		
		.sierra-small {
			flex-direction: row;
		}
		
		.sierra-small img {
			height: 150px;
		}
		
		.cartajima-images {
			grid-template-columns: 1fr;
		}
		
		.water-gallery {
			grid-template-columns: 1fr;
			grid-template-rows: auto;
		}
		
		.water-item.large {
			grid-row: span 1;
		}
		
		.stats {
			gap: 1.5rem;
		}
		
		.stat-value {
			font-size: 2rem;
		}
		
		.access-features {
			flex-direction: column;
		}
		
		.activities-grid,
		.panorama-grid {
			grid-template-columns: 1fr;
		}
	}
</style>