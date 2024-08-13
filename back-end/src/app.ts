import express from 'express'

import userRouter from './routes/user'

const app = express()

app.use(express.json())

app.use('/login', userRouter)

export default app