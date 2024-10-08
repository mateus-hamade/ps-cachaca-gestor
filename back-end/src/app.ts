import express from 'express'
import cors from 'cors'

import userRouter from './routes/user'

const app = express()

app.use(express.json())
app.use(cors())

app.use('/login', userRouter)

export default app