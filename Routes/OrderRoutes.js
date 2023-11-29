import { Router } from "express";


export const orderRouter = Router();

orderRouter.get('/',(req,res)=>{
    res.json({message:"Hello World"})
})