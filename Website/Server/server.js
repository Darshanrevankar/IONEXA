import  express  from "express";
import dotenv from "dotenv";
import connectdb from "./database/conn.js";
import cors from 'cors'
import errorMiddleware from './middleware/errorMiddleware.js';
import authroute from './router/autoRoute.js'

const app = express()

dotenv.config()

app.use(express.json())
app.use(cors())
app.use("/api",authroute)

app.use(errorMiddleware)

connectdb()

const port = process.env.port || 3000

app.listen(port,()=>{
    console.log(`Server ${port}`)
})


