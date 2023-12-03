import mongoose from "mongoose";

export const connectDB = () => (
    mongoose.connect(process.env.MONGO_URI,{dbName:"Cheezious-Data"}))
    .then(()=> console.log("Database Connected"))
    .catch((err)=> console.log("Database Error:",err))