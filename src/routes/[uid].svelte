<!-- ~/src/routes/[uid].svelte -->

<script context="module">
  import Client from './../../utils/client'
  import PrismicDom from 'prismic-dom'
	import {browser} from "$app/env"

  export async function load({ page, session }) {
    const { uid } = page.params
		const { cookie } = session
    const document = browser
			? await Client(window.document.cookie).getByUID('page', uid )
			: await Client().getByUID('page', uid )
    return {
      props: {
        document,
        uid
      }
    };
  }
</script>

<script>
  export let document
</script>

<main>
	<div class="header container" style="background-image: url('{document.data.image.url}')">
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
		height: 100%;
		min-height: 25vw;
		justify-content: flex-end;
	}
</style>