import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import MsgRoutes from './routes/msg.routes'
import swaggerConfig from '../swagger.json'

dotenv.config()

const app = express()

// Configuración de Swagger
const specs = swaggerJsdoc(swaggerConfig)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))

// Database
mongoose.connect(process.env.DB_URI ?? '', {
  authSource: 'admin'
})
  .then(() => console.log('Conectado a la base de datos'))
  .catch((error) => console.log(error))

// Configuración de Express
app.use(express.json())
app.use(cors())

// Rutas
app.use('/api/message', MsgRoutes)

export default app
