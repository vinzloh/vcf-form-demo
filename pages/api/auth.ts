import type { NextApiRequest, NextApiResponse } from 'next'

let isAuthenticated = false

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    console.log(`POST req.body:`, req.body)
    isAuthenticated = req.body.isAuthenticated
    // Process a POST request
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    console.log(`POST isAuthenticated:`, isAuthenticated)
    res.end(JSON.stringify({ status: isAuthenticated }))
  } else {
    // Handle any other HTTP method
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    console.log(`ELSE isAuthenticated:`, isAuthenticated)
    res.end(JSON.stringify({ status: isAuthenticated }))
  }
}
