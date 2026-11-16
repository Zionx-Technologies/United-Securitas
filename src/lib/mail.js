import { contact } from '../data/site'

// Builds a mailto: link to the office inbox. Used until a form backend is connected.
export function mailto(subject, body = '') {
  const params = new URLSearchParams({ subject })
  if (body) params.set('body', body)
  return `mailto:${contact.email}?${params.toString().replace(/\+/g, '%20')}`
}
