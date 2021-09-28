import { signUp } from '@kibocommerce/react-storefront-kibo-connector'

export default async function (req, res) {
    const data = req.body;
    res.json(await signUp(data, req, res))
}
