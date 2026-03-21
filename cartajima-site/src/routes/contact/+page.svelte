<script lang="ts">
	import { t } from '$lib/i18n/translations';
</script>

<svelte:head>
	<title>Contact | Cartajima</title>
	<meta name="description" content="Contact us about Cartajima Ecotourism Estate" />
</svelte:head>

<section class="page-header">
	<div class="container">
		<h1>{$t('contactPage.title')}</h1>
	</div>
</section>

<section class="contact-section">
	<div class="container">
		<div class="contact-form-wrapper">
			<p class="form-notice">{$t('contactPage.form.formNotice')}</p>
			<form class="contact-form disabled">
				<div class="form-group">
					<label for="name">{$t('contactPage.form.name')}</label>
					<input 
						type="text" 
						id="name" 
						disabled
					/>
				</div>
				
				<div class="form-group">
					<label for="email">{$t('contactPage.form.email')}</label>
					<input 
						type="email" 
						id="email" 
						disabled
					/>
				</div>
				
				<div class="form-group">
					<label for="agency">{$t('contactPage.form.agency')}</label>
					<input 
						type="text" 
						id="agency" 
						disabled
						placeholder="Your real estate agency or company"
					/>
				</div>
				
				<div class="form-group">
					<label for="message">{$t('contactPage.form.message')}</label>
					<textarea 
						id="message" 
						placeholder={$t('contactPage.form.placeholder')}
						rows="6"
						disabled
					></textarea>
				</div>
				
				<button type="submit" class="btn btn-primary submit-btn" disabled>
					{$t('contactPage.form.send')}
				</button>
			</form>
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
	
	/* Contact Section */
	.contact-section {
		padding: 6rem 0;
	}
	
	.contact-form-wrapper {
		max-width: 600px;
		margin: 0 auto;
		background: var(--color-bg-secondary);
		padding: 2.5rem;
		border-radius: 4px;
	}
	
	.form-notice {
		text-align: center;
		font-size: 1rem;
		opacity: 0.7;
		margin-bottom: 2rem;
		font-style: italic;
	}
	
	/* Contact Form */
	.contact-form.disabled {
		opacity: 0.5;
		pointer-events: none;
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
	}
	
	.form-group input:disabled,
	.form-group textarea:disabled {
		opacity: 0.5;
		cursor: not-allowed;
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
	
	.submit-btn:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
	
	@media (max-width: 768px) {
		.page-header h1 {
			font-size: 2rem;
		}
		
		.contact-form-wrapper {
			padding: 1.5rem;
		}
	}
</style>