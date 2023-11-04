<script>
	import ProjectItem from "./ProjectItem.svelte";

  export let projects = [];
</script>

<div class="projects">
    <p>Prosjekter</p>
    {#each projects as project (project.id)}
        <ProjectItem {project}/>
    {/each}
</div>

<style>
  .projects {
    margin-left: -92px;
  }

  p {
    margin: 0 0 15px 32px;
    font-weight: normal;
    font-size: 40px;
  }

</style>
