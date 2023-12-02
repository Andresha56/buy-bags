


import express from "express";
import { getData ,setData} from "../controller/products.js";
const apiRoute=express.Router();

apiRoute.post("/api/products/data",setData)
apiRoute.get("/api/products/bags",getData);

export default apiRoute;



