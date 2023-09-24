<script>
	import "../styles/global.css"
	import { page } from "$app/stores"
	import Title from '../components/title.svelte';

	$: path = $page.url.pathname;
</script>

<header>
	<nav>
		<Title title="Ninja Gaming Guides" />
		{#if path.includes("/guides")}
			<div class="links">
				<a href="/">Home</a>
				<a href="/about">About</a>
				<a href="/guides">Guides</a>
			</div>
		{/if}
	</nav>
</header>
<main>
	<slot />
</main>
<footer>
	<p>Copyright 2023 Ninja Gaming Guides</p>
</footer>

<style>
	header {
		text-align: center;
		background-color: rgba(0, green, blue, alpha);
	}

	main {
		max-width: 960px;
		margin: 20px auto;
	}

	footer {
		text-align: center;
	}

	.links {
		margin-left: auto;
	}

	a {
		margin-left: 10px;
	}

	nav {
		display: flex;
		align-items: center;
		max-width: 960px;
		margin: 0 auto;
	}
</style>
