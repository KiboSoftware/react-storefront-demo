import {cart} from '@kibocommerce/react-storefront-kibo-connector'

export default async function(req, res) {
  res.json(await cart(req, res))
}

export const config = {
  api: {
    bodyParser: true,
  },
}