<script>
	import { createEventDispatcher } from 'svelte';
	import { register, login } from '$lib/components/login/login_api.js';

	let username = '';
	let password = '';
	let email = '';
	let activeTab = 'login';
	const dispatch = createEventDispatcher();

	async function handleRegister() {
		const data = await register(username, password, email);
		console.log(data);
	}

	async function handleLogin() {
		const data = await login(username, password);
		console.log(data);
	}

	function closeModal() {
		dispatch('close');
	}
</script>

<div class="modal">
	<div class="modal-content">
		<div class="tab-container">
			<h2
				class:active={activeTab === 'login'}
				on:keyup={() => (activeTab = 'login')}
				on:click={() => (activeTab = 'login')}
			>
				Login
			</h2>
			<h2
				class:active={activeTab === 'register'}
				on:keyup={() => (activeTab = 'register')}
				on:click={() => (activeTab = 'register')}
			>
				Register
			</h2>
		</div>
		<input type="text" bind:value={username} placeholder="Username" />
		<input type="password" bind:value={password} placeholder="Password" />
		{#if activeTab === 'register'}
			<input style="border: 1px solid orange" type="email" bind:value={email} placeholder="Email" />
		{/if}
		{#if activeTab === 'login'}
			<button on:click={handleLogin}>Login</button>
		{:else}
			<button on:click={handleRegister}>Register</button>
		{/if}
		<button on:click={closeModal}>Close</button>
		<br />
		<br />
		<br />
		<a class="btn" href="/account">Account</a>
	</div>
</div>

<style>
	.modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.7);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.modal-content {
		background-color: #fff;
		padding: 1rem;
		border-radius: 5px;
		width: 350px;
		text-align: center;
		height: 40vh;
	}

	.tab-container {
		display: flex;
		justify-content: space-around;
		margin-bottom: 1rem;
	}

	h2 {
		cursor: pointer;
	}

	h2.active {
		color: blue;
	}

	input {
		display: block;
		width: 100%;
		margin-bottom: 1rem;
		padding: 0.5rem;
	}

	button {
		margin: 0.25rem;
	}
</style>
