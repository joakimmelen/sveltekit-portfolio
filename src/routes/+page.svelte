<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	let relevantTags = [];
	onMount(() => {
		console.log('Fetching data...');
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>Joakim blog</h1>
	<button on:click={() => console.log(data.posts)}>data</button>
	<h2>try editing, yo</h2>

	<div class="posts">
		{#each data.posts as post}
			<button class="post" on:click={() => console.log(post)}>
				<h3>{post.fields.title}</h3>
				{#if post.fields.tags}
					<p>Tags:</p>
				{/if}
			</button>
		{/each}
	</div>
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

	.posts {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.post {
		background-color: #f3f3f3;
		padding: 1rem;
		border-radius: 8px;
		cursor: pointer;
	}
</style>
