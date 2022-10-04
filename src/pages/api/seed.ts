import type { NextApiRequest, NextApiResponse } from 'next'
import { db, seedData } from '../../database'
import { Message } from '../../models'

type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await db.connect()

  await Message.deleteMany()
  await Message.insertMany(seedData.initialData)

  await db.disconnect()

  res.status(200).json({ message: 'Proceso realizado' })
}
