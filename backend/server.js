import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { router as userRoutes } from './routes/userRoutes.js'
import { router as budgetRoutes } from './routes/budgetRoutes.js'
import { errorHandler } from './middlewares/errorHandler.js'
import connectDB from './config/db.js'
const app = express()
dotenv.config()
connectDB()
const port = process.env.PORT ?? 5000

app.use(cors())
app.use(express.json())


app.use('/api/users', userRoutes)
app.use('/api/budgets', budgetRoutes)

app.use('/', (req, res) => {

    res.json(`Server running on ${port}`)

})
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Listening at port ${port}`)
})