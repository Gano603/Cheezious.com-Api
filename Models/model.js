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
    comments:{
        type:String,
    }
})

export const order = model("Orders",orderModel);