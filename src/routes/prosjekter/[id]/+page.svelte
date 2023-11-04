<script>
	import ToTop from '$lib/components/ToTop.svelte';
	import ColumnLayout from '$lib/components/ColumnLayout.svelte';
  import Item from '$lib/components/Item.svelte';
  
	/** @type {import('./$types').PageData} */
	export let data;
	// console.log(data);
</script>

<div class="page">
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
</div>

<style>
	.page {
		margin: 170px auto 50px auto;
		max-width: 1108px;
	}

  .to-top {
    margin: 150px 0 0 160px;
  }
</style>
