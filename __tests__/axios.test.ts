import axios from 'axios'
import { expect } from 'chai'

const baseURL = 'http://localhost:3000'

const instance = axios.create({ baseURL })

describe('Pruebas de integración simuladas', function () {
  it('debe manejar una respuesta simulada exitosa de /get', async function () {
    const response = await instance.get('/get')
    expect(response.status).to.equal(200)
    expect(response.data.message).to.equal('Simulación de obtención exitosa')
  })
})
