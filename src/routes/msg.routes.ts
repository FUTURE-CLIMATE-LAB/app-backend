import { Router } from 'express'
import asyncHandler from 'express-async-handler'

// Services
import * as MessageService from '../services/message.services'

const router = Router()

/**
 * @swagger
 * /api/message/create:
 *   post:
 *     summary: Crear un nuevo mensaje.
 *     tags:
 *       - Message
 *     requestBody:
 *       description: Datos del mensaje a crear.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MessageInput'
 *     responses:
 *       200:
 *         description: Éxito, devuelve el mensaje creado.
 *         content:
 *           application/json:
 *             example:
 *               nombre: "Ejemplo"
 *               body: "Contenido del mensaje"
 */
router.post('/create', asyncHandler(MessageService.createMessage))

/**
 * @swagger
 * /api/message/get:
 *   get:
 *     summary: Obtener la lista de mensajes.
 *     tags:
 *       - Message
 *     responses:
 *       200:
 *         description: Éxito, devuelve la lista de mensajes.
 *         content:
 *           application/json:
 *             example:
 *               - nombre: "Ejemplo1"
 *                 body: "Contenido del mensaje 1"
 *               - nombre: "Ejemplo2"
 *                 body: "Contenido del mensaje 2"
 */
router.get('/get', asyncHandler(MessageService.messageList))

export default router
