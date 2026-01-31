import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDB from './configs/db.js'
import userRouter from './Routes/userRoutes.js'
import ownerRouter from './Routes/ownerRoutes.js'

// initialize Express App
const app = express()


// Connect Database
await connectDB();

//  Middleware
app.use(cors())
app.use(express.json())

app.get('/', (req, res)=> res.send('Server is running...'))
app.use('/api/user', userRouter)
app.use('/api/owner', ownerRouter)
 
const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=> console.log(`server runing on port:${PORT}`))