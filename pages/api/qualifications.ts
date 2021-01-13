import type { NextApiRequest, NextApiResponse } from 'next'
import { qualifications } from 'mocks'

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(req.method === 'GET' ? qualifications : [])
}
