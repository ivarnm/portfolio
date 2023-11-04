<div class="construction">
  <img src="$lib/images/construction.png" alt="">
  <p>Under konstruksjon</p>
  <img class="flipped" src="$lib/images/construction.png" alt="">
</div>


<style>
  .construction {
    display: flex;
    width: 100%;
    height: 50px;
    justify-content: space-between;
    align-items: center;
    background-color: #231F20;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: scale-down;
  }

  .flipped {
    transform: scale(-1, -1);
  }

  p {
    color: #FEF200;
    font-size: 20px;
    font-family: monospace;
    text-transform: uppercase;
  }

</style>
