import supertest from 'supertest'
import { expect } from 'chai'

const request = supertest('http://localhost:3000') // Puerto del impostor en Mountebank

describe('Pruebas de Integración con Mountebank', function () {
  it('debería realizar una solicitud POST exitosa a /create', async function () {
    const response = await request.post('/create')
    expect(response.status).to.equal(201)
    expect(response.body.message).to.equal('Simulación de creación exitosa')
  })

  it('debería realizar una solicitud GET exitosa a /get', async function () {
    const response = await request.get('/get')
    expect(response.status).to.equal(200)
    expect(response.body.message).to.equal('Simulación de obtención exitosa')
  })
})
