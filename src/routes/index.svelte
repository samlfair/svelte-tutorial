<!-- ~/src/routes/index.svelte -->

<script>
  import * as prismicH from '@prismicio/helpers';
  
  export let document;
</script>

<main>
  <div class="header container" style="background-image: url('{document.data.image.url}')">	 
    <h1>
      {document.data.title}
    </h1>
  </div>
  <div class="container">
    <div class="text">
      {@html prismicH.asHTML(document.data.content)}
    </div>
  </div>
</main>

<style>
  .container > * {
    width: 100%;
    max-width: 700px;
  }

  .header {
    color: white;
    background-size: cover;
    min-height: 25vw;
    padding-top: 2rem;
    justify-content: flex-end;
  }
</style>