<script lang="ts">
	interface Props {
		title?: string;
		description?: string;
		image?: string;
	}

	let { title = 'Cartajima Ecotourism Estate', description = 'A 26-hectare ecotourism estate with full environmental and planning approval in the mountains of Málaga, Spain.', image = '/images/cartajima.webp' }: Props = $props();

	const siteName = 'Cartajima Ecotourism Estate';
	const fullTitle = $derived(title === siteName ? title : `${title} · ${siteName}`);
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />
</svelte:head>
