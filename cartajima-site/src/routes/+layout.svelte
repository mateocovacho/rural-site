<script lang="ts">
	import '../lib/styles/global.css';
	import PasswordGate from '$lib/components/PasswordGate.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.svg" />
</svelte:head>

<PasswordGate>
	<Navigation />
	
	<main class="page-content">
		{@render children()}
	</main>
</PasswordGate>

<style>
	.page-content {
		min-height: 100vh;
	}
</style>