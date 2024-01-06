<script>
  export let project;
</script>

<div>
  <a class="project" href={`/prosjekter/${project.id}`}>
    <img src={project.image} alt="">
    <div class="overlay"></div>
  </a>
  <h3>{project.title}</h3>
</div>

<style>

  .project {
    display: flex;
    position: relative;
    max-width: 477px;
    height: 156px;
    overflow: hidden;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    --transistion-duration: 0.3s;
  }

  img {
    max-width: 100%;
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
    background-color: rgba(220, 220, 220, 0.52);
    transition: background-color var(--transistion-duration);
  }

  .project:hover .overlay {
    background-color: rgba(220, 220, 220, 0);
  }

  .project:hover img {
    transform: scale(1.0);
  }

  h3 {
    margin: 0 0 5px 0;
    font-size: 24px;
  }

  @media screen and (max-width: 770px) {
    .overlay {
      display: none;
    }

    h3 {
      font-size: 20px;
    }
  }
  
</style>
