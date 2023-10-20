<script>
	import "../styles/fonts.css"
	import "../styles/global.css"
	import { page } from "$app/stores"
	import UnderConstruction from "$lib/components/underConstruction.svelte";

	$: path = $page.url.pathname;
</script>

<div>
	<UnderConstruction />
	<slot />
</div>


<style>

</style>
