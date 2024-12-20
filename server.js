import express from "express";
const app = express()
// import dotenv from 'dotenv'
// import cors from 'cors'
// app.use(cors())
// dotenv.config()
// app.use(express.json())
// import authRoutes from './routes/auth.routes.js'
// import ConnectDB from "./utilits/connectDB.js";

// const PORT = process.env.PORT || 3310
// const DB_URL = process.env.DB_URL

// ConnectDB(DB_URL)
const PORT = 1110

app.get('/ping', (req, res) => {
    res.send('Pong!')
})

// app.use('/user', authRoutes)

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`)
})
