<!-- ~/src/routes/index.svelte -->

<script context="module">
  import Client from './../../utils/client'
  import PrismicDom from 'prismic-dom'
  import {browser} from "$app/env"


  export async function load({ page }) {
    const document = browser 
      ? await Client(window.document.cookie).getByUID('page','homepage')
      : await Client().getByUID('page','homepage')
    return {
      props: {
        document,
      }
    };
  }
</script>

<script>
  export let document
</script>

<main>
  <div class="header container" style="background-image: url('{document.data.image.url}')">
    <!-- <div class="nav">
      <Nav />
    </div> -->
    <h1>
      {document.data.title}
    </h1>
  </div>
  <div class="container">
    <div class="text">
      {@html PrismicDom.RichText.asHtml(document.data.content)}
    </div>
  </div>
</main>

<style>  
  .header {
    color: white;
    text-shadow: 0px 1px 3px rgba(0,0,0,.8), 0px 0px 6px rgba(0,0,0,.8);
    background-size: cover;
    min-height: 25vw;
    justify-content: flex-end;
		padding-top: 2rem;
  }
</style>