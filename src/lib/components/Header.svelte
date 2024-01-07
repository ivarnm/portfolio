<script>
	import { css } from '@emotion/css'
	import { useOneColumn } from '$lib/stores/stores.js'

	export let data;
	
	const title = css`
		margin: ${!$useOneColumn ? (data.margin ? data.margin : "3px 0 0 131px") : '20px 0'};
	`;

	const header = css`
    font-size: ${data.fontSize ? data.fontSize : "32px"};
		width: ${!$useOneColumn ? (data.width ? data.width : "360px") : 'auto'};
  `;

</script>

<div class="{title}">
	<h1 class="header {header}">{data.value}</h1>
	<p>{data.year}</p>
</div>

<style>
	h1 {
		font-family: 'BioRhyme Expanded', serif;
		margin: 0;
		padding: 0;
		font-weight: bold;
		word-break: break-word;
	}

	p {
		margin: 0 0 0 29px;
		font-size: 18px;
	}

	@media screen and (max-width: 400px) {
		.header {
			font-size: 26px;
		}
  }

	
</style>
