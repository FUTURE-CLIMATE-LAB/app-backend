import app from './app'

const PORT = process.env.PORT

// Start server
app.listen(PORT, () => {
  console.log(`Servidor en el puerto ${PORT ?? 3000}`)
})
