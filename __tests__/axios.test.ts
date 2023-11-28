import axios, { AxiosResponse, AxiosError } from 'axios'
import { expect } from 'chai'

interface ErrorResponse {
  error: string
}

const baseURL = 'http://localhost:3000'
const instance = axios.create({ baseURL })

describe('Pruebas de integración simuladas', function () {
  it('debe manejar una respuesta simulada exitosa de /get', async function () {
    const response: AxiosResponse = await instance.get('/get')
    expect(response.status).to.equal(200)
    expect(response.data.message).to.equal('Simulación de obtención exitosa')
  })

  it('debe manejar una respuesta simulada de error 404 en /resource-not-found', async function () {
    try {
      await instance.get('/')
      expect.fail('La solicitud debería haber fallado con un error 404')
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>

      expect(axiosError.response?.status).to.equal(404)
      expect(axiosError.response?.data.error).to.equal('Recurso no encontrado')
    }
  })
})
