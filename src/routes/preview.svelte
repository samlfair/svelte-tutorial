<script type="module">
  import Prismic from '@prismicio/client'
  const apiEndpoint = 'https://svelte-tutorial.cdn.prismic.io/api/v2'
  const linkResolver = (doc) => '/' + doc.uid

  export function load({session}) {
    console.log(session)
  }

</script>