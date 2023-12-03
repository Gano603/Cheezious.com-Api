import { Schema, model } from "mongoose"



const orderModel = Schema({
    cart:{
        type:Object,
        required:true,
    }
})

export const order = model("Orders",orderModel);