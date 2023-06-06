import mongoose from 'mongoose'
import app from './app'
import { database_url, port } from './config'
import { errorlogger, logger } from './shared/logger'

const dbConnection = async () => {
  try {
    // console.log(port);
    // console.log(database_url);
    // await mongoose.connect("mongodb://127.0.0.1:27017/university-management"); //local device connection
    await mongoose.connect(database_url as string) //connect mongodb atlas
    logger.info('Database Connected Successfully')
    app.listen(port, () => {
      logger.info(`Server running on port ${port}`)
    })
  } catch (error) {
    errorlogger.error('Failed to connected database', error)
  }
}

dbConnection()
