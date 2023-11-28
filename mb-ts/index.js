const { mockServer } = require('http-mockserver')
const messages = require('./res.json')

const port = 7600
const uri = '/api/random'

const indiceAleatorio = (arr) => {
  return Math.floor(Math.random() * arr.length)
}

mockServer.addMock({
  port,
  method: 'GET',
  uri,
  handler: function (_req, res) {
    const response = messages[indiceAleatorio(messages)]
    res.status(response.code).json({
      code: response.code,
      ...response.content
    })
  }
})
