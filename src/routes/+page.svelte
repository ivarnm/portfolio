<script>
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import { useOneColumn } from '$lib/stores/stores.js'
	import About from '$lib/components/About.svelte';
	import ColumnLayout from '$lib/components/ColumnLayout.svelte';
	import Image from '$lib/components/Image.svelte';
	import Line from '$lib/components/Line.svelte';
	import Projects from '$lib/components/Projects.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	function handleResize() {
		$useOneColumn = document.documentElement.clientWidth <= 770
  }

  onMount(() => {
		if (browser) {
			window.addEventListener('resize', handleResize);
			handleResize()
		} 

  });

  onDestroy(() => {
		if (browser) {
			window.removeEventListener('resize', handleResize);
		}
  });
</script>

<div class="index">
	{#if $useOneColumn === true}
		<div class="mobile">
			<div class="title">
				Sara Hafezi Myrstad
			</div>
			<div class="profile">
				<Image
					data={{
						image:
							'https://firebasestorage.googleapis.com/v0/b/sara-hafezi.appspot.com/o/sara.png?alt=media',
						alt: 'profilbilde',
						width: '195px',
						minHeight: '226px',
						opacity: '90%'
					}}
				/>
			</div>
			<About />
			<div class="projects">
				<Projects projects={data.projects} />
			</div>
		</div>
	{:else if $useOneColumn === false}
		<ColumnLayout>
			<div slot="column1">
				<div class="title">
					Sara<br />Hafezi<br />Myrstad
				</div>
				<About />
			</div>
			<div slot="column2">
				<div class="profile">
					<Image
						data={{
							image:
								'https://firebasestorage.googleapis.com/v0/b/sara-hafezi.appspot.com/o/sara.png?alt=media',
							alt: 'profilbilde',
							width: '195px',
							minHeight: '226px',
							opacity: '90%'
						}}
					/>
				</div>
				<Line
					data={{
						height: '300px',
						margin: '34px 0 -46px 234px'
					}}
				/>
				<Projects projects={data.projects} />
			</div>
		</ColumnLayout>
	{/if}

</div>

<style>
	.index {
		margin: 170px auto 50px auto;
		max-width: 770px;
	}

	.title {
		font-family: 'BioRhyme Expanded', serif;
		font-size: 40px;
		margin: 0 0 45px 40px;
	}

	.profile {
		margin: 40px 0 0 136px;
	}

  @media screen and (max-width: 770px) {
    .index {
			margin: 20px;
		}
		
		.mobile {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.title {
      margin: 0px;
			font-size: 30px;
			display: flex;
			justify-content: center;
    }

		.profile {
			margin: 40px 0 60px 0;
			display: flex;
			justify-content: center;
			max-width: 280px;
		}

		.projects {
			margin: 100px 0 40px 92px;
			display: flex;
			justify-content: center;
		}
  }

</style>
