function (config, request, logger, callback) {
  const randomStatusCode = [200, 404, 500][Math.floor(Math.random() * 3)]
  let responseBody

  switch (randomStatusCode) {
    case 200:
      responseBody = { message: 'Respuesta exitosa' }
      break
    case 404:
      responseBody = { message: 'Recurso no encontrado' }
      break
    case 500:
      responseBody = { message: 'Error interno del servidor' }
      break
    default:
      responseBody = { message: 'Mensaje predeterminado' }
  }

  callback({
    statusCode: randomStatusCode,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(responseBody)
  })
}
