import { order } from "../Models/model.js"



export const live = (req, res) => {

    res.json({ message: "Running" })

}


export const newOrder = async (req, res) => {

    const {cart,name,email,phone,comments,time,address} = req.body;
    const orderId = await order.create({ cart: cart ,name,email,phone,comments,time,address});

    if (orderId) {
        res.json({
            message: "Order created",
            order: orderId
        })
    }
    else {
        res.json({
            message: "No order created"
        })
    }

}

export const getAllOrders = async (req, res) => {

    const orders = await order.find()

    if (orders) {
        res.json({
            message: "All Orders",
            order: orders
        })
    }
    else {
        res.json({
            message: "No orders found"
        })
    }

}

export const deleteOrder = async (req, res) => {

    const { id } = req.params;
    const orderId = await order.findByIdAndDelete(id);

    if (orderId) {
        res.json({
            message: "Order Deleted",
            order: orderId
        })
    }
    else {
        res.json({
            message: "Order Not Found"
        })
    }

}