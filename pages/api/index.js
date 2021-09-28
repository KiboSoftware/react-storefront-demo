import { home } from '@kibocommerce/react-storefront-kibo-connector'

export default async function (req, res) {
  res.json(await home(req, res))
}
