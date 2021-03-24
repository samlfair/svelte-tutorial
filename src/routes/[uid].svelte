<!-- ~/src/routes/[uid].svelte -->

<script context="module">
  import Client from './../../utils/client'
  import PrismicDom from 'prismic-dom'

  export async function load({ page }) {
    const { uid } = page.params
    const document = await Client.getByUID('page',uid)
    return {
      props: {
        document,
        uid
      }
    };
  }
</script>

<script>
  import Nav from "./../lib/nav.svelte"
  export let document
</script>

<main>
	<div class="header container" style="background-image: url('{document.data.image.url}')">
		<div class="nav">
			<Nav />
		</div>
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
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0px 20px;
	}

	.container > * {
		width: 100%;
		max-width: 700px;
	}
  
	.header {
    color: white;
    text-shadow: 0px 1px 3px rgba(0,0,0,.8), 0px 0px 6px rgba(0,0,0,.8);
		background-size: cover;
		min-height: 25vw;
		justify-content: space-between;
	}
</style>