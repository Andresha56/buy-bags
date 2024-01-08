


import express from "express";
import { getAllData ,setData , getDataById} from "../controller/products.js";
const apiRoute=express.Router();

apiRoute.post("/api/products/data",setData)
apiRoute.get("/api/get/products",getAllData)
apiRoute.get("/api/get/product/:id",getDataById)

export default apiRoute;



