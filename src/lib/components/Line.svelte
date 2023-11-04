<script>
  import { css } from '@emotion/css'
  
  export let data = {};

  const line = css`
    background-color: ${data.color ? data.color : "#333"};
    width: ${data.thickness ? data.thickness : "1px"};
    height: ${data.height ? data.height : "10px"}; 
    margin: ${data.margin ? data.margin : 0};
  `;

</script>


<div class={line} />
