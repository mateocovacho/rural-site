<script lang="ts">
	import { t } from '$lib/i18n/translations';
</script>

<svelte:head>
	<title>The Vision | Cartajima</title>
	<meta name="description" content="The vision for Cartajima Ecotourism Estate - 10 casitas with total privacy across 78,000 m²" />
</svelte:head>

<section class="page-header">
	<div class="container">
		<h1>{$t('visionPage.title')}</h1>
	</div>
</section>

<!-- Layout Section -->
<section class="layout-section">
	<div class="container-wide">
		<div class="layout-grid">
			<div class="layout-content">
				<h2>Proyecto</h2>
				<p class="lead">{$t('visionPage.layoutDesc')}</p>
				
				<div class="specs-grid">
					<div class="spec-item">
						<span class="spec-value">10</span>
						<span class="spec-label">{$t('visionPage.specs.casitas')}</span>
					</div>
					<div class="spec-item">
						<span class="spec-value">78k</span>
						<span class="spec-label">{$t('visionPage.specs.land')}</span>
					</div>
					<div class="spec-item">
						<span class="spec-value">2+2</span>
						<span class="spec-label">{$t('visionPage.specs.parcels')}</span>
					</div>
				</div>
			</div>
			<div class="layout-image">
				<img src="/images/emplazamientos.jpg" alt="Site layout map" />
			</div>
		</div>
	</div>
</section>

<!-- Land Division Section -->
<section class="land-section">
	<div class="container">
		<div class="land-grid">
			<div class="land-content">
				<h2>{$t('visionPage.landTitle')}</h2>
				<p class="lead">{$t('visionPage.landDesc')}</p>
				
				<div class="land-diagram">
					<div class="parcel project">
						<span class="parcel-label">PARCELA PARA PROYECTO</span>
						<span class="parcel-count">40.000M²</span>
					</div>
					<div class="parcel available">
						<span class="parcel-label">PARCELA PARA OTROS USOS</span>
						<span class="parcel-count">38.000M²</span>
					</div>
				</div>
			</div>
			<div class="land-image">
				<img src="/images/finca.jpg" alt="Property boundaries" />
			</div>
		</div>
	</div>
</section>

<!-- Infrastructure Section -->
<section class="infrastructure-section">
	<div class="container">
		<h2>{$t('visionPage.infrastructure')}</h2>
		<p class="lead">{$t('visionPage.infrastructureDesc')}</p>
		
		<div class="infra-grid">
			<div class="infra-card">
				<span class="infra-icon">~</span>
				<h3>{$t('visionPage.infraFeatures.water')}</h3>
				<p>{$t('visionPage.infraFeatures.waterDesc')}</p>
			</div>
			<div class="infra-card">
				<span class="infra-icon">⚡</span>
				<h3>{$t('visionPage.infraFeatures.electricity')}</h3>
				<p>{$t('visionPage.infraFeatures.electricityDesc')}</p>
			</div>
			<div class="infra-card">
				<span class="infra-icon">☀</span>
				<h3>{$t('visionPage.infraFeatures.orientation')}</h3>
				<p>{$t('visionPage.infraFeatures.orientationDesc')}</p>
			</div>
		</div>
	</div>
</section>

<!-- Central House Section -->
<section class="central-section">
	<div class="container">
		<div class="central-grid">
			<div class="central-images">
				<img src="/images/casa-central5.jpeg" alt="Central house interior" />
				<img src="/images/casa-central6.jpeg" alt="Yoga studio space" />
			</div>
			<div class="central-content">
				<h2>{$t('visionPage.centralTitle')}</h2>
				<p class="lead">{$t('visionPage.centralDesc')}</p>
				
			<div class="central-features">
				<div class="feature">
					<span class="feature-icon">◈</span>
					<p>{$t('visionPage.centralFeatures.events')}</p>
				</div>
				<div class="feature">
					<span class="feature-icon">◎</span>
					<p>{$t('visionPage.centralFeatures.courses')}</p>
				</div>
				<div class="feature">
					<span class="feature-icon">◇</span>
					<p>{$t('visionPage.centralFeatures.kitchen')}</p>
				</div>
			</div>
			</div>
		</div>
	</div>
</section>

<!-- Concept Renders -->
<section class="renders-section">
	<div class="container">
		<h2>{$t('visionPage.rendersTitle')}</h2>
		<p class="lead">{$t('visionPage.rendersDesc')}</p>
		
		<div class="renders-grid">
			<img src="/images/simulacion-1.jpeg" alt="Casita concept render 1" />
			<img src="/images/simula2.jpeg" alt="Casita concept render 2" />
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
	
	/* Layout Section */
	.layout-section {
		padding: 6rem 0;
	}
	
	.layout-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: center;
	}
	
	.layout-content h2 {
		font-size: 2rem;
		margin-bottom: 1.5rem;
	}
	
	.lead {
		font-size: 1.125rem;
		line-height: 1.7;
		margin-bottom: 2rem;
		opacity: 0.9;
	}
	
	.specs-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
		margin-top: 3rem;
	}
	
	.spec-item {
		text-align: center;
	}
	
	.spec-value {
		display: block;
		font-family: var(--font-heading);
		font-size: 2.5rem;
		font-weight: 600;
		color: var(--color-accent-earth);
		margin-bottom: 0.5rem;
	}
	
	.spec-label {
		font-size: 0.9rem;
		opacity: 0.8;
	}
	
	.layout-image img {
		width: 100%;
		border-radius: 4px;
		box-shadow: 0 4px 20px rgba(0,0,0,0.1);
	}
	
	/* Central Section */
	.central-section {
		background: var(--color-bg-secondary);
		padding: 6rem 0;
	}
	
	.central-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: center;
	}
	
	.central-images {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}
	
	.central-images img {
		width: 100%;
		height: 300px;
		object-fit: cover;
		border-radius: 4px;
	}
	
	.central-content h2 {
		font-size: 2rem;
		margin-bottom: 1.5rem;
	}
	
	.central-features {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-top: 2rem;
	}
	
	.feature {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
	
	.feature-icon {
		font-size: 1.25rem;
		color: var(--color-accent-earth);
		min-width: 1.5rem;
	}
	
	.feature p {
		margin: 0;
	}
	
	/* Infrastructure Section */
	.infrastructure-section {
		padding: 6rem 0;
		text-align: center;
	}
	
	.infrastructure-section h2 {
		font-size: 2rem;
		margin-bottom: 1rem;
	}
	
	.infra-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
		max-width: 900px;
		margin: 3rem auto 0;
	}
	
	.infra-card {
		background: var(--color-bg-secondary);
		padding: 2rem;
		border-radius: 4px;
	}
	
	.infra-icon {
		display: block;
		font-size: 2rem;
		color: var(--color-accent-water);
		margin-bottom: 1rem;
	}
	
	.infra-card h3 {
		font-size: 1.25rem;
		margin-bottom: 0.5rem;
	}
	
	.infra-card p {
		margin: 0;
		font-size: 0.9rem;
		opacity: 0.8;
	}
	
	/* Land Section */
	.land-section {
		background: var(--color-bg-secondary);
		padding: 6rem 0;
	}
	
	.land-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: center;
	}
	
	.land-content h2 {
		font-size: 2rem;
		margin-bottom: 1.5rem;
	}
	
	.land-diagram {
		display: flex;
		gap: 1rem;
		margin-top: 2rem;
	}
	
	.parcel {
		flex: 1;
		padding: 1.5rem;
		border-radius: 4px;
		text-align: center;
	}
	
	.parcel.project {
		background: rgba(198, 40, 40, 0.5);
		color: var(--color-text-light);
	}
	
	.parcel.available {
		background: rgba(249, 168, 37, 0.5);
		color: var(--color-text-primary);
	}
	
	.parcel-label {
		display: block;
		font-family: var(--font-heading);
		font-size: 1.25rem;
		margin-bottom: 0.5rem;
	}
	
	.parcel-count {
		font-size: 0.9rem;
		opacity: 0.9;
	}
	
	.land-image img {
		width: 100%;
		border-radius: 4px;
		box-shadow: 0 4px 20px rgba(0,0,0,0.1);
	}
	
	/* Renders Section */
	.renders-section {
		padding: 6rem 0;
		text-align: center;
	}
	
	.renders-section h2 {
		font-size: 2rem;
		margin-bottom: 1rem;
	}
	
	.renders-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 2rem;
		margin-top: 3rem;
	}
	
	.renders-grid img {
		width: 100%;
		height: 400px;
		object-fit: cover;
		border-radius: 4px;
		box-shadow: 0 4px 20px rgba(0,0,0,0.1);
	}
	
	@media (max-width: 768px) {
		.page-header h1 {
			font-size: 2rem;
		}
		
		.layout-grid,
		.central-grid,
		.land-grid {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
		
		.central-grid {
			display: flex;
			flex-direction: column;
		}
		
		.central-content {
			order: 1;
		}
		
		.central-images {
			order: 2;
		}
		
		.specs-grid,
		.infra-grid {
			grid-template-columns: 1fr;
		}
		
		.central-images {
			grid-template-columns: 1fr;
		}
		
		.land-diagram {
			flex-direction: column;
		}
		
		.renders-grid {
			grid-template-columns: 1fr;
		}
	}
</style>