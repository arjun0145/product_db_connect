import express from 'express'
import { Fetchdata, productControll } from '../controller/productControll.js'
const ProductRouter = express.Router(); 
ProductRouter.post('/product',productControll)
ProductRouter.get('/product',Fetchdata)
// ProductRouter.get('/getproduct:/id',Fetchdata)

export default ProductRouter; 