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

	@media screen and (max-width: 1108px) {
		header {
			margin-top: 20px;
		}

		.home {
			margin-left: 20px;
		}
  }
</style>
