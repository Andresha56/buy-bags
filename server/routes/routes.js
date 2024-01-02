


import express from "express";
import { getData ,setData} from "../controller/products.js";
const apiRoute=express.Router();

apiRoute.post("/api/products/data",setData)
apiRoute.get("/api/get/products",getData);

export default apiRoute;



