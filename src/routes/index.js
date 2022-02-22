// ~/src/routes/index.js

import createClient from '$lib/prismicio'

export async function get({ fetch }) {
  const client = createClient({ fetch })
  const document = await client.getByUID('page', 'homepage')

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
