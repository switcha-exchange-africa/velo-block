// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next'
=======
import type {  NextApiResponse } from 'next'
>>>>>>> 9b79c471f093827d71df9903c0ac7ecdd43a3012

type Data = {
  name: string
}

export default function handler(
<<<<<<< HEAD
  req: NextApiRequest,
=======
  // req: NextApiRequest,
>>>>>>> 9b79c471f093827d71df9903c0ac7ecdd43a3012
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
