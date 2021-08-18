import { getContent } from 'react-storefront-kibo-connector'

export default async function (req, res) {
    res.json(await getContent(req.body, req, res))
}

export const config = {
    api: {
        bodyParser: true,
    },
}