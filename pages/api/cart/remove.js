import { removeCartItem } from '@kibocommerce/react-storefront-kibo-connector'

export default async function handler(req, res) {
  const { item } = req.body || {}
  res.json(await removeCartItem(item, req, res))
}

export const config = {
  api: {
    bodyParser: true,
  },
}
