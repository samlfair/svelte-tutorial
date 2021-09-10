<script>
    import Prismic from '@prismicio/client'
    import {goto} from '$app/navigation'
    import {onMount} from "svelte"

    const linkResolver = (doc) => '/' + doc.uid 
    const apiEndpoint = 'https://svelte-tutorial.cdn.prismic.io/api/v2'
    const client = Prismic.client(apiEndpoint)

    onMount(async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get("token")
      const documentId = urlParams.get("documentId")
      const redirect = await client.getPreviewResolver(token, documentId).resolve(linkResolver, '/')
      await goto(redirect)
  })
</script>

<main>
  <div class="header container" >
    <h1>
      Loading preview...
    </h1>
  </div>
  <div class="container">
    <div class="text">
      
    </div>
  </div>
</main>

<style>  
  .header {
    color: white;
    text-shadow: 0px 1px 3px rgba(0,0,0,.8), 0px 0px 6px rgba(0,0,0,.8);
    background-size: cover;
    background-color: #eee;
    min-height: 25vw;
    justify-content: flex-end;
		padding-top: 2rem;
  }
</style>