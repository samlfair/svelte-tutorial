export function getContext({ headers }) {
  return {
    dog: 'cat',
  }
}

export function getSession({ context }) {
  console.log('updated')
  console.log({ context })
  return {}
}
