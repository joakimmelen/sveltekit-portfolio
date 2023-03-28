<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	onMount(() => {
		console.log('Fetching data...', data);
	});

	async function fetchBans(index, bans) {
		const team1Div = document.getElementById('team1Div');
		const team2Div = document.getElementById('team2Div');
		clearExistingData(team1Div, team2Div);

		try {
			const champName = await fetchChampionName(bans.championId);
			const bansImg = createBansImage(champName, bans.pickTurn);

			if (index === 0) {
				insertBanImage(team1Div, bansImg, bans.pickTurn);
			} else {
				insertBanImage(team2Div, bansImg, bans.pickTurn, 6);
			}
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	}

	function clearExistingData(team1Div, team2Div) {
		team1Div.textContent = '';
		team2Div.textContent = '';
	}

	async function fetchChampionName(championId) {
		const response = await fetch(`/api/get_champion_name/${championId}`);
		const jsonData = await response.json();
		return jsonData.name;
	}

	function createBansImage(champName, pickTurn) {
		const bansImg = document.createElement('img');
		bansImg.src = `https://ddragon.leagueoflegends.com/cdn/13.3.1/img/champion/${champName.replace(
			/\s/g,
			''
		)}.png`;
		bansImg.alt = champName;
		bansImg.title = pickTurn;
		bansImg.width = 48;
		return bansImg;
	}

	function insertBanImage(teamDiv, bansImg, pickTurn, offset = 0) {
		const banImgs = teamDiv.querySelectorAll('img');
		let insertBeforeIndex = pickTurn - 1 - offset;

		if (banImgs.length > 0) {
			// Make sure we insert the new ban at the right position
			for (let i = 0; i < banImgs.length; i++) {
				const imgPickTurn = parseInt(banImgs[i].title);
				if (pickTurn < imgPickTurn) {
					insertBeforeIndex = i;
					break;
				}
			}
		}
		teamDiv.insertBefore(bansImg, banImgs[insertBeforeIndex]);
	}
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
