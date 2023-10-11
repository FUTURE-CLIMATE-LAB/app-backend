import { Schema, model, Document } from 'mongoose'

export interface IMessage extends Document {
  nombre: string
  body: string
}

const Message = new Schema({
  nombre: {
    type: String,
    required: true
  },

  body: {
    type: String,
    required: true
  }
})

export default model<IMessage>('Message', Message)
