<script lang="ts">
	import { auth, login } from '$lib/stores/auth';
	import { t } from '$lib/i18n/translations';
	
	let { children } = $props<{
		children: () => any;
	}>();
	
	let password = $state('');
	let error = $state(false);
	
	function handleSubmit(event: Event) {
		event.preventDefault();
		if (login(password)) {
			error = false;
		} else {
			error = true;
		}
	}
</script>

{#if !$auth.isAuthenticated}
	<div class="password-gate">
		<div class="gate-content">
			<h2>{$t('password.title')}</h2>
			<p class="hint">{$t('password.hint')}</p>
			
			<form onsubmit={handleSubmit}>
				<input
					type="password"
					bind:value={password}
					placeholder={$t('password.placeholder')}
					class:error
				/>
				{#if error}
					<p class="error-message">{$t('password.error')}</p>
				{/if}
				<button type="submit">{$t('password.button')}</button>
			</form>
		</div>
	</div>
{:else}
	{@render children()}
{/if}

<style>
	.password-gate {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: var(--color-bg-primary);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
	}
	
	.gate-content {
		text-align: center;
		padding: 2rem;
		max-width: 400px;
	}
	
	.gate-content h2 {
		font-family: var(--font-heading);
		font-size: 1.75rem;
		color: var(--color-text-primary);
		margin-bottom: 0.5rem;
	}
	
	.hint {
		font-family: var(--font-body);
		color: var(--color-accent-earth);
		font-size: 0.875rem;
		margin-bottom: 2rem;
	}
	
	form {
		display: flex;
		flex-direction: column;
	}
	
	form > * + * {
		margin-top: 1rem;
	}
	
	@supports (gap: 1px) {
		form {
			gap: 1rem;
		}
		form > * + * {
			margin-top: 0;
		}
	}
	
	input {
		padding: 0.875rem 1rem;
		border: 1px solid var(--color-bg-secondary);
		background: var(--color-bg-secondary);
		font-family: var(--font-body);
		font-size: 1rem;
		color: var(--color-text-primary);
		border-radius: 4px;
		transition: border-color 0.2s;
	}
	
	input:focus {
		outline: none;
		border-color: var(--color-accent-earth);
	}
	
	input.error {
		border-color: #c44;
	}
	
	.error-message {
		color: #c44;
		font-family: var(--font-body);
		font-size: 0.875rem;
		margin: 0;
	}
	
	button {
		padding: 0.875rem 1.5rem;
		background: var(--color-accent-earth);
		color: var(--color-text-light);
		border: none;
		font-family: var(--font-body);
		font-size: 1rem;
		cursor: pointer;
		border-radius: 4px;
		transition: background 0.2s;
	}
	
	button:hover {
		background: var(--color-accent-nature);
	}
</style>