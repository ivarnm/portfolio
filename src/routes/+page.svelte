<script>
	import Title from '../components/title.svelte';
	let title = 'Nija Gaming Guides';

	const updateTitle = () => {
		title = 'derp';
	};
</script>

<div class="index">
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates libero molestiae esse eos
		quod totam eum beatae ab, quos minima! Temporibus eligendi molestiae minus, officiis ullam
		voluptas perferendis rerum! Earum.
	</p>
	<a href="/guides">Guides</a>
	<a href="/about">About</a>
</div>

<style>
	.index {
		text-align: center;
		display: block;
		margin: 20px auto;
	}
</style>
