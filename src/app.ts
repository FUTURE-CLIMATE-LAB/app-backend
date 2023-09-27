import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

// Routes
import MsgRoutes from './routes/msg.routes'
import mongoose from 'mongoose'
dotenv.config()

const app = express()

// database
mongoose.connect(process.env.DB_URI ?? '', {
  authSource: 'admin'
})
  .then(() => console.log('conectado'))
  .catch((error) => console.log(error))

// Config
app.use(express.json())
app.use(cors())

// Routes
app.use('/api/message', MsgRoutes)

export default app
