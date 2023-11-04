<script>
	import Image from '$lib/components/Image.svelte';

  export let data;
</script>

<a href="{data.link}" target="_blank">
  <Image {data} />
</a>

<style>
  a {
    text-decoration: none;
    display: inline-block;
  }
</style>