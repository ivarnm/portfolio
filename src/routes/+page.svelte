
<script>
  /** @type {import('./$types').PageData} */
  export let data

	import About from '$lib/components/about.svelte';
	import Projects from '$lib/components/projects.svelte';

</script>

<div class="index">
	<div class="title">
		Sara<br>Hafezi
	</div>
	<About />
	<!-- <Projects projects={data.projects} /> -->
</div>


<style>
	.index {
		margin: 170px auto 0 auto;
		max-width: 900px;
		/* background-color: white; */
	}

	.title {
		font-family: 'BioRhyme Expanded', serif;
		font-size: 48px;
		margin-left: 69px;
	}

	.projects {
		margin-top: 20px;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	a {
		display: inline-block;
		margin-top: 10px;
		padding: 10px;
		border: 1px dotted rgba(255, 255, 255, 0.2);
	}
</style>
