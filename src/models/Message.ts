import mongoose, { Schema, model, Model } from 'mongoose'
import { IMessage } from '../interfaces/message'

const messageSchema = new Schema(
  {
    text: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

const Message: Model<IMessage> =
  mongoose.models.Message || model('Message', messageSchema)

export default Message
