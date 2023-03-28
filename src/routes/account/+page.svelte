<script lang="ts">
	import { checkUserStatus } from '$lib/components/login/login_api.js';

	async function checkStatus() {
		const data = await checkUserStatus();
		console.log(data);
	}
</script>

<div>welcome to account</div>
<button class="btn" on:click={() => checkStatus()}>check status</button>
