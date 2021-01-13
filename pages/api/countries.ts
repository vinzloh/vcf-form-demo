import type { NextApiRequest, NextApiResponse } from 'next'
import { countries } from 'mocks'

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(req.method === 'GET' ? countries : [])
}
