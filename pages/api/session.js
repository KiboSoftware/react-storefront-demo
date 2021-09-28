import { session } from '@kibocommerce/react-storefront-kibo-connector'

export default async function(req, res) {
  res.json(await session(req, res))
}
