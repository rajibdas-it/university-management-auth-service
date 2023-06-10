import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import userRoute from './app/modules/users/users.route'
import { globalErrorHandler } from './app/middlewares/globalErrorHandler'

const app: Application = express()

app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// basic routing
app.use('/api/v1/user/', userRoute)

// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   // throw new Error('Error khaisi')
//   next('Error Khaisi')
// })

//global error handler
app.use(globalErrorHandler)

export default app
