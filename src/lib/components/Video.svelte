<script>
  import { css } from '@emotion/css'
  
  export let data = {};

  const container = css`
    margin: ${data.margin ? data.margin : 0};
  `;

</script>

<!-- svelte-ignore a11y-media-has-caption -->
<div class="{container}">
  <video width="{data.width}" controls>
    <source src="{data.source}}" type="video/mp4">
    Nettleseren din støtter ikke videoen.
  </video>
  <p>{data.text}</p>
</div>

<style>
  p {
    margin: 11px 0 0 0;
  }

  video {
    clip-path: inset(1px 1px);
  }

</style>