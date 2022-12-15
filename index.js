import express from 'express'
import { configureDb } from './src/config/productconfig.js';
import ProductRouter from './src/router/ProductRouter.js';
import "dotenv/config"


const app = express(); 
app.use(express.json())


app.use(ProductRouter)
configureDb()


app.listen(process.env.PORT,()=>{
    console.log(`${process.env.PORT} is running successfully`);
})

