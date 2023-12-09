import cookieParser from 'cookie-parser';
import {config} from 'dotenv'
import express from 'express'
import { orderRouter } from './Routes/OrderRoutes.js';
import cors from 'cors'


export const app = express();



config({
    path:'./Database/.env'
})

app.use(cors({
    origin:process.env.FRONT_END_URL,
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))
console.log(process.env.FRONT_END_URL)
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(express.json())



app.use('/order',orderRouter)