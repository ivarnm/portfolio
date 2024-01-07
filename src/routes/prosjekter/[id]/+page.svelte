<script>
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import { useOneColumn } from '$lib/stores/stores.js'

	import ToTop from '$lib/components/ToTop.svelte';
	import ColumnLayout from '$lib/components/ColumnLayout.svelte';
  import Item from '$lib/components/Item.svelte';
  
	/** @type {import('./$types').PageData} */
	export let data;

	$: mobileData = data.project.content.flat().filter(item => item.mobileOrder !== undefined).sort((a, b) => a.mobileOrder - b.mobileOrder);

	function handleResize() {
		$useOneColumn = document.documentElement.clientWidth <= 1108
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

<div class="page">
	
	{#if $useOneColumn === true}
		<div class="mobile">
			{#each mobileData as item}
				<Item data={item} />
			{/each}
			<div class="to-top">
				<ToTop />
			</div>
		</div>
	{:else if $useOneColumn === false}
		<ColumnLayout>
			<div slot="column1">
				{#each data.project.content[0] as item}
					<Item data={item} />
				{/each}
			</div>
			<div slot="column2">
				{#each data.project.content[1] as item}
					<Item data={item} />
				{/each}
			</div>
		</ColumnLayout>
		<div class="to-top">
			<ToTop />
		</div>
	{/if}
</div>

<style>
	.page {
		margin: 170px auto 50px auto;
		max-width: 1108px;
	}

  .to-top {
    margin: 150px 0 0 160px;
  }

	@media screen and (max-width: 1108px) {
		.page {
			margin: 20px;
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.mobile {
			display: flex;
			flex-direction: column;
			align-items: center;
			max-width: 700px;
		}

		.to-top {
			margin: 40px 0;
		}
  }
</style>
