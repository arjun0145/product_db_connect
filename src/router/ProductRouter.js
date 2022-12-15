import express from "express";
import {
  Deletedatabyid,
  Fetchdata,
  FetchdatabyId,
  productControll,
  updateData,
} from "../controller/productControll.js";



const ProductRouter = express.Router();
ProductRouter.post("/product", productControll);
ProductRouter.get("/product", Fetchdata);
ProductRouter.get("/getproduct/:pid", FetchdatabyId);
ProductRouter.put("/updateProduct/:id", updateData);
ProductRouter.delete("/product/delete/:id", Deletedatabyid);

export default ProductRouter;
