import { productSuggestions } from 'react-storefront-kibo-connector'

export default async function(req, res) {
  const { productId } = req.query
  res.json(await productSuggestions(productId, req, res))
}
