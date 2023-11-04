<script>
  import Header from '$lib/components/Header.svelte';
	import Image from '$lib/components/Image.svelte';
	import Line from '$lib/components/Line.svelte';
	import LinkImage from '$lib/components/LinkImage.svelte';
	import Text from '$lib/components/Text.svelte';
  import Video from '$lib/components/Video.svelte';

  export let data;
  
  const components = {
    'Header': Header,
    "Image": Image,
    "Line": Line,
    "LinkImage": LinkImage,
    "Text": Text,
    "Video": Video
  }

</script>

<svelte:component this={components[data.type]} {data} />
