<script>
	import ProjectItem from "./projectItem.svelte";

  export let projects = [];
</script>

<div class="projects">
    <h2>Prosjekter</h2>
    {#each projects as project (project.id)}
        <ProjectItem {project}/>
    {/each}
</div>

<style>

</style>