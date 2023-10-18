import app from '../src/app'
import request from 'supertest'
import { IMessage } from '../src/models/message'

describe('GET .../get', () => {
  const url = '/api/message/get'

  test('deberia responder con un codigo de estado de 200', async () => {
    const response = await request(app).get(url).send()
    expect(response.status).toBe(200)
  })

  test('deberia responder con un arreglo', async () => {
    const response = await request(app).get(url).send()
    expect(response.body).toBeInstanceOf(Array<IMessage>)
  })
})

describe('POST .../create', () => {
  const url = '/api/message/create'

  test('Deberia responder con un codigo de estado de 200', async () => {
    const response = await request(app).post(url).send({
      nombre: 'Isaias',
      body: 'Mensaje desde test'
    })
    expect(response.status).toBe(200)
  })
})
