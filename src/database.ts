import mongoose, { ConnectOptions } from 'mongoose'

const dbUri = process.env.DB_URI ?? ''

const dbOptions: ConnectOptions = {
  useBigInt64: true
}

mongoose.connect(dbUri, dbOptions)
  .then(() => {
    console.log('Conectado a la base de datos')
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos', error)
  })

const connection = mongoose.connection

connection.once('open', () => {
  console.log('Mongodb connection')
})

connection.on('error', err => {
  console.log(err)
  process.exit(0)
})
