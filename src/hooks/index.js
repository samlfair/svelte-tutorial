export function getSession({ headers }) {
  const { cookie } = headers
  return { cookie }
}
