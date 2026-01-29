import express from 'express'
import 'dotenv/config'
import cors from 'cors'

// initialize Express App
const app = express()


//  Middleware
app.use(cors())
app.use(express.json())

app.get('/', (req, res)=> res.send('Server is running...'))

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=> console.log(`server runing on port:${PORT}`))