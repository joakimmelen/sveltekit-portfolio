<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="content">
	<h1>Joakim blog</h1>
	<button on:click={() => console.log(data)}>data</button>
	<h2>try editing, yo</h2>

	<div class="posts">
		{#each data.posts as post}
			<article
				class="post"
				on:keyup={() => (post.isOpen = !post.isOpen)}
				on:click={() => (post.isOpen = !post.isOpen)}
				class:post--compact={!post.isOpen}
				class:post--open={post.isOpen}
			>
				<div>
					<h3>{post.title}</h3>
					{#if !post.isOpen}
						<p>{post.content.substring(0, 100)}...</p>
						<p>
							{#each post.tags as tag}
								<span>{tag}</span>
							{/each}
							By: {post.author.username} @ {post.created_at}
						</p>
					{/if}
					{#if post.isOpen}
						<div>
							<p>{post.content}</p>
							<p>
								{#each post.tags as tag}
									<span>{tag}</span>
								{/each}
								By: {post.author.username} @ {post.created_at}
							</p>
						</div>
					{/if}
				</div>
			</article>
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

	.post--compact {
		background-color: #f3f3f3;
		padding: 1rem;
		border-radius: 8px;
		width: 100%;
		margin-bottom: 1rem;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
		cursor: pointer;
		text-decoration: none;
		color: inherit;
	}

	.post {
		background-color: #f3f3f3;
		padding: 1rem;
		border-radius: 8px;
		cursor: pointer;
	}

	span {
		border: 1px solid grey;
		padding: 1px;
	}
</style>
