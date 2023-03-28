<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	onMount(() => {
		console.log('Fetching data...', data);
	});
</script>

<svelte:head>
	<title>Dev. Joakim Melén</title>
	<meta name="home" content="This is the landing page of my portfolio and blog site" />
</svelte:head>

<section class="welcome-section">
	<div class="welcome-message">
		<h2>Joakim Melén: Developer, Creator, Innovator</h2>
		<p>
			Hey there! I'm Joakim, a developer from Sweden with a passion for coding and creating cool
			stuff. This blog is where I share my thoughts and showcase some of my latest projects.
		</p>
		<p>
			If you're looking for help with your own projects, or if you just want to chat about all
			things tech, feel free to contact me. I'm always up for a good conversation and collaboration!
		</p>
	</div>
</section>

<section class="haiku-section">
	<div class="hero-haiku">
		<h5>Swiftly on Mac's OS,</h5>
		<h4>Or Windows with equal ease,</h4>
		<h5>Code flows like a breeze.</h5>
		<h6 class="author">- Joakim Melén</h6>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.2;
	}

	.hero-haiku {
		border: 2px solid transparent;
		border-image: linear-gradient(to right, black, grey, rgb(194, 194, 194), whitesmoke) 1;
		padding: 4rem;
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
	}
</style>
