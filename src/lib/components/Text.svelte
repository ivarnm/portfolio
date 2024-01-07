<script>
  import { css } from '@emotion/css'
  import { useOneColumn } from '$lib/stores/stores.js'

  export let data;

  const text = css`
    width: ${!$useOneColumn ? data.width : '100%'};
    margin: ${data.margin && !$useOneColumn ? data.margin : '20px 0'};
  `;
</script>

<div class="{text}">
  <p>{data.text}</p>
</div>

<style>
  p {
    white-space: pre-line;
    font-size: 18px;
    margin: 0;
    line-height: 1.17;
  }
</style>