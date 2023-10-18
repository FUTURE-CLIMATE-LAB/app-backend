import { Response, Request } from 'express'
import Message, { IMessage } from '../models/message'

export const createMessage = async (req: Request, res: Response): Promise<void> => {
  const { nombre, body }: IMessage = req.body

  const message = new Message({ nombre, body })

  await message.save()

  res.json(message)
}

export const messageList = async (_: Request, res: Response): Promise<void> => {
  try {
    const messages: IMessage[] = await Message.find()
    res.json(messages)
  } catch (error) {
    console.error('Error al buscar mensajes:', error)
    res.status(500).json({ error: 'Error interno del servidor' })
  }
}
