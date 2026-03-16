<script lang="ts">
	import { t } from '$lib/i18n/translations';
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

<!-- Valle del Genal Section -->
<section class="valle-section">
	<div class="container-wide">
		<div class="valle-grid">
			<div class="valle-content">
				<h2>{$t('landPage.valleTitle')}</h2>
				<p class="lead">{$t('landPage.valleDesc')}</p>
				
				<div class="valle-features">
					<div class="feature">
						<span class="feature-icon">🌰</span>
						<p>Protected chestnut forest landscape</p>
					</div>
					<div class="feature">
						<span class="feature-icon">🏛️</span>
						<p>Special protection status</p>
					</div>
					<div class="feature">
						<span class="feature-icon">🍂</span>
						<p>Golden autumn colors</p>
					</div>
				</div>
			</div>
			<div class="valle-image">
				<img src="/images/bosque2.jpeg" alt="Valle del Genal chestnut forest" />
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
				<img src="/images/ecoturismo5.jpg" alt="White village in valley" />
			</div>
			<div class="cartajima-content">
				<h2>{$t('landPage.cartajimaTitle')}</h2>
				<p class="lead">{$t('landPage.cartajimaDesc')}</p>
				
				<div class="stats">
					<div class="stat">
						<span class="stat-value">40</span>
						<span class="stat-unit">min</span>
						<span class="stat-label">to Marbella</span>
					</div>
					<div class="stat">
						<span class="stat-value">15</span>
						<span class="stat-unit">min</span>
						<span class="stat-label">to Ronda</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Water Features Section -->
<section class="water-section">
	<div class="container">
		<h2>{$t('landPage.waterTitle')}</h2>
		<p class="lead">{$t('landPage.waterDesc')}</p>
		
		<div class="water-gallery">
			<div class="water-item large">
				<img src="/images/pozas.jpg" alt="Natural swimming pools" />
				<p class="caption">{$t('landPage.captions.pozas')}</p>
			</div>
			<div class="water-item">
				<img src="/images/poza.JPG" alt="Water feature" />
				<p class="caption">{$t('landPage.captions.cascadas')}</p>
			</div>
			<div class="water-item">
				<img src="/images/casa-central7.jpeg" alt="Natural pool" />
				<p class="caption">{$t('landPage.captions.pool')}</p>
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
						<h3>Current</h3>
						<p>40 min to Marbella<br/>15 min to Ronda</p>
					</div>
					<div class="access-feature future">
						<h3>Future</h3>
						<p>Road expansion planned<br/>Reduced travel times</p>
					</div>
				</div>
			</div>
			<div class="access-map">
				<img src="/images/Captura-de-pantalla-2026-02-24-a-las-18.21.03.png" alt="Route from Marbella" />
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

<!-- Panoramic Views -->
<section class="panorama-section">
	<div class="container-wide">
		<h2>{$t('landPage.viewsTitle')}</h2>
		<p class="lead">{$t('landPage.viewsDesc')}</p>
		
		<div class="panorama-grid">
			<img src="/images/MirandoAlSur.gif" alt="Panoramic view south" />
			<img src="/images/riscos.gif" alt="Rocky peaks view" />
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
	
	.valle-features {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	
	.feature {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
	
	.feature-icon {
		font-size: 1.5rem;
		min-width: 2rem;
	}
	
	.feature p {
		margin: 0;
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
	
	.panorama-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 2rem;
		margin-top: 3rem;
	}
	
	.panorama-grid img {
		width: 100%;
		height: 350px;
		object-fit: cover;
		border-radius: 4px;
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