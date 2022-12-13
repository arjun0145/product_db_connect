import express from 'express'
import { Fetchdata, FetchdatabyId, productControll } from '../controller/productControll.js'
const ProductRouter = express.Router(); 
ProductRouter.post('/product',productControll)
ProductRouter.get('/product',Fetchdata)
ProductRouter.get('/getproduct/:pid',FetchdatabyId)

export default ProductRouter; 