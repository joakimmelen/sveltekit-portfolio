<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	onMount(() => {
		console.log('Fetching data...');
	});
</script>

<svelte:head>
	<title>Dev. Joakim Melén</title>
	<meta name="home" content="This is the landing page of my portfolio and blog site" />
</svelte:head>

<section class="part">
	<h1>This is a heading in bold</h1>
	<h2>This is a subheading in bold and italic</h2>
	<h3>This is a sub-subheading in bold</h3>
	<p>This is a paragraph in light weight</p>
	<div>This is a div with normal weight</div>
	<pre>This is a preformatted text with monospace font</pre>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}
</style>
