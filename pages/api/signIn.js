import { signIn } from 'react-storefront-kibo-connector'

export default async function(req, res) {
  res.json(await signIn(req, res))
}
