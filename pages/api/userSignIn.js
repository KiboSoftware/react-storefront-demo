import { userSignIn } from 'react-storefront-kibo-connector'

export default async function (req, res) {
  res.json(await userSignIn(req, res))
}