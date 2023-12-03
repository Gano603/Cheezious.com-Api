import { Router } from "express";
import { deleteOrder, getAllOrders, live, newOrder } from "../Controllers/OrderControllers.js";


export const orderRouter = Router();

orderRouter.get('/',live)
orderRouter.post('/new',newOrder)
orderRouter.get('/get',getAllOrders)
orderRouter.delete('/delete/:id',deleteOrder)