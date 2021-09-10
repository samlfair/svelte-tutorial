export function getSession({ headers, query }) {
  console.log({ headers, query })
  const previewToken = query.get('token')
  const documentId = query.get('documentId')
  const { cookie } = headers
  return { cookie, previewToken, documentId }
}
