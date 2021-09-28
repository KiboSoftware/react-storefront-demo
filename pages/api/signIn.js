import { signIn } from '@kibocommerce/react-storefront-kibo-connector'

export default async function (req, res) {
  res.json(await signIn(req, res))
}

export const config = {
  api: {
    bodyParser: true,
  },
}
