/* eslint-disable no-console */
import mongoose from 'mongoose'
import app from './app'
import { database_url, port } from './config'
import { errorlogger, logger } from './shared/logger'
import { Server } from 'http'

//Uncaught exception handle
process.on('uncaughtException', error => {
  // console.log('Uncaught Exception is detected, we are closing our server...')
  errorlogger.error(error)
  process.exit(1)
})

let server: Server

const dbConnection = async () => {
  try {
    // console.log(port);
    // console.log(database_url);
    // await mongoose.connect("mongodb://127.0.0.1:27017/university-management"); //local device connection
    await mongoose.connect(database_url as string) //connect mongodb atlas
    logger.info('😍 Database Connected Successfully')
    server = app.listen(port, () => {
      logger.info(`💕 Server running on port ${port}`)
    })
  } catch (error) {
    errorlogger.error('Failed to connected database', error)
  }

  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        errorlogger.error(error)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}

dbConnection()

process.on('SIGTERM', () => {
  logger.info('Sigterm is receive')
  if (server) {
    server.close()
  }
})
