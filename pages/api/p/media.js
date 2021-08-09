export { productMedia } from 'react-storefront-kibo-connector'

export default async function(req, res) {
  const { productId, color } = req.query
  res.json(await productMedia({ id: productId, color }, req, res))
}
