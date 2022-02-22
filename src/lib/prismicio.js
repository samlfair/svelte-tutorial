import * as prismic from '@prismicio/client'

// Update your repository name here
const repositoryName = 'svelte-tutorial'

const createClient = (params) => {
  return prismic.createClient(repositoryName, params)
}

export default createClient
