import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    proid : {type:Number,required:true,unique:true},
    name:{type:String,required:true} ,
    disc:{type:String,required:true}
})


export const Productmodels = mongoose.model("product",productSchema)