<script>
	import { css } from '@emotion/css'

	export let data;
	
	const title = css`
		margin: ${data.margin ? data.margin : "3px 0 0 131px"};
	`;

	const header = css`
    font-size: ${data.fontSize ? data.fontSize : "32px"};
		width: ${data.width ? data.width : "360px"};
  `;

</script>

<div class="{title}">
	<h1 class="{header}">{data.value}</h1>
	<p>{data.year}</p>
</div>

<style>
	h1 {
		font-family: 'BioRhyme Expanded', serif;
		margin: 0;
		padding: 0;
		font-weight: bold;
	}

	p {
		margin: 0 0 0 29px;
		font-size: 18px;
	}


	
</style>
