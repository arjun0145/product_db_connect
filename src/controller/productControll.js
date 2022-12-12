import { Productmodels } from "../model/productModel.js";

export async function productControll(req,res){

    try {

        const product = new Productmodels(req.body)
        const  saveproduct = await product.save()
        res.json(saveproduct)
        console.log(saveproduct);
        
    } catch (error) {

        console.log(" hamse na ho payega ")
        
    }

}
