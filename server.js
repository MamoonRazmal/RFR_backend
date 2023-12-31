import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import authRoutes from './routes/authRoutes.js'
import cors from 'cors'

import morgan from 'morgan'
import dbs from "./config/dbs.js"
dotenv.config()
dbs()
const app=express();
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
//routes
app.use('/api/v1/auth',authRoutes)

//rest api

app.get('/',(req,res)=>{
    res.send({message:"welcome to ecommerce app"})
})
const port=process.env.PORT||8080
app.listen(port,()=>{
    console.log(`server running on ${process.env.DEV_MODE} ${port }`.bgCyan.white)
})