<script>
  import { css } from '@emotion/css'
  
  export let data;

  const image = css`
    width: ${data.width};
    min-height: ${data.minHeight ? data.minHeight : 0};
  `;

  const img = css`
    opacity: ${data.opacity};
  `;
</script>

<div class="image {image}">
  <img class="{img}" src={data.image} alt={data.alt}>
  <div class="overlay"></div>
</div>

<!-- <div class={image}>
  {data.src}
</div> -->

<style>
  .image {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    --transistion-duration: 0.3s;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: scale-down;
    transition: transform var(--transistion-duration);
  }

  .overlay {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    transition: background-color var(--transistion-duration);
  }

</style>