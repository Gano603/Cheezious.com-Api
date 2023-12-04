import { Schema, model } from "mongoose"



const orderModel = Schema({
    cart:{
        type:Object,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    time:{
        type:String,
        default:"Now",
    },
    address:{
        type:String,
        required:true,
    },
    comments:{
        type:String,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
})

export const order = model("Orders",orderModel);