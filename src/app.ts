import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import userRoute from './app/modules/users/users.route'

const app: Application = express()

app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// basic routing
app.use('/api/v1/user/', userRoute)

class ApiError extends Error {
  statusCode: number
  constructor(statusCode: number, message: string | undefined, stack = '') {
    super(message)
    this.statusCode = statusCode
    if (stack) {
      this.stack = stack
    } else {
      Error.captureStackTrace(this, this.constructor)
    }
  }
}

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  throw new Error('Error khaisi')
  //   next('Error Khaisi') //
})

//global error handler
app.use((err, req, res, next) => {
  if (err instanceof Error) {
    res.status(400).json({ error: err })
  } else {
    res.status(500).json({ error: 'Something went wrong' })
  }
})

export default app
