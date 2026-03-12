<script lang="ts">
	import { t } from '$lib/i18n/translations';
	
	let formData = $state({
		name: '',
		email: '',
		agency: '',
		message: ''
	});
	
	function handleSubmit(event: Event) {
		event.preventDefault();
		// In a real implementation, this would send to a backend
		alert('Thank you for your inquiry. We will be in touch shortly.');
		formData = { name: '', email: '', agency: '', message: '' };
	}
</script>

<svelte:head>
	<title>Contact | Cartajima</title>
	<meta name="description" content="Contact us about Cartajima Ecotourism Estate - a legacy opportunity in Valle del Genal" />
</svelte:head>

<section class="page-header">
	<div class="container">
		<h1>{$t('contactPage.title')}</h1>
		<p class="subtitle">{$t('contactPage.subtitle')}</p>
		<div class="license-badge">
			<span class="badge-icon">✓</span>
			<span>{$t('contactPage.license')}</span>
		</div>
	</div>
</section>

<section class="contact-section">
	<div class="container">
		<div class="contact-grid">
			<div class="contact-info">
				<h2>{$t('contactPage.legacyTitle')}</h2>
				<p class="lead">
					{$t('contactPage.legacyDesc')}
				</p>
				
				<div class="project-summary">
					<h3>{$t('contactPage.projectSummary')}</h3>
					<ul>
						<li>{$t('contactPage.specs.casitas')}</li>
						<li>{$t('contactPage.specs.land')}</li>
						<li>{$t('contactPage.specs.license')}</li>
						<li>{$t('contactPage.specs.water')}</li>
						<li>{$t('contactPage.specs.location')}</li>
					</ul>
				</div>
			</div>
			
			<div class="contact-form-wrapper">
				<form onsubmit={handleSubmit} class="contact-form">
					<div class="form-group">
						<label for="name">{$t('contactPage.form.name')}</label>
						<input 
							type="text" 
							id="name" 
							bind:value={formData.name}
							required
						/>
					</div>
					
					<div class="form-group">
						<label for="email">{$t('contactPage.form.email')}</label>
						<input 
							type="email" 
							id="email" 
							bind:value={formData.email}
							required
						/>
					</div>
					
					<div class="form-group">
						<label for="agency">{$t('contactPage.form.agency')}</label>
						<input 
							type="text" 
							id="agency" 
							bind:value={formData.agency}
							placeholder="Your real estate agency or company"
						/>
					</div>
					
					<div class="form-group">
						<label for="message">{$t('contactPage.form.message')}</label>
						<textarea 
							id="message" 
							bind:value={formData.message}
							placeholder={$t('contactPage.form.placeholder')}
							rows="6"
							required
						></textarea>
					</div>
					
					<button type="submit" class="btn btn-primary submit-btn">
						{$t('contactPage.form.send')}
					</button>
				</form>
			</div>
		</div>
	</div>
</section>

<section class="cta-section">
	<div class="container">
		<h2>{$t('contactPage.seriousTitle')}</h2>
		<p>
			{$t('contactPage.seriousDesc')}
		</p>
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
		margin-bottom: 1rem;
	}
	
	.subtitle {
		font-size: 1.25rem;
		font-style: italic;
		opacity: 0.8;
		margin-bottom: 2rem;
	}
	
	.license-badge {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.75rem 1.5rem;
		background: var(--color-accent-nature);
		color: var(--color-text-light);
		border-radius: 4px;
		font-family: var(--font-accent);
		font-size: 0.9rem;
	}
	
	.badge-icon {
		font-weight: bold;
	}
	
	/* Contact Section */
	.contact-section {
		padding: 6rem 0;
	}
	
	.contact-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: start;
	}
	
	.contact-info h2 {
		font-size: 2rem;
		margin-bottom: 1.5rem;
	}
	
	.lead {
		font-size: 1.125rem;
		line-height: 1.7;
		opacity: 0.9;
	}
	
	.project-summary {
		margin-top: 3rem;
		padding: 2rem;
		background: var(--color-bg-secondary);
		border-radius: 4px;
	}
	
	.project-summary h3 {
		font-size: 1.25rem;
		margin-bottom: 1rem;
		color: var(--color-accent-earth);
	}
	
	.project-summary ul {
		list-style: none;
		padding: 0;
	}
	
	.project-summary li {
		padding: 0.5rem 0;
		border-bottom: 1px solid rgba(139, 115, 85, 0.2);
	}
	
	.project-summary li:last-child {
		border-bottom: none;
	}
	
	/* Contact Form */
	.contact-form-wrapper {
		background: var(--color-bg-secondary);
		padding: 2.5rem;
		border-radius: 4px;
	}
	
	.form-group {
		margin-bottom: 1.5rem;
	}
	
	.form-group label {
		display: block;
		font-family: var(--font-accent);
		font-size: 0.85rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		margin-bottom: 0.5rem;
		opacity: 0.8;
	}
	
	.form-group input,
	.form-group textarea {
		width: 100%;
		padding: 0.875rem;
		border: 1px solid transparent;
		background: var(--color-bg-primary);
		font-family: var(--font-body);
		font-size: 1rem;
		color: var(--color-text-primary);
		border-radius: 4px;
		transition: border-color 0.2s;
	}
	
	.form-group input:focus,
	.form-group textarea:focus {
		outline: none;
		border-color: var(--color-accent-earth);
	}
	
	.form-group textarea {
		resize: vertical;
		min-height: 120px;
	}
	
	.submit-btn {
		width: 100%;
		padding: 1rem;
		font-size: 1rem;
	}
	
	/* CTA Section */
	.cta-section {
		background: var(--color-bg-secondary);
		padding: 5rem 0;
		text-align: center;
	}
	
	.cta-section h2 {
		font-size: 1.75rem;
		margin-bottom: 1.5rem;
	}
	
	.cta-section p {
		max-width: 700px;
		margin: 0 auto;
		font-size: 1.05rem;
		line-height: 1.7;
		opacity: 0.9;
	}
	
	@media (max-width: 768px) {
		.page-header h1 {
			font-size: 2rem;
		}
		
		.contact-grid {
			grid-template-columns: 1fr;
			gap: 3rem;
		}
		
		.contact-form-wrapper {
			padding: 1.5rem;
		}
		
		.project-summary {
			padding: 1.5rem;
		}
	}
</style>