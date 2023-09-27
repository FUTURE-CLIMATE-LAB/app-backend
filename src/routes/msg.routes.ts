import { Router } from 'express'
import asyncHandler from 'express-async-handler'

// Services
import * as MessageService from '../services/message.services'

const router = Router()

router.post('/create', asyncHandler(MessageService.createMessage))
router.get('/get', asyncHandler(MessageService.messageList))

export default router
