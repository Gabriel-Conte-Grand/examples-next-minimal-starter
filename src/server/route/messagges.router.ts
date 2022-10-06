import { createRouter } from '../createRouter'
import { z } from 'zod'
import { dbMessages } from '../../database'

export const messagesRouter = createRouter()
  .mutation('msg.add', {
    input: z.object({
      text: z.string(),
    }),
    async resolve({ ctx, input }) {
      const newMessage = await dbMessages.createMessage(input.text)

      return newMessage
    },
  })
  .query('msg.list', {
    async resolve({ ctx }) {
      const allMessages = await dbMessages.getAllMessages()

      return allMessages
    },
  })
