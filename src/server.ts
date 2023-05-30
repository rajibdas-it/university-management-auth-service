import mongoose from 'mongoose'
import app from './app'
import { database_url, port } from './config'

const dbConnection = async () => {
  try {
    // console.log(port);
    // console.log(database_url);
    // await mongoose.connect("mongodb://127.0.0.1:27017/university-management"); //local device connection
    await mongoose.connect(database_url as string) //connect mongodb atlas
    console.log('Database Connected Successfully')
    app.listen(port, () => {
      console.log(`Server running on port ${port}`)
    })
  } catch (error) {
    console.log('Failed to connected database', error)
  }
}

dbConnection()
