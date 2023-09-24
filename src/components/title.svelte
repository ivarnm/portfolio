<script>
	export let title = 'Ninja Gaming Guides';
</script>

<div class="title">
	<a href="/"><img src="/controller.svg" alt="controller" /></a>
	<h1>{title}</h1>
</div>

<style>
	.title {
		display: flex;
    align-items: center;
	}

  .title a {
    display: inline-block;
  }


	img {
		filter: invert(88%) sepia(18%) saturate(886%) hue-rotate(199deg) brightness(100%) contrast(90%);
	}

	.title h1 {
		margin-left: 10px;
	}
</style>
