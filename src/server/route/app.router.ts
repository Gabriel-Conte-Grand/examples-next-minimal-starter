import { createRouter } from '../createRouter'
import { messagesRouter } from './messagges.router'

export const appRouter = createRouter().merge('messages.', messagesRouter)

export type AppRouter = typeof appRouter
