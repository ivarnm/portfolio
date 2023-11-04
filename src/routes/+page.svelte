<script>
	/** @type {import('./$types').PageData} */
	export let data;

	import About from '$lib/components/About.svelte';
	import ColumnLayout from '$lib/components/ColumnLayout.svelte';
	import Image from '$lib/components/Image.svelte';
	import Line from '$lib/components/Line.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import ToTop from '$lib/components/ToTop.svelte';
</script>

<div class="index">
	<ColumnLayout>
		<div slot="column1">
			<div class="title">
				Sara<br />Hafezi<br />Myrstad 
			</div>
			<About />
			<!-- <Line
				data={{
					height: '1450px',	
					margin: '303px 0 23px 69px'
				}}
			/>
			<div class="to-top">
				<ToTop />
			</div> -->
		</div>
		<div slot="column2">
			<div class="profile">
				<Image
					data={{
						image:
							'https://firebasestorage.googleapis.com/v0/b/sara-hafezi.appspot.com/o/sara.png?alt=media',
						alt: 'profilbilde',
						width: '195px',
						minHeight: '226px',
						opacity: '90%'
					}}
				/>
			</div>
			<Line
				data={{
					height: '300px',
					margin: '34px 0 -46px 234px'
				}}
			/>
			<Projects projects={data.projects} />
		</div>
	</ColumnLayout>

</div>

<style>
	.index {
		margin: 170px auto 50px auto;
		max-width: 770px;
	}

	.title {
		font-family: 'BioRhyme Expanded', serif;
		font-size: 40px;
		margin: 0 0 45px 40px;
	}

	.profile {
		margin: 40px 0 0 136px;
	}

	.to-top {
		margin-left: 0px;
	}
</style>
