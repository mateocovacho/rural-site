<script lang="ts">
	import { t } from '$lib/i18n/translations';
	import SeoHead from '$lib/components/SeoHead.svelte';

	let name = $state('');
	let agency = $state('');
	let email = $state('');
	let phone = $state('');
	let message = $state('');
	let submitted = $state(false);
	let submitting = $state(false);

	async function handleSubmit(e: Event) {
		e.preventDefault();
		submitting = true;
		// Simulate async submission (replace with real endpoint if needed)
		await new Promise(r => setTimeout(r, 600));
		submitting = false;
		submitted = true;
	}

	function reset() {
		name = '';
		agency = '';
		email = '';
		phone = '';
		message = '';
		submitted = false;
	}
</script>

<SeoHead
	title="Contact"
	description="Private enquiry for Cartajima Ecotourism Estate. Request full documentation including environmental licence and Proyecto de Actuación."
/>

<div class="page-enter">

<!-- Hero -->
<section class="page-hero">
	<div class="page-hero__media">
		<img
			src="/images/general.jpg"
			alt="Cartajima estate panorama"
			class="img-cover"
		/>
		<div class="page-hero__overlay"></div>
	</div>
	<div class="container page-hero__content">
		<span class="section-label">{$t('contact.hero.label')}</span>
		<h1>{$t('contact.hero.title')}</h1>
		<p class="page-hero__subtitle">{$t('contact.hero.subtitle')}</p>
	</div>
</section>

<!-- Summary + Form -->
<section class="section contact-section">
	<div class="container">
		<div class="contact-grid">

			<!-- Project summary -->
			<div class="contact-summary">
				<span class="section-label">{$t('contact.summary.label')}</span>
				<h2 class="section-title">{$t('contact.summary.title')}</h2>
				<div class="section-divider"></div>
				<dl class="summary-list">
					{#each [
						['contact.summary.item1.label', 'contact.summary.item1.value'],
						['contact.summary.item2.label', 'contact.summary.item2.value'],
						['contact.summary.item3.label', 'contact.summary.item3.value'],
						['contact.summary.item4.label', 'contact.summary.item4.value'],
						['contact.summary.item5.label', 'contact.summary.item5.value'],
						['contact.summary.item6.label', 'contact.summary.item6.value'],
					] as item}
						<div class="summary-item">
							<dt>{$t(item[0] as any)}</dt>
							<dd>{$t(item[1] as any)}</dd>
						</div>
					{/each}
				</dl>

				<div class="serious-note">
					<h3>{$t('contact.serious.title')}</h3>
					<p>{$t('contact.serious.body')}</p>
					<a href="mailto:info@cartajima-estate.com" class="btn btn--primary">
						{$t('contact.serious.cta')}
					</a>
				</div>
			</div>

			<!-- Contact form -->
			<div class="contact-form-wrap">
				<h2 class="contact-form-wrap__title">{$t('contact.form.title')}</h2>

				{#if submitted}
					<div class="form-success" role="status">
						<div class="form-success__icon" aria-hidden="true">✓</div>
						<h3>{$t('contact.form.success_title')}</h3>
						<p>{$t('contact.form.success_body')}</p>
						<button class="btn btn--primary" onclick={reset}>
							{$t('contact.form.send_another')}
						</button>
					</div>
				{:else}
					<form class="contact-form" onsubmit={handleSubmit} novalidate>
						<div class="form-row form-row--2">
							<div class="form-group">
								<label class="form-label" for="name">{$t('contact.form.name')}</label>
								<input
									id="name"
									type="text"
									class="form-input"
									placeholder={$t('contact.form.name_placeholder')}
									bind:value={name}
									required
									autocomplete="name"
								/>
							</div>
							<div class="form-group">
								<label class="form-label" for="agency">{$t('contact.form.agency')}</label>
								<input
									id="agency"
									type="text"
									class="form-input"
									placeholder={$t('contact.form.agency_placeholder')}
									bind:value={agency}
									autocomplete="organization"
								/>
							</div>
						</div>
						<div class="form-row form-row--2">
							<div class="form-group">
								<label class="form-label" for="email">{$t('contact.form.email')}</label>
								<input
									id="email"
									type="email"
									class="form-input"
									placeholder={$t('contact.form.email_placeholder')}
									bind:value={email}
									required
									autocomplete="email"
								/>
							</div>
							<div class="form-group">
								<label class="form-label" for="phone">{$t('contact.form.phone')}</label>
								<input
									id="phone"
									type="tel"
									class="form-input"
									placeholder={$t('contact.form.phone_placeholder')}
									bind:value={phone}
									autocomplete="tel"
								/>
							</div>
						</div>
						<div class="form-group">
							<label class="form-label" for="message">{$t('contact.form.message')}</label>
							<textarea
								id="message"
								class="form-textarea"
								placeholder={$t('contact.form.message_placeholder')}
								bind:value={message}
								required
								rows="5"
							></textarea>
						</div>
						<button
							type="submit"
							class="btn btn--primary contact-form__submit"
							disabled={submitting}
						>
							{submitting ? '…' : $t('contact.form.submit')}
						</button>
					</form>
				{/if}
			</div>
		</div>
	</div>
</section>

</div>

<style>
	/* Page hero */
	.page-hero {
		position: relative;
		height: 55vh;
		min-height: 380px;
		display: flex;
		align-items: flex-end;
		overflow: hidden;
		padding-bottom: var(--space-xl);
	}

	.page-hero__media {
		position: absolute;
		inset: 0;
	}

	.page-hero__overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			to top,
			rgba(26, 26, 26, 0.82) 0%,
			rgba(26, 26, 26, 0.35) 60%,
			transparent 100%
		);
	}

	.page-hero__content {
		position: relative;
		z-index: 1;
		padding-top: var(--nav-height);
	}

	.page-hero__content h1 {
		color: var(--color-cream);
		margin-bottom: 1rem;
	}

	.page-hero__subtitle {
		font-family: var(--font-alt);
		font-size: 1.1rem;
		color: rgba(245, 240, 232, 0.8);
		max-width: 540px;
		margin: 0;
	}

	/* Contact layout */
	.contact-grid {
		display: grid;
		grid-template-columns: 1fr 1.2fr;
		gap: var(--space-xl);
		align-items: start;
	}

	/* Summary */
	.summary-list {
		display: flex;
		flex-direction: column;
		gap: 0;
		border-top: 1px solid var(--color-border);
		margin-bottom: 3rem;
	}

	.summary-item {
		padding: 1rem 0;
		border-bottom: 1px solid var(--color-border);
	}

	.summary-item dt {
		font-family: var(--font-body);
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--color-text-light);
		margin-bottom: 0.2rem;
	}

	.summary-item dd {
		font-family: var(--font-alt);
		font-size: 0.98rem;
		color: var(--color-text);
		margin: 0;
	}

	/* Serious note */
	.serious-note {
		background: var(--color-cream-dark);
		padding: 2rem;
		border-left: 3px solid var(--color-forest);
	}

	.serious-note h3 {
		font-size: 1.3rem;
		margin-bottom: 0.75rem;
	}

	.serious-note p {
		font-size: 0.95rem;
		color: var(--color-text-light);
		margin-bottom: 1.5rem;
	}

	/* Form */
	.contact-form-wrap__title {
		font-size: 1.8rem;
		font-weight: 400;
		margin-bottom: 2rem;
	}

	.form-row--2 {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}

	.contact-form__submit {
		width: 100%;
		margin-top: 0.5rem;
	}

	.contact-form__submit:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}

	/* Success state */
	.form-success {
		background: var(--color-cream-dark);
		padding: 3rem 2rem;
		text-align: center;
		border: 1px solid var(--color-border);
	}

	.form-success__icon {
		font-family: var(--font-display);
		font-size: 2.5rem;
		color: var(--color-forest);
		display: block;
		margin-bottom: 1rem;
	}

	.form-success h3 {
		font-size: 1.6rem;
		margin-bottom: 0.75rem;
	}

	.form-success p {
		color: var(--color-text-light);
		margin-bottom: 2rem;
	}

	/* Responsive */
	@media (max-width: 768px) {
		.contact-grid {
			grid-template-columns: 1fr;
		}

		.form-row--2 {
			grid-template-columns: 1fr;
		}
	}
</style>
