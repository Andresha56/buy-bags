


import { error } from "console";
import { products } from "../model/productSchema.js";
import fs, { readFileSync } from "fs";
 

const data=fs.readFileSync("./data.json","utf-8");
const parseData=JSON.parse(data);


export const setData = async (req, res) => {
    try {
      await products.create({
        id: req.body.id,
        image: req.body.image,
        productName: req.body.productName,
        description: req.body.description,
        price: req.body.price,
        availability: req.body.availability, 
        similarImages: req.body.similarImages
      });
      res.send("success");
    } catch (error) {
      res.status(500).send("Error in creating the product: " + error.message);
    }
  };
  
export const getAllData=async(req,res)=>{
  try{
    const allproducts=await products.find({});
    res.json(allproducts)
  }catch(eroor){
    res.status(400).send(error)
  }
}
export const getDataById = async (req, res) => {
  try {
    const id = Number(req.params.id);
    console.log(typeof id);

    const product = await products.findOne({ id: id });
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(product);
  } catch (error) {
    res.status(500).send(error.message); 
    console.log(error);
  }
};
