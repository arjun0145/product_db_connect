import express from 'express'
import { configureDb } from './src/config/productconfig.js';
import ProductRouter from './src/router/ProductRouter.js';


const app = express(); 
app.use(express.json())


app.use(ProductRouter)
configureDb()


app.listen(7800,()=>{
    console.log("7800 is running");
})

