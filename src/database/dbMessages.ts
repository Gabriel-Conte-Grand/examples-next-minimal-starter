import { db } from '.'
import { IMessage } from '../interfaces/message'
import { Message } from '../models'

export const getAllMessages = async (): Promise<IMessage[] | null> => {
  await db.connect()

  const allMessages = Message.find().select('_id text createdAt').lean()
  await db.disconnect()

  if (!allMessages) {
    return null
  }

  return allMessages
}

export const createMessage = async (text: string) => {
  await db.connect()

  const newMessage = new Message({ text: text })

  await newMessage.save()
  await db.disconnect()

  return newMessage
}
