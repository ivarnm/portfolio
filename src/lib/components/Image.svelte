<script>
  import { css } from '@emotion/css'
  
  export let data;

  const image = css`
    width: ${data.width};
    min-height: ${data.minHeight ? data.minHeight : 0};
    margin: ${data.margin ? data.margin : 0};
  `;

  const img = css`
    opacity: ${data.opacity};
  `;

  const alt = css`
    margin: ${data.altMargin ? data.altMargin : "17px 0 0 0"};
    width: ${data.altWidth ? data.altWidth : "371px"};
  `;
</script>

<div class="image {image}">
  <img class="{img}" src={data.image} alt={data.alt}>
  {#if data.showAlt}
    <p class="{alt}">{data.alt}</p>
  {/if}
</div>

<style>
  /* .image {

  } */

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: scale-down;
  }

  p {
    font-size: 18px;
  }

</style>
