// ~/src/routes/[uid]].js

import createClient from '$lib/prismicio'

export async function get({ fetch, params }) {
  const client = createClient({ fetch })
  const { uid } = params
  const document = await client.getByUID('page', uid)

  if (document)
    return {
      body: {
        document,
      },
    }

  return {
    status: 404,
  }
}
