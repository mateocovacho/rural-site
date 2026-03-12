<script lang="ts">
	import { auth } from '$lib/stores/auth';
	import { t, locale, setLocale } from '$lib/i18n/translations';
	import type { Locale } from '$lib/i18n/translations';

	let password = $state('');
	let error = $state(false);
	let inputEl: HTMLInputElement | undefined = $state();

	function handleSubmit(e: Event) {
		e.preventDefault();
		error = false;
		const ok = auth.authenticate(password);
		if (!ok) {
			error = true;
			password = '';
			inputEl?.focus();
		}
	}

	function toggleLang() {
		const next: Locale = $locale === 'en' ? 'es' : 'en';
		setLocale(next);
	}
</script>

<div class="gate">
	<div class="gate__bg" aria-hidden="true">
		<img src="/images/cartajima.webp" alt="" class="gate__bg-img" />
		<div class="gate__bg-overlay"></div>
	</div>

	<div class="gate__content">
		<div class="gate__top">
			<button class="gate__lang" onclick={toggleLang}>
				{$t('lang.switch')}
			</button>
		</div>

		<div class="gate__card">
			<div class="gate__brand">
				<h1 class="gate__title">{$t('gate.title')}</h1>
				<p class="gate__subtitle">{$t('gate.subtitle')}</p>
				<div class="gate__divider"></div>
			</div>

			<p class="gate__desc">{$t('gate.description')}</p>

			<form class="gate__form" onsubmit={handleSubmit}>
				<div class="gate__field">
					<input
						bind:this={inputEl}
						bind:value={password}
						type="password"
						placeholder={$t('gate.placeholder')}
						class="gate__input"
						class:gate__input--error={error}
						autocomplete="current-password"
						aria-label={$t('gate.placeholder')}
						aria-describedby={error ? 'gate-error' : undefined}
					/>
					{#if error}
						<p class="gate__error" id="gate-error" role="alert">{$t('gate.error')}</p>
					{/if}
				</div>
				<button type="submit" class="gate__submit">
					{$t('gate.submit')}
				</button>
			</form>

			<p class="gate__contact">
				{$t('gate.inquiries')}
				<a href="mailto:{$t('gate.contact_email')}" class="gate__email">{$t('gate.contact_email')}</a>
			</p>
		</div>

		<div class="gate__footer-note">
			<p>Valle del Genal &middot; Málaga &middot; España</p>
		</div>
	</div>
</div>

<style>
	.gate {
		position: fixed;
		inset: 0;
		z-index: 1000;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.gate__bg {
		position: absolute;
		inset: 0;
	}

	.gate__bg-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.gate__bg-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			135deg,
			rgba(26, 26, 26, 0.88) 0%,
			rgba(44, 62, 45, 0.80) 100%
		);
	}

	.gate__content {
		position: relative;
		z-index: 1;
		width: 100%;
		max-width: 460px;
		padding: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		min-height: 100dvh;
		justify-content: center;
		gap: 2rem;
	}

	.gate__top {
		position: absolute;
		top: 2rem;
		right: 2rem;
	}

	.gate__lang {
		font-family: var(--font-body);
		font-size: 0.75rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: rgba(245, 240, 232, 0.7);
		background: none;
		border: 1px solid rgba(245, 240, 232, 0.3);
		padding: 0.35rem 0.8rem;
		cursor: pointer;
		transition: all var(--transition-fast);
	}

	.gate__lang:hover {
		color: var(--color-cream);
		border-color: var(--color-cream);
	}

	.gate__card {
		background: rgba(245, 240, 232, 0.04);
		border: 1px solid rgba(245, 240, 232, 0.12);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		padding: 3rem 2.5rem;
		width: 100%;
	}

	.gate__brand {
		text-align: center;
		margin-bottom: 2rem;
	}

	.gate__title {
		font-family: var(--font-display);
		font-size: 3.5rem;
		font-weight: 300;
		color: var(--color-cream);
		letter-spacing: 0.06em;
		line-height: 1;
		margin-bottom: 0.4rem;
	}

	.gate__subtitle {
		font-family: var(--font-body);
		font-size: 0.75rem;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: var(--color-gold-light);
		margin: 0;
	}

	.gate__divider {
		width: 40px;
		height: 1px;
		background: var(--color-gold);
		margin: 1.5rem auto 0;
	}

	.gate__desc {
		font-family: var(--font-alt);
		font-size: 0.95rem;
		color: rgba(245, 240, 232, 0.7);
		text-align: center;
		margin-bottom: 2rem;
		line-height: 1.6;
	}

	.gate__form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-bottom: 2rem;
	}

	.gate__field {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.gate__input {
		width: 100%;
		font-family: var(--font-body);
		font-size: 1rem;
		color: var(--color-cream);
		background: rgba(255, 255, 255, 0.06);
		border: 1px solid rgba(245, 240, 232, 0.2);
		padding: 0.85rem 1.1rem;
		outline: none;
		transition: border-color var(--transition-fast);
		letter-spacing: 0.08em;
	}

	.gate__input::placeholder {
		color: rgba(245, 240, 232, 0.4);
	}

	.gate__input:focus {
		border-color: rgba(245, 240, 232, 0.6);
	}

	.gate__input--error {
		border-color: rgba(200, 100, 80, 0.8);
	}

	.gate__error {
		font-family: var(--font-body);
		font-size: 0.85rem;
		color: rgba(220, 140, 120, 0.9);
		margin: 0;
	}

	.gate__submit {
		font-family: var(--font-display);
		font-size: 0.9rem;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: var(--color-charcoal);
		background: var(--color-cream);
		border: 1px solid var(--color-cream);
		padding: 0.9rem;
		cursor: pointer;
		transition: all var(--transition-mid);
		width: 100%;
	}

	.gate__submit:hover {
		background: var(--color-gold-light);
		border-color: var(--color-gold-light);
	}

	.gate__contact {
		font-family: var(--font-body);
		font-size: 0.8rem;
		color: rgba(245, 240, 232, 0.45);
		text-align: center;
		margin: 0;
	}

	.gate__email {
		color: rgba(212, 175, 122, 0.7);
		text-decoration: none;
		transition: color var(--transition-fast);
	}

	.gate__email:hover {
		color: var(--color-gold-light);
	}

	.gate__footer-note {
		font-family: var(--font-body);
		font-size: 0.72rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: rgba(245, 240, 232, 0.3);
		text-align: center;
	}

	.gate__footer-note p {
		margin: 0;
	}

	@media (max-width: 480px) {
		.gate__card {
			padding: 2rem 1.5rem;
		}

		.gate__title {
			font-size: 2.8rem;
		}
	}
</style>
