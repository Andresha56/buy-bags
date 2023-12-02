
// ----imports----
import react from "react";
import express from "express";
import apiRoute from "./routes/routes.js";
import mongoose from "mongoose";



// -----server----
const app = express();

// ----db--connection---
mongoose.connect("mongodb://localhost:27017",{
    dbName:"handBags"
})

//middle-wares---
app.use(apiRoute);



app.listen(5000,console.log("server is running at port 5000....."));

