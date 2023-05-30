import express, { Application, Request, Response } from 'express'
import cors from 'cors'

const app: Application = express()

app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// basic routing
app.get('/createuser', (req: Request, res: Response) => {
  res.send('Link ok')
})
export default app
