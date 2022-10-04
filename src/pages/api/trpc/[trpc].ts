/**
 * This is the API-handler of your app that contains all your API routes.
 * On a bigger app, you will probably want to split this file up into multiple files.
 */
import { initTRPC } from '@trpc/server'
import * as trpcNext from '@trpc/server/adapters/next'

import { z } from 'zod'
import { dbMessages } from '../../../database'

const t = initTRPC.create()

interface Message {
  text: string
}

const appRouter = t.router({
  addMessage: t.procedure
    .input(z.object({ text: z.string() }))
    .mutation(async (req) => {
      const message: Message = {
        text: req.input.text,
      }
      const newMessage = await dbMessages.createMessage(message.text)
      return newMessage
    }),
  getMessages: t.procedure.query(async () => {
    const allMessages = await dbMessages.getAllMessages()

    return { messages: allMessages }
  }),
  // postMessage: t.procedure.input(
  //   z.object({
  //     text: z.string().nullish(),
  //   })
  // ),
  // 💡 Tip: Try adding a new procedure here and see if you can use it in the client!
  // getUser: t.procedure.query(() => {
  //   return { id: '1', name: 'bob' };
  // }),
})

// export only the type definition of the API
// None of the actual implementation is exposed to the client
export type AppRouter = typeof appRouter

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
})
