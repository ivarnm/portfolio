<script>
	import "../styles/fonts.css"
	import "../styles/global.css"
	import { page } from "$app/stores"
	// import UnderConstruction from "$lib/components/UnderConstruction.svelte";

	$: path = $page.url.pathname;
	
</script>

<div>
	<!-- <UnderConstruction /> -->
	{#if path !== "/"}
		<header>
			<a class="home" href="/">Sara Hafezi Myrstad</a>
		</header>
	{/if}
	<slot />
</div>


<style>
	header {
		margin-top: 59px;
	}

	.home {
		text-decoration: none;
		font-size: 24px;
		margin-left: 10%;
		}
</style>
