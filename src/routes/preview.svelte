<script context="module">
  import Prismic from '@prismicio/client'
  const apiEndpoint = 'https://svelte-tutorial.cdn.prismic.io/api/v2'
  const linkResolver = (doc) => '/' + doc.uid

  const client = Prismic.client(apiEndpoint)

  export async function load({session}) {
    const {previewToken, documentId} = session
    const url = await client.getPreviewResolver(previewToken, documentId).resolve(linkResolver, '/')
    return {
      redirect: url,
      status: 302
    }
  }

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