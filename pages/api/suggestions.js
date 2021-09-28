import { searchSuggestions } from '@kibocommerce/react-storefront-kibo-connector'

export default async function searchSuggestionsPage(req, res) {
  const { q } = req.query
  res.json(await searchSuggestions(q, req, res))
}
