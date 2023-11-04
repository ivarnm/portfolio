<script>
  import { css } from '@emotion/css'

  export let data;

  const text = css`
    width: ${data.width};
    margin: ${data.margin ? data.margin : 0};
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