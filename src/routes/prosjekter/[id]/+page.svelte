<script>
    /** @type {import('./$types').PageData} */
    export let data
    
</script>

<div class="project">
  <h2>{data.project.title}</h2>
  <p>{data.project.description}</p>
  <img src="{data.project.image}" alt="Ranheim" />
</div>

<style>
  .project {
    margin-top: 40px;
    padding: 10px;
    border: 1px dotted rgba(255, 255, 255, 0.2);
  }
</style>