<script lang="ts">
	import '../lib/styles/global.css';
	import { onMount } from 'svelte';
	import { auth } from '$lib/stores/auth';
	import { initLocale } from '$lib/i18n/translations';
	import PasswordGate from '$lib/components/PasswordGate.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();

	onMount(() => {
		auth.init();
		initLocale();
	});
</script>

{#if !$auth}
	<PasswordGate />
{:else}
	<Navigation />
	<main id="main-content" tabindex="-1">
		{@render children()}
	</main>
	<Footer />
{/if}
