import express from 'express'
import { productControll } from '../controller/productControll.js'
const ProductRouter = express.Router(); 
ProductRouter.post('/product',productControll)


export default ProductRouter; 