import express, { Application } from 'express'
import cors from 'cors'

import userRoute from './app/modules/users/users.route'

const app: Application = express()

app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// basic routing
app.use('/api/v1/user/', userRoute)
export default app
