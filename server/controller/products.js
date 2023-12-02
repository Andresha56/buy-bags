

import { products } from "../model/productSchema.js";
import fs, { readFileSync } from "fs";
const data=JSON.parse(readFileSync("./products.json","utf-8"));



export const setData=(req,res)=>{
    console.log(req)
}
export const getData=(req,res)=>{
    res.send("hi")
}

