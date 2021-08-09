import { session } from 'react-storefront-kibo-connector'

export default async function(req, res) {
  res.json(await session(req, res))
}
