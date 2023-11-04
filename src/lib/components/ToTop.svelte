<script>
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

</script>

<button on:click={scrollToTop}>
  <p>Til toppen</p>
  <img src="$lib/images/up_arrow.svg" alt="up arrow" />
</button>

<style>
  button {
    display: flex;
    cursor: pointer;
    border: none;
    margin: 0;
    padding: 0;
    font-size: 24px;
    opacity: 62%;
    align-items: center;
    gap: 10px;
    transition: opacity 0.1s;
  }

  button:hover {
    opacity: 80%;
  }

  p {
    margin: 0;
  }
  
  img {
    margin-top: 2px;
  }
</style>
