import { addToCart } from '@kibocommerce/react-storefront-kibo-connector'

async function handler(req, res) {
  const result = await addToCart(req.body, req, res)
  res.json(result)
}

export const config = {
  api: {
    bodyParser: true,
  },
}

export default handler
