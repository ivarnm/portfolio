<script>
  import { css } from '@emotion/css'
  import { useOneColumn } from '$lib/stores/stores.js'
  
  export let data;

  const image = css`
    width: ${!$useOneColumn ? data.width : 'auto'};
    min-height: ${data.minHeight && !$useOneColumn ? data.minHeight : 0};
    margin: ${data.margin && !$useOneColumn ? data.margin : '20px 0'};
  `;

  const img = css`
    opacity: ${data.opacity};
  `;

  const alt = css`
    margin: ${!$useOneColumn ? (data.altMargin ? data.altMargin : "17px 0 0 0") : 'auto'};
    width: ${!$useOneColumn ? (data.altWidth ? data.altWidth : "371px") : 'auto'};
  `;
</script>

<div class="image {image}">
  <img class="{img}" src={data.image} alt={data.alt}>
  {#if data.showAlt || ($useOneColumn && data.showMobileAlt)}
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
