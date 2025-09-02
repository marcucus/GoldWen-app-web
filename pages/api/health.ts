import type { NextApiRequest, NextApiResponse } from 'next'
import { appService } from '../../lib/app-service'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  res.status(200).send(appService.getHello())
}