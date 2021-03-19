<script context="module">
	import Client from '../../utilities/client'
  import PrismicDom from 'prismic-dom'

  export async function load() {
    const document = await Client.getByUID('page','homepage')
    return {
      props: {
        document,
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

	h1 {
		color: white;
		text-shadow: 0px 1px 3px rgba(0,0,0,.8), 0px 0px 6px rgba(0,0,0,.8);
		font-size: 3rem;
	}

	.header {
		background-size: cover;
		min-height: 25vw;
		justify-content: space-between;
	}

	.text {
		padding: 2rem 0;
	}
</style>