<script>
  import { css } from '@emotion/css'
  import { useOneColumn } from '$lib/stores/stores.js'

  export let data;

  const text = css`
    width: ${!$useOneColumn ? data.width : 'auto'};
    margin: ${data.margin && !$useOneColumn ? data.margin : '20px 0'};
  `;

  function formatLinks(text) {
    // Regular expression to match [Link text](URL)
    const linkRegex = /\[([^[\]]+)\]\(([^)]+)\)/g;

    // Replace matches with <a> tags
    return text.replace(linkRegex, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
  }
</script>

<div class="{data.text}">
  <p>{@html formatLinks(data.text)}</p>
</div>

<style>
  p {
    white-space: pre-line;
    font-size: 18px;
    margin: 0;
    line-height: 1.17;
  }
</style>