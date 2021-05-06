import Prismic from '@prismicio/client'
const apiEndpoint = 'https://svelte-tutorial.cdn.prismic.io/api/v2'

const linkResolver = (doc) => '/' + doc.uid

export async function get({ query, headers }) {
  console.log(headers)
  const req = { headers }
  const token = query.get('token')
  const documentId = query.get('documentId')
  const api = await Prismic.getApi(apiEndpoint, { req })
  const url = await api
    .getPreviewResolver(token, documentId)
    .resolve(linkResolver, '/')
  console.log(url)
  return {
    status: 302,
    headers: {
      location: url,
    },
    body: {},
  }
}
