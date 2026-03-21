<script lang="ts">
	import { t } from '$lib/i18n/translations';
</script>

<svelte:head>
	<title>Mi Visión | Cartajima</title>
	<meta name="description" content="La visión del propietario para Cartajima - 20 años esperando este momento" />
</svelte:head>

<section class="owner-page">
	<div class="container-narrow">
		<div class="back-link">
			<a href="/">← Volver</a>
		</div>
		
		<article class="vision-letter">
			<h1>Mi Visión</h1>
			
			<p class="opening">
				A 40 minutos de Marbella direccional Ronda encontramos Cartajima como entrada más alta al Valle del Genal. A solo 15 minutos de Ronda este valle presenta unas características paisajísticas únicas por sus bosques de castaño.
			</p>
			
			<div class="highlight-block">
				<p>
					La finca tiene 78.000 m² y cuenta con una figura de protección especial, por estar en este Valle de paisaje tan singular. Por eso esta licencia para proyecto de actuación es tan valiosa.
				</p>
			</div>
			
			<p class="personal">
				He tenido que esperar más de 20 años desde que compré la finca para conseguir una alineación política de Ayuntamiento, Junta de Andalucía y Diputación de Málaga, que hiciesen posible esta licencia. Desgraciadamente ya es demasiado tarde para mí. En todos estos años mis circunstancias familiares y personales han cambiado y ya no estoy en situación de desarrollar mi visión.
			</p>
			
			<div class="project-vision">
				<h2>El Proyecto</h2>
				<p>
					Es un complejo de ecoturismo compuesto por 10 casitas, una gran estancia central, almacén, huerta… La idea es que por el tamaño de la finca puedes construir las 10 casitas lo bastante separadas entre sí para que cada inquilino tenga total sensación de intimidad y conexión con la naturaleza. <em>Para mí, esto es el gran lujo del futuro.</em>
				</p>
				<p>
					En la casa grande central se pueden celebrar eventos, cursos, reuniones... de manera que los inquilinos tengan un espacio donde poder conectar con otras personas.
				</p>
				<p>
					La finca tiene todo lo necesario para construir en ella uno de los lugares más especiales de Málaga.
				</p>
			</div>
			
			<ul class="features-list">
				<li>
					<strong>Suministro de agua</strong> del pueblo, así como un manantial que no he visto secarse ni en los años más secos. En la linde sur el Arrollo Blanco tiene cascadas y pozas donde poder refrescarse. En un paseo llegas al Río Genal y sus pozas de agua cristalina.
				</li>
				<li>
					<strong>Un poste de luz</strong> en la propia finca del que puede conectarse suministro eléctrico para todo el complejo.
				</li>
				<li>
					<strong>Orientación Sur</strong> y una pendiente moderada.
				</li>
				<li>
					<strong>Toda el proyecto se emplaza</strong> en 2 de las 4 parcelas de la finca, por lo que quedan otras dos parcelas disponibles para otros usos.
				</li>
				<li>
					<strong>Su situación</strong> a 40 minutos de Marbella y 15 de Ronda, los dos puntos más turísticos de Málaga. <span class="note">(Se espera que en los próximos años se amplíe la carretera Ronda-Marbella, lo que disminuiría este tiempo notablemente)</span>
				</li>
			</ul>
		</article>
	</div>
</section>

<style>
	.owner-page {
		padding: 4rem 0 6rem;
		min-height: 100vh;
		background: var(--color-bg-primary);
	}
	
	.container-narrow {
		max-width: 720px;
		margin: 0 auto;
		padding: 0 2rem;
	}
	
	.back-link {
		margin-bottom: 3rem;
	}
	
	.back-link a {
		color: var(--color-accent-earth);
		text-decoration: none;
		font-size: 0.9rem;
		opacity: 0.8;
		transition: opacity 0.2s;
	}
	
	.back-link a:hover {
		opacity: 1;
	}
	
	.vision-letter h1 {
		font-size: 2.5rem;
		margin-bottom: 2.5rem;
		font-weight: 600;
		letter-spacing: -0.02em;
	}
	
	.opening {
		font-size: 1.2rem;
		line-height: 1.8;
		color: var(--color-text-primary);
		margin-bottom: 2rem;
	}
	
	.highlight-block {
		background: var(--color-bg-secondary);
		padding: 2rem;
		border-radius: 4px;
		margin-bottom: 2rem;
		border-left: 3px solid var(--color-accent-earth);
	}
	
	.highlight-block p {
		margin: 0;
		font-size: 1.1rem;
		line-height: 1.7;
	}
	
	.personal {
		font-size: 1.1rem;
		line-height: 1.8;
		color: var(--color-text-primary);
		opacity: 0.9;
		margin-bottom: 2.5rem;
	}
	
	.project-vision {
		background: linear-gradient(135deg, rgba(198, 40, 40, 0.05) 0%, rgba(249, 168, 37, 0.05) 100%);
		padding: 2rem;
		border-radius: 4px;
		margin-bottom: 2.5rem;
	}
	
	.project-vision h2 {
		font-size: 1.5rem;
		margin-bottom: 1rem;
		color: var(--color-accent-earth);
	}
	
	.project-vision p {
		font-size: 1.05rem;
		line-height: 1.7;
		margin-bottom: 1rem;
	}
	
	.project-vision p:last-child {
		margin-bottom: 0;
	}
	
	.project-vision em {
		font-style: italic;
		color: var(--color-accent-earth);
	}
	
	.features-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}
	
	.features-list li {
		position: relative;
		padding-left: 1.5rem;
		margin-bottom: 1.25rem;
		font-size: 1rem;
		line-height: 1.7;
	}
	
	.features-list li::before {
		content: "·";
		position: absolute;
		left: 0;
		color: var(--color-accent-earth);
		font-weight: bold;
		font-size: 1.2rem;
	}
	
	.features-list strong {
		color: var(--color-text-primary);
	}
	
	.features-list .note {
		display: block;
		font-size: 0.9rem;
		opacity: 0.7;
		margin-top: 0.25rem;
		font-style: italic;
	}
	
	@media (max-width: 768px) {
		.owner-page {
			padding: 2rem 0 4rem;
		}
		
		.container-narrow {
			padding: 0 1.25rem;
		}
		
		.vision-letter h1 {
			font-size: 1.75rem;
		}
		
		.opening {
			font-size: 1.1rem;
		}
		
		.highlight-block {
			padding: 1.5rem;
		}
		
		.project-vision {
			padding: 1.5rem;
		}
	}
</style>