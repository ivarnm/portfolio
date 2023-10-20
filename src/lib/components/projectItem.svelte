<script>
  export let project;
</script>


<a class="project" href={`/prosjekter/${project.id}`}>
  <img src={project.image} alt="">
  <div class="overlay"></div>
  <h3>{project.title}</h3>
</a>

<style>

  .project {
    display: flex;
    position: relative;
    max-width: 480px;
    max-height: 150px;
    background-color: cyan;
    overflow: hidden;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    --transistion-duration: 0.3s;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: scale-down;
    transition: transform var(--transistion-duration);
  }

  .overlay {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    transition: background-color var(--transistion-duration);
  }

  .project:hover .overlay {
    background-color: rgba(0, 0, 0, 0.6);
  }

  .project:hover img {
    transform: scale(1.05);
  }

  h3 {
    margin: 0;
    color: white;
    position: absolute;
    font-size: 38px;
    right: 80px;
    top: 10px;
  }
  
</style>