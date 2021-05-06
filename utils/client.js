import Prismic from '@prismicio/client'
const apiEndpoint = 'https://svelte-tutorial.cdn.prismic.io/api/v2'
const Client = (previewCookie) =>
  Prismic.client(apiEndpoint, {
    req: {
      headers: {
        cookie: previewCookie,
      },
    },
  })

export default Client
