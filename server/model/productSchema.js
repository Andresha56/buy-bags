

import {mongoose} from "mongoose";

const productSchema=new mongoose.Schema({
    id:
    {
        type:String,
        unique:true,
        required:true,
    },
    image:
    {
        type:String,
        required:true,
    },
    bag_name:{
        type:String,
        required:true,
    },
    brand_name:{
        type:String,
        required:true, 
    },
    description:{
        type:String,
        required:true, 
    },price:{
        type:Number,
        required:true,   
    }
    ,rating:{
        type:Number,
    },
    color:{
        type:String,
    },
    similar_images:{
        type: [String],
    }
});


export const products=mongoose.model("buyBags",productSchema);
