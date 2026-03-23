<script lang="ts">
	import { t } from '$lib/i18n/translations';
</script>

<svelte:head>
	<title>{$t('ownerPage.title')} | Cartajima</title>
	<meta name="description" content="Owner's vision for Cartajima - 20 years waiting for this moment" />
</svelte:head>

<section class="owner-page">
	<div class="container-narrow">
		<div class="back-link">
			<a href="/">{$t('ownerPage.back')}</a>
		</div>
		
		<article class="vision-letter">
			<h1>{$t('ownerPage.title')}</h1>
			
			<p class="opening">
				{$t('ownerPage.opening')}
			</p>
			
			<div class="highlight-block">
				<p>
					{$t('ownerPage.highlight')}
				</p>
			</div>
			
			<p class="personal">
				{$t('ownerPage.personal')}
			</p>
			
			<div class="project-vision">
				<h2>{$t('ownerPage.projectTitle')}</h2>
				<p>
					{$t('ownerPage.projectDesc1')} <em>{$t('ownerPage.projectEmphasis')}</em>
				</p>
				<p>
					{$t('ownerPage.projectDesc2')}
				</p>
				<p>
					{$t('ownerPage.projectDesc3')}
				</p>
			</div>
			
			<ul class="features-list">
				<li>
					{$t('ownerPage.feature1')}
				</li>
				<li>
					{$t('ownerPage.feature2')}
				</li>
				<li>
					{$t('ownerPage.feature3')}
				</li>
				<li>
					{$t('ownerPage.feature4')}
				</li>
				<li>
					{$t('ownerPage.feature5')} <span class="note">{$t('ownerPage.feature5Note')}</span>
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